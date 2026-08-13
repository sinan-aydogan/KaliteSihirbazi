<?php

namespace App\Http\Controllers\HumanResources\Employee;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreEmployeeRequest;
use App\Http\Requests\UpdateEmployeeRequest;
use App\Models\Department;
use App\Models\HumanResources\Employee\Employee;
use App\Support\TableFilter;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        return Inertia::render('Modules/HumanResources/Employee/IndexPage', [
            'tableData' => $this->tableFilter(Employee::with('account:id,accountable_id,accountable_type,name', 'department:id,name'), [
                'employeeName' => function (Builder $query, string $comparator, mixed $value): void {
                    $query->where(function (Builder $names) use ($comparator, $value): void {
                        TableFilter::applyValue($names, $names->qualifyColumn('name'), $comparator, $value);
                        $names->orWhereHas('account', function (Builder $account) use ($comparator, $value): void {
                            TableFilter::applyValue($account, $account->qualifyColumn('name'), $comparator, $value);
                        });
                    });
                },
                'department_id' => ['relation' => 'department', 'column' => 'name'],
            ])->latest('id')->paginate(10)->withQueryString(),
            'departments' => Department::all(['id', 'name']),
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
     * @return RedirectResponse
     */
    public function store(StoreEmployeeRequest $request)
    {
        try {
            $employee = Employee::create($request->validated());

            session()->flash('message', [
                'type' => 'success',
                'content' => __('messages.employee.created', ['employee' => $employee->name]),
            ]);

            return redirect()->back()->with([
                'employee' => $employee,
            ]);
        } catch (\Exception $e) {
            session()->flash('message', [
                'type' => 'error',
                'content' => __('messages.employee.creation_failed'),
            ]);

            return redirect()->back();
        }
    }

    /**
     * Display the specified resource.
     *
     * @return Response
     */
    public function show(Employee $employee)
    {
        return redirect()->route('employee-personal-info.index', $employee);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function edit(Employee $employee)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @return RedirectResponse
     */
    public function update(UpdateEmployeeRequest $request, Employee $employee)
    {
        try {
            $employee->update($request->validated());

            if ($employee->account && $request->name) {
                $employee->account->name = $request->name;
                $employee->push();
            }

            session()->flash('message', [
                'type' => 'success',
                'content' => __('messages.employee.updated', ['employee' => $employee->employeeName]),
            ]);

            return redirect()->back()->with([
                'employee' => $employee,
            ]);
        } catch (\Exception $e) {
            session()->flash('message', [
                'type' => 'error',
                'content' => __('messages.employee.update_failed'),
            ]);

            return redirect()->back();
        }

    }

    /**
     * Remove the specified resource from storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy(Employee $employee)
    {
        //
    }
}
