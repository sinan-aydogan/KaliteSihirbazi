<?php

namespace App\Http\Requests\HumanResources\Education;

use Illuminate\Foundation\Http\FormRequest;

class StoreEducationRequest extends FormRequest
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
            'education_plan_id' => 'required|exists:education_plans,id',
            'name' => 'required|string|max:255',
            'description' => 'nullable|string|max:1000',
            'planned_date' => 'required|date|date_format:Y-m-d',
            'performed_date' => 'nullable|date|date_format:Y-m-d|after_or_equal:planned_date',
            'duration' => 'required|integer|min:1|max:1440', // Max 24 saat (1440 dakika)
            'is_completed' => 'required|boolean',
            'is_cancelled' => 'required|boolean',
            'cancel_reason' => 'nullable|string|max:500|required_if:is_cancelled,true',
            'education_types' => 'nullable|array',
            'education_types.*' => 'exists:education_types,id',
            'instructors' => 'nullable|array',
            'instructors.*' => 'nullable|string|max:255', // Role bilgisi
            'documents' => 'nullable|array',
            'documents.*' => 'file|mimes:pdf,doc,docx,jpeg,png,jpg|max:10240', // 10MB max per file
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
            'education_plan_id.required' => __('validation.required'),
            'education_plan_id.exists' => __('validation.exists'),
            'name.required' => __('validation.required'),
            'name.max' => __('validation.max.string', ['max' => 255]),
            'description.max' => __('validation.max.string', ['max' => 1000]),
            'planned_date.required' => __('validation.required'),
            'planned_date.date' => __('validation.date'),
            'performed_date.date' => __('validation.date'),
            'performed_date.after_or_equal' => __('validation.custom.education.performed_date.after_or_equal'),
            'duration.required' => __('validation.required'),
            'duration.integer' => __('validation.integer'),
            'duration.min' => __('validation.min.numeric', ['min' => 1]),
            'duration.max' => __('validation.max.numeric', ['max' => 1440]),
            'is_completed.required' => __('validation.required'),
            'is_completed.boolean' => __('validation.boolean'),
            'is_cancelled.required' => __('validation.required'),
            'is_cancelled.boolean' => __('validation.boolean'),
            'cancel_reason.required_if' => __('validation.custom.education.cancel_reason.required_if'),
            'cancel_reason.max' => __('validation.max.string', ['max' => 500]),
            'education_types.*.exists' => __('validation.exists'),
            'instructors.*.max' => __('validation.max.string', ['max' => 255]),
            'documents.*.file' => __('validation.file'),
            'documents.*.mimes' => __('validation.mimes', ['values' => 'pdf, doc, docx, jpeg, png, jpg']),
            'documents.*.max' => __('validation.max.file', ['max' => '10MB']),
        ];
    }
}
