<?php

namespace App\Models\Document;

use App\Models\Department;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class DistributionPoint extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'department_id',
    ];

    /* Related department with Distribution Point's */
    public function department(): BelongsTo
    {
        return $this->belongsTo(Department::class);
    }

    /* Related documents with Distribution Point's */
    public function documents(): BelongsToMany
    {
        return $this->belongsToMany(Document::class)->withTimestamps();
    }

    /* Users who are members of this distribution point (view access + read-acknowledgment recipients) */
    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'distribution_point_user')->withTimestamps();
    }
}
