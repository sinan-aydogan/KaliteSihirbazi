<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class MusteriSikayetiModel extends Model
{
    protected $table = 'musterisikayeti';
    protected $guarded = ['id'];
    public $timestamps = true;
    use SoftDeletes;
    protected $dates = ['deleted_at'];
}
