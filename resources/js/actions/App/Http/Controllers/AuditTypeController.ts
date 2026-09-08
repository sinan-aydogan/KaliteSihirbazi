import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\AuditTypeController::index
 * @see app/Http/Controllers/AuditTypeController.php:13
 * @route '/audit-type/search'
 */
const indexb90c3ef16996c568d8a434942a8755c6 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: indexb90c3ef16996c568d8a434942a8755c6.url(options),
    method: 'post',
})

indexb90c3ef16996c568d8a434942a8755c6.definition = {
    methods: ["post"],
    url: '/audit-type/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AuditTypeController::index
 * @see app/Http/Controllers/AuditTypeController.php:13
 * @route '/audit-type/search'
 */
indexb90c3ef16996c568d8a434942a8755c6.url = (options?: RouteQueryOptions) => {
    return indexb90c3ef16996c568d8a434942a8755c6.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditTypeController::index
 * @see app/Http/Controllers/AuditTypeController.php:13
 * @route '/audit-type/search'
 */
indexb90c3ef16996c568d8a434942a8755c6.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: indexb90c3ef16996c568d8a434942a8755c6.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\AuditTypeController::index
 * @see app/Http/Controllers/AuditTypeController.php:13
 * @route '/audit-type/search'
 */
    const indexb90c3ef16996c568d8a434942a8755c6Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: indexb90c3ef16996c568d8a434942a8755c6.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AuditTypeController::index
 * @see app/Http/Controllers/AuditTypeController.php:13
 * @route '/audit-type/search'
 */
        indexb90c3ef16996c568d8a434942a8755c6Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: indexb90c3ef16996c568d8a434942a8755c6.url(options),
            method: 'post',
        })
    
    indexb90c3ef16996c568d8a434942a8755c6.form = indexb90c3ef16996c568d8a434942a8755c6Form
    /**
* @see \App\Http\Controllers\AuditTypeController::index
 * @see app/Http/Controllers/AuditTypeController.php:13
 * @route '/audit-type'
 */
const indexd1e56cdb7700c6e47dd1e4c6f97ec9b9 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexd1e56cdb7700c6e47dd1e4c6f97ec9b9.url(options),
    method: 'get',
})

