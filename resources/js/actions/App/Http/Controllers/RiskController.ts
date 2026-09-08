import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\RiskController::index
 * @see app/Http/Controllers/RiskController.php:21
 * @route '/risk/search'
 */
const index7156e9d9959f8c31256ec0aed5e30ee2 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: index7156e9d9959f8c31256ec0aed5e30ee2.url(options),
    method: 'post',
})

index7156e9d9959f8c31256ec0aed5e30ee2.definition = {
    methods: ["post"],
    url: '/risk/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\RiskController::index
 * @see app/Http/Controllers/RiskController.php:21
 * @route '/risk/search'
 */
index7156e9d9959f8c31256ec0aed5e30ee2.url = (options?: RouteQueryOptions) => {
    return index7156e9d9959f8c31256ec0aed5e30ee2.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\RiskController::index
 * @see app/Http/Controllers/RiskController.php:21
 * @route '/risk/search'
 */
index7156e9d9959f8c31256ec0aed5e30ee2.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: index7156e9d9959f8c31256ec0aed5e30ee2.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\RiskController::index
 * @see app/Http/Controllers/RiskController.php:21
 * @route '/risk/search'
 */
    const index7156e9d9959f8c31256ec0aed5e30ee2Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: index7156e9d9959f8c31256ec0aed5e30ee2.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\RiskController::index
 * @see app/Http/Controllers/RiskController.php:21
 * @route '/risk/search'
 */
        index7156e9d9959f8c31256ec0aed5e30ee2Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: index7156e9d9959f8c31256ec0aed5e30ee2.url(options),
            method: 'post',
        })
    
    index7156e9d9959f8c31256ec0aed5e30ee2.form = index7156e9d9959f8c31256ec0aed5e30ee2Form
    /**
* @see \App\Http\Controllers\RiskController::index
 * @see app/Http/Controllers/RiskController.php:21
 * @route '/risk'
 */
const indexe0011204873a03a9aa68b67ed70ffe8c = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexe0011204873a03a9aa68b67ed70ffe8c.url(options),
    method: 'get',
})

indexe0011204873a03a9aa68b67ed70ffe8c.definition = {
    methods: ["get","head"],
    url: '/risk',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\RiskController::index
 * @see app/Http/Controllers/RiskController.php:21
 * @route '/risk'
 */
indexe0011204873a03a9aa68b67ed70ffe8c.url = (options?: RouteQueryOptions) => {
    return indexe0011204873a03a9aa68b67ed70ffe8c.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\RiskController::index
 * @see app/Http/Controllers/RiskController.php:21
 * @route '/risk'
 */
indexe0011204873a03a9aa68b67ed70ffe8c.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexe0011204873a03a9aa68b67ed70ffe8c.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\RiskController::index
 * @see app/Http/Controllers/RiskController.php:21
 * @route '/risk'
 */
indexe0011204873a03a9aa68b67ed70ffe8c.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexe0011204873a03a9aa68b67ed70ffe8c.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\RiskController::index
 * @see app/Http/Controllers/RiskController.php:21
 * @route '/risk'
 */
    const indexe0011204873a03a9aa68b67ed70ffe8cForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: indexe0011204873a03a9aa68b67ed70ffe8c.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\RiskController::index
 * @see app/Http/Controllers/RiskController.php:21
 * @route '/risk'
 */
        indexe0011204873a03a9aa68b67ed70ffe8cForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexe0011204873a03a9aa68b67ed70ffe8c.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\RiskController::index
 * @see app/Http/Controllers/RiskController.php:21
 * @route '/risk'
 */
        indexe0011204873a03a9aa68b67ed70ffe8cForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexe0011204873a03a9aa68b67ed70ffe8c.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    indexe0011204873a03a9aa68b67ed70ffe8c.form = indexe0011204873a03a9aa68b67ed70ffe8cForm

/**
* Multiple routes resolve to \App\Http\Controllers\RiskController::index, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `index['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const index = {
    '/risk/search': index7156e9d9959f8c31256ec0aed5e30ee2,
    '/risk': indexe0011204873a03a9aa68b67ed70ffe8c,
}

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
const RiskController = { index, create, store, show, edit, update, destroy }

export default RiskController