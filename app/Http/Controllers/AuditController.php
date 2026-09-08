<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreAuditRequest;
use App\Http\Requests\UpdateAuditRequest;
use App\Models\Audit;
use App\Models\AuditFirm;
use App\Models\CompanyAccreditation;
use App\Models\Department;
use App\Models\Standard;
use App\Models\User;
use App\Services\Audit\AuditWorkflowService;
use Inertia\Inertia;

class AuditController extends Controller
{
    public function __construct(private readonly AuditWorkflowService $auditWorkflowService)
    {
    }

    public function index()
    {
        $audits = $this->tableFilter(Audit::withCount('findings')->with(['auditFirm:id,name', 'auditor:id,name', 'standard:id,name']))
            ->latest('id')
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Modules/Audit/IndexPage', [
            'tableData' => $audits,
            'users' => User::all(['id', 'name']),
            'standards' => Standard::all(['id', 'name']),
            'companyAccreditations' => CompanyAccreditation::with('standard:id,name')->get(['id', 'standard_id', 'certificate_number']),
            'auditFirms' => AuditFirm::all(['id', 'name']),
            'departments' => Department::all(['id', 'name']),
        ]);
    }

    public function create()
    {
        //
    }

    public function store(StoreAuditRequest $request)
    {
        $audit = $this->auditWorkflowService->create($request->validated(), auth()->user());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.audit.created', ['audit' => $audit->code])]);

        return redirect()->back();
    }

    public function show(Audit $audit)
    {
        $audit->load([
            'standard:id,name',
            'companyAccreditation:id,certificate_number',
            'auditFirm:id,name',
            'auditor:id,name',
            'department:id,name',
            'findings:id,audit_id,code,title,status',
        ]);

        return Inertia::render('Modules/Audit/ShowPage', [
            'audit' => $audit,
            'users' => User::all(['id', 'name']),
        ]);
    }

    public function edit(Audit $audit)
    {
        return response()->json($audit);
    }

    public function update(UpdateAuditRequest $request, Audit $audit)
    {
        $this->auditWorkflowService->update($audit, $request->validated());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.audit.updated', ['audit' => $audit->code])]);

        return redirect()->back();
    }

    public function destroy(Audit $audit)
    {
        if ($audit->findings()->exists()) {
            session()->flash('message', ['type' => 'danger', 'content' => __('messages.audit.deletedError', ['audit' => $audit->code])]);

            return redirect()->back();
        }

        session()->flash('message', ['type' => 'success', 'content' => __('messages.audit.deleted', ['audit' => $audit->code])]);

        $audit->delete();

        return redirect()->route('audit.index');
    }
}
