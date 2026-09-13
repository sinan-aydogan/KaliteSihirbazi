import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\ContinuousImprovement\FiveSAuditController::index
 * @see app/Http/Controllers/ContinuousImprovement/FiveSAuditController.php:20
 * @route '/five-s-audit/search'
 */
const index408fce0a71cbc3898c09c19752b7d165 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: index408fce0a71cbc3898c09c19752b7d165.url(options),
    method: 'post',
})

index408fce0a71cbc3898c09c19752b7d165.definition = {
    methods: ["post"],
    url: '/five-s-audit/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ContinuousImprovement\FiveSAuditController::index
 * @see app/Http/Controllers/ContinuousImprovement/FiveSAuditController.php:20
 * @route '/five-s-audit/search'
 */
index408fce0a71cbc3898c09c19752b7d165.url = (options?: RouteQueryOptions) => {
    return index408fce0a71cbc3898c09c19752b7d165.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContinuousImprovement\FiveSAuditController::index
 * @see app/Http/Controllers/ContinuousImprovement/FiveSAuditController.php:20
 * @route '/five-s-audit/search'
 */
index408fce0a71cbc3898c09c19752b7d165.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: index408fce0a71cbc3898c09c19752b7d165.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ContinuousImprovement\FiveSAuditController::index
 * @see app/Http/Controllers/ContinuousImprovement/FiveSAuditController.php:20
 * @route '/five-s-audit/search'
 */
    const index408fce0a71cbc3898c09c19752b7d165Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: index408fce0a71cbc3898c09c19752b7d165.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ContinuousImprovement\FiveSAuditController::index
 * @see app/Http/Controllers/ContinuousImprovement/FiveSAuditController.php:20
 * @route '/five-s-audit/search'
 */
        index408fce0a71cbc3898c09c19752b7d165Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: index408fce0a71cbc3898c09c19752b7d165.url(options),
            method: 'post',
        })
    
    index408fce0a71cbc3898c09c19752b7d165.form = index408fce0a71cbc3898c09c19752b7d165Form
    /**
* @see \App\Http\Controllers\ContinuousImprovement\FiveSAuditController::index
 * @see app/Http/Controllers/ContinuousImprovement/FiveSAuditController.php:20
 * @route '/five-s-audit'
 */
const indexc32632c4fabe4ce812ffda75d69a8240 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexc32632c4fabe4ce812ffda75d69a8240.url(options),
    method: 'get',
})

