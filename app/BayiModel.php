<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class BayiModel extends Model
{
    protected $table = 'bayi';
    protected $guarded = ['id'];

    public $timestamps = true;
    use SoftDeletes;
    protected $dates = ['deleted_at'];

}
