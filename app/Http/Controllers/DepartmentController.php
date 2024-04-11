<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreDepartmentRequest;
use App\Http\Requests\UpdateDepartmentRequest;
use App\Models\Department;
use App\Models\HumanResources\Employee\Employee;
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
        return Inertia::render("Modules/BusinessManagement/Department/IndexPage", [
            'tableData' => Department::with('manager:id,has_account')->latest('id')->paginate(10),
            'employees' => Employee::all(['id']),
            'departments' => Department::all(['id', 'name'])
        ]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function deleted()
    {
        return Inertia::render("Modules/BusinessManagement/Department/DeletedPage", [
            'tableData' => Department::onlyTrashed()->with('manager:id,has_account')->latest('deleted_at')->paginate(10),
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
     * @return \Illuminate\Http\RedirectResponse
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
        $data['mainDepartment'] = $department->mainDepartment()->select('id', 'code', 'name')->first();
        $data['employees'] = $department->employees()->select('id', 'name')->get();

        return Inertia::render('Modules/BusinessManagement/Department/ShowPage', [
            'department' => $data,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Department  $department
     * @return \Illuminate\Http\JsonResponse
     */
    public function edit(Department $department)
    {
        return response()->json($department);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateDepartmentRequest  $request
     * @param  \App\Models\Department  $department
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(UpdateDepartmentRequest $request, Department $department)
    {
        $department->code = $request->code;
        $department->name = $request->name;
        $department->department_id = $request->department_id;
        $department->type = $request->type;
        $department->employee_id = $request->employee_id;

        $department->save();

        session()->flash('message', ['type'=> 'success', 'content'=>__('messages.department.updated', ['department' => $department->name])]);

        return redirect()->back();
    }

    /**
     * Attach an employee to the department
    **/
    public function attachEmployee(Department $department, Employee $employee)
    {
        $employee->department_id = $department->id;
        $employee->save();

        session()->flash('message', ['type'=> 'success', 'content'=>__('messages.department.employeeAttached', ['employee' => $employee->name, 'department' => $department->name])]);

        return redirect()->back();
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

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Department  $department
     * @return \Illuminate\Http\RedirectResponse
     */
    public function permanentDestroy(Department $department)
    {
        session()->flash('message', ['type'=> 'danger', 'content'=>__('messages.department.permanentDeleted', ['department' => $department->name])]);

        $department->forceDelete();

        return redirect()->route('department.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Department  $department
     * @return \Illuminate\Http\RedirectResponse
     */
    public function restore(Department $department)
    {
        session()->flash('message', ['type'=> 'info', 'content'=>__('messages.department.restored', ['department' => $department->name])]);

        $department->restore();

        return redirect()->route('department.index');
    }
}
