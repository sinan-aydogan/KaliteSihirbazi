<?php

namespace App\Services\Problem;

use App\Enums\ProblemStatus;
use App\Models\Problem;
use App\Models\User;
use RuntimeException;

class ProblemWorkflowService
{
    public function create(array $data, User $author): Problem
    {
        return Problem::create([
            ...$data,
            'status' => ProblemStatus::Open,
            'detected_by_id' => $author->id,
        ]);
    }

    public function update(Problem $problem, array $data): Problem
    {
        $problem->update($data);

        return $problem;
    }

    /**
     * The "correction" — a containment action taken right when the
     * nonconformity is detected, independent of and prior to any root-cause
     * analysis/CAPA. Not status-gated: it can be recorded or amended at any
     * point in the problem's lifecycle since it documents what actually
     * happened, not a workflow transition.
     */
    public function recordImmediateAction(Problem $problem, string $immediateAction, User $author): Problem
    {
        $problem->update([
            'immediate_action' => $immediateAction,
            'immediate_action_at' => now(),
            'immediate_action_by_id' => $author->id,
        ]);

        return $problem;
    }

    public function markUnderReview(Problem $problem): Problem
    {
        $this->assertStatus($problem, [ProblemStatus::Open]);

        $problem->update(['status' => ProblemStatus::UnderReview]);

        return $problem;
    }

    /**
     * Called when a CAPA is raised against this problem. Idempotent: a
     * problem may have more than one CAPA raised against it over time, so a
     * problem already in the capa_raised state is left as-is rather than
     * treated as an invalid transition.
     */
    public function markCapaRaised(Problem $problem): Problem
    {
        if (in_array($problem->status, [ProblemStatus::Open, ProblemStatus::UnderReview], true)) {
            $problem->update(['status' => ProblemStatus::CapaRaised]);
        }

        return $problem;
    }

    public function closeWithoutCapa(Problem $problem): Problem
    {
        $this->assertStatus($problem, [ProblemStatus::Open, ProblemStatus::UnderReview]);

        $problem->update([
            'status' => ProblemStatus::ClosedWithoutCapa,
            'closed_at' => now(),
        ]);

        return $problem;
    }

    /**
     * Closing a problem that raised CAPAs requires every one of them to
     * already be closed (effective or ineffective) — the nonconformity
     * can't be considered resolved while corrective work is still open.
     */
    public function close(Problem $problem): Problem
    {
        $this->assertStatus($problem, [ProblemStatus::CapaRaised]);

        if ($problem->capas()->whereNotIn('status', ['closed_effective', 'closed_ineffective'])->exists()) {
            throw new RuntimeException('Bu uygunsuzluğa bağlı tüm DÖF kayıtları kapatılmadan uygunsuzluk kapatılamaz.');
        }

        $problem->update([
            'status' => ProblemStatus::Closed,
            'closed_at' => now(),
        ]);

        return $problem;
    }

    private function assertStatus(Problem $problem, array $allowed): void
    {
        if (! in_array($problem->status, $allowed, true)) {
            throw new RuntimeException(sprintf(
                'Bu işlem, uygunsuzluk "%s" durumundayken yapılamaz.',
                $problem->status->label(),
            ));
        }
    }
}
