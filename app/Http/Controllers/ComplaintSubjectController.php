<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreComplaintSubjectRequest;
use App\Http\Requests\UpdateComplaintSubjectRequest;
use App\Models\ComplaintSubject;
use Illuminate\Support\Str;
use Inertia\Inertia;

class ComplaintSubjectController extends Controller
{
    public function index()
    {
        $complaintSubjects = $this->tableFilter(ComplaintSubject::withCount('complaints'))
            ->orderBy('sort_order')
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Modules/CustomerComplaint/Setting/ComplaintSubject/IndexPage', [
            'tableData' => $complaintSubjects,
        ]);
    }

    public function create()
    {
        //
    }

    public function store(StoreComplaintSubjectRequest $request)
    {
        ComplaintSubject::create([
            ...$request->validated(),
            'key' => Str::slug($request->validated('name'), '_'),
            'is_protected' => false,
        ]);

        session()->flash('message', ['type' => 'success', 'content' => __('messages.complaintSubject.created')]);

        return redirect()->back();
    }

    public function show(ComplaintSubject $complaintSubject)
    {
        //
    }

    public function edit(ComplaintSubject $complaintSubject)
    {
        return response()->json($complaintSubject);
    }

    public function update(UpdateComplaintSubjectRequest $request, ComplaintSubject $complaintSubject)
    {
        $complaintSubject->update($request->validated());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.complaintSubject.updated')]);

        return redirect()->back();
    }

    public function destroy(ComplaintSubject $complaintSubject)
    {
        if ($complaintSubject->is_protected) {
            session()->flash('message', ['type' => 'danger', 'content' => __('messages.complaintSubject.deletedErrorProtected')]);

            return redirect()->back();
        }

        if ($complaintSubject->complaints()->exists()) {
            session()->flash('message', ['type' => 'danger', 'content' => __('messages.complaintSubject.deletedError')]);

            return redirect()->back();
        }

        $complaintSubject->delete();

        session()->flash('message', ['type' => 'success', 'content' => __('messages.complaintSubject.deleted')]);

        return redirect()->back();
    }
}
