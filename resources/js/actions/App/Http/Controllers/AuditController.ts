import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\AuditController::index
 * @see app/Http/Controllers/AuditController.php:26
 * @route '/audit/search'
 */
const index96abd1e42a2417df226631e7aa8a8f54 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: index96abd1e42a2417df226631e7aa8a8f54.url(options),
    method: 'post',
})

index96abd1e42a2417df226631e7aa8a8f54.definition = {
    methods: ["post"],
    url: '/audit/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AuditController::index
 * @see app/Http/Controllers/AuditController.php:26
 * @route '/audit/search'
 */
index96abd1e42a2417df226631e7aa8a8f54.url = (options?: RouteQueryOptions) => {
    return index96abd1e42a2417df226631e7aa8a8f54.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditController::index
 * @see app/Http/Controllers/AuditController.php:26
 * @route '/audit/search'
 */
index96abd1e42a2417df226631e7aa8a8f54.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: index96abd1e42a2417df226631e7aa8a8f54.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\AuditController::index
 * @see app/Http/Controllers/AuditController.php:26
 * @route '/audit/search'
 */
    const index96abd1e42a2417df226631e7aa8a8f54Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: index96abd1e42a2417df226631e7aa8a8f54.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AuditController::index
 * @see app/Http/Controllers/AuditController.php:26
 * @route '/audit/search'
 */
        index96abd1e42a2417df226631e7aa8a8f54Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: index96abd1e42a2417df226631e7aa8a8f54.url(options),
            method: 'post',
        })
    
    index96abd1e42a2417df226631e7aa8a8f54.form = index96abd1e42a2417df226631e7aa8a8f54Form
    /**
* @see \App\Http\Controllers\AuditController::index
 * @see app/Http/Controllers/AuditController.php:26
 * @route '/audit'
 */
const indexeb34da18791561b44f3607f3ea8ab70d = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexeb34da18791561b44f3607f3ea8ab70d.url(options),
    method: 'get',
})

