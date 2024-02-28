<?php
use Spatie\Permission\Models\Permission;

$purchaseSupplierTypePermissions = [
    'create supplier_type',
    'read supplier_type',
    'update supplier_type',
    'delete supplier_type'
];
foreach ($purchaseSupplierTypePermissions as $permission) {
    $hrDepartmentPermission = new Permission([
        'name' => $permission,
        'guard_name' => 'web',
    ]);
    $hrDepartmentPermission->save();

    $hrDepartmentPermission->assignRole('Purchase');
}
