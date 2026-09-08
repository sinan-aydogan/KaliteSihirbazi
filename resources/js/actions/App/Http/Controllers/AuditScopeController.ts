import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\AuditScopeController::index
 * @see app/Http/Controllers/AuditScopeController.php:13
 * @route '/audit-scope/search'
 */
const indexa3e8f33f1a1e423c8272022c93ccf4a5 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: indexa3e8f33f1a1e423c8272022c93ccf4a5.url(options),
    method: 'post',
})

indexa3e8f33f1a1e423c8272022c93ccf4a5.definition = {
    methods: ["post"],
    url: '/audit-scope/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AuditScopeController::index
 * @see app/Http/Controllers/AuditScopeController.php:13
 * @route '/audit-scope/search'
 */
indexa3e8f33f1a1e423c8272022c93ccf4a5.url = (options?: RouteQueryOptions) => {
    return indexa3e8f33f1a1e423c8272022c93ccf4a5.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditScopeController::index
 * @see app/Http/Controllers/AuditScopeController.php:13
 * @route '/audit-scope/search'
 */
indexa3e8f33f1a1e423c8272022c93ccf4a5.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: indexa3e8f33f1a1e423c8272022c93ccf4a5.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\AuditScopeController::index
 * @see app/Http/Controllers/AuditScopeController.php:13
 * @route '/audit-scope/search'
 */
    const indexa3e8f33f1a1e423c8272022c93ccf4a5Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: indexa3e8f33f1a1e423c8272022c93ccf4a5.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AuditScopeController::index
 * @see app/Http/Controllers/AuditScopeController.php:13
 * @route '/audit-scope/search'
 */
        indexa3e8f33f1a1e423c8272022c93ccf4a5Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: indexa3e8f33f1a1e423c8272022c93ccf4a5.url(options),
            method: 'post',
        })
    
    indexa3e8f33f1a1e423c8272022c93ccf4a5.form = indexa3e8f33f1a1e423c8272022c93ccf4a5Form
    /**
* @see \App\Http\Controllers\AuditScopeController::index
 * @see app/Http/Controllers/AuditScopeController.php:13
 * @route '/audit-scope'
 */
const index9e2ac2139e372e89be3ddcfd339191ac = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index9e2ac2139e372e89be3ddcfd339191ac.url(options),
    method: 'get',
})

