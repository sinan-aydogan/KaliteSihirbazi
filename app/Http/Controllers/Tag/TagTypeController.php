<?php

namespace App\Http\Controllers\Tag;

use App\Http\Controllers\Controller;
use App\Http\Requests\Tag\StoreTagTypeRequest;
use App\Http\Requests\Tag\UpdateTagTypeRequest;
use App\Models\Tag\TagType;
use Inertia\Inertia;

class TagTypeController extends Controller
{
    /**
     * Global tag pool management: every tag type and its tags, in one place.
     * Which of these types a given module actually shows is a separate,
     * per-module setting (see e.g. DocumentTagSettingController).
     */
    public function index()
    {
        $this->authorize('manage', TagType::class);

        return Inertia::render('Setting/Tag/IndexPage', [
            'tagTypes' => TagType::query()->with('tags')->withCount('tags')->orderBy('name')->get(),
        ]);
    }

    public function store(StoreTagTypeRequest $request)
    {
        $this->authorize('manage', TagType::class);

        TagType::create($request->validated());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.tagType.created')]);

        return redirect()->back();
    }

    public function update(UpdateTagTypeRequest $request, TagType $tagType)
    {
        $this->authorize('manage', TagType::class);

        $tagType->update($request->validated());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.tagType.updated')]);

        return redirect()->back();
    }

    public function destroy(TagType $tagType)
    {
        $this->authorize('manage', TagType::class);

        $tagType->delete();

        session()->flash('message', ['type' => 'success', 'content' => __('messages.tagType.deleted')]);

        return redirect()->back();
    }
}
