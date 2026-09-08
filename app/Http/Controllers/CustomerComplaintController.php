<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCustomerComplaintRequest;
use App\Http\Requests\UpdateCustomerComplaintRequest;
use App\Models\CustomerComplaint;
use App\Models\Customer;
use App\Models\Department;
use App\Models\ProblemSourceType;
use App\Models\User;
use App\Services\CustomerComplaint\CustomerComplaintWorkflowService;
use Inertia\Inertia;

class CustomerComplaintController extends Controller
{
    public function __construct(private readonly CustomerComplaintWorkflowService $customerComplaintWorkflowService)
    {
    }

    public function index()
    {
        $complaints = $this->tableFilter(CustomerComplaint::withCount('problems')->with(['customer:id,name', 'department:id,name']))
            ->latest('id')
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Modules/CustomerComplaint/IndexPage', [
            'tableData' => $complaints,
            'customers' => Customer::where('is_active', true)->get(['id', 'name']),
            'departments' => Department::all(['id', 'name']),
        ]);
    }

    public function create()
    {
        //
    }

    public function store(StoreCustomerComplaintRequest $request)
    {
        $complaint = $this->customerComplaintWorkflowService->create($request->validated(), auth()->user());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.customerComplaint.created', ['complaint' => $complaint->code])]);

        return redirect()->back();
    }

    public function show(CustomerComplaint $customerComplaint)
    {
        $customerComplaint->load([
            'customer:id,code,name,contact_name,phone,email',
            'department:id,name',
            'reportedBy:id,name',
            'problems:id,customer_complaint_id,code,title,status',
        ]);

        return Inertia::render('Modules/CustomerComplaint/ShowPage', [
            'complaint' => $customerComplaint,
            'users' => User::all(['id', 'name']),
            'problemSourceTypes' => ProblemSourceType::orderBy('sort_order')->get(['id', 'key', 'name']),
        ]);
    }

    public function edit(CustomerComplaint $customerComplaint)
    {
        return response()->json($customerComplaint);
    }

    public function update(UpdateCustomerComplaintRequest $request, CustomerComplaint $customerComplaint)
    {
        $this->customerComplaintWorkflowService->update($customerComplaint, $request->validated());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.customerComplaint.updated', ['complaint' => $customerComplaint->code])]);

        return redirect()->back();
    }

    public function destroy(CustomerComplaint $customerComplaint)
    {
        if ($customerComplaint->problems()->exists()) {
            session()->flash('message', ['type' => 'danger', 'content' => __('messages.customerComplaint.deletedError', ['complaint' => $customerComplaint->code])]);

            return redirect()->back();
        }

        $customerComplaint->delete();

        session()->flash('message', ['type' => 'success', 'content' => __('messages.customerComplaint.deleted', ['complaint' => $customerComplaint->code])]);

        return redirect()->route('customer-complaint.index');
    }
}
