<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class SupplierType extends Model
{
    use HasFactory;

    protected $fillable = [
        'code',
        'name',
    ];

    /*Relations*/

    /**
     * @return BelongsToMany
     */
    public function suppliers():BelongsToMany
    {
        return $this->belongsToMany(Supplier::class);
    }
}
