<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CustomerComplaintReportTemplate extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'created_by_id',
        'is_shared',
        'config',
    ];

    protected $casts = [
        'is_shared' => 'boolean',
        'config' => 'array',
    ];

    public function createdBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'created_by_id');
    }
}
