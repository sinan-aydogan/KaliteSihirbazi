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
            'code' => 'required|string|max:10|unique:departments,code,'.$this->id,
            'name' => 'required|string|max:255',
            'employee_id' => 'required|exists:employees,id',
            'type' => 'required|string|max:10',
            'department_id' => 'required_if:type,sub|exclude_if:type,main|exists:departments,id',
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'code.required' => 'Departman kodu gereklidir.',
            'code.string' => 'Departman kodu metin olmalıdır.',
            'code.unique' => 'Departman kodu benzersiz olmalıdır.',
            'code.max' => 'Departman kodu en fazla 10 karakter olabilir.',
            'name.required' => 'Departman adı gereklidir.',
            'name.string' => 'Departman adı metin olmalıdır.',
            'name.max' => 'Departman adı en fazla 255 karakter olabilir.',
            'employee_id.required' => 'Departman yöneticisi gereklidir.',
            'employee_id.exists' => 'Seçilen departman yöneticisi geçersizdir.',
            'type.required' => 'Departman tipi gereklidir.',
        ];
    }
}
