<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCustomerRequest;
use App\Http\Requests\UpdateCustomerRequest;
use App\Models\Customer;
use Inertia\Inertia;

class CustomerController extends Controller
{
    public function index()
    {
        $customers = $this->tableFilter(Customer::withCount('complaints'))
            ->latest('id')
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Modules/Customer/IndexPage', [
            'tableData' => $customers,
        ]);
    }

    public function create()
    {
        //
    }

    public function store(StoreCustomerRequest $request)
    {
        Customer::create($request->validated());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.customer.created')]);

        return redirect()->back();
    }

    public function show(Customer $customer)
    {
        //
    }

    public function edit(Customer $customer)
    {
        return response()->json($customer);
    }

    public function update(UpdateCustomerRequest $request, Customer $customer)
    {
        $customer->update($request->validated());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.customer.updated')]);

        return redirect()->back();
    }

    public function destroy(Customer $customer)
    {
        if ($customer->complaints()->exists()) {
            session()->flash('message', ['type' => 'danger', 'content' => __('messages.customer.deletedError')]);

            return redirect()->back();
        }

        $customer->delete();

        session()->flash('message', ['type' => 'success', 'content' => __('messages.customer.deleted')]);

        return redirect()->back();
    }
}
