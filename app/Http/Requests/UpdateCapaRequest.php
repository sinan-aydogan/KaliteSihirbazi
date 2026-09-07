<?php

namespace App\Http\Requests;

use App\Enums\CapaSourceType;
use App\Enums\CapaType;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateCapaRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check();
    }

    public function rules(): array
    {
        return [
            'title' => 'required|string|max:255',
            'type' => ['required', Rule::enum(CapaType::class)],
            'description' => 'required|string',
            'source_type' => ['nullable', Rule::enum(CapaSourceType::class)],
            'source_id' => 'nullable|integer',
            'root_cause' => 'nullable|string',
            'responsible_id' => 'required|exists:users,id',
            'due_date' => 'required|date',
        ];
    }
}
