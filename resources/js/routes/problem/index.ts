import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\ProblemController::search
 * @see app/Http/Controllers/ProblemController.php:27
 * @route '/problem/search'
 */
export const search = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: search.url(options),
    method: 'post',
})

search.definition = {
    methods: ["post"],
    url: '/problem/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ProblemController::search
 * @see app/Http/Controllers/ProblemController.php:27
 * @route '/problem/search'
 */
search.url = (options?: RouteQueryOptions) => {
    return search.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProblemController::search
 * @see app/Http/Controllers/ProblemController.php:27
 * @route '/problem/search'
 */
search.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: search.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ProblemController::search
 * @see app/Http/Controllers/ProblemController.php:27
 * @route '/problem/search'
 */
    const searchForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: search.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ProblemController::search
 * @see app/Http/Controllers/ProblemController.php:27
 * @route '/problem/search'
 */
        searchForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: search.url(options),
            method: 'post',
        })
    
    search.form = searchForm
/**
* @see \App\Http\Controllers\ProblemController::index
 * @see app/Http/Controllers/ProblemController.php:27
 * @route '/problem'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/problem',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProblemController::index
 * @see app/Http/Controllers/ProblemController.php:27
 * @route '/problem'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProblemController::index
 * @see app/Http/Controllers/ProblemController.php:27
 * @route '/problem'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ProblemController::index
 * @see app/Http/Controllers/ProblemController.php:27
 * @route '/problem'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ProblemController::index
 * @see app/Http/Controllers/ProblemController.php:27
 * @route '/problem'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ProblemController::index
 * @see app/Http/Controllers/ProblemController.php:27
 * @route '/problem'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ProblemController::index
 * @see app/Http/Controllers/ProblemController.php:27
 * @route '/problem'
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
* @see \App\Http\Controllers\ProblemController::create
 * @see app/Http/Controllers/ProblemController.php:41
 * @route '/problem/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/problem/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProblemController::create
 * @see app/Http/Controllers/ProblemController.php:41
 * @route '/problem/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProblemController::create
 * @see app/Http/Controllers/ProblemController.php:41
 * @route '/problem/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ProblemController::create
 * @see app/Http/Controllers/ProblemController.php:41
 * @route '/problem/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ProblemController::create
 * @see app/Http/Controllers/ProblemController.php:41
 * @route '/problem/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ProblemController::create
 * @see app/Http/Controllers/ProblemController.php:41
 * @route '/problem/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ProblemController::create
 * @see app/Http/Controllers/ProblemController.php:41
 * @route '/problem/create'
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
* @see \App\Http\Controllers\ProblemController::store
 * @see app/Http/Controllers/ProblemController.php:46
 * @route '/problem'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/problem',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ProblemController::store
 * @see app/Http/Controllers/ProblemController.php:46
 * @route '/problem'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProblemController::store
 * @see app/Http/Controllers/ProblemController.php:46
 * @route '/problem'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ProblemController::store
 * @see app/Http/Controllers/ProblemController.php:46
 * @route '/problem'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ProblemController::store
 * @see app/Http/Controllers/ProblemController.php:46
 * @route '/problem'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\ProblemController::show
 * @see app/Http/Controllers/ProblemController.php:63
 * @route '/problem/{problem}'
 */
