<?php

namespace App\Services\Risk;

use App\Enums\RiskControlStatus;
use App\Enums\RiskLevel;
use App\Enums\RiskReviewConclusion;
use App\Enums\RiskReviewTrigger;
use App\Enums\RiskStatus;
use App\Enums\RiskTreatmentStrategy;
use App\Models\Problem;
use App\Models\Risk;
use App\Models\RiskControl;
use App\Models\RiskReview;
use App\Models\Setting;
use App\Models\User;
use RuntimeException;

class RiskWorkflowService
{
    public function create(array $data, User $user): Risk
    {
        $score = $data['initial_probability'] * $data['initial_impact'];

        return Risk::create([
            ...$data,
            'identified_by_id' => $data['identified_by_id'] ?? $user->id,
            'initial_score' => $score,
            'initial_level' => $this->levelForScore($score),
            'status' => RiskStatus::Identified,
        ]);
    }

    public function update(Risk $risk, array $data): Risk
    {
        if (isset($data['initial_probability'], $data['initial_impact'])) {
            $score = $data['initial_probability'] * $data['initial_impact'];
            $data['initial_score'] = $score;
            $data['initial_level'] = $this->levelForScore($score);
        }

        $risk->update($data);

        return $risk;
    }

    public function addControl(Risk $risk, array $data): RiskControl
    {
        $control = $risk->controls()->create([
            ...$data,
            'status' => $data['status'] ?? RiskControlStatus::Planned,
        ]);

        if (in_array($risk->status, [RiskStatus::Identified, RiskStatus::UnderAnalysis], true)) {
            $risk->update(['status' => RiskStatus::TreatmentPlanned]);
        }

        return $control;
    }

    public function updateControl(RiskControl $control, array $data): RiskControl
    {
        if (($data['status'] ?? null) === RiskControlStatus::Completed->value && $control->status !== RiskControlStatus::Completed) {
            $data['completed_at'] = now();
        }

        $control->update($data);

        $risk = $control->risk;
        if ($control->status === RiskControlStatus::InProgress && $risk->status === RiskStatus::TreatmentPlanned) {
            $risk->update(['status' => RiskStatus::TreatmentInProgress]);
        }

        return $control;
    }

    public function deleteControl(RiskControl $control): void
    {
        $control->delete();
    }

    /**
     * A scheduled or manually initiated reassessment, completed in a single
     * step: the reviewer submits the fresh probability/impact reading and
     * their judgement (adequate controls? conclusion?) all at once.
     */
    public function addReview(Risk $risk, array $data, User $user): RiskReview
    {
        $score = $data['probability'] * $data['impact'];

        $review = $risk->reviews()->create([
            ...$data,
            'review_date' => $data['review_date'] ?? now()->toDateString(),
            'reviewed_by_id' => $user->id,
            'trigger' => $data['trigger'] ?? RiskReviewTrigger::Manual,
            'score' => $score,
            'level' => $this->levelForScore($score),
        ]);

        $this->applyReviewOutcome($risk, $review);

        return $review;
    }

    /**
     * Called when a Problem is raised with source_type=risk_realization
     * against this risk: the risk foresaw this outcome, treated it, and it
     * happened anyway. This does not judge the controls by itself — it opens
     * a pending review (probability/impact/conclusion left blank) so a human
     * records whether the existing controls were inadequate or the outcome
     * was an accepted possibility all along. Controlled by the
     * risk_review_required_on_realization module setting.
     */
    public function registerRealization(Risk $risk, Problem $problem): ?RiskReview
    {
        if (! $this->reviewRequiredOnRealization()) {
            return null;
        }

        $review = $risk->reviews()->create([
            'review_date' => now()->toDateString(),
            'trigger' => RiskReviewTrigger::RiskRealized,
            'linked_problem_id' => $problem->id,
        ]);

        $risk->update(['status' => RiskStatus::ReviewRequired]);

        return $review;
    }

    /**
     * Completes a pending review (typically one auto-opened by
     * registerRealization) with the reviewer's judgement.
     */
    public function completeReview(RiskReview $review, array $data, User $user): RiskReview
    {
        if (! $review->isPending()) {
            throw new RuntimeException('Bu gözden geçirme zaten tamamlanmış.');
        }

        $score = $data['probability'] * $data['impact'];

        $review->update([
            ...$data,
            'reviewed_by_id' => $user->id,
            'score' => $score,
            'level' => $this->levelForScore($score),
        ]);

        $this->applyReviewOutcome($review->risk, $review);

        return $review;
    }

    public function close(Risk $risk): Risk
    {
        if ($risk->status === RiskStatus::ReviewRequired) {
            throw new RuntimeException('Bekleyen bir gözden geçirme varken risk kapatılamaz.');
        }

        $risk->update([
            'status' => RiskStatus::Closed,
            'closed_at' => now(),
        ]);

        return $risk;
    }

    public function levelForScore(int $score): RiskLevel
    {
        $thresholds = json_decode(
            Setting::where('code', 'risk_score_thresholds')->value('value') ?? '{}',
            true
        );

        return RiskLevel::forScore(
            $score,
            $thresholds['medium'] ?? 6,
            $thresholds['high'] ?? 12,
            $thresholds['critical'] ?? 20,
        );
    }

    private function reviewRequiredOnRealization(): bool
    {
        return (bool) json_decode(
            Setting::where('code', 'risk_review_required_on_realization')->value('value') ?? 'true'
        );
    }

    /**
     * A completed review's probability/impact reading becomes the risk's
     * current (residual) state, and its conclusion decides where the risk's
     * lifecycle goes next: reinforcement sends it back into treatment,
     * reclassification back into analysis, and everything else settles into
     * routine monitoring.
     */
    private function applyReviewOutcome(Risk $risk, RiskReview $review): void
    {
        $risk->update([
            'residual_probability' => $review->probability,
            'residual_impact' => $review->impact,
            'residual_score' => $review->score,
            'residual_level' => $review->level,
            'status' => match ($review->conclusion) {
                RiskReviewConclusion::ControlsReinforced => RiskStatus::TreatmentInProgress,
                RiskReviewConclusion::RiskReclassified => RiskStatus::UnderAnalysis,
                default => RiskStatus::Monitoring,
            },
        ]);
    }
}
