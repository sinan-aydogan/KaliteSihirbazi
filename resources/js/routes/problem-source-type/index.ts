import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\ProblemSourceTypeController::search
 * @see app/Http/Controllers/ProblemSourceTypeController.php:13
 * @route '/problem-source-type/search'
 */
export const search = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: search.url(options),
    method: 'post',
})

search.definition = {
    methods: ["post"],
    url: '/problem-source-type/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ProblemSourceTypeController::search
 * @see app/Http/Controllers/ProblemSourceTypeController.php:13
 * @route '/problem-source-type/search'
 */
search.url = (options?: RouteQueryOptions) => {
    return search.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProblemSourceTypeController::search
 * @see app/Http/Controllers/ProblemSourceTypeController.php:13
 * @route '/problem-source-type/search'
 */
search.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: search.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ProblemSourceTypeController::search
 * @see app/Http/Controllers/ProblemSourceTypeController.php:13
 * @route '/problem-source-type/search'
 */
    const searchForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: search.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ProblemSourceTypeController::search
 * @see app/Http/Controllers/ProblemSourceTypeController.php:13
 * @route '/problem-source-type/search'
 */
        searchForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: search.url(options),
            method: 'post',
        })
    
    search.form = searchForm
/**
* @see \App\Http\Controllers\ProblemSourceTypeController::index
 * @see app/Http/Controllers/ProblemSourceTypeController.php:13
 * @route '/problem-source-type'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/problem-source-type',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProblemSourceTypeController::index
 * @see app/Http/Controllers/ProblemSourceTypeController.php:13
 * @route '/problem-source-type'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProblemSourceTypeController::index
 * @see app/Http/Controllers/ProblemSourceTypeController.php:13
 * @route '/problem-source-type'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ProblemSourceTypeController::index
 * @see app/Http/Controllers/ProblemSourceTypeController.php:13
 * @route '/problem-source-type'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ProblemSourceTypeController::index
 * @see app/Http/Controllers/ProblemSourceTypeController.php:13
 * @route '/problem-source-type'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ProblemSourceTypeController::index
 * @see app/Http/Controllers/ProblemSourceTypeController.php:13
 * @route '/problem-source-type'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ProblemSourceTypeController::index
 * @see app/Http/Controllers/ProblemSourceTypeController.php:13
 * @route '/problem-source-type'
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
const problemSourceType = {
    search: Object.assign(search, search),
index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default problemSourceType