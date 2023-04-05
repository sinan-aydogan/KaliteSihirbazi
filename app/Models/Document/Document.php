<?php

namespace App\Models\Document;

use App\Models\Department;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Document extends Model
{
    use HasFactory;

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
    public function distributionPoints()
    {
        return $this->belongsToMany(DistributionPoint::class, 'document_distribution_point');
    }

    /*Related Departments*/
    public function relatedDepartments()
    {
        return $this->belongsToMany(Department::class, 'document_department');
    }

    /*Creator*/
    public function creator()
    {
        return $this->belongsTo(User::class, 'creator_id');
    }
}
