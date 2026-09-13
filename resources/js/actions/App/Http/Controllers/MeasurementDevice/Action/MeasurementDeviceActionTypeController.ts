import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::index
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:14
 * @route '/measurement-device-action-type/search'
 */
const index772e7897a1a6a69c94fe132be8ab36c2 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: index772e7897a1a6a69c94fe132be8ab36c2.url(options),
    method: 'post',
})

index772e7897a1a6a69c94fe132be8ab36c2.definition = {
    methods: ["post"],
    url: '/measurement-device-action-type/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::index
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:14
 * @route '/measurement-device-action-type/search'
 */
index772e7897a1a6a69c94fe132be8ab36c2.url = (options?: RouteQueryOptions) => {
    return index772e7897a1a6a69c94fe132be8ab36c2.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::index
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:14
 * @route '/measurement-device-action-type/search'
 */
index772e7897a1a6a69c94fe132be8ab36c2.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: index772e7897a1a6a69c94fe132be8ab36c2.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::index
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:14
 * @route '/measurement-device-action-type/search'
 */
    const index772e7897a1a6a69c94fe132be8ab36c2Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: index772e7897a1a6a69c94fe132be8ab36c2.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::index
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:14
 * @route '/measurement-device-action-type/search'
 */
        index772e7897a1a6a69c94fe132be8ab36c2Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: index772e7897a1a6a69c94fe132be8ab36c2.url(options),
            method: 'post',
        })
    
    index772e7897a1a6a69c94fe132be8ab36c2.form = index772e7897a1a6a69c94fe132be8ab36c2Form
    /**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::index
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:14
 * @route '/measurement-device-action-type'
 */
const index7b7d2cb6fe3807807b47b595d0facb32 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index7b7d2cb6fe3807807b47b595d0facb32.url(options),
    method: 'get',
})

