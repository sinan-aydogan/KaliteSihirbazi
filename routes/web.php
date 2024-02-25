<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::redirect('/', '/bi');

/*Filament login route*/
Route::get('bi/login', \Filament\Facades\Filament::getPanel('bi')->getLoginRouteAction())->name('filament.bi.auth.login');
