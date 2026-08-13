<?php

namespace App\Http\Controllers\HumanResources\Education;

use App\Http\Controllers\Controller;
use App\Http\Requests\HumanResources\Education\StoreEducationInstructorRequest;
use App\Http\Requests\HumanResources\Education\UpdateEducationInstructorRequest;
use App\Models\HumanResources\Education\EducationInstructor;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class EducationInstructorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        return Inertia::render('Modules/HumanResources/Education/Setting/EducationInstructorPage', [
            'tableData' => $this->tableFilter(EducationInstructor::query())->latest('id')->paginate(10)->withQueryString(),
        ]);
    }

    /**
     * Display a listing of the deleted resource.
     *
     * @return Response
     */
    public function deleted()
    {
        return Inertia::render('Modules/HumanResources/Education/Setting/EducationInstructorDeletedPage', [
            'tableData' => $this->tableFilter(EducationInstructor::onlyTrashed())->latest('deleted_at')->paginate(10)->withQueryString(),
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
     * @return RedirectResponse
     */
    public function store(StoreEducationInstructorRequest $request)
    {
        $educationInstructor = new EducationInstructor($request->validated());
        $educationInstructor->save();

        // Fotoğraf yükleme
        if ($request->hasFile('photo')) {
            $educationInstructor->addMediaFromRequest('photo')
                ->sanitizingFileName(function ($fileName) {
                    return strtolower(str_replace(['#', '/', '\\', ' '], '-', $fileName));
                })
                ->toMediaCollection('education_instructor_photo');
        }

        // Belgeler yükleme
        if ($request->hasFile('documents')) {
            foreach ($request->file('documents') as $document) {
                $educationInstructor->addMedia($document)
                    ->sanitizingFileName(function ($fileName) {
                        return strtolower(str_replace(['#', '/', '\\', ' '], '-', $fileName));
                    })
                    ->toMediaCollection('education_instructor_documents');
            }
        }

        session()->flash('message', ['type' => 'success', 'content' => __('messages.educationInstructor.created', ['educationInstructor' => $educationInstructor->name])]);

        return redirect()->back();
    }

    /**
     * Display the specified resource.
     *
     * @return Response
     */
    public function show(EducationInstructor $educationInstructor)
    {
        return Inertia::render('Modules/HumanResources/Education/Setting/EducationInstructorShowPage', [
            'data' => $educationInstructor->load(['educations', 'media']),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @return JsonResponse
     */
    public function edit(EducationInstructor $educationInstructor)
    {
        $photo = $educationInstructor->getFirstMedia('education_instructor_photo');
        $documents = $educationInstructor->getMedia('education_instructor_documents');
        // documents bilgisini array'e çevir
        $documents = $documents->map(function ($media) {
            return [
                'id' => $media->id,
                'name' => $media->name,
                'url' => $media->getUrl(),
                'size' => $media->size,
                'extension' => $media->extension,
            ];
        });

        unset($educationInstructor->media);

        return response()->json([
            'education_instructor' => $educationInstructor,
            'photo' => $photo,
            'documents' => $documents,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @return RedirectResponse
     */
    public function update(UpdateEducationInstructorRequest $request, EducationInstructor $educationInstructor)
    {
        // Update basic attributes
        $educationInstructor->update($request->validated());

        // Fotoğraf güncelleme
        if ($request->hasFile('photo')) {
            // remove existing photo and add new one
            $educationInstructor->clearMediaCollection('education_instructor_photo');
            $educationInstructor->addMediaFromRequest('photo')
                ->sanitizingFileName(function ($fileName) {
                    return strtolower(str_replace(['#', '/', '\\', ' '], '-', $fileName));
                })
                ->toMediaCollection('education_instructor_photo');
        }

        // Belgeler ekleme (mevcut belgeleri silmez)
        if ($request->hasFile('documents')) {
            $documents = $request->file('documents');
            // normalize single file to array
            if (! is_array($documents)) {
                $documents = [$documents];
            }

            foreach ($documents as $document) {
                $educationInstructor->addMedia($document)
                    ->sanitizingFileName(function ($fileName) {
                        return strtolower(str_replace(['#', '/', '\\', ' '], '-', $fileName));
                    })
                    ->toMediaCollection('education_instructor_documents');
            }
        }

        session()->flash('message', ['type' => 'success', 'content' => __('messages.educationInstructor.updated', ['educationInstructor' => $educationInstructor->name])]);

        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @return RedirectResponse
     */
    public function destroy(EducationInstructor $educationInstructor)
    {
        session()->flash('message', ['type' => 'danger', 'content' => __('messages.educationInstructor.deleted', ['educationInstructor' => $educationInstructor->name])]);

        $educationInstructor->delete();

        return redirect()->route('education-instructor.index');
    }

    /**
     * Permanently delete the specified resource from storage.
     *
     * @return RedirectResponse
     */
    public function permanentDestroy(EducationInstructor $educationInstructor)
    {
        // Medya dosyalarını da sil
        $educationInstructor->clearMediaCollection('education_instructor_photo');
        $educationInstructor->clearMediaCollection('education_instructor_documents');

        session()->flash('message', ['type' => 'danger', 'content' => __('messages.educationInstructor.permanentDeleted', ['educationInstructor' => $educationInstructor->name])]);

        $educationInstructor->forceDelete();

        return redirect()->route('education-instructor.index');
    }

    /**
     * Restore the specified resource from storage.
     *
     * @return RedirectResponse
     */
    public function restore(EducationInstructor $educationInstructor)
    {
        $educationInstructor->restore();

        session()->flash('message', ['type' => 'info', 'content' => __('messages.educationInstructor.restored', ['educationInstructor' => $educationInstructor->name])]);

        return redirect()->route('education-instructor.index');
    }

    /**
     * Belirli bir medya dosyasını sil
     *
     * @return RedirectResponse
     */
    public function deleteMedia(EducationInstructor $educationInstructor, int $mediaId)
    {
        $media = $educationInstructor->media()->find($mediaId);

        if ($media) {
            $media->delete();
            session()->flash('message', ['type' => 'success', 'content' => __('messages.educationInstructor.mediaDeleted')]);
        }

        return response()->noContent();
    }
}
