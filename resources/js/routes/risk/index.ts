import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\RiskController::search
 * @see app/Http/Controllers/RiskController.php:21
 * @route '/risk/search'
 */
export const search = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: search.url(options),
    method: 'post',
})

search.definition = {
    methods: ["post"],
    url: '/risk/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\RiskController::search
 * @see app/Http/Controllers/RiskController.php:21
 * @route '/risk/search'
 */
search.url = (options?: RouteQueryOptions) => {
    return search.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\RiskController::search
 * @see app/Http/Controllers/RiskController.php:21
 * @route '/risk/search'
 */
search.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: search.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\RiskController::search
 * @see app/Http/Controllers/RiskController.php:21
 * @route '/risk/search'
 */
    const searchForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: search.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\RiskController::search
 * @see app/Http/Controllers/RiskController.php:21
 * @route '/risk/search'
 */
        searchForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: search.url(options),
            method: 'post',
        })
    
    search.form = searchForm
/**
* @see \App\Http\Controllers\RiskController::index
 * @see app/Http/Controllers/RiskController.php:21
 * @route '/risk'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/risk',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\RiskController::index
 * @see app/Http/Controllers/RiskController.php:21
 * @route '/risk'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\RiskController::index
 * @see app/Http/Controllers/RiskController.php:21
 * @route '/risk'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\RiskController::index
 * @see app/Http/Controllers/RiskController.php:21
 * @route '/risk'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\RiskController::index
 * @see app/Http/Controllers/RiskController.php:21
 * @route '/risk'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\RiskController::index
 * @see app/Http/Controllers/RiskController.php:21
 * @route '/risk'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\RiskController::index
 * @see app/Http/Controllers/RiskController.php:21
 * @route '/risk'
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
* @see \App\Http\Controllers\RiskController::create
 * @see app/Http/Controllers/RiskController.php:37
 * @route '/risk/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/risk/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\RiskController::create
 * @see app/Http/Controllers/RiskController.php:37
 * @route '/risk/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\RiskController::create
 * @see app/Http/Controllers/RiskController.php:37
 * @route '/risk/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\RiskController::create
 * @see app/Http/Controllers/RiskController.php:37
 * @route '/risk/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\RiskController::create
 * @see app/Http/Controllers/RiskController.php:37
 * @route '/risk/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\RiskController::create
 * @see app/Http/Controllers/RiskController.php:37
 * @route '/risk/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\RiskController::create
 * @see app/Http/Controllers/RiskController.php:37
 * @route '/risk/create'
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
* @see \App\Http\Controllers\RiskController::store
 * @see app/Http/Controllers/RiskController.php:42
 * @route '/risk'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/risk',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\RiskController::store
 * @see app/Http/Controllers/RiskController.php:42
 * @route '/risk'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\RiskController::store
 * @see app/Http/Controllers/RiskController.php:42
 * @route '/risk'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\RiskController::store
 * @see app/Http/Controllers/RiskController.php:42
 * @route '/risk'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\RiskController::store
 * @see app/Http/Controllers/RiskController.php:42
 * @route '/risk'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\RiskController::show
 * @see app/Http/Controllers/RiskController.php:51
 * @route '/risk/{risk}'
 */
