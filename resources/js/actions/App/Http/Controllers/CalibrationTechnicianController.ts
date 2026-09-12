import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\CalibrationTechnicianController::index
 * @see app/Http/Controllers/CalibrationTechnicianController.php:14
 * @route '/calibration-technician/search'
 */
const indexc8a2fdca090085fdb46a6d66b98171c0 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: indexc8a2fdca090085fdb46a6d66b98171c0.url(options),
    method: 'post',
})

indexc8a2fdca090085fdb46a6d66b98171c0.definition = {
    methods: ["post"],
    url: '/calibration-technician/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CalibrationTechnicianController::index
 * @see app/Http/Controllers/CalibrationTechnicianController.php:14
 * @route '/calibration-technician/search'
 */
indexc8a2fdca090085fdb46a6d66b98171c0.url = (options?: RouteQueryOptions) => {
    return indexc8a2fdca090085fdb46a6d66b98171c0.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CalibrationTechnicianController::index
 * @see app/Http/Controllers/CalibrationTechnicianController.php:14
 * @route '/calibration-technician/search'
 */
indexc8a2fdca090085fdb46a6d66b98171c0.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: indexc8a2fdca090085fdb46a6d66b98171c0.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CalibrationTechnicianController::index
 * @see app/Http/Controllers/CalibrationTechnicianController.php:14
 * @route '/calibration-technician/search'
 */
    const indexc8a2fdca090085fdb46a6d66b98171c0Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: indexc8a2fdca090085fdb46a6d66b98171c0.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CalibrationTechnicianController::index
 * @see app/Http/Controllers/CalibrationTechnicianController.php:14
 * @route '/calibration-technician/search'
 */
        indexc8a2fdca090085fdb46a6d66b98171c0Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: indexc8a2fdca090085fdb46a6d66b98171c0.url(options),
            method: 'post',
        })
    
    indexc8a2fdca090085fdb46a6d66b98171c0.form = indexc8a2fdca090085fdb46a6d66b98171c0Form
    /**
* @see \App\Http\Controllers\CalibrationTechnicianController::index
 * @see app/Http/Controllers/CalibrationTechnicianController.php:14
 * @route '/calibration-technician'
 */
const index2ccb480134798ea8f11ceb311eb969fe = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index2ccb480134798ea8f11ceb311eb969fe.url(options),
    method: 'get',
})