index9e2ac2139e372e89be3ddcfd339191ac.definition = {
    methods: ["get","head"],
    url: '/audit-scope',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AuditScopeController::index
 * @see app/Http/Controllers/AuditScopeController.php:13
 * @route '/audit-scope'
 */
index9e2ac2139e372e89be3ddcfd339191ac.url = (options?: RouteQueryOptions) => {
    return index9e2ac2139e372e89be3ddcfd339191ac.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditScopeController::index
 * @see app/Http/Controllers/AuditScopeController.php:13
 * @route '/audit-scope'
 */
index9e2ac2139e372e89be3ddcfd339191ac.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index9e2ac2139e372e89be3ddcfd339191ac.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AuditScopeController::index
 * @see app/Http/Controllers/AuditScopeController.php:13
 * @route '/audit-scope'
 */
index9e2ac2139e372e89be3ddcfd339191ac.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index9e2ac2139e372e89be3ddcfd339191ac.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AuditScopeController::index
 * @see app/Http/Controllers/AuditScopeController.php:13
 * @route '/audit-scope'
 */
    const index9e2ac2139e372e89be3ddcfd339191acForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index9e2ac2139e372e89be3ddcfd339191ac.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AuditScopeController::index
 * @see app/Http/Controllers/AuditScopeController.php:13
 * @route '/audit-scope'
 */
        index9e2ac2139e372e89be3ddcfd339191acForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index9e2ac2139e372e89be3ddcfd339191ac.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AuditScopeController::index
 * @see app/Http/Controllers/AuditScopeController.php:13
 * @route '/audit-scope'
 */
        index9e2ac2139e372e89be3ddcfd339191acForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index9e2ac2139e372e89be3ddcfd339191ac.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index9e2ac2139e372e89be3ddcfd339191ac.form = index9e2ac2139e372e89be3ddcfd339191acForm

/**
* Multiple routes resolve to \App\Http\Controllers\AuditScopeController::index, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `index['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const index = {
    '/audit-scope/search': indexa3e8f33f1a1e423c8272022c93ccf4a5,
    '/audit-scope': index9e2ac2139e372e89be3ddcfd339191ac,
}

/**
* @see \App\Http\Controllers\AuditScopeController::create
 * @see app/Http/Controllers/AuditScopeController.php:25
 * @route '/audit-scope/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/audit-scope/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AuditScopeController::create
 * @see app/Http/Controllers/AuditScopeController.php:25
 * @route '/audit-scope/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditScopeController::create
 * @see app/Http/Controllers/AuditScopeController.php:25
 * @route '/audit-scope/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AuditScopeController::create
 * @see app/Http/Controllers/AuditScopeController.php:25
 * @route '/audit-scope/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AuditScopeController::create
 * @see app/Http/Controllers/AuditScopeController.php:25
 * @route '/audit-scope/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AuditScopeController::create
 * @see app/Http/Controllers/AuditScopeController.php:25
 * @route '/audit-scope/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AuditScopeController::create
 * @see app/Http/Controllers/AuditScopeController.php:25
 * @route '/audit-scope/create'
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
* @see \App\Http\Controllers\AuditScopeController::store
 * @see app/Http/Controllers/AuditScopeController.php:30
 * @route '/audit-scope'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/audit-scope',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AuditScopeController::store
 * @see app/Http/Controllers/AuditScopeController.php:30
 * @route '/audit-scope'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditScopeController::store
 * @see app/Http/Controllers/AuditScopeController.php:30
 * @route '/audit-scope'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\AuditScopeController::store
 * @see app/Http/Controllers/AuditScopeController.php:30
 * @route '/audit-scope'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AuditScopeController::store
 * @see app/Http/Controllers/AuditScopeController.php:30
 * @route '/audit-scope'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\AuditScopeController::show
 * @see app/Http/Controllers/AuditScopeController.php:43
 * @route '/audit-scope/{audit_scope}'
 */
export const show = (args: { audit_scope: number | { id: number } } | [audit_scope: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/audit-scope/{audit_scope}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AuditScopeController::show
 * @see app/Http/Controllers/AuditScopeController.php:43
 * @route '/audit-scope/{audit_scope}'
 */
show.url = (args: { audit_scope: number | { id: number } } | [audit_scope: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { audit_scope: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { audit_scope: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    audit_scope: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        audit_scope: typeof args.audit_scope === 'object'
                ? args.audit_scope.id
                : args.audit_scope,
                }

    return show.definition.url
            .replace('{audit_scope}', parsedArgs.audit_scope.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditScopeController::show
 * @see app/Http/Controllers/AuditScopeController.php:43
 * @route '/audit-scope/{audit_scope}'
 */
show.get = (args: { audit_scope: number | { id: number } } | [audit_scope: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AuditScopeController::show
 * @see app/Http/Controllers/AuditScopeController.php:43
 * @route '/audit-scope/{audit_scope}'
 */
show.head = (args: { audit_scope: number | { id: number } } | [audit_scope: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AuditScopeController::show
 * @see app/Http/Controllers/AuditScopeController.php:43
 * @route '/audit-scope/{audit_scope}'
 */
    const showForm = (args: { audit_scope: number | { id: number } } | [audit_scope: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AuditScopeController::show
 * @see app/Http/Controllers/AuditScopeController.php:43
 * @route '/audit-scope/{audit_scope}'
 */
        showForm.get = (args: { audit_scope: number | { id: number } } | [audit_scope: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AuditScopeController::show
 * @see app/Http/Controllers/AuditScopeController.php:43
 * @route '/audit-scope/{audit_scope}'
 */
        showForm.head = (args: { audit_scope: number | { id: number } } | [audit_scope: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\AuditScopeController::edit
 * @see app/Http/Controllers/AuditScopeController.php:48
 * @route '/audit-scope/{audit_scope}/edit'
 */
export const edit = (args: { audit_scope: number | { id: number } } | [audit_scope: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/audit-scope/{audit_scope}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AuditScopeController::edit
 * @see app/Http/Controllers/AuditScopeController.php:48
 * @route '/audit-scope/{audit_scope}/edit'
 */
edit.url = (args: { audit_scope: number | { id: number } } | [audit_scope: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { audit_scope: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { audit_scope: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    audit_scope: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        audit_scope: typeof args.audit_scope === 'object'
                ? args.audit_scope.id
                : args.audit_scope,
                }

    return edit.definition.url
            .replace('{audit_scope}', parsedArgs.audit_scope.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditScopeController::edit
 * @see app/Http/Controllers/AuditScopeController.php:48
 * @route '/audit-scope/{audit_scope}/edit'
 */
edit.get = (args: { audit_scope: number | { id: number } } | [audit_scope: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AuditScopeController::edit
 * @see app/Http/Controllers/AuditScopeController.php:48
 * @route '/audit-scope/{audit_scope}/edit'
 */
edit.head = (args: { audit_scope: number | { id: number } } | [audit_scope: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AuditScopeController::edit
 * @see app/Http/Controllers/AuditScopeController.php:48
 * @route '/audit-scope/{audit_scope}/edit'
 */
    const editForm = (args: { audit_scope: number | { id: number } } | [audit_scope: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AuditScopeController::edit
 * @see app/Http/Controllers/AuditScopeController.php:48
 * @route '/audit-scope/{audit_scope}/edit'
 */
        editForm.get = (args: { audit_scope: number | { id: number } } | [audit_scope: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AuditScopeController::edit
 * @see app/Http/Controllers/AuditScopeController.php:48
 * @route '/audit-scope/{audit_scope}/edit'
 */
        editForm.head = (args: { audit_scope: number | { id: number } } | [audit_scope: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\AuditScopeController::update
 * @see app/Http/Controllers/AuditScopeController.php:53
 * @route '/audit-scope/{audit_scope}'
 */
export const update = (args: { audit_scope: number | { id: number } } | [audit_scope: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/audit-scope/{audit_scope}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\AuditScopeController::update
 * @see app/Http/Controllers/AuditScopeController.php:53
 * @route '/audit-scope/{audit_scope}'
 */
update.url = (args: { audit_scope: number | { id: number } } | [audit_scope: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { audit_scope: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { audit_scope: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    audit_scope: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        audit_scope: typeof args.audit_scope === 'object'
                ? args.audit_scope.id
                : args.audit_scope,
                }

    return update.definition.url
            .replace('{audit_scope}', parsedArgs.audit_scope.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditScopeController::update
 * @see app/Http/Controllers/AuditScopeController.php:53
 * @route '/audit-scope/{audit_scope}'
 */
update.put = (args: { audit_scope: number | { id: number } } | [audit_scope: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\AuditScopeController::update
 * @see app/Http/Controllers/AuditScopeController.php:53
 * @route '/audit-scope/{audit_scope}'
 */
update.patch = (args: { audit_scope: number | { id: number } } | [audit_scope: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\AuditScopeController::update
 * @see app/Http/Controllers/AuditScopeController.php:53
 * @route '/audit-scope/{audit_scope}'
 */
    const updateForm = (args: { audit_scope: number | { id: number } } | [audit_scope: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AuditScopeController::update
 * @see app/Http/Controllers/AuditScopeController.php:53
 * @route '/audit-scope/{audit_scope}'
 */
        updateForm.put = (args: { audit_scope: number | { id: number } } | [audit_scope: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\AuditScopeController::update
 * @see app/Http/Controllers/AuditScopeController.php:53
 * @route '/audit-scope/{audit_scope}'
 */
        updateForm.patch = (args: { audit_scope: number | { id: number } } | [audit_scope: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\AuditScopeController::destroy
 * @see app/Http/Controllers/AuditScopeController.php:62
 * @route '/audit-scope/{audit_scope}'
 */
export const destroy = (args: { audit_scope: number | { id: number } } | [audit_scope: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/audit-scope/{audit_scope}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\AuditScopeController::destroy
 * @see app/Http/Controllers/AuditScopeController.php:62
 * @route '/audit-scope/{audit_scope}'
 */
destroy.url = (args: { audit_scope: number | { id: number } } | [audit_scope: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { audit_scope: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { audit_scope: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    audit_scope: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        audit_scope: typeof args.audit_scope === 'object'
                ? args.audit_scope.id
                : args.audit_scope,
                }

    return destroy.definition.url
            .replace('{audit_scope}', parsedArgs.audit_scope.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditScopeController::destroy
 * @see app/Http/Controllers/AuditScopeController.php:62
 * @route '/audit-scope/{audit_scope}'
 */
destroy.delete = (args: { audit_scope: number | { id: number } } | [audit_scope: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\AuditScopeController::destroy
 * @see app/Http/Controllers/AuditScopeController.php:62
 * @route '/audit-scope/{audit_scope}'
 */
    const destroyForm = (args: { audit_scope: number | { id: number } } | [audit_scope: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AuditScopeController::destroy
 * @see app/Http/Controllers/AuditScopeController.php:62
 * @route '/audit-scope/{audit_scope}'
 */
        destroyForm.delete = (args: { audit_scope: number | { id: number } } | [audit_scope: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const AuditScopeController = { index, create, store, show, edit, update, destroy }

export default AuditScopeController