<?php

namespace App\Http\Requests;

use App\Enums\FiveSCriterion;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreFiveSAuditFindingRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check();
    }

    public function rules(): array
    {
        return [
            'criterion' => ['required', Rule::enum(FiveSCriterion::class)],
            'description' => 'required|string',
            'responsible_id' => 'nullable|exists:users,id',
            'due_date' => 'nullable|date',
        ];
    }
}
