import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\DeviceTypeController::index
 * @see app/Http/Controllers/DeviceTypeController.php:12
 * @route '/device-type/search'
 */
const indexc04169956aa9f9513249ba8b5aa17642 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: indexc04169956aa9f9513249ba8b5aa17642.url(options),
    method: 'post',
})

indexc04169956aa9f9513249ba8b5aa17642.definition = {
    methods: ["post"],
    url: '/device-type/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\DeviceTypeController::index
 * @see app/Http/Controllers/DeviceTypeController.php:12
 * @route '/device-type/search'
 */
indexc04169956aa9f9513249ba8b5aa17642.url = (options?: RouteQueryOptions) => {
    return indexc04169956aa9f9513249ba8b5aa17642.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DeviceTypeController::index
 * @see app/Http/Controllers/DeviceTypeController.php:12
 * @route '/device-type/search'
 */
indexc04169956aa9f9513249ba8b5aa17642.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: indexc04169956aa9f9513249ba8b5aa17642.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\DeviceTypeController::index
 * @see app/Http/Controllers/DeviceTypeController.php:12
 * @route '/device-type/search'
 */
    const indexc04169956aa9f9513249ba8b5aa17642Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: indexc04169956aa9f9513249ba8b5aa17642.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\DeviceTypeController::index
 * @see app/Http/Controllers/DeviceTypeController.php:12
 * @route '/device-type/search'
 */
        indexc04169956aa9f9513249ba8b5aa17642Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: indexc04169956aa9f9513249ba8b5aa17642.url(options),
            method: 'post',
        })
    
    indexc04169956aa9f9513249ba8b5aa17642.form = indexc04169956aa9f9513249ba8b5aa17642Form
    /**
* @see \App\Http\Controllers\DeviceTypeController::index
 * @see app/Http/Controllers/DeviceTypeController.php:12
 * @route '/device-type'
 */
const indexd9b210eade6d7be9dc7a3c95741f03ab = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexd9b210eade6d7be9dc7a3c95741f03ab.url(options),
    method: 'get',
})

