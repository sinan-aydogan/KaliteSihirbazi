<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use phpDocumentor\Reflection\DocBlock\Tag;

class Supplier extends Model
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
        'contact_info',
        'notes',
        'is_active',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        "contact_info" => "array",
        "notes" => "array",
        'is_active' => 'boolean',
    ];

    /*Relations*/

    /**
     * @return BelongsToMany
     */
    public function types():BelongsToMany
    {
        return $this->belongsToMany(SupplierType::class, 'supplier_type_supplier', 'supplier_id', 'supplier_type_id');
    }

    /**
     * @return BelongsToMany
     */
    public function tags():BelongsToMany
    {
        return $this->belongsToMany(SupplierTag::class, 'supplier_tag_supplier', 'supplier_id', 'supplier_tag_id');
    }

}
