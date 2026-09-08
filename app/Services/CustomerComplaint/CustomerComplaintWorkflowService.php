<?php

namespace App\Services\CustomerComplaint;

use App\Enums\CustomerComplaintStatus;
use App\Models\CustomerComplaint;
use App\Models\Problem;
use App\Models\Setting;
use App\Models\User;
use Carbon\Carbon;
use RuntimeException;

class CustomerComplaintWorkflowService
{
    public function create(array $data, User $author): CustomerComplaint
    {
        $receivedDate = $data['received_date'] ?? now()->toDateString();

        return CustomerComplaint::create([
            ...$data,
            'received_date' => $receivedDate,
            'response_due_date' => $data['response_due_date']
                ?? Carbon::parse($receivedDate)->addDays($this->responseSlaDays())->toDateString(),
            'status' => CustomerComplaintStatus::Received,
            'reported_by_id' => $author->id,
        ]);
    }

    public function update(CustomerComplaint $complaint, array $data): CustomerComplaint
    {
        $complaint->update($data);

        return $complaint;
    }

    public function acknowledge(CustomerComplaint $complaint): CustomerComplaint
    {
        $this->assertStatus($complaint, [CustomerComplaintStatus::Received]);

        $complaint->update([
            'status' => CustomerComplaintStatus::UnderInvestigation,
            'first_response_at' => now(),
        ]);

        return $complaint;
    }

    /**
     * Called when a root-cause Problem is raised against this complaint.
     * Idempotent: a complaint may end up with more than one linked Problem,
     * so a complaint already under investigation is left as-is rather than
     * treated as an invalid transition.
     */
    public function linkProblem(CustomerComplaint $complaint, Problem $problem): void
    {
        if ($complaint->status === CustomerComplaintStatus::Received) {
            $complaint->update([
                'status' => CustomerComplaintStatus::UnderInvestigation,
                'first_response_at' => $complaint->first_response_at ?? now(),
            ]);
        }
    }

    public function resolve(CustomerComplaint $complaint, array $data): CustomerComplaint
    {
        $this->assertStatus($complaint, [CustomerComplaintStatus::Received, CustomerComplaintStatus::UnderInvestigation, CustomerComplaintStatus::Reopened]);

        $complaint->update([
            'resolution_summary' => $data['resolution_summary'],
            'status' => CustomerComplaintStatus::Resolved,
        ]);

        return $complaint;
    }

    public function close(CustomerComplaint $complaint, array $data): CustomerComplaint
    {
        $this->assertStatus($complaint, [CustomerComplaintStatus::Resolved]);

        $complaint->update([
            'customer_notified_at' => now(),
            'customer_satisfaction_rating' => $data['customer_satisfaction_rating'] ?? null,
            'status' => CustomerComplaintStatus::Closed,
            'closed_at' => now(),
        ]);

        return $complaint;
    }

    /**
     * The customer was unhappy with the resolution — the complaint goes back
     * into investigation and the reopen count tracks how many times this
     * happened, a repeat-failure signal worth surfacing on its own.
     */
    public function reopen(CustomerComplaint $complaint, array $data): CustomerComplaint
    {
        $this->assertStatus($complaint, [CustomerComplaintStatus::Closed]);

        $complaint->update([
            'status' => CustomerComplaintStatus::Reopened,
            'reopen_reason' => $data['reopen_reason'],
            'reopened_count' => $complaint->reopened_count + 1,
            'closed_at' => null,
        ]);

        return $complaint;
    }

    private function responseSlaDays(): int
    {
        return (int) (json_decode(
            Setting::where('code', 'complaint_response_sla_days')->value('value') ?? '3'
        ) ?: 3);
    }

    private function assertStatus(CustomerComplaint $complaint, array $allowed): void
    {
        if (! in_array($complaint->status, $allowed, true)) {
            throw new RuntimeException(sprintf(
                'Bu işlem, şikayet "%s" durumundayken yapılamaz.',
                $complaint->status->label(),
            ));
        }
    }
}
