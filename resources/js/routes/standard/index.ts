import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\StandardController::search
 * @see app/Http/Controllers/StandardController.php:12
 * @route '/standard/search'
 */
export const search = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: search.url(options),
    method: 'post',
})

search.definition = {
    methods: ["post"],
    url: '/standard/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\StandardController::search
 * @see app/Http/Controllers/StandardController.php:12
 * @route '/standard/search'
 */
search.url = (options?: RouteQueryOptions) => {
    return search.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\StandardController::search
 * @see app/Http/Controllers/StandardController.php:12
 * @route '/standard/search'
 */
search.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: search.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\StandardController::search
 * @see app/Http/Controllers/StandardController.php:12
 * @route '/standard/search'
 */
    const searchForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: search.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\StandardController::search
 * @see app/Http/Controllers/StandardController.php:12
 * @route '/standard/search'
 */
        searchForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: search.url(options),
            method: 'post',
        })
    
    search.form = searchForm
/**
* @see \App\Http\Controllers\StandardController::index
 * @see app/Http/Controllers/StandardController.php:12
 * @route '/standard'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/standard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StandardController::index
 * @see app/Http/Controllers/StandardController.php:12
 * @route '/standard'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\StandardController::index
 * @see app/Http/Controllers/StandardController.php:12
 * @route '/standard'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\StandardController::index
 * @see app/Http/Controllers/StandardController.php:12
 * @route '/standard'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\StandardController::index
 * @see app/Http/Controllers/StandardController.php:12
 * @route '/standard'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\StandardController::index
 * @see app/Http/Controllers/StandardController.php:12
 * @route '/standard'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\StandardController::index
 * @see app/Http/Controllers/StandardController.php:12
 * @route '/standard'
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
* @see \App\Http\Controllers\StandardController::create
 * @see app/Http/Controllers/StandardController.php:24
 * @route '/standard/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/standard/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StandardController::create
 * @see app/Http/Controllers/StandardController.php:24
 * @route '/standard/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\StandardController::create
 * @see app/Http/Controllers/StandardController.php:24
 * @route '/standard/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\StandardController::create
 * @see app/Http/Controllers/StandardController.php:24
 * @route '/standard/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\StandardController::create
 * @see app/Http/Controllers/StandardController.php:24
 * @route '/standard/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\StandardController::create
 * @see app/Http/Controllers/StandardController.php:24
 * @route '/standard/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\StandardController::create
 * @see app/Http/Controllers/StandardController.php:24
 * @route '/standard/create'
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
* @see \App\Http\Controllers\StandardController::store
 * @see app/Http/Controllers/StandardController.php:29
 * @route '/standard'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/standard',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\StandardController::store
 * @see app/Http/Controllers/StandardController.php:29
 * @route '/standard'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\StandardController::store
 * @see app/Http/Controllers/StandardController.php:29
 * @route '/standard'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\StandardController::store
 * @see app/Http/Controllers/StandardController.php:29
 * @route '/standard'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\StandardController::store
 * @see app/Http/Controllers/StandardController.php:29
 * @route '/standard'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\StandardController::show
 * @see app/Http/Controllers/StandardController.php:38
 * @route '/standard/{standard}'
 */
