import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Document\DocumentTypeController::index
 * @see app/Http/Controllers/Document/DocumentTypeController.php:16
 * @route '/document-type/search'
 */
const index45c8ba2cb2a69c361ee0e0ee0b738e6c = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: index45c8ba2cb2a69c361ee0e0ee0b738e6c.url(options),
    method: 'post',
})

index45c8ba2cb2a69c361ee0e0ee0b738e6c.definition = {
    methods: ["post"],
    url: '/document-type/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Document\DocumentTypeController::index
 * @see app/Http/Controllers/Document/DocumentTypeController.php:16
 * @route '/document-type/search'
 */
index45c8ba2cb2a69c361ee0e0ee0b738e6c.url = (options?: RouteQueryOptions) => {
    return index45c8ba2cb2a69c361ee0e0ee0b738e6c.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Document\DocumentTypeController::index
 * @see app/Http/Controllers/Document/DocumentTypeController.php:16
 * @route '/document-type/search'
 */
index45c8ba2cb2a69c361ee0e0ee0b738e6c.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: index45c8ba2cb2a69c361ee0e0ee0b738e6c.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Document\DocumentTypeController::index
 * @see app/Http/Controllers/Document/DocumentTypeController.php:16
 * @route '/document-type/search'
 */
    const index45c8ba2cb2a69c361ee0e0ee0b738e6cForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: index45c8ba2cb2a69c361ee0e0ee0b738e6c.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Document\DocumentTypeController::index
 * @see app/Http/Controllers/Document/DocumentTypeController.php:16
 * @route '/document-type/search'
 */
        index45c8ba2cb2a69c361ee0e0ee0b738e6cForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: index45c8ba2cb2a69c361ee0e0ee0b738e6c.url(options),
            method: 'post',
        })
    
    index45c8ba2cb2a69c361ee0e0ee0b738e6c.form = index45c8ba2cb2a69c361ee0e0ee0b738e6cForm
    /**
* @see \App\Http\Controllers\Document\DocumentTypeController::index
 * @see app/Http/Controllers/Document/DocumentTypeController.php:16
 * @route '/document-type'
 */
const index9fb5989d9eab5be8e2dd6398e6af1b50 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index9fb5989d9eab5be8e2dd6398e6af1b50.url(options),
    method: 'get',
})

