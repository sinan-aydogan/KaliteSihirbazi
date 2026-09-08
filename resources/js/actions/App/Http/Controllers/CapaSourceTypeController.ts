import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\CapaSourceTypeController::index
 * @see app/Http/Controllers/CapaSourceTypeController.php:13
 * @route '/capa-source-type/search'
 */
const index689f3668389d7e961c665ef68ed8895c = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: index689f3668389d7e961c665ef68ed8895c.url(options),
    method: 'post',
})

index689f3668389d7e961c665ef68ed8895c.definition = {
    methods: ["post"],
    url: '/capa-source-type/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CapaSourceTypeController::index
 * @see app/Http/Controllers/CapaSourceTypeController.php:13
 * @route '/capa-source-type/search'
 */
index689f3668389d7e961c665ef68ed8895c.url = (options?: RouteQueryOptions) => {
    return index689f3668389d7e961c665ef68ed8895c.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CapaSourceTypeController::index
 * @see app/Http/Controllers/CapaSourceTypeController.php:13
 * @route '/capa-source-type/search'
 */
index689f3668389d7e961c665ef68ed8895c.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: index689f3668389d7e961c665ef68ed8895c.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CapaSourceTypeController::index
 * @see app/Http/Controllers/CapaSourceTypeController.php:13
 * @route '/capa-source-type/search'
 */
    const index689f3668389d7e961c665ef68ed8895cForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: index689f3668389d7e961c665ef68ed8895c.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CapaSourceTypeController::index
 * @see app/Http/Controllers/CapaSourceTypeController.php:13
 * @route '/capa-source-type/search'
 */
        index689f3668389d7e961c665ef68ed8895cForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: index689f3668389d7e961c665ef68ed8895c.url(options),
            method: 'post',
        })
    
    index689f3668389d7e961c665ef68ed8895c.form = index689f3668389d7e961c665ef68ed8895cForm
    /**
* @see \App\Http\Controllers\CapaSourceTypeController::index
 * @see app/Http/Controllers/CapaSourceTypeController.php:13
 * @route '/capa-source-type'
 */
const indexc4e2edbe315adb51a5d98e68b13ad064 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexc4e2edbe315adb51a5d98e68b13ad064.url(options),
    method: 'get',
})

