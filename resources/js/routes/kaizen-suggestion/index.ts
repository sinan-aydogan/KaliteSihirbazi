import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenSuggestionController::search
 * @see app/Http/Controllers/ContinuousImprovement/KaizenSuggestionController.php:22
 * @route '/kaizen-suggestion/search'
 */
export const search = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: search.url(options),
    method: 'post',
})

search.definition = {
    methods: ["post"],
    url: '/kaizen-suggestion/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenSuggestionController::search
 * @see app/Http/Controllers/ContinuousImprovement/KaizenSuggestionController.php:22
 * @route '/kaizen-suggestion/search'
 */
search.url = (options?: RouteQueryOptions) => {
    return search.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenSuggestionController::search
 * @see app/Http/Controllers/ContinuousImprovement/KaizenSuggestionController.php:22
 * @route '/kaizen-suggestion/search'
 */
search.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: search.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenSuggestionController::search
 * @see app/Http/Controllers/ContinuousImprovement/KaizenSuggestionController.php:22
 * @route '/kaizen-suggestion/search'
 */
    const searchForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: search.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenSuggestionController::search
 * @see app/Http/Controllers/ContinuousImprovement/KaizenSuggestionController.php:22
 * @route '/kaizen-suggestion/search'
 */
        searchForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: search.url(options),
            method: 'post',
        })
    
    search.form = searchForm
/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenSuggestionController::index
 * @see app/Http/Controllers/ContinuousImprovement/KaizenSuggestionController.php:22
 * @route '/kaizen-suggestion'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/kaizen-suggestion',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenSuggestionController::index
 * @see app/Http/Controllers/ContinuousImprovement/KaizenSuggestionController.php:22
 * @route '/kaizen-suggestion'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenSuggestionController::index
 * @see app/Http/Controllers/ContinuousImprovement/KaizenSuggestionController.php:22
 * @route '/kaizen-suggestion'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenSuggestionController::index
 * @see app/Http/Controllers/ContinuousImprovement/KaizenSuggestionController.php:22
 * @route '/kaizen-suggestion'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenSuggestionController::index
 * @see app/Http/Controllers/ContinuousImprovement/KaizenSuggestionController.php:22
 * @route '/kaizen-suggestion'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenSuggestionController::index
 * @see app/Http/Controllers/ContinuousImprovement/KaizenSuggestionController.php:22
 * @route '/kaizen-suggestion'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenSuggestionController::index
 * @see app/Http/Controllers/ContinuousImprovement/KaizenSuggestionController.php:22
 * @route '/kaizen-suggestion'
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
/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenWorkflowController::markUnderReview
 * @see app/Http/Controllers/ContinuousImprovement/KaizenWorkflowController.php:20
 * @route '/kaizen-suggestion/{kaizenSuggestion}/mark-under-review'
 */
export const markUnderReview = (args: { kaizenSuggestion: number | { id: number } } | [kaizenSuggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: markUnderReview.url(args, options),
    method: 'post',
})

