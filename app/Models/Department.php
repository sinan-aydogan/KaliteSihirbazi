<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Department extends Model
{
    use HasFactory;

    protected $fillable = [
        'code',
        'name',
        'type',
        'employee_id',
        'department_id',
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
