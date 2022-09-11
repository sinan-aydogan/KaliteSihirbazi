<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateDepartmentRequest extends FormRequest
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
            'code' => 'required|string|max:10|unique:departments,id,'.$this->id,
            'name' => 'required|string|max:255',
            'employee_id' => 'required|exists:employees,id',
            'type' => 'required|string|max:10',
            'department_id' => 'required_if:type,sub|exclude_if:type,main|exists:departments,id',
        ];
    }
}
