<?php

namespace App\Services\Audit;

use App\Models\AuditChecklistAnswer;
use App\Models\User;
use Illuminate\Http\UploadedFile;

class AuditChecklistService
{
    public function answer(AuditChecklistAnswer $answer, array $data, User $user, array $evidenceFiles = []): AuditChecklistAnswer
    {
        $answer->update([
            'answer' => $data['answer'] ?? null,
            'value' => $data['value'] ?? null,
            'notes' => $data['notes'] ?? null,
            'answered_by_id' => $user->id,
            'answered_at' => now(),
        ]);

        foreach ($evidenceFiles as $file) {
            if ($file instanceof UploadedFile) {
                $answer->addMedia($file)->toMediaCollection('evidence');
            }
        }

        return $answer;
    }
}
