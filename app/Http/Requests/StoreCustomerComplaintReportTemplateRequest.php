<?php

namespace App\Http\Requests;

use App\Services\CustomerComplaint\CustomerComplaintAnalyticsService;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreCustomerComplaintReportTemplateRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check();
    }

    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'is_shared' => 'sometimes|boolean',
            'config' => 'required|array',
            'config.chart_type' => ['required', Rule::in(['bar', 'pie', 'line', 'table'])],
            'config.group_by' => ['required', Rule::in(CustomerComplaintAnalyticsService::DIMENSIONS)],
            'config.metric' => ['required', Rule::in(CustomerComplaintAnalyticsService::METRICS)],
            'config.date_from' => 'nullable|date',
            'config.date_to' => 'nullable|date|after_or_equal:config.date_from',
        ];
    }
}
