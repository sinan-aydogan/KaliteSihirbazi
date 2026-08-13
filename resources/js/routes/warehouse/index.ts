import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Warehouse\WarehouseController::search
* @see app/Http/Controllers/Warehouse/WarehouseController.php:24
* @route '/warehouse/search'
*/
export const search = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: search.url(options),
    method: 'post',
})

search.definition = {
    methods: ["post"],
    url: '/warehouse/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Warehouse\WarehouseController::search
* @see app/Http/Controllers/Warehouse/WarehouseController.php:24
* @route '/warehouse/search'
*/
search.url = (options?: RouteQueryOptions) => {
    return search.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Warehouse\WarehouseController::search
* @see app/Http/Controllers/Warehouse/WarehouseController.php:24
* @route '/warehouse/search'
*/
search.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: search.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Warehouse\WarehouseController::search
* @see app/Http/Controllers/Warehouse/WarehouseController.php:24
* @route '/warehouse/search'
*/
const searchForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: search.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Warehouse\WarehouseController::search
* @see app/Http/Controllers/Warehouse/WarehouseController.php:24
* @route '/warehouse/search'
*/
searchForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: search.url(options),
    method: 'post',
})

search.form = searchForm

/**
* @see \App\Http\Controllers\Warehouse\WarehouseController::index
* @see app/Http/Controllers/Warehouse/WarehouseController.php:24
* @route '/warehouse'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/warehouse',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Warehouse\WarehouseController::index
* @see app/Http/Controllers/Warehouse/WarehouseController.php:24
* @route '/warehouse'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Warehouse\WarehouseController::index
* @see app/Http/Controllers/Warehouse/WarehouseController.php:24
* @route '/warehouse'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Warehouse\WarehouseController::index
* @see app/Http/Controllers/Warehouse/WarehouseController.php:24
* @route '/warehouse'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Warehouse\WarehouseController::index
* @see app/Http/Controllers/Warehouse/WarehouseController.php:24
* @route '/warehouse'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Warehouse\WarehouseController::index
* @see app/Http/Controllers/Warehouse/WarehouseController.php:24
* @route '/warehouse'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Warehouse\WarehouseController::index
* @see app/Http/Controllers/Warehouse/WarehouseController.php:24
* @route '/warehouse'
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
* @see \App\Http\Controllers\Warehouse\WarehouseController::create
* @see app/Http/Controllers/Warehouse/WarehouseController.php:59
* @route '/warehouse/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/warehouse/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Warehouse\WarehouseController::create
* @see app/Http/Controllers/Warehouse/WarehouseController.php:59
* @route '/warehouse/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Warehouse\WarehouseController::create
* @see app/Http/Controllers/Warehouse/WarehouseController.php:59
* @route '/warehouse/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Warehouse\WarehouseController::create
* @see app/Http/Controllers/Warehouse/WarehouseController.php:59
* @route '/warehouse/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Warehouse\WarehouseController::create
* @see app/Http/Controllers/Warehouse/WarehouseController.php:59
* @route '/warehouse/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Warehouse\WarehouseController::create
* @see app/Http/Controllers/Warehouse/WarehouseController.php:59
* @route '/warehouse/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Warehouse\WarehouseController::create
* @see app/Http/Controllers/Warehouse/WarehouseController.php:59
* @route '/warehouse/create'
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
* @see \App\Http\Controllers\Warehouse\WarehouseController::store
* @see app/Http/Controllers/Warehouse/WarehouseController.php:69
* @route '/warehouse'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/warehouse',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Warehouse\WarehouseController::store
* @see app/Http/Controllers/Warehouse/WarehouseController.php:69
* @route '/warehouse'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Warehouse\WarehouseController::store
* @see app/Http/Controllers/Warehouse/WarehouseController.php:69
* @route '/warehouse'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Warehouse\WarehouseController::store
* @see app/Http/Controllers/Warehouse/WarehouseController.php:69
* @route '/warehouse'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Warehouse\WarehouseController::store
* @see app/Http/Controllers/Warehouse/WarehouseController.php:69
* @route '/warehouse'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Warehouse\WarehouseController::show
* @see app/Http/Controllers/Warehouse/WarehouseController.php:86
* @route '/warehouse/{warehouse}'
*/
export const show = (args: { warehouse: string | number | { id: string | number } } | [warehouse: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/warehouse/{warehouse}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Warehouse\WarehouseController::show
* @see app/Http/Controllers/Warehouse/WarehouseController.php:86
* @route '/warehouse/{warehouse}'
*/
show.url = (args: { warehouse: string | number | { id: string | number } } | [warehouse: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { warehouse: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { warehouse: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            warehouse: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        warehouse: typeof args.warehouse === 'object'
        ? args.warehouse.id
        : args.warehouse,
    }

    return show.definition.url
            .replace('{warehouse}', parsedArgs.warehouse.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Warehouse\WarehouseController::show
* @see app/Http/Controllers/Warehouse/WarehouseController.php:86
* @route '/warehouse/{warehouse}'
*/
show.get = (args: { warehouse: string | number | { id: string | number } } | [warehouse: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Warehouse\WarehouseController::show
* @see app/Http/Controllers/Warehouse/WarehouseController.php:86
* @route '/warehouse/{warehouse}'
*/
show.head = (args: { warehouse: string | number | { id: string | number } } | [warehouse: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Warehouse\WarehouseController::show
* @see app/Http/Controllers/Warehouse/WarehouseController.php:86
* @route '/warehouse/{warehouse}'
*/
const showForm = (args: { warehouse: string | number | { id: string | number } } | [warehouse: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Warehouse\WarehouseController::show
* @see app/Http/Controllers/Warehouse/WarehouseController.php:86
* @route '/warehouse/{warehouse}'
*/
showForm.get = (args: { warehouse: string | number | { id: string | number } } | [warehouse: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Warehouse\WarehouseController::show
* @see app/Http/Controllers/Warehouse/WarehouseController.php:86
* @route '/warehouse/{warehouse}'
*/
showForm.head = (args: { warehouse: string | number | { id: string | number } } | [warehouse: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Warehouse\WarehouseController::edit
* @see app/Http/Controllers/Warehouse/WarehouseController.php:111
* @route '/warehouse/{warehouse}/edit'
*/
export const edit = (args: { warehouse: string | number | { id: string | number } } | [warehouse: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/warehouse/{warehouse}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Warehouse\WarehouseController::edit
* @see app/Http/Controllers/Warehouse/WarehouseController.php:111
* @route '/warehouse/{warehouse}/edit'
*/
edit.url = (args: { warehouse: string | number | { id: string | number } } | [warehouse: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { warehouse: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { warehouse: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            warehouse: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        warehouse: typeof args.warehouse === 'object'
        ? args.warehouse.id
        : args.warehouse,
    }

    return edit.definition.url
            .replace('{warehouse}', parsedArgs.warehouse.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Warehouse\WarehouseController::edit
* @see app/Http/Controllers/Warehouse/WarehouseController.php:111
* @route '/warehouse/{warehouse}/edit'
*/
edit.get = (args: { warehouse: string | number | { id: string | number } } | [warehouse: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Warehouse\WarehouseController::edit
* @see app/Http/Controllers/Warehouse/WarehouseController.php:111
* @route '/warehouse/{warehouse}/edit'
*/
edit.head = (args: { warehouse: string | number | { id: string | number } } | [warehouse: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Warehouse\WarehouseController::edit
* @see app/Http/Controllers/Warehouse/WarehouseController.php:111
* @route '/warehouse/{warehouse}/edit'
*/
const editForm = (args: { warehouse: string | number | { id: string | number } } | [warehouse: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Warehouse\WarehouseController::edit
* @see app/Http/Controllers/Warehouse/WarehouseController.php:111
* @route '/warehouse/{warehouse}/edit'
*/
editForm.get = (args: { warehouse: string | number | { id: string | number } } | [warehouse: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Warehouse\WarehouseController::edit
* @see app/Http/Controllers/Warehouse/WarehouseController.php:111
* @route '/warehouse/{warehouse}/edit'
*/
editForm.head = (args: { warehouse: string | number | { id: string | number } } | [warehouse: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Warehouse\WarehouseController::update
* @see app/Http/Controllers/Warehouse/WarehouseController.php:121
* @route '/warehouse/{warehouse}'
*/
export const update = (args: { warehouse: string | number | { id: string | number } } | [warehouse: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/warehouse/{warehouse}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Warehouse\WarehouseController::update
* @see app/Http/Controllers/Warehouse/WarehouseController.php:121
* @route '/warehouse/{warehouse}'
*/
update.url = (args: { warehouse: string | number | { id: string | number } } | [warehouse: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { warehouse: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { warehouse: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            warehouse: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        warehouse: typeof args.warehouse === 'object'
        ? args.warehouse.id
        : args.warehouse,
    }

    return update.definition.url
            .replace('{warehouse}', parsedArgs.warehouse.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Warehouse\WarehouseController::update
* @see app/Http/Controllers/Warehouse/WarehouseController.php:121
* @route '/warehouse/{warehouse}'
*/
update.put = (args: { warehouse: string | number | { id: string | number } } | [warehouse: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Warehouse\WarehouseController::update
* @see app/Http/Controllers/Warehouse/WarehouseController.php:121
* @route '/warehouse/{warehouse}'
*/
update.patch = (args: { warehouse: string | number | { id: string | number } } | [warehouse: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Warehouse\WarehouseController::update
* @see app/Http/Controllers/Warehouse/WarehouseController.php:121
* @route '/warehouse/{warehouse}'
*/
const updateForm = (args: { warehouse: string | number | { id: string | number } } | [warehouse: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Warehouse\WarehouseController::update
* @see app/Http/Controllers/Warehouse/WarehouseController.php:121
* @route '/warehouse/{warehouse}'
*/
updateForm.put = (args: { warehouse: string | number | { id: string | number } } | [warehouse: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Warehouse\WarehouseController::update
* @see app/Http/Controllers/Warehouse/WarehouseController.php:121
* @route '/warehouse/{warehouse}'
*/
updateForm.patch = (args: { warehouse: string | number | { id: string | number } } | [warehouse: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Warehouse\WarehouseController::destroy
* @see app/Http/Controllers/Warehouse/WarehouseController.php:138
* @route '/warehouse/{warehouse}'
*/
export const destroy = (args: { warehouse: string | number | { id: string | number } } | [warehouse: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/warehouse/{warehouse}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Warehouse\WarehouseController::destroy
* @see app/Http/Controllers/Warehouse/WarehouseController.php:138
* @route '/warehouse/{warehouse}'
*/
destroy.url = (args: { warehouse: string | number | { id: string | number } } | [warehouse: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { warehouse: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { warehouse: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            warehouse: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        warehouse: typeof args.warehouse === 'object'
        ? args.warehouse.id
        : args.warehouse,
    }

    return destroy.definition.url
            .replace('{warehouse}', parsedArgs.warehouse.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Warehouse\WarehouseController::destroy
* @see app/Http/Controllers/Warehouse/WarehouseController.php:138
* @route '/warehouse/{warehouse}'
*/
destroy.delete = (args: { warehouse: string | number | { id: string | number } } | [warehouse: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Warehouse\WarehouseController::destroy
* @see app/Http/Controllers/Warehouse/WarehouseController.php:138
* @route '/warehouse/{warehouse}'
*/
const destroyForm = (args: { warehouse: string | number | { id: string | number } } | [warehouse: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Warehouse\WarehouseController::destroy
* @see app/Http/Controllers/Warehouse/WarehouseController.php:138
* @route '/warehouse/{warehouse}'
*/
destroyForm.delete = (args: { warehouse: string | number | { id: string | number } } | [warehouse: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

/**
* @see \App\Http\Controllers\Warehouse\WarehouseController::deleted
* @see app/Http/Controllers/Warehouse/WarehouseController.php:43
* @route '/warehouse-deleted'
*/
export const deleted = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deleted.url(options),
    method: 'get',
})

deleted.definition = {
    methods: ["get","head"],
    url: '/warehouse-deleted',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Warehouse\WarehouseController::deleted
* @see app/Http/Controllers/Warehouse/WarehouseController.php:43
* @route '/warehouse-deleted'
*/
deleted.url = (options?: RouteQueryOptions) => {
    return deleted.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Warehouse\WarehouseController::deleted
* @see app/Http/Controllers/Warehouse/WarehouseController.php:43
* @route '/warehouse-deleted'
*/
deleted.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deleted.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Warehouse\WarehouseController::deleted
* @see app/Http/Controllers/Warehouse/WarehouseController.php:43
* @route '/warehouse-deleted'
*/
deleted.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: deleted.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Warehouse\WarehouseController::deleted
* @see app/Http/Controllers/Warehouse/WarehouseController.php:43
* @route '/warehouse-deleted'
*/
const deletedForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: deleted.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Warehouse\WarehouseController::deleted
* @see app/Http/Controllers/Warehouse/WarehouseController.php:43
* @route '/warehouse-deleted'
*/
deletedForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: deleted.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Warehouse\WarehouseController::deleted
* @see app/Http/Controllers/Warehouse/WarehouseController.php:43
* @route '/warehouse-deleted'
*/
deletedForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: deleted.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

deleted.form = deletedForm

/**
* @see \App\Http\Controllers\Warehouse\WarehouseController::permanentDelete
* @see app/Http/Controllers/Warehouse/WarehouseController.php:155
* @route '/warehouse-permanent-delete/{warehouse}'
*/
export const permanentDelete = (args: { warehouse: string | number | { id: string | number } } | [warehouse: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: permanentDelete.url(args, options),
    method: 'delete',
})

permanentDelete.definition = {
    methods: ["delete"],
    url: '/warehouse-permanent-delete/{warehouse}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Warehouse\WarehouseController::permanentDelete
* @see app/Http/Controllers/Warehouse/WarehouseController.php:155
* @route '/warehouse-permanent-delete/{warehouse}'
*/
permanentDelete.url = (args: { warehouse: string | number | { id: string | number } } | [warehouse: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { warehouse: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { warehouse: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            warehouse: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        warehouse: typeof args.warehouse === 'object'
        ? args.warehouse.id
        : args.warehouse,
    }

    return permanentDelete.definition.url
            .replace('{warehouse}', parsedArgs.warehouse.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Warehouse\WarehouseController::permanentDelete
* @see app/Http/Controllers/Warehouse/WarehouseController.php:155
* @route '/warehouse-permanent-delete/{warehouse}'
*/
permanentDelete.delete = (args: { warehouse: string | number | { id: string | number } } | [warehouse: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: permanentDelete.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Warehouse\WarehouseController::permanentDelete
* @see app/Http/Controllers/Warehouse/WarehouseController.php:155
* @route '/warehouse-permanent-delete/{warehouse}'
*/
const permanentDeleteForm = (args: { warehouse: string | number | { id: string | number } } | [warehouse: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: permanentDelete.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Warehouse\WarehouseController::permanentDelete
* @see app/Http/Controllers/Warehouse/WarehouseController.php:155
* @route '/warehouse-permanent-delete/{warehouse}'
*/
permanentDeleteForm.delete = (args: { warehouse: string | number | { id: string | number } } | [warehouse: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: permanentDelete.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

permanentDelete.form = permanentDeleteForm

/**
* @see \App\Http\Controllers\Warehouse\WarehouseController::restore
* @see app/Http/Controllers/Warehouse/WarehouseController.php:172
* @route '/warehouse-restore/{warehouse}'
*/
export const restore = (args: { warehouse: string | number | { id: string | number } } | [warehouse: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: restore.url(args, options),
    method: 'get',
})

restore.definition = {
    methods: ["get","head"],
    url: '/warehouse-restore/{warehouse}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Warehouse\WarehouseController::restore
* @see app/Http/Controllers/Warehouse/WarehouseController.php:172
* @route '/warehouse-restore/{warehouse}'
*/
restore.url = (args: { warehouse: string | number | { id: string | number } } | [warehouse: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { warehouse: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { warehouse: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            warehouse: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        warehouse: typeof args.warehouse === 'object'
        ? args.warehouse.id
        : args.warehouse,
    }

    return restore.definition.url
            .replace('{warehouse}', parsedArgs.warehouse.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Warehouse\WarehouseController::restore
* @see app/Http/Controllers/Warehouse/WarehouseController.php:172
* @route '/warehouse-restore/{warehouse}'
*/
restore.get = (args: { warehouse: string | number | { id: string | number } } | [warehouse: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: restore.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Warehouse\WarehouseController::restore
* @see app/Http/Controllers/Warehouse/WarehouseController.php:172
* @route '/warehouse-restore/{warehouse}'
*/
restore.head = (args: { warehouse: string | number | { id: string | number } } | [warehouse: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: restore.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Warehouse\WarehouseController::restore
* @see app/Http/Controllers/Warehouse/WarehouseController.php:172
* @route '/warehouse-restore/{warehouse}'
*/
const restoreForm = (args: { warehouse: string | number | { id: string | number } } | [warehouse: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: restore.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Warehouse\WarehouseController::restore
* @see app/Http/Controllers/Warehouse/WarehouseController.php:172
* @route '/warehouse-restore/{warehouse}'
*/
restoreForm.get = (args: { warehouse: string | number | { id: string | number } } | [warehouse: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: restore.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Warehouse\WarehouseController::restore
* @see app/Http/Controllers/Warehouse/WarehouseController.php:172
* @route '/warehouse-restore/{warehouse}'
*/
restoreForm.head = (args: { warehouse: string | number | { id: string | number } } | [warehouse: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: restore.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

restore.form = restoreForm

const warehouse = {
    search: Object.assign(search, search),
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
    deleted: Object.assign(deleted, deleted),
    permanentDelete: Object.assign(permanentDelete, permanentDelete),
    restore: Object.assign(restore, restore),
}

export default warehouse