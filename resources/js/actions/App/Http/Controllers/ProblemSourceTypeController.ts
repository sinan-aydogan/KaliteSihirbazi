import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\ProblemSourceTypeController::index
 * @see app/Http/Controllers/ProblemSourceTypeController.php:13
 * @route '/problem-source-type/search'
 */
const index1e94ccd20baaa9de00bd081f115f5b5c = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: index1e94ccd20baaa9de00bd081f115f5b5c.url(options),
    method: 'post',
})

index1e94ccd20baaa9de00bd081f115f5b5c.definition = {
    methods: ["post"],
    url: '/problem-source-type/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ProblemSourceTypeController::index
 * @see app/Http/Controllers/ProblemSourceTypeController.php:13
 * @route '/problem-source-type/search'
 */
index1e94ccd20baaa9de00bd081f115f5b5c.url = (options?: RouteQueryOptions) => {
    return index1e94ccd20baaa9de00bd081f115f5b5c.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProblemSourceTypeController::index
 * @see app/Http/Controllers/ProblemSourceTypeController.php:13
 * @route '/problem-source-type/search'
 */
index1e94ccd20baaa9de00bd081f115f5b5c.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: index1e94ccd20baaa9de00bd081f115f5b5c.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ProblemSourceTypeController::index
 * @see app/Http/Controllers/ProblemSourceTypeController.php:13
 * @route '/problem-source-type/search'
 */
    const index1e94ccd20baaa9de00bd081f115f5b5cForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: index1e94ccd20baaa9de00bd081f115f5b5c.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ProblemSourceTypeController::index
 * @see app/Http/Controllers/ProblemSourceTypeController.php:13
 * @route '/problem-source-type/search'
 */
        index1e94ccd20baaa9de00bd081f115f5b5cForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: index1e94ccd20baaa9de00bd081f115f5b5c.url(options),
            method: 'post',
        })
    
    index1e94ccd20baaa9de00bd081f115f5b5c.form = index1e94ccd20baaa9de00bd081f115f5b5cForm
    /**
* @see \App\Http\Controllers\ProblemSourceTypeController::index
 * @see app/Http/Controllers/ProblemSourceTypeController.php:13
 * @route '/problem-source-type'
 */
const index9c05cb9d76a10fb18aadffe0d759d136 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index9c05cb9d76a10fb18aadffe0d759d136.url(options),
    method: 'get',
})

