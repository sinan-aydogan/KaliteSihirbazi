<?php

namespace App\Http\Requests\HumanResources\Education;

use App\Services\FileUploadSettingService;
use Illuminate\Foundation\Http\FormRequest;

class StoreEducationInstructorRequest extends FormRequest
{
    private const DEFAULT_ALLOWED_FILE_TYPES = ['pdf', 'doc', 'docx', 'xls', 'xlsx', 'jpg', 'jpeg', 'png'];

    private const DEFAULT_MAX_FILE_SIZE = ['size' => 10, 'unit' => 'MB'];

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
            'documents.*' => app(FileUploadSettingService::class)->fileValidationRules(
                'education_allowed_file_types', self::DEFAULT_ALLOWED_FILE_TYPES,
                'education_max_file_size', self::DEFAULT_MAX_FILE_SIZE,
            ),
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
        ];
    }
}
