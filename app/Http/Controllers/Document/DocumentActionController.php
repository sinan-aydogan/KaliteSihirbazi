<?php

namespace App\Http\Controllers\Document;

use App\Http\Controllers\Controller;
use App\Models\Document\DocumentActivityLog;
use Inertia\Inertia;

class DocumentActionController extends Controller
{
    /**
     * A read-only audit trail of every workflow/lifecycle action recorded
     * against documents (DocumentWorkflowService writes to this table on
     * every transition), mirroring DocumentRevisionRequestController's
     * visibility rule: admins and Quality Managers see everything, everyone
     * else only sees logs for documents they can view.
     */
    public function index()
    {
        $user = auth()->user();

        $query = DocumentActivityLog::with('document:id,code,name', 'documentVersion:id,version', 'user:id,name');

        if (! $user->hasRole(['Sistem Yöneticisi', 'Kalite Yöneticisi'])) {
            $query->whereHas('document', fn ($q) => $q->visibleTo($user));
        }

        $logs = $query->latest('id')->paginate(15)->withQueryString();

        $logs->through(fn (DocumentActivityLog $log) => tap($log, fn ($l) => $l['action_label'] = $log->action->label()));

        return Inertia::render('Modules/Document/Action/IndexPage', [
            'tableData' => $logs,
        ]);
    }
}
