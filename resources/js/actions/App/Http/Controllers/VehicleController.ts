import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\VehicleController::index
* @see app/Http/Controllers/VehicleController.php:22
* @route '/vehicle/search'
*/
const indexb0435c95777de09a0fe9ffd35696d00c = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: indexb0435c95777de09a0fe9ffd35696d00c.url(options),
    method: 'post',
})

indexb0435c95777de09a0fe9ffd35696d00c.definition = {
    methods: ["post"],
    url: '/vehicle/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\VehicleController::index
* @see app/Http/Controllers/VehicleController.php:22
* @route '/vehicle/search'
*/
indexb0435c95777de09a0fe9ffd35696d00c.url = (options?: RouteQueryOptions) => {
    return indexb0435c95777de09a0fe9ffd35696d00c.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\VehicleController::index
* @see app/Http/Controllers/VehicleController.php:22
* @route '/vehicle/search'
*/
indexb0435c95777de09a0fe9ffd35696d00c.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: indexb0435c95777de09a0fe9ffd35696d00c.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\VehicleController::index
* @see app/Http/Controllers/VehicleController.php:22
* @route '/vehicle/search'
*/
const indexb0435c95777de09a0fe9ffd35696d00cForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: indexb0435c95777de09a0fe9ffd35696d00c.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\VehicleController::index
* @see app/Http/Controllers/VehicleController.php:22
* @route '/vehicle/search'
*/
indexb0435c95777de09a0fe9ffd35696d00cForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: indexb0435c95777de09a0fe9ffd35696d00c.url(options),
    method: 'post',
})

indexb0435c95777de09a0fe9ffd35696d00c.form = indexb0435c95777de09a0fe9ffd35696d00cForm
/**
* @see \App\Http\Controllers\VehicleController::index
* @see app/Http/Controllers/VehicleController.php:22
* @route '/vehicle'
*/
const indexef0e44c9b87c6f776538fe2e6c5a010f = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexef0e44c9b87c6f776538fe2e6c5a010f.url(options),
    method: 'get',
})

