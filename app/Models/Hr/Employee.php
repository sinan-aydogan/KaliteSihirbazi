<?php

namespace App\Models\Hr;

use App\Models\User;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Employee extends Model
{
    use HasFactory, HasUuids, SoftDeletes;

    protected $fillable = [
        'user_id',
        'employee_type_id',
        'citizenship_number',
        'first_name',
        'last_name',
        'date_of_birth',
        'gender',
        'status'
    ];

    protected $appends = ['full_name'];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function employeeType(): BelongsTo
    {
        return $this->belongsTo(EmployeeType::class);
    }

    public function getFullNameAttribute(): string
    {
        return $this['first_name'] . ' ' . $this['last_name'];
    }
}