export const show = (args: { problem: number | { id: number } } | [problem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/problem/{problem}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProblemController::show
 * @see app/Http/Controllers/ProblemController.php:63
 * @route '/problem/{problem}'
 */
show.url = (args: { problem: number | { id: number } } | [problem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { problem: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { problem: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    problem: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        problem: typeof args.problem === 'object'
                ? args.problem.id
                : args.problem,
                }

    return show.definition.url
            .replace('{problem}', parsedArgs.problem.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProblemController::show
 * @see app/Http/Controllers/ProblemController.php:63
 * @route '/problem/{problem}'
 */
show.get = (args: { problem: number | { id: number } } | [problem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ProblemController::show
 * @see app/Http/Controllers/ProblemController.php:63
 * @route '/problem/{problem}'
 */
show.head = (args: { problem: number | { id: number } } | [problem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ProblemController::show
 * @see app/Http/Controllers/ProblemController.php:63
 * @route '/problem/{problem}'
 */
    const showForm = (args: { problem: number | { id: number } } | [problem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ProblemController::show
 * @see app/Http/Controllers/ProblemController.php:63
 * @route '/problem/{problem}'
 */
        showForm.get = (args: { problem: number | { id: number } } | [problem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ProblemController::show
 * @see app/Http/Controllers/ProblemController.php:63
 * @route '/problem/{problem}'
 */
        showForm.head = (args: { problem: number | { id: number } } | [problem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\ProblemController::edit
 * @see app/Http/Controllers/ProblemController.php:83
 * @route '/problem/{problem}/edit'
 */
export const edit = (args: { problem: number | { id: number } } | [problem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/problem/{problem}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProblemController::edit
 * @see app/Http/Controllers/ProblemController.php:83
 * @route '/problem/{problem}/edit'
 */
edit.url = (args: { problem: number | { id: number } } | [problem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { problem: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { problem: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    problem: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        problem: typeof args.problem === 'object'
                ? args.problem.id
                : args.problem,
                }

    return edit.definition.url
            .replace('{problem}', parsedArgs.problem.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProblemController::edit
 * @see app/Http/Controllers/ProblemController.php:83
 * @route '/problem/{problem}/edit'
 */
edit.get = (args: { problem: number | { id: number } } | [problem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ProblemController::edit
 * @see app/Http/Controllers/ProblemController.php:83
 * @route '/problem/{problem}/edit'
 */
edit.head = (args: { problem: number | { id: number } } | [problem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ProblemController::edit
 * @see app/Http/Controllers/ProblemController.php:83
 * @route '/problem/{problem}/edit'
 */
    const editForm = (args: { problem: number | { id: number } } | [problem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ProblemController::edit
 * @see app/Http/Controllers/ProblemController.php:83
 * @route '/problem/{problem}/edit'
 */
        editForm.get = (args: { problem: number | { id: number } } | [problem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ProblemController::edit
 * @see app/Http/Controllers/ProblemController.php:83
 * @route '/problem/{problem}/edit'
 */
        editForm.head = (args: { problem: number | { id: number } } | [problem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\ProblemController::update
 * @see app/Http/Controllers/ProblemController.php:88
 * @route '/problem/{problem}'
 */
export const update = (args: { problem: number | { id: number } } | [problem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/problem/{problem}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\ProblemController::update
 * @see app/Http/Controllers/ProblemController.php:88
 * @route '/problem/{problem}'
 */
update.url = (args: { problem: number | { id: number } } | [problem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { problem: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { problem: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    problem: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        problem: typeof args.problem === 'object'
                ? args.problem.id
                : args.problem,
                }

    return update.definition.url
            .replace('{problem}', parsedArgs.problem.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProblemController::update
 * @see app/Http/Controllers/ProblemController.php:88
 * @route '/problem/{problem}'
 */
update.put = (args: { problem: number | { id: number } } | [problem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\ProblemController::update
 * @see app/Http/Controllers/ProblemController.php:88
 * @route '/problem/{problem}'
 */
update.patch = (args: { problem: number | { id: number } } | [problem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\ProblemController::update
 * @see app/Http/Controllers/ProblemController.php:88
 * @route '/problem/{problem}'
 */
    const updateForm = (args: { problem: number | { id: number } } | [problem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ProblemController::update
 * @see app/Http/Controllers/ProblemController.php:88
 * @route '/problem/{problem}'
 */
        updateForm.put = (args: { problem: number | { id: number } } | [problem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\ProblemController::update
 * @see app/Http/Controllers/ProblemController.php:88
 * @route '/problem/{problem}'
 */
        updateForm.patch = (args: { problem: number | { id: number } } | [problem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\ProblemController::destroy
 * @see app/Http/Controllers/ProblemController.php:97
 * @route '/problem/{problem}'
 */
export const destroy = (args: { problem: number | { id: number } } | [problem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/problem/{problem}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ProblemController::destroy
 * @see app/Http/Controllers/ProblemController.php:97
 * @route '/problem/{problem}'
 */
destroy.url = (args: { problem: number | { id: number } } | [problem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { problem: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { problem: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    problem: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        problem: typeof args.problem === 'object'
                ? args.problem.id
                : args.problem,
                }

    return destroy.definition.url
            .replace('{problem}', parsedArgs.problem.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProblemController::destroy
 * @see app/Http/Controllers/ProblemController.php:97
 * @route '/problem/{problem}'
 */
destroy.delete = (args: { problem: number | { id: number } } | [problem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\ProblemController::destroy
 * @see app/Http/Controllers/ProblemController.php:97
 * @route '/problem/{problem}'
 */
    const destroyForm = (args: { problem: number | { id: number } } | [problem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ProblemController::destroy
 * @see app/Http/Controllers/ProblemController.php:97
 * @route '/problem/{problem}'
 */
        destroyForm.delete = (args: { problem: number | { id: number } } | [problem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\ProblemWorkflowController::immediateAction
 * @see app/Http/Controllers/ProblemWorkflowController.php:16
 * @route '/problem/{problem}/immediate-action'
 */
export const immediateAction = (args: { problem: number | { id: number } } | [problem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: immediateAction.url(args, options),
    method: 'post',
})

immediateAction.definition = {
    methods: ["post"],
    url: '/problem/{problem}/immediate-action',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ProblemWorkflowController::immediateAction
 * @see app/Http/Controllers/ProblemWorkflowController.php:16
 * @route '/problem/{problem}/immediate-action'
 */
immediateAction.url = (args: { problem: number | { id: number } } | [problem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { problem: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { problem: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    problem: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        problem: typeof args.problem === 'object'
                ? args.problem.id
                : args.problem,
                }

    return immediateAction.definition.url
            .replace('{problem}', parsedArgs.problem.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProblemWorkflowController::immediateAction
 * @see app/Http/Controllers/ProblemWorkflowController.php:16
 * @route '/problem/{problem}/immediate-action'
 */
immediateAction.post = (args: { problem: number | { id: number } } | [problem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: immediateAction.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ProblemWorkflowController::immediateAction
 * @see app/Http/Controllers/ProblemWorkflowController.php:16
 * @route '/problem/{problem}/immediate-action'
 */
    const immediateActionForm = (args: { problem: number | { id: number } } | [problem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: immediateAction.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ProblemWorkflowController::immediateAction
 * @see app/Http/Controllers/ProblemWorkflowController.php:16
 * @route '/problem/{problem}/immediate-action'
 */
        immediateActionForm.post = (args: { problem: number | { id: number } } | [problem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: immediateAction.url(args, options),
            method: 'post',
        })
    
    immediateAction.form = immediateActionForm
/**
* @see \App\Http\Controllers\ProblemWorkflowController::markUnderReview
 * @see app/Http/Controllers/ProblemWorkflowController.php:24
 * @route '/problem/{problem}/mark-under-review'
 */
export const markUnderReview = (args: { problem: number | { id: number } } | [problem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: markUnderReview.url(args, options),
    method: 'post',
})

markUnderReview.definition = {
    methods: ["post"],
    url: '/problem/{problem}/mark-under-review',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ProblemWorkflowController::markUnderReview
 * @see app/Http/Controllers/ProblemWorkflowController.php:24
 * @route '/problem/{problem}/mark-under-review'
 */
markUnderReview.url = (args: { problem: number | { id: number } } | [problem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { problem: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { problem: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    problem: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        problem: typeof args.problem === 'object'
                ? args.problem.id
                : args.problem,
                }

    return markUnderReview.definition.url
            .replace('{problem}', parsedArgs.problem.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProblemWorkflowController::markUnderReview
 * @see app/Http/Controllers/ProblemWorkflowController.php:24
 * @route '/problem/{problem}/mark-under-review'
 */
markUnderReview.post = (args: { problem: number | { id: number } } | [problem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: markUnderReview.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ProblemWorkflowController::markUnderReview
 * @see app/Http/Controllers/ProblemWorkflowController.php:24
 * @route '/problem/{problem}/mark-under-review'
 */
    const markUnderReviewForm = (args: { problem: number | { id: number } } | [problem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: markUnderReview.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ProblemWorkflowController::markUnderReview
 * @see app/Http/Controllers/ProblemWorkflowController.php:24
 * @route '/problem/{problem}/mark-under-review'
 */
        markUnderReviewForm.post = (args: { problem: number | { id: number } } | [problem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: markUnderReview.url(args, options),
            method: 'post',
        })
    
    markUnderReview.form = markUnderReviewForm
/**
* @see \App\Http\Controllers\ProblemWorkflowController::closeWithoutCapa
 * @see app/Http/Controllers/ProblemWorkflowController.php:32
 * @route '/problem/{problem}/close-without-capa'
 */
export const closeWithoutCapa = (args: { problem: number | { id: number } } | [problem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: closeWithoutCapa.url(args, options),
    method: 'post',
})

closeWithoutCapa.definition = {
    methods: ["post"],
    url: '/problem/{problem}/close-without-capa',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ProblemWorkflowController::closeWithoutCapa
 * @see app/Http/Controllers/ProblemWorkflowController.php:32
 * @route '/problem/{problem}/close-without-capa'
 */
closeWithoutCapa.url = (args: { problem: number | { id: number } } | [problem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { problem: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { problem: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    problem: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        problem: typeof args.problem === 'object'
                ? args.problem.id
                : args.problem,
                }

    return closeWithoutCapa.definition.url
            .replace('{problem}', parsedArgs.problem.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProblemWorkflowController::closeWithoutCapa
 * @see app/Http/Controllers/ProblemWorkflowController.php:32
 * @route '/problem/{problem}/close-without-capa'
 */
closeWithoutCapa.post = (args: { problem: number | { id: number } } | [problem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: closeWithoutCapa.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ProblemWorkflowController::closeWithoutCapa
 * @see app/Http/Controllers/ProblemWorkflowController.php:32
 * @route '/problem/{problem}/close-without-capa'
 */
    const closeWithoutCapaForm = (args: { problem: number | { id: number } } | [problem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: closeWithoutCapa.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ProblemWorkflowController::closeWithoutCapa
 * @see app/Http/Controllers/ProblemWorkflowController.php:32
 * @route '/problem/{problem}/close-without-capa'
 */
        closeWithoutCapaForm.post = (args: { problem: number | { id: number } } | [problem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: closeWithoutCapa.url(args, options),
            method: 'post',
        })
    
    closeWithoutCapa.form = closeWithoutCapaForm
/**
* @see \App\Http\Controllers\ProblemWorkflowController::close
 * @see app/Http/Controllers/ProblemWorkflowController.php:40
 * @route '/problem/{problem}/close'
 */
export const close = (args: { problem: number | { id: number } } | [problem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: close.url(args, options),
    method: 'post',
})

close.definition = {
    methods: ["post"],
    url: '/problem/{problem}/close',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ProblemWorkflowController::close
 * @see app/Http/Controllers/ProblemWorkflowController.php:40
 * @route '/problem/{problem}/close'
 */
close.url = (args: { problem: number | { id: number } } | [problem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { problem: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { problem: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    problem: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        problem: typeof args.problem === 'object'
                ? args.problem.id
                : args.problem,
                }

    return close.definition.url
            .replace('{problem}', parsedArgs.problem.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProblemWorkflowController::close
 * @see app/Http/Controllers/ProblemWorkflowController.php:40
 * @route '/problem/{problem}/close'
 */
close.post = (args: { problem: number | { id: number } } | [problem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: close.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ProblemWorkflowController::close
 * @see app/Http/Controllers/ProblemWorkflowController.php:40
 * @route '/problem/{problem}/close'
 */
    const closeForm = (args: { problem: number | { id: number } } | [problem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: close.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ProblemWorkflowController::close
 * @see app/Http/Controllers/ProblemWorkflowController.php:40
 * @route '/problem/{problem}/close'
 */
        closeForm.post = (args: { problem: number | { id: number } } | [problem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: close.url(args, options),
            method: 'post',
        })
    
    close.form = closeForm
const problem = {
    search: Object.assign(search, search),
index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
immediateAction: Object.assign(immediateAction, immediateAction),
markUnderReview: Object.assign(markUnderReview, markUnderReview),
closeWithoutCapa: Object.assign(closeWithoutCapa, closeWithoutCapa),
close: Object.assign(close, close),
}

export default problem