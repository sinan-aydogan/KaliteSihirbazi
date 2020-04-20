<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class StandartModel extends Model
{
    protected $table = 'standart';
    protected $guarded = ['id'];
    public $timestamps = true;
    use SoftDeletes;
    protected $dates = ['deleted_at'];
}