indexd9b210eade6d7be9dc7a3c95741f03ab.definition = {
    methods: ["get","head"],
    url: '/device-type',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DeviceTypeController::index
 * @see app/Http/Controllers/DeviceTypeController.php:12
 * @route '/device-type'
 */
indexd9b210eade6d7be9dc7a3c95741f03ab.url = (options?: RouteQueryOptions) => {
    return indexd9b210eade6d7be9dc7a3c95741f03ab.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DeviceTypeController::index
 * @see app/Http/Controllers/DeviceTypeController.php:12
 * @route '/device-type'
 */
indexd9b210eade6d7be9dc7a3c95741f03ab.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexd9b210eade6d7be9dc7a3c95741f03ab.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\DeviceTypeController::index
 * @see app/Http/Controllers/DeviceTypeController.php:12
 * @route '/device-type'
 */
indexd9b210eade6d7be9dc7a3c95741f03ab.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexd9b210eade6d7be9dc7a3c95741f03ab.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\DeviceTypeController::index
 * @see app/Http/Controllers/DeviceTypeController.php:12
 * @route '/device-type'
 */
    const indexd9b210eade6d7be9dc7a3c95741f03abForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: indexd9b210eade6d7be9dc7a3c95741f03ab.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\DeviceTypeController::index
 * @see app/Http/Controllers/DeviceTypeController.php:12
 * @route '/device-type'
 */
        indexd9b210eade6d7be9dc7a3c95741f03abForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexd9b210eade6d7be9dc7a3c95741f03ab.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\DeviceTypeController::index
 * @see app/Http/Controllers/DeviceTypeController.php:12
 * @route '/device-type'
 */
        indexd9b210eade6d7be9dc7a3c95741f03abForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexd9b210eade6d7be9dc7a3c95741f03ab.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    indexd9b210eade6d7be9dc7a3c95741f03ab.form = indexd9b210eade6d7be9dc7a3c95741f03abForm

/**
* Multiple routes resolve to \App\Http\Controllers\DeviceTypeController::index, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `index['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const index = {
    '/device-type/search': indexc04169956aa9f9513249ba8b5aa17642,
    '/device-type': indexd9b210eade6d7be9dc7a3c95741f03ab,
}

/**
* @see \App\Http\Controllers\DeviceTypeController::create
 * @see app/Http/Controllers/DeviceTypeController.php:19
 * @route '/device-type/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/device-type/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DeviceTypeController::create
 * @see app/Http/Controllers/DeviceTypeController.php:19
 * @route '/device-type/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DeviceTypeController::create
 * @see app/Http/Controllers/DeviceTypeController.php:19
 * @route '/device-type/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\DeviceTypeController::create
 * @see app/Http/Controllers/DeviceTypeController.php:19
 * @route '/device-type/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\DeviceTypeController::create
 * @see app/Http/Controllers/DeviceTypeController.php:19
 * @route '/device-type/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\DeviceTypeController::create
 * @see app/Http/Controllers/DeviceTypeController.php:19
 * @route '/device-type/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\DeviceTypeController::create
 * @see app/Http/Controllers/DeviceTypeController.php:19
 * @route '/device-type/create'
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
* @see \App\Http\Controllers\DeviceTypeController::store
 * @see app/Http/Controllers/DeviceTypeController.php:24
 * @route '/device-type'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/device-type',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\DeviceTypeController::store
 * @see app/Http/Controllers/DeviceTypeController.php:24
 * @route '/device-type'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DeviceTypeController::store
 * @see app/Http/Controllers/DeviceTypeController.php:24
 * @route '/device-type'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\DeviceTypeController::store
 * @see app/Http/Controllers/DeviceTypeController.php:24
 * @route '/device-type'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\DeviceTypeController::store
 * @see app/Http/Controllers/DeviceTypeController.php:24
 * @route '/device-type'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\DeviceTypeController::show
 * @see app/Http/Controllers/DeviceTypeController.php:33
 * @route '/device-type/{device_type}'
 */
export const show = (args: { device_type: number | { id: number } } | [device_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/device-type/{device_type}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DeviceTypeController::show
 * @see app/Http/Controllers/DeviceTypeController.php:33
 * @route '/device-type/{device_type}'
 */
show.url = (args: { device_type: number | { id: number } } | [device_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { device_type: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { device_type: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    device_type: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        device_type: typeof args.device_type === 'object'
                ? args.device_type.id
                : args.device_type,
                }

    return show.definition.url
            .replace('{device_type}', parsedArgs.device_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DeviceTypeController::show
 * @see app/Http/Controllers/DeviceTypeController.php:33
 * @route '/device-type/{device_type}'
 */
show.get = (args: { device_type: number | { id: number } } | [device_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\DeviceTypeController::show
 * @see app/Http/Controllers/DeviceTypeController.php:33
 * @route '/device-type/{device_type}'
 */
show.head = (args: { device_type: number | { id: number } } | [device_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\DeviceTypeController::show
 * @see app/Http/Controllers/DeviceTypeController.php:33
 * @route '/device-type/{device_type}'
 */
    const showForm = (args: { device_type: number | { id: number } } | [device_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\DeviceTypeController::show
 * @see app/Http/Controllers/DeviceTypeController.php:33
 * @route '/device-type/{device_type}'
 */
        showForm.get = (args: { device_type: number | { id: number } } | [device_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\DeviceTypeController::show
 * @see app/Http/Controllers/DeviceTypeController.php:33
 * @route '/device-type/{device_type}'
 */
        showForm.head = (args: { device_type: number | { id: number } } | [device_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\DeviceTypeController::edit
 * @see app/Http/Controllers/DeviceTypeController.php:38
 * @route '/device-type/{device_type}/edit'
 */
export const edit = (args: { device_type: number | { id: number } } | [device_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/device-type/{device_type}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DeviceTypeController::edit
 * @see app/Http/Controllers/DeviceTypeController.php:38
 * @route '/device-type/{device_type}/edit'
 */
edit.url = (args: { device_type: number | { id: number } } | [device_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { device_type: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { device_type: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    device_type: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        device_type: typeof args.device_type === 'object'
                ? args.device_type.id
                : args.device_type,
                }

    return edit.definition.url
            .replace('{device_type}', parsedArgs.device_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DeviceTypeController::edit
 * @see app/Http/Controllers/DeviceTypeController.php:38
 * @route '/device-type/{device_type}/edit'
 */
edit.get = (args: { device_type: number | { id: number } } | [device_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\DeviceTypeController::edit
 * @see app/Http/Controllers/DeviceTypeController.php:38
 * @route '/device-type/{device_type}/edit'
 */
edit.head = (args: { device_type: number | { id: number } } | [device_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\DeviceTypeController::edit
 * @see app/Http/Controllers/DeviceTypeController.php:38
 * @route '/device-type/{device_type}/edit'
 */
    const editForm = (args: { device_type: number | { id: number } } | [device_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\DeviceTypeController::edit
 * @see app/Http/Controllers/DeviceTypeController.php:38
 * @route '/device-type/{device_type}/edit'
 */
        editForm.get = (args: { device_type: number | { id: number } } | [device_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\DeviceTypeController::edit
 * @see app/Http/Controllers/DeviceTypeController.php:38
 * @route '/device-type/{device_type}/edit'
 */
        editForm.head = (args: { device_type: number | { id: number } } | [device_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\DeviceTypeController::update
 * @see app/Http/Controllers/DeviceTypeController.php:43
 * @route '/device-type/{device_type}'
 */
export const update = (args: { device_type: number | { id: number } } | [device_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/device-type/{device_type}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\DeviceTypeController::update
 * @see app/Http/Controllers/DeviceTypeController.php:43
 * @route '/device-type/{device_type}'
 */
update.url = (args: { device_type: number | { id: number } } | [device_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { device_type: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { device_type: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    device_type: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        device_type: typeof args.device_type === 'object'
                ? args.device_type.id
                : args.device_type,
                }

    return update.definition.url
            .replace('{device_type}', parsedArgs.device_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DeviceTypeController::update
 * @see app/Http/Controllers/DeviceTypeController.php:43
 * @route '/device-type/{device_type}'
 */
update.put = (args: { device_type: number | { id: number } } | [device_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\DeviceTypeController::update
 * @see app/Http/Controllers/DeviceTypeController.php:43
 * @route '/device-type/{device_type}'
 */
update.patch = (args: { device_type: number | { id: number } } | [device_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\DeviceTypeController::update
 * @see app/Http/Controllers/DeviceTypeController.php:43
 * @route '/device-type/{device_type}'
 */
    const updateForm = (args: { device_type: number | { id: number } } | [device_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\DeviceTypeController::update
 * @see app/Http/Controllers/DeviceTypeController.php:43
 * @route '/device-type/{device_type}'
 */
        updateForm.put = (args: { device_type: number | { id: number } } | [device_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\DeviceTypeController::update
 * @see app/Http/Controllers/DeviceTypeController.php:43
 * @route '/device-type/{device_type}'
 */
        updateForm.patch = (args: { device_type: number | { id: number } } | [device_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\DeviceTypeController::destroy
 * @see app/Http/Controllers/DeviceTypeController.php:52
 * @route '/device-type/{device_type}'
 */
export const destroy = (args: { device_type: number | { id: number } } | [device_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/device-type/{device_type}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\DeviceTypeController::destroy
 * @see app/Http/Controllers/DeviceTypeController.php:52
 * @route '/device-type/{device_type}'
 */
destroy.url = (args: { device_type: number | { id: number } } | [device_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { device_type: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { device_type: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    device_type: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        device_type: typeof args.device_type === 'object'
                ? args.device_type.id
                : args.device_type,
                }

    return destroy.definition.url
            .replace('{device_type}', parsedArgs.device_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DeviceTypeController::destroy
 * @see app/Http/Controllers/DeviceTypeController.php:52
 * @route '/device-type/{device_type}'
 */
destroy.delete = (args: { device_type: number | { id: number } } | [device_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\DeviceTypeController::destroy
 * @see app/Http/Controllers/DeviceTypeController.php:52
 * @route '/device-type/{device_type}'
 */
    const destroyForm = (args: { device_type: number | { id: number } } | [device_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\DeviceTypeController::destroy
 * @see app/Http/Controllers/DeviceTypeController.php:52
 * @route '/device-type/{device_type}'
 */
        destroyForm.delete = (args: { device_type: number | { id: number } } | [device_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const DeviceTypeController = { index, create, store, show, edit, update, destroy }

export default DeviceTypeController