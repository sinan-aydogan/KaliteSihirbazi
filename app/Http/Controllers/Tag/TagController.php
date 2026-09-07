<?php

namespace App\Http\Controllers\Tag;

use App\Http\Controllers\Controller;
use App\Http\Requests\Tag\StoreTagRequest;
use App\Models\Tag\Tag;
use App\Models\Tag\TagType;
use App\Services\Tag\TagService;

class TagController extends Controller
{
    public function __construct(private readonly TagService $tagService)
    {
    }

    public function store(StoreTagRequest $request)
    {
        $this->authorize('manage', TagType::class);

        $tagType = TagType::findOrFail($request->validated('tag_type_id'));
        $this->tagService->createTag($tagType, $request->validated('name'));

        session()->flash('message', ['type' => 'success', 'content' => __('messages.tag.created')]);

        return redirect()->back();
    }

    public function destroy(Tag $tag)
    {
        $this->authorize('manage', TagType::class);

        $tag->delete();

        session()->flash('message', ['type' => 'success', 'content' => __('messages.tag.deleted')]);

        return redirect()->back();
    }
}
