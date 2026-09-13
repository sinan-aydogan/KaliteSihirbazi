import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenSuggestionController::index
 * @see app/Http/Controllers/ContinuousImprovement/KaizenSuggestionController.php:22
 * @route '/kaizen-suggestion/search'
 */
const indexec145c5361b17c1f4e9e6749a4610faf = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: indexec145c5361b17c1f4e9e6749a4610faf.url(options),
    method: 'post',
})

indexec145c5361b17c1f4e9e6749a4610faf.definition = {
    methods: ["post"],
    url: '/kaizen-suggestion/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenSuggestionController::index
 * @see app/Http/Controllers/ContinuousImprovement/KaizenSuggestionController.php:22
 * @route '/kaizen-suggestion/search'
 */
indexec145c5361b17c1f4e9e6749a4610faf.url = (options?: RouteQueryOptions) => {
    return indexec145c5361b17c1f4e9e6749a4610faf.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenSuggestionController::index
 * @see app/Http/Controllers/ContinuousImprovement/KaizenSuggestionController.php:22
 * @route '/kaizen-suggestion/search'
 */
indexec145c5361b17c1f4e9e6749a4610faf.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: indexec145c5361b17c1f4e9e6749a4610faf.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenSuggestionController::index
 * @see app/Http/Controllers/ContinuousImprovement/KaizenSuggestionController.php:22
 * @route '/kaizen-suggestion/search'
 */
    const indexec145c5361b17c1f4e9e6749a4610fafForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: indexec145c5361b17c1f4e9e6749a4610faf.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenSuggestionController::index
 * @see app/Http/Controllers/ContinuousImprovement/KaizenSuggestionController.php:22
 * @route '/kaizen-suggestion/search'
 */
        indexec145c5361b17c1f4e9e6749a4610fafForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: indexec145c5361b17c1f4e9e6749a4610faf.url(options),
            method: 'post',
        })
    
    indexec145c5361b17c1f4e9e6749a4610faf.form = indexec145c5361b17c1f4e9e6749a4610fafForm
    /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenSuggestionController::index
 * @see app/Http/Controllers/ContinuousImprovement/KaizenSuggestionController.php:22
 * @route '/kaizen-suggestion'
 */
const index7c32d1d7da4bc83966d98e9294200d55 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index7c32d1d7da4bc83966d98e9294200d55.url(options),
    method: 'get',
})

