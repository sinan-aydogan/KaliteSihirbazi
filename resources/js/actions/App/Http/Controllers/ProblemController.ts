import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\ProblemController::index
 * @see app/Http/Controllers/ProblemController.php:23
 * @route '/problem/search'
 */
const indexd189b3b7729f692b7bd575bff877c078 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: indexd189b3b7729f692b7bd575bff877c078.url(options),
    method: 'post',
})

indexd189b3b7729f692b7bd575bff877c078.definition = {
    methods: ["post"],
    url: '/problem/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ProblemController::index
 * @see app/Http/Controllers/ProblemController.php:23
 * @route '/problem/search'
 */
indexd189b3b7729f692b7bd575bff877c078.url = (options?: RouteQueryOptions) => {
    return indexd189b3b7729f692b7bd575bff877c078.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProblemController::index
 * @see app/Http/Controllers/ProblemController.php:23
 * @route '/problem/search'
 */
indexd189b3b7729f692b7bd575bff877c078.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: indexd189b3b7729f692b7bd575bff877c078.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ProblemController::index
 * @see app/Http/Controllers/ProblemController.php:23
 * @route '/problem/search'
 */
    const indexd189b3b7729f692b7bd575bff877c078Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: indexd189b3b7729f692b7bd575bff877c078.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ProblemController::index
 * @see app/Http/Controllers/ProblemController.php:23
 * @route '/problem/search'
 */
        indexd189b3b7729f692b7bd575bff877c078Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: indexd189b3b7729f692b7bd575bff877c078.url(options),
            method: 'post',
        })
    
    indexd189b3b7729f692b7bd575bff877c078.form = indexd189b3b7729f692b7bd575bff877c078Form
    /**
* @see \App\Http\Controllers\ProblemController::index
 * @see app/Http/Controllers/ProblemController.php:23
 * @route '/problem'
 */
const index7235179c9e59b13ba187ea2287649b3d = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index7235179c9e59b13ba187ea2287649b3d.url(options),
    method: 'get',
})

