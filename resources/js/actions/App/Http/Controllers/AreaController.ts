import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\AreaController::index
 * @see app/Http/Controllers/AreaController.php:14
 * @route '/area/search'
 */
const indexb16fce13651cc2834ef84d92c0903da8 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: indexb16fce13651cc2834ef84d92c0903da8.url(options),
    method: 'post',
})

indexb16fce13651cc2834ef84d92c0903da8.definition = {
    methods: ["post"],
    url: '/area/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AreaController::index
 * @see app/Http/Controllers/AreaController.php:14
 * @route '/area/search'
 */
indexb16fce13651cc2834ef84d92c0903da8.url = (options?: RouteQueryOptions) => {
    return indexb16fce13651cc2834ef84d92c0903da8.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AreaController::index
 * @see app/Http/Controllers/AreaController.php:14
 * @route '/area/search'
 */
indexb16fce13651cc2834ef84d92c0903da8.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: indexb16fce13651cc2834ef84d92c0903da8.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\AreaController::index
 * @see app/Http/Controllers/AreaController.php:14
 * @route '/area/search'
 */
    const indexb16fce13651cc2834ef84d92c0903da8Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: indexb16fce13651cc2834ef84d92c0903da8.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AreaController::index
 * @see app/Http/Controllers/AreaController.php:14
 * @route '/area/search'
 */
        indexb16fce13651cc2834ef84d92c0903da8Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: indexb16fce13651cc2834ef84d92c0903da8.url(options),
            method: 'post',
        })
    
    indexb16fce13651cc2834ef84d92c0903da8.form = indexb16fce13651cc2834ef84d92c0903da8Form
    /**
* @see \App\Http\Controllers\AreaController::index
 * @see app/Http/Controllers/AreaController.php:14
 * @route '/area'
 */
const indexc1e698d1f14a1a1f19a62b07f65b393c = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexc1e698d1f14a1a1f19a62b07f65b393c.url(options),
    method: 'get',
})

