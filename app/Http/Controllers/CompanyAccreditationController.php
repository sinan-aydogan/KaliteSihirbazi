<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCompanyAccreditationRequest;
use App\Http\Requests\UpdateCompanyAccreditationRequest;
use App\Models\CompanyAccreditation;
use App\Models\Standard;
use Inertia\Inertia;

class CompanyAccreditationController extends Controller
{
    /**
     * Accreditation records for a single standard.
     */
    public function index(Standard $standard)
    {
        $accreditations = $standard->companyAccreditations()
            ->latest('id')
            ->get()
            ->map(fn (CompanyAccreditation $accreditation) => tap($accreditation, function (CompanyAccreditation $a) {
                $a['is_expired'] = $a->isExpired();
                $a['certificate_url'] = $a->getFirstMediaUrl('certificate') ?: null;
            }));

        return Inertia::render('Modules/Standard/AccreditationsPage', [
            'standard' => $standard,
            'accreditations' => $accreditations,
        ]);
    }

    public function store(StoreCompanyAccreditationRequest $request, Standard $standard)
    {
        $accreditation = $standard->companyAccreditations()->create($request->safe()->except('certificate_file'));

        if ($request->hasFile('certificate_file')) {
            $accreditation->addMedia($request->file('certificate_file'))->toMediaCollection('certificate');
        }

        session()->flash('message', ['type' => 'success', 'content' => __('messages.companyAccreditation.created')]);

        return redirect()->back();
    }

    public function update(UpdateCompanyAccreditationRequest $request, CompanyAccreditation $companyAccreditation)
    {
        $companyAccreditation->update($request->safe()->except('certificate_file'));

        if ($request->hasFile('certificate_file')) {
            $companyAccreditation->addMedia($request->file('certificate_file'))->toMediaCollection('certificate');
        }

        session()->flash('message', ['type' => 'success', 'content' => __('messages.companyAccreditation.updated')]);

        return redirect()->back();
    }

    public function destroy(CompanyAccreditation $companyAccreditation)
    {
        $companyAccreditation->delete();

        session()->flash('message', ['type' => 'success', 'content' => __('messages.companyAccreditation.deleted')]);

        return redirect()->back();
    }
}
