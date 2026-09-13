<?php

use App\Models\User;
use Database\Seeders\PermissionSeeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

beforeEach(function () {
    $this->seed(PermissionSeeder::class);
});

test('the permission seeder creates a permission per module action and grants them all to Sistem Yöneticisi', function () {
    $moduleCount = count(config('permission_modules'));

    expect(Permission::count())->toBe($moduleCount * 4)
        ->and(Permission::where('name', 'department.view')->exists())->toBeTrue()
        ->and(Role::findByName('Sistem Yöneticisi')->permissions()->count())->toBe($moduleCount * 4);
});

test('a user without the module permission is blocked from a gated route', function () {
    config(['permission_modules.enforced' => true]);

    $this->actingAs(User::factory()->create());

    $this->get(route('department.index'))->assertForbidden();
});

test('a user with the module view permission can access the gated route', function () {
    config(['permission_modules.enforced' => true]);

    $user = User::factory()->create();
    $user->givePermissionTo('department.view');

    $this->actingAs($user);

    $this->get(route('department.index'))->assertOk();
});

test('Sistem Yöneticisi bypasses every permission check', function () {
    config(['permission_modules.enforced' => true]);

    $user = User::factory()->create();
    $user->assignRole('Sistem Yöneticisi');

    $this->actingAs($user);

    $this->get(route('department.index'))->assertOk();
    $this->get(route('risk.index'))->assertOk();
});

test('a role can be created with a set of permissions', function () {
    $this->actingAs(User::factory()->create());

    $this->post(route('role.store'), [
        'name' => 'Kalite Sorumlusu',
        'permissions' => ['problem.view', 'problem.create'],
    ])->assertSessionHasNoErrors();

    $role = Role::where('name', 'Kalite Sorumlusu')->first();

    expect($role)->not->toBeNull()
        ->and($role->permissions->pluck('name')->all())->toEqualCanonicalizing(['problem.view', 'problem.create']);
});

test('the Sistem Yöneticisi role cannot be updated or deleted from the roles screen', function () {
    $this->actingAs(User::factory()->create());

    $role = Role::findByName('Sistem Yöneticisi');

    $this->put(route('role.update', $role), ['name' => 'Hacked', 'permissions' => []])->assertForbidden();
    $this->delete(route('role.destroy', $role))->assertForbidden();
});

test('a user can be assigned roles from the user management screen', function () {
    $this->actingAs(User::factory()->create());

    Role::findOrCreate('Kalite Yöneticisi');
    $target = User::factory()->create();

    $this->put(route('user-management.update-roles', $target), [
        'roles' => ['Kalite Yöneticisi'],
    ])->assertSessionHasNoErrors();

    expect($target->fresh()->hasRole('Kalite Yöneticisi'))->toBeTrue();
});
