<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
    use HasFactory;

    protected $fillable = [
        'code',
        'name',
        'user_id',
        'department_id',
    ];

    /*Relations*/
    public function manager()
    {
        return $this->belongsTo(User::class, 'user_id',);
    }

    public function department()
    {
        return $this->belongsTo(Department::class, 'department_id');
    }
}
