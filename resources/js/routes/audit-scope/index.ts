import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\AuditScopeController::search
 * @see app/Http/Controllers/AuditScopeController.php:13
 * @route '/audit-scope/search'
 */
export const search = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: search.url(options),
    method: 'post',
})

search.definition = {
    methods: ["post"],
    url: '/audit-scope/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AuditScopeController::search
 * @see app/Http/Controllers/AuditScopeController.php:13
 * @route '/audit-scope/search'
 */
search.url = (options?: RouteQueryOptions) => {
    return search.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditScopeController::search
 * @see app/Http/Controllers/AuditScopeController.php:13
 * @route '/audit-scope/search'
 */
search.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: search.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\AuditScopeController::search
 * @see app/Http/Controllers/AuditScopeController.php:13
 * @route '/audit-scope/search'
 */
    const searchForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: search.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AuditScopeController::search
 * @see app/Http/Controllers/AuditScopeController.php:13
 * @route '/audit-scope/search'
 */
        searchForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: search.url(options),
            method: 'post',
        })
    
    search.form = searchForm
/**
* @see \App\Http\Controllers\AuditScopeController::index
 * @see app/Http/Controllers/AuditScopeController.php:13
 * @route '/audit-scope'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/audit-scope',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AuditScopeController::index
 * @see app/Http/Controllers/AuditScopeController.php:13
 * @route '/audit-scope'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditScopeController::index
 * @see app/Http/Controllers/AuditScopeController.php:13
 * @route '/audit-scope'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AuditScopeController::index
 * @see app/Http/Controllers/AuditScopeController.php:13
 * @route '/audit-scope'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AuditScopeController::index
 * @see app/Http/Controllers/AuditScopeController.php:13
 * @route '/audit-scope'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AuditScopeController::index
 * @see app/Http/Controllers/AuditScopeController.php:13
 * @route '/audit-scope'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AuditScopeController::index
 * @see app/Http/Controllers/AuditScopeController.php:13
 * @route '/audit-scope'
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
const auditScope = {
    search: Object.assign(search, search),
index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default auditScope