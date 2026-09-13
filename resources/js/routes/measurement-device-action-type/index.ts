import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::search
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:14
 * @route '/measurement-device-action-type/search'
 */
export const search = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: search.url(options),
    method: 'post',
})

search.definition = {
    methods: ["post"],
    url: '/measurement-device-action-type/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::search
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:14
 * @route '/measurement-device-action-type/search'
 */
search.url = (options?: RouteQueryOptions) => {
    return search.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::search
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:14
 * @route '/measurement-device-action-type/search'
 */
search.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: search.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::search
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:14
 * @route '/measurement-device-action-type/search'
 */
    const searchForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: search.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::search
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:14
 * @route '/measurement-device-action-type/search'
 */
        searchForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: search.url(options),
            method: 'post',
        })
    
    search.form = searchForm
/**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::index
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:14
 * @route '/measurement-device-action-type'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/measurement-device-action-type',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::index
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:14
 * @route '/measurement-device-action-type'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::index
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:14
 * @route '/measurement-device-action-type'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::index
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:14
 * @route '/measurement-device-action-type'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::index
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:14
 * @route '/measurement-device-action-type'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::index
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:14
 * @route '/measurement-device-action-type'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::index
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:14
 * @route '/measurement-device-action-type'
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
export const show = (args: { measurement_device_action_type: number | { id: number } } | [measurement_device_action_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
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
show.url = (args: { measurement_device_action_type: number | { id: number } } | [measurement_device_action_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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
show.get = (args: { measurement_device_action_type: number | { id: number } } | [measurement_device_action_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::show
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:44
 * @route '/measurement-device-action-type/{measurement_device_action_type}'
 */
show.head = (args: { measurement_device_action_type: number | { id: number } } | [measurement_device_action_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::show
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:44
 * @route '/measurement-device-action-type/{measurement_device_action_type}'
 */
    const showForm = (args: { measurement_device_action_type: number | { id: number } } | [measurement_device_action_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::show
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:44
 * @route '/measurement-device-action-type/{measurement_device_action_type}'
 */
        showForm.get = (args: { measurement_device_action_type: number | { id: number } } | [measurement_device_action_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::show
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:44
 * @route '/measurement-device-action-type/{measurement_device_action_type}'
 */
        showForm.head = (args: { measurement_device_action_type: number | { id: number } } | [measurement_device_action_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
export const edit = (args: { measurement_device_action_type: number | { id: number } } | [measurement_device_action_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
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
edit.url = (args: { measurement_device_action_type: number | { id: number } } | [measurement_device_action_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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
edit.get = (args: { measurement_device_action_type: number | { id: number } } | [measurement_device_action_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::edit
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:49
 * @route '/measurement-device-action-type/{measurement_device_action_type}/edit'
 */
edit.head = (args: { measurement_device_action_type: number | { id: number } } | [measurement_device_action_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::edit
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:49
 * @route '/measurement-device-action-type/{measurement_device_action_type}/edit'
 */
    const editForm = (args: { measurement_device_action_type: number | { id: number } } | [measurement_device_action_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::edit
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:49
 * @route '/measurement-device-action-type/{measurement_device_action_type}/edit'
 */
        editForm.get = (args: { measurement_device_action_type: number | { id: number } } | [measurement_device_action_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::edit
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:49
 * @route '/measurement-device-action-type/{measurement_device_action_type}/edit'
 */
        editForm.head = (args: { measurement_device_action_type: number | { id: number } } | [measurement_device_action_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
export const update = (args: { measurement_device_action_type: number | { id: number } } | [measurement_device_action_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
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
update.url = (args: { measurement_device_action_type: number | { id: number } } | [measurement_device_action_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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
update.put = (args: { measurement_device_action_type: number | { id: number } } | [measurement_device_action_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::update
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:54
 * @route '/measurement-device-action-type/{measurement_device_action_type}'
 */
update.patch = (args: { measurement_device_action_type: number | { id: number } } | [measurement_device_action_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::update
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:54
 * @route '/measurement-device-action-type/{measurement_device_action_type}'
 */
    const updateForm = (args: { measurement_device_action_type: number | { id: number } } | [measurement_device_action_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
        updateForm.put = (args: { measurement_device_action_type: number | { id: number } } | [measurement_device_action_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
        updateForm.patch = (args: { measurement_device_action_type: number | { id: number } } | [measurement_device_action_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
export const destroy = (args: { measurement_device_action_type: number | { id: number } } | [measurement_device_action_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
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
destroy.url = (args: { measurement_device_action_type: number | { id: number } } | [measurement_device_action_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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
destroy.delete = (args: { measurement_device_action_type: number | { id: number } } | [measurement_device_action_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionTypeController::destroy
 * @see app/Http/Controllers/MeasurementDevice/Action/MeasurementDeviceActionTypeController.php:63
 * @route '/measurement-device-action-type/{measurement_device_action_type}'
 */
    const destroyForm = (args: { measurement_device_action_type: number | { id: number } } | [measurement_device_action_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
        destroyForm.delete = (args: { measurement_device_action_type: number | { id: number } } | [measurement_device_action_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const measurementDeviceActionType = {
    search: Object.assign(search, search),
index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default measurementDeviceActionType