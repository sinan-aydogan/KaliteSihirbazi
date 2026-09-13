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
use Illuminate\Support\Facades\Gate;

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
        // Sistem Yöneticisi bypasses every permission check (route middleware,
        // policies, Vue-side `can` checks) — the pre-existing bootstrap admin
        // role, see database/seeders/AdminSeeder.php and RoleSeeder.php.
        Gate::before(fn ($user, $ability) => $user->hasRole('Sistem Yöneticisi') ? true : null);
    }
}
