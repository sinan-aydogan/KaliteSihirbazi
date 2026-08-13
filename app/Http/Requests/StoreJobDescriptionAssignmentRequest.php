<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreJobDescriptionAssignmentRequest extends FormRequest
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
            'employee_id' => 'required|exists:employees,id',
            'job_description_id' => 'required|exists:job_descriptions,id',
            'appointer_id' => 'required|different:employee_id|exists:employees,id',
            'assignment_date' => 'required|date',
            'status' => 'sometimes|boolean',
        ];
    }
}
