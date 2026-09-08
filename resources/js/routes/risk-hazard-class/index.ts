import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\RiskHazardClassController::search
 * @see app/Http/Controllers/RiskHazardClassController.php:13
 * @route '/risk-hazard-class/search'
 */
export const search = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: search.url(options),
    method: 'post',
})

search.definition = {
    methods: ["post"],
    url: '/risk-hazard-class/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\RiskHazardClassController::search
 * @see app/Http/Controllers/RiskHazardClassController.php:13
 * @route '/risk-hazard-class/search'
 */
search.url = (options?: RouteQueryOptions) => {
    return search.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\RiskHazardClassController::search
 * @see app/Http/Controllers/RiskHazardClassController.php:13
 * @route '/risk-hazard-class/search'
 */
search.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: search.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\RiskHazardClassController::search
 * @see app/Http/Controllers/RiskHazardClassController.php:13
 * @route '/risk-hazard-class/search'
 */
    const searchForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: search.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\RiskHazardClassController::search
 * @see app/Http/Controllers/RiskHazardClassController.php:13
 * @route '/risk-hazard-class/search'
 */
        searchForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: search.url(options),
            method: 'post',
        })
    
    search.form = searchForm
/**
* @see \App\Http\Controllers\RiskHazardClassController::index
 * @see app/Http/Controllers/RiskHazardClassController.php:13
 * @route '/risk-hazard-class'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/risk-hazard-class',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\RiskHazardClassController::index
 * @see app/Http/Controllers/RiskHazardClassController.php:13
 * @route '/risk-hazard-class'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\RiskHazardClassController::index
 * @see app/Http/Controllers/RiskHazardClassController.php:13
 * @route '/risk-hazard-class'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\RiskHazardClassController::index
 * @see app/Http/Controllers/RiskHazardClassController.php:13
 * @route '/risk-hazard-class'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\RiskHazardClassController::index
 * @see app/Http/Controllers/RiskHazardClassController.php:13
 * @route '/risk-hazard-class'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\RiskHazardClassController::index
 * @see app/Http/Controllers/RiskHazardClassController.php:13
 * @route '/risk-hazard-class'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\RiskHazardClassController::index
 * @see app/Http/Controllers/RiskHazardClassController.php:13
 * @route '/risk-hazard-class'
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
* @see \App\Http\Controllers\RiskHazardClassController::create
 * @see app/Http/Controllers/RiskHazardClassController.php:25
 * @route '/risk-hazard-class/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/risk-hazard-class/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\RiskHazardClassController::create
 * @see app/Http/Controllers/RiskHazardClassController.php:25
 * @route '/risk-hazard-class/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\RiskHazardClassController::create
 * @see app/Http/Controllers/RiskHazardClassController.php:25
 * @route '/risk-hazard-class/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\RiskHazardClassController::create
 * @see app/Http/Controllers/RiskHazardClassController.php:25
 * @route '/risk-hazard-class/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\RiskHazardClassController::create
 * @see app/Http/Controllers/RiskHazardClassController.php:25
 * @route '/risk-hazard-class/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\RiskHazardClassController::create
 * @see app/Http/Controllers/RiskHazardClassController.php:25
 * @route '/risk-hazard-class/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\RiskHazardClassController::create
 * @see app/Http/Controllers/RiskHazardClassController.php:25
 * @route '/risk-hazard-class/create'
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
* @see \App\Http\Controllers\RiskHazardClassController::store
 * @see app/Http/Controllers/RiskHazardClassController.php:30
 * @route '/risk-hazard-class'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/risk-hazard-class',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\RiskHazardClassController::store
 * @see app/Http/Controllers/RiskHazardClassController.php:30
 * @route '/risk-hazard-class'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\RiskHazardClassController::store
 * @see app/Http/Controllers/RiskHazardClassController.php:30
 * @route '/risk-hazard-class'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\RiskHazardClassController::store
 * @see app/Http/Controllers/RiskHazardClassController.php:30
 * @route '/risk-hazard-class'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\RiskHazardClassController::store
 * @see app/Http/Controllers/RiskHazardClassController.php:30
 * @route '/risk-hazard-class'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\RiskHazardClassController::show
 * @see app/Http/Controllers/RiskHazardClassController.php:43
 * @route '/risk-hazard-class/{risk_hazard_class}'
 */
