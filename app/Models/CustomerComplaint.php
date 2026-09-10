<?php

namespace App\Models;

use App\Enums\ComplaintChannel;
use App\Enums\CustomerComplaintStatus;
use App\Enums\ProblemSeverity;
use App\Traits\HasSequentialCode;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class CustomerComplaint extends Model
{
    use HasFactory, HasSequentialCode;

    protected $fillable = [
        'customer_id',
        'complaint_source_type_id',
        'complaint_subject_id',
        'supplier_id',
        'distributor_id',
        'title',
        'description',
        'channel',
        'product_reference',
        'severity',
        'received_date',
        'response_due_date',
        'first_response_at',
        'status',
        'resolution_summary',
        'customer_notified_at',
        'customer_satisfaction_rating',
        'reopen_reason',
        'reopened_count',
        'reported_by_id',
        'department_id',
        'closed_at',
    ];

    protected $casts = [
        'channel' => ComplaintChannel::class,
        'severity' => ProblemSeverity::class,
        'status' => CustomerComplaintStatus::class,
        'received_date' => 'date',
        'response_due_date' => 'date',
        'first_response_at' => 'datetime',
        'customer_notified_at' => 'datetime',
        'closed_at' => 'datetime',
    ];

    protected static function booted(): void
    {
        static::creating(function (CustomerComplaint $complaint) {
            if (empty($complaint->code)) {
                $complaint->code = static::nextCode();
            }
        });
    }

    protected static function nextCode(): string
    {
        return static::nextSequentialCode('SKY');
    }

    public function customer(): BelongsTo
    {
        return $this->belongsTo(Customer::class);
    }

    public function complaintSourceType(): BelongsTo
    {
        return $this->belongsTo(ComplaintSourceType::class);
    }

    public function complaintSubject(): BelongsTo
    {
        return $this->belongsTo(ComplaintSubject::class);
    }

    public function supplier(): BelongsTo
    {
        return $this->belongsTo(Supplier::class);
    }

    public function distributor(): BelongsTo
    {
        return $this->belongsTo(Distributor::class);
    }

    public function department(): BelongsTo
    {
        return $this->belongsTo(Department::class);
    }

    public function reportedBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'reported_by_id');
    }

    public function problems(): HasMany
    {
        return $this->hasMany(Problem::class);
    }
}
