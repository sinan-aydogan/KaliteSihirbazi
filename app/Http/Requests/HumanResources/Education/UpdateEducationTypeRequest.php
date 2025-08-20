<?php

namespace App\Http\Requests\HumanResources\Education;

use Illuminate\Foundation\Http\FormRequest;

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
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'sometimes|string|max:255|unique:education_types,name,' . $this->route('educationType'),
        ];
    }

    /**
     * Get custom messages for validator errors.
     *
     * @return array
     */
    public function messages(): array
    {
        return [
            'name.unique' => __('validation.unique'),
            'name.max' => __('validation.max.string', ['max' => 255]),
        ];
    }
}
