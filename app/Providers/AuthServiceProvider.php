<?php

namespace App\Providers;

// use Illuminate\Support\Facades\Gate;
use App\Models\Document\Document;
use App\Models\Document\DocumentVersion;
use App\Models\Tag\Tag;
use App\Models\Tag\TagType;
use App\Policies\DocumentPolicy;
use App\Policies\TagPolicy;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * Namespaced models (e.g. App\Models\Document\Document) fall outside
     * Laravel's default policy-discovery convention, so they must be mapped
     * explicitly here to actually be enforced. DocumentVersion shares
     * DocumentPolicy since its workflow abilities (submit/review/approve/
     * reject/acknowledge) are really document-type-scoped authorization.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        Document::class => DocumentPolicy::class,
        DocumentVersion::class => DocumentPolicy::class,
        TagType::class => TagPolicy::class,
        Tag::class => TagPolicy::class,
    ];

    /**
     * Register any authentication / authorization services.
     */
    public function boot(): void
    {
        //
    }
}
