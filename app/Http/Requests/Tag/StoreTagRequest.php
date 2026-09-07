<?php

namespace App\Http\Requests\Tag;

use Illuminate\Foundation\Http\FormRequest;

class StoreTagRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check();
    }

    public function rules(): array
    {
        return [
            'tag_type_id' => ['required', 'exists:tag_types,id'],
            'name' => ['required', 'string', 'max:100'],
        ];
    }
}
