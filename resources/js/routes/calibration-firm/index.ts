import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationFirmController::search
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationFirmController.php:19
 * @route '/calibration-firm/search'
 */
export const search = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: search.url(options),
    method: 'post',
})

search.definition = {
    methods: ["post"],
    url: '/calibration-firm/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationFirmController::search
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationFirmController.php:19
 * @route '/calibration-firm/search'
 */
search.url = (options?: RouteQueryOptions) => {
    return search.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationFirmController::search
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationFirmController.php:19
 * @route '/calibration-firm/search'
 */
search.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: search.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationFirmController::search
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationFirmController.php:19
 * @route '/calibration-firm/search'
 */
    const searchForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: search.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationFirmController::search
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationFirmController.php:19
 * @route '/calibration-firm/search'
 */
        searchForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: search.url(options),
            method: 'post',
        })
    
    search.form = searchForm
/**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationFirmController::index
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationFirmController.php:19
 * @route '/calibration-firm'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/calibration-firm',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationFirmController::index
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationFirmController.php:19
 * @route '/calibration-firm'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationFirmController::index
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationFirmController.php:19
 * @route '/calibration-firm'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationFirmController::index
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationFirmController.php:19
 * @route '/calibration-firm'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationFirmController::index
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationFirmController.php:19
 * @route '/calibration-firm'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationFirmController::index
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationFirmController.php:19
 * @route '/calibration-firm'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationFirmController::index
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationFirmController.php:19
 * @route '/calibration-firm'
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
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationFirmController::create
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationFirmController.php:34
 * @route '/calibration-firm/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/calibration-firm/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationFirmController::create
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationFirmController.php:34
 * @route '/calibration-firm/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationFirmController::create
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationFirmController.php:34
 * @route '/calibration-firm/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationFirmController::create
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationFirmController.php:34
 * @route '/calibration-firm/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationFirmController::create
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationFirmController.php:34
 * @route '/calibration-firm/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationFirmController::create
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationFirmController.php:34
 * @route '/calibration-firm/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationFirmController::create
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationFirmController.php:34
 * @route '/calibration-firm/create'
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
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationFirmController::store
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationFirmController.php:44
 * @route '/calibration-firm'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/calibration-firm',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationFirmController::store
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationFirmController.php:44
 * @route '/calibration-firm'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationFirmController::store
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationFirmController.php:44
 * @route '/calibration-firm'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationFirmController::store
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationFirmController.php:44
 * @route '/calibration-firm'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationFirmController::store
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationFirmController.php:44
 * @route '/calibration-firm'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationFirmController::show
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationFirmController.php:56
 * @route '/calibration-firm/{calibration_firm}'
 */