export const show = (args: { standard: number | { id: number } } | [standard: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/standard/{standard}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StandardController::show
 * @see app/Http/Controllers/StandardController.php:38
 * @route '/standard/{standard}'
 */
show.url = (args: { standard: number | { id: number } } | [standard: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { standard: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { standard: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    standard: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        standard: typeof args.standard === 'object'
                ? args.standard.id
                : args.standard,
                }

    return show.definition.url
            .replace('{standard}', parsedArgs.standard.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\StandardController::show
 * @see app/Http/Controllers/StandardController.php:38
 * @route '/standard/{standard}'
 */
show.get = (args: { standard: number | { id: number } } | [standard: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\StandardController::show
 * @see app/Http/Controllers/StandardController.php:38
 * @route '/standard/{standard}'
 */
show.head = (args: { standard: number | { id: number } } | [standard: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\StandardController::show
 * @see app/Http/Controllers/StandardController.php:38
 * @route '/standard/{standard}'
 */
    const showForm = (args: { standard: number | { id: number } } | [standard: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\StandardController::show
 * @see app/Http/Controllers/StandardController.php:38
 * @route '/standard/{standard}'
 */
        showForm.get = (args: { standard: number | { id: number } } | [standard: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\StandardController::show
 * @see app/Http/Controllers/StandardController.php:38
 * @route '/standard/{standard}'
 */
        showForm.head = (args: { standard: number | { id: number } } | [standard: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\StandardController::edit
 * @see app/Http/Controllers/StandardController.php:43
 * @route '/standard/{standard}/edit'
 */
export const edit = (args: { standard: number | { id: number } } | [standard: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/standard/{standard}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StandardController::edit
 * @see app/Http/Controllers/StandardController.php:43
 * @route '/standard/{standard}/edit'
 */
edit.url = (args: { standard: number | { id: number } } | [standard: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { standard: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { standard: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    standard: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        standard: typeof args.standard === 'object'
                ? args.standard.id
                : args.standard,
                }

    return edit.definition.url
            .replace('{standard}', parsedArgs.standard.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\StandardController::edit
 * @see app/Http/Controllers/StandardController.php:43
 * @route '/standard/{standard}/edit'
 */
edit.get = (args: { standard: number | { id: number } } | [standard: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\StandardController::edit
 * @see app/Http/Controllers/StandardController.php:43
 * @route '/standard/{standard}/edit'
 */
edit.head = (args: { standard: number | { id: number } } | [standard: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\StandardController::edit
 * @see app/Http/Controllers/StandardController.php:43
 * @route '/standard/{standard}/edit'
 */
    const editForm = (args: { standard: number | { id: number } } | [standard: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\StandardController::edit
 * @see app/Http/Controllers/StandardController.php:43
 * @route '/standard/{standard}/edit'
 */
        editForm.get = (args: { standard: number | { id: number } } | [standard: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\StandardController::edit
 * @see app/Http/Controllers/StandardController.php:43
 * @route '/standard/{standard}/edit'
 */
        editForm.head = (args: { standard: number | { id: number } } | [standard: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\StandardController::update
 * @see app/Http/Controllers/StandardController.php:48
 * @route '/standard/{standard}'
 */
export const update = (args: { standard: number | { id: number } } | [standard: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/standard/{standard}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\StandardController::update
 * @see app/Http/Controllers/StandardController.php:48
 * @route '/standard/{standard}'
 */
update.url = (args: { standard: number | { id: number } } | [standard: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { standard: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { standard: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    standard: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        standard: typeof args.standard === 'object'
                ? args.standard.id
                : args.standard,
                }

    return update.definition.url
            .replace('{standard}', parsedArgs.standard.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\StandardController::update
 * @see app/Http/Controllers/StandardController.php:48
 * @route '/standard/{standard}'
 */
update.put = (args: { standard: number | { id: number } } | [standard: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\StandardController::update
 * @see app/Http/Controllers/StandardController.php:48
 * @route '/standard/{standard}'
 */
update.patch = (args: { standard: number | { id: number } } | [standard: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\StandardController::update
 * @see app/Http/Controllers/StandardController.php:48
 * @route '/standard/{standard}'
 */
    const updateForm = (args: { standard: number | { id: number } } | [standard: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\StandardController::update
 * @see app/Http/Controllers/StandardController.php:48
 * @route '/standard/{standard}'
 */
        updateForm.put = (args: { standard: number | { id: number } } | [standard: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\StandardController::update
 * @see app/Http/Controllers/StandardController.php:48
 * @route '/standard/{standard}'
 */
        updateForm.patch = (args: { standard: number | { id: number } } | [standard: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\StandardController::destroy
 * @see app/Http/Controllers/StandardController.php:57
 * @route '/standard/{standard}'
 */
export const destroy = (args: { standard: number | { id: number } } | [standard: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/standard/{standard}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\StandardController::destroy
 * @see app/Http/Controllers/StandardController.php:57
 * @route '/standard/{standard}'
 */
destroy.url = (args: { standard: number | { id: number } } | [standard: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { standard: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { standard: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    standard: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        standard: typeof args.standard === 'object'
                ? args.standard.id
                : args.standard,
                }

    return destroy.definition.url
            .replace('{standard}', parsedArgs.standard.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\StandardController::destroy
 * @see app/Http/Controllers/StandardController.php:57
 * @route '/standard/{standard}'
 */
destroy.delete = (args: { standard: number | { id: number } } | [standard: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\StandardController::destroy
 * @see app/Http/Controllers/StandardController.php:57
 * @route '/standard/{standard}'
 */
    const destroyForm = (args: { standard: number | { id: number } } | [standard: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\StandardController::destroy
 * @see app/Http/Controllers/StandardController.php:57
 * @route '/standard/{standard}'
 */
        destroyForm.delete = (args: { standard: number | { id: number } } | [standard: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const standard = {
    search: Object.assign(search, search),
index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default standard