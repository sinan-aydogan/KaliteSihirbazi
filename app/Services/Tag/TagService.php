<?php

namespace App\Services\Tag;

use App\Models\Tag\ModuleTagType;
use App\Models\Tag\Tag;
use App\Models\Tag\TagType;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class TagService
{
    /**
     * Create a tag under a type. Idempotent by (type, slug), since the same
     * tag name may be requested again from a module's tag picker.
     */
    public function createTag(TagType $tagType, string $name): Tag
    {
        // Standard/regulation names commonly use a colon (e.g. "ISO 9001:2015");
        // Str::slug() would otherwise just drop it, colliding "9001:2015" and
        // "9001-2015" onto the same slug.
        $slug = Str::slug(str_replace(':', '-', $name));

        $existing = Tag::query()
            ->where('tag_type_id', $tagType->id)
            ->where('slug', $slug)
            ->first();

        if ($existing) {
            return $existing;
        }

        return Tag::create([
            'tag_type_id' => $tagType->id,
            'name' => $name,
            'slug' => $slug,
        ]);
    }

    /**
     * Tag type ids currently enabled for a module (by its route key, e.g. "document").
     *
     * @return array<int, int>
     */
    public function enabledTypeIdsFor(string $moduleKey): array
    {
        return ModuleTagType::query()
            ->where('module_key', $moduleKey)
            ->pluck('tag_type_id')
            ->all();
    }

    /**
     * Tag types (with their tags) currently enabled for a module.
     *
     * @return Collection<int, TagType>
     */
    public function enabledTypesFor(string $moduleKey): Collection
    {
        return TagType::query()
            ->whereIn('id', $this->enabledTypeIdsFor($moduleKey))
            ->with('tags')
            ->orderBy('name')
            ->get();
    }

    /**
     * Replace the set of tag types enabled for a module with the given list.
     *
     * @param  array<int, int>  $tagTypeIds
     */
    public function setEnabledTypesForModule(string $moduleKey, array $tagTypeIds): void
    {
        ModuleTagType::query()
            ->where('module_key', $moduleKey)
            ->whereNotIn('tag_type_id', $tagTypeIds)
            ->delete();

        foreach ($tagTypeIds as $tagTypeId) {
            ModuleTagType::firstOrCreate(['module_key' => $moduleKey, 'tag_type_id' => $tagTypeId]);
        }
    }

    /**
     * Replace a taggable model's tags with the given set.
     *
     * @param  array<int, int>  $tagIds
     */
    public function syncTags(Model $taggable, array $tagIds): void
    {
        $taggable->tags()->sync($tagIds);
    }
}
