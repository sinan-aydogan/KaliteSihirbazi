import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\AuditController::search
 * @see app/Http/Controllers/AuditController.php:27
 * @route '/audit/search'
 */
export const search = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: search.url(options),
    method: 'post',
})

search.definition = {
    methods: ["post"],
    url: '/audit/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AuditController::search
 * @see app/Http/Controllers/AuditController.php:27
 * @route '/audit/search'
 */
search.url = (options?: RouteQueryOptions) => {
    return search.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditController::search
 * @see app/Http/Controllers/AuditController.php:27
 * @route '/audit/search'
 */
search.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: search.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\AuditController::search
 * @see app/Http/Controllers/AuditController.php:27
 * @route '/audit/search'
 */
    const searchForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: search.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AuditController::search
 * @see app/Http/Controllers/AuditController.php:27
 * @route '/audit/search'
 */
        searchForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: search.url(options),
            method: 'post',
        })
    
    search.form = searchForm
/**
* @see \App\Http\Controllers\AuditController::index
 * @see app/Http/Controllers/AuditController.php:27
 * @route '/audit'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/audit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AuditController::index
 * @see app/Http/Controllers/AuditController.php:27
 * @route '/audit'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditController::index
 * @see app/Http/Controllers/AuditController.php:27
 * @route '/audit'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AuditController::index
 * @see app/Http/Controllers/AuditController.php:27
 * @route '/audit'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AuditController::index
 * @see app/Http/Controllers/AuditController.php:27
 * @route '/audit'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AuditController::index
 * @see app/Http/Controllers/AuditController.php:27
 * @route '/audit'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AuditController::index
 * @see app/Http/Controllers/AuditController.php:27
 * @route '/audit'
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
* @see \App\Http\Controllers\AuditController::create
 * @see app/Http/Controllers/AuditController.php:48
 * @route '/audit/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/audit/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AuditController::create
 * @see app/Http/Controllers/AuditController.php:48
 * @route '/audit/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditController::create
 * @see app/Http/Controllers/AuditController.php:48
 * @route '/audit/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AuditController::create
 * @see app/Http/Controllers/AuditController.php:48
 * @route '/audit/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AuditController::create
 * @see app/Http/Controllers/AuditController.php:48
 * @route '/audit/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AuditController::create
 * @see app/Http/Controllers/AuditController.php:48
 * @route '/audit/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AuditController::create
 * @see app/Http/Controllers/AuditController.php:48
 * @route '/audit/create'
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
* @see \App\Http\Controllers\AuditController::store
 * @see app/Http/Controllers/AuditController.php:53
 * @route '/audit'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/audit',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AuditController::store
 * @see app/Http/Controllers/AuditController.php:53
 * @route '/audit'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditController::store
 * @see app/Http/Controllers/AuditController.php:53
 * @route '/audit'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\AuditController::store
 * @see app/Http/Controllers/AuditController.php:53
 * @route '/audit'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AuditController::store
 * @see app/Http/Controllers/AuditController.php:53
 * @route '/audit'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\AuditController::show
 * @see app/Http/Controllers/AuditController.php:73
 * @route '/audit/{audit}'
 */
