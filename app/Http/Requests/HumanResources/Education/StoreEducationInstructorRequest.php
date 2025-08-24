<?php

namespace App\Http\Requests\HumanResources\Education;

use Illuminate\Foundation\Http\FormRequest;

class StoreEducationInstructorRequest extends FormRequest
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
            'name' => 'required|string|max:255',
            'photo' => 'nullable|image|mimes:jpeg,png,jpg|max:2048', // 2MB max
            'documents' => 'nullable|array',
            'documents.*' => 'file|mimes:pdf,doc,docx,jpeg,png,jpg,xlsx,xls|max:5120', // 5MB max per file
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
            'name.required' => __('validation.required'),
            'name.max' => __('validation.max.string', ['max' => 255]),
            'photo.image' => __('validation.image'),
            'photo.mimes' => __('validation.mimes', ['values' => 'jpeg, png, jpg']),
            'photo.max' => __('validation.max.file', ['max' => '2MB']),
            'documents.*.file' => __('validation.file'),
            'documents.*.mimes' => __('validation.mimes', ['values' => 'pdf, doc, docx, jpeg, png, jpg, xlsx, xls']),
            'documents.*.max' => __('validation.max.file', ['max' => '5MB']),
        ];
    }
}
