<?php

namespace App\Http\Controllers;

use App\Models\Department;
use App\Models\Employee;
use App\Http\Requests\StoreEmployeeRequest;
use App\Http\Requests\UpdateEmployeeRequest;
use Inertia\Inertia;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        return Inertia::render("Modules/HumanResources/Employee/IndexPage", [
            'tableData' => Employee::with('account:accountable_id,name', 'department:id,name')->latest('id')->paginate(10),
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
     * @param  \App\Http\Requests\StoreEmployeeRequest  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(StoreEmployeeRequest $request)
    {
        $employee = new Employee;
        $employee->has_account = $request->has_account;
        $employee->code = $request->code;
        $employee->name = $request->name;
        $employee->department_id = $request->department_id;
        $employee->employment_type = $request->employment_type;
        $employee->sex = $request->sex;
        $employee->is_married = $request->is_married;
        $employee->contact_info = $request->contact_info;
        $employee->children_count = $request->children_count;
        $employee->birthday = $request->birthday;
        $employee->employment_date = $request->employment_date;
        $employee->leaving_date = $request->leaving_date;
        $employee->leaving_detail = $request->leaving_detail;
        $employee->blood_type = $request->blood_type;
        $employee->status = $request->status;

        $employee->save();

        session()->flash('message', ['type'=> 'success', 'content'=>__('messages.employee.created', ['employee' => $employee->employeeName])]);

        return redirect()->back();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Employee  $employee
     * @return \Inertia\Response
     */
    public function show(Employee $employee)
    {
        $employee['department'] = $employee->department;
        $employee['jdAssignments'] = $employee->jdAssignments();

        return Inertia::render('Modules/HumanResources/Employee/ShowPage', [
            'employee' => $employee,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function edit(Employee $employee)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateEmployeeRequest  $request
     * @param  \App\Models\Employee  $employee
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(UpdateEmployeeRequest $request, Employee $employee)
    {
        $employee->update($request->all());
        if($employee->account && $request->name){
            $employee->account->name = $request->name;
            $employee->push();
        }
        session()->flash('message', ['type'=> 'success', 'content'=>__('messages.employee.updated', ['employee' => $employee->employeeName])]);

        return redirect()->back()->with('employee',$employee);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function destroy(Employee $employee)
    {
        //
    }
}
