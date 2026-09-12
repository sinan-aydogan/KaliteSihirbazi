import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::search
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:25
 * @route '/measurement-device/search'
 */
export const search = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: search.url(options),
    method: 'post',
})

search.definition = {
    methods: ["post"],
    url: '/measurement-device/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::search
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:25
 * @route '/measurement-device/search'
 */
search.url = (options?: RouteQueryOptions) => {
    return search.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::search
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:25
 * @route '/measurement-device/search'
 */
search.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: search.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::search
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:25
 * @route '/measurement-device/search'
 */
    const searchForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: search.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::search
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:25
 * @route '/measurement-device/search'
 */
        searchForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: search.url(options),
            method: 'post',
        })
    
    search.form = searchForm
/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::index
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:25
 * @route '/measurement-device'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/measurement-device',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::index
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:25
 * @route '/measurement-device'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::index
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:25
 * @route '/measurement-device'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::index
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:25
 * @route '/measurement-device'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::index
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:25
 * @route '/measurement-device'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::index
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:25
 * @route '/measurement-device'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::index
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:25
 * @route '/measurement-device'
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
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::permanentDelete
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:135
 * @route '/measurement-device-permanent-delete/{measurementDevice}'
 */
export const permanentDelete = (args: { measurementDevice: number | { id: number } } | [measurementDevice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: permanentDelete.url(args, options),
    method: 'delete',
})

permanentDelete.definition = {
    methods: ["delete"],
    url: '/measurement-device-permanent-delete/{measurementDevice}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::permanentDelete
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:135
 * @route '/measurement-device-permanent-delete/{measurementDevice}'
 */
permanentDelete.url = (args: { measurementDevice: number | { id: number } } | [measurementDevice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return permanentDelete.definition.url
            .replace('{measurementDevice}', parsedArgs.measurementDevice.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::permanentDelete
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:135
 * @route '/measurement-device-permanent-delete/{measurementDevice}'
 */
permanentDelete.delete = (args: { measurementDevice: number | { id: number } } | [measurementDevice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: permanentDelete.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::permanentDelete
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:135
 * @route '/measurement-device-permanent-delete/{measurementDevice}'
 */
    const permanentDeleteForm = (args: { measurementDevice: number | { id: number } } | [measurementDevice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: permanentDelete.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::permanentDelete
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceController.php:135
 * @route '/measurement-device-permanent-delete/{measurementDevice}'
 */
        permanentDeleteForm.delete = (args: { measurementDevice: number | { id: number } } | [measurementDevice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceWorkflowController::decommission
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceWorkflowController.php:17
 * @route '/measurement-device/{measurementDevice}/decommission'
 */
export const decommission = (args: { measurementDevice: number | { id: number } } | [measurementDevice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: decommission.url(args, options),
    method: 'post',
})

decommission.definition = {
    methods: ["post"],
    url: '/measurement-device/{measurementDevice}/decommission',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceWorkflowController::decommission
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceWorkflowController.php:17
 * @route '/measurement-device/{measurementDevice}/decommission'
 */
decommission.url = (args: { measurementDevice: number | { id: number } } | [measurementDevice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return decommission.definition.url
            .replace('{measurementDevice}', parsedArgs.measurementDevice.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceWorkflowController::decommission
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceWorkflowController.php:17
 * @route '/measurement-device/{measurementDevice}/decommission'
 */
decommission.post = (args: { measurementDevice: number | { id: number } } | [measurementDevice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: decommission.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceWorkflowController::decommission
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceWorkflowController.php:17
 * @route '/measurement-device/{measurementDevice}/decommission'
 */
    const decommissionForm = (args: { measurementDevice: number | { id: number } } | [measurementDevice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: decommission.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceWorkflowController::decommission
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceWorkflowController.php:17
 * @route '/measurement-device/{measurementDevice}/decommission'
 */
        decommissionForm.post = (args: { measurementDevice: number | { id: number } } | [measurementDevice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: decommission.url(args, options),
            method: 'post',
        })
    
    decommission.form = decommissionForm
/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceWorkflowController::reactivate
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceWorkflowController.php:26
 * @route '/measurement-device/{measurementDevice}/reactivate'
 */
export const reactivate = (args: { measurementDevice: number | { id: number } } | [measurementDevice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reactivate.url(args, options),
    method: 'post',
})

reactivate.definition = {
    methods: ["post"],
    url: '/measurement-device/{measurementDevice}/reactivate',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceWorkflowController::reactivate
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceWorkflowController.php:26
 * @route '/measurement-device/{measurementDevice}/reactivate'
 */
reactivate.url = (args: { measurementDevice: number | { id: number } } | [measurementDevice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return reactivate.definition.url
            .replace('{measurementDevice}', parsedArgs.measurementDevice.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceWorkflowController::reactivate
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceWorkflowController.php:26
 * @route '/measurement-device/{measurementDevice}/reactivate'
 */
reactivate.post = (args: { measurementDevice: number | { id: number } } | [measurementDevice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reactivate.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceWorkflowController::reactivate
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceWorkflowController.php:26
 * @route '/measurement-device/{measurementDevice}/reactivate'
 */
    const reactivateForm = (args: { measurementDevice: number | { id: number } } | [measurementDevice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: reactivate.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceWorkflowController::reactivate
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceWorkflowController.php:26
 * @route '/measurement-device/{measurementDevice}/reactivate'
 */
        reactivateForm.post = (args: { measurementDevice: number | { id: number } } | [measurementDevice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: reactivate.url(args, options),
            method: 'post',
        })
    
    reactivate.form = reactivateForm
const measurementDevice = {
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
decommission: Object.assign(decommission, decommission),
reactivate: Object.assign(reactivate, reactivate),
}

export default measurementDevice