index7b7d2cb6fe3807807b47b595d0facb32.definition = {
    methods: ["get","head"],
    url: '/measurement-device-action-type',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::index
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:14
 * @route '/measurement-device-action-type'
 */
index7b7d2cb6fe3807807b47b595d0facb32.url = (options?: RouteQueryOptions) => {
    return index7b7d2cb6fe3807807b47b595d0facb32.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::index
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:14
 * @route '/measurement-device-action-type'
 */
index7b7d2cb6fe3807807b47b595d0facb32.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index7b7d2cb6fe3807807b47b595d0facb32.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::index
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:14
 * @route '/measurement-device-action-type'
 */
index7b7d2cb6fe3807807b47b595d0facb32.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index7b7d2cb6fe3807807b47b595d0facb32.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::index
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:14
 * @route '/measurement-device-action-type'
 */
    const index7b7d2cb6fe3807807b47b595d0facb32Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index7b7d2cb6fe3807807b47b595d0facb32.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::index
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:14
 * @route '/measurement-device-action-type'
 */
        index7b7d2cb6fe3807807b47b595d0facb32Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index7b7d2cb6fe3807807b47b595d0facb32.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::index
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:14
 * @route '/measurement-device-action-type'
 */
        index7b7d2cb6fe3807807b47b595d0facb32Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index7b7d2cb6fe3807807b47b595d0facb32.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index7b7d2cb6fe3807807b47b595d0facb32.form = index7b7d2cb6fe3807807b47b595d0facb32Form

/**
* Multiple routes resolve to \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::index, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `index['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const index = {
    '/measurement-device-action-type/search': index772e7897a1a6a69c94fe132be8ab36c2,
    '/measurement-device-action-type': index7b7d2cb6fe3807807b47b595d0facb32,
}

/**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::create
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:26
 * @route '/measurement-device-action-type/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/measurement-device-action-type/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::create
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:26
 * @route '/measurement-device-action-type/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::create
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:26
 * @route '/measurement-device-action-type/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::create
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:26
 * @route '/measurement-device-action-type/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::create
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:26
 * @route '/measurement-device-action-type/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::create
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:26
 * @route '/measurement-device-action-type/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::create
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:26
 * @route '/measurement-device-action-type/create'
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
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::store
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:31
 * @route '/measurement-device-action-type'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/measurement-device-action-type',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::store
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:31
 * @route '/measurement-device-action-type'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::store
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:31
 * @route '/measurement-device-action-type'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::store
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:31
 * @route '/measurement-device-action-type'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::store
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:31
 * @route '/measurement-device-action-type'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::show
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:44
 * @route '/measurement-device-action-type/{measurement_device_action_type}'
 */
export const show = (args: { measurement_device_action_type: string | number | { id: string | number } } | [measurement_device_action_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/measurement-device-action-type/{measurement_device_action_type}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::show
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:44
 * @route '/measurement-device-action-type/{measurement_device_action_type}'
 */
show.url = (args: { measurement_device_action_type: string | number | { id: string | number } } | [measurement_device_action_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { measurement_device_action_type: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { measurement_device_action_type: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    measurement_device_action_type: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        measurement_device_action_type: typeof args.measurement_device_action_type === 'object'
                ? args.measurement_device_action_type.id
                : args.measurement_device_action_type,
                }

    return show.definition.url
            .replace('{measurement_device_action_type}', parsedArgs.measurement_device_action_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::show
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:44
 * @route '/measurement-device-action-type/{measurement_device_action_type}'
 */
show.get = (args: { measurement_device_action_type: string | number | { id: string | number } } | [measurement_device_action_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::show
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:44
 * @route '/measurement-device-action-type/{measurement_device_action_type}'
 */
show.head = (args: { measurement_device_action_type: string | number | { id: string | number } } | [measurement_device_action_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::show
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:44
 * @route '/measurement-device-action-type/{measurement_device_action_type}'
 */
    const showForm = (args: { measurement_device_action_type: string | number | { id: string | number } } | [measurement_device_action_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::show
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:44
 * @route '/measurement-device-action-type/{measurement_device_action_type}'
 */
        showForm.get = (args: { measurement_device_action_type: string | number | { id: string | number } } | [measurement_device_action_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::show
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:44
 * @route '/measurement-device-action-type/{measurement_device_action_type}'
 */
        showForm.head = (args: { measurement_device_action_type: string | number | { id: string | number } } | [measurement_device_action_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::edit
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:49
 * @route '/measurement-device-action-type/{measurement_device_action_type}/edit'
 */
export const edit = (args: { measurement_device_action_type: string | number | { id: string | number } } | [measurement_device_action_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/measurement-device-action-type/{measurement_device_action_type}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::edit
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:49
 * @route '/measurement-device-action-type/{measurement_device_action_type}/edit'
 */
edit.url = (args: { measurement_device_action_type: string | number | { id: string | number } } | [measurement_device_action_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { measurement_device_action_type: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { measurement_device_action_type: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    measurement_device_action_type: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        measurement_device_action_type: typeof args.measurement_device_action_type === 'object'
                ? args.measurement_device_action_type.id
                : args.measurement_device_action_type,
                }

    return edit.definition.url
            .replace('{measurement_device_action_type}', parsedArgs.measurement_device_action_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::edit
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:49
 * @route '/measurement-device-action-type/{measurement_device_action_type}/edit'
 */
edit.get = (args: { measurement_device_action_type: string | number | { id: string | number } } | [measurement_device_action_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::edit
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:49
 * @route '/measurement-device-action-type/{measurement_device_action_type}/edit'
 */
edit.head = (args: { measurement_device_action_type: string | number | { id: string | number } } | [measurement_device_action_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::edit
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:49
 * @route '/measurement-device-action-type/{measurement_device_action_type}/edit'
 */
    const editForm = (args: { measurement_device_action_type: string | number | { id: string | number } } | [measurement_device_action_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::edit
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:49
 * @route '/measurement-device-action-type/{measurement_device_action_type}/edit'
 */
        editForm.get = (args: { measurement_device_action_type: string | number | { id: string | number } } | [measurement_device_action_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::edit
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:49
 * @route '/measurement-device-action-type/{measurement_device_action_type}/edit'
 */
        editForm.head = (args: { measurement_device_action_type: string | number | { id: string | number } } | [measurement_device_action_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::update
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:54
 * @route '/measurement-device-action-type/{measurement_device_action_type}'
 */
export const update = (args: { measurement_device_action_type: string | number | { id: string | number } } | [measurement_device_action_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/measurement-device-action-type/{measurement_device_action_type}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::update
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:54
 * @route '/measurement-device-action-type/{measurement_device_action_type}'
 */
update.url = (args: { measurement_device_action_type: string | number | { id: string | number } } | [measurement_device_action_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { measurement_device_action_type: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { measurement_device_action_type: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    measurement_device_action_type: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        measurement_device_action_type: typeof args.measurement_device_action_type === 'object'
                ? args.measurement_device_action_type.id
                : args.measurement_device_action_type,
                }

    return update.definition.url
            .replace('{measurement_device_action_type}', parsedArgs.measurement_device_action_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::update
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:54
 * @route '/measurement-device-action-type/{measurement_device_action_type}'
 */
update.put = (args: { measurement_device_action_type: string | number | { id: string | number } } | [measurement_device_action_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::update
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:54
 * @route '/measurement-device-action-type/{measurement_device_action_type}'
 */
update.patch = (args: { measurement_device_action_type: string | number | { id: string | number } } | [measurement_device_action_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::update
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:54
 * @route '/measurement-device-action-type/{measurement_device_action_type}'
 */
    const updateForm = (args: { measurement_device_action_type: string | number | { id: string | number } } | [measurement_device_action_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::update
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:54
 * @route '/measurement-device-action-type/{measurement_device_action_type}'
 */
        updateForm.put = (args: { measurement_device_action_type: string | number | { id: string | number } } | [measurement_device_action_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::update
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:54
 * @route '/measurement-device-action-type/{measurement_device_action_type}'
 */
        updateForm.patch = (args: { measurement_device_action_type: string | number | { id: string | number } } | [measurement_device_action_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::destroy
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:63
 * @route '/measurement-device-action-type/{measurement_device_action_type}'
 */
export const destroy = (args: { measurement_device_action_type: string | number | { id: string | number } } | [measurement_device_action_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/measurement-device-action-type/{measurement_device_action_type}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::destroy
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:63
 * @route '/measurement-device-action-type/{measurement_device_action_type}'
 */
destroy.url = (args: { measurement_device_action_type: string | number | { id: string | number } } | [measurement_device_action_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { measurement_device_action_type: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { measurement_device_action_type: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    measurement_device_action_type: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        measurement_device_action_type: typeof args.measurement_device_action_type === 'object'
                ? args.measurement_device_action_type.id
                : args.measurement_device_action_type,
                }

    return destroy.definition.url
            .replace('{measurement_device_action_type}', parsedArgs.measurement_device_action_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::destroy
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:63
 * @route '/measurement-device-action-type/{measurement_device_action_type}'
 */
destroy.delete = (args: { measurement_device_action_type: string | number | { id: string | number } } | [measurement_device_action_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::destroy
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:63
 * @route '/measurement-device-action-type/{measurement_device_action_type}'
 */
    const destroyForm = (args: { measurement_device_action_type: string | number | { id: string | number } } | [measurement_device_action_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::destroy
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:63
 * @route '/measurement-device-action-type/{measurement_device_action_type}'
 */
        destroyForm.delete = (args: { measurement_device_action_type: string | number | { id: string | number } } | [measurement_device_action_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const MeasurementDeviceActionTypeController = { index, create, store, show, edit, update, destroy }

export default MeasurementDeviceActionTypeController