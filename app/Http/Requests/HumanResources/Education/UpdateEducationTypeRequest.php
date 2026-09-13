<?php

namespace App\Http\Requests\HumanResources\Education;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateEducationTypeRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return auth()->check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255', Rule::unique('education_types')->ignore($this->route('education_type'))],
            'validity_months' => 'nullable|integer|min:1|max:120',
            'job_description_ids' => 'nullable|array',
            'job_description_ids.*' => 'exists:job_descriptions,id',
        ];
    }

    /**
     * Get custom messages for validator errors.
     */
    public function messages(): array
    {
        return [
            'name.unique' => __('validation.unique'),
            'name.max' => __('validation.max.string', ['max' => 255]),
        ];
    }
}
