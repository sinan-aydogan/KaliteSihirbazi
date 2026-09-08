<?php

namespace App\Services\Audit;

use App\Enums\AuditStatus;
use App\Models\Audit;
use App\Models\User;
use RuntimeException;

class AuditWorkflowService
{
    public function create(array $data, User $user): Audit
    {
        return Audit::create([
            ...$data,
            'auditor_id' => $data['auditor_id'] ?? $user->id,
            'status' => AuditStatus::Planned,
        ]);
    }

    public function update(Audit $audit, array $data): Audit
    {
        $audit->update($data);

        return $audit;
    }

    public function start(Audit $audit): Audit
    {
        $this->assertStatus($audit, AuditStatus::Planned);

        $audit->update([
            'status' => AuditStatus::InProgress,
            'actual_date' => $audit->actual_date ?? now(),
        ]);

        return $audit;
    }

    public function complete(Audit $audit, array $data): Audit
    {
        $this->assertStatus($audit, AuditStatus::InProgress);

        $audit->update([
            'status' => AuditStatus::Completed,
            'result' => $data['result'],
            'report_notes' => $data['report_notes'] ?? null,
            'closed_at' => now(),
        ]);

        return $audit;
    }

    public function cancel(Audit $audit): Audit
    {
        if ($audit->status->isClosed()) {
            throw new RuntimeException("Denetim zaten {$audit->status->label()} durumunda, iptal edilemez.");
        }

        $audit->update([
            'status' => AuditStatus::Cancelled,
            'closed_at' => now(),
        ]);

        return $audit;
    }

    private function assertStatus(Audit $audit, AuditStatus $expected): void
    {
        if ($audit->status !== $expected) {
            throw new RuntimeException("Bu işlem için denetimin {$expected->label()} durumunda olması gerekiyor, mevcut durum: {$audit->status->label()}.");
        }
    }
}
