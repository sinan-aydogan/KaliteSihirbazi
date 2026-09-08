import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\CapaController::index
 * @see app/Http/Controllers/CapaController.php:18
 * @route '/capa/search'
 */
const index89660d78a5d861b7244bf1782162938a = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: index89660d78a5d861b7244bf1782162938a.url(options),
    method: 'post',
})

index89660d78a5d861b7244bf1782162938a.definition = {
    methods: ["post"],
    url: '/capa/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CapaController::index
 * @see app/Http/Controllers/CapaController.php:18
 * @route '/capa/search'
 */
index89660d78a5d861b7244bf1782162938a.url = (options?: RouteQueryOptions) => {
    return index89660d78a5d861b7244bf1782162938a.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CapaController::index
 * @see app/Http/Controllers/CapaController.php:18
 * @route '/capa/search'
 */
index89660d78a5d861b7244bf1782162938a.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: index89660d78a5d861b7244bf1782162938a.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CapaController::index
 * @see app/Http/Controllers/CapaController.php:18
 * @route '/capa/search'
 */
    const index89660d78a5d861b7244bf1782162938aForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: index89660d78a5d861b7244bf1782162938a.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CapaController::index
 * @see app/Http/Controllers/CapaController.php:18
 * @route '/capa/search'
 */
        index89660d78a5d861b7244bf1782162938aForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: index89660d78a5d861b7244bf1782162938a.url(options),
            method: 'post',
        })
    
    index89660d78a5d861b7244bf1782162938a.form = index89660d78a5d861b7244bf1782162938aForm
    /**
* @see \App\Http\Controllers\CapaController::index
 * @see app/Http/Controllers/CapaController.php:18
 * @route '/capa'
 */
const index39b2ee8b7c107fc5616bd6891f838f7f = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index39b2ee8b7c107fc5616bd6891f838f7f.url(options),
    method: 'get',
})

index39b2ee8b7c107fc5616bd6891f838f7f.definition = {
    methods: ["get","head"],
    url: '/capa',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CapaController::index
 * @see app/Http/Controllers/CapaController.php:18
 * @route '/capa'
 */
index39b2ee8b7c107fc5616bd6891f838f7f.url = (options?: RouteQueryOptions) => {
    return index39b2ee8b7c107fc5616bd6891f838f7f.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CapaController::index
 * @see app/Http/Controllers/CapaController.php:18
 * @route '/capa'
 */
index39b2ee8b7c107fc5616bd6891f838f7f.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index39b2ee8b7c107fc5616bd6891f838f7f.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CapaController::index
 * @see app/Http/Controllers/CapaController.php:18
 * @route '/capa'
 */
index39b2ee8b7c107fc5616bd6891f838f7f.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index39b2ee8b7c107fc5616bd6891f838f7f.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CapaController::index
 * @see app/Http/Controllers/CapaController.php:18
 * @route '/capa'
 */
    const index39b2ee8b7c107fc5616bd6891f838f7fForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index39b2ee8b7c107fc5616bd6891f838f7f.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CapaController::index
 * @see app/Http/Controllers/CapaController.php:18
 * @route '/capa'
 */
        index39b2ee8b7c107fc5616bd6891f838f7fForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index39b2ee8b7c107fc5616bd6891f838f7f.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CapaController::index
 * @see app/Http/Controllers/CapaController.php:18
 * @route '/capa'
 */
        index39b2ee8b7c107fc5616bd6891f838f7fForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index39b2ee8b7c107fc5616bd6891f838f7f.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index39b2ee8b7c107fc5616bd6891f838f7f.form = index39b2ee8b7c107fc5616bd6891f838f7fForm

/**
* Multiple routes resolve to \App\Http\Controllers\CapaController::index, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `index['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const index = {
    '/capa/search': index89660d78a5d861b7244bf1782162938a,
    '/capa': index39b2ee8b7c107fc5616bd6891f838f7f,
}

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
const CapaController = { index, create, store, show, edit, update, destroy }

export default CapaController