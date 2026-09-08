<?php

namespace App\Http\Requests;

use App\Enums\ComplaintChannel;
use App\Enums\ProblemSeverity;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateCustomerComplaintRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check();
    }

    public function rules(): array
    {
        return [
            'customer_id' => 'required|exists:customers,id',
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'channel' => ['required', Rule::enum(ComplaintChannel::class)],
            'product_reference' => 'nullable|string|max:255',
            'severity' => ['required', Rule::enum(ProblemSeverity::class)],
            'received_date' => 'required|date|before_or_equal:today',
            'response_due_date' => 'nullable|date',
            'department_id' => 'nullable|exists:departments,id',
        ];
    }
}
