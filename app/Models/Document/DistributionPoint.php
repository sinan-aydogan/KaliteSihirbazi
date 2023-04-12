<?php

namespace App\Models\Document;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class DistributionPoint extends Model
{
    use HasFactory;

    protected $fillable = [
        'code',
        'name',
        'department_id'
        ];

    /*Related department with Distribution Point's*/
    public function department():BelongsTo{
        return $this->belongsTo('App\Models\Department');
    }

    /*Related documents with Distribution Point's*/
    public function documents():BelongsToMany
    {
        return $this->belongsToMany(Document::class);
    }
}