index9fb5989d9eab5be8e2dd6398e6af1b50.definition = {
    methods: ["get","head"],
    url: '/document-type',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Document\DocumentTypeController::index
 * @see app/Http/Controllers/Document/DocumentTypeController.php:16
 * @route '/document-type'
 */
index9fb5989d9eab5be8e2dd6398e6af1b50.url = (options?: RouteQueryOptions) => {
    return index9fb5989d9eab5be8e2dd6398e6af1b50.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Document\DocumentTypeController::index
 * @see app/Http/Controllers/Document/DocumentTypeController.php:16
 * @route '/document-type'
 */
index9fb5989d9eab5be8e2dd6398e6af1b50.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index9fb5989d9eab5be8e2dd6398e6af1b50.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Document\DocumentTypeController::index
 * @see app/Http/Controllers/Document/DocumentTypeController.php:16
 * @route '/document-type'
 */
index9fb5989d9eab5be8e2dd6398e6af1b50.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index9fb5989d9eab5be8e2dd6398e6af1b50.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Document\DocumentTypeController::index
 * @see app/Http/Controllers/Document/DocumentTypeController.php:16
 * @route '/document-type'
 */
    const index9fb5989d9eab5be8e2dd6398e6af1b50Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index9fb5989d9eab5be8e2dd6398e6af1b50.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Document\DocumentTypeController::index
 * @see app/Http/Controllers/Document/DocumentTypeController.php:16
 * @route '/document-type'
 */
        index9fb5989d9eab5be8e2dd6398e6af1b50Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index9fb5989d9eab5be8e2dd6398e6af1b50.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Document\DocumentTypeController::index
 * @see app/Http/Controllers/Document/DocumentTypeController.php:16
 * @route '/document-type'
 */
        index9fb5989d9eab5be8e2dd6398e6af1b50Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index9fb5989d9eab5be8e2dd6398e6af1b50.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index9fb5989d9eab5be8e2dd6398e6af1b50.form = index9fb5989d9eab5be8e2dd6398e6af1b50Form

/**
* Multiple routes resolve to \App\Http\Controllers\Document\DocumentTypeController::index, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `index['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const index = {
    '/document-type/search': index45c8ba2cb2a69c361ee0e0ee0b738e6c,
    '/document-type': index9fb5989d9eab5be8e2dd6398e6af1b50,
}

/**
* @see \App\Http\Controllers\Document\DocumentTypeController::create
 * @see app/Http/Controllers/Document/DocumentTypeController.php:28
 * @route '/document-type/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/document-type/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Document\DocumentTypeController::create
 * @see app/Http/Controllers/Document/DocumentTypeController.php:28
 * @route '/document-type/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Document\DocumentTypeController::create
 * @see app/Http/Controllers/Document/DocumentTypeController.php:28
 * @route '/document-type/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Document\DocumentTypeController::create
 * @see app/Http/Controllers/Document/DocumentTypeController.php:28
 * @route '/document-type/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Document\DocumentTypeController::create
 * @see app/Http/Controllers/Document/DocumentTypeController.php:28
 * @route '/document-type/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Document\DocumentTypeController::create
 * @see app/Http/Controllers/Document/DocumentTypeController.php:28
 * @route '/document-type/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Document\DocumentTypeController::create
 * @see app/Http/Controllers/Document/DocumentTypeController.php:28
 * @route '/document-type/create'
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
* @see \App\Http\Controllers\Document\DocumentTypeController::store
 * @see app/Http/Controllers/Document/DocumentTypeController.php:36
 * @route '/document-type'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/document-type',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Document\DocumentTypeController::store
 * @see app/Http/Controllers/Document/DocumentTypeController.php:36
 * @route '/document-type'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Document\DocumentTypeController::store
 * @see app/Http/Controllers/Document/DocumentTypeController.php:36
 * @route '/document-type'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Document\DocumentTypeController::store
 * @see app/Http/Controllers/Document/DocumentTypeController.php:36
 * @route '/document-type'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Document\DocumentTypeController::store
 * @see app/Http/Controllers/Document/DocumentTypeController.php:36
 * @route '/document-type'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Document\DocumentTypeController::show
 * @see app/Http/Controllers/Document/DocumentTypeController.php:48
 * @route '/document-type/{document_type}'
 */
export const show = (args: { document_type: number | { id: number } } | [document_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/document-type/{document_type}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Document\DocumentTypeController::show
 * @see app/Http/Controllers/Document/DocumentTypeController.php:48
 * @route '/document-type/{document_type}'
 */
show.url = (args: { document_type: number | { id: number } } | [document_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { document_type: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { document_type: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    document_type: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        document_type: typeof args.document_type === 'object'
                ? args.document_type.id
                : args.document_type,
                }

    return show.definition.url
            .replace('{document_type}', parsedArgs.document_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Document\DocumentTypeController::show
 * @see app/Http/Controllers/Document/DocumentTypeController.php:48
 * @route '/document-type/{document_type}'
 */
show.get = (args: { document_type: number | { id: number } } | [document_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Document\DocumentTypeController::show
 * @see app/Http/Controllers/Document/DocumentTypeController.php:48
 * @route '/document-type/{document_type}'
 */
show.head = (args: { document_type: number | { id: number } } | [document_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Document\DocumentTypeController::show
 * @see app/Http/Controllers/Document/DocumentTypeController.php:48
 * @route '/document-type/{document_type}'
 */
    const showForm = (args: { document_type: number | { id: number } } | [document_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Document\DocumentTypeController::show
 * @see app/Http/Controllers/Document/DocumentTypeController.php:48
 * @route '/document-type/{document_type}'
 */
        showForm.get = (args: { document_type: number | { id: number } } | [document_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Document\DocumentTypeController::show
 * @see app/Http/Controllers/Document/DocumentTypeController.php:48
 * @route '/document-type/{document_type}'
 */
        showForm.head = (args: { document_type: number | { id: number } } | [document_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Document\DocumentTypeController::edit
 * @see app/Http/Controllers/Document/DocumentTypeController.php:56
 * @route '/document-type/{document_type}/edit'
 */
export const edit = (args: { document_type: number | { id: number } } | [document_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/document-type/{document_type}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Document\DocumentTypeController::edit
 * @see app/Http/Controllers/Document/DocumentTypeController.php:56
 * @route '/document-type/{document_type}/edit'
 */
edit.url = (args: { document_type: number | { id: number } } | [document_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { document_type: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { document_type: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    document_type: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        document_type: typeof args.document_type === 'object'
                ? args.document_type.id
                : args.document_type,
                }

    return edit.definition.url
            .replace('{document_type}', parsedArgs.document_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Document\DocumentTypeController::edit
 * @see app/Http/Controllers/Document/DocumentTypeController.php:56
 * @route '/document-type/{document_type}/edit'
 */
edit.get = (args: { document_type: number | { id: number } } | [document_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Document\DocumentTypeController::edit
 * @see app/Http/Controllers/Document/DocumentTypeController.php:56
 * @route '/document-type/{document_type}/edit'
 */
edit.head = (args: { document_type: number | { id: number } } | [document_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Document\DocumentTypeController::edit
 * @see app/Http/Controllers/Document/DocumentTypeController.php:56
 * @route '/document-type/{document_type}/edit'
 */
    const editForm = (args: { document_type: number | { id: number } } | [document_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Document\DocumentTypeController::edit
 * @see app/Http/Controllers/Document/DocumentTypeController.php:56
 * @route '/document-type/{document_type}/edit'
 */
        editForm.get = (args: { document_type: number | { id: number } } | [document_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Document\DocumentTypeController::edit
 * @see app/Http/Controllers/Document/DocumentTypeController.php:56
 * @route '/document-type/{document_type}/edit'
 */
        editForm.head = (args: { document_type: number | { id: number } } | [document_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Document\DocumentTypeController::update
 * @see app/Http/Controllers/Document/DocumentTypeController.php:64
 * @route '/document-type/{document_type}'
 */
export const update = (args: { document_type: number | { id: number } } | [document_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/document-type/{document_type}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Document\DocumentTypeController::update
 * @see app/Http/Controllers/Document/DocumentTypeController.php:64
 * @route '/document-type/{document_type}'
 */
update.url = (args: { document_type: number | { id: number } } | [document_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { document_type: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { document_type: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    document_type: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        document_type: typeof args.document_type === 'object'
                ? args.document_type.id
                : args.document_type,
                }

    return update.definition.url
            .replace('{document_type}', parsedArgs.document_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Document\DocumentTypeController::update
 * @see app/Http/Controllers/Document/DocumentTypeController.php:64
 * @route '/document-type/{document_type}'
 */
update.put = (args: { document_type: number | { id: number } } | [document_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Document\DocumentTypeController::update
 * @see app/Http/Controllers/Document/DocumentTypeController.php:64
 * @route '/document-type/{document_type}'
 */
update.patch = (args: { document_type: number | { id: number } } | [document_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\Document\DocumentTypeController::update
 * @see app/Http/Controllers/Document/DocumentTypeController.php:64
 * @route '/document-type/{document_type}'
 */
    const updateForm = (args: { document_type: number | { id: number } } | [document_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Document\DocumentTypeController::update
 * @see app/Http/Controllers/Document/DocumentTypeController.php:64
 * @route '/document-type/{document_type}'
 */
        updateForm.put = (args: { document_type: number | { id: number } } | [document_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\Document\DocumentTypeController::update
 * @see app/Http/Controllers/Document/DocumentTypeController.php:64
 * @route '/document-type/{document_type}'
 */
        updateForm.patch = (args: { document_type: number | { id: number } } | [document_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Document\DocumentTypeController::destroy
 * @see app/Http/Controllers/Document/DocumentTypeController.php:76
 * @route '/document-type/{document_type}'
 */
export const destroy = (args: { document_type: number | { id: number } } | [document_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/document-type/{document_type}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Document\DocumentTypeController::destroy
 * @see app/Http/Controllers/Document/DocumentTypeController.php:76
 * @route '/document-type/{document_type}'
 */
destroy.url = (args: { document_type: number | { id: number } } | [document_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { document_type: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { document_type: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    document_type: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        document_type: typeof args.document_type === 'object'
                ? args.document_type.id
                : args.document_type,
                }

    return destroy.definition.url
            .replace('{document_type}', parsedArgs.document_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Document\DocumentTypeController::destroy
 * @see app/Http/Controllers/Document/DocumentTypeController.php:76
 * @route '/document-type/{document_type}'
 */
destroy.delete = (args: { document_type: number | { id: number } } | [document_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Document\DocumentTypeController::destroy
 * @see app/Http/Controllers/Document/DocumentTypeController.php:76
 * @route '/document-type/{document_type}'
 */
    const destroyForm = (args: { document_type: number | { id: number } } | [document_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Document\DocumentTypeController::destroy
 * @see app/Http/Controllers/Document/DocumentTypeController.php:76
 * @route '/document-type/{document_type}'
 */
        destroyForm.delete = (args: { document_type: number | { id: number } } | [document_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const DocumentTypeController = { index, create, store, show, edit, update, destroy }

export default DocumentTypeController