import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\ComplaintSourceTypeController::index
 * @see app/Http/Controllers/ComplaintSourceTypeController.php:13
 * @route '/complaint-source-type/search'
 */
const index73ab01edd5e323ac9caf394e57eef25d = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: index73ab01edd5e323ac9caf394e57eef25d.url(options),
    method: 'post',
})

index73ab01edd5e323ac9caf394e57eef25d.definition = {
    methods: ["post"],
    url: '/complaint-source-type/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ComplaintSourceTypeController::index
 * @see app/Http/Controllers/ComplaintSourceTypeController.php:13
 * @route '/complaint-source-type/search'
 */
index73ab01edd5e323ac9caf394e57eef25d.url = (options?: RouteQueryOptions) => {
    return index73ab01edd5e323ac9caf394e57eef25d.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ComplaintSourceTypeController::index
 * @see app/Http/Controllers/ComplaintSourceTypeController.php:13
 * @route '/complaint-source-type/search'
 */
index73ab01edd5e323ac9caf394e57eef25d.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: index73ab01edd5e323ac9caf394e57eef25d.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ComplaintSourceTypeController::index
 * @see app/Http/Controllers/ComplaintSourceTypeController.php:13
 * @route '/complaint-source-type/search'
 */
    const index73ab01edd5e323ac9caf394e57eef25dForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: index73ab01edd5e323ac9caf394e57eef25d.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ComplaintSourceTypeController::index
 * @see app/Http/Controllers/ComplaintSourceTypeController.php:13
 * @route '/complaint-source-type/search'
 */
        index73ab01edd5e323ac9caf394e57eef25dForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: index73ab01edd5e323ac9caf394e57eef25d.url(options),
            method: 'post',
        })
    
    index73ab01edd5e323ac9caf394e57eef25d.form = index73ab01edd5e323ac9caf394e57eef25dForm
    /**
* @see \App\Http\Controllers\ComplaintSourceTypeController::index
 * @see app/Http/Controllers/ComplaintSourceTypeController.php:13
 * @route '/complaint-source-type'
 */
const indexe3d9bc3aa17adc8d3b6679ff9fd03f0d = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexe3d9bc3aa17adc8d3b6679ff9fd03f0d.url(options),
    method: 'get',
})

