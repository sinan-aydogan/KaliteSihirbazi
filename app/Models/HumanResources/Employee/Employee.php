<?php

namespace App\Models\HumanResources\Employee;

use App\Models\Department;
use App\Models\HumanResources\JobDescription\JobDescriptionAssignment;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Employee extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'has_account',
        'code',
        'name',
        'department_id',
        'employment_type',
        'sex',
        'is_married',
        'children_count',
        'contact_info',
        'birthday',
        'employment_date',
        'leaving_date',
        'leaving_detail',
        'blood_type',
        'status'
    ];
    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'birthday' => 'date',
        'employment_date' => 'date',
        'leaving_date' => 'date',
        'staffName' => 'string',
        'contact_info' => 'array',
        'is_married' => 'boolean',
        'has_account' => 'boolean',
    ];

    public function getemployeeNameAttribute()
    {
        if ($this->account) {
            return $this->account->name;
        } else {
            return $this->name;
        }
    }

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = ['employeeName'];

    /**
     * Get the staff account.
     */
    public function account()
    {
        return $this->morphOne(User::class, 'accountable');
    }

    /**
     * Get the staff department.
     */
    public function department(): BelongsTo
    {
        return $this->belongsTo(Department::class, 'department_id');
    }

    /**
     * Get the job description assigments.
     */
    public function jdAssignments()
    {
        return JobDescriptionAssignment::where('employee_id', $this->id)->with('jobDescription:id,name', 'appointer:id,name')->get();
    }
}
