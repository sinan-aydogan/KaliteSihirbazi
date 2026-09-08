<?php

namespace App\Http\Controllers;

use App\Http\Requests\AnswerAuditChecklistAnswerRequest;
use App\Models\AuditChecklistAnswer;
use App\Services\Audit\AuditChecklistService;

class AuditChecklistAnswerController extends Controller
{
    public function __construct(private readonly AuditChecklistService $auditChecklistService)
    {
    }

    public function update(AnswerAuditChecklistAnswerRequest $request, AuditChecklistAnswer $auditChecklistAnswer)
    {
        $this->auditChecklistService->answer(
            $auditChecklistAnswer,
            $request->validated(),
            auth()->user(),
            $request->file('evidence', [])
        );

        session()->flash('message', ['type' => 'success', 'content' => __('messages.auditChecklistAnswer.saved')]);

        return redirect()->back();
    }
}
