<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateJobDescriptionRequest extends FormRequest
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
            'code' => 'required|string|max:10|unique:job_descriptions,code,'.$this->id,
            'name' => 'required|string|max:150',
            'description' => 'nullable|string|max:750',
            'staff_type' => 'nullable|string|max:10|in:blue,white,other',
            'department_id' => 'required|exists:departments,id',
            'responsibilities' => 'required|array|min:1',
            'powers' => 'required|array|min:1',
            'requirements' => 'required|array|min:1',
            'skills' => 'required|array|min:1',
            'working_conditions' => 'required|array|min:1',
            'working_tools' => 'required|array|min:1',
            'working_hours' => 'required|array|min:1',
            'overtime_status' => 'required|array|min:1',
            'travel_status' => 'required|array|min:1',
            'status' => 'sometimes|boolean',
            'responsibilities.*' => 'required|string|max:500',
            'powers.*' => 'required|string|max:500',
            'requirements.*' => 'required|string|max:500',
            'skills.*' => 'required|string|max:500',
            'working_conditions.*' => 'required|string|max:500',
            'working_tools.*' => 'required|string|max:500',
            'working_hours.*' => 'required|string|max:500',
            'overtime_status.*' => 'required|string|max:500',
            'travel_status.*.reason' => 'required|string|max:500',
            'travel_status.*.location' => 'required|string|max:500',
        ];
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'requirements' => $this->prepareJsonField($this->requirements),
            'responsibilities' => $this->prepareJsonField($this->responsibilities),
            'powers' => $this->prepareJsonField($this->powers),
            'skills' => $this->prepareJsonField($this->skills),
            'working_conditions' => $this->prepareJsonField($this->working_conditions),
            'working_tools' => $this->prepareJsonField($this->working_tools),
            'working_hours' => $this->prepareJsonField($this->working_hours),
            'overtime_status' => $this->prepareJsonField($this->overtime_status),
            'travel_status' => $this->prepareTravelStatus($this->travel_status),
        ]);
    }

    private function prepareJsonField($value)
    {
        if (empty($value)) {
            return [''];
        }
        return is_array($value) ? $value : [json_decode($value, true)];
    }

    private function prepareTravelStatus($value)
    {
        if (empty($value)) {
            return [['reason' => '', 'location' => '']];
        }

        if (is_string($value)) {
            $value = json_decode($value, true);
        }

        return is_array($value) ? (isset($value[0]) ? $value : [$value]) : [$value];
    }
}