export const show = (args: { risk: number | { id: number } } | [risk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/risk/{risk}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\RiskController::show
 * @see app/Http/Controllers/RiskController.php:51
 * @route '/risk/{risk}'
 */
show.url = (args: { risk: number | { id: number } } | [risk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { risk: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { risk: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    risk: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        risk: typeof args.risk === 'object'
                ? args.risk.id
                : args.risk,
                }

    return show.definition.url
            .replace('{risk}', parsedArgs.risk.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\RiskController::show
 * @see app/Http/Controllers/RiskController.php:51
 * @route '/risk/{risk}'
 */
show.get = (args: { risk: number | { id: number } } | [risk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\RiskController::show
 * @see app/Http/Controllers/RiskController.php:51
 * @route '/risk/{risk}'
 */
show.head = (args: { risk: number | { id: number } } | [risk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\RiskController::show
 * @see app/Http/Controllers/RiskController.php:51
 * @route '/risk/{risk}'
 */
    const showForm = (args: { risk: number | { id: number } } | [risk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\RiskController::show
 * @see app/Http/Controllers/RiskController.php:51
 * @route '/risk/{risk}'
 */
        showForm.get = (args: { risk: number | { id: number } } | [risk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\RiskController::show
 * @see app/Http/Controllers/RiskController.php:51
 * @route '/risk/{risk}'
 */
        showForm.head = (args: { risk: number | { id: number } } | [risk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\RiskController::edit
 * @see app/Http/Controllers/RiskController.php:71
 * @route '/risk/{risk}/edit'
 */
export const edit = (args: { risk: number | { id: number } } | [risk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/risk/{risk}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\RiskController::edit
 * @see app/Http/Controllers/RiskController.php:71
 * @route '/risk/{risk}/edit'
 */
edit.url = (args: { risk: number | { id: number } } | [risk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { risk: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { risk: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    risk: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        risk: typeof args.risk === 'object'
                ? args.risk.id
                : args.risk,
                }

    return edit.definition.url
            .replace('{risk}', parsedArgs.risk.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\RiskController::edit
 * @see app/Http/Controllers/RiskController.php:71
 * @route '/risk/{risk}/edit'
 */
edit.get = (args: { risk: number | { id: number } } | [risk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\RiskController::edit
 * @see app/Http/Controllers/RiskController.php:71
 * @route '/risk/{risk}/edit'
 */
edit.head = (args: { risk: number | { id: number } } | [risk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\RiskController::edit
 * @see app/Http/Controllers/RiskController.php:71
 * @route '/risk/{risk}/edit'
 */
    const editForm = (args: { risk: number | { id: number } } | [risk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\RiskController::edit
 * @see app/Http/Controllers/RiskController.php:71
 * @route '/risk/{risk}/edit'
 */
        editForm.get = (args: { risk: number | { id: number } } | [risk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\RiskController::edit
 * @see app/Http/Controllers/RiskController.php:71
 * @route '/risk/{risk}/edit'
 */
        editForm.head = (args: { risk: number | { id: number } } | [risk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\RiskController::update
 * @see app/Http/Controllers/RiskController.php:76
 * @route '/risk/{risk}'
 */
export const update = (args: { risk: number | { id: number } } | [risk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/risk/{risk}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\RiskController::update
 * @see app/Http/Controllers/RiskController.php:76
 * @route '/risk/{risk}'
 */
update.url = (args: { risk: number | { id: number } } | [risk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { risk: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { risk: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    risk: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        risk: typeof args.risk === 'object'
                ? args.risk.id
                : args.risk,
                }

    return update.definition.url
            .replace('{risk}', parsedArgs.risk.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\RiskController::update
 * @see app/Http/Controllers/RiskController.php:76
 * @route '/risk/{risk}'
 */
update.put = (args: { risk: number | { id: number } } | [risk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\RiskController::update
 * @see app/Http/Controllers/RiskController.php:76
 * @route '/risk/{risk}'
 */
update.patch = (args: { risk: number | { id: number } } | [risk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\RiskController::update
 * @see app/Http/Controllers/RiskController.php:76
 * @route '/risk/{risk}'
 */
    const updateForm = (args: { risk: number | { id: number } } | [risk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\RiskController::update
 * @see app/Http/Controllers/RiskController.php:76
 * @route '/risk/{risk}'
 */
        updateForm.put = (args: { risk: number | { id: number } } | [risk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\RiskController::update
 * @see app/Http/Controllers/RiskController.php:76
 * @route '/risk/{risk}'
 */
        updateForm.patch = (args: { risk: number | { id: number } } | [risk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\RiskController::destroy
 * @see app/Http/Controllers/RiskController.php:85
 * @route '/risk/{risk}'
 */
export const destroy = (args: { risk: number | { id: number } } | [risk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/risk/{risk}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\RiskController::destroy
 * @see app/Http/Controllers/RiskController.php:85
 * @route '/risk/{risk}'
 */
destroy.url = (args: { risk: number | { id: number } } | [risk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { risk: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { risk: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    risk: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        risk: typeof args.risk === 'object'
                ? args.risk.id
                : args.risk,
                }

    return destroy.definition.url
            .replace('{risk}', parsedArgs.risk.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\RiskController::destroy
 * @see app/Http/Controllers/RiskController.php:85
 * @route '/risk/{risk}'
 */
destroy.delete = (args: { risk: number | { id: number } } | [risk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\RiskController::destroy
 * @see app/Http/Controllers/RiskController.php:85
 * @route '/risk/{risk}'
 */
    const destroyForm = (args: { risk: number | { id: number } } | [risk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\RiskController::destroy
 * @see app/Http/Controllers/RiskController.php:85
 * @route '/risk/{risk}'
 */
        destroyForm.delete = (args: { risk: number | { id: number } } | [risk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\RiskWorkflowController::close
 * @see app/Http/Controllers/RiskWorkflowController.php:15
 * @route '/risk/{risk}/close'
 */
export const close = (args: { risk: number | { id: number } } | [risk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: close.url(args, options),
    method: 'post',
})

close.definition = {
    methods: ["post"],
    url: '/risk/{risk}/close',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\RiskWorkflowController::close
 * @see app/Http/Controllers/RiskWorkflowController.php:15
 * @route '/risk/{risk}/close'
 */
close.url = (args: { risk: number | { id: number } } | [risk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { risk: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { risk: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    risk: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        risk: typeof args.risk === 'object'
                ? args.risk.id
                : args.risk,
                }

    return close.definition.url
            .replace('{risk}', parsedArgs.risk.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\RiskWorkflowController::close
 * @see app/Http/Controllers/RiskWorkflowController.php:15
 * @route '/risk/{risk}/close'
 */
close.post = (args: { risk: number | { id: number } } | [risk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: close.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\RiskWorkflowController::close
 * @see app/Http/Controllers/RiskWorkflowController.php:15
 * @route '/risk/{risk}/close'
 */
    const closeForm = (args: { risk: number | { id: number } } | [risk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: close.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\RiskWorkflowController::close
 * @see app/Http/Controllers/RiskWorkflowController.php:15
 * @route '/risk/{risk}/close'
 */
        closeForm.post = (args: { risk: number | { id: number } } | [risk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: close.url(args, options),
            method: 'post',
        })
    
    close.form = closeForm
const risk = {
    search: Object.assign(search, search),
index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
close: Object.assign(close, close),
}

export default risk