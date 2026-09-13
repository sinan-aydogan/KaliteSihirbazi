import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\ContinuousImprovement\ImprovementAreaController::index
 * @see app/Http/Controllers/ContinuousImprovement/ImprovementAreaController.php:15
 * @route '/improvement-area/search'
 */
const indexb8ddaffb3d75f78688051ae7a3d3a954 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: indexb8ddaffb3d75f78688051ae7a3d3a954.url(options),
    method: 'post',
})

indexb8ddaffb3d75f78688051ae7a3d3a954.definition = {
    methods: ["post"],
    url: '/improvement-area/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ContinuousImprovement\ImprovementAreaController::index
 * @see app/Http/Controllers/ContinuousImprovement/ImprovementAreaController.php:15
 * @route '/improvement-area/search'
 */
indexb8ddaffb3d75f78688051ae7a3d3a954.url = (options?: RouteQueryOptions) => {
    return indexb8ddaffb3d75f78688051ae7a3d3a954.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContinuousImprovement\ImprovementAreaController::index
 * @see app/Http/Controllers/ContinuousImprovement/ImprovementAreaController.php:15
 * @route '/improvement-area/search'
 */
indexb8ddaffb3d75f78688051ae7a3d3a954.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: indexb8ddaffb3d75f78688051ae7a3d3a954.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ContinuousImprovement\ImprovementAreaController::index
 * @see app/Http/Controllers/ContinuousImprovement/ImprovementAreaController.php:15
 * @route '/improvement-area/search'
 */
    const indexb8ddaffb3d75f78688051ae7a3d3a954Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: indexb8ddaffb3d75f78688051ae7a3d3a954.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ContinuousImprovement\ImprovementAreaController::index
 * @see app/Http/Controllers/ContinuousImprovement/ImprovementAreaController.php:15
 * @route '/improvement-area/search'
 */
        indexb8ddaffb3d75f78688051ae7a3d3a954Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: indexb8ddaffb3d75f78688051ae7a3d3a954.url(options),
            method: 'post',
        })
    
    indexb8ddaffb3d75f78688051ae7a3d3a954.form = indexb8ddaffb3d75f78688051ae7a3d3a954Form
    /**
* @see \App\Http\Controllers\ContinuousImprovement\ImprovementAreaController::index
 * @see app/Http/Controllers/ContinuousImprovement/ImprovementAreaController.php:15
 * @route '/improvement-area'
 */
const index0ad92a76ffb4611dd496efb89b444ca2 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index0ad92a76ffb4611dd496efb89b444ca2.url(options),
    method: 'get',
})

index0ad92a76ffb4611dd496efb89b444ca2.definition = {
    methods: ["get","head"],
    url: '/improvement-area',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ContinuousImprovement\ImprovementAreaController::index
 * @see app/Http/Controllers/ContinuousImprovement/ImprovementAreaController.php:15
 * @route '/improvement-area'
 */
index0ad92a76ffb4611dd496efb89b444ca2.url = (options?: RouteQueryOptions) => {
    return index0ad92a76ffb4611dd496efb89b444ca2.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContinuousImprovement\ImprovementAreaController::index
 * @see app/Http/Controllers/ContinuousImprovement/ImprovementAreaController.php:15
 * @route '/improvement-area'
 */
index0ad92a76ffb4611dd496efb89b444ca2.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index0ad92a76ffb4611dd496efb89b444ca2.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ContinuousImprovement\ImprovementAreaController::index
 * @see app/Http/Controllers/ContinuousImprovement/ImprovementAreaController.php:15
 * @route '/improvement-area'
 */
index0ad92a76ffb4611dd496efb89b444ca2.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index0ad92a76ffb4611dd496efb89b444ca2.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ContinuousImprovement\ImprovementAreaController::index
 * @see app/Http/Controllers/ContinuousImprovement/ImprovementAreaController.php:15
 * @route '/improvement-area'
 */
    const index0ad92a76ffb4611dd496efb89b444ca2Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index0ad92a76ffb4611dd496efb89b444ca2.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ContinuousImprovement\ImprovementAreaController::index
 * @see app/Http/Controllers/ContinuousImprovement/ImprovementAreaController.php:15
 * @route '/improvement-area'
 */
        index0ad92a76ffb4611dd496efb89b444ca2Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index0ad92a76ffb4611dd496efb89b444ca2.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ContinuousImprovement\ImprovementAreaController::index
 * @see app/Http/Controllers/ContinuousImprovement/ImprovementAreaController.php:15
 * @route '/improvement-area'
 */
        index0ad92a76ffb4611dd496efb89b444ca2Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index0ad92a76ffb4611dd496efb89b444ca2.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index0ad92a76ffb4611dd496efb89b444ca2.form = index0ad92a76ffb4611dd496efb89b444ca2Form

/**
* Multiple routes resolve to \App\Http\Controllers\ContinuousImprovement\ImprovementAreaController::index, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `index['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const index = {
    '/improvement-area/search': indexb8ddaffb3d75f78688051ae7a3d3a954,
    '/improvement-area': index0ad92a76ffb4611dd496efb89b444ca2,
}

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
const ImprovementAreaController = { index, create, store, show, edit, update, destroy }

export default ImprovementAreaController