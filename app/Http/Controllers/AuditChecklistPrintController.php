<?php

namespace App\Http\Controllers;

use App\Models\AuditChecklist;
use App\Models\AuditChecklistTemplate;

class AuditChecklistPrintController extends Controller
{
    public function template(AuditChecklistTemplate $auditChecklistTemplate)
    {
        return view('prints.audit-checklist', [
            'title' => $auditChecklistTemplate->name,
            'meta' => array_filter([
                'Kapsam' => $auditChecklistTemplate->auditScope?->name,
            ]),
            'questions' => $auditChecklistTemplate->questions->map(fn ($question) => [
                'question' => $question->question,
                'standard_reference' => $question->standard_reference,
                'answer' => null,
                'notes' => null,
            ]),
        ]);
    }

    public function checklist(AuditChecklist $auditChecklist)
    {
        $auditChecklist->load(['audit', 'template', 'answers.question']);

        $answerLabels = [
            'compliant' => 'Uygun',
            'non_compliant' => 'Uygunsuz',
            'not_applicable' => 'Kapsam Dışı',
            'observation' => 'Gözlem',
        ];

        return view('prints.audit-checklist', [
            'title' => $auditChecklist->audit->title.' — '.($auditChecklist->template->name ?? 'Checklist'),
            'meta' => array_filter([
                'Denetim Kodu' => $auditChecklist->audit->code,
                'Planlanan Tarih' => optional($auditChecklist->audit->planned_date)->format('d.m.Y'),
            ]),
            'questions' => $auditChecklist->answers->map(function ($answer) use ($answerLabels) {
                $resultText = match ($answer->question->question_type->value) {
                    'compliance_4' => $answer->answer ? ($answerLabels[$answer->answer->value] ?? $answer->answer->value) : null,
                    'file_evidence' => $answer->getMedia('evidence')->pluck('file_name')->implode(', ') ?: null,
                    default => $answer->value,
                };

                return [
                    'question' => $answer->question->question,
                    'standard_reference' => $answer->question->standard_reference,
                    'answer' => $resultText,
                    'notes' => $answer->notes,
                ];
            }),
        ]);
    }
}
