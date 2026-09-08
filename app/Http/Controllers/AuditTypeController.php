<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreAuditTypeRequest;
use App\Http\Requests\UpdateAuditTypeRequest;
use App\Models\AuditType;
use Illuminate\Support\Str;
use Inertia\Inertia;

class AuditTypeController extends Controller
{
    public function index()
    {
        $auditTypes = $this->tableFilter(AuditType::withCount('audits'))
            ->orderBy('sort_order')
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Modules/Audit/Setting/TypesPage', [
            'tableData' => $auditTypes,
        ]);
    }

    public function create()
    {
        //
    }

    public function store(StoreAuditTypeRequest $request)
    {
        AuditType::create([
            ...$request->validated(),
            'key' => Str::slug($request->validated('name'), '_'),
            'is_protected' => false,
        ]);

        session()->flash('message', ['type' => 'success', 'content' => __('messages.auditType.created')]);

        return redirect()->back();
    }

    public function show(AuditType $auditType)
    {
        //
    }

    public function edit(AuditType $auditType)
    {
        return response()->json($auditType);
    }

    public function update(UpdateAuditTypeRequest $request, AuditType $auditType)
    {
        $data = $request->validated();
        if ($auditType->is_protected) {
            unset($data['direction']);
        }

        $auditType->update($data);

        session()->flash('message', ['type' => 'success', 'content' => __('messages.auditType.updated')]);

        return redirect()->back();
    }

    public function destroy(AuditType $auditType)
    {
        if ($auditType->is_protected) {
            session()->flash('message', ['type' => 'danger', 'content' => __('messages.auditType.deletedErrorProtected')]);

            return redirect()->back();
        }

        if ($auditType->audits()->exists()) {
            session()->flash('message', ['type' => 'danger', 'content' => __('messages.auditType.deletedError')]);

            return redirect()->back();
        }

        $auditType->delete();

        session()->flash('message', ['type' => 'success', 'content' => __('messages.auditType.deleted')]);

        return redirect()->back();
    }
}
