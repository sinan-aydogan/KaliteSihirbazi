import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\DistributorController::search
 * @see app/Http/Controllers/DistributorController.php:12
 * @route '/distributor/search'
 */
export const search = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: search.url(options),
    method: 'post',
})

search.definition = {
    methods: ["post"],
    url: '/distributor/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\DistributorController::search
 * @see app/Http/Controllers/DistributorController.php:12
 * @route '/distributor/search'
 */
search.url = (options?: RouteQueryOptions) => {
    return search.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DistributorController::search
 * @see app/Http/Controllers/DistributorController.php:12
 * @route '/distributor/search'
 */
search.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: search.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\DistributorController::search
 * @see app/Http/Controllers/DistributorController.php:12
 * @route '/distributor/search'
 */
    const searchForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: search.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\DistributorController::search
 * @see app/Http/Controllers/DistributorController.php:12
 * @route '/distributor/search'
 */
        searchForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: search.url(options),
            method: 'post',
        })
    
    search.form = searchForm
/**
* @see \App\Http\Controllers\DistributorController::index
 * @see app/Http/Controllers/DistributorController.php:12
 * @route '/distributor'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/distributor',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DistributorController::index
 * @see app/Http/Controllers/DistributorController.php:12
 * @route '/distributor'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DistributorController::index
 * @see app/Http/Controllers/DistributorController.php:12
 * @route '/distributor'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\DistributorController::index
 * @see app/Http/Controllers/DistributorController.php:12
 * @route '/distributor'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\DistributorController::index
 * @see app/Http/Controllers/DistributorController.php:12
 * @route '/distributor'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\DistributorController::index
 * @see app/Http/Controllers/DistributorController.php:12
 * @route '/distributor'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\DistributorController::index
 * @see app/Http/Controllers/DistributorController.php:12
 * @route '/distributor'
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
* @see \App\Http\Controllers\DistributorController::create
 * @see app/Http/Controllers/DistributorController.php:24
 * @route '/distributor/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/distributor/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DistributorController::create
 * @see app/Http/Controllers/DistributorController.php:24
 * @route '/distributor/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DistributorController::create
 * @see app/Http/Controllers/DistributorController.php:24
 * @route '/distributor/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\DistributorController::create
 * @see app/Http/Controllers/DistributorController.php:24
 * @route '/distributor/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\DistributorController::create
 * @see app/Http/Controllers/DistributorController.php:24
 * @route '/distributor/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\DistributorController::create
 * @see app/Http/Controllers/DistributorController.php:24
 * @route '/distributor/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\DistributorController::create
 * @see app/Http/Controllers/DistributorController.php:24
 * @route '/distributor/create'
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
* @see \App\Http\Controllers\DistributorController::store
 * @see app/Http/Controllers/DistributorController.php:29
 * @route '/distributor'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/distributor',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\DistributorController::store
 * @see app/Http/Controllers/DistributorController.php:29
 * @route '/distributor'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DistributorController::store
 * @see app/Http/Controllers/DistributorController.php:29
 * @route '/distributor'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\DistributorController::store
 * @see app/Http/Controllers/DistributorController.php:29
 * @route '/distributor'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\DistributorController::store
 * @see app/Http/Controllers/DistributorController.php:29
 * @route '/distributor'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\DistributorController::show
 * @see app/Http/Controllers/DistributorController.php:38
 * @route '/distributor/{distributor}'
 */
