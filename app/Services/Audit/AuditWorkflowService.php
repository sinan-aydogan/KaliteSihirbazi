<?php

namespace App\Services\Audit;

use App\Enums\AuditStatus;
use App\Models\Audit;
use App\Models\AuditChecklistTemplate;
use App\Models\Setting;
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

    /**
     * Soft, non-blocking check: if the "external audits require a recent internal
     * audit first" setting is on, and this is an external audit with no recently
     * completed internal audit covering an overlapping scope, return a warning
     * message to surface to the user. Never prevents creation.
     */
    public function checkInternalPrerequisiteWarning(Audit $audit): ?string
    {
        $audit->loadMissing('auditType', 'scopes');

        if ($audit->auditType?->direction !== 'external') {
            return null;
        }

        $requiresInternalFirst = json_decode(
            Setting::where('code', 'audit_external_requires_internal_first')->value('value') ?? 'false'
        );

        if (! $requiresInternalFirst) {
            return null;
        }

        $scopeIds = $audit->scopes->pluck('id');
        if ($scopeIds->isEmpty()) {
            return null;
        }

        $windowDays = (int) json_decode(
            Setting::where('code', 'audit_internal_prerequisite_window_days')->value('value') ?? '365'
        );

        $hasRecentInternalAudit = Audit::whereHas('auditType', fn ($q) => $q->where('direction', 'internal'))
            ->where('status', AuditStatus::Completed)
            ->where('closed_at', '>=', now()->subDays($windowDays))
            ->whereHas('scopes', fn ($q) => $q->whereIn('audit_scopes.id', $scopeIds))
            ->exists();

        if ($hasRecentInternalAudit) {
            return null;
        }

        return 'Bu kapsamda son '.$windowDays.' gün içinde tamamlanmış bir iç denetim bulunamadı. Dış denetim öncesi iç denetim yapılması önerilir.';
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
