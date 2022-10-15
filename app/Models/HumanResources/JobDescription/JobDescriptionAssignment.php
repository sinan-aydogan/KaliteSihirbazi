<?php

namespace App\Models\HumanResources\JobDescription;

use App\Models\HumanResources\Employee\Employee;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class JobDescriptionAssignment extends Model
{
    use HasFactory;
    use SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'employee_id',
        'job_description_id',
        'appointer_id',
        'assignment_date',
        'status'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'assignment_date'  => 'date',
        'status' => 'boolean'
    ];

    /**
     * Get the employee.
     */
    public function employee():BelongsTo{
        return $this->belongsTo(Employee::class);
    }

    /**
     * Get the job description.
     */
    public function jobDescription():BelongsTo{
        return $this->belongsTo(JobDescription::class);
    }

    /**
     * Get the appointer.
     */
    public function appointer():BelongsTo{
        return $this->belongsTo(Employee::class);
    }
}
