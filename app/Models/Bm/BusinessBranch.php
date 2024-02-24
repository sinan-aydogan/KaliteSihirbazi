<?php

namespace App\Models\Bm;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

class BusinessBranch extends Model
{
    use HasUuids;

    protected $fillable = [
        'name',
    ];
}