export const show = (args: { distributor: number | { id: number } } | [distributor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/distributor/{distributor}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DistributorController::show
 * @see app/Http/Controllers/DistributorController.php:38
 * @route '/distributor/{distributor}'
 */
show.url = (args: { distributor: number | { id: number } } | [distributor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { distributor: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { distributor: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    distributor: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        distributor: typeof args.distributor === 'object'
                ? args.distributor.id
                : args.distributor,
                }

    return show.definition.url
            .replace('{distributor}', parsedArgs.distributor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DistributorController::show
 * @see app/Http/Controllers/DistributorController.php:38
 * @route '/distributor/{distributor}'
 */
show.get = (args: { distributor: number | { id: number } } | [distributor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\DistributorController::show
 * @see app/Http/Controllers/DistributorController.php:38
 * @route '/distributor/{distributor}'
 */
show.head = (args: { distributor: number | { id: number } } | [distributor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\DistributorController::show
 * @see app/Http/Controllers/DistributorController.php:38
 * @route '/distributor/{distributor}'
 */
    const showForm = (args: { distributor: number | { id: number } } | [distributor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\DistributorController::show
 * @see app/Http/Controllers/DistributorController.php:38
 * @route '/distributor/{distributor}'
 */
        showForm.get = (args: { distributor: number | { id: number } } | [distributor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\DistributorController::show
 * @see app/Http/Controllers/DistributorController.php:38
 * @route '/distributor/{distributor}'
 */
        showForm.head = (args: { distributor: number | { id: number } } | [distributor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\DistributorController::edit
 * @see app/Http/Controllers/DistributorController.php:43
 * @route '/distributor/{distributor}/edit'
 */
export const edit = (args: { distributor: number | { id: number } } | [distributor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/distributor/{distributor}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DistributorController::edit
 * @see app/Http/Controllers/DistributorController.php:43
 * @route '/distributor/{distributor}/edit'
 */
edit.url = (args: { distributor: number | { id: number } } | [distributor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { distributor: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { distributor: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    distributor: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        distributor: typeof args.distributor === 'object'
                ? args.distributor.id
                : args.distributor,
                }

    return edit.definition.url
            .replace('{distributor}', parsedArgs.distributor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DistributorController::edit
 * @see app/Http/Controllers/DistributorController.php:43
 * @route '/distributor/{distributor}/edit'
 */
edit.get = (args: { distributor: number | { id: number } } | [distributor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\DistributorController::edit
 * @see app/Http/Controllers/DistributorController.php:43
 * @route '/distributor/{distributor}/edit'
 */
edit.head = (args: { distributor: number | { id: number } } | [distributor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\DistributorController::edit
 * @see app/Http/Controllers/DistributorController.php:43
 * @route '/distributor/{distributor}/edit'
 */
    const editForm = (args: { distributor: number | { id: number } } | [distributor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\DistributorController::edit
 * @see app/Http/Controllers/DistributorController.php:43
 * @route '/distributor/{distributor}/edit'
 */
        editForm.get = (args: { distributor: number | { id: number } } | [distributor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\DistributorController::edit
 * @see app/Http/Controllers/DistributorController.php:43
 * @route '/distributor/{distributor}/edit'
 */
        editForm.head = (args: { distributor: number | { id: number } } | [distributor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\DistributorController::update
 * @see app/Http/Controllers/DistributorController.php:48
 * @route '/distributor/{distributor}'
 */
export const update = (args: { distributor: number | { id: number } } | [distributor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/distributor/{distributor}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\DistributorController::update
 * @see app/Http/Controllers/DistributorController.php:48
 * @route '/distributor/{distributor}'
 */
update.url = (args: { distributor: number | { id: number } } | [distributor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { distributor: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { distributor: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    distributor: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        distributor: typeof args.distributor === 'object'
                ? args.distributor.id
                : args.distributor,
                }

    return update.definition.url
            .replace('{distributor}', parsedArgs.distributor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DistributorController::update
 * @see app/Http/Controllers/DistributorController.php:48
 * @route '/distributor/{distributor}'
 */
update.put = (args: { distributor: number | { id: number } } | [distributor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\DistributorController::update
 * @see app/Http/Controllers/DistributorController.php:48
 * @route '/distributor/{distributor}'
 */
update.patch = (args: { distributor: number | { id: number } } | [distributor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\DistributorController::update
 * @see app/Http/Controllers/DistributorController.php:48
 * @route '/distributor/{distributor}'
 */
    const updateForm = (args: { distributor: number | { id: number } } | [distributor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\DistributorController::update
 * @see app/Http/Controllers/DistributorController.php:48
 * @route '/distributor/{distributor}'
 */
        updateForm.put = (args: { distributor: number | { id: number } } | [distributor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\DistributorController::update
 * @see app/Http/Controllers/DistributorController.php:48
 * @route '/distributor/{distributor}'
 */
        updateForm.patch = (args: { distributor: number | { id: number } } | [distributor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\DistributorController::destroy
 * @see app/Http/Controllers/DistributorController.php:57
 * @route '/distributor/{distributor}'
 */
export const destroy = (args: { distributor: number | { id: number } } | [distributor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/distributor/{distributor}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\DistributorController::destroy
 * @see app/Http/Controllers/DistributorController.php:57
 * @route '/distributor/{distributor}'
 */
destroy.url = (args: { distributor: number | { id: number } } | [distributor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { distributor: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { distributor: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    distributor: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        distributor: typeof args.distributor === 'object'
                ? args.distributor.id
                : args.distributor,
                }

    return destroy.definition.url
            .replace('{distributor}', parsedArgs.distributor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DistributorController::destroy
 * @see app/Http/Controllers/DistributorController.php:57
 * @route '/distributor/{distributor}'
 */
destroy.delete = (args: { distributor: number | { id: number } } | [distributor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\DistributorController::destroy
 * @see app/Http/Controllers/DistributorController.php:57
 * @route '/distributor/{distributor}'
 */
    const destroyForm = (args: { distributor: number | { id: number } } | [distributor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\DistributorController::destroy
 * @see app/Http/Controllers/DistributorController.php:57
 * @route '/distributor/{distributor}'
 */
        destroyForm.delete = (args: { distributor: number | { id: number } } | [distributor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const distributor = {
    search: Object.assign(search, search),
index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default distributor