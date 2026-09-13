import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\ContinuousImprovement\GembaWalkController::search
 * @see app/Http/Controllers/ContinuousImprovement/GembaWalkController.php:20
 * @route '/gemba-walk/search'
 */
export const search = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: search.url(options),
    method: 'post',
})

search.definition = {
    methods: ["post"],
    url: '/gemba-walk/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ContinuousImprovement\GembaWalkController::search
 * @see app/Http/Controllers/ContinuousImprovement/GembaWalkController.php:20
 * @route '/gemba-walk/search'
 */
search.url = (options?: RouteQueryOptions) => {
    return search.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContinuousImprovement\GembaWalkController::search
 * @see app/Http/Controllers/ContinuousImprovement/GembaWalkController.php:20
 * @route '/gemba-walk/search'
 */
search.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: search.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ContinuousImprovement\GembaWalkController::search
 * @see app/Http/Controllers/ContinuousImprovement/GembaWalkController.php:20
 * @route '/gemba-walk/search'
 */
    const searchForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: search.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ContinuousImprovement\GembaWalkController::search
 * @see app/Http/Controllers/ContinuousImprovement/GembaWalkController.php:20
 * @route '/gemba-walk/search'
 */
        searchForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: search.url(options),
            method: 'post',
        })
    
    search.form = searchForm
/**
* @see \App\Http\Controllers\ContinuousImprovement\GembaWalkController::index
 * @see app/Http/Controllers/ContinuousImprovement/GembaWalkController.php:20
 * @route '/gemba-walk'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/gemba-walk',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ContinuousImprovement\GembaWalkController::index
 * @see app/Http/Controllers/ContinuousImprovement/GembaWalkController.php:20
 * @route '/gemba-walk'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContinuousImprovement\GembaWalkController::index
 * @see app/Http/Controllers/ContinuousImprovement/GembaWalkController.php:20
 * @route '/gemba-walk'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ContinuousImprovement\GembaWalkController::index
 * @see app/Http/Controllers/ContinuousImprovement/GembaWalkController.php:20
 * @route '/gemba-walk'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ContinuousImprovement\GembaWalkController::index
 * @see app/Http/Controllers/ContinuousImprovement/GembaWalkController.php:20
 * @route '/gemba-walk'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ContinuousImprovement\GembaWalkController::index
 * @see app/Http/Controllers/ContinuousImprovement/GembaWalkController.php:20
 * @route '/gemba-walk'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ContinuousImprovement\GembaWalkController::index
 * @see app/Http/Controllers/ContinuousImprovement/GembaWalkController.php:20
 * @route '/gemba-walk'
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
* @see \App\Http\Controllers\ContinuousImprovement\GembaWalkController::create
 * @see app/Http/Controllers/ContinuousImprovement/GembaWalkController.php:34
 * @route '/gemba-walk/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/gemba-walk/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ContinuousImprovement\GembaWalkController::create
 * @see app/Http/Controllers/ContinuousImprovement/GembaWalkController.php:34
 * @route '/gemba-walk/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContinuousImprovement\GembaWalkController::create
 * @see app/Http/Controllers/ContinuousImprovement/GembaWalkController.php:34
 * @route '/gemba-walk/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ContinuousImprovement\GembaWalkController::create
 * @see app/Http/Controllers/ContinuousImprovement/GembaWalkController.php:34
 * @route '/gemba-walk/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ContinuousImprovement\GembaWalkController::create
 * @see app/Http/Controllers/ContinuousImprovement/GembaWalkController.php:34
 * @route '/gemba-walk/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ContinuousImprovement\GembaWalkController::create
 * @see app/Http/Controllers/ContinuousImprovement/GembaWalkController.php:34
 * @route '/gemba-walk/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ContinuousImprovement\GembaWalkController::create
 * @see app/Http/Controllers/ContinuousImprovement/GembaWalkController.php:34
 * @route '/gemba-walk/create'
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
* @see \App\Http\Controllers\ContinuousImprovement\GembaWalkController::store
 * @see app/Http/Controllers/ContinuousImprovement/GembaWalkController.php:39
 * @route '/gemba-walk'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/gemba-walk',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ContinuousImprovement\GembaWalkController::store
 * @see app/Http/Controllers/ContinuousImprovement/GembaWalkController.php:39
 * @route '/gemba-walk'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContinuousImprovement\GembaWalkController::store
 * @see app/Http/Controllers/ContinuousImprovement/GembaWalkController.php:39
 * @route '/gemba-walk'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ContinuousImprovement\GembaWalkController::store
 * @see app/Http/Controllers/ContinuousImprovement/GembaWalkController.php:39
 * @route '/gemba-walk'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ContinuousImprovement\GembaWalkController::store
 * @see app/Http/Controllers/ContinuousImprovement/GembaWalkController.php:39
 * @route '/gemba-walk'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\ContinuousImprovement\GembaWalkController::show
 * @see app/Http/Controllers/ContinuousImprovement/GembaWalkController.php:48
 * @route '/gemba-walk/{gemba_walk}'
 */
