<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Laravel\Sanctum\PersonalAccessToken;

class ApiTokenController extends Controller
{
    private const PERMISSIONS = ['create', 'read', 'update', 'delete'];

    public function index(Request $request): Response
    {
        return Inertia::render('API/Index', [
            'tokens' => $request->user()->tokens()->latest()->get()->map(fn (PersonalAccessToken $token) => [
                'id' => $token->id,
                'name' => $token->name,
                'abilities' => $token->abilities,
                'last_used_ago' => $token->last_used_at?->diffForHumans(),
            ]),
            'availablePermissions' => self::PERMISSIONS,
            'defaultPermissions' => ['read'],
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'permissions' => ['array'],
            'permissions.*' => ['string'],
        ]);

        $permissions = array_values(array_intersect($validated['permissions'] ?? ['read'], self::PERMISSIONS));
        $token = $request->user()->createToken($validated['name'], $permissions);

        return back(303)->with('token', $token->plainTextToken);
    }

    public function update(Request $request, PersonalAccessToken $token): RedirectResponse
    {
        abort_unless($token->tokenable()->is($request->user()), 404);

        $validated = $request->validate([
            'permissions' => ['required', 'array'],
            'permissions.*' => ['string'],
        ]);

        $permissions = array_values(array_intersect($validated['permissions'], self::PERMISSIONS));
        $token->forceFill(['abilities' => $permissions])->save();

        return back(303);
    }

    public function destroy(Request $request, PersonalAccessToken $token): RedirectResponse
    {
        abort_unless($token->tokenable()->is($request->user()), 404);
        $token->delete();

        return back(303);
    }
}
