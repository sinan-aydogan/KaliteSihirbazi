<?php

namespace App\Services\Audit;

use App\Models\AuditChecklistAnswer;
use App\Models\User;

class AuditChecklistService
{
    public function answer(AuditChecklistAnswer $answer, array $data, User $user): AuditChecklistAnswer
    {
        $answer->update([
            'answer' => $data['answer'],
            'notes' => $data['notes'] ?? null,
            'answered_by_id' => $user->id,
            'answered_at' => now(),
        ]);

        return $answer;
    }
}