indexc1e698d1f14a1a1f19a62b07f65b393c.definition = {
    methods: ["get","head"],
    url: '/area',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AreaController::index
 * @see app/Http/Controllers/AreaController.php:14
 * @route '/area'
 */
indexc1e698d1f14a1a1f19a62b07f65b393c.url = (options?: RouteQueryOptions) => {
    return indexc1e698d1f14a1a1f19a62b07f65b393c.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AreaController::index
 * @see app/Http/Controllers/AreaController.php:14
 * @route '/area'
 */
indexc1e698d1f14a1a1f19a62b07f65b393c.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexc1e698d1f14a1a1f19a62b07f65b393c.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AreaController::index
 * @see app/Http/Controllers/AreaController.php:14
 * @route '/area'
 */
indexc1e698d1f14a1a1f19a62b07f65b393c.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexc1e698d1f14a1a1f19a62b07f65b393c.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AreaController::index
 * @see app/Http/Controllers/AreaController.php:14
 * @route '/area'
 */
    const indexc1e698d1f14a1a1f19a62b07f65b393cForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: indexc1e698d1f14a1a1f19a62b07f65b393c.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AreaController::index
 * @see app/Http/Controllers/AreaController.php:14
 * @route '/area'
 */
        indexc1e698d1f14a1a1f19a62b07f65b393cForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexc1e698d1f14a1a1f19a62b07f65b393c.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AreaController::index
 * @see app/Http/Controllers/AreaController.php:14
 * @route '/area'
 */
        indexc1e698d1f14a1a1f19a62b07f65b393cForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexc1e698d1f14a1a1f19a62b07f65b393c.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    indexc1e698d1f14a1a1f19a62b07f65b393c.form = indexc1e698d1f14a1a1f19a62b07f65b393cForm

/**
* Multiple routes resolve to \App\Http\Controllers\AreaController::index, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `index['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const index = {
    '/area/search': indexb16fce13651cc2834ef84d92c0903da8,
    '/area': indexc1e698d1f14a1a1f19a62b07f65b393c,
}

/**
* @see \App\Http\Controllers\AreaController::create
 * @see app/Http/Controllers/AreaController.php:28
 * @route '/area/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/area/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AreaController::create
 * @see app/Http/Controllers/AreaController.php:28
 * @route '/area/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AreaController::create
 * @see app/Http/Controllers/AreaController.php:28
 * @route '/area/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AreaController::create
 * @see app/Http/Controllers/AreaController.php:28
 * @route '/area/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AreaController::create
 * @see app/Http/Controllers/AreaController.php:28
 * @route '/area/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AreaController::create
 * @see app/Http/Controllers/AreaController.php:28
 * @route '/area/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AreaController::create
 * @see app/Http/Controllers/AreaController.php:28
 * @route '/area/create'
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
* @see \App\Http\Controllers\AreaController::store
 * @see app/Http/Controllers/AreaController.php:33
 * @route '/area'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/area',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AreaController::store
 * @see app/Http/Controllers/AreaController.php:33
 * @route '/area'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AreaController::store
 * @see app/Http/Controllers/AreaController.php:33
 * @route '/area'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\AreaController::store
 * @see app/Http/Controllers/AreaController.php:33
 * @route '/area'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AreaController::store
 * @see app/Http/Controllers/AreaController.php:33
 * @route '/area'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\AreaController::show
 * @see app/Http/Controllers/AreaController.php:42
 * @route '/area/{area}'
 */
export const show = (args: { area: number | { id: number } } | [area: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/area/{area}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AreaController::show
 * @see app/Http/Controllers/AreaController.php:42
 * @route '/area/{area}'
 */
show.url = (args: { area: number | { id: number } } | [area: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { area: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { area: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    area: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        area: typeof args.area === 'object'
                ? args.area.id
                : args.area,
                }

    return show.definition.url
            .replace('{area}', parsedArgs.area.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AreaController::show
 * @see app/Http/Controllers/AreaController.php:42
 * @route '/area/{area}'
 */
show.get = (args: { area: number | { id: number } } | [area: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AreaController::show
 * @see app/Http/Controllers/AreaController.php:42
 * @route '/area/{area}'
 */
show.head = (args: { area: number | { id: number } } | [area: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AreaController::show
 * @see app/Http/Controllers/AreaController.php:42
 * @route '/area/{area}'
 */
    const showForm = (args: { area: number | { id: number } } | [area: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AreaController::show
 * @see app/Http/Controllers/AreaController.php:42
 * @route '/area/{area}'
 */
        showForm.get = (args: { area: number | { id: number } } | [area: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AreaController::show
 * @see app/Http/Controllers/AreaController.php:42
 * @route '/area/{area}'
 */
        showForm.head = (args: { area: number | { id: number } } | [area: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\AreaController::edit
 * @see app/Http/Controllers/AreaController.php:51
 * @route '/area/{area}/edit'
 */
export const edit = (args: { area: number | { id: number } } | [area: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/area/{area}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AreaController::edit
 * @see app/Http/Controllers/AreaController.php:51
 * @route '/area/{area}/edit'
 */
edit.url = (args: { area: number | { id: number } } | [area: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { area: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { area: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    area: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        area: typeof args.area === 'object'
                ? args.area.id
                : args.area,
                }

    return edit.definition.url
            .replace('{area}', parsedArgs.area.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AreaController::edit
 * @see app/Http/Controllers/AreaController.php:51
 * @route '/area/{area}/edit'
 */
edit.get = (args: { area: number | { id: number } } | [area: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AreaController::edit
 * @see app/Http/Controllers/AreaController.php:51
 * @route '/area/{area}/edit'
 */
edit.head = (args: { area: number | { id: number } } | [area: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AreaController::edit
 * @see app/Http/Controllers/AreaController.php:51
 * @route '/area/{area}/edit'
 */
    const editForm = (args: { area: number | { id: number } } | [area: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AreaController::edit
 * @see app/Http/Controllers/AreaController.php:51
 * @route '/area/{area}/edit'
 */
        editForm.get = (args: { area: number | { id: number } } | [area: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AreaController::edit
 * @see app/Http/Controllers/AreaController.php:51
 * @route '/area/{area}/edit'
 */
        editForm.head = (args: { area: number | { id: number } } | [area: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\AreaController::update
 * @see app/Http/Controllers/AreaController.php:56
 * @route '/area/{area}'
 */
export const update = (args: { area: number | { id: number } } | [area: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/area/{area}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\AreaController::update
 * @see app/Http/Controllers/AreaController.php:56
 * @route '/area/{area}'
 */
update.url = (args: { area: number | { id: number } } | [area: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { area: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { area: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    area: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        area: typeof args.area === 'object'
                ? args.area.id
                : args.area,
                }

    return update.definition.url
            .replace('{area}', parsedArgs.area.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AreaController::update
 * @see app/Http/Controllers/AreaController.php:56
 * @route '/area/{area}'
 */
update.put = (args: { area: number | { id: number } } | [area: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\AreaController::update
 * @see app/Http/Controllers/AreaController.php:56
 * @route '/area/{area}'
 */
update.patch = (args: { area: number | { id: number } } | [area: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\AreaController::update
 * @see app/Http/Controllers/AreaController.php:56
 * @route '/area/{area}'
 */
    const updateForm = (args: { area: number | { id: number } } | [area: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AreaController::update
 * @see app/Http/Controllers/AreaController.php:56
 * @route '/area/{area}'
 */
        updateForm.put = (args: { area: number | { id: number } } | [area: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\AreaController::update
 * @see app/Http/Controllers/AreaController.php:56
 * @route '/area/{area}'
 */
        updateForm.patch = (args: { area: number | { id: number } } | [area: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\AreaController::destroy
 * @see app/Http/Controllers/AreaController.php:65
 * @route '/area/{area}'
 */
export const destroy = (args: { area: number | { id: number } } | [area: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/area/{area}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\AreaController::destroy
 * @see app/Http/Controllers/AreaController.php:65
 * @route '/area/{area}'
 */
destroy.url = (args: { area: number | { id: number } } | [area: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { area: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { area: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    area: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        area: typeof args.area === 'object'
                ? args.area.id
                : args.area,
                }

    return destroy.definition.url
            .replace('{area}', parsedArgs.area.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AreaController::destroy
 * @see app/Http/Controllers/AreaController.php:65
 * @route '/area/{area}'
 */
destroy.delete = (args: { area: number | { id: number } } | [area: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\AreaController::destroy
 * @see app/Http/Controllers/AreaController.php:65
 * @route '/area/{area}'
 */
    const destroyForm = (args: { area: number | { id: number } } | [area: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AreaController::destroy
 * @see app/Http/Controllers/AreaController.php:65
 * @route '/area/{area}'
 */
        destroyForm.delete = (args: { area: number | { id: number } } | [area: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const AreaController = { index, create, store, show, edit, update, destroy }

export default AreaController