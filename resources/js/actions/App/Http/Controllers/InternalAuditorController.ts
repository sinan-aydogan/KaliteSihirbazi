import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\InternalAuditorController::index
 * @see app/Http/Controllers/InternalAuditorController.php:14
 * @route '/internal-auditor/search'
 */
const index2553a924024825743fa09d30f0769d46 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: index2553a924024825743fa09d30f0769d46.url(options),
    method: 'post',
})

index2553a924024825743fa09d30f0769d46.definition = {
    methods: ["post"],
    url: '/internal-auditor/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\InternalAuditorController::index
 * @see app/Http/Controllers/InternalAuditorController.php:14
 * @route '/internal-auditor/search'
 */
index2553a924024825743fa09d30f0769d46.url = (options?: RouteQueryOptions) => {
    return index2553a924024825743fa09d30f0769d46.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\InternalAuditorController::index
 * @see app/Http/Controllers/InternalAuditorController.php:14
 * @route '/internal-auditor/search'
 */
index2553a924024825743fa09d30f0769d46.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: index2553a924024825743fa09d30f0769d46.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\InternalAuditorController::index
 * @see app/Http/Controllers/InternalAuditorController.php:14
 * @route '/internal-auditor/search'
 */
    const index2553a924024825743fa09d30f0769d46Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: index2553a924024825743fa09d30f0769d46.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\InternalAuditorController::index
 * @see app/Http/Controllers/InternalAuditorController.php:14
 * @route '/internal-auditor/search'
 */
        index2553a924024825743fa09d30f0769d46Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: index2553a924024825743fa09d30f0769d46.url(options),
            method: 'post',
        })
    
    index2553a924024825743fa09d30f0769d46.form = index2553a924024825743fa09d30f0769d46Form
    /**
* @see \App\Http\Controllers\InternalAuditorController::index
 * @see app/Http/Controllers/InternalAuditorController.php:14
 * @route '/internal-auditor'
 */
const index938ac2f87419ea35aa9980fd67cb9458 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index938ac2f87419ea35aa9980fd67cb9458.url(options),
    method: 'get',
})