index2ccb480134798ea8f11ceb311eb969fe.definition = {
    methods: ["get","head"],
    url: '/calibration-technician',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CalibrationTechnicianController::index
 * @see app/Http/Controllers/CalibrationTechnicianController.php:14
 * @route '/calibration-technician'
 */
index2ccb480134798ea8f11ceb311eb969fe.url = (options?: RouteQueryOptions) => {
    return index2ccb480134798ea8f11ceb311eb969fe.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CalibrationTechnicianController::index
 * @see app/Http/Controllers/CalibrationTechnicianController.php:14
 * @route '/calibration-technician'
 */
index2ccb480134798ea8f11ceb311eb969fe.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index2ccb480134798ea8f11ceb311eb969fe.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CalibrationTechnicianController::index
 * @see app/Http/Controllers/CalibrationTechnicianController.php:14
 * @route '/calibration-technician'
 */
index2ccb480134798ea8f11ceb311eb969fe.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index2ccb480134798ea8f11ceb311eb969fe.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CalibrationTechnicianController::index
 * @see app/Http/Controllers/CalibrationTechnicianController.php:14
 * @route '/calibration-technician'
 */
    const index2ccb480134798ea8f11ceb311eb969feForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index2ccb480134798ea8f11ceb311eb969fe.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CalibrationTechnicianController::index
 * @see app/Http/Controllers/CalibrationTechnicianController.php:14
 * @route '/calibration-technician'
 */
        index2ccb480134798ea8f11ceb311eb969feForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index2ccb480134798ea8f11ceb311eb969fe.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CalibrationTechnicianController::index
 * @see app/Http/Controllers/CalibrationTechnicianController.php:14
 * @route '/calibration-technician'
 */
        index2ccb480134798ea8f11ceb311eb969feForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index2ccb480134798ea8f11ceb311eb969fe.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index2ccb480134798ea8f11ceb311eb969fe.form = index2ccb480134798ea8f11ceb311eb969feForm

/**
* Multiple routes resolve to \App\Http\Controllers\CalibrationTechnicianController::index, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `index['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const index = {
    '/calibration-technician/search': indexc8a2fdca090085fdb46a6d66b98171c0,
    '/calibration-technician': index2ccb480134798ea8f11ceb311eb969fe,
}

/**
* @see \App\Http\Controllers\CalibrationTechnicianController::create
 * @see app/Http/Controllers/CalibrationTechnicianController.php:31
 * @route '/calibration-technician/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/calibration-technician/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CalibrationTechnicianController::create
 * @see app/Http/Controllers/CalibrationTechnicianController.php:31
 * @route '/calibration-technician/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CalibrationTechnicianController::create
 * @see app/Http/Controllers/CalibrationTechnicianController.php:31
 * @route '/calibration-technician/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CalibrationTechnicianController::create
 * @see app/Http/Controllers/CalibrationTechnicianController.php:31
 * @route '/calibration-technician/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CalibrationTechnicianController::create
 * @see app/Http/Controllers/CalibrationTechnicianController.php:31
 * @route '/calibration-technician/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CalibrationTechnicianController::create
 * @see app/Http/Controllers/CalibrationTechnicianController.php:31
 * @route '/calibration-technician/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CalibrationTechnicianController::create
 * @see app/Http/Controllers/CalibrationTechnicianController.php:31
 * @route '/calibration-technician/create'
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
* @see \App\Http\Controllers\CalibrationTechnicianController::store
 * @see app/Http/Controllers/CalibrationTechnicianController.php:36
 * @route '/calibration-technician'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/calibration-technician',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CalibrationTechnicianController::store
 * @see app/Http/Controllers/CalibrationTechnicianController.php:36
 * @route '/calibration-technician'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CalibrationTechnicianController::store
 * @see app/Http/Controllers/CalibrationTechnicianController.php:36
 * @route '/calibration-technician'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CalibrationTechnicianController::store
 * @see app/Http/Controllers/CalibrationTechnicianController.php:36
 * @route '/calibration-technician'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CalibrationTechnicianController::store
 * @see app/Http/Controllers/CalibrationTechnicianController.php:36
 * @route '/calibration-technician'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\CalibrationTechnicianController::show
 * @see app/Http/Controllers/CalibrationTechnicianController.php:48
 * @route '/calibration-technician/{calibration_technician}'
 */
export const show = (args: { calibration_technician: number | { id: number } } | [calibration_technician: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/calibration-technician/{calibration_technician}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CalibrationTechnicianController::show
 * @see app/Http/Controllers/CalibrationTechnicianController.php:48
 * @route '/calibration-technician/{calibration_technician}'
 */
show.url = (args: { calibration_technician: number | { id: number } } | [calibration_technician: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { calibration_technician: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { calibration_technician: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    calibration_technician: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        calibration_technician: typeof args.calibration_technician === 'object'
                ? args.calibration_technician.id
                : args.calibration_technician,
                }

    return show.definition.url
            .replace('{calibration_technician}', parsedArgs.calibration_technician.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CalibrationTechnicianController::show
 * @see app/Http/Controllers/CalibrationTechnicianController.php:48
 * @route '/calibration-technician/{calibration_technician}'
 */
show.get = (args: { calibration_technician: number | { id: number } } | [calibration_technician: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CalibrationTechnicianController::show
 * @see app/Http/Controllers/CalibrationTechnicianController.php:48
 * @route '/calibration-technician/{calibration_technician}'
 */
show.head = (args: { calibration_technician: number | { id: number } } | [calibration_technician: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CalibrationTechnicianController::show
 * @see app/Http/Controllers/CalibrationTechnicianController.php:48
 * @route '/calibration-technician/{calibration_technician}'
 */
    const showForm = (args: { calibration_technician: number | { id: number } } | [calibration_technician: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CalibrationTechnicianController::show
 * @see app/Http/Controllers/CalibrationTechnicianController.php:48
 * @route '/calibration-technician/{calibration_technician}'
 */
        showForm.get = (args: { calibration_technician: number | { id: number } } | [calibration_technician: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CalibrationTechnicianController::show
 * @see app/Http/Controllers/CalibrationTechnicianController.php:48
 * @route '/calibration-technician/{calibration_technician}'
 */
        showForm.head = (args: { calibration_technician: number | { id: number } } | [calibration_technician: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\CalibrationTechnicianController::edit
 * @see app/Http/Controllers/CalibrationTechnicianController.php:53
 * @route '/calibration-technician/{calibration_technician}/edit'
 */
export const edit = (args: { calibration_technician: number | { id: number } } | [calibration_technician: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/calibration-technician/{calibration_technician}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CalibrationTechnicianController::edit
 * @see app/Http/Controllers/CalibrationTechnicianController.php:53
 * @route '/calibration-technician/{calibration_technician}/edit'
 */
edit.url = (args: { calibration_technician: number | { id: number } } | [calibration_technician: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { calibration_technician: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { calibration_technician: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    calibration_technician: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        calibration_technician: typeof args.calibration_technician === 'object'
                ? args.calibration_technician.id
                : args.calibration_technician,
                }

    return edit.definition.url
            .replace('{calibration_technician}', parsedArgs.calibration_technician.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CalibrationTechnicianController::edit
 * @see app/Http/Controllers/CalibrationTechnicianController.php:53
 * @route '/calibration-technician/{calibration_technician}/edit'
 */
edit.get = (args: { calibration_technician: number | { id: number } } | [calibration_technician: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CalibrationTechnicianController::edit
 * @see app/Http/Controllers/CalibrationTechnicianController.php:53
 * @route '/calibration-technician/{calibration_technician}/edit'
 */
edit.head = (args: { calibration_technician: number | { id: number } } | [calibration_technician: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CalibrationTechnicianController::edit
 * @see app/Http/Controllers/CalibrationTechnicianController.php:53
 * @route '/calibration-technician/{calibration_technician}/edit'
 */
    const editForm = (args: { calibration_technician: number | { id: number } } | [calibration_technician: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CalibrationTechnicianController::edit
 * @see app/Http/Controllers/CalibrationTechnicianController.php:53
 * @route '/calibration-technician/{calibration_technician}/edit'
 */
        editForm.get = (args: { calibration_technician: number | { id: number } } | [calibration_technician: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CalibrationTechnicianController::edit
 * @see app/Http/Controllers/CalibrationTechnicianController.php:53
 * @route '/calibration-technician/{calibration_technician}/edit'
 */
        editForm.head = (args: { calibration_technician: number | { id: number } } | [calibration_technician: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\CalibrationTechnicianController::update
 * @see app/Http/Controllers/CalibrationTechnicianController.php:58
 * @route '/calibration-technician/{calibration_technician}'
 */
export const update = (args: { calibration_technician: number | { id: number } } | [calibration_technician: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/calibration-technician/{calibration_technician}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\CalibrationTechnicianController::update
 * @see app/Http/Controllers/CalibrationTechnicianController.php:58
 * @route '/calibration-technician/{calibration_technician}'
 */
update.url = (args: { calibration_technician: number | { id: number } } | [calibration_technician: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { calibration_technician: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { calibration_technician: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    calibration_technician: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        calibration_technician: typeof args.calibration_technician === 'object'
                ? args.calibration_technician.id
                : args.calibration_technician,
                }

    return update.definition.url
            .replace('{calibration_technician}', parsedArgs.calibration_technician.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CalibrationTechnicianController::update
 * @see app/Http/Controllers/CalibrationTechnicianController.php:58
 * @route '/calibration-technician/{calibration_technician}'
 */
update.put = (args: { calibration_technician: number | { id: number } } | [calibration_technician: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\CalibrationTechnicianController::update
 * @see app/Http/Controllers/CalibrationTechnicianController.php:58
 * @route '/calibration-technician/{calibration_technician}'
 */
update.patch = (args: { calibration_technician: number | { id: number } } | [calibration_technician: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\CalibrationTechnicianController::update
 * @see app/Http/Controllers/CalibrationTechnicianController.php:58
 * @route '/calibration-technician/{calibration_technician}'
 */
    const updateForm = (args: { calibration_technician: number | { id: number } } | [calibration_technician: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CalibrationTechnicianController::update
 * @see app/Http/Controllers/CalibrationTechnicianController.php:58
 * @route '/calibration-technician/{calibration_technician}'
 */
        updateForm.put = (args: { calibration_technician: number | { id: number } } | [calibration_technician: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\CalibrationTechnicianController::update
 * @see app/Http/Controllers/CalibrationTechnicianController.php:58
 * @route '/calibration-technician/{calibration_technician}'
 */
        updateForm.patch = (args: { calibration_technician: number | { id: number } } | [calibration_technician: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\CalibrationTechnicianController::destroy
 * @see app/Http/Controllers/CalibrationTechnicianController.php:70
 * @route '/calibration-technician/{calibration_technician}'
 */
export const destroy = (args: { calibration_technician: number | { id: number } } | [calibration_technician: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/calibration-technician/{calibration_technician}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\CalibrationTechnicianController::destroy
 * @see app/Http/Controllers/CalibrationTechnicianController.php:70
 * @route '/calibration-technician/{calibration_technician}'
 */
destroy.url = (args: { calibration_technician: number | { id: number } } | [calibration_technician: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { calibration_technician: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { calibration_technician: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    calibration_technician: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        calibration_technician: typeof args.calibration_technician === 'object'
                ? args.calibration_technician.id
                : args.calibration_technician,
                }

    return destroy.definition.url
            .replace('{calibration_technician}', parsedArgs.calibration_technician.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CalibrationTechnicianController::destroy
 * @see app/Http/Controllers/CalibrationTechnicianController.php:70
 * @route '/calibration-technician/{calibration_technician}'
 */
destroy.delete = (args: { calibration_technician: number | { id: number } } | [calibration_technician: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\CalibrationTechnicianController::destroy
 * @see app/Http/Controllers/CalibrationTechnicianController.php:70
 * @route '/calibration-technician/{calibration_technician}'
 */
    const destroyForm = (args: { calibration_technician: number | { id: number } } | [calibration_technician: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CalibrationTechnicianController::destroy
 * @see app/Http/Controllers/CalibrationTechnicianController.php:70
 * @route '/calibration-technician/{calibration_technician}'
 */
        destroyForm.delete = (args: { calibration_technician: number | { id: number } } | [calibration_technician: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\CalibrationTechnicianController::deleteMedia
 * @see app/Http/Controllers/CalibrationTechnicianController.php:79
 * @route '/calibration-technician/{calibrationTechnician}/media/{mediaId}'
 */
export const deleteMedia = (args: { calibrationTechnician: number | { id: number }, mediaId: string | number } | [calibrationTechnician: number | { id: number }, mediaId: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMedia.url(args, options),
    method: 'delete',
})

deleteMedia.definition = {
    methods: ["delete"],
    url: '/calibration-technician/{calibrationTechnician}/media/{mediaId}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\CalibrationTechnicianController::deleteMedia
 * @see app/Http/Controllers/CalibrationTechnicianController.php:79
 * @route '/calibration-technician/{calibrationTechnician}/media/{mediaId}'
 */
deleteMedia.url = (args: { calibrationTechnician: number | { id: number }, mediaId: string | number } | [calibrationTechnician: number | { id: number }, mediaId: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    calibrationTechnician: args[0],
                    mediaId: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        calibrationTechnician: typeof args.calibrationTechnician === 'object'
                ? args.calibrationTechnician.id
                : args.calibrationTechnician,
                                mediaId: args.mediaId,
                }

    return deleteMedia.definition.url
            .replace('{calibrationTechnician}', parsedArgs.calibrationTechnician.toString())
            .replace('{mediaId}', parsedArgs.mediaId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CalibrationTechnicianController::deleteMedia
 * @see app/Http/Controllers/CalibrationTechnicianController.php:79
 * @route '/calibration-technician/{calibrationTechnician}/media/{mediaId}'
 */
deleteMedia.delete = (args: { calibrationTechnician: number | { id: number }, mediaId: string | number } | [calibrationTechnician: number | { id: number }, mediaId: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMedia.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\CalibrationTechnicianController::deleteMedia
 * @see app/Http/Controllers/CalibrationTechnicianController.php:79
 * @route '/calibration-technician/{calibrationTechnician}/media/{mediaId}'
 */
    const deleteMediaForm = (args: { calibrationTechnician: number | { id: number }, mediaId: string | number } | [calibrationTechnician: number | { id: number }, mediaId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: deleteMedia.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CalibrationTechnicianController::deleteMedia
 * @see app/Http/Controllers/CalibrationTechnicianController.php:79
 * @route '/calibration-technician/{calibrationTechnician}/media/{mediaId}'
 */
        deleteMediaForm.delete = (args: { calibrationTechnician: number | { id: number }, mediaId: string | number } | [calibrationTechnician: number | { id: number }, mediaId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: deleteMedia.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    deleteMedia.form = deleteMediaForm
const CalibrationTechnicianController = { index, create, store, show, edit, update, destroy, deleteMedia }

export default CalibrationTechnicianController