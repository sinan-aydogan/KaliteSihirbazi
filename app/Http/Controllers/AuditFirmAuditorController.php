<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreAuditFirmAuditorRequest;
use App\Http\Requests\UpdateAuditFirmAuditorRequest;
use App\Models\AuditFirm;
use App\Models\AuditFirmAuditor;
use Inertia\Inertia;

class AuditFirmAuditorController extends Controller
{
    public function index(AuditFirm $auditFirm)
    {
        $auditors = $auditFirm->auditors()
            ->latest('id')
            ->get()
            ->map(fn (AuditFirmAuditor $auditor) => tap($auditor, function (AuditFirmAuditor $a) {
                $a['competency_documents'] = $a->getMedia('competency_documents')->map(fn ($m) => ['id' => $m->id, 'name' => $m->file_name, 'url' => $m->getUrl()]);
                $a['visit_documents'] = $a->getMedia('visit_documents')->map(fn ($m) => ['id' => $m->id, 'name' => $m->file_name, 'url' => $m->getUrl()]);
            }));

        return Inertia::render('Modules/AuditFirm/AuditorsPage', [
            'auditFirm' => $auditFirm,
            'auditors' => $auditors,
        ]);
    }

    public function store(StoreAuditFirmAuditorRequest $request, AuditFirm $auditFirm)
    {
        $auditor = $auditFirm->auditors()->create($request->safe()->except(['competency_documents', 'visit_documents']));

        $this->syncDocuments($auditor, $request);

        session()->flash('message', ['type' => 'success', 'content' => __('messages.auditFirmAuditor.created')]);

        return redirect()->back();
    }

    public function update(UpdateAuditFirmAuditorRequest $request, AuditFirmAuditor $auditFirmAuditor)
    {
        $auditFirmAuditor->update($request->safe()->except(['competency_documents', 'visit_documents']));

        $this->syncDocuments($auditFirmAuditor, $request);

        session()->flash('message', ['type' => 'success', 'content' => __('messages.auditFirmAuditor.updated')]);

        return redirect()->back();
    }

    public function destroy(AuditFirmAuditor $auditFirmAuditor)
    {
        $auditFirmAuditor->delete();

        session()->flash('message', ['type' => 'success', 'content' => __('messages.auditFirmAuditor.deleted')]);

        return redirect()->back();
    }

    public function deleteMedia(AuditFirmAuditor $auditFirmAuditor, int $mediaId)
    {
        $media = $auditFirmAuditor->media()->find($mediaId);

        if ($media) {
            $media->delete();
            session()->flash('message', ['type' => 'success', 'content' => __('messages.auditFirmAuditor.mediaDeleted')]);
        }

        return redirect()->back();
    }

    private function syncDocuments(AuditFirmAuditor $auditor, StoreAuditFirmAuditorRequest|UpdateAuditFirmAuditorRequest $request): void
    {
        foreach ($request->file('competency_documents', []) as $file) {
            $auditor->addMedia($file)->toMediaCollection('competency_documents');
        }

        foreach ($request->file('visit_documents', []) as $file) {
            $auditor->addMedia($file)->toMediaCollection('visit_documents');
        }
    }
}
