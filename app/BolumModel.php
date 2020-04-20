<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class BolumModel extends Model
{
    protected $table = 'bolum';
    protected $guarded = ['id'];
    public $timestamps = true;
    use SoftDeletes;
    protected $dates = ['deleted_at'];
}
