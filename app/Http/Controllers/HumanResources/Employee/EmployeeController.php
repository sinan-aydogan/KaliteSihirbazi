<?php

namespace App\Http\Controllers\HumanResources\Employee;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreEmployeeRequest;
use App\Http\Requests\UpdateEmployeeRequest;
use App\Models\Department;
use App\Models\HumanResources\Employee\Employee;
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
         try {
        $employee = Employee::create($request->validated());

        session()->flash('message', [
            'type' => 'success',
            'content' => __('messages.employee.created', ['employee' => $employee->name])
        ]);

        return redirect()->back();

    }
        catch (\Exception $e) {
            session()->flash('message', ['type'=> 'error', 'content'=>__('messages.employee.store_error')]);
            return redirect()->back();
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\HumanResources\Employee\Employee  $employee
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
     * @param  \App\Models\HumanResources\Employee\Employee  $employee
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
     * @param  \App\Models\HumanResources\Employee\Employee  $employee
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
     * @param  \App\Models\HumanResources\Employee\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function destroy(Employee $employee)
    {
        //
    }
}
