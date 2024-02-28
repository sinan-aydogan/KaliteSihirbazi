<?php
use Spatie\Permission\Models\Permission;

$hrDepartmentPermissions = [
    'create department',
    'read department',
    'update department',
    'delete department'
];
foreach ($hrDepartmentPermissions as $permission) {
    $hrDepartmentPermission = new Permission([
        'name' => $permission,
        'guard_name' => 'web',
    ]);
    $hrDepartmentPermission->save();

    $hrDepartmentPermission->assignRole('Human Resources');
}