indexef0e44c9b87c6f776538fe2e6c5a010f.definition = {
    methods: ["get","head"],
    url: '/vehicle',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\VehicleController::index
* @see app/Http/Controllers/VehicleController.php:22
* @route '/vehicle'
*/
indexef0e44c9b87c6f776538fe2e6c5a010f.url = (options?: RouteQueryOptions) => {
    return indexef0e44c9b87c6f776538fe2e6c5a010f.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\VehicleController::index
* @see app/Http/Controllers/VehicleController.php:22
* @route '/vehicle'
*/
indexef0e44c9b87c6f776538fe2e6c5a010f.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexef0e44c9b87c6f776538fe2e6c5a010f.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\VehicleController::index
* @see app/Http/Controllers/VehicleController.php:22
* @route '/vehicle'
*/
indexef0e44c9b87c6f776538fe2e6c5a010f.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexef0e44c9b87c6f776538fe2e6c5a010f.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\VehicleController::index
* @see app/Http/Controllers/VehicleController.php:22
* @route '/vehicle'
*/
const indexef0e44c9b87c6f776538fe2e6c5a010fForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexef0e44c9b87c6f776538fe2e6c5a010f.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\VehicleController::index
* @see app/Http/Controllers/VehicleController.php:22
* @route '/vehicle'
*/
indexef0e44c9b87c6f776538fe2e6c5a010fForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexef0e44c9b87c6f776538fe2e6c5a010f.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\VehicleController::index
* @see app/Http/Controllers/VehicleController.php:22
* @route '/vehicle'
*/
indexef0e44c9b87c6f776538fe2e6c5a010fForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexef0e44c9b87c6f776538fe2e6c5a010f.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

indexef0e44c9b87c6f776538fe2e6c5a010f.form = indexef0e44c9b87c6f776538fe2e6c5a010fForm

/**
* Multiple routes resolve to \App\Http\Controllers\VehicleController::index, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `index['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const index = {
    '/vehicle/search': indexb0435c95777de09a0fe9ffd35696d00c,
    '/vehicle': indexef0e44c9b87c6f776538fe2e6c5a010f,
}

/**
* @see \App\Http\Controllers\VehicleController::create
* @see app/Http/Controllers/VehicleController.php:52
* @route '/vehicle/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/vehicle/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\VehicleController::create
* @see app/Http/Controllers/VehicleController.php:52
* @route '/vehicle/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\VehicleController::create
* @see app/Http/Controllers/VehicleController.php:52
* @route '/vehicle/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\VehicleController::create
* @see app/Http/Controllers/VehicleController.php:52
* @route '/vehicle/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\VehicleController::create
* @see app/Http/Controllers/VehicleController.php:52
* @route '/vehicle/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\VehicleController::create
* @see app/Http/Controllers/VehicleController.php:52
* @route '/vehicle/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\VehicleController::create
* @see app/Http/Controllers/VehicleController.php:52
* @route '/vehicle/create'
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
* @see \App\Http\Controllers\VehicleController::store
* @see app/Http/Controllers/VehicleController.php:63
* @route '/vehicle'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/vehicle',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\VehicleController::store
* @see app/Http/Controllers/VehicleController.php:63
* @route '/vehicle'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\VehicleController::store
* @see app/Http/Controllers/VehicleController.php:63
* @route '/vehicle'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\VehicleController::store
* @see app/Http/Controllers/VehicleController.php:63
* @route '/vehicle'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\VehicleController::store
* @see app/Http/Controllers/VehicleController.php:63
* @route '/vehicle'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\VehicleController::show
* @see app/Http/Controllers/VehicleController.php:79
* @route '/vehicle/{vehicle}'
*/
export const show = (args: { vehicle: string | number | { id: string | number } } | [vehicle: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/vehicle/{vehicle}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\VehicleController::show
* @see app/Http/Controllers/VehicleController.php:79
* @route '/vehicle/{vehicle}'
*/
show.url = (args: { vehicle: string | number | { id: string | number } } | [vehicle: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { vehicle: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { vehicle: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            vehicle: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        vehicle: typeof args.vehicle === 'object'
        ? args.vehicle.id
        : args.vehicle,
    }

    return show.definition.url
            .replace('{vehicle}', parsedArgs.vehicle.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\VehicleController::show
* @see app/Http/Controllers/VehicleController.php:79
* @route '/vehicle/{vehicle}'
*/
show.get = (args: { vehicle: string | number | { id: string | number } } | [vehicle: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\VehicleController::show
* @see app/Http/Controllers/VehicleController.php:79
* @route '/vehicle/{vehicle}'
*/
show.head = (args: { vehicle: string | number | { id: string | number } } | [vehicle: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\VehicleController::show
* @see app/Http/Controllers/VehicleController.php:79
* @route '/vehicle/{vehicle}'
*/
const showForm = (args: { vehicle: string | number | { id: string | number } } | [vehicle: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\VehicleController::show
* @see app/Http/Controllers/VehicleController.php:79
* @route '/vehicle/{vehicle}'
*/
showForm.get = (args: { vehicle: string | number | { id: string | number } } | [vehicle: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\VehicleController::show
* @see app/Http/Controllers/VehicleController.php:79
* @route '/vehicle/{vehicle}'
*/
showForm.head = (args: { vehicle: string | number | { id: string | number } } | [vehicle: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\VehicleController::edit
* @see app/Http/Controllers/VehicleController.php:90
* @route '/vehicle/{vehicle}/edit'
*/
export const edit = (args: { vehicle: string | number | { id: string | number } } | [vehicle: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/vehicle/{vehicle}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\VehicleController::edit
* @see app/Http/Controllers/VehicleController.php:90
* @route '/vehicle/{vehicle}/edit'
*/
edit.url = (args: { vehicle: string | number | { id: string | number } } | [vehicle: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { vehicle: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { vehicle: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            vehicle: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        vehicle: typeof args.vehicle === 'object'
        ? args.vehicle.id
        : args.vehicle,
    }

    return edit.definition.url
            .replace('{vehicle}', parsedArgs.vehicle.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\VehicleController::edit
* @see app/Http/Controllers/VehicleController.php:90
* @route '/vehicle/{vehicle}/edit'
*/
edit.get = (args: { vehicle: string | number | { id: string | number } } | [vehicle: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\VehicleController::edit
* @see app/Http/Controllers/VehicleController.php:90
* @route '/vehicle/{vehicle}/edit'
*/
edit.head = (args: { vehicle: string | number | { id: string | number } } | [vehicle: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\VehicleController::edit
* @see app/Http/Controllers/VehicleController.php:90
* @route '/vehicle/{vehicle}/edit'
*/
const editForm = (args: { vehicle: string | number | { id: string | number } } | [vehicle: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\VehicleController::edit
* @see app/Http/Controllers/VehicleController.php:90
* @route '/vehicle/{vehicle}/edit'
*/
editForm.get = (args: { vehicle: string | number | { id: string | number } } | [vehicle: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\VehicleController::edit
* @see app/Http/Controllers/VehicleController.php:90
* @route '/vehicle/{vehicle}/edit'
*/
editForm.head = (args: { vehicle: string | number | { id: string | number } } | [vehicle: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\VehicleController::update
* @see app/Http/Controllers/VehicleController.php:104
* @route '/vehicle/{vehicle}'
*/
export const update = (args: { vehicle: string | number | { id: string | number } } | [vehicle: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/vehicle/{vehicle}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\VehicleController::update
* @see app/Http/Controllers/VehicleController.php:104
* @route '/vehicle/{vehicle}'
*/
update.url = (args: { vehicle: string | number | { id: string | number } } | [vehicle: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { vehicle: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { vehicle: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            vehicle: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        vehicle: typeof args.vehicle === 'object'
        ? args.vehicle.id
        : args.vehicle,
    }

    return update.definition.url
            .replace('{vehicle}', parsedArgs.vehicle.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\VehicleController::update
* @see app/Http/Controllers/VehicleController.php:104
* @route '/vehicle/{vehicle}'
*/
update.put = (args: { vehicle: string | number | { id: string | number } } | [vehicle: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\VehicleController::update
* @see app/Http/Controllers/VehicleController.php:104
* @route '/vehicle/{vehicle}'
*/
update.patch = (args: { vehicle: string | number | { id: string | number } } | [vehicle: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\VehicleController::update
* @see app/Http/Controllers/VehicleController.php:104
* @route '/vehicle/{vehicle}'
*/
const updateForm = (args: { vehicle: string | number | { id: string | number } } | [vehicle: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\VehicleController::update
* @see app/Http/Controllers/VehicleController.php:104
* @route '/vehicle/{vehicle}'
*/
updateForm.put = (args: { vehicle: string | number | { id: string | number } } | [vehicle: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\VehicleController::update
* @see app/Http/Controllers/VehicleController.php:104
* @route '/vehicle/{vehicle}'
*/
updateForm.patch = (args: { vehicle: string | number | { id: string | number } } | [vehicle: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\VehicleController::destroy
* @see app/Http/Controllers/VehicleController.php:119
* @route '/vehicle/{vehicle}'
*/
export const destroy = (args: { vehicle: string | number | { id: string | number } } | [vehicle: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/vehicle/{vehicle}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\VehicleController::destroy
* @see app/Http/Controllers/VehicleController.php:119
* @route '/vehicle/{vehicle}'
*/
destroy.url = (args: { vehicle: string | number | { id: string | number } } | [vehicle: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { vehicle: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { vehicle: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            vehicle: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        vehicle: typeof args.vehicle === 'object'
        ? args.vehicle.id
        : args.vehicle,
    }

    return destroy.definition.url
            .replace('{vehicle}', parsedArgs.vehicle.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\VehicleController::destroy
* @see app/Http/Controllers/VehicleController.php:119
* @route '/vehicle/{vehicle}'
*/
destroy.delete = (args: { vehicle: string | number | { id: string | number } } | [vehicle: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\VehicleController::destroy
* @see app/Http/Controllers/VehicleController.php:119
* @route '/vehicle/{vehicle}'
*/
const destroyForm = (args: { vehicle: string | number | { id: string | number } } | [vehicle: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\VehicleController::destroy
* @see app/Http/Controllers/VehicleController.php:119
* @route '/vehicle/{vehicle}'
*/
destroyForm.delete = (args: { vehicle: string | number | { id: string | number } } | [vehicle: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\VehicleController::deleted
* @see app/Http/Controllers/VehicleController.php:38
* @route '/vehicle-deleted'
*/
export const deleted = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deleted.url(options),
    method: 'get',
})

deleted.definition = {
    methods: ["get","head"],
    url: '/vehicle-deleted',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\VehicleController::deleted
* @see app/Http/Controllers/VehicleController.php:38
* @route '/vehicle-deleted'
*/
deleted.url = (options?: RouteQueryOptions) => {
    return deleted.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\VehicleController::deleted
* @see app/Http/Controllers/VehicleController.php:38
* @route '/vehicle-deleted'
*/
deleted.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deleted.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\VehicleController::deleted
* @see app/Http/Controllers/VehicleController.php:38
* @route '/vehicle-deleted'
*/
deleted.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: deleted.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\VehicleController::deleted
* @see app/Http/Controllers/VehicleController.php:38
* @route '/vehicle-deleted'
*/
const deletedForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: deleted.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\VehicleController::deleted
* @see app/Http/Controllers/VehicleController.php:38
* @route '/vehicle-deleted'
*/
deletedForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: deleted.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\VehicleController::deleted
* @see app/Http/Controllers/VehicleController.php:38
* @route '/vehicle-deleted'
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
* @see \App\Http\Controllers\VehicleController::permanentDestroy
* @see app/Http/Controllers/VehicleController.php:134
* @route '/vehicle-permanent-delete/{vehicle}'
*/
export const permanentDestroy = (args: { vehicle: string | number | { id: string | number } } | [vehicle: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: permanentDestroy.url(args, options),
    method: 'delete',
})

permanentDestroy.definition = {
    methods: ["delete"],
    url: '/vehicle-permanent-delete/{vehicle}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\VehicleController::permanentDestroy
* @see app/Http/Controllers/VehicleController.php:134
* @route '/vehicle-permanent-delete/{vehicle}'
*/
permanentDestroy.url = (args: { vehicle: string | number | { id: string | number } } | [vehicle: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { vehicle: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { vehicle: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            vehicle: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        vehicle: typeof args.vehicle === 'object'
        ? args.vehicle.id
        : args.vehicle,
    }

    return permanentDestroy.definition.url
            .replace('{vehicle}', parsedArgs.vehicle.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\VehicleController::permanentDestroy
* @see app/Http/Controllers/VehicleController.php:134
* @route '/vehicle-permanent-delete/{vehicle}'
*/
permanentDestroy.delete = (args: { vehicle: string | number | { id: string | number } } | [vehicle: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: permanentDestroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\VehicleController::permanentDestroy
* @see app/Http/Controllers/VehicleController.php:134
* @route '/vehicle-permanent-delete/{vehicle}'
*/
const permanentDestroyForm = (args: { vehicle: string | number | { id: string | number } } | [vehicle: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: permanentDestroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\VehicleController::permanentDestroy
* @see app/Http/Controllers/VehicleController.php:134
* @route '/vehicle-permanent-delete/{vehicle}'
*/
permanentDestroyForm.delete = (args: { vehicle: string | number | { id: string | number } } | [vehicle: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: permanentDestroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

permanentDestroy.form = permanentDestroyForm

/**
* @see \App\Http\Controllers\VehicleController::restore
* @see app/Http/Controllers/VehicleController.php:149
* @route '/vehicle-restore/{vehicle}'
*/
export const restore = (args: { vehicle: string | number | { id: string | number } } | [vehicle: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: restore.url(args, options),
    method: 'get',
})

restore.definition = {
    methods: ["get","head"],
    url: '/vehicle-restore/{vehicle}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\VehicleController::restore
* @see app/Http/Controllers/VehicleController.php:149
* @route '/vehicle-restore/{vehicle}'
*/
restore.url = (args: { vehicle: string | number | { id: string | number } } | [vehicle: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { vehicle: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { vehicle: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            vehicle: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        vehicle: typeof args.vehicle === 'object'
        ? args.vehicle.id
        : args.vehicle,
    }

    return restore.definition.url
            .replace('{vehicle}', parsedArgs.vehicle.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\VehicleController::restore
* @see app/Http/Controllers/VehicleController.php:149
* @route '/vehicle-restore/{vehicle}'
*/
restore.get = (args: { vehicle: string | number | { id: string | number } } | [vehicle: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: restore.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\VehicleController::restore
* @see app/Http/Controllers/VehicleController.php:149
* @route '/vehicle-restore/{vehicle}'
*/
restore.head = (args: { vehicle: string | number | { id: string | number } } | [vehicle: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: restore.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\VehicleController::restore
* @see app/Http/Controllers/VehicleController.php:149
* @route '/vehicle-restore/{vehicle}'
*/
const restoreForm = (args: { vehicle: string | number | { id: string | number } } | [vehicle: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: restore.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\VehicleController::restore
* @see app/Http/Controllers/VehicleController.php:149
* @route '/vehicle-restore/{vehicle}'
*/
restoreForm.get = (args: { vehicle: string | number | { id: string | number } } | [vehicle: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: restore.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\VehicleController::restore
* @see app/Http/Controllers/VehicleController.php:149
* @route '/vehicle-restore/{vehicle}'
*/
restoreForm.head = (args: { vehicle: string | number | { id: string | number } } | [vehicle: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: restore.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

restore.form = restoreForm

const VehicleController = { index, create, store, show, edit, update, destroy, deleted, permanentDestroy, restore }

export default VehicleController