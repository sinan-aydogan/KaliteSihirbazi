import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\ContinuousImprovement\ImprovementAreaController::search
 * @see app/Http/Controllers/ContinuousImprovement/ImprovementAreaController.php:15
 * @route '/improvement-area/search'
 */
export const search = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: search.url(options),
    method: 'post',
})

search.definition = {
    methods: ["post"],
    url: '/improvement-area/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ContinuousImprovement\ImprovementAreaController::search
 * @see app/Http/Controllers/ContinuousImprovement/ImprovementAreaController.php:15
 * @route '/improvement-area/search'
 */
search.url = (options?: RouteQueryOptions) => {
    return search.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContinuousImprovement\ImprovementAreaController::search
 * @see app/Http/Controllers/ContinuousImprovement/ImprovementAreaController.php:15
 * @route '/improvement-area/search'
 */
search.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: search.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ContinuousImprovement\ImprovementAreaController::search
 * @see app/Http/Controllers/ContinuousImprovement/ImprovementAreaController.php:15
 * @route '/improvement-area/search'
 */
    const searchForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: search.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ContinuousImprovement\ImprovementAreaController::search
 * @see app/Http/Controllers/ContinuousImprovement/ImprovementAreaController.php:15
 * @route '/improvement-area/search'
 */
        searchForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: search.url(options),
            method: 'post',
        })
    
    search.form = searchForm
/**
* @see \App\Http\Controllers\ContinuousImprovement\ImprovementAreaController::index
 * @see app/Http/Controllers/ContinuousImprovement/ImprovementAreaController.php:15
 * @route '/improvement-area'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/improvement-area',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ContinuousImprovement\ImprovementAreaController::index
 * @see app/Http/Controllers/ContinuousImprovement/ImprovementAreaController.php:15
 * @route '/improvement-area'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContinuousImprovement\ImprovementAreaController::index
 * @see app/Http/Controllers/ContinuousImprovement/ImprovementAreaController.php:15
 * @route '/improvement-area'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ContinuousImprovement\ImprovementAreaController::index
 * @see app/Http/Controllers/ContinuousImprovement/ImprovementAreaController.php:15
 * @route '/improvement-area'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ContinuousImprovement\ImprovementAreaController::index
 * @see app/Http/Controllers/ContinuousImprovement/ImprovementAreaController.php:15
 * @route '/improvement-area'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ContinuousImprovement\ImprovementAreaController::index
 * @see app/Http/Controllers/ContinuousImprovement/ImprovementAreaController.php:15
 * @route '/improvement-area'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ContinuousImprovement\ImprovementAreaController::index
 * @see app/Http/Controllers/ContinuousImprovement/ImprovementAreaController.php:15
 * @route '/improvement-area'
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
* @see \App\Http\Controllers\ContinuousImprovement\ImprovementAreaController::create
 * @see app/Http/Controllers/ContinuousImprovement/ImprovementAreaController.php:29
 * @route '/improvement-area/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/improvement-area/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ContinuousImprovement\ImprovementAreaController::create
 * @see app/Http/Controllers/ContinuousImprovement/ImprovementAreaController.php:29
 * @route '/improvement-area/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContinuousImprovement\ImprovementAreaController::create
 * @see app/Http/Controllers/ContinuousImprovement/ImprovementAreaController.php:29
 * @route '/improvement-area/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ContinuousImprovement\ImprovementAreaController::create
 * @see app/Http/Controllers/ContinuousImprovement/ImprovementAreaController.php:29
 * @route '/improvement-area/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ContinuousImprovement\ImprovementAreaController::create
 * @see app/Http/Controllers/ContinuousImprovement/ImprovementAreaController.php:29
 * @route '/improvement-area/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ContinuousImprovement\ImprovementAreaController::create
 * @see app/Http/Controllers/ContinuousImprovement/ImprovementAreaController.php:29
 * @route '/improvement-area/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ContinuousImprovement\ImprovementAreaController::create
 * @see app/Http/Controllers/ContinuousImprovement/ImprovementAreaController.php:29
 * @route '/improvement-area/create'
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
* @see \App\Http\Controllers\ContinuousImprovement\ImprovementAreaController::store
 * @see app/Http/Controllers/ContinuousImprovement/ImprovementAreaController.php:34
 * @route '/improvement-area'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/improvement-area',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ContinuousImprovement\ImprovementAreaController::store
 * @see app/Http/Controllers/ContinuousImprovement/ImprovementAreaController.php:34
 * @route '/improvement-area'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContinuousImprovement\ImprovementAreaController::store
 * @see app/Http/Controllers/ContinuousImprovement/ImprovementAreaController.php:34
 * @route '/improvement-area'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ContinuousImprovement\ImprovementAreaController::store
 * @see app/Http/Controllers/ContinuousImprovement/ImprovementAreaController.php:34
 * @route '/improvement-area'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ContinuousImprovement\ImprovementAreaController::store
 * @see app/Http/Controllers/ContinuousImprovement/ImprovementAreaController.php:34
 * @route '/improvement-area'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\ContinuousImprovement\ImprovementAreaController::show
 * @see app/Http/Controllers/ContinuousImprovement/ImprovementAreaController.php:43
 * @route '/improvement-area/{improvement_area}'
 */
