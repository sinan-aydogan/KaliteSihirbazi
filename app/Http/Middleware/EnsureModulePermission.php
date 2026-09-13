<?php

namespace App\Http\Middleware;

use App\Support\ModulePermission;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Symfony\Component\HttpFoundation\Response;

class EnsureModulePermission
{
    /**
     * Gate a route behind a `{module}.{action}` Spatie permission.
     *
     * If $action is omitted, it is derived from the current route name's
     * suffix (the Route::resource()/soft-delete convention used across this
     * app: index/show/search/deleted => view, create/store => create,
     * edit/update/restore => update, destroy/permanent-delete => delete).
     */
    public function handle(Request $request, Closure $next, string $module, ?string $action = null): Response
    {
        $action ??= $this->actionFromRouteName($request->route()?->getName());

        abort_unless(ModulePermission::allows($request->user(), $module, $action), 403);

        return $next($request);
    }

    private function actionFromRouteName(?string $routeName): string
    {
        $suffix = Str::afterLast($routeName ?? '', '.');

        return match ($suffix) {
            'create', 'store' => 'create',
            'edit', 'update', 'restore' => 'update',
            'destroy', 'permanent-delete' => 'delete',
            default => 'view',
        };
    }
}
