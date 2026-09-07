import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\StandardController::index
 * @see app/Http/Controllers/StandardController.php:12
 * @route '/standard/search'
 */
const index6e3770cfb266f140e65baf407e5393fb = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: index6e3770cfb266f140e65baf407e5393fb.url(options),
    method: 'post',
})

index6e3770cfb266f140e65baf407e5393fb.definition = {
    methods: ["post"],
    url: '/standard/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\StandardController::index
 * @see app/Http/Controllers/StandardController.php:12
 * @route '/standard/search'
 */
index6e3770cfb266f140e65baf407e5393fb.url = (options?: RouteQueryOptions) => {
    return index6e3770cfb266f140e65baf407e5393fb.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\StandardController::index
 * @see app/Http/Controllers/StandardController.php:12
 * @route '/standard/search'
 */
index6e3770cfb266f140e65baf407e5393fb.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: index6e3770cfb266f140e65baf407e5393fb.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\StandardController::index
 * @see app/Http/Controllers/StandardController.php:12
 * @route '/standard/search'
 */
    const index6e3770cfb266f140e65baf407e5393fbForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: index6e3770cfb266f140e65baf407e5393fb.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\StandardController::index
 * @see app/Http/Controllers/StandardController.php:12
 * @route '/standard/search'
 */
        index6e3770cfb266f140e65baf407e5393fbForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: index6e3770cfb266f140e65baf407e5393fb.url(options),
            method: 'post',
        })
    
    index6e3770cfb266f140e65baf407e5393fb.form = index6e3770cfb266f140e65baf407e5393fbForm
    /**
* @see \App\Http\Controllers\StandardController::index
 * @see app/Http/Controllers/StandardController.php:12
 * @route '/standard'
 */
const indexb5221e5415208c171c8e486f0595576a = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexb5221e5415208c171c8e486f0595576a.url(options),
    method: 'get',
})

