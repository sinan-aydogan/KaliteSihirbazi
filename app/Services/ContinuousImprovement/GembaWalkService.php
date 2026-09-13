<?php

namespace App\Services\ContinuousImprovement;

use App\Enums\ImprovementFindingStatus;
use App\Models\ContinuousImprovement\GembaWalk;
use App\Models\ContinuousImprovement\GembaWalkFinding;

class GembaWalkService
{
    public function create(array $data): GembaWalk
    {
        return GembaWalk::create($data);
    }

    public function update(GembaWalk $walk, array $data): GembaWalk
    {
        $walk->update($data);

        return $walk;
    }

    public function addFinding(GembaWalk $walk, array $data): GembaWalkFinding
    {
        return $walk->findings()->create($data);
    }

    public function updateFinding(GembaWalkFinding $finding, array $data): GembaWalkFinding
    {
        $finding->update($data);

        return $finding;
    }

    public function resolveFinding(GembaWalkFinding $finding, array $data): GembaWalkFinding
    {
        $finding->update([
            ...$data,
            'status' => ImprovementFindingStatus::Resolved,
            'resolved_at' => now()->toDateString(),
        ]);

        return $finding;
    }

    public function deleteFinding(GembaWalkFinding $finding): void
    {
        $finding->delete();
    }
}
