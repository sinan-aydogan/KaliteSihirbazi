import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleTypeController::index
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleTypeController.php:16
* @route '/vehicle-type'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/vehicle-type',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleTypeController::index
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleTypeController.php:16
* @route '/vehicle-type'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleTypeController::index
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleTypeController.php:16
* @route '/vehicle-type'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleTypeController::index
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleTypeController.php:16
* @route '/vehicle-type'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleTypeController::index
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleTypeController.php:16
* @route '/vehicle-type'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleTypeController::index
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleTypeController.php:16
* @route '/vehicle-type'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleTypeController::index
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleTypeController.php:16
* @route '/vehicle-type'
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
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleTypeController::create
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleTypeController.php:26
* @route '/vehicle-type/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/vehicle-type/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleTypeController::create
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleTypeController.php:26
* @route '/vehicle-type/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleTypeController::create
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleTypeController.php:26
* @route '/vehicle-type/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleTypeController::create
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleTypeController.php:26
* @route '/vehicle-type/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleTypeController::create
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleTypeController.php:26
* @route '/vehicle-type/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleTypeController::create
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleTypeController.php:26
* @route '/vehicle-type/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleTypeController::create
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleTypeController.php:26
* @route '/vehicle-type/create'
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
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleTypeController::store
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleTypeController.php:34
* @route '/vehicle-type'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/vehicle-type',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleTypeController::store
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleTypeController.php:34
* @route '/vehicle-type'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleTypeController::store
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleTypeController.php:34
* @route '/vehicle-type'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleTypeController::store
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleTypeController.php:34
* @route '/vehicle-type'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleTypeController::store
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleTypeController.php:34
* @route '/vehicle-type'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleTypeController::show
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleTypeController.php:46
* @route '/vehicle-type/{vehicle_type}'
*/
export const show = (args: { vehicle_type: number | { id: number } } | [vehicle_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/vehicle-type/{vehicle_type}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleTypeController::show
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleTypeController.php:46
* @route '/vehicle-type/{vehicle_type}'
*/
show.url = (args: { vehicle_type: number | { id: number } } | [vehicle_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { vehicle_type: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { vehicle_type: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            vehicle_type: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        vehicle_type: typeof args.vehicle_type === 'object'
        ? args.vehicle_type.id
        : args.vehicle_type,
    }

    return show.definition.url
            .replace('{vehicle_type}', parsedArgs.vehicle_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleTypeController::show
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleTypeController.php:46
* @route '/vehicle-type/{vehicle_type}'
*/
show.get = (args: { vehicle_type: number | { id: number } } | [vehicle_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleTypeController::show
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleTypeController.php:46
* @route '/vehicle-type/{vehicle_type}'
*/
show.head = (args: { vehicle_type: number | { id: number } } | [vehicle_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleTypeController::show
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleTypeController.php:46
* @route '/vehicle-type/{vehicle_type}'
*/
const showForm = (args: { vehicle_type: number | { id: number } } | [vehicle_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleTypeController::show
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleTypeController.php:46
* @route '/vehicle-type/{vehicle_type}'
*/
showForm.get = (args: { vehicle_type: number | { id: number } } | [vehicle_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleTypeController::show
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleTypeController.php:46
* @route '/vehicle-type/{vehicle_type}'
*/
showForm.head = (args: { vehicle_type: number | { id: number } } | [vehicle_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleTypeController::edit
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleTypeController.php:54
* @route '/vehicle-type/{vehicle_type}/edit'
*/
export const edit = (args: { vehicle_type: number | { id: number } } | [vehicle_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/vehicle-type/{vehicle_type}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleTypeController::edit
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleTypeController.php:54
* @route '/vehicle-type/{vehicle_type}/edit'
*/
edit.url = (args: { vehicle_type: number | { id: number } } | [vehicle_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { vehicle_type: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { vehicle_type: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            vehicle_type: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        vehicle_type: typeof args.vehicle_type === 'object'
        ? args.vehicle_type.id
        : args.vehicle_type,
    }

    return edit.definition.url
            .replace('{vehicle_type}', parsedArgs.vehicle_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleTypeController::edit
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleTypeController.php:54
* @route '/vehicle-type/{vehicle_type}/edit'
*/
edit.get = (args: { vehicle_type: number | { id: number } } | [vehicle_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleTypeController::edit
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleTypeController.php:54
* @route '/vehicle-type/{vehicle_type}/edit'
*/
edit.head = (args: { vehicle_type: number | { id: number } } | [vehicle_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleTypeController::edit
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleTypeController.php:54
* @route '/vehicle-type/{vehicle_type}/edit'
*/
const editForm = (args: { vehicle_type: number | { id: number } } | [vehicle_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleTypeController::edit
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleTypeController.php:54
* @route '/vehicle-type/{vehicle_type}/edit'
*/
editForm.get = (args: { vehicle_type: number | { id: number } } | [vehicle_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleTypeController::edit
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleTypeController.php:54
* @route '/vehicle-type/{vehicle_type}/edit'
*/
editForm.head = (args: { vehicle_type: number | { id: number } } | [vehicle_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleTypeController::update
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleTypeController.php:62
* @route '/vehicle-type/{vehicle_type}'
*/
export const update = (args: { vehicle_type: number | { id: number } } | [vehicle_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/vehicle-type/{vehicle_type}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleTypeController::update
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleTypeController.php:62
* @route '/vehicle-type/{vehicle_type}'
*/
update.url = (args: { vehicle_type: number | { id: number } } | [vehicle_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { vehicle_type: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { vehicle_type: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            vehicle_type: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        vehicle_type: typeof args.vehicle_type === 'object'
        ? args.vehicle_type.id
        : args.vehicle_type,
    }

    return update.definition.url
            .replace('{vehicle_type}', parsedArgs.vehicle_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleTypeController::update
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleTypeController.php:62
* @route '/vehicle-type/{vehicle_type}'
*/
update.put = (args: { vehicle_type: number | { id: number } } | [vehicle_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleTypeController::update
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleTypeController.php:62
* @route '/vehicle-type/{vehicle_type}'
*/
update.patch = (args: { vehicle_type: number | { id: number } } | [vehicle_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleTypeController::update
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleTypeController.php:62
* @route '/vehicle-type/{vehicle_type}'
*/
const updateForm = (args: { vehicle_type: number | { id: number } } | [vehicle_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleTypeController::update
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleTypeController.php:62
* @route '/vehicle-type/{vehicle_type}'
*/
updateForm.put = (args: { vehicle_type: number | { id: number } } | [vehicle_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleTypeController::update
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleTypeController.php:62
* @route '/vehicle-type/{vehicle_type}'
*/
updateForm.patch = (args: { vehicle_type: number | { id: number } } | [vehicle_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleTypeController::destroy
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleTypeController.php:73
* @route '/vehicle-type/{vehicle_type}'
*/
export const destroy = (args: { vehicle_type: number | { id: number } } | [vehicle_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/vehicle-type/{vehicle_type}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleTypeController::destroy
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleTypeController.php:73
* @route '/vehicle-type/{vehicle_type}'
*/
destroy.url = (args: { vehicle_type: number | { id: number } } | [vehicle_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { vehicle_type: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { vehicle_type: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            vehicle_type: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        vehicle_type: typeof args.vehicle_type === 'object'
        ? args.vehicle_type.id
        : args.vehicle_type,
    }

    return destroy.definition.url
            .replace('{vehicle_type}', parsedArgs.vehicle_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleTypeController::destroy
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleTypeController.php:73
* @route '/vehicle-type/{vehicle_type}'
*/
destroy.delete = (args: { vehicle_type: number | { id: number } } | [vehicle_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleTypeController::destroy
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleTypeController.php:73
* @route '/vehicle-type/{vehicle_type}'
*/
const destroyForm = (args: { vehicle_type: number | { id: number } } | [vehicle_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleTypeController::destroy
* @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleTypeController.php:73
* @route '/vehicle-type/{vehicle_type}'
*/
destroyForm.delete = (args: { vehicle_type: number | { id: number } } | [vehicle_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const vehicleType = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default vehicleType