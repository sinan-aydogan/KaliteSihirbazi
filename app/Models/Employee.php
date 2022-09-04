<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
        'user_id',
        'code',
        'name',
        'department_id',
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

    public function getstaffNameAttribute()
    {
        if ($this->account) {
            return $this->account->name;
        } else {
            return $this->name;
        }
    }
}
