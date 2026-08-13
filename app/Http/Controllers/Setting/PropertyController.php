<?php

namespace App\Http\Controllers\Setting;

use App\Http\Controllers\Controller;
use App\Models\Setting\Property;
use App\Models\Setting\PropertyType;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PropertyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return Inertia::render('Setting/Property/Index', [
            'data' => Property::query()->with('propertyType:id,name')->orderBy('name')->get(),
            'propertyTypes' => PropertyType::query()->orderBy('name')->get(['id', 'name']),
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        Property::create($this->validated($request));

        return back(303);
    }

    public function update(Request $request, Property $property): RedirectResponse
    {
        $property->update($this->validated($request));

        return back(303);
    }

    public function destroy(Property $property): RedirectResponse
    {
        $property->delete();

        return back(303);
    }

    private function validated(Request $request): array
    {
        return $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'feature' => ['required', 'array'],
            'property_type_id' => ['nullable', 'integer', 'exists:property_types,id'],
        ]);
    }
}
