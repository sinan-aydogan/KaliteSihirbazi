<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreKaizenSuggestionRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check();
    }

    public function rules(): array
    {
        return [
            'title' => 'required|string|max:255',
            'current_situation' => 'required|string',
            'proposed_solution' => 'required|string',
            'kaizen_category_id' => 'required|exists:kaizen_categories,id',
            'department_id' => 'nullable|exists:departments,id',
        ];
    }
}
