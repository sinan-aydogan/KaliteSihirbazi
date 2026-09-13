<?php

namespace App\Services\ContinuousImprovement;

use App\Enums\ImprovementFindingStatus;
use App\Models\ContinuousImprovement\FiveSAudit;
use App\Models\ContinuousImprovement\FiveSAuditFinding;

class FiveSAuditService
{
    public function create(array $data): FiveSAudit
    {
        return FiveSAudit::create($data);
    }

    public function update(FiveSAudit $audit, array $data): FiveSAudit
    {
        $audit->update($data);

        return $audit;
    }

    public function addFinding(FiveSAudit $audit, array $data): FiveSAuditFinding
    {
        return $audit->findings()->create($data);
    }

    public function updateFinding(FiveSAuditFinding $finding, array $data): FiveSAuditFinding
    {
        $finding->update($data);

        return $finding;
    }

    public function resolveFinding(FiveSAuditFinding $finding, array $data): FiveSAuditFinding
    {
        $finding->update([
            ...$data,
            'status' => ImprovementFindingStatus::Resolved,
            'resolved_at' => now()->toDateString(),
        ]);

        return $finding;
    }

    public function deleteFinding(FiveSAuditFinding $finding): void
    {
        $finding->delete();
    }
}