export const show = (args: { audit: number | { id: number } } | [audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/audit/{audit}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AuditController::show
 * @see app/Http/Controllers/AuditController.php:73
 * @route '/audit/{audit}'
 */
show.url = (args: { audit: number | { id: number } } | [audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { audit: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { audit: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    audit: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        audit: typeof args.audit === 'object'
                ? args.audit.id
                : args.audit,
                }

    return show.definition.url
            .replace('{audit}', parsedArgs.audit.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditController::show
 * @see app/Http/Controllers/AuditController.php:73
 * @route '/audit/{audit}'
 */
show.get = (args: { audit: number | { id: number } } | [audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AuditController::show
 * @see app/Http/Controllers/AuditController.php:73
 * @route '/audit/{audit}'
 */
show.head = (args: { audit: number | { id: number } } | [audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AuditController::show
 * @see app/Http/Controllers/AuditController.php:73
 * @route '/audit/{audit}'
 */
    const showForm = (args: { audit: number | { id: number } } | [audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AuditController::show
 * @see app/Http/Controllers/AuditController.php:73
 * @route '/audit/{audit}'
 */
        showForm.get = (args: { audit: number | { id: number } } | [audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AuditController::show
 * @see app/Http/Controllers/AuditController.php:73
 * @route '/audit/{audit}'
 */
        showForm.head = (args: { audit: number | { id: number } } | [audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\AuditController::edit
 * @see app/Http/Controllers/AuditController.php:105
 * @route '/audit/{audit}/edit'
 */
export const edit = (args: { audit: number | { id: number } } | [audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/audit/{audit}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AuditController::edit
 * @see app/Http/Controllers/AuditController.php:105
 * @route '/audit/{audit}/edit'
 */
edit.url = (args: { audit: number | { id: number } } | [audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { audit: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { audit: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    audit: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        audit: typeof args.audit === 'object'
                ? args.audit.id
                : args.audit,
                }

    return edit.definition.url
            .replace('{audit}', parsedArgs.audit.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditController::edit
 * @see app/Http/Controllers/AuditController.php:105
 * @route '/audit/{audit}/edit'
 */
edit.get = (args: { audit: number | { id: number } } | [audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AuditController::edit
 * @see app/Http/Controllers/AuditController.php:105
 * @route '/audit/{audit}/edit'
 */
edit.head = (args: { audit: number | { id: number } } | [audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AuditController::edit
 * @see app/Http/Controllers/AuditController.php:105
 * @route '/audit/{audit}/edit'
 */
    const editForm = (args: { audit: number | { id: number } } | [audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AuditController::edit
 * @see app/Http/Controllers/AuditController.php:105
 * @route '/audit/{audit}/edit'
 */
        editForm.get = (args: { audit: number | { id: number } } | [audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AuditController::edit
 * @see app/Http/Controllers/AuditController.php:105
 * @route '/audit/{audit}/edit'
 */
        editForm.head = (args: { audit: number | { id: number } } | [audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\AuditController::update
 * @see app/Http/Controllers/AuditController.php:110
 * @route '/audit/{audit}'
 */
export const update = (args: { audit: number | { id: number } } | [audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/audit/{audit}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\AuditController::update
 * @see app/Http/Controllers/AuditController.php:110
 * @route '/audit/{audit}'
 */
update.url = (args: { audit: number | { id: number } } | [audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { audit: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { audit: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    audit: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        audit: typeof args.audit === 'object'
                ? args.audit.id
                : args.audit,
                }

    return update.definition.url
            .replace('{audit}', parsedArgs.audit.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditController::update
 * @see app/Http/Controllers/AuditController.php:110
 * @route '/audit/{audit}'
 */
update.put = (args: { audit: number | { id: number } } | [audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\AuditController::update
 * @see app/Http/Controllers/AuditController.php:110
 * @route '/audit/{audit}'
 */
update.patch = (args: { audit: number | { id: number } } | [audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\AuditController::update
 * @see app/Http/Controllers/AuditController.php:110
 * @route '/audit/{audit}'
 */
    const updateForm = (args: { audit: number | { id: number } } | [audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AuditController::update
 * @see app/Http/Controllers/AuditController.php:110
 * @route '/audit/{audit}'
 */
        updateForm.put = (args: { audit: number | { id: number } } | [audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\AuditController::update
 * @see app/Http/Controllers/AuditController.php:110
 * @route '/audit/{audit}'
 */
        updateForm.patch = (args: { audit: number | { id: number } } | [audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\AuditController::destroy
 * @see app/Http/Controllers/AuditController.php:119
 * @route '/audit/{audit}'
 */
export const destroy = (args: { audit: number | { id: number } } | [audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/audit/{audit}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\AuditController::destroy
 * @see app/Http/Controllers/AuditController.php:119
 * @route '/audit/{audit}'
 */
destroy.url = (args: { audit: number | { id: number } } | [audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { audit: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { audit: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    audit: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        audit: typeof args.audit === 'object'
                ? args.audit.id
                : args.audit,
                }

    return destroy.definition.url
            .replace('{audit}', parsedArgs.audit.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditController::destroy
 * @see app/Http/Controllers/AuditController.php:119
 * @route '/audit/{audit}'
 */
destroy.delete = (args: { audit: number | { id: number } } | [audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\AuditController::destroy
 * @see app/Http/Controllers/AuditController.php:119
 * @route '/audit/{audit}'
 */
    const destroyForm = (args: { audit: number | { id: number } } | [audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AuditController::destroy
 * @see app/Http/Controllers/AuditController.php:119
 * @route '/audit/{audit}'
 */
        destroyForm.delete = (args: { audit: number | { id: number } } | [audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\AuditWorkflowController::start
 * @see app/Http/Controllers/AuditWorkflowController.php:16
 * @route '/audit/{audit}/start'
 */
export const start = (args: { audit: number | { id: number } } | [audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: start.url(args, options),
    method: 'post',
})

start.definition = {
    methods: ["post"],
    url: '/audit/{audit}/start',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AuditWorkflowController::start
 * @see app/Http/Controllers/AuditWorkflowController.php:16
 * @route '/audit/{audit}/start'
 */
start.url = (args: { audit: number | { id: number } } | [audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { audit: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { audit: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    audit: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        audit: typeof args.audit === 'object'
                ? args.audit.id
                : args.audit,
                }

    return start.definition.url
            .replace('{audit}', parsedArgs.audit.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditWorkflowController::start
 * @see app/Http/Controllers/AuditWorkflowController.php:16
 * @route '/audit/{audit}/start'
 */
start.post = (args: { audit: number | { id: number } } | [audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: start.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\AuditWorkflowController::start
 * @see app/Http/Controllers/AuditWorkflowController.php:16
 * @route '/audit/{audit}/start'
 */
    const startForm = (args: { audit: number | { id: number } } | [audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: start.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AuditWorkflowController::start
 * @see app/Http/Controllers/AuditWorkflowController.php:16
 * @route '/audit/{audit}/start'
 */
        startForm.post = (args: { audit: number | { id: number } } | [audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: start.url(args, options),
            method: 'post',
        })
    
    start.form = startForm
/**
* @see \App\Http\Controllers\AuditWorkflowController::complete
 * @see app/Http/Controllers/AuditWorkflowController.php:24
 * @route '/audit/{audit}/complete'
 */
export const complete = (args: { audit: number | { id: number } } | [audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: complete.url(args, options),
    method: 'post',
})

complete.definition = {
    methods: ["post"],
    url: '/audit/{audit}/complete',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AuditWorkflowController::complete
 * @see app/Http/Controllers/AuditWorkflowController.php:24
 * @route '/audit/{audit}/complete'
 */
complete.url = (args: { audit: number | { id: number } } | [audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { audit: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { audit: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    audit: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        audit: typeof args.audit === 'object'
                ? args.audit.id
                : args.audit,
                }

    return complete.definition.url
            .replace('{audit}', parsedArgs.audit.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditWorkflowController::complete
 * @see app/Http/Controllers/AuditWorkflowController.php:24
 * @route '/audit/{audit}/complete'
 */
complete.post = (args: { audit: number | { id: number } } | [audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: complete.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\AuditWorkflowController::complete
 * @see app/Http/Controllers/AuditWorkflowController.php:24
 * @route '/audit/{audit}/complete'
 */
    const completeForm = (args: { audit: number | { id: number } } | [audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: complete.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AuditWorkflowController::complete
 * @see app/Http/Controllers/AuditWorkflowController.php:24
 * @route '/audit/{audit}/complete'
 */
        completeForm.post = (args: { audit: number | { id: number } } | [audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: complete.url(args, options),
            method: 'post',
        })
    
    complete.form = completeForm
/**
* @see \App\Http\Controllers\AuditWorkflowController::cancel
 * @see app/Http/Controllers/AuditWorkflowController.php:32
 * @route '/audit/{audit}/cancel'
 */
export const cancel = (args: { audit: number | { id: number } } | [audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: cancel.url(args, options),
    method: 'post',
})

cancel.definition = {
    methods: ["post"],
    url: '/audit/{audit}/cancel',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AuditWorkflowController::cancel
 * @see app/Http/Controllers/AuditWorkflowController.php:32
 * @route '/audit/{audit}/cancel'
 */
cancel.url = (args: { audit: number | { id: number } } | [audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { audit: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { audit: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    audit: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        audit: typeof args.audit === 'object'
                ? args.audit.id
                : args.audit,
                }

    return cancel.definition.url
            .replace('{audit}', parsedArgs.audit.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditWorkflowController::cancel
 * @see app/Http/Controllers/AuditWorkflowController.php:32
 * @route '/audit/{audit}/cancel'
 */
cancel.post = (args: { audit: number | { id: number } } | [audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: cancel.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\AuditWorkflowController::cancel
 * @see app/Http/Controllers/AuditWorkflowController.php:32
 * @route '/audit/{audit}/cancel'
 */
    const cancelForm = (args: { audit: number | { id: number } } | [audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: cancel.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AuditWorkflowController::cancel
 * @see app/Http/Controllers/AuditWorkflowController.php:32
 * @route '/audit/{audit}/cancel'
 */
        cancelForm.post = (args: { audit: number | { id: number } } | [audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: cancel.url(args, options),
            method: 'post',
        })
    
    cancel.form = cancelForm
const audit = {
    search: Object.assign(search, search),
index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
start: Object.assign(start, start),
complete: Object.assign(complete, complete),
cancel: Object.assign(cancel, cancel),
}

export default audit