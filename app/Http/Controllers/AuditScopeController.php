<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreAuditScopeRequest;
use App\Http\Requests\UpdateAuditScopeRequest;
use App\Models\AuditScope;
use Illuminate\Support\Str;
use Inertia\Inertia;

class AuditScopeController extends Controller
{
    public function index()
    {
        $auditScopes = $this->tableFilter(AuditScope::withCount('audits'))
            ->orderBy('sort_order')
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Modules/Audit/Setting/ScopesPage', [
            'tableData' => $auditScopes,
        ]);
    }

    public function create()
    {
        //
    }

    public function store(StoreAuditScopeRequest $request)
    {
        AuditScope::create([
            ...$request->validated(),
            'key' => Str::slug($request->validated('name'), '_'),
            'is_protected' => false,
        ]);

        session()->flash('message', ['type' => 'success', 'content' => __('messages.auditScope.created')]);

        return redirect()->back();
    }

    public function show(AuditScope $auditScope)
    {
        //
    }

    public function edit(AuditScope $auditScope)
    {
        return response()->json($auditScope);
    }

    public function update(UpdateAuditScopeRequest $request, AuditScope $auditScope)
    {
        $auditScope->update($request->validated());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.auditScope.updated')]);

        return redirect()->back();
    }

    public function destroy(AuditScope $auditScope)
    {
        if ($auditScope->is_protected) {
            session()->flash('message', ['type' => 'danger', 'content' => __('messages.auditScope.deletedErrorProtected')]);

            return redirect()->back();
        }

        if ($auditScope->audits()->exists()) {
            session()->flash('message', ['type' => 'danger', 'content' => __('messages.auditScope.deletedError')]);

            return redirect()->back();
        }

        $auditScope->delete();

        session()->flash('message', ['type' => 'success', 'content' => __('messages.auditScope.deleted')]);

        return redirect()->back();
    }
}
