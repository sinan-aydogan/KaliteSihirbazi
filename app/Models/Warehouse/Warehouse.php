<?php

namespace App\Models\Warehouse;

use App\Models\Department;
use App\Models\HumanResources\Employee\Employee;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Warehouse extends Model
{
    use HasFactory;
    use SoftDeletes;

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
        return $this->belongsTo(Employee::class, 'employee_id',);
    }

    // The supervisor of the warehouse
    public function type():BelongsTo
    {
        return $this->belongsTo(WarehouseType::class, 'warehouse_type_id',);
    }

    // The related department of the warehouse
    public function department():BelongsTo
    {
        return $this->belongsTo(Department::class, 'department_id',);
    }
}
