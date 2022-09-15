<?php

namespace App\Models;

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
        'birthday' => 'datetime',
        'employment_date' => 'datetime',
        'leaving_date' => 'datetime',
        'staffName' => 'string',
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
    public function department()
    {
        return $this->belongsTo(Department::class, 'department_id');
    }
}
