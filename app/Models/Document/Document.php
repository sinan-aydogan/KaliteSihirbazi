<?php

namespace App\Models\Document;

use App\Models\Department;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Document extends Model implements HasMedia
{
    use HasFactory;
    use InteractsWithMedia;

    protected $fillable = [
        'code',
        'name',
        'description',
        'document_type_id',
        'creator_id',
        'publishing_status',
    ];

    /*Document Type*/
    public function documentType()
    {
        return $this->belongsTo(DocumentType::class);
    }

    /*Distribution Points*/
    public function distributionPoints():BelongsToMany
    {
        return $this->belongsToMany(DistributionPoint::class, 'distribution_point_document');
    }

    /*Related Department*/
    public function department():BelongsTo
    {
        return $this->belongsTo(Department::class);
    }

    /*Creator*/
    public function creator()
    {
        return $this->belongsTo(User::class, 'creator_id');
    }

    /*Versions*/
    public function versions():HasMany
    {
        return $this->hasMany(DocumentVersion::class);
    }
}
