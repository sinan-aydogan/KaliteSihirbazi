import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\DistributorController::index
 * @see app/Http/Controllers/DistributorController.php:12
 * @route '/distributor/search'
 */
const indexc9c14058c97d9436a6cd21a04eaced99 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: indexc9c14058c97d9436a6cd21a04eaced99.url(options),
    method: 'post',
})

indexc9c14058c97d9436a6cd21a04eaced99.definition = {
    methods: ["post"],
    url: '/distributor/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\DistributorController::index
 * @see app/Http/Controllers/DistributorController.php:12
 * @route '/distributor/search'
 */
indexc9c14058c97d9436a6cd21a04eaced99.url = (options?: RouteQueryOptions) => {
    return indexc9c14058c97d9436a6cd21a04eaced99.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DistributorController::index
 * @see app/Http/Controllers/DistributorController.php:12
 * @route '/distributor/search'
 */
indexc9c14058c97d9436a6cd21a04eaced99.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: indexc9c14058c97d9436a6cd21a04eaced99.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\DistributorController::index
 * @see app/Http/Controllers/DistributorController.php:12
 * @route '/distributor/search'
 */
    const indexc9c14058c97d9436a6cd21a04eaced99Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: indexc9c14058c97d9436a6cd21a04eaced99.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\DistributorController::index
 * @see app/Http/Controllers/DistributorController.php:12
 * @route '/distributor/search'
 */
        indexc9c14058c97d9436a6cd21a04eaced99Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: indexc9c14058c97d9436a6cd21a04eaced99.url(options),
            method: 'post',
        })
    
    indexc9c14058c97d9436a6cd21a04eaced99.form = indexc9c14058c97d9436a6cd21a04eaced99Form
    /**
* @see \App\Http\Controllers\DistributorController::index
 * @see app/Http/Controllers/DistributorController.php:12
 * @route '/distributor'
 */
const indexb94f3d18abbb498d5575e6e894e93be3 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexb94f3d18abbb498d5575e6e894e93be3.url(options),
    method: 'get',
})

indexb94f3d18abbb498d5575e6e894e93be3.definition = {
    methods: ["get","head"],
    url: '/distributor',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DistributorController::index
 * @see app/Http/Controllers/DistributorController.php:12
 * @route '/distributor'
 */
indexb94f3d18abbb498d5575e6e894e93be3.url = (options?: RouteQueryOptions) => {
    return indexb94f3d18abbb498d5575e6e894e93be3.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DistributorController::index
 * @see app/Http/Controllers/DistributorController.php:12
 * @route '/distributor'
 */
indexb94f3d18abbb498d5575e6e894e93be3.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexb94f3d18abbb498d5575e6e894e93be3.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\DistributorController::index
 * @see app/Http/Controllers/DistributorController.php:12
 * @route '/distributor'
 */
indexb94f3d18abbb498d5575e6e894e93be3.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexb94f3d18abbb498d5575e6e894e93be3.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\DistributorController::index
 * @see app/Http/Controllers/DistributorController.php:12
 * @route '/distributor'
 */
    const indexb94f3d18abbb498d5575e6e894e93be3Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: indexb94f3d18abbb498d5575e6e894e93be3.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\DistributorController::index
 * @see app/Http/Controllers/DistributorController.php:12
 * @route '/distributor'
 */
        indexb94f3d18abbb498d5575e6e894e93be3Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexb94f3d18abbb498d5575e6e894e93be3.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\DistributorController::index
 * @see app/Http/Controllers/DistributorController.php:12
 * @route '/distributor'
 */
        indexb94f3d18abbb498d5575e6e894e93be3Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexb94f3d18abbb498d5575e6e894e93be3.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    indexb94f3d18abbb498d5575e6e894e93be3.form = indexb94f3d18abbb498d5575e6e894e93be3Form

/**
* Multiple routes resolve to \App\Http\Controllers\DistributorController::index, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `index['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const index = {
    '/distributor/search': indexc9c14058c97d9436a6cd21a04eaced99,
    '/distributor': indexb94f3d18abbb498d5575e6e894e93be3,
}

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
const DistributorController = { index, create, store, show, edit, update, destroy }

export default DistributorController