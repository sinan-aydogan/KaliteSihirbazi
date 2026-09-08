<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreAuditChecklistTemplateRequest;
use App\Http\Requests\UpdateAuditChecklistTemplateRequest;
use App\Models\AuditChecklistTemplate;
use App\Models\AuditScope;
use Inertia\Inertia;

class AuditChecklistTemplateController extends Controller
{
    public function index()
    {
        $templates = $this->tableFilter(AuditChecklistTemplate::withCount('questions')->with('auditScope:id,name'))
            ->latest('id')
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Modules/AuditChecklistTemplate/IndexPage', [
            'tableData' => $templates,
            'auditScopes' => AuditScope::all(['id', 'name']),
        ]);
    }

    public function create()
    {
        //
    }

    public function store(StoreAuditChecklistTemplateRequest $request)
    {
        AuditChecklistTemplate::create($request->validated());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.auditChecklistTemplate.created')]);

        return redirect()->back();
    }

    public function show(AuditChecklistTemplate $auditChecklistTemplate)
    {
        $auditChecklistTemplate->load('questions', 'auditScope:id,name');

        return Inertia::render('Modules/AuditChecklistTemplate/ShowPage', [
            'template' => $auditChecklistTemplate,
        ]);
    }

    public function edit(AuditChecklistTemplate $auditChecklistTemplate)
    {
        return response()->json($auditChecklistTemplate);
    }

    public function update(UpdateAuditChecklistTemplateRequest $request, AuditChecklistTemplate $auditChecklistTemplate)
    {
        $auditChecklistTemplate->update($request->validated());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.auditChecklistTemplate.updated')]);

        return redirect()->back();
    }

    public function destroy(AuditChecklistTemplate $auditChecklistTemplate)
    {
        $auditChecklistTemplate->delete();

        session()->flash('message', ['type' => 'success', 'content' => __('messages.auditChecklistTemplate.deleted')]);

        return redirect()->back();
    }
}
