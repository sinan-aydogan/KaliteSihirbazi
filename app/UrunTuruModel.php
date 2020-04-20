<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class UrunTuruModel extends Model
{
    protected $table = 'urunturu';
    protected $guarded = ['id'];
    public $timestamps = true;
    use SoftDeletes;
    protected $dates = ['deleted_at'];
}
