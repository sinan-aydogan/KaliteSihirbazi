<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Warehouse extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'code',
        'name',
        'type',
        'user_id'
    ];

    // The supervisor of the warehouse
    public function supervisor():BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id',);
    }
}
