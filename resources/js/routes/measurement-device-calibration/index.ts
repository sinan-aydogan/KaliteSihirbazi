import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTaskController::search
 * @see app/Http/Controllers/MeasurementDevice/Calibration/MeasurementDeviceCalibrationTaskController.php:19
 * @route '/measurement-device-calibration/search'
 */
export const search = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: search.url(options),
    method: 'post',
})

search.definition = {
    methods: ["post"],
    url: '/measurement-device-calibration/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTaskController::search
 * @see app/Http/Controllers/MeasurementDevice/Calibration/MeasurementDeviceCalibrationTaskController.php:19
 * @route '/measurement-device-calibration/search'
 */
search.url = (options?: RouteQueryOptions) => {
    return search.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTaskController::search
 * @see app/Http/Controllers/MeasurementDevice/Calibration/MeasurementDeviceCalibrationTaskController.php:19
 * @route '/measurement-device-calibration/search'
 */
search.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: search.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTaskController::search
 * @see app/Http/Controllers/MeasurementDevice/Calibration/MeasurementDeviceCalibrationTaskController.php:19
 * @route '/measurement-device-calibration/search'
 */
    const searchForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: search.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTaskController::search
 * @see app/Http/Controllers/MeasurementDevice/Calibration/MeasurementDeviceCalibrationTaskController.php:19
 * @route '/measurement-device-calibration/search'
 */
        searchForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: search.url(options),
            method: 'post',
        })
    
    search.form = searchForm
/**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTaskController::index
 * @see app/Http/Controllers/MeasurementDevice/Calibration/MeasurementDeviceCalibrationTaskController.php:19
 * @route '/measurement-device-calibration'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/measurement-device-calibration',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTaskController::index
 * @see app/Http/Controllers/MeasurementDevice/Calibration/MeasurementDeviceCalibrationTaskController.php:19
 * @route '/measurement-device-calibration'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTaskController::index
 * @see app/Http/Controllers/MeasurementDevice/Calibration/MeasurementDeviceCalibrationTaskController.php:19
 * @route '/measurement-device-calibration'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTaskController::index
 * @see app/Http/Controllers/MeasurementDevice/Calibration/MeasurementDeviceCalibrationTaskController.php:19
 * @route '/measurement-device-calibration'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTaskController::index
 * @see app/Http/Controllers/MeasurementDevice/Calibration/MeasurementDeviceCalibrationTaskController.php:19
 * @route '/measurement-device-calibration'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTaskController::index
 * @see app/Http/Controllers/MeasurementDevice/Calibration/MeasurementDeviceCalibrationTaskController.php:19
 * @route '/measurement-device-calibration'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTaskController::index
 * @see app/Http/Controllers/MeasurementDevice/Calibration/MeasurementDeviceCalibrationTaskController.php:19
 * @route '/measurement-device-calibration'
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
* @see \App\Http\Controllers\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTaskController::create
 * @see app/Http/Controllers/MeasurementDevice/Calibration/MeasurementDeviceCalibrationTaskController.php:39
 * @route '/measurement-device-calibration/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/measurement-device-calibration/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTaskController::create
 * @see app/Http/Controllers/MeasurementDevice/Calibration/MeasurementDeviceCalibrationTaskController.php:39
 * @route '/measurement-device-calibration/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTaskController::create
 * @see app/Http/Controllers/MeasurementDevice/Calibration/MeasurementDeviceCalibrationTaskController.php:39
 * @route '/measurement-device-calibration/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTaskController::create
 * @see app/Http/Controllers/MeasurementDevice/Calibration/MeasurementDeviceCalibrationTaskController.php:39
 * @route '/measurement-device-calibration/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTaskController::create
 * @see app/Http/Controllers/MeasurementDevice/Calibration/MeasurementDeviceCalibrationTaskController.php:39
 * @route '/measurement-device-calibration/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTaskController::create
 * @see app/Http/Controllers/MeasurementDevice/Calibration/MeasurementDeviceCalibrationTaskController.php:39
 * @route '/measurement-device-calibration/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTaskController::create
 * @see app/Http/Controllers/MeasurementDevice/Calibration/MeasurementDeviceCalibrationTaskController.php:39
 * @route '/measurement-device-calibration/create'
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
* @see \App\Http\Controllers\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTaskController::store
 * @see app/Http/Controllers/MeasurementDevice/Calibration/MeasurementDeviceCalibrationTaskController.php:49
 * @route '/measurement-device-calibration'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/measurement-device-calibration',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTaskController::store
 * @see app/Http/Controllers/MeasurementDevice/Calibration/MeasurementDeviceCalibrationTaskController.php:49
 * @route '/measurement-device-calibration'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTaskController::store
 * @see app/Http/Controllers/MeasurementDevice/Calibration/MeasurementDeviceCalibrationTaskController.php:49
 * @route '/measurement-device-calibration'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTaskController::store
 * @see app/Http/Controllers/MeasurementDevice/Calibration/MeasurementDeviceCalibrationTaskController.php:49
 * @route '/measurement-device-calibration'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTaskController::store
 * @see app/Http/Controllers/MeasurementDevice/Calibration/MeasurementDeviceCalibrationTaskController.php:49
 * @route '/measurement-device-calibration'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTaskController::show
 * @see app/Http/Controllers/MeasurementDevice/Calibration/MeasurementDeviceCalibrationTaskController.php:69
 * @route '/measurement-device-calibration/{measurement_device_calibration}'
 */
