<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreComplaintSourceTypeRequest;
use App\Http\Requests\UpdateComplaintSourceTypeRequest;
use App\Models\ComplaintSourceType;
use Illuminate\Support\Str;
use Inertia\Inertia;

class ComplaintSourceTypeController extends Controller
{
    public function index()
    {
        $complaintSourceTypes = $this->tableFilter(ComplaintSourceType::withCount('complaints'))
            ->orderBy('sort_order')
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Modules/CustomerComplaint/Setting/ComplaintSourceType/IndexPage', [
            'tableData' => $complaintSourceTypes,
        ]);
    }

    public function create()
    {
        //
    }

    public function store(StoreComplaintSourceTypeRequest $request)
    {
        ComplaintSourceType::create([
            ...$request->validated(),
            'key' => Str::slug($request->validated('name'), '_'),
            'is_protected' => false,
        ]);

        session()->flash('message', ['type' => 'success', 'content' => __('messages.complaintSourceType.created')]);

        return redirect()->back();
    }

    public function show(ComplaintSourceType $complaintSourceType)
    {
        //
    }

    public function edit(ComplaintSourceType $complaintSourceType)
    {
        return response()->json($complaintSourceType);
    }

    public function update(UpdateComplaintSourceTypeRequest $request, ComplaintSourceType $complaintSourceType)
    {
        $complaintSourceType->update($request->validated());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.complaintSourceType.updated')]);

        return redirect()->back();
    }

    public function destroy(ComplaintSourceType $complaintSourceType)
    {
        if ($complaintSourceType->is_protected) {
            session()->flash('message', ['type' => 'danger', 'content' => __('messages.complaintSourceType.deletedErrorProtected')]);

            return redirect()->back();
        }

        if ($complaintSourceType->complaints()->exists()) {
            session()->flash('message', ['type' => 'danger', 'content' => __('messages.complaintSourceType.deletedError')]);

            return redirect()->back();
        }

        $complaintSourceType->delete();

        session()->flash('message', ['type' => 'success', 'content' => __('messages.complaintSourceType.deleted')]);

        return redirect()->back();
    }
}
