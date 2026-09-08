<?php

namespace App\Services\Audit;

use App\Enums\AuditStatus;
use App\Models\Audit;
use App\Models\AuditChecklistTemplate;
use App\Models\User;
use RuntimeException;

class AuditWorkflowService
{
    public function create(array $data, User $user): Audit
    {
        $scopeIds = $data['scope_ids'] ?? [];
        $firmAuditorIds = $data['firm_auditor_ids'] ?? [];
        $checklistTemplateId = $data['checklist_template_id'] ?? null;
        unset($data['scope_ids'], $data['firm_auditor_ids'], $data['checklist_template_id']);

        $audit = Audit::create([
            ...$data,
            'auditor_id' => $data['auditor_id'] ?? $user->id,
            'status' => AuditStatus::Planned,
        ]);

        $audit->scopes()->sync($scopeIds);
        $audit->firmAuditors()->sync($firmAuditorIds);

        if ($checklistTemplateId) {
            $this->attachChecklist($audit, AuditChecklistTemplate::findOrFail($checklistTemplateId));
        }

        return $audit;
    }

    public function update(Audit $audit, array $data): Audit
    {
        $scopeIds = $data['scope_ids'] ?? null;
        $firmAuditorIds = $data['firm_auditor_ids'] ?? null;
        unset($data['scope_ids'], $data['firm_auditor_ids']);

        $audit->update($data);

        if ($scopeIds !== null) {
            $audit->scopes()->sync($scopeIds);
        }
        if ($firmAuditorIds !== null) {
            $audit->firmAuditors()->sync($firmAuditorIds);
        }

        return $audit;
    }

    public function attachChecklist(Audit $audit, AuditChecklistTemplate $template): Audit
    {
        $checklist = $audit->checklists()->create([
            'audit_checklist_template_id' => $template->id,
        ]);

        foreach ($template->questions as $question) {
            $checklist->answers()->create([
                'audit_checklist_question_id' => $question->id,
            ]);
        }

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
