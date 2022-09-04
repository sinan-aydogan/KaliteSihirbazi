<?php

namespace App\Http\Controllers;

use App\Models\Department;
use App\Models\Employee;
use App\Http\Requests\StoreDepartmentRequest;
use App\Http\Requests\UpdateDepartmentRequest;
use Inertia\Inertia;

class DepartmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        return Inertia::render("Modules/BusinessManagement/Department/Index", [
            'tableData' => Department::with('manager:id,has_account')->latest('id')->paginate(10),
            'employees' => Employee::all(['id']),
            'departments' => Department::all(['id', 'name'])
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
     * @param  \App\Http\Requests\StoreDepartmentRequest  $request
     * @return \Inertia\Response
     */
    public function store(StoreDepartmentRequest $request)
    {
        $department = new Department;
        $department->code = $request->code;
        $department->name = $request->name;
        $department->department_id = $request->department_id;
        $department->type = $request->type;
        $department->employee_id = $request->employee_id;

        $department->save();

        session()->flash('message', ['type'=> 'success', 'content'=>__('messages.department.created', ['department' => $department->name])]);

        return redirect()->back();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Department  $department
     * @return \Inertia\Response
     */
    public function show(Department $department)
    {
        $data = [
            'id' => $department->id,
            'code' => $department->code,
            'name' => $department->name,
        ];
        $data['manager'] = $department->manager()->select('id', 'name')->first();
        $data['mainDepartment'] = $department->mainDepartment()->select('id', 'name')->first();

        return Inertia::render('Modules/BusinessManagement/Department/Show', [
            'data' => $data
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Department  $department
     * @return \Illuminate\Http\Response
     */
    public function edit(Department $department)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateDepartmentRequest  $request
     * @param  \App\Models\Department  $department
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateDepartmentRequest $request, Department $department)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Department  $department
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(Department $department)
    {
        session()->flash('message', ['type'=> 'danger', 'content'=>__('messages.department.deleted', ['department' => $department->name])]);

        $department->delete();

        return redirect()->route('department.index');
    }
}
