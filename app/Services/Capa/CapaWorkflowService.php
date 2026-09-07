<?php

namespace App\Services\Capa;

use App\Enums\CapaActionStatus;
use App\Enums\CapaStatus;
use App\Models\Capa;
use App\Models\CapaAction;
use App\Models\CapaVerification;
use App\Models\User;
use App\Services\Problem\ProblemWorkflowService;
use RuntimeException;

class CapaWorkflowService
{
    public function __construct(private readonly ProblemWorkflowService $problemWorkflowService)
    {
    }

    public function create(array $data, User $author): Capa
    {
        $capa = Capa::create([
            ...$data,
            'status' => CapaStatus::Open,
            'opened_by_id' => $author->id,
        ]);

        if ($capa->problem_id) {
            $this->problemWorkflowService->markCapaRaised($capa->problem);
        }

        return $capa;
    }

    /**
     * Adding the first action plan item moves a freshly opened CAPA into
     * the "action_plan" state.
     */
    public function addAction(Capa $capa, array $data): CapaAction
    {
        $action = $capa->actions()->create([
            ...$data,
            'status' => CapaActionStatus::Pending,
        ]);

        if ($capa->status === CapaStatus::Open) {
            $capa->update(['status' => CapaStatus::ActionPlan]);
        }

        return $action;
    }

    public function updateAction(CapaAction $action, array $data): CapaAction
    {
        $action->update($data);

        return $action;
    }

    /**
     * Starting the first action moves the CAPA from planning into execution.
     */
    public function startAction(CapaAction $action): CapaAction
    {
        $this->assertActionStatus($action, [CapaActionStatus::Pending]);

        $action->update(['status' => CapaActionStatus::InProgress]);

        if ($action->capa->status === CapaStatus::ActionPlan) {
            $action->capa->update(['status' => CapaStatus::InProgress]);
        }

        return $action;
    }

    public function completeAction(CapaAction $action): CapaAction
    {
        $this->assertActionStatus($action, [CapaActionStatus::Pending, CapaActionStatus::InProgress]);

        $action->update([
            'status' => CapaActionStatus::Done,
            'completed_at' => now(),
        ]);

        return $action;
    }

    public function deleteAction(CapaAction $action): void
    {
        $action->delete();
    }

    /**
     * Move a CAPA whose action plan is fully executed into verification.
     */
    public function submitForVerification(Capa $capa): Capa
    {
        $this->assertCapaStatus($capa, [CapaStatus::InProgress]);

        if ($capa->actions()->count() === 0) {
            throw new RuntimeException('Doğrulamaya gönderilmeden önce en az bir aksiyon tanımlanmalıdır.');
        }

        if ($capa->actions()->where('status', '!=', CapaActionStatus::Done->value)->exists()) {
            throw new RuntimeException('Tüm aksiyonlar tamamlanmadan DÖF doğrulamaya gönderilemez.');
        }

        $capa->update(['status' => CapaStatus::PendingVerification]);

        return $capa;
    }

    /**
     * Record the effectiveness check and close the CAPA accordingly.
     */
    public function verify(Capa $capa, User $verifier, bool $isEffective, ?string $notes): CapaVerification
    {
        $this->assertCapaStatus($capa, [CapaStatus::PendingVerification]);

        $verification = $capa->verifications()->create([
            'verified_by_id' => $verifier->id,
            'verification_date' => now(),
            'is_effective' => $isEffective,
            'notes' => $notes,
        ]);

        $capa->update([
            'status' => $isEffective ? CapaStatus::ClosedEffective : CapaStatus::ClosedIneffective,
            'closed_at' => now(),
        ]);

        return $verification;
    }

    /**
     * An ineffective closure isn't a dead end — it reopens the CAPA into a
     * new execution cycle rather than requiring a brand new record.
     */
    public function reopen(Capa $capa): Capa
    {
        $this->assertCapaStatus($capa, [CapaStatus::ClosedIneffective]);

        $capa->update([
            'status' => CapaStatus::InProgress,
            'closed_at' => null,
        ]);

        return $capa;
    }

    private function assertCapaStatus(Capa $capa, array $allowed): void
    {
        if (! in_array($capa->status, $allowed, true)) {
            throw new RuntimeException(sprintf(
                'Bu işlem, DÖF "%s" durumundayken yapılamaz.',
                $capa->status->label(),
            ));
        }
    }

    private function assertActionStatus(CapaAction $action, array $allowed): void
    {
        if (! in_array($action->status, $allowed, true)) {
            throw new RuntimeException(sprintf(
                'Bu işlem, aksiyon "%s" durumundayken yapılamaz.',
                $action->status->label(),
            ));
        }
    }
}
