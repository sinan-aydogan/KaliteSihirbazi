import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Setting\PropertyTypeController::index
 * @see app/Http/Controllers/Setting/PropertyTypeController.php:14
 * @route '/settings/property-type'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/settings/property-type',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Setting\PropertyTypeController::index
 * @see app/Http/Controllers/Setting/PropertyTypeController.php:14
 * @route '/settings/property-type'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Setting\PropertyTypeController::index
 * @see app/Http/Controllers/Setting/PropertyTypeController.php:14
 * @route '/settings/property-type'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Setting\PropertyTypeController::index
 * @see app/Http/Controllers/Setting/PropertyTypeController.php:14
 * @route '/settings/property-type'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Setting\PropertyTypeController::index
 * @see app/Http/Controllers/Setting/PropertyTypeController.php:14
 * @route '/settings/property-type'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Setting\PropertyTypeController::index
 * @see app/Http/Controllers/Setting/PropertyTypeController.php:14
 * @route '/settings/property-type'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Setting\PropertyTypeController::index
 * @see app/Http/Controllers/Setting/PropertyTypeController.php:14
 * @route '/settings/property-type'
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
* @see \App\Http\Controllers\Setting\PropertyTypeController::create
 * @see app/Http/Controllers/Setting/PropertyTypeController.php:0
 * @route '/settings/property-type/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/settings/property-type/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Setting\PropertyTypeController::create
 * @see app/Http/Controllers/Setting/PropertyTypeController.php:0
 * @route '/settings/property-type/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Setting\PropertyTypeController::create
 * @see app/Http/Controllers/Setting/PropertyTypeController.php:0
 * @route '/settings/property-type/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Setting\PropertyTypeController::create
 * @see app/Http/Controllers/Setting/PropertyTypeController.php:0
 * @route '/settings/property-type/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Setting\PropertyTypeController::create
 * @see app/Http/Controllers/Setting/PropertyTypeController.php:0
 * @route '/settings/property-type/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Setting\PropertyTypeController::create
 * @see app/Http/Controllers/Setting/PropertyTypeController.php:0
 * @route '/settings/property-type/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Setting\PropertyTypeController::create
 * @see app/Http/Controllers/Setting/PropertyTypeController.php:0
 * @route '/settings/property-type/create'
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
* @see \App\Http\Controllers\Setting\PropertyTypeController::store
 * @see app/Http/Controllers/Setting/PropertyTypeController.php:21
 * @route '/settings/property-type'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/settings/property-type',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Setting\PropertyTypeController::store
 * @see app/Http/Controllers/Setting/PropertyTypeController.php:21
 * @route '/settings/property-type'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Setting\PropertyTypeController::store
 * @see app/Http/Controllers/Setting/PropertyTypeController.php:21
 * @route '/settings/property-type'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Setting\PropertyTypeController::store
 * @see app/Http/Controllers/Setting/PropertyTypeController.php:21
 * @route '/settings/property-type'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Setting\PropertyTypeController::store
 * @see app/Http/Controllers/Setting/PropertyTypeController.php:21
 * @route '/settings/property-type'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Setting\PropertyTypeController::show
 * @see app/Http/Controllers/Setting/PropertyTypeController.php:0
 * @route '/settings/property-type/{property_type}'
 */
