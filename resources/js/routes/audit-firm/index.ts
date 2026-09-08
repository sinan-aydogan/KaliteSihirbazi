import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\AuditFirmController::search
 * @see app/Http/Controllers/AuditFirmController.php:12
 * @route '/audit-firm/search'
 */
export const search = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: search.url(options),
    method: 'post',
})

search.definition = {
    methods: ["post"],
    url: '/audit-firm/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AuditFirmController::search
 * @see app/Http/Controllers/AuditFirmController.php:12
 * @route '/audit-firm/search'
 */
search.url = (options?: RouteQueryOptions) => {
    return search.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditFirmController::search
 * @see app/Http/Controllers/AuditFirmController.php:12
 * @route '/audit-firm/search'
 */
search.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: search.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\AuditFirmController::search
 * @see app/Http/Controllers/AuditFirmController.php:12
 * @route '/audit-firm/search'
 */
    const searchForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: search.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AuditFirmController::search
 * @see app/Http/Controllers/AuditFirmController.php:12
 * @route '/audit-firm/search'
 */
        searchForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: search.url(options),
            method: 'post',
        })
    
    search.form = searchForm
/**
* @see \App\Http\Controllers\AuditFirmController::index
 * @see app/Http/Controllers/AuditFirmController.php:12
 * @route '/audit-firm'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/audit-firm',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AuditFirmController::index
 * @see app/Http/Controllers/AuditFirmController.php:12
 * @route '/audit-firm'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditFirmController::index
 * @see app/Http/Controllers/AuditFirmController.php:12
 * @route '/audit-firm'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AuditFirmController::index
 * @see app/Http/Controllers/AuditFirmController.php:12
 * @route '/audit-firm'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AuditFirmController::index
 * @see app/Http/Controllers/AuditFirmController.php:12
 * @route '/audit-firm'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AuditFirmController::index
 * @see app/Http/Controllers/AuditFirmController.php:12
 * @route '/audit-firm'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AuditFirmController::index
 * @see app/Http/Controllers/AuditFirmController.php:12
 * @route '/audit-firm'
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
* @see \App\Http\Controllers\AuditFirmController::create
 * @see app/Http/Controllers/AuditFirmController.php:24
 * @route '/audit-firm/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/audit-firm/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AuditFirmController::create
 * @see app/Http/Controllers/AuditFirmController.php:24
 * @route '/audit-firm/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditFirmController::create
 * @see app/Http/Controllers/AuditFirmController.php:24
 * @route '/audit-firm/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AuditFirmController::create
 * @see app/Http/Controllers/AuditFirmController.php:24
 * @route '/audit-firm/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AuditFirmController::create
 * @see app/Http/Controllers/AuditFirmController.php:24
 * @route '/audit-firm/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AuditFirmController::create
 * @see app/Http/Controllers/AuditFirmController.php:24
 * @route '/audit-firm/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AuditFirmController::create
 * @see app/Http/Controllers/AuditFirmController.php:24
 * @route '/audit-firm/create'
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
* @see \App\Http\Controllers\AuditFirmController::store
 * @see app/Http/Controllers/AuditFirmController.php:29
 * @route '/audit-firm'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/audit-firm',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AuditFirmController::store
 * @see app/Http/Controllers/AuditFirmController.php:29
 * @route '/audit-firm'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditFirmController::store
 * @see app/Http/Controllers/AuditFirmController.php:29
 * @route '/audit-firm'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\AuditFirmController::store
 * @see app/Http/Controllers/AuditFirmController.php:29
 * @route '/audit-firm'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AuditFirmController::store
 * @see app/Http/Controllers/AuditFirmController.php:29
 * @route '/audit-firm'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\AuditFirmController::show
 * @see app/Http/Controllers/AuditFirmController.php:38
 * @route '/audit-firm/{audit_firm}'
 */
