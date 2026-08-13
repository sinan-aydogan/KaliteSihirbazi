<?php

namespace App\Http\Controllers\Setting;

use App\Http\Controllers\Controller;
use App\Models\Setting\PropertyType;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PropertyTypeController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Setting/Property/Type/Index', [
            'data' => PropertyType::query()->withCount('properties')->orderBy('name')->get(),
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        PropertyType::create($this->validated($request));

        return back(303);
    }

    public function update(Request $request, PropertyType $propertyType): RedirectResponse
    {
        $propertyType->update($this->validated($request, $propertyType));

        return back(303);
    }

    public function destroy(PropertyType $propertyType): RedirectResponse
    {
        $propertyType->delete();

        return back(303);
    }

    private function validated(Request $request, ?PropertyType $propertyType = null): array
    {
        return $request->validate([
            'code' => ['required', 'string', 'max:100', 'unique:property_types,code,'.($propertyType?->id ?? 'NULL')],
            'name' => ['required', 'string', 'max:100'],
            'description' => ['nullable', 'string', 'max:255'],
            'default' => ['required', 'boolean'],
        ]);
    }
}
