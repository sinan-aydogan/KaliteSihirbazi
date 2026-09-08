<?php

namespace App\Http\Controllers;

use App\Http\Requests\CloseCustomerComplaintRequest;
use App\Http\Requests\ReopenCustomerComplaintRequest;
use App\Http\Requests\ResolveCustomerComplaintRequest;
use App\Models\CustomerComplaint;
use App\Services\CustomerComplaint\CustomerComplaintWorkflowService;
use RuntimeException;

class CustomerComplaintWorkflowController extends Controller
{
    public function __construct(private readonly CustomerComplaintWorkflowService $customerComplaintWorkflowService)
    {
    }

    public function acknowledge(CustomerComplaint $customerComplaint)
    {
        return $this->handle(fn () => $this->customerComplaintWorkflowService->acknowledge($customerComplaint), 'acknowledged', $customerComplaint);
    }

    public function resolve(ResolveCustomerComplaintRequest $request, CustomerComplaint $customerComplaint)
    {
        return $this->handle(fn () => $this->customerComplaintWorkflowService->resolve($customerComplaint, $request->validated()), 'resolved', $customerComplaint);
    }

    public function close(CloseCustomerComplaintRequest $request, CustomerComplaint $customerComplaint)
    {
        return $this->handle(fn () => $this->customerComplaintWorkflowService->close($customerComplaint, $request->validated()), 'closed', $customerComplaint);
    }

    public function reopen(ReopenCustomerComplaintRequest $request, CustomerComplaint $customerComplaint)
    {
        return $this->handle(fn () => $this->customerComplaintWorkflowService->reopen($customerComplaint, $request->validated()), 'reopened', $customerComplaint);
    }

    private function handle(callable $action, string $messageKey, CustomerComplaint $customerComplaint)
    {
        try {
            $action();
        } catch (RuntimeException $exception) {
            session()->flash('message', ['type' => 'danger', 'content' => $exception->getMessage()]);

            return redirect()->back();
        }

        session()->flash('message', ['type' => 'success', 'content' => __("messages.customerComplaint.$messageKey", ['complaint' => $customerComplaint->code])]);

        return redirect()->back();
    }
}