export const show = (args: { property_type: string | number } | [property_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/settings/property-type/{property_type}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Setting\PropertyTypeController::show
 * @see app/Http/Controllers/Setting/PropertyTypeController.php:0
 * @route '/settings/property-type/{property_type}'
 */
show.url = (args: { property_type: string | number } | [property_type: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { property_type: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    property_type: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        property_type: args.property_type,
                }

    return show.definition.url
            .replace('{property_type}', parsedArgs.property_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Setting\PropertyTypeController::show
 * @see app/Http/Controllers/Setting/PropertyTypeController.php:0
 * @route '/settings/property-type/{property_type}'
 */
show.get = (args: { property_type: string | number } | [property_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Setting\PropertyTypeController::show
 * @see app/Http/Controllers/Setting/PropertyTypeController.php:0
 * @route '/settings/property-type/{property_type}'
 */
show.head = (args: { property_type: string | number } | [property_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Setting\PropertyTypeController::show
 * @see app/Http/Controllers/Setting/PropertyTypeController.php:0
 * @route '/settings/property-type/{property_type}'
 */
    const showForm = (args: { property_type: string | number } | [property_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Setting\PropertyTypeController::show
 * @see app/Http/Controllers/Setting/PropertyTypeController.php:0
 * @route '/settings/property-type/{property_type}'
 */
        showForm.get = (args: { property_type: string | number } | [property_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Setting\PropertyTypeController::show
 * @see app/Http/Controllers/Setting/PropertyTypeController.php:0
 * @route '/settings/property-type/{property_type}'
 */
        showForm.head = (args: { property_type: string | number } | [property_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Setting\PropertyTypeController::edit
 * @see app/Http/Controllers/Setting/PropertyTypeController.php:0
 * @route '/settings/property-type/{property_type}/edit'
 */
export const edit = (args: { property_type: string | number } | [property_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/settings/property-type/{property_type}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Setting\PropertyTypeController::edit
 * @see app/Http/Controllers/Setting/PropertyTypeController.php:0
 * @route '/settings/property-type/{property_type}/edit'
 */
edit.url = (args: { property_type: string | number } | [property_type: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { property_type: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    property_type: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        property_type: args.property_type,
                }

    return edit.definition.url
            .replace('{property_type}', parsedArgs.property_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Setting\PropertyTypeController::edit
 * @see app/Http/Controllers/Setting/PropertyTypeController.php:0
 * @route '/settings/property-type/{property_type}/edit'
 */
edit.get = (args: { property_type: string | number } | [property_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Setting\PropertyTypeController::edit
 * @see app/Http/Controllers/Setting/PropertyTypeController.php:0
 * @route '/settings/property-type/{property_type}/edit'
 */
edit.head = (args: { property_type: string | number } | [property_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Setting\PropertyTypeController::edit
 * @see app/Http/Controllers/Setting/PropertyTypeController.php:0
 * @route '/settings/property-type/{property_type}/edit'
 */
    const editForm = (args: { property_type: string | number } | [property_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Setting\PropertyTypeController::edit
 * @see app/Http/Controllers/Setting/PropertyTypeController.php:0
 * @route '/settings/property-type/{property_type}/edit'
 */
        editForm.get = (args: { property_type: string | number } | [property_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Setting\PropertyTypeController::edit
 * @see app/Http/Controllers/Setting/PropertyTypeController.php:0
 * @route '/settings/property-type/{property_type}/edit'
 */
        editForm.head = (args: { property_type: string | number } | [property_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Setting\PropertyTypeController::update
 * @see app/Http/Controllers/Setting/PropertyTypeController.php:28
 * @route '/settings/property-type/{property_type}'
 */
export const update = (args: { property_type: number | { id: number } } | [property_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/settings/property-type/{property_type}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Setting\PropertyTypeController::update
 * @see app/Http/Controllers/Setting/PropertyTypeController.php:28
 * @route '/settings/property-type/{property_type}'
 */
update.url = (args: { property_type: number | { id: number } } | [property_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { property_type: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { property_type: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    property_type: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        property_type: typeof args.property_type === 'object'
                ? args.property_type.id
                : args.property_type,
                }

    return update.definition.url
            .replace('{property_type}', parsedArgs.property_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Setting\PropertyTypeController::update
 * @see app/Http/Controllers/Setting/PropertyTypeController.php:28
 * @route '/settings/property-type/{property_type}'
 */
update.put = (args: { property_type: number | { id: number } } | [property_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Setting\PropertyTypeController::update
 * @see app/Http/Controllers/Setting/PropertyTypeController.php:28
 * @route '/settings/property-type/{property_type}'
 */
update.patch = (args: { property_type: number | { id: number } } | [property_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\Setting\PropertyTypeController::update
 * @see app/Http/Controllers/Setting/PropertyTypeController.php:28
 * @route '/settings/property-type/{property_type}'
 */
    const updateForm = (args: { property_type: number | { id: number } } | [property_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Setting\PropertyTypeController::update
 * @see app/Http/Controllers/Setting/PropertyTypeController.php:28
 * @route '/settings/property-type/{property_type}'
 */
        updateForm.put = (args: { property_type: number | { id: number } } | [property_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\Setting\PropertyTypeController::update
 * @see app/Http/Controllers/Setting/PropertyTypeController.php:28
 * @route '/settings/property-type/{property_type}'
 */
        updateForm.patch = (args: { property_type: number | { id: number } } | [property_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Setting\PropertyTypeController::destroy
 * @see app/Http/Controllers/Setting/PropertyTypeController.php:35
 * @route '/settings/property-type/{property_type}'
 */
export const destroy = (args: { property_type: number | { id: number } } | [property_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/settings/property-type/{property_type}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Setting\PropertyTypeController::destroy
 * @see app/Http/Controllers/Setting/PropertyTypeController.php:35
 * @route '/settings/property-type/{property_type}'
 */
destroy.url = (args: { property_type: number | { id: number } } | [property_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { property_type: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { property_type: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    property_type: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        property_type: typeof args.property_type === 'object'
                ? args.property_type.id
                : args.property_type,
                }

    return destroy.definition.url
            .replace('{property_type}', parsedArgs.property_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Setting\PropertyTypeController::destroy
 * @see app/Http/Controllers/Setting/PropertyTypeController.php:35
 * @route '/settings/property-type/{property_type}'
 */
destroy.delete = (args: { property_type: number | { id: number } } | [property_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Setting\PropertyTypeController::destroy
 * @see app/Http/Controllers/Setting/PropertyTypeController.php:35
 * @route '/settings/property-type/{property_type}'
 */
    const destroyForm = (args: { property_type: number | { id: number } } | [property_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Setting\PropertyTypeController::destroy
 * @see app/Http/Controllers/Setting/PropertyTypeController.php:35
 * @route '/settings/property-type/{property_type}'
 */
        destroyForm.delete = (args: { property_type: number | { id: number } } | [property_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const PropertyTypeController = { index, create, store, show, edit, update, destroy }

export default PropertyTypeController