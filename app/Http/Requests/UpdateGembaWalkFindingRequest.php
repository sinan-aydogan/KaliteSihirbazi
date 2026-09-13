<?php

namespace App\Http\Requests;

use App\Enums\GembaFindingCategory;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateGembaWalkFindingRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check();
    }

    public function rules(): array
    {
        return [
            'category' => ['required', Rule::enum(GembaFindingCategory::class)],
            'description' => 'required|string',
            'responsible_id' => 'nullable|exists:users,id',
            'due_date' => 'nullable|date',
        ];
    }
}