markUnderReview.definition = {
    methods: ["post"],
    url: '/kaizen-suggestion/{kaizenSuggestion}/mark-under-review',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenWorkflowController::markUnderReview
 * @see app/Http/Controllers/ContinuousImprovement/KaizenWorkflowController.php:20
 * @route '/kaizen-suggestion/{kaizenSuggestion}/mark-under-review'
 */
markUnderReview.url = (args: { kaizenSuggestion: number | { id: number } } | [kaizenSuggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { kaizenSuggestion: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { kaizenSuggestion: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    kaizenSuggestion: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        kaizenSuggestion: typeof args.kaizenSuggestion === 'object'
                ? args.kaizenSuggestion.id
                : args.kaizenSuggestion,
                }

    return markUnderReview.definition.url
            .replace('{kaizenSuggestion}', parsedArgs.kaizenSuggestion.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenWorkflowController::markUnderReview
 * @see app/Http/Controllers/ContinuousImprovement/KaizenWorkflowController.php:20
 * @route '/kaizen-suggestion/{kaizenSuggestion}/mark-under-review'
 */
markUnderReview.post = (args: { kaizenSuggestion: number | { id: number } } | [kaizenSuggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: markUnderReview.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenWorkflowController::markUnderReview
 * @see app/Http/Controllers/ContinuousImprovement/KaizenWorkflowController.php:20
 * @route '/kaizen-suggestion/{kaizenSuggestion}/mark-under-review'
 */
    const markUnderReviewForm = (args: { kaizenSuggestion: number | { id: number } } | [kaizenSuggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: markUnderReview.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenWorkflowController::markUnderReview
 * @see app/Http/Controllers/ContinuousImprovement/KaizenWorkflowController.php:20
 * @route '/kaizen-suggestion/{kaizenSuggestion}/mark-under-review'
 */
        markUnderReviewForm.post = (args: { kaizenSuggestion: number | { id: number } } | [kaizenSuggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: markUnderReview.url(args, options),
            method: 'post',
        })
    
    markUnderReview.form = markUnderReviewForm
/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenWorkflowController::approve
 * @see app/Http/Controllers/ContinuousImprovement/KaizenWorkflowController.php:25
 * @route '/kaizen-suggestion/{kaizenSuggestion}/approve'
 */
export const approve = (args: { kaizenSuggestion: number | { id: number } } | [kaizenSuggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: approve.url(args, options),
    method: 'post',
})

approve.definition = {
    methods: ["post"],
    url: '/kaizen-suggestion/{kaizenSuggestion}/approve',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenWorkflowController::approve
 * @see app/Http/Controllers/ContinuousImprovement/KaizenWorkflowController.php:25
 * @route '/kaizen-suggestion/{kaizenSuggestion}/approve'
 */
approve.url = (args: { kaizenSuggestion: number | { id: number } } | [kaizenSuggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { kaizenSuggestion: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { kaizenSuggestion: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    kaizenSuggestion: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        kaizenSuggestion: typeof args.kaizenSuggestion === 'object'
                ? args.kaizenSuggestion.id
                : args.kaizenSuggestion,
                }

    return approve.definition.url
            .replace('{kaizenSuggestion}', parsedArgs.kaizenSuggestion.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenWorkflowController::approve
 * @see app/Http/Controllers/ContinuousImprovement/KaizenWorkflowController.php:25
 * @route '/kaizen-suggestion/{kaizenSuggestion}/approve'
 */
approve.post = (args: { kaizenSuggestion: number | { id: number } } | [kaizenSuggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: approve.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenWorkflowController::approve
 * @see app/Http/Controllers/ContinuousImprovement/KaizenWorkflowController.php:25
 * @route '/kaizen-suggestion/{kaizenSuggestion}/approve'
 */
    const approveForm = (args: { kaizenSuggestion: number | { id: number } } | [kaizenSuggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: approve.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenWorkflowController::approve
 * @see app/Http/Controllers/ContinuousImprovement/KaizenWorkflowController.php:25
 * @route '/kaizen-suggestion/{kaizenSuggestion}/approve'
 */
        approveForm.post = (args: { kaizenSuggestion: number | { id: number } } | [kaizenSuggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: approve.url(args, options),
            method: 'post',
        })
    
    approve.form = approveForm
/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenWorkflowController::reject
 * @see app/Http/Controllers/ContinuousImprovement/KaizenWorkflowController.php:30
 * @route '/kaizen-suggestion/{kaizenSuggestion}/reject'
 */
export const reject = (args: { kaizenSuggestion: number | { id: number } } | [kaizenSuggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reject.url(args, options),
    method: 'post',
})

reject.definition = {
    methods: ["post"],
    url: '/kaizen-suggestion/{kaizenSuggestion}/reject',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenWorkflowController::reject
 * @see app/Http/Controllers/ContinuousImprovement/KaizenWorkflowController.php:30
 * @route '/kaizen-suggestion/{kaizenSuggestion}/reject'
 */
reject.url = (args: { kaizenSuggestion: number | { id: number } } | [kaizenSuggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { kaizenSuggestion: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { kaizenSuggestion: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    kaizenSuggestion: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        kaizenSuggestion: typeof args.kaizenSuggestion === 'object'
                ? args.kaizenSuggestion.id
                : args.kaizenSuggestion,
                }

    return reject.definition.url
            .replace('{kaizenSuggestion}', parsedArgs.kaizenSuggestion.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenWorkflowController::reject
 * @see app/Http/Controllers/ContinuousImprovement/KaizenWorkflowController.php:30
 * @route '/kaizen-suggestion/{kaizenSuggestion}/reject'
 */
reject.post = (args: { kaizenSuggestion: number | { id: number } } | [kaizenSuggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reject.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenWorkflowController::reject
 * @see app/Http/Controllers/ContinuousImprovement/KaizenWorkflowController.php:30
 * @route '/kaizen-suggestion/{kaizenSuggestion}/reject'
 */
    const rejectForm = (args: { kaizenSuggestion: number | { id: number } } | [kaizenSuggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: reject.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenWorkflowController::reject
 * @see app/Http/Controllers/ContinuousImprovement/KaizenWorkflowController.php:30
 * @route '/kaizen-suggestion/{kaizenSuggestion}/reject'
 */
        rejectForm.post = (args: { kaizenSuggestion: number | { id: number } } | [kaizenSuggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: reject.url(args, options),
            method: 'post',
        })
    
    reject.form = rejectForm
/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenWorkflowController::start
 * @see app/Http/Controllers/ContinuousImprovement/KaizenWorkflowController.php:35
 * @route '/kaizen-suggestion/{kaizenSuggestion}/start'
 */
export const start = (args: { kaizenSuggestion: number | { id: number } } | [kaizenSuggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: start.url(args, options),
    method: 'post',
})

start.definition = {
    methods: ["post"],
    url: '/kaizen-suggestion/{kaizenSuggestion}/start',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenWorkflowController::start
 * @see app/Http/Controllers/ContinuousImprovement/KaizenWorkflowController.php:35
 * @route '/kaizen-suggestion/{kaizenSuggestion}/start'
 */
start.url = (args: { kaizenSuggestion: number | { id: number } } | [kaizenSuggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { kaizenSuggestion: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { kaizenSuggestion: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    kaizenSuggestion: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        kaizenSuggestion: typeof args.kaizenSuggestion === 'object'
                ? args.kaizenSuggestion.id
                : args.kaizenSuggestion,
                }

    return start.definition.url
            .replace('{kaizenSuggestion}', parsedArgs.kaizenSuggestion.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenWorkflowController::start
 * @see app/Http/Controllers/ContinuousImprovement/KaizenWorkflowController.php:35
 * @route '/kaizen-suggestion/{kaizenSuggestion}/start'
 */
start.post = (args: { kaizenSuggestion: number | { id: number } } | [kaizenSuggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: start.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenWorkflowController::start
 * @see app/Http/Controllers/ContinuousImprovement/KaizenWorkflowController.php:35
 * @route '/kaizen-suggestion/{kaizenSuggestion}/start'
 */
    const startForm = (args: { kaizenSuggestion: number | { id: number } } | [kaizenSuggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: start.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenWorkflowController::start
 * @see app/Http/Controllers/ContinuousImprovement/KaizenWorkflowController.php:35
 * @route '/kaizen-suggestion/{kaizenSuggestion}/start'
 */
        startForm.post = (args: { kaizenSuggestion: number | { id: number } } | [kaizenSuggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: start.url(args, options),
            method: 'post',
        })
    
    start.form = startForm
/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenWorkflowController::implement
 * @see app/Http/Controllers/ContinuousImprovement/KaizenWorkflowController.php:40
 * @route '/kaizen-suggestion/{kaizenSuggestion}/implement'
 */
export const implement = (args: { kaizenSuggestion: number | { id: number } } | [kaizenSuggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: implement.url(args, options),
    method: 'post',
})

implement.definition = {
    methods: ["post"],
    url: '/kaizen-suggestion/{kaizenSuggestion}/implement',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenWorkflowController::implement
 * @see app/Http/Controllers/ContinuousImprovement/KaizenWorkflowController.php:40
 * @route '/kaizen-suggestion/{kaizenSuggestion}/implement'
 */
implement.url = (args: { kaizenSuggestion: number | { id: number } } | [kaizenSuggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { kaizenSuggestion: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { kaizenSuggestion: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    kaizenSuggestion: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        kaizenSuggestion: typeof args.kaizenSuggestion === 'object'
                ? args.kaizenSuggestion.id
                : args.kaizenSuggestion,
                }

    return implement.definition.url
            .replace('{kaizenSuggestion}', parsedArgs.kaizenSuggestion.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenWorkflowController::implement
 * @see app/Http/Controllers/ContinuousImprovement/KaizenWorkflowController.php:40
 * @route '/kaizen-suggestion/{kaizenSuggestion}/implement'
 */
implement.post = (args: { kaizenSuggestion: number | { id: number } } | [kaizenSuggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: implement.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenWorkflowController::implement
 * @see app/Http/Controllers/ContinuousImprovement/KaizenWorkflowController.php:40
 * @route '/kaizen-suggestion/{kaizenSuggestion}/implement'
 */
    const implementForm = (args: { kaizenSuggestion: number | { id: number } } | [kaizenSuggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: implement.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenWorkflowController::implement
 * @see app/Http/Controllers/ContinuousImprovement/KaizenWorkflowController.php:40
 * @route '/kaizen-suggestion/{kaizenSuggestion}/implement'
 */
        implementForm.post = (args: { kaizenSuggestion: number | { id: number } } | [kaizenSuggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: implement.url(args, options),
            method: 'post',
        })
    
    implement.form = implementForm
/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenWorkflowController::close
 * @see app/Http/Controllers/ContinuousImprovement/KaizenWorkflowController.php:45
 * @route '/kaizen-suggestion/{kaizenSuggestion}/close'
 */
export const close = (args: { kaizenSuggestion: number | { id: number } } | [kaizenSuggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: close.url(args, options),
    method: 'post',
})

close.definition = {
    methods: ["post"],
    url: '/kaizen-suggestion/{kaizenSuggestion}/close',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenWorkflowController::close
 * @see app/Http/Controllers/ContinuousImprovement/KaizenWorkflowController.php:45
 * @route '/kaizen-suggestion/{kaizenSuggestion}/close'
 */
close.url = (args: { kaizenSuggestion: number | { id: number } } | [kaizenSuggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { kaizenSuggestion: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { kaizenSuggestion: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    kaizenSuggestion: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        kaizenSuggestion: typeof args.kaizenSuggestion === 'object'
                ? args.kaizenSuggestion.id
                : args.kaizenSuggestion,
                }

    return close.definition.url
            .replace('{kaizenSuggestion}', parsedArgs.kaizenSuggestion.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenWorkflowController::close
 * @see app/Http/Controllers/ContinuousImprovement/KaizenWorkflowController.php:45
 * @route '/kaizen-suggestion/{kaizenSuggestion}/close'
 */
close.post = (args: { kaizenSuggestion: number | { id: number } } | [kaizenSuggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: close.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenWorkflowController::close
 * @see app/Http/Controllers/ContinuousImprovement/KaizenWorkflowController.php:45
 * @route '/kaizen-suggestion/{kaizenSuggestion}/close'
 */
    const closeForm = (args: { kaizenSuggestion: number | { id: number } } | [kaizenSuggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: close.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenWorkflowController::close
 * @see app/Http/Controllers/ContinuousImprovement/KaizenWorkflowController.php:45
 * @route '/kaizen-suggestion/{kaizenSuggestion}/close'
 */
        closeForm.post = (args: { kaizenSuggestion: number | { id: number } } | [kaizenSuggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: close.url(args, options),
            method: 'post',
        })
    
    close.form = closeForm
const kaizenSuggestion = {
    search: Object.assign(search, search),
index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
markUnderReview: Object.assign(markUnderReview, markUnderReview),
approve: Object.assign(approve, approve),
reject: Object.assign(reject, reject),
start: Object.assign(start, start),
implement: Object.assign(implement, implement),
close: Object.assign(close, close),
}

export default kaizenSuggestion