import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Warehouse\WarehouseTypeController::index
* @see app/Http/Controllers/Warehouse/WarehouseTypeController.php:18
* @route '/warehouse-type'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/warehouse-type',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Warehouse\WarehouseTypeController::index
* @see app/Http/Controllers/Warehouse/WarehouseTypeController.php:18
* @route '/warehouse-type'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Warehouse\WarehouseTypeController::index
* @see app/Http/Controllers/Warehouse/WarehouseTypeController.php:18
* @route '/warehouse-type'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Warehouse\WarehouseTypeController::index
* @see app/Http/Controllers/Warehouse/WarehouseTypeController.php:18
* @route '/warehouse-type'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Warehouse\WarehouseTypeController::index
* @see app/Http/Controllers/Warehouse/WarehouseTypeController.php:18
* @route '/warehouse-type'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Warehouse\WarehouseTypeController::index
* @see app/Http/Controllers/Warehouse/WarehouseTypeController.php:18
* @route '/warehouse-type'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Warehouse\WarehouseTypeController::index
* @see app/Http/Controllers/Warehouse/WarehouseTypeController.php:18
* @route '/warehouse-type'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \App\Http\Controllers\Warehouse\WarehouseTypeController::create
* @see app/Http/Controllers/Warehouse/WarehouseTypeController.php:29
* @route '/warehouse-type/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/warehouse-type/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Warehouse\WarehouseTypeController::create
* @see app/Http/Controllers/Warehouse/WarehouseTypeController.php:29
* @route '/warehouse-type/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Warehouse\WarehouseTypeController::create
* @see app/Http/Controllers/Warehouse/WarehouseTypeController.php:29
* @route '/warehouse-type/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Warehouse\WarehouseTypeController::create
* @see app/Http/Controllers/Warehouse/WarehouseTypeController.php:29
* @route '/warehouse-type/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Warehouse\WarehouseTypeController::create
* @see app/Http/Controllers/Warehouse/WarehouseTypeController.php:29
* @route '/warehouse-type/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Warehouse\WarehouseTypeController::create
* @see app/Http/Controllers/Warehouse/WarehouseTypeController.php:29
* @route '/warehouse-type/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Warehouse\WarehouseTypeController::create
* @see app/Http/Controllers/Warehouse/WarehouseTypeController.php:29
* @route '/warehouse-type/create'
*/
createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm

