<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class SupplierTag extends Model
{
    use HasFactory;

    protected $fillable = ['name'];

    // Suppliers associated with the supplier tag
    public function suppliers():BelongsToMany
    {
        return $this->belongsToMany(Supplier::class);
    }
}
