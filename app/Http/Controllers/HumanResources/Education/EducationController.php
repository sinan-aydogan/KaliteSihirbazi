<?php

namespace App\Http\Controllers\HumanResources\Education;

use App\Http\Controllers\Controller;
use App\Http\Requests\HumanResources\Education\StoreEducationRequest;
use App\Http\Requests\HumanResources\Education\UpdateEducationRequest;
use App\Models\HumanResources\Education\Education;
use App\Models\HumanResources\Education\EducationPlan;
use App\Models\HumanResources\Education\EducationType;
use App\Models\HumanResources\Education\EducationInstructor;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class EducationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        // İçinde olduğumuz tarih aralığındaki eğitim planlarını al
        $educationPlans = EducationPlan::where('end_date', '>=', now())->select('id', 'name')->get();

        return Inertia::render('Modules/HumanResources/Education/IndexPage', [
            'tableData' => Education::with(['educationPlan', 'educationTypes', 'instructors'])
                ->latest('id')
                ->paginate(10),
            'educationPlans' => $educationPlans,
            'instructors' => EducationInstructor::all(['id', 'name']),
            'educationTypes' => EducationType::all(['id', 'name'])
        ]);
    }

    /**
     * Display a listing of the deleted resource.
     *
     * @return Response
     */
    public function deleted()
    {
        return Inertia::render("Modules/HumanResources/Education/DeletedPage", [
            'tableData' => Education::onlyTrashed()
                ->with(['educationPlan', 'educationTypes'])
                ->latest('deleted_at')
                ->paginate(10),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return void
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param StoreEducationRequest $request
     * @return RedirectResponse
     */
    public function store(StoreEducationRequest $request)
    {
        $education = new Education($request->validated());
        $education->save();

        // Eğitim türlerini bağla
        if ($request->has('education_types')) {
            $education->educationTypes()->sync($request->education_types);
        }

        // Eğitmenleri bağla
        if ($request->has('instructors')) {
            $instructorData = [];
            foreach ($request->instructors as $instructorId => $role) {
                $instructorData[$instructorId] = ['role' => $role];
            }
            $education->instructors()->sync($instructorData);
        }

        // Dokümanları yükle
        if ($request->hasFile('documents')) {
            foreach ($request->file('documents') as $document) {
                $education->addMedia($document)
                    ->toMediaCollection('documents');
            }
        }

        session()->flash('message', ['type'=> 'success', 'content'=>__('messages.education.created', ['education' => $education->name])]);

        return redirect()->back();
    }

    /**
     * Display the specified resource.
     *
     * @param Education $education
     * @return Response
     */
    public function show(Education $education)
    {
        return Inertia::render('Modules/HumanResources/Education/ShowPage', [
            'data' => $education->load([
                'educationPlan',
                'educationTypes',
                'instructors.media',
                'participations.user',
                'media'
            ]),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Education $education
     * @return JsonResponse
     */
    public function edit(Education $education)
    {
        return response()->json($education->load([
            'educationPlan:id,name',
            'educationTypes',
            'instructors',
            'media'
        ]));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateEducationRequest $request
     * @param Education $education
     * @return RedirectResponse
     */
    public function update(UpdateEducationRequest $request, Education $education)
    {
        $education->update($request->validated());

        // Eğitim türlerini güncelle
        if ($request->has('education_types')) {
            $education->educationTypes()->sync($request->education_types);
        }

        // Eğitmenleri güncelle
        if ($request->has('instructors')) {
            $instructorData = [];
            foreach ($request->instructors as $instructorId => $role) {
                $instructorData[$instructorId] = ['role' => $role];
            }
            $education->instructors()->sync($instructorData);
        }

        // Yeni dokümanları ekle
        if ($request->hasFile('documents')) {
            foreach ($request->file('documents') as $document) {
                $education->addMedia($document)
                    ->toMediaCollection('documents');
            }
        }

        session()->flash('message', ['type'=> 'success', 'content'=>__('messages.education.updated', ['education' => $education->name])]);

        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Education $education
     * @return RedirectResponse
     */
    public function destroy(Education $education)
    {
        session()->flash('message', ['type'=> 'danger', 'content'=>__('messages.education.deleted', ['education' => $education->name])]);

        $education->delete();

        return redirect()->route('education.index');
    }

    /**
     * Permanently delete the specified resource from storage.
     *
     * @param Education $education
     * @return RedirectResponse
     */
    public function permanentDestroy(Education $education)
    {
        // Medya dosyalarını da sil
        $education->clearMediaCollection('documents');

        session()->flash('message', ['type'=> 'danger', 'content'=>__('messages.education.permanentDeleted', ['education' => $education->name])]);

        $education->forceDelete();

        return redirect()->route('education.index');
    }

    /**
     * Restore the specified resource from storage.
     *
     * @param Education $education
     * @return RedirectResponse
     */
    public function restore(Education $education)
    {
        $education->restore();

        session()->flash('message', ['type'=> 'info', 'content'=>__('messages.education.restored', ['education' => $education->name])]);

        return redirect()->route('education.index');
    }

    /**
     * Eğitime katılımcı ekle
     *
     * @param Request $request
     * @param Education $education
     * @return RedirectResponse
     */
    public function addParticipant(Request $request, Education $education)
    {
        $request->validate([
            'user_id' => 'required|exists:users,id',
        ]);

        $education->participants()->syncWithoutDetaching([
            $request->user_id => [
                'is_attend' => false,
                'status' => false,
                'score' => null,
            ]
        ]);

        session()->flash('message', ['type'=> 'success', 'content'=>__('messages.education.participantAdded')]);

        return redirect()->back();
    }

    /**
     * Katılımcı bilgilerini güncelle
     *
     * @param Request $request
     * @param Education $education
     * @param User $user
     * @return RedirectResponse
     */
    public function updateParticipant(Request $request, Education $education, User $user)
    {
        $request->validate([
            'is_attend' => 'required|boolean',
            'status' => 'required|boolean',
            'score' => 'nullable|integer|min:0|max:100',
        ]);

        $education->participants()->updateExistingPivot($user->id, [
            'is_attend' => $request->is_attend,
            'status' => $request->status,
            'score' => $request->score,
        ]);

        session()->flash('message', ['type'=> 'success', 'content'=>__('messages.education.participantUpdated')]);

        return redirect()->back();
    }

    /**
     * Katılımcıyı eğitimden çıkar
     *
     * @param Education $education
     * @param User $user
     * @return RedirectResponse
     */
    public function removeParticipant(Education $education, User $user)
    {
        $education->participants()->detach($user->id);

        session()->flash('message', ['type'=> 'success', 'content'=>__('messages.education.participantRemoved')]);

        return redirect()->back();
    }

    /**
     * Belirli bir medya dosyasını sil
     *
     * @param Education $education
     * @param int $mediaId
     * @return RedirectResponse
     */
    public function deleteMedia(Education $education, int $mediaId)
    {
        $media = $education->media()->find($mediaId);

        if ($media) {
            $media->delete();
            session()->flash('message', ['type'=> 'success', 'content'=>__('messages.education.mediaDeleted')]);
        }

        return redirect()->back();
    }
}
