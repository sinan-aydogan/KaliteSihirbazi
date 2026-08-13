<?php

namespace App\Http\Controllers\Setting;

use App\Http\Controllers\Controller;
use App\Models\Setting\Module;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ModuleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return Inertia::render('Setting/Module/Index', ['data' => Module::query()->orderBy('name')->get()]);
    }

    public function store(Request $request): RedirectResponse
    {
        Module::create($this->validated($request));

        return back(303);
    }

    public function update(Request $request, Module $module): RedirectResponse
    {
        $module->update($this->validated($request, $module));

        return back(303);
    }

    public function destroy(Module $module): RedirectResponse
    {
        $module->delete();

        return back(303);
    }

    private function validated(Request $request, ?Module $module = null): array
    {
        return $request->validate([
            'code' => ['required', 'string', 'max:100', 'unique:modules,code,'.($module?->id ?? 'NULL')],
            'name' => ['required', 'string', 'max:100'],
            'description' => ['nullable', 'string', 'max:255'],
            'licence_key' => ['nullable', 'string', 'max:255'],
            'status' => ['required', 'boolean'],
        ]);
    }
}
