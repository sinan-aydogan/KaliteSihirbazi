<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreJobDescriptionRequest extends FormRequest
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
            'code' => 'required|string|unique:job_descriptions|max:10',
            'name' => 'required|string|max:255',
            'department_id' => 'required|exists:departments,id',
            'responsibilities' => 'required',
            'powers' => 'required',
            'requirements' => 'required',
            'skills' => 'required',
            'working_conditions' => 'required',
            'working_tools' => 'required',
            'working_hours' => 'required',
            'overtime_status' => 'required',
            'travel_status' => 'required',
            'status' => 'required|boolean',
        ];
    }
}
