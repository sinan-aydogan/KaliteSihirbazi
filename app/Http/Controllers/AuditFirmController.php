<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreAuditFirmRequest;
use App\Http\Requests\UpdateAuditFirmRequest;
use App\Models\AuditFirm;
use Inertia\Inertia;

class AuditFirmController extends Controller
{
    public function index()
    {
        $auditFirms = $this->tableFilter(AuditFirm::withCount('audits'))
            ->latest('id')
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Modules/AuditFirm/IndexPage', [
            'tableData' => $auditFirms,
        ]);
    }

    public function create()
    {
        //
    }

    public function store(StoreAuditFirmRequest $request)
    {
        $auditFirm = AuditFirm::create($request->validated());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.auditFirm.created', ['auditFirm' => $auditFirm->name])]);

        return redirect()->back();
    }

    public function show(AuditFirm $auditFirm)
    {
        //
    }

    public function edit(AuditFirm $auditFirm)
    {
        return response()->json($auditFirm);
    }

    public function update(UpdateAuditFirmRequest $request, AuditFirm $auditFirm)
    {
        $auditFirm->update($request->validated());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.auditFirm.updated', ['auditFirm' => $auditFirm->name])]);

        return redirect()->back();
    }

    public function destroy(AuditFirm $auditFirm)
    {
        if ($auditFirm->audits()->exists()) {
            session()->flash('message', ['type' => 'danger', 'content' => __('messages.auditFirm.deletedError', ['auditFirm' => $auditFirm->name])]);

            return redirect()->back();
        }

        session()->flash('message', ['type' => 'success', 'content' => __('messages.auditFirm.deleted', ['auditFirm' => $auditFirm->name])]);

        $auditFirm->delete();

        return redirect()->route('audit-firm.index');
    }
}
