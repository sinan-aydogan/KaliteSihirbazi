<?php

use App\Models\Machine;
use App\Models\MachineType;
use App\Models\User;

beforeEach(function () {
    $this->actingAs(User::factory()->create());
});

test('a machine can be created with a type', function () {
    $type = MachineType::factory()->create();

    $this->post(route('machine.store'), [
        'code' => 'MAC-001',
        'name' => 'CNC Tezgahı',
        'machine_type_id' => $type->id,
        'is_active' => true,
    ])->assertSessionHasNoErrors();

    $machine = Machine::where('code', 'MAC-001')->first();

    expect($machine)->not->toBeNull()
        ->and($machine->name)->toBe('CNC Tezgahı')
        ->and($machine->machine_type_id)->toBe($type->id);
});

test('a machine can be updated and soft deleted', function () {
    $machine = Machine::factory()->create();

    $this->put(route('machine.update', $machine), [
        'code' => $machine->code,
        'name' => 'Güncellenmiş Makine',
        'is_active' => false,
    ])->assertSessionHasNoErrors();

    expect($machine->fresh()->name)->toBe('Güncellenmiş Makine');

    $this->delete(route('machine.destroy', $machine));

    expect(Machine::find($machine->id))->toBeNull()
        ->and(Machine::withTrashed()->find($machine->id))->not->toBeNull();
});

test('a machine type can be created, updated and deleted', function () {
    $this->post(route('machine-type.store'), ['name' => 'Torna'])->assertSessionHasNoErrors();
    $type = MachineType::where('name', 'Torna')->first();
    expect($type)->not->toBeNull();

    $this->put(route('machine-type.update', $type), ['name' => 'Torna 2'])->assertSessionHasNoErrors();
    expect($type->fresh()->name)->toBe('Torna 2');

    $this->delete(route('machine-type.destroy', $type));
    expect(MachineType::find($type->id))->toBeNull();
});