/**
* @see \App\Http\Controllers\Warehouse\WarehouseTypeController::store
* @see app/Http/Controllers/Warehouse/WarehouseTypeController.php:40
* @route '/warehouse-type'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/warehouse-type',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Warehouse\WarehouseTypeController::store
* @see app/Http/Controllers/Warehouse/WarehouseTypeController.php:40
* @route '/warehouse-type'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Warehouse\WarehouseTypeController::store
* @see app/Http/Controllers/Warehouse/WarehouseTypeController.php:40
* @route '/warehouse-type'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Warehouse\WarehouseTypeController::store
* @see app/Http/Controllers/Warehouse/WarehouseTypeController.php:40
* @route '/warehouse-type'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Warehouse\WarehouseTypeController::store
* @see app/Http/Controllers/Warehouse/WarehouseTypeController.php:40
* @route '/warehouse-type'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Warehouse\WarehouseTypeController::show
* @see app/Http/Controllers/Warehouse/WarehouseTypeController.php:59
* @route '/warehouse-type/{warehouse_type}'
*/
export const show = (args: { warehouse_type: string | number | { id: string | number } } | [warehouse_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/warehouse-type/{warehouse_type}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Warehouse\WarehouseTypeController::show
* @see app/Http/Controllers/Warehouse/WarehouseTypeController.php:59
* @route '/warehouse-type/{warehouse_type}'
*/
show.url = (args: { warehouse_type: string | number | { id: string | number } } | [warehouse_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { warehouse_type: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { warehouse_type: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            warehouse_type: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        warehouse_type: typeof args.warehouse_type === 'object'
        ? args.warehouse_type.id
        : args.warehouse_type,
    }

    return show.definition.url
            .replace('{warehouse_type}', parsedArgs.warehouse_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Warehouse\WarehouseTypeController::show
* @see app/Http/Controllers/Warehouse/WarehouseTypeController.php:59
* @route '/warehouse-type/{warehouse_type}'
*/
show.get = (args: { warehouse_type: string | number | { id: string | number } } | [warehouse_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Warehouse\WarehouseTypeController::show
* @see app/Http/Controllers/Warehouse/WarehouseTypeController.php:59
* @route '/warehouse-type/{warehouse_type}'
*/
show.head = (args: { warehouse_type: string | number | { id: string | number } } | [warehouse_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Warehouse\WarehouseTypeController::show
* @see app/Http/Controllers/Warehouse/WarehouseTypeController.php:59
* @route '/warehouse-type/{warehouse_type}'
*/
const showForm = (args: { warehouse_type: string | number | { id: string | number } } | [warehouse_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Warehouse\WarehouseTypeController::show
* @see app/Http/Controllers/Warehouse/WarehouseTypeController.php:59
* @route '/warehouse-type/{warehouse_type}'
*/
showForm.get = (args: { warehouse_type: string | number | { id: string | number } } | [warehouse_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Warehouse\WarehouseTypeController::show
* @see app/Http/Controllers/Warehouse/WarehouseTypeController.php:59
* @route '/warehouse-type/{warehouse_type}'
*/
showForm.head = (args: { warehouse_type: string | number | { id: string | number } } | [warehouse_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

/**
* @see \App\Http\Controllers\Warehouse\WarehouseTypeController::edit
* @see app/Http/Controllers/Warehouse/WarehouseTypeController.php:70
* @route '/warehouse-type/{warehouse_type}/edit'
*/
export const edit = (args: { warehouse_type: string | number | { id: string | number } } | [warehouse_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/warehouse-type/{warehouse_type}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Warehouse\WarehouseTypeController::edit
* @see app/Http/Controllers/Warehouse/WarehouseTypeController.php:70
* @route '/warehouse-type/{warehouse_type}/edit'
*/
edit.url = (args: { warehouse_type: string | number | { id: string | number } } | [warehouse_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { warehouse_type: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { warehouse_type: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            warehouse_type: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        warehouse_type: typeof args.warehouse_type === 'object'
        ? args.warehouse_type.id
        : args.warehouse_type,
    }

    return edit.definition.url
            .replace('{warehouse_type}', parsedArgs.warehouse_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Warehouse\WarehouseTypeController::edit
* @see app/Http/Controllers/Warehouse/WarehouseTypeController.php:70
* @route '/warehouse-type/{warehouse_type}/edit'
*/
edit.get = (args: { warehouse_type: string | number | { id: string | number } } | [warehouse_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Warehouse\WarehouseTypeController::edit
* @see app/Http/Controllers/Warehouse/WarehouseTypeController.php:70
* @route '/warehouse-type/{warehouse_type}/edit'
*/
edit.head = (args: { warehouse_type: string | number | { id: string | number } } | [warehouse_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Warehouse\WarehouseTypeController::edit
* @see app/Http/Controllers/Warehouse/WarehouseTypeController.php:70
* @route '/warehouse-type/{warehouse_type}/edit'
*/
const editForm = (args: { warehouse_type: string | number | { id: string | number } } | [warehouse_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Warehouse\WarehouseTypeController::edit
* @see app/Http/Controllers/Warehouse/WarehouseTypeController.php:70
* @route '/warehouse-type/{warehouse_type}/edit'
*/
editForm.get = (args: { warehouse_type: string | number | { id: string | number } } | [warehouse_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Warehouse\WarehouseTypeController::edit
* @see app/Http/Controllers/Warehouse/WarehouseTypeController.php:70
* @route '/warehouse-type/{warehouse_type}/edit'
*/
editForm.head = (args: { warehouse_type: string | number | { id: string | number } } | [warehouse_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

/**
* @see \App\Http\Controllers\Warehouse\WarehouseTypeController::update
* @see app/Http/Controllers/Warehouse/WarehouseTypeController.php:82
* @route '/warehouse-type/{warehouse_type}'
*/
export const update = (args: { warehouse_type: string | number | { id: string | number } } | [warehouse_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/warehouse-type/{warehouse_type}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Warehouse\WarehouseTypeController::update
* @see app/Http/Controllers/Warehouse/WarehouseTypeController.php:82
* @route '/warehouse-type/{warehouse_type}'
*/
update.url = (args: { warehouse_type: string | number | { id: string | number } } | [warehouse_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { warehouse_type: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { warehouse_type: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            warehouse_type: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        warehouse_type: typeof args.warehouse_type === 'object'
        ? args.warehouse_type.id
        : args.warehouse_type,
    }

    return update.definition.url
            .replace('{warehouse_type}', parsedArgs.warehouse_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Warehouse\WarehouseTypeController::update
* @see app/Http/Controllers/Warehouse/WarehouseTypeController.php:82
* @route '/warehouse-type/{warehouse_type}'
*/
update.put = (args: { warehouse_type: string | number | { id: string | number } } | [warehouse_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Warehouse\WarehouseTypeController::update
* @see app/Http/Controllers/Warehouse/WarehouseTypeController.php:82
* @route '/warehouse-type/{warehouse_type}'
*/
update.patch = (args: { warehouse_type: string | number | { id: string | number } } | [warehouse_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Warehouse\WarehouseTypeController::update
* @see app/Http/Controllers/Warehouse/WarehouseTypeController.php:82
* @route '/warehouse-type/{warehouse_type}'
*/
const updateForm = (args: { warehouse_type: string | number | { id: string | number } } | [warehouse_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Warehouse\WarehouseTypeController::update
* @see app/Http/Controllers/Warehouse/WarehouseTypeController.php:82
* @route '/warehouse-type/{warehouse_type}'
*/
updateForm.put = (args: { warehouse_type: string | number | { id: string | number } } | [warehouse_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Warehouse\WarehouseTypeController::update
* @see app/Http/Controllers/Warehouse/WarehouseTypeController.php:82
* @route '/warehouse-type/{warehouse_type}'
*/
updateForm.patch = (args: { warehouse_type: string | number | { id: string | number } } | [warehouse_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \App\Http\Controllers\Warehouse\WarehouseTypeController::destroy
* @see app/Http/Controllers/Warehouse/WarehouseTypeController.php:100
* @route '/warehouse-type/{warehouse_type}'
*/
export const destroy = (args: { warehouse_type: string | number | { id: string | number } } | [warehouse_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/warehouse-type/{warehouse_type}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Warehouse\WarehouseTypeController::destroy
* @see app/Http/Controllers/Warehouse/WarehouseTypeController.php:100
* @route '/warehouse-type/{warehouse_type}'
*/
destroy.url = (args: { warehouse_type: string | number | { id: string | number } } | [warehouse_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { warehouse_type: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { warehouse_type: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            warehouse_type: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        warehouse_type: typeof args.warehouse_type === 'object'
        ? args.warehouse_type.id
        : args.warehouse_type,
    }

    return destroy.definition.url
            .replace('{warehouse_type}', parsedArgs.warehouse_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Warehouse\WarehouseTypeController::destroy
* @see app/Http/Controllers/Warehouse/WarehouseTypeController.php:100
* @route '/warehouse-type/{warehouse_type}'
*/
destroy.delete = (args: { warehouse_type: string | number | { id: string | number } } | [warehouse_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Warehouse\WarehouseTypeController::destroy
* @see app/Http/Controllers/Warehouse/WarehouseTypeController.php:100
* @route '/warehouse-type/{warehouse_type}'
*/
const destroyForm = (args: { warehouse_type: string | number | { id: string | number } } | [warehouse_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Warehouse\WarehouseTypeController::destroy
* @see app/Http/Controllers/Warehouse/WarehouseTypeController.php:100
* @route '/warehouse-type/{warehouse_type}'
*/
destroyForm.delete = (args: { warehouse_type: string | number | { id: string | number } } | [warehouse_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const WarehouseTypeController = { index, create, store, show, edit, update, destroy }

export default WarehouseTypeController