export const show = (args: { improvement_area: number | { id: number } } | [improvement_area: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/improvement-area/{improvement_area}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ContinuousImprovement\ImprovementAreaController::show
 * @see app/Http/Controllers/ContinuousImprovement/ImprovementAreaController.php:43
 * @route '/improvement-area/{improvement_area}'
 */
show.url = (args: { improvement_area: number | { id: number } } | [improvement_area: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { improvement_area: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { improvement_area: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    improvement_area: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        improvement_area: typeof args.improvement_area === 'object'
                ? args.improvement_area.id
                : args.improvement_area,
                }

    return show.definition.url
            .replace('{improvement_area}', parsedArgs.improvement_area.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContinuousImprovement\ImprovementAreaController::show
 * @see app/Http/Controllers/ContinuousImprovement/ImprovementAreaController.php:43
 * @route '/improvement-area/{improvement_area}'
 */
show.get = (args: { improvement_area: number | { id: number } } | [improvement_area: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ContinuousImprovement\ImprovementAreaController::show
 * @see app/Http/Controllers/ContinuousImprovement/ImprovementAreaController.php:43
 * @route '/improvement-area/{improvement_area}'
 */
show.head = (args: { improvement_area: number | { id: number } } | [improvement_area: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ContinuousImprovement\ImprovementAreaController::show
 * @see app/Http/Controllers/ContinuousImprovement/ImprovementAreaController.php:43
 * @route '/improvement-area/{improvement_area}'
 */
    const showForm = (args: { improvement_area: number | { id: number } } | [improvement_area: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ContinuousImprovement\ImprovementAreaController::show
 * @see app/Http/Controllers/ContinuousImprovement/ImprovementAreaController.php:43
 * @route '/improvement-area/{improvement_area}'
 */
        showForm.get = (args: { improvement_area: number | { id: number } } | [improvement_area: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ContinuousImprovement\ImprovementAreaController::show
 * @see app/Http/Controllers/ContinuousImprovement/ImprovementAreaController.php:43
 * @route '/improvement-area/{improvement_area}'
 */
        showForm.head = (args: { improvement_area: number | { id: number } } | [improvement_area: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\ContinuousImprovement\ImprovementAreaController::edit
 * @see app/Http/Controllers/ContinuousImprovement/ImprovementAreaController.php:48
 * @route '/improvement-area/{improvement_area}/edit'
 */
export const edit = (args: { improvement_area: number | { id: number } } | [improvement_area: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/improvement-area/{improvement_area}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ContinuousImprovement\ImprovementAreaController::edit
 * @see app/Http/Controllers/ContinuousImprovement/ImprovementAreaController.php:48
 * @route '/improvement-area/{improvement_area}/edit'
 */
edit.url = (args: { improvement_area: number | { id: number } } | [improvement_area: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { improvement_area: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { improvement_area: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    improvement_area: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        improvement_area: typeof args.improvement_area === 'object'
                ? args.improvement_area.id
                : args.improvement_area,
                }

    return edit.definition.url
            .replace('{improvement_area}', parsedArgs.improvement_area.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContinuousImprovement\ImprovementAreaController::edit
 * @see app/Http/Controllers/ContinuousImprovement/ImprovementAreaController.php:48
 * @route '/improvement-area/{improvement_area}/edit'
 */
edit.get = (args: { improvement_area: number | { id: number } } | [improvement_area: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ContinuousImprovement\ImprovementAreaController::edit
 * @see app/Http/Controllers/ContinuousImprovement/ImprovementAreaController.php:48
 * @route '/improvement-area/{improvement_area}/edit'
 */
edit.head = (args: { improvement_area: number | { id: number } } | [improvement_area: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ContinuousImprovement\ImprovementAreaController::edit
 * @see app/Http/Controllers/ContinuousImprovement/ImprovementAreaController.php:48
 * @route '/improvement-area/{improvement_area}/edit'
 */
    const editForm = (args: { improvement_area: number | { id: number } } | [improvement_area: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ContinuousImprovement\ImprovementAreaController::edit
 * @see app/Http/Controllers/ContinuousImprovement/ImprovementAreaController.php:48
 * @route '/improvement-area/{improvement_area}/edit'
 */
        editForm.get = (args: { improvement_area: number | { id: number } } | [improvement_area: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ContinuousImprovement\ImprovementAreaController::edit
 * @see app/Http/Controllers/ContinuousImprovement/ImprovementAreaController.php:48
 * @route '/improvement-area/{improvement_area}/edit'
 */
        editForm.head = (args: { improvement_area: number | { id: number } } | [improvement_area: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\ContinuousImprovement\ImprovementAreaController::update
 * @see app/Http/Controllers/ContinuousImprovement/ImprovementAreaController.php:53
 * @route '/improvement-area/{improvement_area}'
 */
export const update = (args: { improvement_area: number | { id: number } } | [improvement_area: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/improvement-area/{improvement_area}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\ContinuousImprovement\ImprovementAreaController::update
 * @see app/Http/Controllers/ContinuousImprovement/ImprovementAreaController.php:53
 * @route '/improvement-area/{improvement_area}'
 */
update.url = (args: { improvement_area: number | { id: number } } | [improvement_area: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { improvement_area: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { improvement_area: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    improvement_area: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        improvement_area: typeof args.improvement_area === 'object'
                ? args.improvement_area.id
                : args.improvement_area,
                }

    return update.definition.url
            .replace('{improvement_area}', parsedArgs.improvement_area.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContinuousImprovement\ImprovementAreaController::update
 * @see app/Http/Controllers/ContinuousImprovement/ImprovementAreaController.php:53
 * @route '/improvement-area/{improvement_area}'
 */
update.put = (args: { improvement_area: number | { id: number } } | [improvement_area: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\ContinuousImprovement\ImprovementAreaController::update
 * @see app/Http/Controllers/ContinuousImprovement/ImprovementAreaController.php:53
 * @route '/improvement-area/{improvement_area}'
 */
update.patch = (args: { improvement_area: number | { id: number } } | [improvement_area: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\ContinuousImprovement\ImprovementAreaController::update
 * @see app/Http/Controllers/ContinuousImprovement/ImprovementAreaController.php:53
 * @route '/improvement-area/{improvement_area}'
 */
    const updateForm = (args: { improvement_area: number | { id: number } } | [improvement_area: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ContinuousImprovement\ImprovementAreaController::update
 * @see app/Http/Controllers/ContinuousImprovement/ImprovementAreaController.php:53
 * @route '/improvement-area/{improvement_area}'
 */
        updateForm.put = (args: { improvement_area: number | { id: number } } | [improvement_area: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\ContinuousImprovement\ImprovementAreaController::update
 * @see app/Http/Controllers/ContinuousImprovement/ImprovementAreaController.php:53
 * @route '/improvement-area/{improvement_area}'
 */
        updateForm.patch = (args: { improvement_area: number | { id: number } } | [improvement_area: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\ContinuousImprovement\ImprovementAreaController::destroy
 * @see app/Http/Controllers/ContinuousImprovement/ImprovementAreaController.php:62
 * @route '/improvement-area/{improvement_area}'
 */
export const destroy = (args: { improvement_area: number | { id: number } } | [improvement_area: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/improvement-area/{improvement_area}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ContinuousImprovement\ImprovementAreaController::destroy
 * @see app/Http/Controllers/ContinuousImprovement/ImprovementAreaController.php:62
 * @route '/improvement-area/{improvement_area}'
 */
destroy.url = (args: { improvement_area: number | { id: number } } | [improvement_area: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { improvement_area: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { improvement_area: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    improvement_area: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        improvement_area: typeof args.improvement_area === 'object'
                ? args.improvement_area.id
                : args.improvement_area,
                }

    return destroy.definition.url
            .replace('{improvement_area}', parsedArgs.improvement_area.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContinuousImprovement\ImprovementAreaController::destroy
 * @see app/Http/Controllers/ContinuousImprovement/ImprovementAreaController.php:62
 * @route '/improvement-area/{improvement_area}'
 */
destroy.delete = (args: { improvement_area: number | { id: number } } | [improvement_area: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\ContinuousImprovement\ImprovementAreaController::destroy
 * @see app/Http/Controllers/ContinuousImprovement/ImprovementAreaController.php:62
 * @route '/improvement-area/{improvement_area}'
 */
    const destroyForm = (args: { improvement_area: number | { id: number } } | [improvement_area: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ContinuousImprovement\ImprovementAreaController::destroy
 * @see app/Http/Controllers/ContinuousImprovement/ImprovementAreaController.php:62
 * @route '/improvement-area/{improvement_area}'
 */
        destroyForm.delete = (args: { improvement_area: number | { id: number } } | [improvement_area: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const improvementArea = {
    search: Object.assign(search, search),
index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default improvementArea