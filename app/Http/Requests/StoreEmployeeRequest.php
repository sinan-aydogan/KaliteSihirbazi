<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreEmployeeRequest extends FormRequest
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
    public function rules(): array
    {
        return [
            'has_account' => 'boolean',
            'code' => [
                'required',
                'string',
                'max:25',
                'unique:employees,code'
            ],
            'name' => 'nullable|string|max:250',
            'department_id' => 'nullable|exists:departments,id',
            'employment_type' => [
                'nullable',
                'string',
                Rule::in(['full_time', 'part_time', 'contract', 'intern', 'temporary'])
            ],
            'sex' => [
                'nullable',
                'string',
                Rule::in(['male', 'female', 'other'])
            ],
            'is_married' => 'boolean',
            'contact_info' => 'nullable|json',
            'children_count' => 'nullable|integer|min:0|max:20',
            'birthday' => 'nullable|date|before:today',
            'employment_date' => 'nullable|date|before_or_equal:today',
            'leaving_date' => 'nullable|date|after:employment_date',
            'leaving_detail' => 'nullable|string|max:250',
            'blood_type' => [
                'nullable',
                'string',
                'max:3',
                Rule::in(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
            ],
            'status' => [
                'nullable',
                'string',
                'max:10',
                Rule::in(['working', 'inactive', 'terminated', 'resigned'])
            ]
        ];
    }
      public function messages(): array
      {
        return [
            'code.required' => 'Çalışan kodu zorunludur.',
            'code.unique' => 'Bu çalışan kodu zaten kullanılmaktadır.',
            'code.max' => 'Çalışan kodu en fazla 25 karakter olabilir.',
            'name.max' => 'İsim en fazla 250 karakter olabilir.',
            'department_id.exists' => 'Seçilen departman geçerli değil.',
            'employment_type.in' => 'Geçersiz istihdam türü.',
            'sex.in' => 'Geçersiz cinsiyet seçimi.',
            'contact_info.json' => 'İletişim bilgileri geçerli JSON formatında olmalıdır.',
            'children_count.integer' => 'Çocuk sayısı sayı olmalıdır.',
            'children_count.min' => 'Çocuk sayısı 0\'dan küçük olamaz.',
            'children_count.max' => 'Çocuk sayısı 20\'den fazla olamaz.',
            'birthday.before' => 'Doğum tarihi bugünden önce olmalıdır.',
            'employment_date.before_or_equal' => 'İşe başlama tarihi bugünden ileri olamaz.',
            'leaving_date.after' => 'İşten ayrılma tarihi, işe başlama tarihinden sonra olmalıdır.',
            'leaving_detail.max' => 'Ayrılma detayı en fazla 250 karakter olabilir.',
            'blood_type.in' => 'Geçersiz kan grubu.',
            'status.in' => 'Geçersiz durum seçimi.'
        ];
    }

      public function attributes(): array
    {
        return [
            'has_account' => 'hesap durumu',
            'code' => 'çalışan kodu',
            'name' => 'isim',
            'department_id' => 'departman',
            'employment_type' => 'istihdam türü',
            'sex' => 'cinsiyet',
            'is_married' => 'medeni durum',
            'contact_info' => 'iletişim bilgileri',
            'children_count' => 'çocuk sayısı',
            'birthday' => 'doğum tarihi',
            'employment_date' => 'işe başlama tarihi',
            'leaving_date' => 'işten ayrılma tarihi',
            'leaving_detail' => 'ayrılma detayı',
            'blood_type' => 'kan grubu',
            'status' => 'durum'
        ];
    }



}
