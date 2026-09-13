import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionController::index
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionController.php:15
 * @route '/measurement-device-action/search'
 */
const index7c095cb7cc3976987d8fa0c9189896b2 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: index7c095cb7cc3976987d8fa0c9189896b2.url(options),
    method: 'post',
})

index7c095cb7cc3976987d8fa0c9189896b2.definition = {
    methods: ["post"],
    url: '/measurement-device-action/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionController::index
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionController.php:15
 * @route '/measurement-device-action/search'
 */
index7c095cb7cc3976987d8fa0c9189896b2.url = (options?: RouteQueryOptions) => {
    return index7c095cb7cc3976987d8fa0c9189896b2.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionController::index
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionController.php:15
 * @route '/measurement-device-action/search'
 */
index7c095cb7cc3976987d8fa0c9189896b2.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: index7c095cb7cc3976987d8fa0c9189896b2.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionController::index
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionController.php:15
 * @route '/measurement-device-action/search'
 */
    const index7c095cb7cc3976987d8fa0c9189896b2Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: index7c095cb7cc3976987d8fa0c9189896b2.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionController::index
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionController.php:15
 * @route '/measurement-device-action/search'
 */
        index7c095cb7cc3976987d8fa0c9189896b2Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: index7c095cb7cc3976987d8fa0c9189896b2.url(options),
            method: 'post',
        })
    
    index7c095cb7cc3976987d8fa0c9189896b2.form = index7c095cb7cc3976987d8fa0c9189896b2Form
    /**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionController::index
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionController.php:15
 * @route '/measurement-device-action'
 */
const index33c6e0cd7270590ca79702a9ba599e12 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index33c6e0cd7270590ca79702a9ba599e12.url(options),
    method: 'get',
})

