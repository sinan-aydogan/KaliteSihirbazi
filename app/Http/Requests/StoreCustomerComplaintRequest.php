<?php

namespace App\Http\Requests;

use App\Enums\ComplaintChannel;
use App\Enums\ProblemSeverity;
use App\Models\ComplaintSourceType;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreCustomerComplaintRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check();
    }

    public function rules(): array
    {
        return [
            'complaint_source_type_id' => 'required|exists:complaint_source_types,id',
            'complaint_subject_id' => 'required|exists:complaint_subjects,id',
            'customer_id' => 'nullable|exists:customers,id',
            'supplier_id' => 'nullable|exists:suppliers,id',
            'distributor_id' => 'nullable|exists:distributors,id',
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

    public function withValidator($validator): void
    {
        $validator->after(function ($validator) {
            $sourceType = ComplaintSourceType::find($this->complaint_source_type_id);
            if (! $sourceType) {
                return;
            }

            match ($sourceType->key) {
                'customer' => $this->customer_id ?: $validator->errors()->add('customer_id', 'Müşteri kaynaklı bir şikayette müşteri seçimi zorunludur.'),
                'supplier' => $this->supplier_id ?: $validator->errors()->add('supplier_id', 'Tedarikçi kaynaklı bir şikayette tedarikçi seçimi zorunludur.'),
                'distributor' => $this->distributor_id ?: $validator->errors()->add('distributor_id', 'Dağıtıcı kaynaklı bir şikayette dağıtıcı seçimi zorunludur.'),
                default => null,
            };
        });
    }
}