export const show = (args: { risk_hazard_class: number | { id: number } } | [risk_hazard_class: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/risk-hazard-class/{risk_hazard_class}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\RiskHazardClassController::show
 * @see app/Http/Controllers/RiskHazardClassController.php:43
 * @route '/risk-hazard-class/{risk_hazard_class}'
 */
show.url = (args: { risk_hazard_class: number | { id: number } } | [risk_hazard_class: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { risk_hazard_class: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { risk_hazard_class: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    risk_hazard_class: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        risk_hazard_class: typeof args.risk_hazard_class === 'object'
                ? args.risk_hazard_class.id
                : args.risk_hazard_class,
                }

    return show.definition.url
            .replace('{risk_hazard_class}', parsedArgs.risk_hazard_class.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\RiskHazardClassController::show
 * @see app/Http/Controllers/RiskHazardClassController.php:43
 * @route '/risk-hazard-class/{risk_hazard_class}'
 */
show.get = (args: { risk_hazard_class: number | { id: number } } | [risk_hazard_class: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\RiskHazardClassController::show
 * @see app/Http/Controllers/RiskHazardClassController.php:43
 * @route '/risk-hazard-class/{risk_hazard_class}'
 */
show.head = (args: { risk_hazard_class: number | { id: number } } | [risk_hazard_class: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\RiskHazardClassController::show
 * @see app/Http/Controllers/RiskHazardClassController.php:43
 * @route '/risk-hazard-class/{risk_hazard_class}'
 */
    const showForm = (args: { risk_hazard_class: number | { id: number } } | [risk_hazard_class: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\RiskHazardClassController::show
 * @see app/Http/Controllers/RiskHazardClassController.php:43
 * @route '/risk-hazard-class/{risk_hazard_class}'
 */
        showForm.get = (args: { risk_hazard_class: number | { id: number } } | [risk_hazard_class: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\RiskHazardClassController::show
 * @see app/Http/Controllers/RiskHazardClassController.php:43
 * @route '/risk-hazard-class/{risk_hazard_class}'
 */
        showForm.head = (args: { risk_hazard_class: number | { id: number } } | [risk_hazard_class: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\RiskHazardClassController::edit
 * @see app/Http/Controllers/RiskHazardClassController.php:48
 * @route '/risk-hazard-class/{risk_hazard_class}/edit'
 */
export const edit = (args: { risk_hazard_class: number | { id: number } } | [risk_hazard_class: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/risk-hazard-class/{risk_hazard_class}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\RiskHazardClassController::edit
 * @see app/Http/Controllers/RiskHazardClassController.php:48
 * @route '/risk-hazard-class/{risk_hazard_class}/edit'
 */
edit.url = (args: { risk_hazard_class: number | { id: number } } | [risk_hazard_class: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { risk_hazard_class: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { risk_hazard_class: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    risk_hazard_class: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        risk_hazard_class: typeof args.risk_hazard_class === 'object'
                ? args.risk_hazard_class.id
                : args.risk_hazard_class,
                }

    return edit.definition.url
            .replace('{risk_hazard_class}', parsedArgs.risk_hazard_class.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\RiskHazardClassController::edit
 * @see app/Http/Controllers/RiskHazardClassController.php:48
 * @route '/risk-hazard-class/{risk_hazard_class}/edit'
 */
edit.get = (args: { risk_hazard_class: number | { id: number } } | [risk_hazard_class: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\RiskHazardClassController::edit
 * @see app/Http/Controllers/RiskHazardClassController.php:48
 * @route '/risk-hazard-class/{risk_hazard_class}/edit'
 */
edit.head = (args: { risk_hazard_class: number | { id: number } } | [risk_hazard_class: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\RiskHazardClassController::edit
 * @see app/Http/Controllers/RiskHazardClassController.php:48
 * @route '/risk-hazard-class/{risk_hazard_class}/edit'
 */
    const editForm = (args: { risk_hazard_class: number | { id: number } } | [risk_hazard_class: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\RiskHazardClassController::edit
 * @see app/Http/Controllers/RiskHazardClassController.php:48
 * @route '/risk-hazard-class/{risk_hazard_class}/edit'
 */
        editForm.get = (args: { risk_hazard_class: number | { id: number } } | [risk_hazard_class: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\RiskHazardClassController::edit
 * @see app/Http/Controllers/RiskHazardClassController.php:48
 * @route '/risk-hazard-class/{risk_hazard_class}/edit'
 */
        editForm.head = (args: { risk_hazard_class: number | { id: number } } | [risk_hazard_class: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\RiskHazardClassController::update
 * @see app/Http/Controllers/RiskHazardClassController.php:53
 * @route '/risk-hazard-class/{risk_hazard_class}'
 */
export const update = (args: { risk_hazard_class: number | { id: number } } | [risk_hazard_class: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/risk-hazard-class/{risk_hazard_class}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\RiskHazardClassController::update
 * @see app/Http/Controllers/RiskHazardClassController.php:53
 * @route '/risk-hazard-class/{risk_hazard_class}'
 */
update.url = (args: { risk_hazard_class: number | { id: number } } | [risk_hazard_class: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { risk_hazard_class: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { risk_hazard_class: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    risk_hazard_class: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        risk_hazard_class: typeof args.risk_hazard_class === 'object'
                ? args.risk_hazard_class.id
                : args.risk_hazard_class,
                }

    return update.definition.url
            .replace('{risk_hazard_class}', parsedArgs.risk_hazard_class.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\RiskHazardClassController::update
 * @see app/Http/Controllers/RiskHazardClassController.php:53
 * @route '/risk-hazard-class/{risk_hazard_class}'
 */
update.put = (args: { risk_hazard_class: number | { id: number } } | [risk_hazard_class: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\RiskHazardClassController::update
 * @see app/Http/Controllers/RiskHazardClassController.php:53
 * @route '/risk-hazard-class/{risk_hazard_class}'
 */
update.patch = (args: { risk_hazard_class: number | { id: number } } | [risk_hazard_class: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\RiskHazardClassController::update
 * @see app/Http/Controllers/RiskHazardClassController.php:53
 * @route '/risk-hazard-class/{risk_hazard_class}'
 */
    const updateForm = (args: { risk_hazard_class: number | { id: number } } | [risk_hazard_class: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\RiskHazardClassController::update
 * @see app/Http/Controllers/RiskHazardClassController.php:53
 * @route '/risk-hazard-class/{risk_hazard_class}'
 */
        updateForm.put = (args: { risk_hazard_class: number | { id: number } } | [risk_hazard_class: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\RiskHazardClassController::update
 * @see app/Http/Controllers/RiskHazardClassController.php:53
 * @route '/risk-hazard-class/{risk_hazard_class}'
 */
        updateForm.patch = (args: { risk_hazard_class: number | { id: number } } | [risk_hazard_class: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\RiskHazardClassController::destroy
 * @see app/Http/Controllers/RiskHazardClassController.php:62
 * @route '/risk-hazard-class/{risk_hazard_class}'
 */
export const destroy = (args: { risk_hazard_class: number | { id: number } } | [risk_hazard_class: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/risk-hazard-class/{risk_hazard_class}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\RiskHazardClassController::destroy
 * @see app/Http/Controllers/RiskHazardClassController.php:62
 * @route '/risk-hazard-class/{risk_hazard_class}'
 */
destroy.url = (args: { risk_hazard_class: number | { id: number } } | [risk_hazard_class: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { risk_hazard_class: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { risk_hazard_class: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    risk_hazard_class: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        risk_hazard_class: typeof args.risk_hazard_class === 'object'
                ? args.risk_hazard_class.id
                : args.risk_hazard_class,
                }

    return destroy.definition.url
            .replace('{risk_hazard_class}', parsedArgs.risk_hazard_class.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\RiskHazardClassController::destroy
 * @see app/Http/Controllers/RiskHazardClassController.php:62
 * @route '/risk-hazard-class/{risk_hazard_class}'
 */
destroy.delete = (args: { risk_hazard_class: number | { id: number } } | [risk_hazard_class: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\RiskHazardClassController::destroy
 * @see app/Http/Controllers/RiskHazardClassController.php:62
 * @route '/risk-hazard-class/{risk_hazard_class}'
 */
    const destroyForm = (args: { risk_hazard_class: number | { id: number } } | [risk_hazard_class: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\RiskHazardClassController::destroy
 * @see app/Http/Controllers/RiskHazardClassController.php:62
 * @route '/risk-hazard-class/{risk_hazard_class}'
 */
        destroyForm.delete = (args: { risk_hazard_class: number | { id: number } } | [risk_hazard_class: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const riskHazardClass = {
    search: Object.assign(search, search),
index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default riskHazardClass