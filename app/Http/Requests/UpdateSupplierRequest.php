<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateSupplierRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth()->check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'code' => ['required', 'string', 'max:10', Rule::unique('suppliers')->ignore($this->route('supplier'))],
            'name' => 'required|string|max:150',
            'contact_info' => 'nullable|array',
            'notes' => 'nullable|array',
            'is_active' => 'boolean',
            'types' => 'nullable|array',
            'types.*' => 'integer|distinct|exists:supplier_types,id',
            'tags' => 'nullable|array',
            'tags.*' => 'integer|distinct|exists:supplier_tags,id',
        ];
    }
}