indexc4e2edbe315adb51a5d98e68b13ad064.definition = {
    methods: ["get","head"],
    url: '/capa-source-type',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CapaSourceTypeController::index
 * @see app/Http/Controllers/CapaSourceTypeController.php:13
 * @route '/capa-source-type'
 */
indexc4e2edbe315adb51a5d98e68b13ad064.url = (options?: RouteQueryOptions) => {
    return indexc4e2edbe315adb51a5d98e68b13ad064.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CapaSourceTypeController::index
 * @see app/Http/Controllers/CapaSourceTypeController.php:13
 * @route '/capa-source-type'
 */
indexc4e2edbe315adb51a5d98e68b13ad064.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexc4e2edbe315adb51a5d98e68b13ad064.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CapaSourceTypeController::index
 * @see app/Http/Controllers/CapaSourceTypeController.php:13
 * @route '/capa-source-type'
 */
indexc4e2edbe315adb51a5d98e68b13ad064.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexc4e2edbe315adb51a5d98e68b13ad064.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CapaSourceTypeController::index
 * @see app/Http/Controllers/CapaSourceTypeController.php:13
 * @route '/capa-source-type'
 */
    const indexc4e2edbe315adb51a5d98e68b13ad064Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: indexc4e2edbe315adb51a5d98e68b13ad064.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CapaSourceTypeController::index
 * @see app/Http/Controllers/CapaSourceTypeController.php:13
 * @route '/capa-source-type'
 */
        indexc4e2edbe315adb51a5d98e68b13ad064Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexc4e2edbe315adb51a5d98e68b13ad064.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CapaSourceTypeController::index
 * @see app/Http/Controllers/CapaSourceTypeController.php:13
 * @route '/capa-source-type'
 */
        indexc4e2edbe315adb51a5d98e68b13ad064Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexc4e2edbe315adb51a5d98e68b13ad064.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    indexc4e2edbe315adb51a5d98e68b13ad064.form = indexc4e2edbe315adb51a5d98e68b13ad064Form

/**
* Multiple routes resolve to \App\Http\Controllers\CapaSourceTypeController::index, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `index['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const index = {
    '/capa-source-type/search': index689f3668389d7e961c665ef68ed8895c,
    '/capa-source-type': indexc4e2edbe315adb51a5d98e68b13ad064,
}

/**
* @see \App\Http\Controllers\CapaSourceTypeController::create
 * @see app/Http/Controllers/CapaSourceTypeController.php:25
 * @route '/capa-source-type/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/capa-source-type/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CapaSourceTypeController::create
 * @see app/Http/Controllers/CapaSourceTypeController.php:25
 * @route '/capa-source-type/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CapaSourceTypeController::create
 * @see app/Http/Controllers/CapaSourceTypeController.php:25
 * @route '/capa-source-type/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CapaSourceTypeController::create
 * @see app/Http/Controllers/CapaSourceTypeController.php:25
 * @route '/capa-source-type/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CapaSourceTypeController::create
 * @see app/Http/Controllers/CapaSourceTypeController.php:25
 * @route '/capa-source-type/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CapaSourceTypeController::create
 * @see app/Http/Controllers/CapaSourceTypeController.php:25
 * @route '/capa-source-type/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CapaSourceTypeController::create
 * @see app/Http/Controllers/CapaSourceTypeController.php:25
 * @route '/capa-source-type/create'
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
* @see \App\Http\Controllers\CapaSourceTypeController::store
 * @see app/Http/Controllers/CapaSourceTypeController.php:30
 * @route '/capa-source-type'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/capa-source-type',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CapaSourceTypeController::store
 * @see app/Http/Controllers/CapaSourceTypeController.php:30
 * @route '/capa-source-type'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CapaSourceTypeController::store
 * @see app/Http/Controllers/CapaSourceTypeController.php:30
 * @route '/capa-source-type'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CapaSourceTypeController::store
 * @see app/Http/Controllers/CapaSourceTypeController.php:30
 * @route '/capa-source-type'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CapaSourceTypeController::store
 * @see app/Http/Controllers/CapaSourceTypeController.php:30
 * @route '/capa-source-type'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\CapaSourceTypeController::show
 * @see app/Http/Controllers/CapaSourceTypeController.php:43
 * @route '/capa-source-type/{capa_source_type}'
 */
export const show = (args: { capa_source_type: number | { id: number } } | [capa_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/capa-source-type/{capa_source_type}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CapaSourceTypeController::show
 * @see app/Http/Controllers/CapaSourceTypeController.php:43
 * @route '/capa-source-type/{capa_source_type}'
 */
show.url = (args: { capa_source_type: number | { id: number } } | [capa_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { capa_source_type: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { capa_source_type: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    capa_source_type: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        capa_source_type: typeof args.capa_source_type === 'object'
                ? args.capa_source_type.id
                : args.capa_source_type,
                }

    return show.definition.url
            .replace('{capa_source_type}', parsedArgs.capa_source_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CapaSourceTypeController::show
 * @see app/Http/Controllers/CapaSourceTypeController.php:43
 * @route '/capa-source-type/{capa_source_type}'
 */
show.get = (args: { capa_source_type: number | { id: number } } | [capa_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CapaSourceTypeController::show
 * @see app/Http/Controllers/CapaSourceTypeController.php:43
 * @route '/capa-source-type/{capa_source_type}'
 */
show.head = (args: { capa_source_type: number | { id: number } } | [capa_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CapaSourceTypeController::show
 * @see app/Http/Controllers/CapaSourceTypeController.php:43
 * @route '/capa-source-type/{capa_source_type}'
 */
    const showForm = (args: { capa_source_type: number | { id: number } } | [capa_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CapaSourceTypeController::show
 * @see app/Http/Controllers/CapaSourceTypeController.php:43
 * @route '/capa-source-type/{capa_source_type}'
 */
        showForm.get = (args: { capa_source_type: number | { id: number } } | [capa_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CapaSourceTypeController::show
 * @see app/Http/Controllers/CapaSourceTypeController.php:43
 * @route '/capa-source-type/{capa_source_type}'
 */
        showForm.head = (args: { capa_source_type: number | { id: number } } | [capa_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\CapaSourceTypeController::edit
 * @see app/Http/Controllers/CapaSourceTypeController.php:48
 * @route '/capa-source-type/{capa_source_type}/edit'
 */
export const edit = (args: { capa_source_type: number | { id: number } } | [capa_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/capa-source-type/{capa_source_type}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CapaSourceTypeController::edit
 * @see app/Http/Controllers/CapaSourceTypeController.php:48
 * @route '/capa-source-type/{capa_source_type}/edit'
 */
edit.url = (args: { capa_source_type: number | { id: number } } | [capa_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { capa_source_type: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { capa_source_type: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    capa_source_type: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        capa_source_type: typeof args.capa_source_type === 'object'
                ? args.capa_source_type.id
                : args.capa_source_type,
                }

    return edit.definition.url
            .replace('{capa_source_type}', parsedArgs.capa_source_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CapaSourceTypeController::edit
 * @see app/Http/Controllers/CapaSourceTypeController.php:48
 * @route '/capa-source-type/{capa_source_type}/edit'
 */
edit.get = (args: { capa_source_type: number | { id: number } } | [capa_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CapaSourceTypeController::edit
 * @see app/Http/Controllers/CapaSourceTypeController.php:48
 * @route '/capa-source-type/{capa_source_type}/edit'
 */
edit.head = (args: { capa_source_type: number | { id: number } } | [capa_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CapaSourceTypeController::edit
 * @see app/Http/Controllers/CapaSourceTypeController.php:48
 * @route '/capa-source-type/{capa_source_type}/edit'
 */
    const editForm = (args: { capa_source_type: number | { id: number } } | [capa_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CapaSourceTypeController::edit
 * @see app/Http/Controllers/CapaSourceTypeController.php:48
 * @route '/capa-source-type/{capa_source_type}/edit'
 */
        editForm.get = (args: { capa_source_type: number | { id: number } } | [capa_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CapaSourceTypeController::edit
 * @see app/Http/Controllers/CapaSourceTypeController.php:48
 * @route '/capa-source-type/{capa_source_type}/edit'
 */
        editForm.head = (args: { capa_source_type: number | { id: number } } | [capa_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\CapaSourceTypeController::update
 * @see app/Http/Controllers/CapaSourceTypeController.php:53
 * @route '/capa-source-type/{capa_source_type}'
 */
export const update = (args: { capa_source_type: number | { id: number } } | [capa_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/capa-source-type/{capa_source_type}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\CapaSourceTypeController::update
 * @see app/Http/Controllers/CapaSourceTypeController.php:53
 * @route '/capa-source-type/{capa_source_type}'
 */
update.url = (args: { capa_source_type: number | { id: number } } | [capa_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { capa_source_type: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { capa_source_type: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    capa_source_type: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        capa_source_type: typeof args.capa_source_type === 'object'
                ? args.capa_source_type.id
                : args.capa_source_type,
                }

    return update.definition.url
            .replace('{capa_source_type}', parsedArgs.capa_source_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CapaSourceTypeController::update
 * @see app/Http/Controllers/CapaSourceTypeController.php:53
 * @route '/capa-source-type/{capa_source_type}'
 */
update.put = (args: { capa_source_type: number | { id: number } } | [capa_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\CapaSourceTypeController::update
 * @see app/Http/Controllers/CapaSourceTypeController.php:53
 * @route '/capa-source-type/{capa_source_type}'
 */
update.patch = (args: { capa_source_type: number | { id: number } } | [capa_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\CapaSourceTypeController::update
 * @see app/Http/Controllers/CapaSourceTypeController.php:53
 * @route '/capa-source-type/{capa_source_type}'
 */
    const updateForm = (args: { capa_source_type: number | { id: number } } | [capa_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CapaSourceTypeController::update
 * @see app/Http/Controllers/CapaSourceTypeController.php:53
 * @route '/capa-source-type/{capa_source_type}'
 */
        updateForm.put = (args: { capa_source_type: number | { id: number } } | [capa_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\CapaSourceTypeController::update
 * @see app/Http/Controllers/CapaSourceTypeController.php:53
 * @route '/capa-source-type/{capa_source_type}'
 */
        updateForm.patch = (args: { capa_source_type: number | { id: number } } | [capa_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\CapaSourceTypeController::destroy
 * @see app/Http/Controllers/CapaSourceTypeController.php:62
 * @route '/capa-source-type/{capa_source_type}'
 */
export const destroy = (args: { capa_source_type: number | { id: number } } | [capa_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/capa-source-type/{capa_source_type}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\CapaSourceTypeController::destroy
 * @see app/Http/Controllers/CapaSourceTypeController.php:62
 * @route '/capa-source-type/{capa_source_type}'
 */
destroy.url = (args: { capa_source_type: number | { id: number } } | [capa_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { capa_source_type: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { capa_source_type: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    capa_source_type: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        capa_source_type: typeof args.capa_source_type === 'object'
                ? args.capa_source_type.id
                : args.capa_source_type,
                }

    return destroy.definition.url
            .replace('{capa_source_type}', parsedArgs.capa_source_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CapaSourceTypeController::destroy
 * @see app/Http/Controllers/CapaSourceTypeController.php:62
 * @route '/capa-source-type/{capa_source_type}'
 */
destroy.delete = (args: { capa_source_type: number | { id: number } } | [capa_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\CapaSourceTypeController::destroy
 * @see app/Http/Controllers/CapaSourceTypeController.php:62
 * @route '/capa-source-type/{capa_source_type}'
 */
    const destroyForm = (args: { capa_source_type: number | { id: number } } | [capa_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CapaSourceTypeController::destroy
 * @see app/Http/Controllers/CapaSourceTypeController.php:62
 * @route '/capa-source-type/{capa_source_type}'
 */
        destroyForm.delete = (args: { capa_source_type: number | { id: number } } | [capa_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const CapaSourceTypeController = { index, create, store, show, edit, update, destroy }

export default CapaSourceTypeController