index9c05cb9d76a10fb18aadffe0d759d136.definition = {
    methods: ["get","head"],
    url: '/problem-source-type',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProblemSourceTypeController::index
 * @see app/Http/Controllers/ProblemSourceTypeController.php:13
 * @route '/problem-source-type'
 */
index9c05cb9d76a10fb18aadffe0d759d136.url = (options?: RouteQueryOptions) => {
    return index9c05cb9d76a10fb18aadffe0d759d136.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProblemSourceTypeController::index
 * @see app/Http/Controllers/ProblemSourceTypeController.php:13
 * @route '/problem-source-type'
 */
index9c05cb9d76a10fb18aadffe0d759d136.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index9c05cb9d76a10fb18aadffe0d759d136.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ProblemSourceTypeController::index
 * @see app/Http/Controllers/ProblemSourceTypeController.php:13
 * @route '/problem-source-type'
 */
index9c05cb9d76a10fb18aadffe0d759d136.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index9c05cb9d76a10fb18aadffe0d759d136.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ProblemSourceTypeController::index
 * @see app/Http/Controllers/ProblemSourceTypeController.php:13
 * @route '/problem-source-type'
 */
    const index9c05cb9d76a10fb18aadffe0d759d136Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index9c05cb9d76a10fb18aadffe0d759d136.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ProblemSourceTypeController::index
 * @see app/Http/Controllers/ProblemSourceTypeController.php:13
 * @route '/problem-source-type'
 */
        index9c05cb9d76a10fb18aadffe0d759d136Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index9c05cb9d76a10fb18aadffe0d759d136.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ProblemSourceTypeController::index
 * @see app/Http/Controllers/ProblemSourceTypeController.php:13
 * @route '/problem-source-type'
 */
        index9c05cb9d76a10fb18aadffe0d759d136Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index9c05cb9d76a10fb18aadffe0d759d136.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index9c05cb9d76a10fb18aadffe0d759d136.form = index9c05cb9d76a10fb18aadffe0d759d136Form

/**
* Multiple routes resolve to \App\Http\Controllers\ProblemSourceTypeController::index, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `index['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const index = {
    '/problem-source-type/search': index1e94ccd20baaa9de00bd081f115f5b5c,
    '/problem-source-type': index9c05cb9d76a10fb18aadffe0d759d136,
}

/**
* @see \App\Http\Controllers\ProblemSourceTypeController::create
 * @see app/Http/Controllers/ProblemSourceTypeController.php:25
 * @route '/problem-source-type/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/problem-source-type/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProblemSourceTypeController::create
 * @see app/Http/Controllers/ProblemSourceTypeController.php:25
 * @route '/problem-source-type/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProblemSourceTypeController::create
 * @see app/Http/Controllers/ProblemSourceTypeController.php:25
 * @route '/problem-source-type/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ProblemSourceTypeController::create
 * @see app/Http/Controllers/ProblemSourceTypeController.php:25
 * @route '/problem-source-type/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ProblemSourceTypeController::create
 * @see app/Http/Controllers/ProblemSourceTypeController.php:25
 * @route '/problem-source-type/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ProblemSourceTypeController::create
 * @see app/Http/Controllers/ProblemSourceTypeController.php:25
 * @route '/problem-source-type/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ProblemSourceTypeController::create
 * @see app/Http/Controllers/ProblemSourceTypeController.php:25
 * @route '/problem-source-type/create'
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
* @see \App\Http\Controllers\ProblemSourceTypeController::store
 * @see app/Http/Controllers/ProblemSourceTypeController.php:30
 * @route '/problem-source-type'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/problem-source-type',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ProblemSourceTypeController::store
 * @see app/Http/Controllers/ProblemSourceTypeController.php:30
 * @route '/problem-source-type'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProblemSourceTypeController::store
 * @see app/Http/Controllers/ProblemSourceTypeController.php:30
 * @route '/problem-source-type'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ProblemSourceTypeController::store
 * @see app/Http/Controllers/ProblemSourceTypeController.php:30
 * @route '/problem-source-type'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ProblemSourceTypeController::store
 * @see app/Http/Controllers/ProblemSourceTypeController.php:30
 * @route '/problem-source-type'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\ProblemSourceTypeController::show
 * @see app/Http/Controllers/ProblemSourceTypeController.php:43
 * @route '/problem-source-type/{problem_source_type}'
 */
export const show = (args: { problem_source_type: number | { id: number } } | [problem_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/problem-source-type/{problem_source_type}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProblemSourceTypeController::show
 * @see app/Http/Controllers/ProblemSourceTypeController.php:43
 * @route '/problem-source-type/{problem_source_type}'
 */
show.url = (args: { problem_source_type: number | { id: number } } | [problem_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { problem_source_type: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { problem_source_type: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    problem_source_type: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        problem_source_type: typeof args.problem_source_type === 'object'
                ? args.problem_source_type.id
                : args.problem_source_type,
                }

    return show.definition.url
            .replace('{problem_source_type}', parsedArgs.problem_source_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProblemSourceTypeController::show
 * @see app/Http/Controllers/ProblemSourceTypeController.php:43
 * @route '/problem-source-type/{problem_source_type}'
 */
show.get = (args: { problem_source_type: number | { id: number } } | [problem_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ProblemSourceTypeController::show
 * @see app/Http/Controllers/ProblemSourceTypeController.php:43
 * @route '/problem-source-type/{problem_source_type}'
 */
show.head = (args: { problem_source_type: number | { id: number } } | [problem_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ProblemSourceTypeController::show
 * @see app/Http/Controllers/ProblemSourceTypeController.php:43
 * @route '/problem-source-type/{problem_source_type}'
 */
    const showForm = (args: { problem_source_type: number | { id: number } } | [problem_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ProblemSourceTypeController::show
 * @see app/Http/Controllers/ProblemSourceTypeController.php:43
 * @route '/problem-source-type/{problem_source_type}'
 */
        showForm.get = (args: { problem_source_type: number | { id: number } } | [problem_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ProblemSourceTypeController::show
 * @see app/Http/Controllers/ProblemSourceTypeController.php:43
 * @route '/problem-source-type/{problem_source_type}'
 */
        showForm.head = (args: { problem_source_type: number | { id: number } } | [problem_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\ProblemSourceTypeController::edit
 * @see app/Http/Controllers/ProblemSourceTypeController.php:48
 * @route '/problem-source-type/{problem_source_type}/edit'
 */
export const edit = (args: { problem_source_type: number | { id: number } } | [problem_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/problem-source-type/{problem_source_type}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProblemSourceTypeController::edit
 * @see app/Http/Controllers/ProblemSourceTypeController.php:48
 * @route '/problem-source-type/{problem_source_type}/edit'
 */
edit.url = (args: { problem_source_type: number | { id: number } } | [problem_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { problem_source_type: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { problem_source_type: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    problem_source_type: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        problem_source_type: typeof args.problem_source_type === 'object'
                ? args.problem_source_type.id
                : args.problem_source_type,
                }

    return edit.definition.url
            .replace('{problem_source_type}', parsedArgs.problem_source_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProblemSourceTypeController::edit
 * @see app/Http/Controllers/ProblemSourceTypeController.php:48
 * @route '/problem-source-type/{problem_source_type}/edit'
 */
edit.get = (args: { problem_source_type: number | { id: number } } | [problem_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ProblemSourceTypeController::edit
 * @see app/Http/Controllers/ProblemSourceTypeController.php:48
 * @route '/problem-source-type/{problem_source_type}/edit'
 */
edit.head = (args: { problem_source_type: number | { id: number } } | [problem_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ProblemSourceTypeController::edit
 * @see app/Http/Controllers/ProblemSourceTypeController.php:48
 * @route '/problem-source-type/{problem_source_type}/edit'
 */
    const editForm = (args: { problem_source_type: number | { id: number } } | [problem_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ProblemSourceTypeController::edit
 * @see app/Http/Controllers/ProblemSourceTypeController.php:48
 * @route '/problem-source-type/{problem_source_type}/edit'
 */
        editForm.get = (args: { problem_source_type: number | { id: number } } | [problem_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ProblemSourceTypeController::edit
 * @see app/Http/Controllers/ProblemSourceTypeController.php:48
 * @route '/problem-source-type/{problem_source_type}/edit'
 */
        editForm.head = (args: { problem_source_type: number | { id: number } } | [problem_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\ProblemSourceTypeController::update
 * @see app/Http/Controllers/ProblemSourceTypeController.php:53
 * @route '/problem-source-type/{problem_source_type}'
 */
export const update = (args: { problem_source_type: number | { id: number } } | [problem_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/problem-source-type/{problem_source_type}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\ProblemSourceTypeController::update
 * @see app/Http/Controllers/ProblemSourceTypeController.php:53
 * @route '/problem-source-type/{problem_source_type}'
 */
update.url = (args: { problem_source_type: number | { id: number } } | [problem_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { problem_source_type: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { problem_source_type: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    problem_source_type: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        problem_source_type: typeof args.problem_source_type === 'object'
                ? args.problem_source_type.id
                : args.problem_source_type,
                }

    return update.definition.url
            .replace('{problem_source_type}', parsedArgs.problem_source_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProblemSourceTypeController::update
 * @see app/Http/Controllers/ProblemSourceTypeController.php:53
 * @route '/problem-source-type/{problem_source_type}'
 */
update.put = (args: { problem_source_type: number | { id: number } } | [problem_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\ProblemSourceTypeController::update
 * @see app/Http/Controllers/ProblemSourceTypeController.php:53
 * @route '/problem-source-type/{problem_source_type}'
 */
update.patch = (args: { problem_source_type: number | { id: number } } | [problem_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\ProblemSourceTypeController::update
 * @see app/Http/Controllers/ProblemSourceTypeController.php:53
 * @route '/problem-source-type/{problem_source_type}'
 */
    const updateForm = (args: { problem_source_type: number | { id: number } } | [problem_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ProblemSourceTypeController::update
 * @see app/Http/Controllers/ProblemSourceTypeController.php:53
 * @route '/problem-source-type/{problem_source_type}'
 */
        updateForm.put = (args: { problem_source_type: number | { id: number } } | [problem_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\ProblemSourceTypeController::update
 * @see app/Http/Controllers/ProblemSourceTypeController.php:53
 * @route '/problem-source-type/{problem_source_type}'
 */
        updateForm.patch = (args: { problem_source_type: number | { id: number } } | [problem_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\ProblemSourceTypeController::destroy
 * @see app/Http/Controllers/ProblemSourceTypeController.php:62
 * @route '/problem-source-type/{problem_source_type}'
 */
export const destroy = (args: { problem_source_type: number | { id: number } } | [problem_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/problem-source-type/{problem_source_type}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ProblemSourceTypeController::destroy
 * @see app/Http/Controllers/ProblemSourceTypeController.php:62
 * @route '/problem-source-type/{problem_source_type}'
 */
destroy.url = (args: { problem_source_type: number | { id: number } } | [problem_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { problem_source_type: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { problem_source_type: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    problem_source_type: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        problem_source_type: typeof args.problem_source_type === 'object'
                ? args.problem_source_type.id
                : args.problem_source_type,
                }

    return destroy.definition.url
            .replace('{problem_source_type}', parsedArgs.problem_source_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProblemSourceTypeController::destroy
 * @see app/Http/Controllers/ProblemSourceTypeController.php:62
 * @route '/problem-source-type/{problem_source_type}'
 */
destroy.delete = (args: { problem_source_type: number | { id: number } } | [problem_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\ProblemSourceTypeController::destroy
 * @see app/Http/Controllers/ProblemSourceTypeController.php:62
 * @route '/problem-source-type/{problem_source_type}'
 */
    const destroyForm = (args: { problem_source_type: number | { id: number } } | [problem_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ProblemSourceTypeController::destroy
 * @see app/Http/Controllers/ProblemSourceTypeController.php:62
 * @route '/problem-source-type/{problem_source_type}'
 */
        destroyForm.delete = (args: { problem_source_type: number | { id: number } } | [problem_source_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const ProblemSourceTypeController = { index, create, store, show, edit, update, destroy }

export default ProblemSourceTypeController