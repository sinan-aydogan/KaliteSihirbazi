import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::index
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:25
 * @route '/measurement-device/search'
 */
const indexfca0a075b5924527536113e0f1dc72ee = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: indexfca0a075b5924527536113e0f1dc72ee.url(options),
    method: 'post',
})

indexfca0a075b5924527536113e0f1dc72ee.definition = {
    methods: ["post"],
    url: '/measurement-device/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::index
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:25
 * @route '/measurement-device/search'
 */
indexfca0a075b5924527536113e0f1dc72ee.url = (options?: RouteQueryOptions) => {
    return indexfca0a075b5924527536113e0f1dc72ee.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::index
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:25
 * @route '/measurement-device/search'
 */
indexfca0a075b5924527536113e0f1dc72ee.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: indexfca0a075b5924527536113e0f1dc72ee.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::index
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:25
 * @route '/measurement-device/search'
 */
    const indexfca0a075b5924527536113e0f1dc72eeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: indexfca0a075b5924527536113e0f1dc72ee.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::index
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:25
 * @route '/measurement-device/search'
 */
        indexfca0a075b5924527536113e0f1dc72eeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: indexfca0a075b5924527536113e0f1dc72ee.url(options),
            method: 'post',
        })
    
    indexfca0a075b5924527536113e0f1dc72ee.form = indexfca0a075b5924527536113e0f1dc72eeForm
    /**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::index
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:25
 * @route '/measurement-device'
 */
const indexfe55c2958402fd23a47151dfaae5f957 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexfe55c2958402fd23a47151dfaae5f957.url(options),
    method: 'get',
})

