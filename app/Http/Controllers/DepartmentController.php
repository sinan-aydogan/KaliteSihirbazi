<?php

namespace App\Http\Controllers;

use App\Http\Resources\DepartmentResource;
use App\Models\Department;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreDepartmentRequest;
use App\Http\Requests\UpdateDepartmentRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DepartmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index(Request $request)
    {
        return Inertia::render('Modules/BusinessManagement/Department/Index', [
            'tableData' => DepartmentResource::collection(Department::search($request->all())),
            'users' => User::when($request->input('qD'), function($query)use($request){
                $query->where('name', 'LIKE', "%{$request->input('qD')}%");
            })->get(),
            'departments' => Department::when($request->input('qD'), function($query)use($request){
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
     * @param \App\Http\Requests\StoreDepartmentRequest $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(StoreDepartmentRequest $request)
    {
        Department::create([
            'code' => $request->input('code'),
            'name' => $request->input('name'),
            'type' => $request->input('type'),
            'department_id' => $request->input('department_id'),
            'user_id' => $request->input('user_id')
        ]);

        return redirect()->back()->with('message', ['type' => 'success', 'message' => 'department.message.creationSuccessfully']);
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Department $department
     * @return \Illuminate\Http\Response
     */
    public function show(Department $department)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Models\Department $department
     * @return \Illuminate\Http\Response
     */
    public function edit(Department $department)
    {
        return response()->json($department);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \App\Http\Requests\UpdateDepartmentRequest $request
     * @param \App\Models\Department $department
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(UpdateDepartmentRequest $request, Department $department)
    {
        $department->update([
            'code' => $request->input('code'),
            'name' => $request->input('name'),
            'type' => $request->input('type'),
            'user_id' => $request->input('user_id'),
            'department_id' => $request->input('department_id')
        ]);

        return redirect()->back()->with('message', ['type' => 'success', 'message' => 'department.message.updateSuccessfully']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Department $department
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(Department $department)
    {
        if ($department->subDepartments()->doesntExist()) {
            $department->delete();
            return redirect()->back()->with('message', ['type' => 'success', 'message' => 'department.message.deletionSuccessfully']);

        }else{
            return redirect()->back()->with('message', ['type' => 'warning', 'message' => 'department.message.deletionFailedDeleteSubDepartments']);
        }

    }
}
