<?php

namespace App\Http\Requests;

use App\Enums\CapaType;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreCapaRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check();
    }

    public function rules(): array
    {
        return [
            'problem_id' => 'nullable|exists:problems,id',
            'title' => 'required|string|max:255',
            'type' => ['required', Rule::enum(CapaType::class)],
            'description' => 'required|string',
            'capa_source_type_id' => 'nullable|exists:capa_source_types,id',
            'source_id' => 'nullable|integer',
            'responsible_id' => 'required|exists:users,id',
            'due_date' => 'required|date|after_or_equal:today',
        ];
    }
}
