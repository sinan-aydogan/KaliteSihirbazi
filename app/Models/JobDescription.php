<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class JobDescription extends Model
{
    use HasFactory;
    use SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'code',
        'name',
        'description',
        'staff_type',
        'department_id',
        'responsibilities',
        'powers',
        'skills',
        'working_conditions',
        'working_tools',
        'working_hours',
        'overtime_status',
        'travel_status',
        'status'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'responsibilities'  => 'array',
        'powers'  => 'array',
        'requirements'  => 'array',
        'skills'  => 'array',
        'working_conditions'  => 'array',
        'working_tools'  => 'array',
        'working_hours'  => 'array',
        'overtime_status'  => 'array',
        'travel_status'  => 'array',
        'status' => 'boolean'
    ];

    // The department of the job description
    public function department():BelongsTo
    {
        return $this->belongsTo(Department::class, 'department_id');
    }
}