export const show = (args: { measurement_device_calibration: number | { id: number } } | [measurement_device_calibration: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/measurement-device-calibration/{measurement_device_calibration}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTaskController::show
 * @see app/Http/Controllers/MeasurementDevice/Calibration/MeasurementDeviceCalibrationTaskController.php:69
 * @route '/measurement-device-calibration/{measurement_device_calibration}'
 */
show.url = (args: { measurement_device_calibration: number | { id: number } } | [measurement_device_calibration: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { measurement_device_calibration: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { measurement_device_calibration: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    measurement_device_calibration: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        measurement_device_calibration: typeof args.measurement_device_calibration === 'object'
                ? args.measurement_device_calibration.id
                : args.measurement_device_calibration,
                }

    return show.definition.url
            .replace('{measurement_device_calibration}', parsedArgs.measurement_device_calibration.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTaskController::show
 * @see app/Http/Controllers/MeasurementDevice/Calibration/MeasurementDeviceCalibrationTaskController.php:69
 * @route '/measurement-device-calibration/{measurement_device_calibration}'
 */
show.get = (args: { measurement_device_calibration: number | { id: number } } | [measurement_device_calibration: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTaskController::show
 * @see app/Http/Controllers/MeasurementDevice/Calibration/MeasurementDeviceCalibrationTaskController.php:69
 * @route '/measurement-device-calibration/{measurement_device_calibration}'
 */
show.head = (args: { measurement_device_calibration: number | { id: number } } | [measurement_device_calibration: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTaskController::show
 * @see app/Http/Controllers/MeasurementDevice/Calibration/MeasurementDeviceCalibrationTaskController.php:69
 * @route '/measurement-device-calibration/{measurement_device_calibration}'
 */
    const showForm = (args: { measurement_device_calibration: number | { id: number } } | [measurement_device_calibration: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTaskController::show
 * @see app/Http/Controllers/MeasurementDevice/Calibration/MeasurementDeviceCalibrationTaskController.php:69
 * @route '/measurement-device-calibration/{measurement_device_calibration}'
 */
        showForm.get = (args: { measurement_device_calibration: number | { id: number } } | [measurement_device_calibration: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTaskController::show
 * @see app/Http/Controllers/MeasurementDevice/Calibration/MeasurementDeviceCalibrationTaskController.php:69
 * @route '/measurement-device-calibration/{measurement_device_calibration}'
 */
        showForm.head = (args: { measurement_device_calibration: number | { id: number } } | [measurement_device_calibration: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTaskController::edit
 * @see app/Http/Controllers/MeasurementDevice/Calibration/MeasurementDeviceCalibrationTaskController.php:79
 * @route '/measurement-device-calibration/{measurement_device_calibration}/edit'
 */
export const edit = (args: { measurement_device_calibration: number | { id: number } } | [measurement_device_calibration: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/measurement-device-calibration/{measurement_device_calibration}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTaskController::edit
 * @see app/Http/Controllers/MeasurementDevice/Calibration/MeasurementDeviceCalibrationTaskController.php:79
 * @route '/measurement-device-calibration/{measurement_device_calibration}/edit'
 */
edit.url = (args: { measurement_device_calibration: number | { id: number } } | [measurement_device_calibration: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { measurement_device_calibration: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { measurement_device_calibration: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    measurement_device_calibration: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        measurement_device_calibration: typeof args.measurement_device_calibration === 'object'
                ? args.measurement_device_calibration.id
                : args.measurement_device_calibration,
                }

    return edit.definition.url
            .replace('{measurement_device_calibration}', parsedArgs.measurement_device_calibration.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTaskController::edit
 * @see app/Http/Controllers/MeasurementDevice/Calibration/MeasurementDeviceCalibrationTaskController.php:79
 * @route '/measurement-device-calibration/{measurement_device_calibration}/edit'
 */
edit.get = (args: { measurement_device_calibration: number | { id: number } } | [measurement_device_calibration: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTaskController::edit
 * @see app/Http/Controllers/MeasurementDevice/Calibration/MeasurementDeviceCalibrationTaskController.php:79
 * @route '/measurement-device-calibration/{measurement_device_calibration}/edit'
 */
edit.head = (args: { measurement_device_calibration: number | { id: number } } | [measurement_device_calibration: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTaskController::edit
 * @see app/Http/Controllers/MeasurementDevice/Calibration/MeasurementDeviceCalibrationTaskController.php:79
 * @route '/measurement-device-calibration/{measurement_device_calibration}/edit'
 */
    const editForm = (args: { measurement_device_calibration: number | { id: number } } | [measurement_device_calibration: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTaskController::edit
 * @see app/Http/Controllers/MeasurementDevice/Calibration/MeasurementDeviceCalibrationTaskController.php:79
 * @route '/measurement-device-calibration/{measurement_device_calibration}/edit'
 */
        editForm.get = (args: { measurement_device_calibration: number | { id: number } } | [measurement_device_calibration: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTaskController::edit
 * @see app/Http/Controllers/MeasurementDevice/Calibration/MeasurementDeviceCalibrationTaskController.php:79
 * @route '/measurement-device-calibration/{measurement_device_calibration}/edit'
 */
        editForm.head = (args: { measurement_device_calibration: number | { id: number } } | [measurement_device_calibration: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTaskController::update
 * @see app/Http/Controllers/MeasurementDevice/Calibration/MeasurementDeviceCalibrationTaskController.php:89
 * @route '/measurement-device-calibration/{measurement_device_calibration}'
 */
export const update = (args: { measurement_device_calibration: number | { id: number } } | [measurement_device_calibration: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/measurement-device-calibration/{measurement_device_calibration}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTaskController::update
 * @see app/Http/Controllers/MeasurementDevice/Calibration/MeasurementDeviceCalibrationTaskController.php:89
 * @route '/measurement-device-calibration/{measurement_device_calibration}'
 */
update.url = (args: { measurement_device_calibration: number | { id: number } } | [measurement_device_calibration: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { measurement_device_calibration: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { measurement_device_calibration: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    measurement_device_calibration: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        measurement_device_calibration: typeof args.measurement_device_calibration === 'object'
                ? args.measurement_device_calibration.id
                : args.measurement_device_calibration,
                }

    return update.definition.url
            .replace('{measurement_device_calibration}', parsedArgs.measurement_device_calibration.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTaskController::update
 * @see app/Http/Controllers/MeasurementDevice/Calibration/MeasurementDeviceCalibrationTaskController.php:89
 * @route '/measurement-device-calibration/{measurement_device_calibration}'
 */
update.put = (args: { measurement_device_calibration: number | { id: number } } | [measurement_device_calibration: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTaskController::update
 * @see app/Http/Controllers/MeasurementDevice/Calibration/MeasurementDeviceCalibrationTaskController.php:89
 * @route '/measurement-device-calibration/{measurement_device_calibration}'
 */
update.patch = (args: { measurement_device_calibration: number | { id: number } } | [measurement_device_calibration: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTaskController::update
 * @see app/Http/Controllers/MeasurementDevice/Calibration/MeasurementDeviceCalibrationTaskController.php:89
 * @route '/measurement-device-calibration/{measurement_device_calibration}'
 */
    const updateForm = (args: { measurement_device_calibration: number | { id: number } } | [measurement_device_calibration: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTaskController::update
 * @see app/Http/Controllers/MeasurementDevice/Calibration/MeasurementDeviceCalibrationTaskController.php:89
 * @route '/measurement-device-calibration/{measurement_device_calibration}'
 */
        updateForm.put = (args: { measurement_device_calibration: number | { id: number } } | [measurement_device_calibration: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTaskController::update
 * @see app/Http/Controllers/MeasurementDevice/Calibration/MeasurementDeviceCalibrationTaskController.php:89
 * @route '/measurement-device-calibration/{measurement_device_calibration}'
 */
        updateForm.patch = (args: { measurement_device_calibration: number | { id: number } } | [measurement_device_calibration: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTaskController::destroy
 * @see app/Http/Controllers/MeasurementDevice/Calibration/MeasurementDeviceCalibrationTaskController.php:109
 * @route '/measurement-device-calibration/{measurement_device_calibration}'
 */
export const destroy = (args: { measurement_device_calibration: number | { id: number } } | [measurement_device_calibration: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/measurement-device-calibration/{measurement_device_calibration}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTaskController::destroy
 * @see app/Http/Controllers/MeasurementDevice/Calibration/MeasurementDeviceCalibrationTaskController.php:109
 * @route '/measurement-device-calibration/{measurement_device_calibration}'
 */
destroy.url = (args: { measurement_device_calibration: number | { id: number } } | [measurement_device_calibration: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { measurement_device_calibration: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { measurement_device_calibration: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    measurement_device_calibration: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        measurement_device_calibration: typeof args.measurement_device_calibration === 'object'
                ? args.measurement_device_calibration.id
                : args.measurement_device_calibration,
                }

    return destroy.definition.url
            .replace('{measurement_device_calibration}', parsedArgs.measurement_device_calibration.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTaskController::destroy
 * @see app/Http/Controllers/MeasurementDevice/Calibration/MeasurementDeviceCalibrationTaskController.php:109
 * @route '/measurement-device-calibration/{measurement_device_calibration}'
 */
destroy.delete = (args: { measurement_device_calibration: number | { id: number } } | [measurement_device_calibration: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTaskController::destroy
 * @see app/Http/Controllers/MeasurementDevice/Calibration/MeasurementDeviceCalibrationTaskController.php:109
 * @route '/measurement-device-calibration/{measurement_device_calibration}'
 */
    const destroyForm = (args: { measurement_device_calibration: number | { id: number } } | [measurement_device_calibration: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTaskController::destroy
 * @see app/Http/Controllers/MeasurementDevice/Calibration/MeasurementDeviceCalibrationTaskController.php:109
 * @route '/measurement-device-calibration/{measurement_device_calibration}'
 */
        destroyForm.delete = (args: { measurement_device_calibration: number | { id: number } } | [measurement_device_calibration: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTaskController::report
 * @see app/Http/Controllers/MeasurementDevice/Calibration/MeasurementDeviceCalibrationTaskController.php:121
 * @route '/measurement-device-calibration/{measurementDeviceCalibration}/report'
 */
export const report = (args: { measurementDeviceCalibration: number | { id: number } } | [measurementDeviceCalibration: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: report.url(args, options),
    method: 'get',
})

report.definition = {
    methods: ["get","head"],
    url: '/measurement-device-calibration/{measurementDeviceCalibration}/report',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTaskController::report
 * @see app/Http/Controllers/MeasurementDevice/Calibration/MeasurementDeviceCalibrationTaskController.php:121
 * @route '/measurement-device-calibration/{measurementDeviceCalibration}/report'
 */
report.url = (args: { measurementDeviceCalibration: number | { id: number } } | [measurementDeviceCalibration: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { measurementDeviceCalibration: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { measurementDeviceCalibration: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    measurementDeviceCalibration: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        measurementDeviceCalibration: typeof args.measurementDeviceCalibration === 'object'
                ? args.measurementDeviceCalibration.id
                : args.measurementDeviceCalibration,
                }

    return report.definition.url
            .replace('{measurementDeviceCalibration}', parsedArgs.measurementDeviceCalibration.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTaskController::report
 * @see app/Http/Controllers/MeasurementDevice/Calibration/MeasurementDeviceCalibrationTaskController.php:121
 * @route '/measurement-device-calibration/{measurementDeviceCalibration}/report'
 */
report.get = (args: { measurementDeviceCalibration: number | { id: number } } | [measurementDeviceCalibration: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: report.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTaskController::report
 * @see app/Http/Controllers/MeasurementDevice/Calibration/MeasurementDeviceCalibrationTaskController.php:121
 * @route '/measurement-device-calibration/{measurementDeviceCalibration}/report'
 */
report.head = (args: { measurementDeviceCalibration: number | { id: number } } | [measurementDeviceCalibration: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: report.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTaskController::report
 * @see app/Http/Controllers/MeasurementDevice/Calibration/MeasurementDeviceCalibrationTaskController.php:121
 * @route '/measurement-device-calibration/{measurementDeviceCalibration}/report'
 */
    const reportForm = (args: { measurementDeviceCalibration: number | { id: number } } | [measurementDeviceCalibration: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: report.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTaskController::report
 * @see app/Http/Controllers/MeasurementDevice/Calibration/MeasurementDeviceCalibrationTaskController.php:121
 * @route '/measurement-device-calibration/{measurementDeviceCalibration}/report'
 */
        reportForm.get = (args: { measurementDeviceCalibration: number | { id: number } } | [measurementDeviceCalibration: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: report.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTaskController::report
 * @see app/Http/Controllers/MeasurementDevice/Calibration/MeasurementDeviceCalibrationTaskController.php:121
 * @route '/measurement-device-calibration/{measurementDeviceCalibration}/report'
 */
        reportForm.head = (args: { measurementDeviceCalibration: number | { id: number } } | [measurementDeviceCalibration: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: report.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    report.form = reportForm
const measurementDeviceCalibration = {
    search: Object.assign(search, search),
index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
report: Object.assign(report, report),
}

export default measurementDeviceCalibration