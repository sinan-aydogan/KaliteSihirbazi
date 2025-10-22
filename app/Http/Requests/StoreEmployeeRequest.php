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
                Rule::in([
                    'fullTime',
                    'partTime',
                    'seasonal',
                    'intern',
                    'contracted',
                    'dailyWage',
                    'handicappedStaff',
                    'convictStaff'
                ])
            ],
            'sex' => [
                'nullable',
                'string',
                Rule::in([
                    'male',
                    'female',
                    'other'
                ])
            ],
            'is_married' => 'boolean',
            'contact_info' => 'nullable|array',
            'children_count' => 'nullable|integer|min:0|max:20',
            'birthday' => 'nullable|date|before:today',
            'employment_date' => 'nullable|date',
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
                Rule::in([
                    'working',
                    'left',
                    'retired',
                    'fired'
                ])
            ]
        ];
    }
      public function messages(): array
      {
        return [
            'code.required' => 'Çalışan kimlik numarası zorunludur.',
            'code.unique' => 'Bu çalışan kimlik numarası zaten kullanılmaktadır.',
            'code.max' => 'Çalışan kimlik numarası en fazla 25 karakter olabilir.',
            'name.max' => 'İsim en fazla 250 karakter olabilir.',
            'department_id.exists' => 'Seçilen departman geçerli değil.',
            'employment_type.in' => 'Geçersiz kadro türü.',
            'sex.in' => 'Geçersiz cinsiyet.',
            'contact_info.array' => 'İletişim bilgileri uygun formatta değil.',
            'children_count.integer' => 'Çocuk sayısı sayı olmalıdır.',
            'children_count.min' => 'Çocuk sayısı 0\'dan küçük olamaz.',
            'children_count.max' => 'Çocuk sayısı 20\'den fazla olamaz.',
            'birthday.before' => 'Doğum tarihi bugünden önce olmalıdır.',
            'leaving_date.after' => 'İşten ayrılma tarihi, işe başlama tarihinden sonra olmalıdır.',
            'leaving_detail.max' => 'Ayrılma detayı en fazla 250 karakter olabilir.',
            'blood_type.in' => 'Geçersiz kan grubu.',
            'status.in' => 'Geçersiz durum.'
        ];
    }

      public function attributes(): array
    {
        return [
            'has_account' => 'hesap durumu',
            'code' => 'kimlik numarası',
            'name' => 'isim',
            'department_id' => 'departman',
            'employment_type' => 'kadro türü',
            'sex' => 'cinsiyet',
            'is_married' => 'medeni hal',
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