index938ac2f87419ea35aa9980fd67cb9458.definition = {
    methods: ["get","head"],
    url: '/internal-auditor',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\InternalAuditorController::index
 * @see app/Http/Controllers/InternalAuditorController.php:14
 * @route '/internal-auditor'
 */
index938ac2f87419ea35aa9980fd67cb9458.url = (options?: RouteQueryOptions) => {
    return index938ac2f87419ea35aa9980fd67cb9458.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\InternalAuditorController::index
 * @see app/Http/Controllers/InternalAuditorController.php:14
 * @route '/internal-auditor'
 */
index938ac2f87419ea35aa9980fd67cb9458.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index938ac2f87419ea35aa9980fd67cb9458.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\InternalAuditorController::index
 * @see app/Http/Controllers/InternalAuditorController.php:14
 * @route '/internal-auditor'
 */
index938ac2f87419ea35aa9980fd67cb9458.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index938ac2f87419ea35aa9980fd67cb9458.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\InternalAuditorController::index
 * @see app/Http/Controllers/InternalAuditorController.php:14
 * @route '/internal-auditor'
 */
    const index938ac2f87419ea35aa9980fd67cb9458Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index938ac2f87419ea35aa9980fd67cb9458.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\InternalAuditorController::index
 * @see app/Http/Controllers/InternalAuditorController.php:14
 * @route '/internal-auditor'
 */
        index938ac2f87419ea35aa9980fd67cb9458Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index938ac2f87419ea35aa9980fd67cb9458.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\InternalAuditorController::index
 * @see app/Http/Controllers/InternalAuditorController.php:14
 * @route '/internal-auditor'
 */
        index938ac2f87419ea35aa9980fd67cb9458Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index938ac2f87419ea35aa9980fd67cb9458.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index938ac2f87419ea35aa9980fd67cb9458.form = index938ac2f87419ea35aa9980fd67cb9458Form

/**
* Multiple routes resolve to \App\Http\Controllers\InternalAuditorController::index, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `index['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const index = {
    '/internal-auditor/search': index2553a924024825743fa09d30f0769d46,
    '/internal-auditor': index938ac2f87419ea35aa9980fd67cb9458,
}

/**
* @see \App\Http\Controllers\InternalAuditorController::create
 * @see app/Http/Controllers/InternalAuditorController.php:28
 * @route '/internal-auditor/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/internal-auditor/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\InternalAuditorController::create
 * @see app/Http/Controllers/InternalAuditorController.php:28
 * @route '/internal-auditor/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\InternalAuditorController::create
 * @see app/Http/Controllers/InternalAuditorController.php:28
 * @route '/internal-auditor/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\InternalAuditorController::create
 * @see app/Http/Controllers/InternalAuditorController.php:28
 * @route '/internal-auditor/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\InternalAuditorController::create
 * @see app/Http/Controllers/InternalAuditorController.php:28
 * @route '/internal-auditor/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\InternalAuditorController::create
 * @see app/Http/Controllers/InternalAuditorController.php:28
 * @route '/internal-auditor/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\InternalAuditorController::create
 * @see app/Http/Controllers/InternalAuditorController.php:28
 * @route '/internal-auditor/create'
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
* @see \App\Http\Controllers\InternalAuditorController::store
 * @see app/Http/Controllers/InternalAuditorController.php:33
 * @route '/internal-auditor'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/internal-auditor',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\InternalAuditorController::store
 * @see app/Http/Controllers/InternalAuditorController.php:33
 * @route '/internal-auditor'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\InternalAuditorController::store
 * @see app/Http/Controllers/InternalAuditorController.php:33
 * @route '/internal-auditor'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\InternalAuditorController::store
 * @see app/Http/Controllers/InternalAuditorController.php:33
 * @route '/internal-auditor'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\InternalAuditorController::store
 * @see app/Http/Controllers/InternalAuditorController.php:33
 * @route '/internal-auditor'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\InternalAuditorController::show
 * @see app/Http/Controllers/InternalAuditorController.php:43
 * @route '/internal-auditor/{internal_auditor}'
 */
export const show = (args: { internal_auditor: number | { id: number } } | [internal_auditor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/internal-auditor/{internal_auditor}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\InternalAuditorController::show
 * @see app/Http/Controllers/InternalAuditorController.php:43
 * @route '/internal-auditor/{internal_auditor}'
 */
show.url = (args: { internal_auditor: number | { id: number } } | [internal_auditor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { internal_auditor: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { internal_auditor: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    internal_auditor: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        internal_auditor: typeof args.internal_auditor === 'object'
                ? args.internal_auditor.id
                : args.internal_auditor,
                }

    return show.definition.url
            .replace('{internal_auditor}', parsedArgs.internal_auditor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\InternalAuditorController::show
 * @see app/Http/Controllers/InternalAuditorController.php:43
 * @route '/internal-auditor/{internal_auditor}'
 */
show.get = (args: { internal_auditor: number | { id: number } } | [internal_auditor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\InternalAuditorController::show
 * @see app/Http/Controllers/InternalAuditorController.php:43
 * @route '/internal-auditor/{internal_auditor}'
 */
show.head = (args: { internal_auditor: number | { id: number } } | [internal_auditor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\InternalAuditorController::show
 * @see app/Http/Controllers/InternalAuditorController.php:43
 * @route '/internal-auditor/{internal_auditor}'
 */
    const showForm = (args: { internal_auditor: number | { id: number } } | [internal_auditor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\InternalAuditorController::show
 * @see app/Http/Controllers/InternalAuditorController.php:43
 * @route '/internal-auditor/{internal_auditor}'
 */
        showForm.get = (args: { internal_auditor: number | { id: number } } | [internal_auditor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\InternalAuditorController::show
 * @see app/Http/Controllers/InternalAuditorController.php:43
 * @route '/internal-auditor/{internal_auditor}'
 */
        showForm.head = (args: { internal_auditor: number | { id: number } } | [internal_auditor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\InternalAuditorController::edit
 * @see app/Http/Controllers/InternalAuditorController.php:48
 * @route '/internal-auditor/{internal_auditor}/edit'
 */
export const edit = (args: { internal_auditor: number | { id: number } } | [internal_auditor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/internal-auditor/{internal_auditor}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\InternalAuditorController::edit
 * @see app/Http/Controllers/InternalAuditorController.php:48
 * @route '/internal-auditor/{internal_auditor}/edit'
 */
edit.url = (args: { internal_auditor: number | { id: number } } | [internal_auditor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { internal_auditor: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { internal_auditor: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    internal_auditor: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        internal_auditor: typeof args.internal_auditor === 'object'
                ? args.internal_auditor.id
                : args.internal_auditor,
                }

    return edit.definition.url
            .replace('{internal_auditor}', parsedArgs.internal_auditor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\InternalAuditorController::edit
 * @see app/Http/Controllers/InternalAuditorController.php:48
 * @route '/internal-auditor/{internal_auditor}/edit'
 */
edit.get = (args: { internal_auditor: number | { id: number } } | [internal_auditor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\InternalAuditorController::edit
 * @see app/Http/Controllers/InternalAuditorController.php:48
 * @route '/internal-auditor/{internal_auditor}/edit'
 */
edit.head = (args: { internal_auditor: number | { id: number } } | [internal_auditor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\InternalAuditorController::edit
 * @see app/Http/Controllers/InternalAuditorController.php:48
 * @route '/internal-auditor/{internal_auditor}/edit'
 */
    const editForm = (args: { internal_auditor: number | { id: number } } | [internal_auditor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\InternalAuditorController::edit
 * @see app/Http/Controllers/InternalAuditorController.php:48
 * @route '/internal-auditor/{internal_auditor}/edit'
 */
        editForm.get = (args: { internal_auditor: number | { id: number } } | [internal_auditor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\InternalAuditorController::edit
 * @see app/Http/Controllers/InternalAuditorController.php:48
 * @route '/internal-auditor/{internal_auditor}/edit'
 */
        editForm.head = (args: { internal_auditor: number | { id: number } } | [internal_auditor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\InternalAuditorController::update
 * @see app/Http/Controllers/InternalAuditorController.php:53
 * @route '/internal-auditor/{internal_auditor}'
 */
export const update = (args: { internal_auditor: number | { id: number } } | [internal_auditor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/internal-auditor/{internal_auditor}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\InternalAuditorController::update
 * @see app/Http/Controllers/InternalAuditorController.php:53
 * @route '/internal-auditor/{internal_auditor}'
 */
update.url = (args: { internal_auditor: number | { id: number } } | [internal_auditor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { internal_auditor: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { internal_auditor: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    internal_auditor: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        internal_auditor: typeof args.internal_auditor === 'object'
                ? args.internal_auditor.id
                : args.internal_auditor,
                }

    return update.definition.url
            .replace('{internal_auditor}', parsedArgs.internal_auditor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\InternalAuditorController::update
 * @see app/Http/Controllers/InternalAuditorController.php:53
 * @route '/internal-auditor/{internal_auditor}'
 */
update.put = (args: { internal_auditor: number | { id: number } } | [internal_auditor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\InternalAuditorController::update
 * @see app/Http/Controllers/InternalAuditorController.php:53
 * @route '/internal-auditor/{internal_auditor}'
 */
update.patch = (args: { internal_auditor: number | { id: number } } | [internal_auditor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\InternalAuditorController::update
 * @see app/Http/Controllers/InternalAuditorController.php:53
 * @route '/internal-auditor/{internal_auditor}'
 */
    const updateForm = (args: { internal_auditor: number | { id: number } } | [internal_auditor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\InternalAuditorController::update
 * @see app/Http/Controllers/InternalAuditorController.php:53
 * @route '/internal-auditor/{internal_auditor}'
 */
        updateForm.put = (args: { internal_auditor: number | { id: number } } | [internal_auditor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\InternalAuditorController::update
 * @see app/Http/Controllers/InternalAuditorController.php:53
 * @route '/internal-auditor/{internal_auditor}'
 */
        updateForm.patch = (args: { internal_auditor: number | { id: number } } | [internal_auditor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\InternalAuditorController::destroy
 * @see app/Http/Controllers/InternalAuditorController.php:63
 * @route '/internal-auditor/{internal_auditor}'
 */
export const destroy = (args: { internal_auditor: number | { id: number } } | [internal_auditor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/internal-auditor/{internal_auditor}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\InternalAuditorController::destroy
 * @see app/Http/Controllers/InternalAuditorController.php:63
 * @route '/internal-auditor/{internal_auditor}'
 */
destroy.url = (args: { internal_auditor: number | { id: number } } | [internal_auditor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { internal_auditor: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { internal_auditor: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    internal_auditor: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        internal_auditor: typeof args.internal_auditor === 'object'
                ? args.internal_auditor.id
                : args.internal_auditor,
                }

    return destroy.definition.url
            .replace('{internal_auditor}', parsedArgs.internal_auditor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\InternalAuditorController::destroy
 * @see app/Http/Controllers/InternalAuditorController.php:63
 * @route '/internal-auditor/{internal_auditor}'
 */
destroy.delete = (args: { internal_auditor: number | { id: number } } | [internal_auditor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\InternalAuditorController::destroy
 * @see app/Http/Controllers/InternalAuditorController.php:63
 * @route '/internal-auditor/{internal_auditor}'
 */
    const destroyForm = (args: { internal_auditor: number | { id: number } } | [internal_auditor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\InternalAuditorController::destroy
 * @see app/Http/Controllers/InternalAuditorController.php:63
 * @route '/internal-auditor/{internal_auditor}'
 */
        destroyForm.delete = (args: { internal_auditor: number | { id: number } } | [internal_auditor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const InternalAuditorController = { index, create, store, show, edit, update, destroy }

export default InternalAuditorController