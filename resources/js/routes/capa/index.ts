import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\CapaController::search
 * @see app/Http/Controllers/CapaController.php:18
 * @route '/capa/search'
 */
export const search = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: search.url(options),
    method: 'post',
})

search.definition = {
    methods: ["post"],
    url: '/capa/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CapaController::search
 * @see app/Http/Controllers/CapaController.php:18
 * @route '/capa/search'
 */
search.url = (options?: RouteQueryOptions) => {
    return search.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CapaController::search
 * @see app/Http/Controllers/CapaController.php:18
 * @route '/capa/search'
 */
search.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: search.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CapaController::search
 * @see app/Http/Controllers/CapaController.php:18
 * @route '/capa/search'
 */
    const searchForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: search.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CapaController::search
 * @see app/Http/Controllers/CapaController.php:18
 * @route '/capa/search'
 */
        searchForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: search.url(options),
            method: 'post',
        })
    
    search.form = searchForm
/**
* @see \App\Http\Controllers\CapaController::index
 * @see app/Http/Controllers/CapaController.php:18
 * @route '/capa'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/capa',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CapaController::index
 * @see app/Http/Controllers/CapaController.php:18
 * @route '/capa'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CapaController::index
 * @see app/Http/Controllers/CapaController.php:18
 * @route '/capa'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CapaController::index
 * @see app/Http/Controllers/CapaController.php:18
 * @route '/capa'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CapaController::index
 * @see app/Http/Controllers/CapaController.php:18
 * @route '/capa'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CapaController::index
 * @see app/Http/Controllers/CapaController.php:18
 * @route '/capa'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CapaController::index
 * @see app/Http/Controllers/CapaController.php:18
 * @route '/capa'
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
* @see \App\Http\Controllers\CapaController::create
 * @see app/Http/Controllers/CapaController.php:31
 * @route '/capa/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/capa/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CapaController::create
 * @see app/Http/Controllers/CapaController.php:31
 * @route '/capa/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CapaController::create
 * @see app/Http/Controllers/CapaController.php:31
 * @route '/capa/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CapaController::create
 * @see app/Http/Controllers/CapaController.php:31
 * @route '/capa/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CapaController::create
 * @see app/Http/Controllers/CapaController.php:31
 * @route '/capa/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CapaController::create
 * @see app/Http/Controllers/CapaController.php:31
 * @route '/capa/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CapaController::create
 * @see app/Http/Controllers/CapaController.php:31
 * @route '/capa/create'
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
* @see \App\Http\Controllers\CapaController::store
 * @see app/Http/Controllers/CapaController.php:36
 * @route '/capa'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/capa',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CapaController::store
 * @see app/Http/Controllers/CapaController.php:36
 * @route '/capa'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CapaController::store
 * @see app/Http/Controllers/CapaController.php:36
 * @route '/capa'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CapaController::store
 * @see app/Http/Controllers/CapaController.php:36
 * @route '/capa'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CapaController::store
 * @see app/Http/Controllers/CapaController.php:36
 * @route '/capa'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\CapaController::show
 * @see app/Http/Controllers/CapaController.php:45
 * @route '/capa/{capa}'
 */
