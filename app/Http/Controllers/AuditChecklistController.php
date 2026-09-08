<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreAuditChecklistRequest;
use App\Models\Audit;
use App\Models\AuditChecklistTemplate;
use App\Services\Audit\AuditWorkflowService;

class AuditChecklistController extends Controller
{
    public function __construct(private readonly AuditWorkflowService $auditWorkflowService)
    {
    }

    public function store(StoreAuditChecklistRequest $request, Audit $audit)
    {
        $template = AuditChecklistTemplate::findOrFail($request->validated('audit_checklist_template_id'));

        $this->auditWorkflowService->attachChecklist($audit, $template);

        session()->flash('message', ['type' => 'success', 'content' => __('messages.auditChecklist.attached')]);

        return redirect()->back();
    }
}
