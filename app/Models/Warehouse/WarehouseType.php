<?php

namespace App\Models\Warehouse;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class WarehouseType extends Model
{
    use HasFactory;

    protected $fillable = ['code', 'name'];

    public function warehouses(): HasMany
    {
        return $this->hasMany(Warehouse::class);
    }
}