export const show = (args: { audit_firm: number | { id: number } } | [audit_firm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/audit-firm/{audit_firm}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AuditFirmController::show
 * @see app/Http/Controllers/AuditFirmController.php:38
 * @route '/audit-firm/{audit_firm}'
 */
show.url = (args: { audit_firm: number | { id: number } } | [audit_firm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { audit_firm: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { audit_firm: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    audit_firm: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        audit_firm: typeof args.audit_firm === 'object'
                ? args.audit_firm.id
                : args.audit_firm,
                }

    return show.definition.url
            .replace('{audit_firm}', parsedArgs.audit_firm.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditFirmController::show
 * @see app/Http/Controllers/AuditFirmController.php:38
 * @route '/audit-firm/{audit_firm}'
 */
show.get = (args: { audit_firm: number | { id: number } } | [audit_firm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AuditFirmController::show
 * @see app/Http/Controllers/AuditFirmController.php:38
 * @route '/audit-firm/{audit_firm}'
 */
show.head = (args: { audit_firm: number | { id: number } } | [audit_firm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AuditFirmController::show
 * @see app/Http/Controllers/AuditFirmController.php:38
 * @route '/audit-firm/{audit_firm}'
 */
    const showForm = (args: { audit_firm: number | { id: number } } | [audit_firm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AuditFirmController::show
 * @see app/Http/Controllers/AuditFirmController.php:38
 * @route '/audit-firm/{audit_firm}'
 */
        showForm.get = (args: { audit_firm: number | { id: number } } | [audit_firm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AuditFirmController::show
 * @see app/Http/Controllers/AuditFirmController.php:38
 * @route '/audit-firm/{audit_firm}'
 */
        showForm.head = (args: { audit_firm: number | { id: number } } | [audit_firm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\AuditFirmController::edit
 * @see app/Http/Controllers/AuditFirmController.php:43
 * @route '/audit-firm/{audit_firm}/edit'
 */
export const edit = (args: { audit_firm: number | { id: number } } | [audit_firm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/audit-firm/{audit_firm}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AuditFirmController::edit
 * @see app/Http/Controllers/AuditFirmController.php:43
 * @route '/audit-firm/{audit_firm}/edit'
 */
edit.url = (args: { audit_firm: number | { id: number } } | [audit_firm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { audit_firm: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { audit_firm: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    audit_firm: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        audit_firm: typeof args.audit_firm === 'object'
                ? args.audit_firm.id
                : args.audit_firm,
                }

    return edit.definition.url
            .replace('{audit_firm}', parsedArgs.audit_firm.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditFirmController::edit
 * @see app/Http/Controllers/AuditFirmController.php:43
 * @route '/audit-firm/{audit_firm}/edit'
 */
edit.get = (args: { audit_firm: number | { id: number } } | [audit_firm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AuditFirmController::edit
 * @see app/Http/Controllers/AuditFirmController.php:43
 * @route '/audit-firm/{audit_firm}/edit'
 */
edit.head = (args: { audit_firm: number | { id: number } } | [audit_firm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AuditFirmController::edit
 * @see app/Http/Controllers/AuditFirmController.php:43
 * @route '/audit-firm/{audit_firm}/edit'
 */
    const editForm = (args: { audit_firm: number | { id: number } } | [audit_firm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AuditFirmController::edit
 * @see app/Http/Controllers/AuditFirmController.php:43
 * @route '/audit-firm/{audit_firm}/edit'
 */
        editForm.get = (args: { audit_firm: number | { id: number } } | [audit_firm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AuditFirmController::edit
 * @see app/Http/Controllers/AuditFirmController.php:43
 * @route '/audit-firm/{audit_firm}/edit'
 */
        editForm.head = (args: { audit_firm: number | { id: number } } | [audit_firm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\AuditFirmController::update
 * @see app/Http/Controllers/AuditFirmController.php:48
 * @route '/audit-firm/{audit_firm}'
 */
export const update = (args: { audit_firm: number | { id: number } } | [audit_firm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/audit-firm/{audit_firm}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\AuditFirmController::update
 * @see app/Http/Controllers/AuditFirmController.php:48
 * @route '/audit-firm/{audit_firm}'
 */
update.url = (args: { audit_firm: number | { id: number } } | [audit_firm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { audit_firm: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { audit_firm: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    audit_firm: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        audit_firm: typeof args.audit_firm === 'object'
                ? args.audit_firm.id
                : args.audit_firm,
                }

    return update.definition.url
            .replace('{audit_firm}', parsedArgs.audit_firm.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditFirmController::update
 * @see app/Http/Controllers/AuditFirmController.php:48
 * @route '/audit-firm/{audit_firm}'
 */
update.put = (args: { audit_firm: number | { id: number } } | [audit_firm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\AuditFirmController::update
 * @see app/Http/Controllers/AuditFirmController.php:48
 * @route '/audit-firm/{audit_firm}'
 */
update.patch = (args: { audit_firm: number | { id: number } } | [audit_firm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\AuditFirmController::update
 * @see app/Http/Controllers/AuditFirmController.php:48
 * @route '/audit-firm/{audit_firm}'
 */
    const updateForm = (args: { audit_firm: number | { id: number } } | [audit_firm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AuditFirmController::update
 * @see app/Http/Controllers/AuditFirmController.php:48
 * @route '/audit-firm/{audit_firm}'
 */
        updateForm.put = (args: { audit_firm: number | { id: number } } | [audit_firm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\AuditFirmController::update
 * @see app/Http/Controllers/AuditFirmController.php:48
 * @route '/audit-firm/{audit_firm}'
 */
        updateForm.patch = (args: { audit_firm: number | { id: number } } | [audit_firm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\AuditFirmController::destroy
 * @see app/Http/Controllers/AuditFirmController.php:57
 * @route '/audit-firm/{audit_firm}'
 */
export const destroy = (args: { audit_firm: number | { id: number } } | [audit_firm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/audit-firm/{audit_firm}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\AuditFirmController::destroy
 * @see app/Http/Controllers/AuditFirmController.php:57
 * @route '/audit-firm/{audit_firm}'
 */
destroy.url = (args: { audit_firm: number | { id: number } } | [audit_firm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { audit_firm: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { audit_firm: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    audit_firm: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        audit_firm: typeof args.audit_firm === 'object'
                ? args.audit_firm.id
                : args.audit_firm,
                }

    return destroy.definition.url
            .replace('{audit_firm}', parsedArgs.audit_firm.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditFirmController::destroy
 * @see app/Http/Controllers/AuditFirmController.php:57
 * @route '/audit-firm/{audit_firm}'
 */
destroy.delete = (args: { audit_firm: number | { id: number } } | [audit_firm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\AuditFirmController::destroy
 * @see app/Http/Controllers/AuditFirmController.php:57
 * @route '/audit-firm/{audit_firm}'
 */
    const destroyForm = (args: { audit_firm: number | { id: number } } | [audit_firm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AuditFirmController::destroy
 * @see app/Http/Controllers/AuditFirmController.php:57
 * @route '/audit-firm/{audit_firm}'
 */
        destroyForm.delete = (args: { audit_firm: number | { id: number } } | [audit_firm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const auditFirm = {
    search: Object.assign(search, search),
index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default auditFirm