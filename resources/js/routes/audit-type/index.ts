import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\AuditTypeController::search
 * @see app/Http/Controllers/AuditTypeController.php:13
 * @route '/audit-type/search'
 */
export const search = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: search.url(options),
    method: 'post',
})

search.definition = {
    methods: ["post"],
    url: '/audit-type/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AuditTypeController::search
 * @see app/Http/Controllers/AuditTypeController.php:13
 * @route '/audit-type/search'
 */
search.url = (options?: RouteQueryOptions) => {
    return search.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditTypeController::search
 * @see app/Http/Controllers/AuditTypeController.php:13
 * @route '/audit-type/search'
 */
search.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: search.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\AuditTypeController::search
 * @see app/Http/Controllers/AuditTypeController.php:13
 * @route '/audit-type/search'
 */
    const searchForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: search.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AuditTypeController::search
 * @see app/Http/Controllers/AuditTypeController.php:13
 * @route '/audit-type/search'
 */
        searchForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: search.url(options),
            method: 'post',
        })
    
    search.form = searchForm
/**
* @see \App\Http\Controllers\AuditTypeController::index
 * @see app/Http/Controllers/AuditTypeController.php:13
 * @route '/audit-type'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/audit-type',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AuditTypeController::index
 * @see app/Http/Controllers/AuditTypeController.php:13
 * @route '/audit-type'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditTypeController::index
 * @see app/Http/Controllers/AuditTypeController.php:13
 * @route '/audit-type'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AuditTypeController::index
 * @see app/Http/Controllers/AuditTypeController.php:13
 * @route '/audit-type'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AuditTypeController::index
 * @see app/Http/Controllers/AuditTypeController.php:13
 * @route '/audit-type'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AuditTypeController::index
 * @see app/Http/Controllers/AuditTypeController.php:13
 * @route '/audit-type'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AuditTypeController::index
 * @see app/Http/Controllers/AuditTypeController.php:13
 * @route '/audit-type'
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
const auditType = {
    search: Object.assign(search, search),
index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default auditType