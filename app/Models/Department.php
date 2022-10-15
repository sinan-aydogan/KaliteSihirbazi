<?php

namespace App\Models;

use App\Models\HumanResources\Employee\Employee;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Department extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'code',
        'name',
        'type',
        'employee_id',
        'department_id',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'deleted_at' => 'datetime',
    ];

    // The manager of the depertment
    public function manager():BelongsTo
    {
        return $this->belongsTo(Employee::class, 'employee_id',);
    }

    // The main department of the department
    public function mainDepartment():BelongsTo
    {
        return $this->belongsTo(Department::class, 'department_id');
    }

    // Sub-departments of the department
    public function subDepartments():HasMany
    {
        return $this->hasMany(Department::class);
    }
}
