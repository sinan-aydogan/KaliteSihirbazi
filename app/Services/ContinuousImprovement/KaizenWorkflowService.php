<?php

namespace App\Services\ContinuousImprovement;

use App\Enums\KaizenSuggestionStatus;
use App\Models\ContinuousImprovement\KaizenSuggestion;
use App\Models\User;
use RuntimeException;

class KaizenWorkflowService
{
    public function create(array $data, User $author): KaizenSuggestion
    {
        return KaizenSuggestion::create([
            ...$data,
            'proposed_by_id' => $author->id,
            'status' => KaizenSuggestionStatus::Submitted,
        ]);
    }

    public function update(KaizenSuggestion $suggestion, array $data): KaizenSuggestion
    {
        $suggestion->update($data);

        return $suggestion;
    }

    public function markUnderReview(KaizenSuggestion $suggestion): KaizenSuggestion
    {
        $this->assertStatus($suggestion, [KaizenSuggestionStatus::Submitted]);

        $suggestion->update(['status' => KaizenSuggestionStatus::UnderReview]);

        return $suggestion;
    }

    public function approve(KaizenSuggestion $suggestion, array $data, User $evaluator): KaizenSuggestion
    {
        $this->assertStatus($suggestion, [KaizenSuggestionStatus::Submitted, KaizenSuggestionStatus::UnderReview]);

        $suggestion->update([
            ...$data,
            'status' => KaizenSuggestionStatus::Approved,
            'evaluated_by_id' => $evaluator->id,
            'evaluated_at' => now()->toDateString(),
        ]);

        return $suggestion;
    }

    public function reject(KaizenSuggestion $suggestion, array $data, User $evaluator): KaizenSuggestion
    {
        $this->assertStatus($suggestion, [KaizenSuggestionStatus::Submitted, KaizenSuggestionStatus::UnderReview]);

        $suggestion->update([
            ...$data,
            'status' => KaizenSuggestionStatus::Rejected,
            'evaluated_by_id' => $evaluator->id,
            'evaluated_at' => now()->toDateString(),
        ]);

        return $suggestion;
    }

    public function start(KaizenSuggestion $suggestion, array $data): KaizenSuggestion
    {
        $this->assertStatus($suggestion, [KaizenSuggestionStatus::Approved]);

        $suggestion->update([
            ...$data,
            'status' => KaizenSuggestionStatus::InProgress,
        ]);

        return $suggestion;
    }

    public function implement(KaizenSuggestion $suggestion, array $data): KaizenSuggestion
    {
        $this->assertStatus($suggestion, [KaizenSuggestionStatus::InProgress]);

        $suggestion->update([
            ...$data,
            'status' => KaizenSuggestionStatus::Implemented,
            'completed_at' => now()->toDateString(),
        ]);

        return $suggestion;
    }

    public function close(KaizenSuggestion $suggestion): KaizenSuggestion
    {
        $this->assertStatus($suggestion, [KaizenSuggestionStatus::Implemented]);

        $suggestion->update(['status' => KaizenSuggestionStatus::Closed]);

        return $suggestion;
    }

    private function assertStatus(KaizenSuggestion $suggestion, array $allowed): void
    {
        if (! in_array($suggestion->status, $allowed, true)) {
            throw new RuntimeException(sprintf(
                'Bu işlem, öneri "%s" durumundayken yapılamaz.',
                $suggestion->status->label(),
            ));
        }
    }
}
