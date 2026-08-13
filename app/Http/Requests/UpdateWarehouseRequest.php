<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateWarehouseRequest extends FormRequest
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
            'code' => ['required', 'string', 'max:10', Rule::unique('warehouses')->ignore($this->route('warehouse'))],
            'name' => 'required|string|max:100',
            'warehouse_type_id' => 'nullable|exists:warehouse_types,id',
            'employee_id' => 'nullable|exists:employees,id',
            'department_id' => 'required|exists:departments,id',
        ];
    }

    /**
     * Get custom error messages for validation rules.
     */
    public function messages(): array
    {
        return [
            'code.required' => 'Depo kodu zorunludur.',
            'code.unique' => 'Bu depo kodu zaten kullanılmaktadır.',
            'code.max' => 'Depo kodu en fazla 10 karakter olabilir.',
            'name.required' => 'Depo adı zorunludur.',
            'name.max' => 'Depo adı en fazla 100 karakter olabilir.',
            'warehouse_type_id.exists' => 'Seçilen depo türü geçerli değil.',
            'employee_id.exists' => 'Seçilen çalışan geçerli değil.',
            'department_id.exists' => 'Seçilen departman geçerli değil.',
        ];
    }

    /**
     * Get custom attribute names for error messages.
     */
    public function attributes(): array
    {
        return [
            'code' => 'depo kodu',
            'name' => 'depo adı',
            'warehouse_type_id' => 'depo türü',
            'employee_id' => 'sorumlu çalışan',
            'department_id' => 'departman',
        ];
    }
}
