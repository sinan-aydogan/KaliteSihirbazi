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
        'user_id',
        'department_id',
    ];

    /*Relations*/
    public function manager():BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id',);
    }

    public function mainDepartment():BelongsTo
    {
        return $this->belongsTo(Department::class, 'department_id');
    }

    public function subDepartments():HasMany
    {
        return $this->hasMany(Department::class);
    }
}
