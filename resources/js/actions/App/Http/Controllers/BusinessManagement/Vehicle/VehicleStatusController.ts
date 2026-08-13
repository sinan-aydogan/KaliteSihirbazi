import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleStatusController::index
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleStatusController.php:17
* @route '/vehicle-status'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/vehicle-status',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleStatusController::index
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleStatusController.php:17
* @route '/vehicle-status'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleStatusController::index
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleStatusController.php:17
* @route '/vehicle-status'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleStatusController::index
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleStatusController.php:17
* @route '/vehicle-status'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleStatusController::index
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleStatusController.php:17
* @route '/vehicle-status'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleStatusController::index
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleStatusController.php:17
* @route '/vehicle-status'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleStatusController::index
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleStatusController.php:17
* @route '/vehicle-status'
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
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleStatusController::create
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleStatusController.php:27
* @route '/vehicle-status/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/vehicle-status/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleStatusController::create
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleStatusController.php:27
* @route '/vehicle-status/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleStatusController::create
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleStatusController.php:27
* @route '/vehicle-status/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleStatusController::create
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleStatusController.php:27
* @route '/vehicle-status/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleStatusController::create
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleStatusController.php:27
* @route '/vehicle-status/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleStatusController::create
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleStatusController.php:27
* @route '/vehicle-status/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleStatusController::create
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleStatusController.php:27
* @route '/vehicle-status/create'
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
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleStatusController::store
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleStatusController.php:35
* @route '/vehicle-status'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/vehicle-status',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleStatusController::store
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleStatusController.php:35
* @route '/vehicle-status'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleStatusController::store
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleStatusController.php:35
* @route '/vehicle-status'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleStatusController::store
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleStatusController.php:35
* @route '/vehicle-status'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleStatusController::store
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleStatusController.php:35
* @route '/vehicle-status'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleStatusController::show
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleStatusController.php:47
* @route '/vehicle-status/{vehicle_status}'
*/
export const show = (args: { vehicle_status: number | { id: number } } | [vehicle_status: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/vehicle-status/{vehicle_status}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleStatusController::show
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleStatusController.php:47
* @route '/vehicle-status/{vehicle_status}'
*/
show.url = (args: { vehicle_status: number | { id: number } } | [vehicle_status: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { vehicle_status: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { vehicle_status: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            vehicle_status: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        vehicle_status: typeof args.vehicle_status === 'object'
        ? args.vehicle_status.id
        : args.vehicle_status,
    }

    return show.definition.url
            .replace('{vehicle_status}', parsedArgs.vehicle_status.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleStatusController::show
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleStatusController.php:47
* @route '/vehicle-status/{vehicle_status}'
*/
show.get = (args: { vehicle_status: number | { id: number } } | [vehicle_status: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleStatusController::show
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleStatusController.php:47
* @route '/vehicle-status/{vehicle_status}'
*/
show.head = (args: { vehicle_status: number | { id: number } } | [vehicle_status: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleStatusController::show
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleStatusController.php:47
* @route '/vehicle-status/{vehicle_status}'
*/
const showForm = (args: { vehicle_status: number | { id: number } } | [vehicle_status: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleStatusController::show
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleStatusController.php:47
* @route '/vehicle-status/{vehicle_status}'
*/
showForm.get = (args: { vehicle_status: number | { id: number } } | [vehicle_status: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleStatusController::show
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleStatusController.php:47
* @route '/vehicle-status/{vehicle_status}'
*/
showForm.head = (args: { vehicle_status: number | { id: number } } | [vehicle_status: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleStatusController::edit
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleStatusController.php:55
* @route '/vehicle-status/{vehicle_status}/edit'
*/
export const edit = (args: { vehicle_status: number | { id: number } } | [vehicle_status: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/vehicle-status/{vehicle_status}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleStatusController::edit
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleStatusController.php:55
* @route '/vehicle-status/{vehicle_status}/edit'
*/
edit.url = (args: { vehicle_status: number | { id: number } } | [vehicle_status: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { vehicle_status: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { vehicle_status: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            vehicle_status: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        vehicle_status: typeof args.vehicle_status === 'object'
        ? args.vehicle_status.id
        : args.vehicle_status,
    }

    return edit.definition.url
            .replace('{vehicle_status}', parsedArgs.vehicle_status.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleStatusController::edit
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleStatusController.php:55
* @route '/vehicle-status/{vehicle_status}/edit'
*/
edit.get = (args: { vehicle_status: number | { id: number } } | [vehicle_status: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleStatusController::edit
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleStatusController.php:55
* @route '/vehicle-status/{vehicle_status}/edit'
*/
edit.head = (args: { vehicle_status: number | { id: number } } | [vehicle_status: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleStatusController::edit
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleStatusController.php:55
* @route '/vehicle-status/{vehicle_status}/edit'
*/
const editForm = (args: { vehicle_status: number | { id: number } } | [vehicle_status: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleStatusController::edit
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleStatusController.php:55
* @route '/vehicle-status/{vehicle_status}/edit'
*/
editForm.get = (args: { vehicle_status: number | { id: number } } | [vehicle_status: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleStatusController::edit
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleStatusController.php:55
* @route '/vehicle-status/{vehicle_status}/edit'
*/
editForm.head = (args: { vehicle_status: number | { id: number } } | [vehicle_status: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleStatusController::update
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleStatusController.php:63
* @route '/vehicle-status/{vehicle_status}'
*/
export const update = (args: { vehicle_status: number | { id: number } } | [vehicle_status: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/vehicle-status/{vehicle_status}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleStatusController::update
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleStatusController.php:63
* @route '/vehicle-status/{vehicle_status}'
*/
update.url = (args: { vehicle_status: number | { id: number } } | [vehicle_status: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { vehicle_status: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { vehicle_status: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            vehicle_status: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        vehicle_status: typeof args.vehicle_status === 'object'
        ? args.vehicle_status.id
        : args.vehicle_status,
    }

    return update.definition.url
            .replace('{vehicle_status}', parsedArgs.vehicle_status.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleStatusController::update
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleStatusController.php:63
* @route '/vehicle-status/{vehicle_status}'
*/
update.put = (args: { vehicle_status: number | { id: number } } | [vehicle_status: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleStatusController::update
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleStatusController.php:63
* @route '/vehicle-status/{vehicle_status}'
*/
update.patch = (args: { vehicle_status: number | { id: number } } | [vehicle_status: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleStatusController::update
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleStatusController.php:63
* @route '/vehicle-status/{vehicle_status}'
*/
const updateForm = (args: { vehicle_status: number | { id: number } } | [vehicle_status: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleStatusController::update
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleStatusController.php:63
* @route '/vehicle-status/{vehicle_status}'
*/
updateForm.put = (args: { vehicle_status: number | { id: number } } | [vehicle_status: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleStatusController::update
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleStatusController.php:63
* @route '/vehicle-status/{vehicle_status}'
*/
updateForm.patch = (args: { vehicle_status: number | { id: number } } | [vehicle_status: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleStatusController::destroy
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleStatusController.php:74
* @route '/vehicle-status/{vehicle_status}'
*/
export const destroy = (args: { vehicle_status: number | { id: number } } | [vehicle_status: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/vehicle-status/{vehicle_status}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleStatusController::destroy
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleStatusController.php:74
* @route '/vehicle-status/{vehicle_status}'
*/
destroy.url = (args: { vehicle_status: number | { id: number } } | [vehicle_status: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { vehicle_status: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { vehicle_status: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            vehicle_status: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        vehicle_status: typeof args.vehicle_status === 'object'
        ? args.vehicle_status.id
        : args.vehicle_status,
    }

    return destroy.definition.url
            .replace('{vehicle_status}', parsedArgs.vehicle_status.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleStatusController::destroy
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleStatusController.php:74
* @route '/vehicle-status/{vehicle_status}'
*/
destroy.delete = (args: { vehicle_status: number | { id: number } } | [vehicle_status: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleStatusController::destroy
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleStatusController.php:74
* @route '/vehicle-status/{vehicle_status}'
*/
const destroyForm = (args: { vehicle_status: number | { id: number } } | [vehicle_status: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleStatusController::destroy
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleStatusController.php:74
* @route '/vehicle-status/{vehicle_status}'
*/
destroyForm.delete = (args: { vehicle_status: number | { id: number } } | [vehicle_status: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const VehicleStatusController = { index, create, store, show, edit, update, destroy }

export default VehicleStatusController