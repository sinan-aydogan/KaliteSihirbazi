<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreAuditChecklistQuestionRequest;
use App\Http\Requests\UpdateAuditChecklistQuestionRequest;
use App\Models\AuditChecklistQuestion;
use App\Models\AuditChecklistTemplate;

class AuditChecklistQuestionController extends Controller
{
    public function store(StoreAuditChecklistQuestionRequest $request, AuditChecklistTemplate $auditChecklistTemplate)
    {
        $auditChecklistTemplate->questions()->create([
            ...$request->validated(),
            'sort_order' => $request->validated('sort_order') ?? ($auditChecklistTemplate->questions()->max('sort_order') + 1),
        ]);

        session()->flash('message', ['type' => 'success', 'content' => __('messages.auditChecklistQuestion.created')]);

        return redirect()->back();
    }

    public function update(UpdateAuditChecklistQuestionRequest $request, AuditChecklistQuestion $auditChecklistQuestion)
    {
        $auditChecklistQuestion->update($request->validated());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.auditChecklistQuestion.updated')]);

        return redirect()->back();
    }

    public function destroy(AuditChecklistQuestion $auditChecklistQuestion)
    {
        $auditChecklistQuestion->delete();

        session()->flash('message', ['type' => 'success', 'content' => __('messages.auditChecklistQuestion.deleted')]);

        return redirect()->back();
    }
}