indexd1e56cdb7700c6e47dd1e4c6f97ec9b9.definition = {
    methods: ["get","head"],
    url: '/audit-type',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AuditTypeController::index
 * @see app/Http/Controllers/AuditTypeController.php:13
 * @route '/audit-type'
 */
indexd1e56cdb7700c6e47dd1e4c6f97ec9b9.url = (options?: RouteQueryOptions) => {
    return indexd1e56cdb7700c6e47dd1e4c6f97ec9b9.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditTypeController::index
 * @see app/Http/Controllers/AuditTypeController.php:13
 * @route '/audit-type'
 */
indexd1e56cdb7700c6e47dd1e4c6f97ec9b9.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexd1e56cdb7700c6e47dd1e4c6f97ec9b9.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AuditTypeController::index
 * @see app/Http/Controllers/AuditTypeController.php:13
 * @route '/audit-type'
 */
indexd1e56cdb7700c6e47dd1e4c6f97ec9b9.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexd1e56cdb7700c6e47dd1e4c6f97ec9b9.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AuditTypeController::index
 * @see app/Http/Controllers/AuditTypeController.php:13
 * @route '/audit-type'
 */
    const indexd1e56cdb7700c6e47dd1e4c6f97ec9b9Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: indexd1e56cdb7700c6e47dd1e4c6f97ec9b9.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AuditTypeController::index
 * @see app/Http/Controllers/AuditTypeController.php:13
 * @route '/audit-type'
 */
        indexd1e56cdb7700c6e47dd1e4c6f97ec9b9Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexd1e56cdb7700c6e47dd1e4c6f97ec9b9.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AuditTypeController::index
 * @see app/Http/Controllers/AuditTypeController.php:13
 * @route '/audit-type'
 */
        indexd1e56cdb7700c6e47dd1e4c6f97ec9b9Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexd1e56cdb7700c6e47dd1e4c6f97ec9b9.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    indexd1e56cdb7700c6e47dd1e4c6f97ec9b9.form = indexd1e56cdb7700c6e47dd1e4c6f97ec9b9Form

/**
* Multiple routes resolve to \App\Http\Controllers\AuditTypeController::index, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `index['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const index = {
    '/audit-type/search': indexb90c3ef16996c568d8a434942a8755c6,
    '/audit-type': indexd1e56cdb7700c6e47dd1e4c6f97ec9b9,
}

/**
* @see \App\Http\Controllers\AuditTypeController::create
 * @see app/Http/Controllers/AuditTypeController.php:25
 * @route '/audit-type/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/audit-type/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AuditTypeController::create
 * @see app/Http/Controllers/AuditTypeController.php:25
 * @route '/audit-type/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditTypeController::create
 * @see app/Http/Controllers/AuditTypeController.php:25
 * @route '/audit-type/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AuditTypeController::create
 * @see app/Http/Controllers/AuditTypeController.php:25
 * @route '/audit-type/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AuditTypeController::create
 * @see app/Http/Controllers/AuditTypeController.php:25
 * @route '/audit-type/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AuditTypeController::create
 * @see app/Http/Controllers/AuditTypeController.php:25
 * @route '/audit-type/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AuditTypeController::create
 * @see app/Http/Controllers/AuditTypeController.php:25
 * @route '/audit-type/create'
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
* @see \App\Http\Controllers\AuditTypeController::store
 * @see app/Http/Controllers/AuditTypeController.php:30
 * @route '/audit-type'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/audit-type',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AuditTypeController::store
 * @see app/Http/Controllers/AuditTypeController.php:30
 * @route '/audit-type'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditTypeController::store
 * @see app/Http/Controllers/AuditTypeController.php:30
 * @route '/audit-type'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\AuditTypeController::store
 * @see app/Http/Controllers/AuditTypeController.php:30
 * @route '/audit-type'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AuditTypeController::store
 * @see app/Http/Controllers/AuditTypeController.php:30
 * @route '/audit-type'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\AuditTypeController::show
 * @see app/Http/Controllers/AuditTypeController.php:43
 * @route '/audit-type/{audit_type}'
 */
export const show = (args: { audit_type: number | { id: number } } | [audit_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/audit-type/{audit_type}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AuditTypeController::show
 * @see app/Http/Controllers/AuditTypeController.php:43
 * @route '/audit-type/{audit_type}'
 */
show.url = (args: { audit_type: number | { id: number } } | [audit_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { audit_type: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { audit_type: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    audit_type: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        audit_type: typeof args.audit_type === 'object'
                ? args.audit_type.id
                : args.audit_type,
                }

    return show.definition.url
            .replace('{audit_type}', parsedArgs.audit_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditTypeController::show
 * @see app/Http/Controllers/AuditTypeController.php:43
 * @route '/audit-type/{audit_type}'
 */
show.get = (args: { audit_type: number | { id: number } } | [audit_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AuditTypeController::show
 * @see app/Http/Controllers/AuditTypeController.php:43
 * @route '/audit-type/{audit_type}'
 */
show.head = (args: { audit_type: number | { id: number } } | [audit_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AuditTypeController::show
 * @see app/Http/Controllers/AuditTypeController.php:43
 * @route '/audit-type/{audit_type}'
 */
    const showForm = (args: { audit_type: number | { id: number } } | [audit_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AuditTypeController::show
 * @see app/Http/Controllers/AuditTypeController.php:43
 * @route '/audit-type/{audit_type}'
 */
        showForm.get = (args: { audit_type: number | { id: number } } | [audit_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AuditTypeController::show
 * @see app/Http/Controllers/AuditTypeController.php:43
 * @route '/audit-type/{audit_type}'
 */
        showForm.head = (args: { audit_type: number | { id: number } } | [audit_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\AuditTypeController::edit
 * @see app/Http/Controllers/AuditTypeController.php:48
 * @route '/audit-type/{audit_type}/edit'
 */
export const edit = (args: { audit_type: number | { id: number } } | [audit_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/audit-type/{audit_type}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AuditTypeController::edit
 * @see app/Http/Controllers/AuditTypeController.php:48
 * @route '/audit-type/{audit_type}/edit'
 */
edit.url = (args: { audit_type: number | { id: number } } | [audit_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { audit_type: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { audit_type: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    audit_type: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        audit_type: typeof args.audit_type === 'object'
                ? args.audit_type.id
                : args.audit_type,
                }

    return edit.definition.url
            .replace('{audit_type}', parsedArgs.audit_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditTypeController::edit
 * @see app/Http/Controllers/AuditTypeController.php:48
 * @route '/audit-type/{audit_type}/edit'
 */
edit.get = (args: { audit_type: number | { id: number } } | [audit_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AuditTypeController::edit
 * @see app/Http/Controllers/AuditTypeController.php:48
 * @route '/audit-type/{audit_type}/edit'
 */
edit.head = (args: { audit_type: number | { id: number } } | [audit_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AuditTypeController::edit
 * @see app/Http/Controllers/AuditTypeController.php:48
 * @route '/audit-type/{audit_type}/edit'
 */
    const editForm = (args: { audit_type: number | { id: number } } | [audit_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AuditTypeController::edit
 * @see app/Http/Controllers/AuditTypeController.php:48
 * @route '/audit-type/{audit_type}/edit'
 */
        editForm.get = (args: { audit_type: number | { id: number } } | [audit_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AuditTypeController::edit
 * @see app/Http/Controllers/AuditTypeController.php:48
 * @route '/audit-type/{audit_type}/edit'
 */
        editForm.head = (args: { audit_type: number | { id: number } } | [audit_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\AuditTypeController::update
 * @see app/Http/Controllers/AuditTypeController.php:53
 * @route '/audit-type/{audit_type}'
 */
export const update = (args: { audit_type: number | { id: number } } | [audit_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/audit-type/{audit_type}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\AuditTypeController::update
 * @see app/Http/Controllers/AuditTypeController.php:53
 * @route '/audit-type/{audit_type}'
 */
update.url = (args: { audit_type: number | { id: number } } | [audit_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { audit_type: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { audit_type: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    audit_type: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        audit_type: typeof args.audit_type === 'object'
                ? args.audit_type.id
                : args.audit_type,
                }

    return update.definition.url
            .replace('{audit_type}', parsedArgs.audit_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditTypeController::update
 * @see app/Http/Controllers/AuditTypeController.php:53
 * @route '/audit-type/{audit_type}'
 */
update.put = (args: { audit_type: number | { id: number } } | [audit_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\AuditTypeController::update
 * @see app/Http/Controllers/AuditTypeController.php:53
 * @route '/audit-type/{audit_type}'
 */
update.patch = (args: { audit_type: number | { id: number } } | [audit_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\AuditTypeController::update
 * @see app/Http/Controllers/AuditTypeController.php:53
 * @route '/audit-type/{audit_type}'
 */
    const updateForm = (args: { audit_type: number | { id: number } } | [audit_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AuditTypeController::update
 * @see app/Http/Controllers/AuditTypeController.php:53
 * @route '/audit-type/{audit_type}'
 */
        updateForm.put = (args: { audit_type: number | { id: number } } | [audit_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\AuditTypeController::update
 * @see app/Http/Controllers/AuditTypeController.php:53
 * @route '/audit-type/{audit_type}'
 */
        updateForm.patch = (args: { audit_type: number | { id: number } } | [audit_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\AuditTypeController::destroy
 * @see app/Http/Controllers/AuditTypeController.php:67
 * @route '/audit-type/{audit_type}'
 */
export const destroy = (args: { audit_type: number | { id: number } } | [audit_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/audit-type/{audit_type}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\AuditTypeController::destroy
 * @see app/Http/Controllers/AuditTypeController.php:67
 * @route '/audit-type/{audit_type}'
 */
destroy.url = (args: { audit_type: number | { id: number } } | [audit_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { audit_type: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { audit_type: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    audit_type: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        audit_type: typeof args.audit_type === 'object'
                ? args.audit_type.id
                : args.audit_type,
                }

    return destroy.definition.url
            .replace('{audit_type}', parsedArgs.audit_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditTypeController::destroy
 * @see app/Http/Controllers/AuditTypeController.php:67
 * @route '/audit-type/{audit_type}'
 */
destroy.delete = (args: { audit_type: number | { id: number } } | [audit_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\AuditTypeController::destroy
 * @see app/Http/Controllers/AuditTypeController.php:67
 * @route '/audit-type/{audit_type}'
 */
    const destroyForm = (args: { audit_type: number | { id: number } } | [audit_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AuditTypeController::destroy
 * @see app/Http/Controllers/AuditTypeController.php:67
 * @route '/audit-type/{audit_type}'
 */
        destroyForm.delete = (args: { audit_type: number | { id: number } } | [audit_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const AuditTypeController = { index, create, store, show, edit, update, destroy }

export default AuditTypeController