indexeb34da18791561b44f3607f3ea8ab70d.definition = {
    methods: ["get","head"],
    url: '/audit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AuditController::index
 * @see app/Http/Controllers/AuditController.php:26
 * @route '/audit'
 */
indexeb34da18791561b44f3607f3ea8ab70d.url = (options?: RouteQueryOptions) => {
    return indexeb34da18791561b44f3607f3ea8ab70d.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditController::index
 * @see app/Http/Controllers/AuditController.php:26
 * @route '/audit'
 */
indexeb34da18791561b44f3607f3ea8ab70d.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexeb34da18791561b44f3607f3ea8ab70d.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AuditController::index
 * @see app/Http/Controllers/AuditController.php:26
 * @route '/audit'
 */
indexeb34da18791561b44f3607f3ea8ab70d.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexeb34da18791561b44f3607f3ea8ab70d.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AuditController::index
 * @see app/Http/Controllers/AuditController.php:26
 * @route '/audit'
 */
    const indexeb34da18791561b44f3607f3ea8ab70dForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: indexeb34da18791561b44f3607f3ea8ab70d.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AuditController::index
 * @see app/Http/Controllers/AuditController.php:26
 * @route '/audit'
 */
        indexeb34da18791561b44f3607f3ea8ab70dForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexeb34da18791561b44f3607f3ea8ab70d.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AuditController::index
 * @see app/Http/Controllers/AuditController.php:26
 * @route '/audit'
 */
        indexeb34da18791561b44f3607f3ea8ab70dForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexeb34da18791561b44f3607f3ea8ab70d.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    indexeb34da18791561b44f3607f3ea8ab70d.form = indexeb34da18791561b44f3607f3ea8ab70dForm

/**
* Multiple routes resolve to \App\Http\Controllers\AuditController::index, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `index['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const index = {
    '/audit/search': index96abd1e42a2417df226631e7aa8a8f54,
    '/audit': indexeb34da18791561b44f3607f3ea8ab70d,
}

/**
* @see \App\Http\Controllers\AuditController::create
 * @see app/Http/Controllers/AuditController.php:47
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
 * @see app/Http/Controllers/AuditController.php:47
 * @route '/audit/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditController::create
 * @see app/Http/Controllers/AuditController.php:47
 * @route '/audit/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AuditController::create
 * @see app/Http/Controllers/AuditController.php:47
 * @route '/audit/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AuditController::create
 * @see app/Http/Controllers/AuditController.php:47
 * @route '/audit/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AuditController::create
 * @see app/Http/Controllers/AuditController.php:47
 * @route '/audit/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AuditController::create
 * @see app/Http/Controllers/AuditController.php:47
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
 * @see app/Http/Controllers/AuditController.php:52
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
 * @see app/Http/Controllers/AuditController.php:52
 * @route '/audit'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditController::store
 * @see app/Http/Controllers/AuditController.php:52
 * @route '/audit'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\AuditController::store
 * @see app/Http/Controllers/AuditController.php:52
 * @route '/audit'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AuditController::store
 * @see app/Http/Controllers/AuditController.php:52
 * @route '/audit'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\AuditController::show
 * @see app/Http/Controllers/AuditController.php:61
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
 * @see app/Http/Controllers/AuditController.php:61
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
 * @see app/Http/Controllers/AuditController.php:61
 * @route '/audit/{audit}'
 */
show.get = (args: { audit: number | { id: number } } | [audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AuditController::show
 * @see app/Http/Controllers/AuditController.php:61
 * @route '/audit/{audit}'
 */
show.head = (args: { audit: number | { id: number } } | [audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AuditController::show
 * @see app/Http/Controllers/AuditController.php:61
 * @route '/audit/{audit}'
 */
    const showForm = (args: { audit: number | { id: number } } | [audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AuditController::show
 * @see app/Http/Controllers/AuditController.php:61
 * @route '/audit/{audit}'
 */
        showForm.get = (args: { audit: number | { id: number } } | [audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AuditController::show
 * @see app/Http/Controllers/AuditController.php:61
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
 * @see app/Http/Controllers/AuditController.php:85
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
 * @see app/Http/Controllers/AuditController.php:85
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
 * @see app/Http/Controllers/AuditController.php:85
 * @route '/audit/{audit}/edit'
 */
edit.get = (args: { audit: number | { id: number } } | [audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AuditController::edit
 * @see app/Http/Controllers/AuditController.php:85
 * @route '/audit/{audit}/edit'
 */
edit.head = (args: { audit: number | { id: number } } | [audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AuditController::edit
 * @see app/Http/Controllers/AuditController.php:85
 * @route '/audit/{audit}/edit'
 */
    const editForm = (args: { audit: number | { id: number } } | [audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AuditController::edit
 * @see app/Http/Controllers/AuditController.php:85
 * @route '/audit/{audit}/edit'
 */
        editForm.get = (args: { audit: number | { id: number } } | [audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AuditController::edit
 * @see app/Http/Controllers/AuditController.php:85
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
 * @see app/Http/Controllers/AuditController.php:90
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
 * @see app/Http/Controllers/AuditController.php:90
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
 * @see app/Http/Controllers/AuditController.php:90
 * @route '/audit/{audit}'
 */
update.put = (args: { audit: number | { id: number } } | [audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\AuditController::update
 * @see app/Http/Controllers/AuditController.php:90
 * @route '/audit/{audit}'
 */
update.patch = (args: { audit: number | { id: number } } | [audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\AuditController::update
 * @see app/Http/Controllers/AuditController.php:90
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
 * @see app/Http/Controllers/AuditController.php:90
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
 * @see app/Http/Controllers/AuditController.php:90
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
 * @see app/Http/Controllers/AuditController.php:99
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
 * @see app/Http/Controllers/AuditController.php:99
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
 * @see app/Http/Controllers/AuditController.php:99
 * @route '/audit/{audit}'
 */
destroy.delete = (args: { audit: number | { id: number } } | [audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\AuditController::destroy
 * @see app/Http/Controllers/AuditController.php:99
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
 * @see app/Http/Controllers/AuditController.php:99
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
const AuditController = { index, create, store, show, edit, update, destroy }

export default AuditController