<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Warehouse extends Model
{
    use HasFactory;

    protected $fillable = [
        'code',
        'name',
        'type',
        'user_id'
    ];

    /*Relations*/
    public function supervisor():BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id',);
    }
}