indexc32632c4fabe4ce812ffda75d69a8240.definition = {
    methods: ["get","head"],
    url: '/five-s-audit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ContinuousImprovement\FiveSAuditController::index
 * @see app/Http/Controllers/ContinuousImprovement/FiveSAuditController.php:20
 * @route '/five-s-audit'
 */
indexc32632c4fabe4ce812ffda75d69a8240.url = (options?: RouteQueryOptions) => {
    return indexc32632c4fabe4ce812ffda75d69a8240.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContinuousImprovement\FiveSAuditController::index
 * @see app/Http/Controllers/ContinuousImprovement/FiveSAuditController.php:20
 * @route '/five-s-audit'
 */
indexc32632c4fabe4ce812ffda75d69a8240.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexc32632c4fabe4ce812ffda75d69a8240.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ContinuousImprovement\FiveSAuditController::index
 * @see app/Http/Controllers/ContinuousImprovement/FiveSAuditController.php:20
 * @route '/five-s-audit'
 */
indexc32632c4fabe4ce812ffda75d69a8240.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexc32632c4fabe4ce812ffda75d69a8240.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ContinuousImprovement\FiveSAuditController::index
 * @see app/Http/Controllers/ContinuousImprovement/FiveSAuditController.php:20
 * @route '/five-s-audit'
 */
    const indexc32632c4fabe4ce812ffda75d69a8240Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: indexc32632c4fabe4ce812ffda75d69a8240.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ContinuousImprovement\FiveSAuditController::index
 * @see app/Http/Controllers/ContinuousImprovement/FiveSAuditController.php:20
 * @route '/five-s-audit'
 */
        indexc32632c4fabe4ce812ffda75d69a8240Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexc32632c4fabe4ce812ffda75d69a8240.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ContinuousImprovement\FiveSAuditController::index
 * @see app/Http/Controllers/ContinuousImprovement/FiveSAuditController.php:20
 * @route '/five-s-audit'
 */
        indexc32632c4fabe4ce812ffda75d69a8240Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexc32632c4fabe4ce812ffda75d69a8240.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    indexc32632c4fabe4ce812ffda75d69a8240.form = indexc32632c4fabe4ce812ffda75d69a8240Form

/**
* Multiple routes resolve to \App\Http\Controllers\ContinuousImprovement\FiveSAuditController::index, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `index['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const index = {
    '/five-s-audit/search': index408fce0a71cbc3898c09c19752b7d165,
    '/five-s-audit': indexc32632c4fabe4ce812ffda75d69a8240,
}

/**
* @see \App\Http\Controllers\ContinuousImprovement\FiveSAuditController::create
 * @see app/Http/Controllers/ContinuousImprovement/FiveSAuditController.php:34
 * @route '/five-s-audit/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/five-s-audit/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ContinuousImprovement\FiveSAuditController::create
 * @see app/Http/Controllers/ContinuousImprovement/FiveSAuditController.php:34
 * @route '/five-s-audit/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContinuousImprovement\FiveSAuditController::create
 * @see app/Http/Controllers/ContinuousImprovement/FiveSAuditController.php:34
 * @route '/five-s-audit/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ContinuousImprovement\FiveSAuditController::create
 * @see app/Http/Controllers/ContinuousImprovement/FiveSAuditController.php:34
 * @route '/five-s-audit/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ContinuousImprovement\FiveSAuditController::create
 * @see app/Http/Controllers/ContinuousImprovement/FiveSAuditController.php:34
 * @route '/five-s-audit/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ContinuousImprovement\FiveSAuditController::create
 * @see app/Http/Controllers/ContinuousImprovement/FiveSAuditController.php:34
 * @route '/five-s-audit/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ContinuousImprovement\FiveSAuditController::create
 * @see app/Http/Controllers/ContinuousImprovement/FiveSAuditController.php:34
 * @route '/five-s-audit/create'
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
* @see \App\Http\Controllers\ContinuousImprovement\FiveSAuditController::store
 * @see app/Http/Controllers/ContinuousImprovement/FiveSAuditController.php:39
 * @route '/five-s-audit'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/five-s-audit',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ContinuousImprovement\FiveSAuditController::store
 * @see app/Http/Controllers/ContinuousImprovement/FiveSAuditController.php:39
 * @route '/five-s-audit'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContinuousImprovement\FiveSAuditController::store
 * @see app/Http/Controllers/ContinuousImprovement/FiveSAuditController.php:39
 * @route '/five-s-audit'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ContinuousImprovement\FiveSAuditController::store
 * @see app/Http/Controllers/ContinuousImprovement/FiveSAuditController.php:39
 * @route '/five-s-audit'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ContinuousImprovement\FiveSAuditController::store
 * @see app/Http/Controllers/ContinuousImprovement/FiveSAuditController.php:39
 * @route '/five-s-audit'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\ContinuousImprovement\FiveSAuditController::show
 * @see app/Http/Controllers/ContinuousImprovement/FiveSAuditController.php:48
 * @route '/five-s-audit/{five_s_audit}'
 */
export const show = (args: { five_s_audit: number | { id: number } } | [five_s_audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/five-s-audit/{five_s_audit}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ContinuousImprovement\FiveSAuditController::show
 * @see app/Http/Controllers/ContinuousImprovement/FiveSAuditController.php:48
 * @route '/five-s-audit/{five_s_audit}'
 */
show.url = (args: { five_s_audit: number | { id: number } } | [five_s_audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { five_s_audit: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { five_s_audit: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    five_s_audit: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        five_s_audit: typeof args.five_s_audit === 'object'
                ? args.five_s_audit.id
                : args.five_s_audit,
                }

    return show.definition.url
            .replace('{five_s_audit}', parsedArgs.five_s_audit.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContinuousImprovement\FiveSAuditController::show
 * @see app/Http/Controllers/ContinuousImprovement/FiveSAuditController.php:48
 * @route '/five-s-audit/{five_s_audit}'
 */
show.get = (args: { five_s_audit: number | { id: number } } | [five_s_audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ContinuousImprovement\FiveSAuditController::show
 * @see app/Http/Controllers/ContinuousImprovement/FiveSAuditController.php:48
 * @route '/five-s-audit/{five_s_audit}'
 */
show.head = (args: { five_s_audit: number | { id: number } } | [five_s_audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ContinuousImprovement\FiveSAuditController::show
 * @see app/Http/Controllers/ContinuousImprovement/FiveSAuditController.php:48
 * @route '/five-s-audit/{five_s_audit}'
 */
    const showForm = (args: { five_s_audit: number | { id: number } } | [five_s_audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ContinuousImprovement\FiveSAuditController::show
 * @see app/Http/Controllers/ContinuousImprovement/FiveSAuditController.php:48
 * @route '/five-s-audit/{five_s_audit}'
 */
        showForm.get = (args: { five_s_audit: number | { id: number } } | [five_s_audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ContinuousImprovement\FiveSAuditController::show
 * @see app/Http/Controllers/ContinuousImprovement/FiveSAuditController.php:48
 * @route '/five-s-audit/{five_s_audit}'
 */
        showForm.head = (args: { five_s_audit: number | { id: number } } | [five_s_audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\ContinuousImprovement\FiveSAuditController::edit
 * @see app/Http/Controllers/ContinuousImprovement/FiveSAuditController.php:58
 * @route '/five-s-audit/{five_s_audit}/edit'
 */
export const edit = (args: { five_s_audit: number | { id: number } } | [five_s_audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/five-s-audit/{five_s_audit}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ContinuousImprovement\FiveSAuditController::edit
 * @see app/Http/Controllers/ContinuousImprovement/FiveSAuditController.php:58
 * @route '/five-s-audit/{five_s_audit}/edit'
 */
edit.url = (args: { five_s_audit: number | { id: number } } | [five_s_audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { five_s_audit: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { five_s_audit: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    five_s_audit: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        five_s_audit: typeof args.five_s_audit === 'object'
                ? args.five_s_audit.id
                : args.five_s_audit,
                }

    return edit.definition.url
            .replace('{five_s_audit}', parsedArgs.five_s_audit.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContinuousImprovement\FiveSAuditController::edit
 * @see app/Http/Controllers/ContinuousImprovement/FiveSAuditController.php:58
 * @route '/five-s-audit/{five_s_audit}/edit'
 */
edit.get = (args: { five_s_audit: number | { id: number } } | [five_s_audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ContinuousImprovement\FiveSAuditController::edit
 * @see app/Http/Controllers/ContinuousImprovement/FiveSAuditController.php:58
 * @route '/five-s-audit/{five_s_audit}/edit'
 */
edit.head = (args: { five_s_audit: number | { id: number } } | [five_s_audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ContinuousImprovement\FiveSAuditController::edit
 * @see app/Http/Controllers/ContinuousImprovement/FiveSAuditController.php:58
 * @route '/five-s-audit/{five_s_audit}/edit'
 */
    const editForm = (args: { five_s_audit: number | { id: number } } | [five_s_audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ContinuousImprovement\FiveSAuditController::edit
 * @see app/Http/Controllers/ContinuousImprovement/FiveSAuditController.php:58
 * @route '/five-s-audit/{five_s_audit}/edit'
 */
        editForm.get = (args: { five_s_audit: number | { id: number } } | [five_s_audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ContinuousImprovement\FiveSAuditController::edit
 * @see app/Http/Controllers/ContinuousImprovement/FiveSAuditController.php:58
 * @route '/five-s-audit/{five_s_audit}/edit'
 */
        editForm.head = (args: { five_s_audit: number | { id: number } } | [five_s_audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\ContinuousImprovement\FiveSAuditController::update
 * @see app/Http/Controllers/ContinuousImprovement/FiveSAuditController.php:63
 * @route '/five-s-audit/{five_s_audit}'
 */
export const update = (args: { five_s_audit: number | { id: number } } | [five_s_audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/five-s-audit/{five_s_audit}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\ContinuousImprovement\FiveSAuditController::update
 * @see app/Http/Controllers/ContinuousImprovement/FiveSAuditController.php:63
 * @route '/five-s-audit/{five_s_audit}'
 */
update.url = (args: { five_s_audit: number | { id: number } } | [five_s_audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { five_s_audit: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { five_s_audit: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    five_s_audit: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        five_s_audit: typeof args.five_s_audit === 'object'
                ? args.five_s_audit.id
                : args.five_s_audit,
                }

    return update.definition.url
            .replace('{five_s_audit}', parsedArgs.five_s_audit.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContinuousImprovement\FiveSAuditController::update
 * @see app/Http/Controllers/ContinuousImprovement/FiveSAuditController.php:63
 * @route '/five-s-audit/{five_s_audit}'
 */
update.put = (args: { five_s_audit: number | { id: number } } | [five_s_audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\ContinuousImprovement\FiveSAuditController::update
 * @see app/Http/Controllers/ContinuousImprovement/FiveSAuditController.php:63
 * @route '/five-s-audit/{five_s_audit}'
 */
update.patch = (args: { five_s_audit: number | { id: number } } | [five_s_audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\ContinuousImprovement\FiveSAuditController::update
 * @see app/Http/Controllers/ContinuousImprovement/FiveSAuditController.php:63
 * @route '/five-s-audit/{five_s_audit}'
 */
    const updateForm = (args: { five_s_audit: number | { id: number } } | [five_s_audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ContinuousImprovement\FiveSAuditController::update
 * @see app/Http/Controllers/ContinuousImprovement/FiveSAuditController.php:63
 * @route '/five-s-audit/{five_s_audit}'
 */
        updateForm.put = (args: { five_s_audit: number | { id: number } } | [five_s_audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\ContinuousImprovement\FiveSAuditController::update
 * @see app/Http/Controllers/ContinuousImprovement/FiveSAuditController.php:63
 * @route '/five-s-audit/{five_s_audit}'
 */
        updateForm.patch = (args: { five_s_audit: number | { id: number } } | [five_s_audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\ContinuousImprovement\FiveSAuditController::destroy
 * @see app/Http/Controllers/ContinuousImprovement/FiveSAuditController.php:72
 * @route '/five-s-audit/{five_s_audit}'
 */
export const destroy = (args: { five_s_audit: number | { id: number } } | [five_s_audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/five-s-audit/{five_s_audit}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ContinuousImprovement\FiveSAuditController::destroy
 * @see app/Http/Controllers/ContinuousImprovement/FiveSAuditController.php:72
 * @route '/five-s-audit/{five_s_audit}'
 */
destroy.url = (args: { five_s_audit: number | { id: number } } | [five_s_audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { five_s_audit: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { five_s_audit: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    five_s_audit: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        five_s_audit: typeof args.five_s_audit === 'object'
                ? args.five_s_audit.id
                : args.five_s_audit,
                }

    return destroy.definition.url
            .replace('{five_s_audit}', parsedArgs.five_s_audit.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContinuousImprovement\FiveSAuditController::destroy
 * @see app/Http/Controllers/ContinuousImprovement/FiveSAuditController.php:72
 * @route '/five-s-audit/{five_s_audit}'
 */
destroy.delete = (args: { five_s_audit: number | { id: number } } | [five_s_audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\ContinuousImprovement\FiveSAuditController::destroy
 * @see app/Http/Controllers/ContinuousImprovement/FiveSAuditController.php:72
 * @route '/five-s-audit/{five_s_audit}'
 */
    const destroyForm = (args: { five_s_audit: number | { id: number } } | [five_s_audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ContinuousImprovement\FiveSAuditController::destroy
 * @see app/Http/Controllers/ContinuousImprovement/FiveSAuditController.php:72
 * @route '/five-s-audit/{five_s_audit}'
 */
        destroyForm.delete = (args: { five_s_audit: number | { id: number } } | [five_s_audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const FiveSAuditController = { index, create, store, show, edit, update, destroy }

export default FiveSAuditController