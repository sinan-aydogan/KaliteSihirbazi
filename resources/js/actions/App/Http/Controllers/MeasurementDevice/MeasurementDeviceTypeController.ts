import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::index
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:18
* @route '/measurement-device-type/search'
*/
const index16f5a3e5d21be336275b840bcd1ee2c9 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: index16f5a3e5d21be336275b840bcd1ee2c9.url(options),
    method: 'post',
})

index16f5a3e5d21be336275b840bcd1ee2c9.definition = {
    methods: ["post"],
    url: '/measurement-device-type/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::index
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:18
* @route '/measurement-device-type/search'
*/
index16f5a3e5d21be336275b840bcd1ee2c9.url = (options?: RouteQueryOptions) => {
    return index16f5a3e5d21be336275b840bcd1ee2c9.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::index
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:18
* @route '/measurement-device-type/search'
*/
index16f5a3e5d21be336275b840bcd1ee2c9.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: index16f5a3e5d21be336275b840bcd1ee2c9.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::index
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:18
* @route '/measurement-device-type/search'
*/
const index16f5a3e5d21be336275b840bcd1ee2c9Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: index16f5a3e5d21be336275b840bcd1ee2c9.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::index
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:18
* @route '/measurement-device-type/search'
*/
index16f5a3e5d21be336275b840bcd1ee2c9Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: index16f5a3e5d21be336275b840bcd1ee2c9.url(options),
    method: 'post',
})

index16f5a3e5d21be336275b840bcd1ee2c9.form = index16f5a3e5d21be336275b840bcd1ee2c9Form
/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::index
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:18
* @route '/measurement-device-type'
*/
const index29ba1dd78ac697f3c5ccd5f08b49f969 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index29ba1dd78ac697f3c5ccd5f08b49f969.url(options),
    method: 'get',
})