indexe3d9bc3aa17adc8d3b6679ff9fd03f0d.definition = {
    methods: ["get","head"],
    url: '/complaint-source-type',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ComplaintSourceTypeController::index
 * @see app/Http/Controllers/ComplaintSourceTypeController.php:13
 * @route '/complaint-source-type'
 */
indexe3d9bc3aa17adc8d3b6679ff9fd03f0d.url = (options?: RouteQueryOptions) => {
    return indexe3d9bc3aa17adc8d3b6679ff9fd03f0d.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ComplaintSourceTypeController::index
 * @see app/Http/Controllers/ComplaintSourceTypeController.php:13
 * @route '/complaint-source-type'
 */
indexe3d9bc3aa17adc8d3b6679ff9fd03f0d.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexe3d9bc3aa17adc8d3b6679ff9fd03f0d.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ComplaintSourceTypeController::index
 * @see app/Http/Controllers/ComplaintSourceTypeController.php:13
 * @route '/complaint-source-type'
 */
indexe3d9bc3aa17adc8d3b6679ff9fd03f0d.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexe3d9bc3aa17adc8d3b6679ff9fd03f0d.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ComplaintSourceTypeController::index
 * @see app/Http/Controllers/ComplaintSourceTypeController.php:13
 * @route '/complaint-source-type'
 */
    const indexe3d9bc3aa17adc8d3b6679ff9fd03f0dForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: indexe3d9bc3aa17adc8d3b6679ff9fd03f0d.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ComplaintSourceTypeController::index
 * @see app/Http/Controllers/ComplaintSourceTypeController.php:13
 * @route '/complaint-source-type'
 */
        indexe3d9bc3aa17adc8d3b6679ff9fd03f0dForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexe3d9bc3aa17adc8d3b6679ff9fd03f0d.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ComplaintSourceTypeController::index
 * @see app/Http/Controllers/ComplaintSourceTypeController.php:13
 * @route '/complaint-source-type'
 */
        indexe3d9bc3aa17adc8d3b6679ff9fd03f0dForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexe3d9bc3aa17adc8d3b6679ff9fd03f0d.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    indexe3d9bc3aa17adc8d3b6679ff9fd03f0d.form = indexe3d9bc3aa17adc8d3b6679ff9fd03f0dForm

/**
* Multiple routes resolve to \App\Http\Controllers\ComplaintSourceTypeController::index, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `index['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const index = {
    '/complaint-source-type/search': index73ab01edd5e323ac9caf394e57eef25d,
    '/complaint-source-type': indexe3d9bc3aa17adc8d3b6679ff9fd03f0d,
}

/**
* @see \App\Http\Controllers\ComplaintSourceTypeController::create
 * @see app/Http/Controllers/ComplaintSourceTypeController.php:25
 * @route '/complaint-source-type/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/complaint-source-type/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ComplaintSourceTypeController::create
 * @see app/Http/Controllers/ComplaintSourceTypeController.php:25
 * @route '/complaint-source-type/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ComplaintSourceTypeController::create
 * @see app/Http/Controllers/ComplaintSourceTypeController.php:25
 * @route '/complaint-source-type/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ComplaintSourceTypeController::create
 * @see app/Http/Controllers/ComplaintSourceTypeController.php:25
 * @route '/complaint-source-type/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ComplaintSourceTypeController::create
 * @see app/Http/Controllers/ComplaintSourceTypeController.php:25
 * @route '/complaint-source-type/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ComplaintSourceTypeController::create
 * @see app/Http/Controllers/ComplaintSourceTypeController.php:25
 * @route '/complaint-source-type/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ComplaintSourceTypeController::create
 * @see app/Http/Controllers/ComplaintSourceTypeController.php:25
 * @route '/complaint-source-type/create'
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
* @see \App\Http\Controllers\ComplaintSourceTypeController::store
 * @see app/Http/Controllers/ComplaintSourceTypeController.php:30
 * @route '/complaint-source-type'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/complaint-source-type',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ComplaintSourceTypeController::store
 * @see app/Http/Controllers/ComplaintSourceTypeController.php:30
 * @route '/complaint-source-type'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ComplaintSourceTypeController::store
 * @see app/Http/Controllers/ComplaintSourceTypeController.php:30
 * @route '/complaint-source-type'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ComplaintSourceTypeController::store
 * @see app/Http/Controllers/ComplaintSourceTypeController.php:30
 * @route '/complaint-source-type'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ComplaintSourceTypeController::store
 * @see app/Http/Controllers/ComplaintSourceTypeController.php:30
 * @route '/complaint-source-type'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\ComplaintSourceTypeController::show
 * @see app/Http/Controllers/ComplaintSourceTypeController.php:43
 * @route '/complaint-source-type/{complaint_source_type}'
 */
export const show = (args: { complaint_source_type: number | { id: number } } | [complaint_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/complaint-source-type/{complaint_source_type}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ComplaintSourceTypeController::show
 * @see app/Http/Controllers/ComplaintSourceTypeController.php:43
 * @route '/complaint-source-type/{complaint_source_type}'
 */
show.url = (args: { complaint_source_type: number | { id: number } } | [complaint_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { complaint_source_type: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { complaint_source_type: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    complaint_source_type: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        complaint_source_type: typeof args.complaint_source_type === 'object'
                ? args.complaint_source_type.id
                : args.complaint_source_type,
                }

    return show.definition.url
            .replace('{complaint_source_type}', parsedArgs.complaint_source_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ComplaintSourceTypeController::show
 * @see app/Http/Controllers/ComplaintSourceTypeController.php:43
 * @route '/complaint-source-type/{complaint_source_type}'
 */
show.get = (args: { complaint_source_type: number | { id: number } } | [complaint_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ComplaintSourceTypeController::show
 * @see app/Http/Controllers/ComplaintSourceTypeController.php:43
 * @route '/complaint-source-type/{complaint_source_type}'
 */
show.head = (args: { complaint_source_type: number | { id: number } } | [complaint_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ComplaintSourceTypeController::show
 * @see app/Http/Controllers/ComplaintSourceTypeController.php:43
 * @route '/complaint-source-type/{complaint_source_type}'
 */
    const showForm = (args: { complaint_source_type: number | { id: number } } | [complaint_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ComplaintSourceTypeController::show
 * @see app/Http/Controllers/ComplaintSourceTypeController.php:43
 * @route '/complaint-source-type/{complaint_source_type}'
 */
        showForm.get = (args: { complaint_source_type: number | { id: number } } | [complaint_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ComplaintSourceTypeController::show
 * @see app/Http/Controllers/ComplaintSourceTypeController.php:43
 * @route '/complaint-source-type/{complaint_source_type}'
 */
        showForm.head = (args: { complaint_source_type: number | { id: number } } | [complaint_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\ComplaintSourceTypeController::edit
 * @see app/Http/Controllers/ComplaintSourceTypeController.php:48
 * @route '/complaint-source-type/{complaint_source_type}/edit'
 */
export const edit = (args: { complaint_source_type: number | { id: number } } | [complaint_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/complaint-source-type/{complaint_source_type}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ComplaintSourceTypeController::edit
 * @see app/Http/Controllers/ComplaintSourceTypeController.php:48
 * @route '/complaint-source-type/{complaint_source_type}/edit'
 */
edit.url = (args: { complaint_source_type: number | { id: number } } | [complaint_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { complaint_source_type: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { complaint_source_type: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    complaint_source_type: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        complaint_source_type: typeof args.complaint_source_type === 'object'
                ? args.complaint_source_type.id
                : args.complaint_source_type,
                }

    return edit.definition.url
            .replace('{complaint_source_type}', parsedArgs.complaint_source_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ComplaintSourceTypeController::edit
 * @see app/Http/Controllers/ComplaintSourceTypeController.php:48
 * @route '/complaint-source-type/{complaint_source_type}/edit'
 */
edit.get = (args: { complaint_source_type: number | { id: number } } | [complaint_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ComplaintSourceTypeController::edit
 * @see app/Http/Controllers/ComplaintSourceTypeController.php:48
 * @route '/complaint-source-type/{complaint_source_type}/edit'
 */
edit.head = (args: { complaint_source_type: number | { id: number } } | [complaint_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ComplaintSourceTypeController::edit
 * @see app/Http/Controllers/ComplaintSourceTypeController.php:48
 * @route '/complaint-source-type/{complaint_source_type}/edit'
 */
    const editForm = (args: { complaint_source_type: number | { id: number } } | [complaint_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ComplaintSourceTypeController::edit
 * @see app/Http/Controllers/ComplaintSourceTypeController.php:48
 * @route '/complaint-source-type/{complaint_source_type}/edit'
 */
        editForm.get = (args: { complaint_source_type: number | { id: number } } | [complaint_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ComplaintSourceTypeController::edit
 * @see app/Http/Controllers/ComplaintSourceTypeController.php:48
 * @route '/complaint-source-type/{complaint_source_type}/edit'
 */
        editForm.head = (args: { complaint_source_type: number | { id: number } } | [complaint_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\ComplaintSourceTypeController::update
 * @see app/Http/Controllers/ComplaintSourceTypeController.php:53
 * @route '/complaint-source-type/{complaint_source_type}'
 */
export const update = (args: { complaint_source_type: number | { id: number } } | [complaint_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/complaint-source-type/{complaint_source_type}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\ComplaintSourceTypeController::update
 * @see app/Http/Controllers/ComplaintSourceTypeController.php:53
 * @route '/complaint-source-type/{complaint_source_type}'
 */
update.url = (args: { complaint_source_type: number | { id: number } } | [complaint_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { complaint_source_type: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { complaint_source_type: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    complaint_source_type: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        complaint_source_type: typeof args.complaint_source_type === 'object'
                ? args.complaint_source_type.id
                : args.complaint_source_type,
                }

    return update.definition.url
            .replace('{complaint_source_type}', parsedArgs.complaint_source_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ComplaintSourceTypeController::update
 * @see app/Http/Controllers/ComplaintSourceTypeController.php:53
 * @route '/complaint-source-type/{complaint_source_type}'
 */
update.put = (args: { complaint_source_type: number | { id: number } } | [complaint_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\ComplaintSourceTypeController::update
 * @see app/Http/Controllers/ComplaintSourceTypeController.php:53
 * @route '/complaint-source-type/{complaint_source_type}'
 */
update.patch = (args: { complaint_source_type: number | { id: number } } | [complaint_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\ComplaintSourceTypeController::update
 * @see app/Http/Controllers/ComplaintSourceTypeController.php:53
 * @route '/complaint-source-type/{complaint_source_type}'
 */
    const updateForm = (args: { complaint_source_type: number | { id: number } } | [complaint_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ComplaintSourceTypeController::update
 * @see app/Http/Controllers/ComplaintSourceTypeController.php:53
 * @route '/complaint-source-type/{complaint_source_type}'
 */
        updateForm.put = (args: { complaint_source_type: number | { id: number } } | [complaint_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\ComplaintSourceTypeController::update
 * @see app/Http/Controllers/ComplaintSourceTypeController.php:53
 * @route '/complaint-source-type/{complaint_source_type}'
 */
        updateForm.patch = (args: { complaint_source_type: number | { id: number } } | [complaint_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\ComplaintSourceTypeController::destroy
 * @see app/Http/Controllers/ComplaintSourceTypeController.php:62
 * @route '/complaint-source-type/{complaint_source_type}'
 */
export const destroy = (args: { complaint_source_type: number | { id: number } } | [complaint_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/complaint-source-type/{complaint_source_type}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ComplaintSourceTypeController::destroy
 * @see app/Http/Controllers/ComplaintSourceTypeController.php:62
 * @route '/complaint-source-type/{complaint_source_type}'
 */
destroy.url = (args: { complaint_source_type: number | { id: number } } | [complaint_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { complaint_source_type: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { complaint_source_type: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    complaint_source_type: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        complaint_source_type: typeof args.complaint_source_type === 'object'
                ? args.complaint_source_type.id
                : args.complaint_source_type,
                }

    return destroy.definition.url
            .replace('{complaint_source_type}', parsedArgs.complaint_source_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ComplaintSourceTypeController::destroy
 * @see app/Http/Controllers/ComplaintSourceTypeController.php:62
 * @route '/complaint-source-type/{complaint_source_type}'
 */
destroy.delete = (args: { complaint_source_type: number | { id: number } } | [complaint_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\ComplaintSourceTypeController::destroy
 * @see app/Http/Controllers/ComplaintSourceTypeController.php:62
 * @route '/complaint-source-type/{complaint_source_type}'
 */
    const destroyForm = (args: { complaint_source_type: number | { id: number } } | [complaint_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ComplaintSourceTypeController::destroy
 * @see app/Http/Controllers/ComplaintSourceTypeController.php:62
 * @route '/complaint-source-type/{complaint_source_type}'
 */
        destroyForm.delete = (args: { complaint_source_type: number | { id: number } } | [complaint_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const ComplaintSourceTypeController = { index, create, store, show, edit, update, destroy }

export default ComplaintSourceTypeController