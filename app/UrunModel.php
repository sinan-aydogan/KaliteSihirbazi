<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class UrunModel extends Model
{
    protected $table = 'urun';
    protected $guarded = ['id'];
    public $timestamps = true;
    use SoftDeletes;
    protected $dates = ['deleted_at'];
}
