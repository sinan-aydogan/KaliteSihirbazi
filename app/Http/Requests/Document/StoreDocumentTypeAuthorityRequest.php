<?php

namespace App\Http\Requests\Document;

use App\Enums\Document\DocumentAuthorityRole;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Enum;

class StoreDocumentTypeAuthorityRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check();
    }

    public function rules(): array
    {
        return [
            'role' => ['required', new Enum(DocumentAuthorityRole::class)],
            'user_ids' => ['required_without:department_id', 'nullable', 'array', 'min:1'],
            'user_ids.*' => ['integer', 'exists:users,id'],
            'department_id' => ['required_without:user_ids', 'nullable', 'exists:departments,id'],
        ];
    }
}
