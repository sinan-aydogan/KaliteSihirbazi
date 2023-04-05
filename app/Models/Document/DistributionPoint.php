<?php

namespace App\Models\Document;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DistributionPoint extends Model
{
    use HasFactory;

    protected $fillable = [
        'code',
        'name',
        'department_id'
        ];
}