export const show = (args: { calibration_firm: number | { id: number } } | [calibration_firm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/calibration-firm/{calibration_firm}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationFirmController::show
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationFirmController.php:56
 * @route '/calibration-firm/{calibration_firm}'
 */
show.url = (args: { calibration_firm: number | { id: number } } | [calibration_firm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { calibration_firm: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { calibration_firm: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    calibration_firm: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        calibration_firm: typeof args.calibration_firm === 'object'
                ? args.calibration_firm.id
                : args.calibration_firm,
                }

    return show.definition.url
            .replace('{calibration_firm}', parsedArgs.calibration_firm.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationFirmController::show
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationFirmController.php:56
 * @route '/calibration-firm/{calibration_firm}'
 */
show.get = (args: { calibration_firm: number | { id: number } } | [calibration_firm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationFirmController::show
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationFirmController.php:56
 * @route '/calibration-firm/{calibration_firm}'
 */
show.head = (args: { calibration_firm: number | { id: number } } | [calibration_firm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationFirmController::show
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationFirmController.php:56
 * @route '/calibration-firm/{calibration_firm}'
 */
    const showForm = (args: { calibration_firm: number | { id: number } } | [calibration_firm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationFirmController::show
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationFirmController.php:56
 * @route '/calibration-firm/{calibration_firm}'
 */
        showForm.get = (args: { calibration_firm: number | { id: number } } | [calibration_firm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationFirmController::show
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationFirmController.php:56
 * @route '/calibration-firm/{calibration_firm}'
 */
        showForm.head = (args: { calibration_firm: number | { id: number } } | [calibration_firm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationFirmController::edit
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationFirmController.php:66
 * @route '/calibration-firm/{calibration_firm}/edit'
 */
export const edit = (args: { calibration_firm: number | { id: number } } | [calibration_firm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/calibration-firm/{calibration_firm}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationFirmController::edit
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationFirmController.php:66
 * @route '/calibration-firm/{calibration_firm}/edit'
 */
edit.url = (args: { calibration_firm: number | { id: number } } | [calibration_firm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { calibration_firm: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { calibration_firm: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    calibration_firm: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        calibration_firm: typeof args.calibration_firm === 'object'
                ? args.calibration_firm.id
                : args.calibration_firm,
                }

    return edit.definition.url
            .replace('{calibration_firm}', parsedArgs.calibration_firm.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationFirmController::edit
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationFirmController.php:66
 * @route '/calibration-firm/{calibration_firm}/edit'
 */
edit.get = (args: { calibration_firm: number | { id: number } } | [calibration_firm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationFirmController::edit
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationFirmController.php:66
 * @route '/calibration-firm/{calibration_firm}/edit'
 */
edit.head = (args: { calibration_firm: number | { id: number } } | [calibration_firm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationFirmController::edit
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationFirmController.php:66
 * @route '/calibration-firm/{calibration_firm}/edit'
 */
    const editForm = (args: { calibration_firm: number | { id: number } } | [calibration_firm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationFirmController::edit
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationFirmController.php:66
 * @route '/calibration-firm/{calibration_firm}/edit'
 */
        editForm.get = (args: { calibration_firm: number | { id: number } } | [calibration_firm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationFirmController::edit
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationFirmController.php:66
 * @route '/calibration-firm/{calibration_firm}/edit'
 */
        editForm.head = (args: { calibration_firm: number | { id: number } } | [calibration_firm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationFirmController::update
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationFirmController.php:76
 * @route '/calibration-firm/{calibration_firm}'
 */
export const update = (args: { calibration_firm: number | { id: number } } | [calibration_firm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/calibration-firm/{calibration_firm}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationFirmController::update
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationFirmController.php:76
 * @route '/calibration-firm/{calibration_firm}'
 */
update.url = (args: { calibration_firm: number | { id: number } } | [calibration_firm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { calibration_firm: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { calibration_firm: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    calibration_firm: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        calibration_firm: typeof args.calibration_firm === 'object'
                ? args.calibration_firm.id
                : args.calibration_firm,
                }

    return update.definition.url
            .replace('{calibration_firm}', parsedArgs.calibration_firm.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationFirmController::update
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationFirmController.php:76
 * @route '/calibration-firm/{calibration_firm}'
 */
update.put = (args: { calibration_firm: number | { id: number } } | [calibration_firm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationFirmController::update
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationFirmController.php:76
 * @route '/calibration-firm/{calibration_firm}'
 */
update.patch = (args: { calibration_firm: number | { id: number } } | [calibration_firm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationFirmController::update
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationFirmController.php:76
 * @route '/calibration-firm/{calibration_firm}'
 */
    const updateForm = (args: { calibration_firm: number | { id: number } } | [calibration_firm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationFirmController::update
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationFirmController.php:76
 * @route '/calibration-firm/{calibration_firm}'
 */
        updateForm.put = (args: { calibration_firm: number | { id: number } } | [calibration_firm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationFirmController::update
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationFirmController.php:76
 * @route '/calibration-firm/{calibration_firm}'
 */
        updateForm.patch = (args: { calibration_firm: number | { id: number } } | [calibration_firm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationFirmController::destroy
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationFirmController.php:88
 * @route '/calibration-firm/{calibration_firm}'
 */
export const destroy = (args: { calibration_firm: number | { id: number } } | [calibration_firm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/calibration-firm/{calibration_firm}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationFirmController::destroy
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationFirmController.php:88
 * @route '/calibration-firm/{calibration_firm}'
 */
destroy.url = (args: { calibration_firm: number | { id: number } } | [calibration_firm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { calibration_firm: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { calibration_firm: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    calibration_firm: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        calibration_firm: typeof args.calibration_firm === 'object'
                ? args.calibration_firm.id
                : args.calibration_firm,
                }

    return destroy.definition.url
            .replace('{calibration_firm}', parsedArgs.calibration_firm.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationFirmController::destroy
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationFirmController.php:88
 * @route '/calibration-firm/{calibration_firm}'
 */
destroy.delete = (args: { calibration_firm: number | { id: number } } | [calibration_firm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationFirmController::destroy
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationFirmController.php:88
 * @route '/calibration-firm/{calibration_firm}'
 */
    const destroyForm = (args: { calibration_firm: number | { id: number } } | [calibration_firm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationFirmController::destroy
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationFirmController.php:88
 * @route '/calibration-firm/{calibration_firm}'
 */
        destroyForm.delete = (args: { calibration_firm: number | { id: number } } | [calibration_firm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationFirmController::deleted
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationFirmController.php:95
 * @route '/calibration-firm-deleted'
 */
export const deleted = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deleted.url(options),
    method: 'get',
})

deleted.definition = {
    methods: ["get","head"],
    url: '/calibration-firm-deleted',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationFirmController::deleted
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationFirmController.php:95
 * @route '/calibration-firm-deleted'
 */
deleted.url = (options?: RouteQueryOptions) => {
    return deleted.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationFirmController::deleted
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationFirmController.php:95
 * @route '/calibration-firm-deleted'
 */
deleted.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deleted.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationFirmController::deleted
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationFirmController.php:95
 * @route '/calibration-firm-deleted'
 */
deleted.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: deleted.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationFirmController::deleted
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationFirmController.php:95
 * @route '/calibration-firm-deleted'
 */
    const deletedForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: deleted.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationFirmController::deleted
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationFirmController.php:95
 * @route '/calibration-firm-deleted'
 */
        deletedForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: deleted.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationFirmController::deleted
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationFirmController.php:95
 * @route '/calibration-firm-deleted'
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
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationFirmController::permanentDelete
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationFirmController.php:105
 * @route '/calibration-firm-permanent-delete/{calibrationFirm}'
 */
export const permanentDelete = (args: { calibrationFirm: number | { id: number } } | [calibrationFirm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: permanentDelete.url(args, options),
    method: 'delete',
})

permanentDelete.definition = {
    methods: ["delete"],
    url: '/calibration-firm-permanent-delete/{calibrationFirm}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationFirmController::permanentDelete
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationFirmController.php:105
 * @route '/calibration-firm-permanent-delete/{calibrationFirm}'
 */
permanentDelete.url = (args: { calibrationFirm: number | { id: number } } | [calibrationFirm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { calibrationFirm: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { calibrationFirm: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    calibrationFirm: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        calibrationFirm: typeof args.calibrationFirm === 'object'
                ? args.calibrationFirm.id
                : args.calibrationFirm,
                }

    return permanentDelete.definition.url
            .replace('{calibrationFirm}', parsedArgs.calibrationFirm.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationFirmController::permanentDelete
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationFirmController.php:105
 * @route '/calibration-firm-permanent-delete/{calibrationFirm}'
 */
permanentDelete.delete = (args: { calibrationFirm: number | { id: number } } | [calibrationFirm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: permanentDelete.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationFirmController::permanentDelete
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationFirmController.php:105
 * @route '/calibration-firm-permanent-delete/{calibrationFirm}'
 */
    const permanentDeleteForm = (args: { calibrationFirm: number | { id: number } } | [calibrationFirm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: permanentDelete.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationFirmController::permanentDelete
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationFirmController.php:105
 * @route '/calibration-firm-permanent-delete/{calibrationFirm}'
 */
        permanentDeleteForm.delete = (args: { calibrationFirm: number | { id: number } } | [calibrationFirm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationFirmController::restore
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationFirmController.php:114
 * @route '/calibration-firm-restore/{calibrationFirm}'
 */
export const restore = (args: { calibrationFirm: number | { id: number } } | [calibrationFirm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: restore.url(args, options),
    method: 'get',
})

restore.definition = {
    methods: ["get","head"],
    url: '/calibration-firm-restore/{calibrationFirm}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationFirmController::restore
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationFirmController.php:114
 * @route '/calibration-firm-restore/{calibrationFirm}'
 */
restore.url = (args: { calibrationFirm: number | { id: number } } | [calibrationFirm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { calibrationFirm: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { calibrationFirm: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    calibrationFirm: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        calibrationFirm: typeof args.calibrationFirm === 'object'
                ? args.calibrationFirm.id
                : args.calibrationFirm,
                }

    return restore.definition.url
            .replace('{calibrationFirm}', parsedArgs.calibrationFirm.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationFirmController::restore
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationFirmController.php:114
 * @route '/calibration-firm-restore/{calibrationFirm}'
 */
restore.get = (args: { calibrationFirm: number | { id: number } } | [calibrationFirm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: restore.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationFirmController::restore
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationFirmController.php:114
 * @route '/calibration-firm-restore/{calibrationFirm}'
 */
restore.head = (args: { calibrationFirm: number | { id: number } } | [calibrationFirm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: restore.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationFirmController::restore
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationFirmController.php:114
 * @route '/calibration-firm-restore/{calibrationFirm}'
 */
    const restoreForm = (args: { calibrationFirm: number | { id: number } } | [calibrationFirm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: restore.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationFirmController::restore
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationFirmController.php:114
 * @route '/calibration-firm-restore/{calibrationFirm}'
 */
        restoreForm.get = (args: { calibrationFirm: number | { id: number } } | [calibrationFirm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: restore.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationFirmController::restore
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationFirmController.php:114
 * @route '/calibration-firm-restore/{calibrationFirm}'
 */
        restoreForm.head = (args: { calibrationFirm: number | { id: number } } | [calibrationFirm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: restore.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    restore.form = restoreForm
const calibrationFirm = {
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

export default calibrationFirm