indexb5221e5415208c171c8e486f0595576a.definition = {
    methods: ["get","head"],
    url: '/standard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StandardController::index
 * @see app/Http/Controllers/StandardController.php:12
 * @route '/standard'
 */
indexb5221e5415208c171c8e486f0595576a.url = (options?: RouteQueryOptions) => {
    return indexb5221e5415208c171c8e486f0595576a.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\StandardController::index
 * @see app/Http/Controllers/StandardController.php:12
 * @route '/standard'
 */
indexb5221e5415208c171c8e486f0595576a.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexb5221e5415208c171c8e486f0595576a.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\StandardController::index
 * @see app/Http/Controllers/StandardController.php:12
 * @route '/standard'
 */
indexb5221e5415208c171c8e486f0595576a.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexb5221e5415208c171c8e486f0595576a.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\StandardController::index
 * @see app/Http/Controllers/StandardController.php:12
 * @route '/standard'
 */
    const indexb5221e5415208c171c8e486f0595576aForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: indexb5221e5415208c171c8e486f0595576a.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\StandardController::index
 * @see app/Http/Controllers/StandardController.php:12
 * @route '/standard'
 */
        indexb5221e5415208c171c8e486f0595576aForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexb5221e5415208c171c8e486f0595576a.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\StandardController::index
 * @see app/Http/Controllers/StandardController.php:12
 * @route '/standard'
 */
        indexb5221e5415208c171c8e486f0595576aForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexb5221e5415208c171c8e486f0595576a.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    indexb5221e5415208c171c8e486f0595576a.form = indexb5221e5415208c171c8e486f0595576aForm

/**
* Multiple routes resolve to \App\Http\Controllers\StandardController::index, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `index['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const index = {
    '/standard/search': index6e3770cfb266f140e65baf407e5393fb,
    '/standard': indexb5221e5415208c171c8e486f0595576a,
}

/**
* @see \App\Http\Controllers\StandardController::create
 * @see app/Http/Controllers/StandardController.php:24
 * @route '/standard/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/standard/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StandardController::create
 * @see app/Http/Controllers/StandardController.php:24
 * @route '/standard/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\StandardController::create
 * @see app/Http/Controllers/StandardController.php:24
 * @route '/standard/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\StandardController::create
 * @see app/Http/Controllers/StandardController.php:24
 * @route '/standard/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\StandardController::create
 * @see app/Http/Controllers/StandardController.php:24
 * @route '/standard/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\StandardController::create
 * @see app/Http/Controllers/StandardController.php:24
 * @route '/standard/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\StandardController::create
 * @see app/Http/Controllers/StandardController.php:24
 * @route '/standard/create'
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
* @see \App\Http\Controllers\StandardController::store
 * @see app/Http/Controllers/StandardController.php:29
 * @route '/standard'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/standard',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\StandardController::store
 * @see app/Http/Controllers/StandardController.php:29
 * @route '/standard'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\StandardController::store
 * @see app/Http/Controllers/StandardController.php:29
 * @route '/standard'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\StandardController::store
 * @see app/Http/Controllers/StandardController.php:29
 * @route '/standard'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\StandardController::store
 * @see app/Http/Controllers/StandardController.php:29
 * @route '/standard'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\StandardController::show
 * @see app/Http/Controllers/StandardController.php:38
 * @route '/standard/{standard}'
 */
export const show = (args: { standard: string | number | { id: string | number } } | [standard: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/standard/{standard}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StandardController::show
 * @see app/Http/Controllers/StandardController.php:38
 * @route '/standard/{standard}'
 */
show.url = (args: { standard: string | number | { id: string | number } } | [standard: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { standard: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { standard: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    standard: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        standard: typeof args.standard === 'object'
                ? args.standard.id
                : args.standard,
                }

    return show.definition.url
            .replace('{standard}', parsedArgs.standard.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\StandardController::show
 * @see app/Http/Controllers/StandardController.php:38
 * @route '/standard/{standard}'
 */
show.get = (args: { standard: string | number | { id: string | number } } | [standard: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\StandardController::show
 * @see app/Http/Controllers/StandardController.php:38
 * @route '/standard/{standard}'
 */
show.head = (args: { standard: string | number | { id: string | number } } | [standard: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\StandardController::show
 * @see app/Http/Controllers/StandardController.php:38
 * @route '/standard/{standard}'
 */
    const showForm = (args: { standard: string | number | { id: string | number } } | [standard: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\StandardController::show
 * @see app/Http/Controllers/StandardController.php:38
 * @route '/standard/{standard}'
 */
        showForm.get = (args: { standard: string | number | { id: string | number } } | [standard: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\StandardController::show
 * @see app/Http/Controllers/StandardController.php:38
 * @route '/standard/{standard}'
 */
        showForm.head = (args: { standard: string | number | { id: string | number } } | [standard: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\StandardController::edit
 * @see app/Http/Controllers/StandardController.php:43
 * @route '/standard/{standard}/edit'
 */
export const edit = (args: { standard: string | number | { id: string | number } } | [standard: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/standard/{standard}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StandardController::edit
 * @see app/Http/Controllers/StandardController.php:43
 * @route '/standard/{standard}/edit'
 */
edit.url = (args: { standard: string | number | { id: string | number } } | [standard: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { standard: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { standard: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    standard: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        standard: typeof args.standard === 'object'
                ? args.standard.id
                : args.standard,
                }

    return edit.definition.url
            .replace('{standard}', parsedArgs.standard.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\StandardController::edit
 * @see app/Http/Controllers/StandardController.php:43
 * @route '/standard/{standard}/edit'
 */
edit.get = (args: { standard: string | number | { id: string | number } } | [standard: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\StandardController::edit
 * @see app/Http/Controllers/StandardController.php:43
 * @route '/standard/{standard}/edit'
 */
edit.head = (args: { standard: string | number | { id: string | number } } | [standard: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\StandardController::edit
 * @see app/Http/Controllers/StandardController.php:43
 * @route '/standard/{standard}/edit'
 */
    const editForm = (args: { standard: string | number | { id: string | number } } | [standard: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\StandardController::edit
 * @see app/Http/Controllers/StandardController.php:43
 * @route '/standard/{standard}/edit'
 */
        editForm.get = (args: { standard: string | number | { id: string | number } } | [standard: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\StandardController::edit
 * @see app/Http/Controllers/StandardController.php:43
 * @route '/standard/{standard}/edit'
 */
        editForm.head = (args: { standard: string | number | { id: string | number } } | [standard: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\StandardController::update
 * @see app/Http/Controllers/StandardController.php:48
 * @route '/standard/{standard}'
 */
export const update = (args: { standard: string | number | { id: string | number } } | [standard: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/standard/{standard}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\StandardController::update
 * @see app/Http/Controllers/StandardController.php:48
 * @route '/standard/{standard}'
 */
update.url = (args: { standard: string | number | { id: string | number } } | [standard: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { standard: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { standard: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    standard: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        standard: typeof args.standard === 'object'
                ? args.standard.id
                : args.standard,
                }

    return update.definition.url
            .replace('{standard}', parsedArgs.standard.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\StandardController::update
 * @see app/Http/Controllers/StandardController.php:48
 * @route '/standard/{standard}'
 */
update.put = (args: { standard: string | number | { id: string | number } } | [standard: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\StandardController::update
 * @see app/Http/Controllers/StandardController.php:48
 * @route '/standard/{standard}'
 */
update.patch = (args: { standard: string | number | { id: string | number } } | [standard: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\StandardController::update
 * @see app/Http/Controllers/StandardController.php:48
 * @route '/standard/{standard}'
 */
    const updateForm = (args: { standard: string | number | { id: string | number } } | [standard: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\StandardController::update
 * @see app/Http/Controllers/StandardController.php:48
 * @route '/standard/{standard}'
 */
        updateForm.put = (args: { standard: string | number | { id: string | number } } | [standard: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\StandardController::update
 * @see app/Http/Controllers/StandardController.php:48
 * @route '/standard/{standard}'
 */
        updateForm.patch = (args: { standard: string | number | { id: string | number } } | [standard: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\StandardController::destroy
 * @see app/Http/Controllers/StandardController.php:57
 * @route '/standard/{standard}'
 */
export const destroy = (args: { standard: string | number | { id: string | number } } | [standard: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/standard/{standard}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\StandardController::destroy
 * @see app/Http/Controllers/StandardController.php:57
 * @route '/standard/{standard}'
 */
destroy.url = (args: { standard: string | number | { id: string | number } } | [standard: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { standard: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { standard: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    standard: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        standard: typeof args.standard === 'object'
                ? args.standard.id
                : args.standard,
                }

    return destroy.definition.url
            .replace('{standard}', parsedArgs.standard.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\StandardController::destroy
 * @see app/Http/Controllers/StandardController.php:57
 * @route '/standard/{standard}'
 */
destroy.delete = (args: { standard: string | number | { id: string | number } } | [standard: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\StandardController::destroy
 * @see app/Http/Controllers/StandardController.php:57
 * @route '/standard/{standard}'
 */
    const destroyForm = (args: { standard: string | number | { id: string | number } } | [standard: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\StandardController::destroy
 * @see app/Http/Controllers/StandardController.php:57
 * @route '/standard/{standard}'
 */
        destroyForm.delete = (args: { standard: string | number | { id: string | number } } | [standard: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const StandardController = { index, create, store, show, edit, update, destroy }

export default StandardController