index33c6e0cd7270590ca79702a9ba599e12.definition = {
    methods: ["get","head"],
    url: '/measurement-device-action',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionController::index
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionController.php:15
 * @route '/measurement-device-action'
 */
index33c6e0cd7270590ca79702a9ba599e12.url = (options?: RouteQueryOptions) => {
    return index33c6e0cd7270590ca79702a9ba599e12.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionController::index
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionController.php:15
 * @route '/measurement-device-action'
 */
index33c6e0cd7270590ca79702a9ba599e12.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index33c6e0cd7270590ca79702a9ba599e12.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionController::index
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionController.php:15
 * @route '/measurement-device-action'
 */
index33c6e0cd7270590ca79702a9ba599e12.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index33c6e0cd7270590ca79702a9ba599e12.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionController::index
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionController.php:15
 * @route '/measurement-device-action'
 */
    const index33c6e0cd7270590ca79702a9ba599e12Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index33c6e0cd7270590ca79702a9ba599e12.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionController::index
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionController.php:15
 * @route '/measurement-device-action'
 */
        index33c6e0cd7270590ca79702a9ba599e12Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index33c6e0cd7270590ca79702a9ba599e12.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionController::index
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionController.php:15
 * @route '/measurement-device-action'
 */
        index33c6e0cd7270590ca79702a9ba599e12Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index33c6e0cd7270590ca79702a9ba599e12.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index33c6e0cd7270590ca79702a9ba599e12.form = index33c6e0cd7270590ca79702a9ba599e12Form

/**
* Multiple routes resolve to \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionController::index, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `index['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const index = {
    '/measurement-device-action/search': index7c095cb7cc3976987d8fa0c9189896b2,
    '/measurement-device-action': index33c6e0cd7270590ca79702a9ba599e12,
}

/**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionController::create
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionController.php:20
 * @route '/measurement-device-action/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/measurement-device-action/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionController::create
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionController.php:20
 * @route '/measurement-device-action/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionController::create
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionController.php:20
 * @route '/measurement-device-action/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionController::create
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionController.php:20
 * @route '/measurement-device-action/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionController::create
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionController.php:20
 * @route '/measurement-device-action/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionController::create
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionController.php:20
 * @route '/measurement-device-action/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionController::create
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionController.php:20
 * @route '/measurement-device-action/create'
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
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionController::store
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionController.php:25
 * @route '/measurement-device-action'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/measurement-device-action',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionController::store
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionController.php:25
 * @route '/measurement-device-action'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionController::store
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionController.php:25
 * @route '/measurement-device-action'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionController::store
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionController.php:25
 * @route '/measurement-device-action'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionController::store
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionController.php:25
 * @route '/measurement-device-action'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionController::show
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionController.php:37
 * @route '/measurement-device-action/{measurement_device_action}'
 */
export const show = (args: { measurement_device_action: number | { id: number } } | [measurement_device_action: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/measurement-device-action/{measurement_device_action}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionController::show
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionController.php:37
 * @route '/measurement-device-action/{measurement_device_action}'
 */
show.url = (args: { measurement_device_action: number | { id: number } } | [measurement_device_action: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { measurement_device_action: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { measurement_device_action: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    measurement_device_action: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        measurement_device_action: typeof args.measurement_device_action === 'object'
                ? args.measurement_device_action.id
                : args.measurement_device_action,
                }

    return show.definition.url
            .replace('{measurement_device_action}', parsedArgs.measurement_device_action.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionController::show
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionController.php:37
 * @route '/measurement-device-action/{measurement_device_action}'
 */
show.get = (args: { measurement_device_action: number | { id: number } } | [measurement_device_action: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionController::show
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionController.php:37
 * @route '/measurement-device-action/{measurement_device_action}'
 */
show.head = (args: { measurement_device_action: number | { id: number } } | [measurement_device_action: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionController::show
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionController.php:37
 * @route '/measurement-device-action/{measurement_device_action}'
 */
    const showForm = (args: { measurement_device_action: number | { id: number } } | [measurement_device_action: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionController::show
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionController.php:37
 * @route '/measurement-device-action/{measurement_device_action}'
 */
        showForm.get = (args: { measurement_device_action: number | { id: number } } | [measurement_device_action: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionController::show
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionController.php:37
 * @route '/measurement-device-action/{measurement_device_action}'
 */
        showForm.head = (args: { measurement_device_action: number | { id: number } } | [measurement_device_action: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionController::edit
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionController.php:42
 * @route '/measurement-device-action/{measurement_device_action}/edit'
 */
export const edit = (args: { measurement_device_action: number | { id: number } } | [measurement_device_action: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/measurement-device-action/{measurement_device_action}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionController::edit
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionController.php:42
 * @route '/measurement-device-action/{measurement_device_action}/edit'
 */
edit.url = (args: { measurement_device_action: number | { id: number } } | [measurement_device_action: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { measurement_device_action: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { measurement_device_action: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    measurement_device_action: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        measurement_device_action: typeof args.measurement_device_action === 'object'
                ? args.measurement_device_action.id
                : args.measurement_device_action,
                }

    return edit.definition.url
            .replace('{measurement_device_action}', parsedArgs.measurement_device_action.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionController::edit
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionController.php:42
 * @route '/measurement-device-action/{measurement_device_action}/edit'
 */
edit.get = (args: { measurement_device_action: number | { id: number } } | [measurement_device_action: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionController::edit
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionController.php:42
 * @route '/measurement-device-action/{measurement_device_action}/edit'
 */
edit.head = (args: { measurement_device_action: number | { id: number } } | [measurement_device_action: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionController::edit
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionController.php:42
 * @route '/measurement-device-action/{measurement_device_action}/edit'
 */
    const editForm = (args: { measurement_device_action: number | { id: number } } | [measurement_device_action: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionController::edit
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionController.php:42
 * @route '/measurement-device-action/{measurement_device_action}/edit'
 */
        editForm.get = (args: { measurement_device_action: number | { id: number } } | [measurement_device_action: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionController::edit
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionController.php:42
 * @route '/measurement-device-action/{measurement_device_action}/edit'
 */
        editForm.head = (args: { measurement_device_action: number | { id: number } } | [measurement_device_action: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionController::update
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionController.php:47
 * @route '/measurement-device-action/{measurement_device_action}'
 */
export const update = (args: { measurement_device_action: number | { id: number } } | [measurement_device_action: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/measurement-device-action/{measurement_device_action}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionController::update
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionController.php:47
 * @route '/measurement-device-action/{measurement_device_action}'
 */
update.url = (args: { measurement_device_action: number | { id: number } } | [measurement_device_action: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { measurement_device_action: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { measurement_device_action: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    measurement_device_action: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        measurement_device_action: typeof args.measurement_device_action === 'object'
                ? args.measurement_device_action.id
                : args.measurement_device_action,
                }

    return update.definition.url
            .replace('{measurement_device_action}', parsedArgs.measurement_device_action.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionController::update
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionController.php:47
 * @route '/measurement-device-action/{measurement_device_action}'
 */
update.put = (args: { measurement_device_action: number | { id: number } } | [measurement_device_action: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionController::update
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionController.php:47
 * @route '/measurement-device-action/{measurement_device_action}'
 */
update.patch = (args: { measurement_device_action: number | { id: number } } | [measurement_device_action: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionController::update
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionController.php:47
 * @route '/measurement-device-action/{measurement_device_action}'
 */
    const updateForm = (args: { measurement_device_action: number | { id: number } } | [measurement_device_action: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionController::update
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionController.php:47
 * @route '/measurement-device-action/{measurement_device_action}'
 */
        updateForm.put = (args: { measurement_device_action: number | { id: number } } | [measurement_device_action: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionController::update
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionController.php:47
 * @route '/measurement-device-action/{measurement_device_action}'
 */
        updateForm.patch = (args: { measurement_device_action: number | { id: number } } | [measurement_device_action: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionController::destroy
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionController.php:56
 * @route '/measurement-device-action/{measurement_device_action}'
 */
export const destroy = (args: { measurement_device_action: number | { id: number } } | [measurement_device_action: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/measurement-device-action/{measurement_device_action}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionController::destroy
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionController.php:56
 * @route '/measurement-device-action/{measurement_device_action}'
 */
destroy.url = (args: { measurement_device_action: number | { id: number } } | [measurement_device_action: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { measurement_device_action: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { measurement_device_action: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    measurement_device_action: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        measurement_device_action: typeof args.measurement_device_action === 'object'
                ? args.measurement_device_action.id
                : args.measurement_device_action,
                }

    return destroy.definition.url
            .replace('{measurement_device_action}', parsedArgs.measurement_device_action.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionController::destroy
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionController.php:56
 * @route '/measurement-device-action/{measurement_device_action}'
 */
destroy.delete = (args: { measurement_device_action: number | { id: number } } | [measurement_device_action: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionController::destroy
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionController.php:56
 * @route '/measurement-device-action/{measurement_device_action}'
 */
    const destroyForm = (args: { measurement_device_action: number | { id: number } } | [measurement_device_action: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionController::destroy
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionController.php:56
 * @route '/measurement-device-action/{measurement_device_action}'
 */
        destroyForm.delete = (args: { measurement_device_action: number | { id: number } } | [measurement_device_action: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const MeasurementDeviceActionController = { index, create, store, show, edit, update, destroy }

export default MeasurementDeviceActionController