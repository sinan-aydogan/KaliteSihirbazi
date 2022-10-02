<?php

namespace App\Http\Controllers\Warehouse;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class WarehouseSettingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index(){
        return Inertia::render('Modules/BusinessManagement/Warehouse/Setting/IndexPage');
    }
}