export const show = (args: { capa: number | { id: number } } | [capa: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/capa/{capa}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CapaController::show
 * @see app/Http/Controllers/CapaController.php:45
 * @route '/capa/{capa}'
 */
show.url = (args: { capa: number | { id: number } } | [capa: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { capa: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { capa: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    capa: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        capa: typeof args.capa === 'object'
                ? args.capa.id
                : args.capa,
                }

    return show.definition.url
            .replace('{capa}', parsedArgs.capa.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CapaController::show
 * @see app/Http/Controllers/CapaController.php:45
 * @route '/capa/{capa}'
 */
show.get = (args: { capa: number | { id: number } } | [capa: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CapaController::show
 * @see app/Http/Controllers/CapaController.php:45
 * @route '/capa/{capa}'
 */
show.head = (args: { capa: number | { id: number } } | [capa: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CapaController::show
 * @see app/Http/Controllers/CapaController.php:45
 * @route '/capa/{capa}'
 */
    const showForm = (args: { capa: number | { id: number } } | [capa: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CapaController::show
 * @see app/Http/Controllers/CapaController.php:45
 * @route '/capa/{capa}'
 */
        showForm.get = (args: { capa: number | { id: number } } | [capa: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CapaController::show
 * @see app/Http/Controllers/CapaController.php:45
 * @route '/capa/{capa}'
 */
        showForm.head = (args: { capa: number | { id: number } } | [capa: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\CapaController::edit
 * @see app/Http/Controllers/CapaController.php:61
 * @route '/capa/{capa}/edit'
 */
export const edit = (args: { capa: number | { id: number } } | [capa: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/capa/{capa}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CapaController::edit
 * @see app/Http/Controllers/CapaController.php:61
 * @route '/capa/{capa}/edit'
 */
edit.url = (args: { capa: number | { id: number } } | [capa: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { capa: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { capa: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    capa: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        capa: typeof args.capa === 'object'
                ? args.capa.id
                : args.capa,
                }

    return edit.definition.url
            .replace('{capa}', parsedArgs.capa.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CapaController::edit
 * @see app/Http/Controllers/CapaController.php:61
 * @route '/capa/{capa}/edit'
 */
edit.get = (args: { capa: number | { id: number } } | [capa: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CapaController::edit
 * @see app/Http/Controllers/CapaController.php:61
 * @route '/capa/{capa}/edit'
 */
edit.head = (args: { capa: number | { id: number } } | [capa: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CapaController::edit
 * @see app/Http/Controllers/CapaController.php:61
 * @route '/capa/{capa}/edit'
 */
    const editForm = (args: { capa: number | { id: number } } | [capa: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CapaController::edit
 * @see app/Http/Controllers/CapaController.php:61
 * @route '/capa/{capa}/edit'
 */
        editForm.get = (args: { capa: number | { id: number } } | [capa: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CapaController::edit
 * @see app/Http/Controllers/CapaController.php:61
 * @route '/capa/{capa}/edit'
 */
        editForm.head = (args: { capa: number | { id: number } } | [capa: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\CapaController::update
 * @see app/Http/Controllers/CapaController.php:66
 * @route '/capa/{capa}'
 */
export const update = (args: { capa: number | { id: number } } | [capa: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/capa/{capa}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\CapaController::update
 * @see app/Http/Controllers/CapaController.php:66
 * @route '/capa/{capa}'
 */
update.url = (args: { capa: number | { id: number } } | [capa: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { capa: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { capa: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    capa: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        capa: typeof args.capa === 'object'
                ? args.capa.id
                : args.capa,
                }

    return update.definition.url
            .replace('{capa}', parsedArgs.capa.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CapaController::update
 * @see app/Http/Controllers/CapaController.php:66
 * @route '/capa/{capa}'
 */
update.put = (args: { capa: number | { id: number } } | [capa: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\CapaController::update
 * @see app/Http/Controllers/CapaController.php:66
 * @route '/capa/{capa}'
 */
update.patch = (args: { capa: number | { id: number } } | [capa: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\CapaController::update
 * @see app/Http/Controllers/CapaController.php:66
 * @route '/capa/{capa}'
 */
    const updateForm = (args: { capa: number | { id: number } } | [capa: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CapaController::update
 * @see app/Http/Controllers/CapaController.php:66
 * @route '/capa/{capa}'
 */
        updateForm.put = (args: { capa: number | { id: number } } | [capa: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\CapaController::update
 * @see app/Http/Controllers/CapaController.php:66
 * @route '/capa/{capa}'
 */
        updateForm.patch = (args: { capa: number | { id: number } } | [capa: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\CapaController::destroy
 * @see app/Http/Controllers/CapaController.php:75
 * @route '/capa/{capa}'
 */
export const destroy = (args: { capa: number | { id: number } } | [capa: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/capa/{capa}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\CapaController::destroy
 * @see app/Http/Controllers/CapaController.php:75
 * @route '/capa/{capa}'
 */
destroy.url = (args: { capa: number | { id: number } } | [capa: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { capa: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { capa: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    capa: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        capa: typeof args.capa === 'object'
                ? args.capa.id
                : args.capa,
                }

    return destroy.definition.url
            .replace('{capa}', parsedArgs.capa.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CapaController::destroy
 * @see app/Http/Controllers/CapaController.php:75
 * @route '/capa/{capa}'
 */
destroy.delete = (args: { capa: number | { id: number } } | [capa: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\CapaController::destroy
 * @see app/Http/Controllers/CapaController.php:75
 * @route '/capa/{capa}'
 */
    const destroyForm = (args: { capa: number | { id: number } } | [capa: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CapaController::destroy
 * @see app/Http/Controllers/CapaController.php:75
 * @route '/capa/{capa}'
 */
        destroyForm.delete = (args: { capa: number | { id: number } } | [capa: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\CapaWorkflowController::submitForVerification
 * @see app/Http/Controllers/CapaWorkflowController.php:16
 * @route '/capa/{capa}/submit-for-verification'
 */
export const submitForVerification = (args: { capa: number | { id: number } } | [capa: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: submitForVerification.url(args, options),
    method: 'post',
})

submitForVerification.definition = {
    methods: ["post"],
    url: '/capa/{capa}/submit-for-verification',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CapaWorkflowController::submitForVerification
 * @see app/Http/Controllers/CapaWorkflowController.php:16
 * @route '/capa/{capa}/submit-for-verification'
 */
submitForVerification.url = (args: { capa: number | { id: number } } | [capa: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { capa: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { capa: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    capa: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        capa: typeof args.capa === 'object'
                ? args.capa.id
                : args.capa,
                }

    return submitForVerification.definition.url
            .replace('{capa}', parsedArgs.capa.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CapaWorkflowController::submitForVerification
 * @see app/Http/Controllers/CapaWorkflowController.php:16
 * @route '/capa/{capa}/submit-for-verification'
 */
submitForVerification.post = (args: { capa: number | { id: number } } | [capa: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: submitForVerification.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CapaWorkflowController::submitForVerification
 * @see app/Http/Controllers/CapaWorkflowController.php:16
 * @route '/capa/{capa}/submit-for-verification'
 */
    const submitForVerificationForm = (args: { capa: number | { id: number } } | [capa: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: submitForVerification.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CapaWorkflowController::submitForVerification
 * @see app/Http/Controllers/CapaWorkflowController.php:16
 * @route '/capa/{capa}/submit-for-verification'
 */
        submitForVerificationForm.post = (args: { capa: number | { id: number } } | [capa: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: submitForVerification.url(args, options),
            method: 'post',
        })
    
    submitForVerification.form = submitForVerificationForm
/**
* @see \App\Http\Controllers\CapaWorkflowController::verify
 * @see app/Http/Controllers/CapaWorkflowController.php:24
 * @route '/capa/{capa}/verify'
 */
export const verify = (args: { capa: number | { id: number } } | [capa: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: verify.url(args, options),
    method: 'post',
})

verify.definition = {
    methods: ["post"],
    url: '/capa/{capa}/verify',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CapaWorkflowController::verify
 * @see app/Http/Controllers/CapaWorkflowController.php:24
 * @route '/capa/{capa}/verify'
 */
verify.url = (args: { capa: number | { id: number } } | [capa: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { capa: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { capa: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    capa: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        capa: typeof args.capa === 'object'
                ? args.capa.id
                : args.capa,
                }

    return verify.definition.url
            .replace('{capa}', parsedArgs.capa.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CapaWorkflowController::verify
 * @see app/Http/Controllers/CapaWorkflowController.php:24
 * @route '/capa/{capa}/verify'
 */
verify.post = (args: { capa: number | { id: number } } | [capa: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: verify.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CapaWorkflowController::verify
 * @see app/Http/Controllers/CapaWorkflowController.php:24
 * @route '/capa/{capa}/verify'
 */
    const verifyForm = (args: { capa: number | { id: number } } | [capa: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: verify.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CapaWorkflowController::verify
 * @see app/Http/Controllers/CapaWorkflowController.php:24
 * @route '/capa/{capa}/verify'
 */
        verifyForm.post = (args: { capa: number | { id: number } } | [capa: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: verify.url(args, options),
            method: 'post',
        })
    
    verify.form = verifyForm
/**
* @see \App\Http\Controllers\CapaWorkflowController::reopen
 * @see app/Http/Controllers/CapaWorkflowController.php:37
 * @route '/capa/{capa}/reopen'
 */
export const reopen = (args: { capa: number | { id: number } } | [capa: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reopen.url(args, options),
    method: 'post',
})

reopen.definition = {
    methods: ["post"],
    url: '/capa/{capa}/reopen',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CapaWorkflowController::reopen
 * @see app/Http/Controllers/CapaWorkflowController.php:37
 * @route '/capa/{capa}/reopen'
 */
reopen.url = (args: { capa: number | { id: number } } | [capa: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { capa: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { capa: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    capa: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        capa: typeof args.capa === 'object'
                ? args.capa.id
                : args.capa,
                }

    return reopen.definition.url
            .replace('{capa}', parsedArgs.capa.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CapaWorkflowController::reopen
 * @see app/Http/Controllers/CapaWorkflowController.php:37
 * @route '/capa/{capa}/reopen'
 */
reopen.post = (args: { capa: number | { id: number } } | [capa: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reopen.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CapaWorkflowController::reopen
 * @see app/Http/Controllers/CapaWorkflowController.php:37
 * @route '/capa/{capa}/reopen'
 */
    const reopenForm = (args: { capa: number | { id: number } } | [capa: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: reopen.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CapaWorkflowController::reopen
 * @see app/Http/Controllers/CapaWorkflowController.php:37
 * @route '/capa/{capa}/reopen'
 */
        reopenForm.post = (args: { capa: number | { id: number } } | [capa: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: reopen.url(args, options),
            method: 'post',
        })
    
    reopen.form = reopenForm
const capa = {
    search: Object.assign(search, search),
index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
submitForVerification: Object.assign(submitForVerification, submitForVerification),
verify: Object.assign(verify, verify),
reopen: Object.assign(reopen, reopen),
}

export default capa