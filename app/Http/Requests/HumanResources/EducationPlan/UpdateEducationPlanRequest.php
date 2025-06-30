<?php

namespace App\Http\Requests\HumanResources\EducationPlan;

use Illuminate\Foundation\Http\FormRequest;

class UpdateEducationPlanRequest extends FormRequest
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
            'name' => 'sometimes|string|max:255|unique:education_plans,name,' . $this->route('educationPlan'),
            'start_date' => 'sometimes|date|date_format:Y-m-d',
            'end_date' => [
                'sometimes',
                'date',
                'date_format:Y-m-d',
                'after_or_equal:start_date',
            ],
            'description' => 'nullable|string|max:1000',
        ];
    }

    /**
     * Get custom messages for validator errors.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'end_date.after_or_equal' => __('validation.custom.educationPlan.end_date.after_or_equal'),
        ];
    }
} 