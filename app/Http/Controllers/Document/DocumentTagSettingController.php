<?php

namespace App\Http\Controllers\Document;

use App\Http\Controllers\Controller;
use App\Models\Tag\TagType;
use App\Services\Tag\TagService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DocumentTagSettingController extends Controller
{
    public function __construct(private readonly TagService $tagService)
    {
    }

    /**
     * Which tag types the Document module shows, out of the global tag pool.
     */
    public function index()
    {
        $this->authorize('manage', TagType::class);

        return Inertia::render('Modules/Document/Setting/TagSettingPage', [
            'tagTypes' => TagType::query()->orderBy('name')->get(),
            'enabledTagTypeIds' => $this->tagService->enabledTypeIdsFor('document'),
        ]);
    }

    public function update(Request $request)
    {
        $this->authorize('manage', TagType::class);

        $request->validate([
            'tag_type_ids' => ['array'],
            'tag_type_ids.*' => ['integer', 'exists:tag_types,id'],
        ]);

        $this->tagService->setEnabledTypesForModule('document', $request->input('tag_type_ids', []));

        session()->flash('message', ['type' => 'success', 'content' => __('messages.documentSettings.tagsUpdated')]);

        return redirect()->back();
    }
}