index7c32d1d7da4bc83966d98e9294200d55.definition = {
    methods: ["get","head"],
    url: '/kaizen-suggestion',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenSuggestionController::index
 * @see app/Http/Controllers/ContinuousImprovement/KaizenSuggestionController.php:22
 * @route '/kaizen-suggestion'
 */
index7c32d1d7da4bc83966d98e9294200d55.url = (options?: RouteQueryOptions) => {
    return index7c32d1d7da4bc83966d98e9294200d55.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenSuggestionController::index
 * @see app/Http/Controllers/ContinuousImprovement/KaizenSuggestionController.php:22
 * @route '/kaizen-suggestion'
 */
index7c32d1d7da4bc83966d98e9294200d55.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index7c32d1d7da4bc83966d98e9294200d55.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenSuggestionController::index
 * @see app/Http/Controllers/ContinuousImprovement/KaizenSuggestionController.php:22
 * @route '/kaizen-suggestion'
 */
index7c32d1d7da4bc83966d98e9294200d55.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index7c32d1d7da4bc83966d98e9294200d55.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenSuggestionController::index
 * @see app/Http/Controllers/ContinuousImprovement/KaizenSuggestionController.php:22
 * @route '/kaizen-suggestion'
 */
    const index7c32d1d7da4bc83966d98e9294200d55Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index7c32d1d7da4bc83966d98e9294200d55.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenSuggestionController::index
 * @see app/Http/Controllers/ContinuousImprovement/KaizenSuggestionController.php:22
 * @route '/kaizen-suggestion'
 */
        index7c32d1d7da4bc83966d98e9294200d55Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index7c32d1d7da4bc83966d98e9294200d55.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenSuggestionController::index
 * @see app/Http/Controllers/ContinuousImprovement/KaizenSuggestionController.php:22
 * @route '/kaizen-suggestion'
 */
        index7c32d1d7da4bc83966d98e9294200d55Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index7c32d1d7da4bc83966d98e9294200d55.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index7c32d1d7da4bc83966d98e9294200d55.form = index7c32d1d7da4bc83966d98e9294200d55Form

/**
* Multiple routes resolve to \App\Http\Controllers\ContinuousImprovement\KaizenSuggestionController::index, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `index['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const index = {
    '/kaizen-suggestion/search': indexec145c5361b17c1f4e9e6749a4610faf,
    '/kaizen-suggestion': index7c32d1d7da4bc83966d98e9294200d55,
}

/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenSuggestionController::create
 * @see app/Http/Controllers/ContinuousImprovement/KaizenSuggestionController.php:51
 * @route '/kaizen-suggestion/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/kaizen-suggestion/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenSuggestionController::create
 * @see app/Http/Controllers/ContinuousImprovement/KaizenSuggestionController.php:51
 * @route '/kaizen-suggestion/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenSuggestionController::create
 * @see app/Http/Controllers/ContinuousImprovement/KaizenSuggestionController.php:51
 * @route '/kaizen-suggestion/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenSuggestionController::create
 * @see app/Http/Controllers/ContinuousImprovement/KaizenSuggestionController.php:51
 * @route '/kaizen-suggestion/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenSuggestionController::create
 * @see app/Http/Controllers/ContinuousImprovement/KaizenSuggestionController.php:51
 * @route '/kaizen-suggestion/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenSuggestionController::create
 * @see app/Http/Controllers/ContinuousImprovement/KaizenSuggestionController.php:51
 * @route '/kaizen-suggestion/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenSuggestionController::create
 * @see app/Http/Controllers/ContinuousImprovement/KaizenSuggestionController.php:51
 * @route '/kaizen-suggestion/create'
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
* @see \App\Http\Controllers\ContinuousImprovement\KaizenSuggestionController::store
 * @see app/Http/Controllers/ContinuousImprovement/KaizenSuggestionController.php:56
 * @route '/kaizen-suggestion'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/kaizen-suggestion',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenSuggestionController::store
 * @see app/Http/Controllers/ContinuousImprovement/KaizenSuggestionController.php:56
 * @route '/kaizen-suggestion'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenSuggestionController::store
 * @see app/Http/Controllers/ContinuousImprovement/KaizenSuggestionController.php:56
 * @route '/kaizen-suggestion'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenSuggestionController::store
 * @see app/Http/Controllers/ContinuousImprovement/KaizenSuggestionController.php:56
 * @route '/kaizen-suggestion'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenSuggestionController::store
 * @see app/Http/Controllers/ContinuousImprovement/KaizenSuggestionController.php:56
 * @route '/kaizen-suggestion'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenSuggestionController::show
 * @see app/Http/Controllers/ContinuousImprovement/KaizenSuggestionController.php:65
 * @route '/kaizen-suggestion/{kaizen_suggestion}'
 */
export const show = (args: { kaizen_suggestion: number | { id: number } } | [kaizen_suggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/kaizen-suggestion/{kaizen_suggestion}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenSuggestionController::show
 * @see app/Http/Controllers/ContinuousImprovement/KaizenSuggestionController.php:65
 * @route '/kaizen-suggestion/{kaizen_suggestion}'
 */
show.url = (args: { kaizen_suggestion: number | { id: number } } | [kaizen_suggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { kaizen_suggestion: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { kaizen_suggestion: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    kaizen_suggestion: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        kaizen_suggestion: typeof args.kaizen_suggestion === 'object'
                ? args.kaizen_suggestion.id
                : args.kaizen_suggestion,
                }

    return show.definition.url
            .replace('{kaizen_suggestion}', parsedArgs.kaizen_suggestion.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenSuggestionController::show
 * @see app/Http/Controllers/ContinuousImprovement/KaizenSuggestionController.php:65
 * @route '/kaizen-suggestion/{kaizen_suggestion}'
 */
show.get = (args: { kaizen_suggestion: number | { id: number } } | [kaizen_suggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenSuggestionController::show
 * @see app/Http/Controllers/ContinuousImprovement/KaizenSuggestionController.php:65
 * @route '/kaizen-suggestion/{kaizen_suggestion}'
 */
show.head = (args: { kaizen_suggestion: number | { id: number } } | [kaizen_suggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenSuggestionController::show
 * @see app/Http/Controllers/ContinuousImprovement/KaizenSuggestionController.php:65
 * @route '/kaizen-suggestion/{kaizen_suggestion}'
 */
    const showForm = (args: { kaizen_suggestion: number | { id: number } } | [kaizen_suggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenSuggestionController::show
 * @see app/Http/Controllers/ContinuousImprovement/KaizenSuggestionController.php:65
 * @route '/kaizen-suggestion/{kaizen_suggestion}'
 */
        showForm.get = (args: { kaizen_suggestion: number | { id: number } } | [kaizen_suggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenSuggestionController::show
 * @see app/Http/Controllers/ContinuousImprovement/KaizenSuggestionController.php:65
 * @route '/kaizen-suggestion/{kaizen_suggestion}'
 */
        showForm.head = (args: { kaizen_suggestion: number | { id: number } } | [kaizen_suggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\ContinuousImprovement\KaizenSuggestionController::edit
 * @see app/Http/Controllers/ContinuousImprovement/KaizenSuggestionController.php:81
 * @route '/kaizen-suggestion/{kaizen_suggestion}/edit'
 */
export const edit = (args: { kaizen_suggestion: number | { id: number } } | [kaizen_suggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/kaizen-suggestion/{kaizen_suggestion}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenSuggestionController::edit
 * @see app/Http/Controllers/ContinuousImprovement/KaizenSuggestionController.php:81
 * @route '/kaizen-suggestion/{kaizen_suggestion}/edit'
 */
edit.url = (args: { kaizen_suggestion: number | { id: number } } | [kaizen_suggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { kaizen_suggestion: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { kaizen_suggestion: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    kaizen_suggestion: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        kaizen_suggestion: typeof args.kaizen_suggestion === 'object'
                ? args.kaizen_suggestion.id
                : args.kaizen_suggestion,
                }

    return edit.definition.url
            .replace('{kaizen_suggestion}', parsedArgs.kaizen_suggestion.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenSuggestionController::edit
 * @see app/Http/Controllers/ContinuousImprovement/KaizenSuggestionController.php:81
 * @route '/kaizen-suggestion/{kaizen_suggestion}/edit'
 */
edit.get = (args: { kaizen_suggestion: number | { id: number } } | [kaizen_suggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenSuggestionController::edit
 * @see app/Http/Controllers/ContinuousImprovement/KaizenSuggestionController.php:81
 * @route '/kaizen-suggestion/{kaizen_suggestion}/edit'
 */
edit.head = (args: { kaizen_suggestion: number | { id: number } } | [kaizen_suggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenSuggestionController::edit
 * @see app/Http/Controllers/ContinuousImprovement/KaizenSuggestionController.php:81
 * @route '/kaizen-suggestion/{kaizen_suggestion}/edit'
 */
    const editForm = (args: { kaizen_suggestion: number | { id: number } } | [kaizen_suggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenSuggestionController::edit
 * @see app/Http/Controllers/ContinuousImprovement/KaizenSuggestionController.php:81
 * @route '/kaizen-suggestion/{kaizen_suggestion}/edit'
 */
        editForm.get = (args: { kaizen_suggestion: number | { id: number } } | [kaizen_suggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenSuggestionController::edit
 * @see app/Http/Controllers/ContinuousImprovement/KaizenSuggestionController.php:81
 * @route '/kaizen-suggestion/{kaizen_suggestion}/edit'
 */
        editForm.head = (args: { kaizen_suggestion: number | { id: number } } | [kaizen_suggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\ContinuousImprovement\KaizenSuggestionController::update
 * @see app/Http/Controllers/ContinuousImprovement/KaizenSuggestionController.php:86
 * @route '/kaizen-suggestion/{kaizen_suggestion}'
 */
export const update = (args: { kaizen_suggestion: number | { id: number } } | [kaizen_suggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/kaizen-suggestion/{kaizen_suggestion}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenSuggestionController::update
 * @see app/Http/Controllers/ContinuousImprovement/KaizenSuggestionController.php:86
 * @route '/kaizen-suggestion/{kaizen_suggestion}'
 */
update.url = (args: { kaizen_suggestion: number | { id: number } } | [kaizen_suggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { kaizen_suggestion: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { kaizen_suggestion: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    kaizen_suggestion: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        kaizen_suggestion: typeof args.kaizen_suggestion === 'object'
                ? args.kaizen_suggestion.id
                : args.kaizen_suggestion,
                }

    return update.definition.url
            .replace('{kaizen_suggestion}', parsedArgs.kaizen_suggestion.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenSuggestionController::update
 * @see app/Http/Controllers/ContinuousImprovement/KaizenSuggestionController.php:86
 * @route '/kaizen-suggestion/{kaizen_suggestion}'
 */
update.put = (args: { kaizen_suggestion: number | { id: number } } | [kaizen_suggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenSuggestionController::update
 * @see app/Http/Controllers/ContinuousImprovement/KaizenSuggestionController.php:86
 * @route '/kaizen-suggestion/{kaizen_suggestion}'
 */
update.patch = (args: { kaizen_suggestion: number | { id: number } } | [kaizen_suggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenSuggestionController::update
 * @see app/Http/Controllers/ContinuousImprovement/KaizenSuggestionController.php:86
 * @route '/kaizen-suggestion/{kaizen_suggestion}'
 */
    const updateForm = (args: { kaizen_suggestion: number | { id: number } } | [kaizen_suggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenSuggestionController::update
 * @see app/Http/Controllers/ContinuousImprovement/KaizenSuggestionController.php:86
 * @route '/kaizen-suggestion/{kaizen_suggestion}'
 */
        updateForm.put = (args: { kaizen_suggestion: number | { id: number } } | [kaizen_suggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenSuggestionController::update
 * @see app/Http/Controllers/ContinuousImprovement/KaizenSuggestionController.php:86
 * @route '/kaizen-suggestion/{kaizen_suggestion}'
 */
        updateForm.patch = (args: { kaizen_suggestion: number | { id: number } } | [kaizen_suggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\ContinuousImprovement\KaizenSuggestionController::destroy
 * @see app/Http/Controllers/ContinuousImprovement/KaizenSuggestionController.php:95
 * @route '/kaizen-suggestion/{kaizen_suggestion}'
 */
export const destroy = (args: { kaizen_suggestion: number | { id: number } } | [kaizen_suggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/kaizen-suggestion/{kaizen_suggestion}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenSuggestionController::destroy
 * @see app/Http/Controllers/ContinuousImprovement/KaizenSuggestionController.php:95
 * @route '/kaizen-suggestion/{kaizen_suggestion}'
 */
destroy.url = (args: { kaizen_suggestion: number | { id: number } } | [kaizen_suggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { kaizen_suggestion: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { kaizen_suggestion: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    kaizen_suggestion: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        kaizen_suggestion: typeof args.kaizen_suggestion === 'object'
                ? args.kaizen_suggestion.id
                : args.kaizen_suggestion,
                }

    return destroy.definition.url
            .replace('{kaizen_suggestion}', parsedArgs.kaizen_suggestion.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenSuggestionController::destroy
 * @see app/Http/Controllers/ContinuousImprovement/KaizenSuggestionController.php:95
 * @route '/kaizen-suggestion/{kaizen_suggestion}'
 */
destroy.delete = (args: { kaizen_suggestion: number | { id: number } } | [kaizen_suggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenSuggestionController::destroy
 * @see app/Http/Controllers/ContinuousImprovement/KaizenSuggestionController.php:95
 * @route '/kaizen-suggestion/{kaizen_suggestion}'
 */
    const destroyForm = (args: { kaizen_suggestion: number | { id: number } } | [kaizen_suggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenSuggestionController::destroy
 * @see app/Http/Controllers/ContinuousImprovement/KaizenSuggestionController.php:95
 * @route '/kaizen-suggestion/{kaizen_suggestion}'
 */
        destroyForm.delete = (args: { kaizen_suggestion: number | { id: number } } | [kaizen_suggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const KaizenSuggestionController = { index, create, store, show, edit, update, destroy }

export default KaizenSuggestionController