indexfe55c2958402fd23a47151dfaae5f957.definition = {
    methods: ["get","head"],
    url: '/measurement-device',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::index
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:25
 * @route '/measurement-device'
 */
indexfe55c2958402fd23a47151dfaae5f957.url = (options?: RouteQueryOptions) => {
    return indexfe55c2958402fd23a47151dfaae5f957.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::index
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:25
 * @route '/measurement-device'
 */
indexfe55c2958402fd23a47151dfaae5f957.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexfe55c2958402fd23a47151dfaae5f957.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::index
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:25
 * @route '/measurement-device'
 */
indexfe55c2958402fd23a47151dfaae5f957.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexfe55c2958402fd23a47151dfaae5f957.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::index
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:25
 * @route '/measurement-device'
 */
    const indexfe55c2958402fd23a47151dfaae5f957Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: indexfe55c2958402fd23a47151dfaae5f957.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::index
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:25
 * @route '/measurement-device'
 */
        indexfe55c2958402fd23a47151dfaae5f957Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexfe55c2958402fd23a47151dfaae5f957.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::index
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:25
 * @route '/measurement-device'
 */
        indexfe55c2958402fd23a47151dfaae5f957Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexfe55c2958402fd23a47151dfaae5f957.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    indexfe55c2958402fd23a47151dfaae5f957.form = indexfe55c2958402fd23a47151dfaae5f957Form

/**
* Multiple routes resolve to \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::index, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `index['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const index = {
    '/measurement-device/search': indexfca0a075b5924527536113e0f1dc72ee,
    '/measurement-device': indexfe55c2958402fd23a47151dfaae5f957,
}

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::create
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:55
 * @route '/measurement-device/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/measurement-device/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::create
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:55
 * @route '/measurement-device/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::create
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:55
 * @route '/measurement-device/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::create
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:55
 * @route '/measurement-device/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::create
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:55
 * @route '/measurement-device/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::create
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:55
 * @route '/measurement-device/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::create
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:55
 * @route '/measurement-device/create'
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
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::store
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:65
 * @route '/measurement-device'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/measurement-device',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::store
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:65
 * @route '/measurement-device'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::store
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:65
 * @route '/measurement-device'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::store
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:65
 * @route '/measurement-device'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::store
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:65
 * @route '/measurement-device'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::show
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:79
 * @route '/measurement-device/{measurement_device}'
 */
export const show = (args: { measurement_device: number | { id: number } } | [measurement_device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/measurement-device/{measurement_device}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::show
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:79
 * @route '/measurement-device/{measurement_device}'
 */
show.url = (args: { measurement_device: number | { id: number } } | [measurement_device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { measurement_device: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { measurement_device: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    measurement_device: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        measurement_device: typeof args.measurement_device === 'object'
                ? args.measurement_device.id
                : args.measurement_device,
                }

    return show.definition.url
            .replace('{measurement_device}', parsedArgs.measurement_device.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::show
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:79
 * @route '/measurement-device/{measurement_device}'
 */
show.get = (args: { measurement_device: number | { id: number } } | [measurement_device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::show
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:79
 * @route '/measurement-device/{measurement_device}'
 */
show.head = (args: { measurement_device: number | { id: number } } | [measurement_device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::show
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:79
 * @route '/measurement-device/{measurement_device}'
 */
    const showForm = (args: { measurement_device: number | { id: number } } | [measurement_device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::show
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:79
 * @route '/measurement-device/{measurement_device}'
 */
        showForm.get = (args: { measurement_device: number | { id: number } } | [measurement_device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::show
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:79
 * @route '/measurement-device/{measurement_device}'
 */
        showForm.head = (args: { measurement_device: number | { id: number } } | [measurement_device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::edit
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:97
 * @route '/measurement-device/{measurement_device}/edit'
 */
export const edit = (args: { measurement_device: number | { id: number } } | [measurement_device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/measurement-device/{measurement_device}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::edit
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:97
 * @route '/measurement-device/{measurement_device}/edit'
 */
edit.url = (args: { measurement_device: number | { id: number } } | [measurement_device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { measurement_device: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { measurement_device: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    measurement_device: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        measurement_device: typeof args.measurement_device === 'object'
                ? args.measurement_device.id
                : args.measurement_device,
                }

    return edit.definition.url
            .replace('{measurement_device}', parsedArgs.measurement_device.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::edit
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:97
 * @route '/measurement-device/{measurement_device}/edit'
 */
edit.get = (args: { measurement_device: number | { id: number } } | [measurement_device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::edit
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:97
 * @route '/measurement-device/{measurement_device}/edit'
 */
edit.head = (args: { measurement_device: number | { id: number } } | [measurement_device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::edit
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:97
 * @route '/measurement-device/{measurement_device}/edit'
 */
    const editForm = (args: { measurement_device: number | { id: number } } | [measurement_device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::edit
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:97
 * @route '/measurement-device/{measurement_device}/edit'
 */
        editForm.get = (args: { measurement_device: number | { id: number } } | [measurement_device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::edit
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:97
 * @route '/measurement-device/{measurement_device}/edit'
 */
        editForm.head = (args: { measurement_device: number | { id: number } } | [measurement_device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::update
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:107
 * @route '/measurement-device/{measurement_device}'
 */
export const update = (args: { measurement_device: number | { id: number } } | [measurement_device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/measurement-device/{measurement_device}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::update
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:107
 * @route '/measurement-device/{measurement_device}'
 */
update.url = (args: { measurement_device: number | { id: number } } | [measurement_device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { measurement_device: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { measurement_device: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    measurement_device: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        measurement_device: typeof args.measurement_device === 'object'
                ? args.measurement_device.id
                : args.measurement_device,
                }

    return update.definition.url
            .replace('{measurement_device}', parsedArgs.measurement_device.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::update
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:107
 * @route '/measurement-device/{measurement_device}'
 */
update.put = (args: { measurement_device: number | { id: number } } | [measurement_device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::update
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:107
 * @route '/measurement-device/{measurement_device}'
 */
update.patch = (args: { measurement_device: number | { id: number } } | [measurement_device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::update
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:107
 * @route '/measurement-device/{measurement_device}'
 */
    const updateForm = (args: { measurement_device: number | { id: number } } | [measurement_device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::update
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:107
 * @route '/measurement-device/{measurement_device}'
 */
        updateForm.put = (args: { measurement_device: number | { id: number } } | [measurement_device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::update
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:107
 * @route '/measurement-device/{measurement_device}'
 */
        updateForm.patch = (args: { measurement_device: number | { id: number } } | [measurement_device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::destroy
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:121
 * @route '/measurement-device/{measurement_device}'
 */
export const destroy = (args: { measurement_device: number | { id: number } } | [measurement_device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/measurement-device/{measurement_device}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::destroy
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:121
 * @route '/measurement-device/{measurement_device}'
 */
destroy.url = (args: { measurement_device: number | { id: number } } | [measurement_device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { measurement_device: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { measurement_device: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    measurement_device: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        measurement_device: typeof args.measurement_device === 'object'
                ? args.measurement_device.id
                : args.measurement_device,
                }

    return destroy.definition.url
            .replace('{measurement_device}', parsedArgs.measurement_device.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::destroy
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:121
 * @route '/measurement-device/{measurement_device}'
 */
destroy.delete = (args: { measurement_device: number | { id: number } } | [measurement_device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::destroy
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:121
 * @route '/measurement-device/{measurement_device}'
 */
    const destroyForm = (args: { measurement_device: number | { id: number } } | [measurement_device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::destroy
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:121
 * @route '/measurement-device/{measurement_device}'
 */
        destroyForm.delete = (args: { measurement_device: number | { id: number } } | [measurement_device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::deleted
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:128
 * @route '/measurement-device-deleted'
 */
export const deleted = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deleted.url(options),
    method: 'get',
})

deleted.definition = {
    methods: ["get","head"],
    url: '/measurement-device-deleted',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::deleted
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:128
 * @route '/measurement-device-deleted'
 */
deleted.url = (options?: RouteQueryOptions) => {
    return deleted.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::deleted
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:128
 * @route '/measurement-device-deleted'
 */
deleted.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deleted.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::deleted
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:128
 * @route '/measurement-device-deleted'
 */
deleted.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: deleted.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::deleted
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:128
 * @route '/measurement-device-deleted'
 */
    const deletedForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: deleted.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::deleted
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:128
 * @route '/measurement-device-deleted'
 */
        deletedForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: deleted.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::deleted
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:128
 * @route '/measurement-device-deleted'
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
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::permanentDestroy
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:135
 * @route '/measurement-device-permanent-delete/{measurementDevice}'
 */
export const permanentDestroy = (args: { measurementDevice: number | { id: number } } | [measurementDevice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: permanentDestroy.url(args, options),
    method: 'delete',
})

permanentDestroy.definition = {
    methods: ["delete"],
    url: '/measurement-device-permanent-delete/{measurementDevice}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::permanentDestroy
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:135
 * @route '/measurement-device-permanent-delete/{measurementDevice}'
 */
permanentDestroy.url = (args: { measurementDevice: number | { id: number } } | [measurementDevice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { measurementDevice: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { measurementDevice: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    measurementDevice: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        measurementDevice: typeof args.measurementDevice === 'object'
                ? args.measurementDevice.id
                : args.measurementDevice,
                }

    return permanentDestroy.definition.url
            .replace('{measurementDevice}', parsedArgs.measurementDevice.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::permanentDestroy
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:135
 * @route '/measurement-device-permanent-delete/{measurementDevice}'
 */
permanentDestroy.delete = (args: { measurementDevice: number | { id: number } } | [measurementDevice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: permanentDestroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::permanentDestroy
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:135
 * @route '/measurement-device-permanent-delete/{measurementDevice}'
 */
    const permanentDestroyForm = (args: { measurementDevice: number | { id: number } } | [measurementDevice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: permanentDestroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::permanentDestroy
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:135
 * @route '/measurement-device-permanent-delete/{measurementDevice}'
 */
        permanentDestroyForm.delete = (args: { measurementDevice: number | { id: number } } | [measurementDevice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::restore
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:143
 * @route '/measurement-device-restore/{measurementDevice}'
 */
export const restore = (args: { measurementDevice: number | { id: number } } | [measurementDevice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: restore.url(args, options),
    method: 'get',
})

restore.definition = {
    methods: ["get","head"],
    url: '/measurement-device-restore/{measurementDevice}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::restore
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:143
 * @route '/measurement-device-restore/{measurementDevice}'
 */
restore.url = (args: { measurementDevice: number | { id: number } } | [measurementDevice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { measurementDevice: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { measurementDevice: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    measurementDevice: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        measurementDevice: typeof args.measurementDevice === 'object'
                ? args.measurementDevice.id
                : args.measurementDevice,
                }

    return restore.definition.url
            .replace('{measurementDevice}', parsedArgs.measurementDevice.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::restore
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:143
 * @route '/measurement-device-restore/{measurementDevice}'
 */
restore.get = (args: { measurementDevice: number | { id: number } } | [measurementDevice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: restore.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::restore
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:143
 * @route '/measurement-device-restore/{measurementDevice}'
 */
restore.head = (args: { measurementDevice: number | { id: number } } | [measurementDevice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: restore.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::restore
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:143
 * @route '/measurement-device-restore/{measurementDevice}'
 */
    const restoreForm = (args: { measurementDevice: number | { id: number } } | [measurementDevice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: restore.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::restore
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:143
 * @route '/measurement-device-restore/{measurementDevice}'
 */
        restoreForm.get = (args: { measurementDevice: number | { id: number } } | [measurementDevice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: restore.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::restore
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:143
 * @route '/measurement-device-restore/{measurementDevice}'
 */
        restoreForm.head = (args: { measurementDevice: number | { id: number } } | [measurementDevice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: restore.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    restore.form = restoreForm
const MeasurementDeviceController = { index, create, store, show, edit, update, destroy, deleted, permanentDestroy, restore }

export default MeasurementDeviceController