<?php

namespace App\Http\Controllers\Setting;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Inertia\Response;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RoleController extends Controller
{
    /**
     * Roles that back the app's own bootstrap/authorization plumbing and
     * therefore may not be renamed or deleted from this screen.
     */
    private const PROTECTED_ROLES = ['Sistem Yöneticisi'];

    public function index(): Response
    {
        return Inertia::render('Setting/Role/IndexPage', [
            'roles' => Role::query()
                ->withCount('users')
                ->with('permissions:id,name')
                ->orderBy('name')
                ->get()
                ->map(fn (Role $role) => [
                    'id' => $role->id,
                    'name' => $role->name,
                    'users_count' => $role->users_count,
                    'is_protected' => in_array($role->name, self::PROTECTED_ROLES, true),
                    'permissions' => $role->permissions->pluck('name'),
                ]),
            'permissionModules' => config('permission_modules'),
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $data = $this->validated($request);

        $role = Role::create(['name' => $data['name']]);
        $role->syncPermissions($data['permissions']);

        return back(303);
    }

    public function update(Request $request, Role $role): RedirectResponse
    {
        abort_if(in_array($role->name, self::PROTECTED_ROLES, true), 403);

        $data = $this->validated($request, $role);

        $role->update(['name' => $data['name']]);
        $role->syncPermissions($data['permissions']);

        return back(303);
    }

    public function destroy(Role $role): RedirectResponse
    {
        abort_if(in_array($role->name, self::PROTECTED_ROLES, true), 403);

        $role->delete();

        return back(303);
    }

    private function validated(Request $request, ?Role $role = null): array
    {
        return $request->validate([
            'name' => ['required', 'string', 'max:100', Rule::unique('roles', 'name')->ignore($role?->id)],
            'permissions' => ['array'],
            'permissions.*' => [Rule::exists(Permission::class, 'name')],
        ]);
    }
}