index29ba1dd78ac697f3c5ccd5f08b49f969.definition = {
    methods: ["get","head"],
    url: '/measurement-device-type',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::index
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:18
* @route '/measurement-device-type'
*/
index29ba1dd78ac697f3c5ccd5f08b49f969.url = (options?: RouteQueryOptions) => {
    return index29ba1dd78ac697f3c5ccd5f08b49f969.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::index
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:18
* @route '/measurement-device-type'
*/
index29ba1dd78ac697f3c5ccd5f08b49f969.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index29ba1dd78ac697f3c5ccd5f08b49f969.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::index
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:18
* @route '/measurement-device-type'
*/
index29ba1dd78ac697f3c5ccd5f08b49f969.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index29ba1dd78ac697f3c5ccd5f08b49f969.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::index
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:18
* @route '/measurement-device-type'
*/
const index29ba1dd78ac697f3c5ccd5f08b49f969Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index29ba1dd78ac697f3c5ccd5f08b49f969.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::index
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:18
* @route '/measurement-device-type'
*/
index29ba1dd78ac697f3c5ccd5f08b49f969Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index29ba1dd78ac697f3c5ccd5f08b49f969.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::index
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:18
* @route '/measurement-device-type'
*/
index29ba1dd78ac697f3c5ccd5f08b49f969Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index29ba1dd78ac697f3c5ccd5f08b49f969.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index29ba1dd78ac697f3c5ccd5f08b49f969.form = index29ba1dd78ac697f3c5ccd5f08b49f969Form

/**
* Multiple routes resolve to \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::index, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `index['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const index = {
    '/measurement-device-type/search': index16f5a3e5d21be336275b840bcd1ee2c9,
    '/measurement-device-type': index29ba1dd78ac697f3c5ccd5f08b49f969,
}

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
export const show = (args: { measurement_device_type: string | number | { id: string | number } } | [measurement_device_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
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
show.url = (args: { measurement_device_type: string | number | { id: string | number } } | [measurement_device_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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
show.get = (args: { measurement_device_type: string | number | { id: string | number } } | [measurement_device_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::show
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:73
* @route '/measurement-device-type/{measurement_device_type}'
*/
show.head = (args: { measurement_device_type: string | number | { id: string | number } } | [measurement_device_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::show
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:73
* @route '/measurement-device-type/{measurement_device_type}'
*/
const showForm = (args: { measurement_device_type: string | number | { id: string | number } } | [measurement_device_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::show
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:73
* @route '/measurement-device-type/{measurement_device_type}'
*/
showForm.get = (args: { measurement_device_type: string | number | { id: string | number } } | [measurement_device_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::show
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:73
* @route '/measurement-device-type/{measurement_device_type}'
*/
showForm.head = (args: { measurement_device_type: string | number | { id: string | number } } | [measurement_device_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
export const edit = (args: { measurement_device_type: string | number | { id: string | number } } | [measurement_device_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
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
edit.url = (args: { measurement_device_type: string | number | { id: string | number } } | [measurement_device_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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
edit.get = (args: { measurement_device_type: string | number | { id: string | number } } | [measurement_device_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::edit
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:84
* @route '/measurement-device-type/{measurement_device_type}/edit'
*/
edit.head = (args: { measurement_device_type: string | number | { id: string | number } } | [measurement_device_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::edit
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:84
* @route '/measurement-device-type/{measurement_device_type}/edit'
*/
const editForm = (args: { measurement_device_type: string | number | { id: string | number } } | [measurement_device_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::edit
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:84
* @route '/measurement-device-type/{measurement_device_type}/edit'
*/
editForm.get = (args: { measurement_device_type: string | number | { id: string | number } } | [measurement_device_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::edit
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:84
* @route '/measurement-device-type/{measurement_device_type}/edit'
*/
editForm.head = (args: { measurement_device_type: string | number | { id: string | number } } | [measurement_device_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
export const update = (args: { measurement_device_type: string | number | { id: string | number } } | [measurement_device_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
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
update.url = (args: { measurement_device_type: string | number | { id: string | number } } | [measurement_device_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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
update.put = (args: { measurement_device_type: string | number | { id: string | number } } | [measurement_device_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::update
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:96
* @route '/measurement-device-type/{measurement_device_type}'
*/
update.patch = (args: { measurement_device_type: string | number | { id: string | number } } | [measurement_device_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::update
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:96
* @route '/measurement-device-type/{measurement_device_type}'
*/
const updateForm = (args: { measurement_device_type: string | number | { id: string | number } } | [measurement_device_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
updateForm.put = (args: { measurement_device_type: string | number | { id: string | number } } | [measurement_device_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
updateForm.patch = (args: { measurement_device_type: string | number | { id: string | number } } | [measurement_device_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
export const destroy = (args: { measurement_device_type: string | number | { id: string | number } } | [measurement_device_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
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
destroy.url = (args: { measurement_device_type: string | number | { id: string | number } } | [measurement_device_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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
destroy.delete = (args: { measurement_device_type: string | number | { id: string | number } } | [measurement_device_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::destroy
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:115
* @route '/measurement-device-type/{measurement_device_type}'
*/
const destroyForm = (args: { measurement_device_type: string | number | { id: string | number } } | [measurement_device_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
destroyForm.delete = (args: { measurement_device_type: string | number | { id: string | number } } | [measurement_device_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::permanentDestroy
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:130
* @route '/measurement-device-type-permanent-delete/{measurementDeviceType}'
*/
export const permanentDestroy = (args: { measurementDeviceType: string | number | { id: string | number } } | [measurementDeviceType: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: permanentDestroy.url(args, options),
    method: 'delete',
})

permanentDestroy.definition = {
    methods: ["delete"],
    url: '/measurement-device-type-permanent-delete/{measurementDeviceType}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::permanentDestroy
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:130
* @route '/measurement-device-type-permanent-delete/{measurementDeviceType}'
*/
permanentDestroy.url = (args: { measurementDeviceType: string | number | { id: string | number } } | [measurementDeviceType: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return permanentDestroy.definition.url
            .replace('{measurementDeviceType}', parsedArgs.measurementDeviceType.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::permanentDestroy
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:130
* @route '/measurement-device-type-permanent-delete/{measurementDeviceType}'
*/
permanentDestroy.delete = (args: { measurementDeviceType: string | number | { id: string | number } } | [measurementDeviceType: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: permanentDestroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::permanentDestroy
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:130
* @route '/measurement-device-type-permanent-delete/{measurementDeviceType}'
*/
const permanentDestroyForm = (args: { measurementDeviceType: string | number | { id: string | number } } | [measurementDeviceType: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: permanentDestroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::permanentDestroy
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:130
* @route '/measurement-device-type-permanent-delete/{measurementDeviceType}'
*/
permanentDestroyForm.delete = (args: { measurementDeviceType: string | number | { id: string | number } } | [measurementDeviceType: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::restore
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:145
* @route '/measurement-device-type-restore/{measurementDeviceType}'
*/
export const restore = (args: { measurementDeviceType: string | number | { id: string | number } } | [measurementDeviceType: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
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
restore.url = (args: { measurementDeviceType: string | number | { id: string | number } } | [measurementDeviceType: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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
restore.get = (args: { measurementDeviceType: string | number | { id: string | number } } | [measurementDeviceType: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: restore.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::restore
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:145
* @route '/measurement-device-type-restore/{measurementDeviceType}'
*/
restore.head = (args: { measurementDeviceType: string | number | { id: string | number } } | [measurementDeviceType: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: restore.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::restore
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:145
* @route '/measurement-device-type-restore/{measurementDeviceType}'
*/
const restoreForm = (args: { measurementDeviceType: string | number | { id: string | number } } | [measurementDeviceType: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: restore.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::restore
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:145
* @route '/measurement-device-type-restore/{measurementDeviceType}'
*/
restoreForm.get = (args: { measurementDeviceType: string | number | { id: string | number } } | [measurementDeviceType: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: restore.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::restore
* @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceTypeController.php:145
* @route '/measurement-device-type-restore/{measurementDeviceType}'
*/
restoreForm.head = (args: { measurementDeviceType: string | number | { id: string | number } } | [measurementDeviceType: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: restore.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

restore.form = restoreForm

const MeasurementDeviceTypeController = { index, create, store, show, edit, update, destroy, deleted, permanentDestroy, restore }

export default MeasurementDeviceTypeController