index7235179c9e59b13ba187ea2287649b3d.definition = {
    methods: ["get","head"],
    url: '/problem',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProblemController::index
 * @see app/Http/Controllers/ProblemController.php:23
 * @route '/problem'
 */
index7235179c9e59b13ba187ea2287649b3d.url = (options?: RouteQueryOptions) => {
    return index7235179c9e59b13ba187ea2287649b3d.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProblemController::index
 * @see app/Http/Controllers/ProblemController.php:23
 * @route '/problem'
 */
index7235179c9e59b13ba187ea2287649b3d.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index7235179c9e59b13ba187ea2287649b3d.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ProblemController::index
 * @see app/Http/Controllers/ProblemController.php:23
 * @route '/problem'
 */
index7235179c9e59b13ba187ea2287649b3d.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index7235179c9e59b13ba187ea2287649b3d.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ProblemController::index
 * @see app/Http/Controllers/ProblemController.php:23
 * @route '/problem'
 */
    const index7235179c9e59b13ba187ea2287649b3dForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index7235179c9e59b13ba187ea2287649b3d.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ProblemController::index
 * @see app/Http/Controllers/ProblemController.php:23
 * @route '/problem'
 */
        index7235179c9e59b13ba187ea2287649b3dForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index7235179c9e59b13ba187ea2287649b3d.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ProblemController::index
 * @see app/Http/Controllers/ProblemController.php:23
 * @route '/problem'
 */
        index7235179c9e59b13ba187ea2287649b3dForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index7235179c9e59b13ba187ea2287649b3d.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index7235179c9e59b13ba187ea2287649b3d.form = index7235179c9e59b13ba187ea2287649b3dForm

/**
* Multiple routes resolve to \App\Http\Controllers\ProblemController::index, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `index['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const index = {
    '/problem/search': indexd189b3b7729f692b7bd575bff877c078,
    '/problem': index7235179c9e59b13ba187ea2287649b3d,
}

/**
* @see \App\Http\Controllers\ProblemController::create
 * @see app/Http/Controllers/ProblemController.php:36
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
 * @see app/Http/Controllers/ProblemController.php:36
 * @route '/problem/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProblemController::create
 * @see app/Http/Controllers/ProblemController.php:36
 * @route '/problem/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ProblemController::create
 * @see app/Http/Controllers/ProblemController.php:36
 * @route '/problem/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ProblemController::create
 * @see app/Http/Controllers/ProblemController.php:36
 * @route '/problem/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ProblemController::create
 * @see app/Http/Controllers/ProblemController.php:36
 * @route '/problem/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ProblemController::create
 * @see app/Http/Controllers/ProblemController.php:36
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
 * @see app/Http/Controllers/ProblemController.php:41
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
 * @see app/Http/Controllers/ProblemController.php:41
 * @route '/problem'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProblemController::store
 * @see app/Http/Controllers/ProblemController.php:41
 * @route '/problem'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ProblemController::store
 * @see app/Http/Controllers/ProblemController.php:41
 * @route '/problem'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ProblemController::store
 * @see app/Http/Controllers/ProblemController.php:41
 * @route '/problem'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\ProblemController::show
 * @see app/Http/Controllers/ProblemController.php:54
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
 * @see app/Http/Controllers/ProblemController.php:54
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
 * @see app/Http/Controllers/ProblemController.php:54
 * @route '/problem/{problem}'
 */
show.get = (args: { problem: number | { id: number } } | [problem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ProblemController::show
 * @see app/Http/Controllers/ProblemController.php:54
 * @route '/problem/{problem}'
 */
show.head = (args: { problem: number | { id: number } } | [problem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ProblemController::show
 * @see app/Http/Controllers/ProblemController.php:54
 * @route '/problem/{problem}'
 */
    const showForm = (args: { problem: number | { id: number } } | [problem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ProblemController::show
 * @see app/Http/Controllers/ProblemController.php:54
 * @route '/problem/{problem}'
 */
        showForm.get = (args: { problem: number | { id: number } } | [problem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ProblemController::show
 * @see app/Http/Controllers/ProblemController.php:54
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
 * @see app/Http/Controllers/ProblemController.php:71
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
 * @see app/Http/Controllers/ProblemController.php:71
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
 * @see app/Http/Controllers/ProblemController.php:71
 * @route '/problem/{problem}/edit'
 */
edit.get = (args: { problem: number | { id: number } } | [problem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ProblemController::edit
 * @see app/Http/Controllers/ProblemController.php:71
 * @route '/problem/{problem}/edit'
 */
edit.head = (args: { problem: number | { id: number } } | [problem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ProblemController::edit
 * @see app/Http/Controllers/ProblemController.php:71
 * @route '/problem/{problem}/edit'
 */
    const editForm = (args: { problem: number | { id: number } } | [problem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ProblemController::edit
 * @see app/Http/Controllers/ProblemController.php:71
 * @route '/problem/{problem}/edit'
 */
        editForm.get = (args: { problem: number | { id: number } } | [problem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ProblemController::edit
 * @see app/Http/Controllers/ProblemController.php:71
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
 * @see app/Http/Controllers/ProblemController.php:76
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
 * @see app/Http/Controllers/ProblemController.php:76
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
 * @see app/Http/Controllers/ProblemController.php:76
 * @route '/problem/{problem}'
 */
update.put = (args: { problem: number | { id: number } } | [problem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\ProblemController::update
 * @see app/Http/Controllers/ProblemController.php:76
 * @route '/problem/{problem}'
 */
update.patch = (args: { problem: number | { id: number } } | [problem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\ProblemController::update
 * @see app/Http/Controllers/ProblemController.php:76
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
 * @see app/Http/Controllers/ProblemController.php:76
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
 * @see app/Http/Controllers/ProblemController.php:76
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
 * @see app/Http/Controllers/ProblemController.php:85
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
 * @see app/Http/Controllers/ProblemController.php:85
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
 * @see app/Http/Controllers/ProblemController.php:85
 * @route '/problem/{problem}'
 */
destroy.delete = (args: { problem: number | { id: number } } | [problem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\ProblemController::destroy
 * @see app/Http/Controllers/ProblemController.php:85
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
 * @see app/Http/Controllers/ProblemController.php:85
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
const ProblemController = { index, create, store, show, edit, update, destroy }

export default ProblemController