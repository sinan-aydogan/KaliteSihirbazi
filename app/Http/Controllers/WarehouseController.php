<?php

namespace App\Http\Controllers;

use App\Http\Resources\WarehouseResource;
use App\Models\User;
use App\Models\Warehouse;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreWarehouseRequest;
use App\Http\Requests\UpdateWarehouseRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WarehouseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index(Request $request)
    {
        return Inertia::render('Modules/BusinessManagement/Warehouse/Index', [
            'tableData' => WarehouseResource::collection(Warehouse::search($request->all())),
            'users' => User::when($request->input('qD'), function($query)use($request){
                $query->where('name', 'LIKE', "%{$request->input('qD')}%");
            })->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreWarehouseRequest  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(StoreWarehouseRequest $request)
    {
        Warehouse::create([
            'code'=>$request->input('code'),
            'name'=>$request->input('name'),
            'type'=>$request->input('type'),
            'user_id'=>$request->input('user_id')
        ]);

        return redirect()->back()->with('message', ['type'=>'success', 'message'=> 'warehouse.message.creationSuccessfully'] );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Warehouse  $warehouse
     * @return \Illuminate\Http\Response
     */
    public function show(Warehouse $warehouse)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Warehouse  $warehouse
     * @return \Illuminate\Http\JsonResponse
     */
    public function edit(Warehouse $warehouse)
    {
        return response()->json($warehouse);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateWarehouseRequest  $request
     * @param  \App\Models\Warehouse  $warehouse
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(UpdateWarehouseRequest $request, Warehouse $warehouse)
    {
        $warehouse->update([
            'code'=>$request->input('code'),
            'name'=>$request->input('name'),
            'type'=>$request->input('type'),
            'user_id'=>$request->input('user_id')
        ]);

        return redirect()->back()->with('message', ['type'=>'success', 'message'=> 'warehouse.message.updateSuccessfully'] );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Warehouse  $warehouse
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(Warehouse $warehouse)
    {
        $warehouse->delete();

        return redirect()->back()->with('message', ['type'=>'success', 'message'=> 'warehouse.message.deletionSuccessfully'] );
    }
}
