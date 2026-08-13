import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::search
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:18
* @route '/measurement-device-type/search'
*/
export const search = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: search.url(options),
    method: 'post',
})

search.definition = {
    methods: ["post"],
    url: '/measurement-device-type/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::search
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:18
* @route '/measurement-device-type/search'
*/
search.url = (options?: RouteQueryOptions) => {
    return search.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::search
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:18
* @route '/measurement-device-type/search'
*/
search.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: search.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::search
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:18
* @route '/measurement-device-type/search'
*/
const searchForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: search.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::search
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:18
* @route '/measurement-device-type/search'
*/
searchForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: search.url(options),
    method: 'post',
})

search.form = searchForm

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::index
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:18
* @route '/measurement-device-type'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/measurement-device-type',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::index
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:18
* @route '/measurement-device-type'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::index
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:18
* @route '/measurement-device-type'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::index
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:18
* @route '/measurement-device-type'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::index
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:18
* @route '/measurement-device-type'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::index
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:18
* @route '/measurement-device-type'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::index
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:18
* @route '/measurement-device-type'
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
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::create
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:42
* @route '/measurement-device-type/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/measurement-device-type/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::create
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:42
* @route '/measurement-device-type/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::create
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:42
* @route '/measurement-device-type/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::create
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:42
* @route '/measurement-device-type/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::create
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:42
* @route '/measurement-device-type/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::create
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:42
* @route '/measurement-device-type/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::create
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:42
* @route '/measurement-device-type/create'
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
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::store
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:53
* @route '/measurement-device-type'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/measurement-device-type',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::store
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:53
* @route '/measurement-device-type'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::store
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:53
* @route '/measurement-device-type'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::store
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:53
* @route '/measurement-device-type'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::store
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:53
* @route '/measurement-device-type'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::show
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:73
* @route '/measurement-device-type/{measurement_device_type}'
*/
export const show = (args: { measurement_device_type: number | { id: number } } | [measurement_device_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/measurement-device-type/{measurement_device_type}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::show
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:73
* @route '/measurement-device-type/{measurement_device_type}'
*/
show.url = (args: { measurement_device_type: number | { id: number } } | [measurement_device_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { measurement_device_type: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { measurement_device_type: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            measurement_device_type: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        measurement_device_type: typeof args.measurement_device_type === 'object'
        ? args.measurement_device_type.id
        : args.measurement_device_type,
    }

    return show.definition.url
            .replace('{measurement_device_type}', parsedArgs.measurement_device_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::show
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:73
* @route '/measurement-device-type/{measurement_device_type}'
*/
show.get = (args: { measurement_device_type: number | { id: number } } | [measurement_device_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::show
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:73
* @route '/measurement-device-type/{measurement_device_type}'
*/
show.head = (args: { measurement_device_type: number | { id: number } } | [measurement_device_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::show
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:73
* @route '/measurement-device-type/{measurement_device_type}'
*/
const showForm = (args: { measurement_device_type: number | { id: number } } | [measurement_device_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::show
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:73
* @route '/measurement-device-type/{measurement_device_type}'
*/
showForm.get = (args: { measurement_device_type: number | { id: number } } | [measurement_device_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::show
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:73
* @route '/measurement-device-type/{measurement_device_type}'
*/
showForm.head = (args: { measurement_device_type: number | { id: number } } | [measurement_device_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::edit
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:84
* @route '/measurement-device-type/{measurement_device_type}/edit'
*/
export const edit = (args: { measurement_device_type: number | { id: number } } | [measurement_device_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/measurement-device-type/{measurement_device_type}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::edit
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:84
* @route '/measurement-device-type/{measurement_device_type}/edit'
*/
edit.url = (args: { measurement_device_type: number | { id: number } } | [measurement_device_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { measurement_device_type: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { measurement_device_type: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            measurement_device_type: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        measurement_device_type: typeof args.measurement_device_type === 'object'
        ? args.measurement_device_type.id
        : args.measurement_device_type,
    }

    return edit.definition.url
            .replace('{measurement_device_type}', parsedArgs.measurement_device_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::edit
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:84
* @route '/measurement-device-type/{measurement_device_type}/edit'
*/
edit.get = (args: { measurement_device_type: number | { id: number } } | [measurement_device_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::edit
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:84
* @route '/measurement-device-type/{measurement_device_type}/edit'
*/
edit.head = (args: { measurement_device_type: number | { id: number } } | [measurement_device_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::edit
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:84
* @route '/measurement-device-type/{measurement_device_type}/edit'
*/
const editForm = (args: { measurement_device_type: number | { id: number } } | [measurement_device_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::edit
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:84
* @route '/measurement-device-type/{measurement_device_type}/edit'
*/
editForm.get = (args: { measurement_device_type: number | { id: number } } | [measurement_device_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::edit
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:84
* @route '/measurement-device-type/{measurement_device_type}/edit'
*/
editForm.head = (args: { measurement_device_type: number | { id: number } } | [measurement_device_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::update
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:96
* @route '/measurement-device-type/{measurement_device_type}'
*/
export const update = (args: { measurement_device_type: number | { id: number } } | [measurement_device_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/measurement-device-type/{measurement_device_type}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::update
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:96
* @route '/measurement-device-type/{measurement_device_type}'
*/
update.url = (args: { measurement_device_type: number | { id: number } } | [measurement_device_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { measurement_device_type: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { measurement_device_type: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            measurement_device_type: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        measurement_device_type: typeof args.measurement_device_type === 'object'
        ? args.measurement_device_type.id
        : args.measurement_device_type,
    }

    return update.definition.url
            .replace('{measurement_device_type}', parsedArgs.measurement_device_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::update
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:96
* @route '/measurement-device-type/{measurement_device_type}'
*/
update.put = (args: { measurement_device_type: number | { id: number } } | [measurement_device_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::update
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:96
* @route '/measurement-device-type/{measurement_device_type}'
*/
update.patch = (args: { measurement_device_type: number | { id: number } } | [measurement_device_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::update
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:96
* @route '/measurement-device-type/{measurement_device_type}'
*/
const updateForm = (args: { measurement_device_type: number | { id: number } } | [measurement_device_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::update
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:96
* @route '/measurement-device-type/{measurement_device_type}'
*/
updateForm.put = (args: { measurement_device_type: number | { id: number } } | [measurement_device_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::update
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:96
* @route '/measurement-device-type/{measurement_device_type}'
*/
updateForm.patch = (args: { measurement_device_type: number | { id: number } } | [measurement_device_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::destroy
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:115
* @route '/measurement-device-type/{measurement_device_type}'
*/
export const destroy = (args: { measurement_device_type: number | { id: number } } | [measurement_device_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/measurement-device-type/{measurement_device_type}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::destroy
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:115
* @route '/measurement-device-type/{measurement_device_type}'
*/
destroy.url = (args: { measurement_device_type: number | { id: number } } | [measurement_device_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { measurement_device_type: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { measurement_device_type: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            measurement_device_type: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        measurement_device_type: typeof args.measurement_device_type === 'object'
        ? args.measurement_device_type.id
        : args.measurement_device_type,
    }

    return destroy.definition.url
            .replace('{measurement_device_type}', parsedArgs.measurement_device_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::destroy
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:115
* @route '/measurement-device-type/{measurement_device_type}'
*/
destroy.delete = (args: { measurement_device_type: number | { id: number } } | [measurement_device_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::destroy
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:115
* @route '/measurement-device-type/{measurement_device_type}'
*/
const destroyForm = (args: { measurement_device_type: number | { id: number } } | [measurement_device_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::destroy
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:115
* @route '/measurement-device-type/{measurement_device_type}'
*/
destroyForm.delete = (args: { measurement_device_type: number | { id: number } } | [measurement_device_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::deleted
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:30
* @route '/measurement-device-type-deleted'
*/
export const deleted = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deleted.url(options),
    method: 'get',
})

deleted.definition = {
    methods: ["get","head"],
    url: '/measurement-device-type-deleted',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::deleted
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:30
* @route '/measurement-device-type-deleted'
*/
deleted.url = (options?: RouteQueryOptions) => {
    return deleted.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::deleted
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:30
* @route '/measurement-device-type-deleted'
*/
deleted.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deleted.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::deleted
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:30
* @route '/measurement-device-type-deleted'
*/
deleted.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: deleted.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::deleted
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:30
* @route '/measurement-device-type-deleted'
*/
const deletedForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: deleted.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::deleted
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:30
* @route '/measurement-device-type-deleted'
*/
deletedForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: deleted.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::deleted
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:30
* @route '/measurement-device-type-deleted'
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
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::permanentDelete
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:130
* @route '/measurement-device-type-permanent-delete/{measurementDeviceType}'
*/
export const permanentDelete = (args: { measurementDeviceType: number | { id: number } } | [measurementDeviceType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: permanentDelete.url(args, options),
    method: 'delete',
})

permanentDelete.definition = {
    methods: ["delete"],
    url: '/measurement-device-type-permanent-delete/{measurementDeviceType}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::permanentDelete
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:130
* @route '/measurement-device-type-permanent-delete/{measurementDeviceType}'
*/
permanentDelete.url = (args: { measurementDeviceType: number | { id: number } } | [measurementDeviceType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { measurementDeviceType: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { measurementDeviceType: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            measurementDeviceType: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        measurementDeviceType: typeof args.measurementDeviceType === 'object'
        ? args.measurementDeviceType.id
        : args.measurementDeviceType,
    }

    return permanentDelete.definition.url
            .replace('{measurementDeviceType}', parsedArgs.measurementDeviceType.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::permanentDelete
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:130
* @route '/measurement-device-type-permanent-delete/{measurementDeviceType}'
*/
permanentDelete.delete = (args: { measurementDeviceType: number | { id: number } } | [measurementDeviceType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: permanentDelete.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::permanentDelete
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:130
* @route '/measurement-device-type-permanent-delete/{measurementDeviceType}'
*/
const permanentDeleteForm = (args: { measurementDeviceType: number | { id: number } } | [measurementDeviceType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: permanentDelete.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::permanentDelete
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:130
* @route '/measurement-device-type-permanent-delete/{measurementDeviceType}'
*/
permanentDeleteForm.delete = (args: { measurementDeviceType: number | { id: number } } | [measurementDeviceType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::restore
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:145
* @route '/measurement-device-type-restore/{measurementDeviceType}'
*/
export const restore = (args: { measurementDeviceType: number | { id: number } } | [measurementDeviceType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: restore.url(args, options),
    method: 'get',
})

restore.definition = {
    methods: ["get","head"],
    url: '/measurement-device-type-restore/{measurementDeviceType}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::restore
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:145
* @route '/measurement-device-type-restore/{measurementDeviceType}'
*/
restore.url = (args: { measurementDeviceType: number | { id: number } } | [measurementDeviceType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { measurementDeviceType: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { measurementDeviceType: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            measurementDeviceType: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        measurementDeviceType: typeof args.measurementDeviceType === 'object'
        ? args.measurementDeviceType.id
        : args.measurementDeviceType,
    }

    return restore.definition.url
            .replace('{measurementDeviceType}', parsedArgs.measurementDeviceType.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::restore
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:145
* @route '/measurement-device-type-restore/{measurementDeviceType}'
*/
restore.get = (args: { measurementDeviceType: number | { id: number } } | [measurementDeviceType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: restore.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::restore
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:145
* @route '/measurement-device-type-restore/{measurementDeviceType}'
*/
restore.head = (args: { measurementDeviceType: number | { id: number } } | [measurementDeviceType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: restore.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::restore
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:145
* @route '/measurement-device-type-restore/{measurementDeviceType}'
*/
const restoreForm = (args: { measurementDeviceType: number | { id: number } } | [measurementDeviceType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: restore.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::restore
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:145
* @route '/measurement-device-type-restore/{measurementDeviceType}'
*/
restoreForm.get = (args: { measurementDeviceType: number | { id: number } } | [measurementDeviceType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: restore.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::restore
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:145
* @route '/measurement-device-type-restore/{measurementDeviceType}'
*/
restoreForm.head = (args: { measurementDeviceType: number | { id: number } } | [measurementDeviceType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: restore.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

restore.form = restoreForm

const measurementDeviceType = {
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

export default measurementDeviceType