export const show = (args: { gemba_walk: number | { id: number } } | [gemba_walk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/gemba-walk/{gemba_walk}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ContinuousImprovement\GembaWalkController::show
 * @see app/Http/Controllers/ContinuousImprovement/GembaWalkController.php:48
 * @route '/gemba-walk/{gemba_walk}'
 */
show.url = (args: { gemba_walk: number | { id: number } } | [gemba_walk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { gemba_walk: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { gemba_walk: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    gemba_walk: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        gemba_walk: typeof args.gemba_walk === 'object'
                ? args.gemba_walk.id
                : args.gemba_walk,
                }

    return show.definition.url
            .replace('{gemba_walk}', parsedArgs.gemba_walk.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContinuousImprovement\GembaWalkController::show
 * @see app/Http/Controllers/ContinuousImprovement/GembaWalkController.php:48
 * @route '/gemba-walk/{gemba_walk}'
 */
show.get = (args: { gemba_walk: number | { id: number } } | [gemba_walk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ContinuousImprovement\GembaWalkController::show
 * @see app/Http/Controllers/ContinuousImprovement/GembaWalkController.php:48
 * @route '/gemba-walk/{gemba_walk}'
 */
show.head = (args: { gemba_walk: number | { id: number } } | [gemba_walk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ContinuousImprovement\GembaWalkController::show
 * @see app/Http/Controllers/ContinuousImprovement/GembaWalkController.php:48
 * @route '/gemba-walk/{gemba_walk}'
 */
    const showForm = (args: { gemba_walk: number | { id: number } } | [gemba_walk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ContinuousImprovement\GembaWalkController::show
 * @see app/Http/Controllers/ContinuousImprovement/GembaWalkController.php:48
 * @route '/gemba-walk/{gemba_walk}'
 */
        showForm.get = (args: { gemba_walk: number | { id: number } } | [gemba_walk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ContinuousImprovement\GembaWalkController::show
 * @see app/Http/Controllers/ContinuousImprovement/GembaWalkController.php:48
 * @route '/gemba-walk/{gemba_walk}'
 */
        showForm.head = (args: { gemba_walk: number | { id: number } } | [gemba_walk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\ContinuousImprovement\GembaWalkController::edit
 * @see app/Http/Controllers/ContinuousImprovement/GembaWalkController.php:58
 * @route '/gemba-walk/{gemba_walk}/edit'
 */
export const edit = (args: { gemba_walk: number | { id: number } } | [gemba_walk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/gemba-walk/{gemba_walk}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ContinuousImprovement\GembaWalkController::edit
 * @see app/Http/Controllers/ContinuousImprovement/GembaWalkController.php:58
 * @route '/gemba-walk/{gemba_walk}/edit'
 */
edit.url = (args: { gemba_walk: number | { id: number } } | [gemba_walk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { gemba_walk: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { gemba_walk: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    gemba_walk: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        gemba_walk: typeof args.gemba_walk === 'object'
                ? args.gemba_walk.id
                : args.gemba_walk,
                }

    return edit.definition.url
            .replace('{gemba_walk}', parsedArgs.gemba_walk.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContinuousImprovement\GembaWalkController::edit
 * @see app/Http/Controllers/ContinuousImprovement/GembaWalkController.php:58
 * @route '/gemba-walk/{gemba_walk}/edit'
 */
edit.get = (args: { gemba_walk: number | { id: number } } | [gemba_walk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ContinuousImprovement\GembaWalkController::edit
 * @see app/Http/Controllers/ContinuousImprovement/GembaWalkController.php:58
 * @route '/gemba-walk/{gemba_walk}/edit'
 */
edit.head = (args: { gemba_walk: number | { id: number } } | [gemba_walk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ContinuousImprovement\GembaWalkController::edit
 * @see app/Http/Controllers/ContinuousImprovement/GembaWalkController.php:58
 * @route '/gemba-walk/{gemba_walk}/edit'
 */
    const editForm = (args: { gemba_walk: number | { id: number } } | [gemba_walk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ContinuousImprovement\GembaWalkController::edit
 * @see app/Http/Controllers/ContinuousImprovement/GembaWalkController.php:58
 * @route '/gemba-walk/{gemba_walk}/edit'
 */
        editForm.get = (args: { gemba_walk: number | { id: number } } | [gemba_walk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ContinuousImprovement\GembaWalkController::edit
 * @see app/Http/Controllers/ContinuousImprovement/GembaWalkController.php:58
 * @route '/gemba-walk/{gemba_walk}/edit'
 */
        editForm.head = (args: { gemba_walk: number | { id: number } } | [gemba_walk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\ContinuousImprovement\GembaWalkController::update
 * @see app/Http/Controllers/ContinuousImprovement/GembaWalkController.php:63
 * @route '/gemba-walk/{gemba_walk}'
 */
export const update = (args: { gemba_walk: number | { id: number } } | [gemba_walk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/gemba-walk/{gemba_walk}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\ContinuousImprovement\GembaWalkController::update
 * @see app/Http/Controllers/ContinuousImprovement/GembaWalkController.php:63
 * @route '/gemba-walk/{gemba_walk}'
 */
update.url = (args: { gemba_walk: number | { id: number } } | [gemba_walk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { gemba_walk: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { gemba_walk: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    gemba_walk: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        gemba_walk: typeof args.gemba_walk === 'object'
                ? args.gemba_walk.id
                : args.gemba_walk,
                }

    return update.definition.url
            .replace('{gemba_walk}', parsedArgs.gemba_walk.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContinuousImprovement\GembaWalkController::update
 * @see app/Http/Controllers/ContinuousImprovement/GembaWalkController.php:63
 * @route '/gemba-walk/{gemba_walk}'
 */
update.put = (args: { gemba_walk: number | { id: number } } | [gemba_walk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\ContinuousImprovement\GembaWalkController::update
 * @see app/Http/Controllers/ContinuousImprovement/GembaWalkController.php:63
 * @route '/gemba-walk/{gemba_walk}'
 */
update.patch = (args: { gemba_walk: number | { id: number } } | [gemba_walk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\ContinuousImprovement\GembaWalkController::update
 * @see app/Http/Controllers/ContinuousImprovement/GembaWalkController.php:63
 * @route '/gemba-walk/{gemba_walk}'
 */
    const updateForm = (args: { gemba_walk: number | { id: number } } | [gemba_walk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ContinuousImprovement\GembaWalkController::update
 * @see app/Http/Controllers/ContinuousImprovement/GembaWalkController.php:63
 * @route '/gemba-walk/{gemba_walk}'
 */
        updateForm.put = (args: { gemba_walk: number | { id: number } } | [gemba_walk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\ContinuousImprovement\GembaWalkController::update
 * @see app/Http/Controllers/ContinuousImprovement/GembaWalkController.php:63
 * @route '/gemba-walk/{gemba_walk}'
 */
        updateForm.patch = (args: { gemba_walk: number | { id: number } } | [gemba_walk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\ContinuousImprovement\GembaWalkController::destroy
 * @see app/Http/Controllers/ContinuousImprovement/GembaWalkController.php:72
 * @route '/gemba-walk/{gemba_walk}'
 */
export const destroy = (args: { gemba_walk: number | { id: number } } | [gemba_walk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/gemba-walk/{gemba_walk}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ContinuousImprovement\GembaWalkController::destroy
 * @see app/Http/Controllers/ContinuousImprovement/GembaWalkController.php:72
 * @route '/gemba-walk/{gemba_walk}'
 */
destroy.url = (args: { gemba_walk: number | { id: number } } | [gemba_walk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { gemba_walk: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { gemba_walk: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    gemba_walk: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        gemba_walk: typeof args.gemba_walk === 'object'
                ? args.gemba_walk.id
                : args.gemba_walk,
                }

    return destroy.definition.url
            .replace('{gemba_walk}', parsedArgs.gemba_walk.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContinuousImprovement\GembaWalkController::destroy
 * @see app/Http/Controllers/ContinuousImprovement/GembaWalkController.php:72
 * @route '/gemba-walk/{gemba_walk}'
 */
destroy.delete = (args: { gemba_walk: number | { id: number } } | [gemba_walk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\ContinuousImprovement\GembaWalkController::destroy
 * @see app/Http/Controllers/ContinuousImprovement/GembaWalkController.php:72
 * @route '/gemba-walk/{gemba_walk}'
 */
    const destroyForm = (args: { gemba_walk: number | { id: number } } | [gemba_walk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ContinuousImprovement\GembaWalkController::destroy
 * @see app/Http/Controllers/ContinuousImprovement/GembaWalkController.php:72
 * @route '/gemba-walk/{gemba_walk}'
 */
        destroyForm.delete = (args: { gemba_walk: number | { id: number } } | [gemba_walk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const gembaWalk = {
    search: Object.assign(search, search),
index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default gembaWalk