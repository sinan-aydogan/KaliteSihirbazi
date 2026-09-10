import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\CustomerComplaintController::index
 * @see app/Http/Controllers/CustomerComplaintController.php:25
 * @route '/customer-complaint/search'
 */
const index8260e958f954526990b9ee32fe3f29a7 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: index8260e958f954526990b9ee32fe3f29a7.url(options),
    method: 'post',
})

index8260e958f954526990b9ee32fe3f29a7.definition = {
    methods: ["post"],
    url: '/customer-complaint/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CustomerComplaintController::index
 * @see app/Http/Controllers/CustomerComplaintController.php:25
 * @route '/customer-complaint/search'
 */
index8260e958f954526990b9ee32fe3f29a7.url = (options?: RouteQueryOptions) => {
    return index8260e958f954526990b9ee32fe3f29a7.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CustomerComplaintController::index
 * @see app/Http/Controllers/CustomerComplaintController.php:25
 * @route '/customer-complaint/search'
 */
index8260e958f954526990b9ee32fe3f29a7.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: index8260e958f954526990b9ee32fe3f29a7.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CustomerComplaintController::index
 * @see app/Http/Controllers/CustomerComplaintController.php:25
 * @route '/customer-complaint/search'
 */
    const index8260e958f954526990b9ee32fe3f29a7Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: index8260e958f954526990b9ee32fe3f29a7.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CustomerComplaintController::index
 * @see app/Http/Controllers/CustomerComplaintController.php:25
 * @route '/customer-complaint/search'
 */
        index8260e958f954526990b9ee32fe3f29a7Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: index8260e958f954526990b9ee32fe3f29a7.url(options),
            method: 'post',
        })
    
    index8260e958f954526990b9ee32fe3f29a7.form = index8260e958f954526990b9ee32fe3f29a7Form
    /**
* @see \App\Http\Controllers\CustomerComplaintController::index
 * @see app/Http/Controllers/CustomerComplaintController.php:25
 * @route '/customer-complaint'
 */
const index0e59b87696eab6a7ac8233276d00c6b5 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index0e59b87696eab6a7ac8233276d00c6b5.url(options),
    method: 'get',
})

index0e59b87696eab6a7ac8233276d00c6b5.definition = {
    methods: ["get","head"],
    url: '/customer-complaint',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CustomerComplaintController::index
 * @see app/Http/Controllers/CustomerComplaintController.php:25
 * @route '/customer-complaint'
 */
index0e59b87696eab6a7ac8233276d00c6b5.url = (options?: RouteQueryOptions) => {
    return index0e59b87696eab6a7ac8233276d00c6b5.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CustomerComplaintController::index
 * @see app/Http/Controllers/CustomerComplaintController.php:25
 * @route '/customer-complaint'
 */
index0e59b87696eab6a7ac8233276d00c6b5.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index0e59b87696eab6a7ac8233276d00c6b5.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CustomerComplaintController::index
 * @see app/Http/Controllers/CustomerComplaintController.php:25
 * @route '/customer-complaint'
 */
index0e59b87696eab6a7ac8233276d00c6b5.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index0e59b87696eab6a7ac8233276d00c6b5.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CustomerComplaintController::index
 * @see app/Http/Controllers/CustomerComplaintController.php:25
 * @route '/customer-complaint'
 */
    const index0e59b87696eab6a7ac8233276d00c6b5Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index0e59b87696eab6a7ac8233276d00c6b5.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CustomerComplaintController::index
 * @see app/Http/Controllers/CustomerComplaintController.php:25
 * @route '/customer-complaint'
 */
        index0e59b87696eab6a7ac8233276d00c6b5Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index0e59b87696eab6a7ac8233276d00c6b5.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CustomerComplaintController::index
 * @see app/Http/Controllers/CustomerComplaintController.php:25
 * @route '/customer-complaint'
 */
        index0e59b87696eab6a7ac8233276d00c6b5Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index0e59b87696eab6a7ac8233276d00c6b5.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index0e59b87696eab6a7ac8233276d00c6b5.form = index0e59b87696eab6a7ac8233276d00c6b5Form

/**
* Multiple routes resolve to \App\Http\Controllers\CustomerComplaintController::index, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `index['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const index = {
    '/customer-complaint/search': index8260e958f954526990b9ee32fe3f29a7,
    '/customer-complaint': index0e59b87696eab6a7ac8233276d00c6b5,
}

/**
* @see \App\Http\Controllers\CustomerComplaintController::create
 * @see app/Http/Controllers/CustomerComplaintController.php:50
 * @route '/customer-complaint/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/customer-complaint/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CustomerComplaintController::create
 * @see app/Http/Controllers/CustomerComplaintController.php:50
 * @route '/customer-complaint/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CustomerComplaintController::create
 * @see app/Http/Controllers/CustomerComplaintController.php:50
 * @route '/customer-complaint/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CustomerComplaintController::create
 * @see app/Http/Controllers/CustomerComplaintController.php:50
 * @route '/customer-complaint/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CustomerComplaintController::create
 * @see app/Http/Controllers/CustomerComplaintController.php:50
 * @route '/customer-complaint/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CustomerComplaintController::create
 * @see app/Http/Controllers/CustomerComplaintController.php:50
 * @route '/customer-complaint/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CustomerComplaintController::create
 * @see app/Http/Controllers/CustomerComplaintController.php:50
 * @route '/customer-complaint/create'
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
* @see \App\Http\Controllers\CustomerComplaintController::store
 * @see app/Http/Controllers/CustomerComplaintController.php:55
 * @route '/customer-complaint'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/customer-complaint',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CustomerComplaintController::store
 * @see app/Http/Controllers/CustomerComplaintController.php:55
 * @route '/customer-complaint'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CustomerComplaintController::store
 * @see app/Http/Controllers/CustomerComplaintController.php:55
 * @route '/customer-complaint'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CustomerComplaintController::store
 * @see app/Http/Controllers/CustomerComplaintController.php:55
 * @route '/customer-complaint'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CustomerComplaintController::store
 * @see app/Http/Controllers/CustomerComplaintController.php:55
 * @route '/customer-complaint'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\CustomerComplaintController::show
 * @see app/Http/Controllers/CustomerComplaintController.php:64
 * @route '/customer-complaint/{customer_complaint}'
 */
export const show = (args: { customer_complaint: number | { id: number } } | [customer_complaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/customer-complaint/{customer_complaint}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CustomerComplaintController::show
 * @see app/Http/Controllers/CustomerComplaintController.php:64
 * @route '/customer-complaint/{customer_complaint}'
 */
show.url = (args: { customer_complaint: number | { id: number } } | [customer_complaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { customer_complaint: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { customer_complaint: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    customer_complaint: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        customer_complaint: typeof args.customer_complaint === 'object'
                ? args.customer_complaint.id
                : args.customer_complaint,
                }

    return show.definition.url
            .replace('{customer_complaint}', parsedArgs.customer_complaint.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CustomerComplaintController::show
 * @see app/Http/Controllers/CustomerComplaintController.php:64
 * @route '/customer-complaint/{customer_complaint}'
 */
show.get = (args: { customer_complaint: number | { id: number } } | [customer_complaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CustomerComplaintController::show
 * @see app/Http/Controllers/CustomerComplaintController.php:64
 * @route '/customer-complaint/{customer_complaint}'
 */
show.head = (args: { customer_complaint: number | { id: number } } | [customer_complaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CustomerComplaintController::show
 * @see app/Http/Controllers/CustomerComplaintController.php:64
 * @route '/customer-complaint/{customer_complaint}'
 */
    const showForm = (args: { customer_complaint: number | { id: number } } | [customer_complaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CustomerComplaintController::show
 * @see app/Http/Controllers/CustomerComplaintController.php:64
 * @route '/customer-complaint/{customer_complaint}'
 */
        showForm.get = (args: { customer_complaint: number | { id: number } } | [customer_complaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CustomerComplaintController::show
 * @see app/Http/Controllers/CustomerComplaintController.php:64
 * @route '/customer-complaint/{customer_complaint}'
 */
        showForm.head = (args: { customer_complaint: number | { id: number } } | [customer_complaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\CustomerComplaintController::edit
 * @see app/Http/Controllers/CustomerComplaintController.php:84
 * @route '/customer-complaint/{customer_complaint}/edit'
 */
export const edit = (args: { customer_complaint: number | { id: number } } | [customer_complaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/customer-complaint/{customer_complaint}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CustomerComplaintController::edit
 * @see app/Http/Controllers/CustomerComplaintController.php:84
 * @route '/customer-complaint/{customer_complaint}/edit'
 */
edit.url = (args: { customer_complaint: number | { id: number } } | [customer_complaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { customer_complaint: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { customer_complaint: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    customer_complaint: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        customer_complaint: typeof args.customer_complaint === 'object'
                ? args.customer_complaint.id
                : args.customer_complaint,
                }

    return edit.definition.url
            .replace('{customer_complaint}', parsedArgs.customer_complaint.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CustomerComplaintController::edit
 * @see app/Http/Controllers/CustomerComplaintController.php:84
 * @route '/customer-complaint/{customer_complaint}/edit'
 */
edit.get = (args: { customer_complaint: number | { id: number } } | [customer_complaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CustomerComplaintController::edit
 * @see app/Http/Controllers/CustomerComplaintController.php:84
 * @route '/customer-complaint/{customer_complaint}/edit'
 */
edit.head = (args: { customer_complaint: number | { id: number } } | [customer_complaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CustomerComplaintController::edit
 * @see app/Http/Controllers/CustomerComplaintController.php:84
 * @route '/customer-complaint/{customer_complaint}/edit'
 */
    const editForm = (args: { customer_complaint: number | { id: number } } | [customer_complaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CustomerComplaintController::edit
 * @see app/Http/Controllers/CustomerComplaintController.php:84
 * @route '/customer-complaint/{customer_complaint}/edit'
 */
        editForm.get = (args: { customer_complaint: number | { id: number } } | [customer_complaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CustomerComplaintController::edit
 * @see app/Http/Controllers/CustomerComplaintController.php:84
 * @route '/customer-complaint/{customer_complaint}/edit'
 */
        editForm.head = (args: { customer_complaint: number | { id: number } } | [customer_complaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\CustomerComplaintController::update
 * @see app/Http/Controllers/CustomerComplaintController.php:89
 * @route '/customer-complaint/{customer_complaint}'
 */
export const update = (args: { customer_complaint: number | { id: number } } | [customer_complaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/customer-complaint/{customer_complaint}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\CustomerComplaintController::update
 * @see app/Http/Controllers/CustomerComplaintController.php:89
 * @route '/customer-complaint/{customer_complaint}'
 */
update.url = (args: { customer_complaint: number | { id: number } } | [customer_complaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { customer_complaint: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { customer_complaint: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    customer_complaint: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        customer_complaint: typeof args.customer_complaint === 'object'
                ? args.customer_complaint.id
                : args.customer_complaint,
                }

    return update.definition.url
            .replace('{customer_complaint}', parsedArgs.customer_complaint.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CustomerComplaintController::update
 * @see app/Http/Controllers/CustomerComplaintController.php:89
 * @route '/customer-complaint/{customer_complaint}'
 */
update.put = (args: { customer_complaint: number | { id: number } } | [customer_complaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\CustomerComplaintController::update
 * @see app/Http/Controllers/CustomerComplaintController.php:89
 * @route '/customer-complaint/{customer_complaint}'
 */
update.patch = (args: { customer_complaint: number | { id: number } } | [customer_complaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\CustomerComplaintController::update
 * @see app/Http/Controllers/CustomerComplaintController.php:89
 * @route '/customer-complaint/{customer_complaint}'
 */
    const updateForm = (args: { customer_complaint: number | { id: number } } | [customer_complaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CustomerComplaintController::update
 * @see app/Http/Controllers/CustomerComplaintController.php:89
 * @route '/customer-complaint/{customer_complaint}'
 */
        updateForm.put = (args: { customer_complaint: number | { id: number } } | [customer_complaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\CustomerComplaintController::update
 * @see app/Http/Controllers/CustomerComplaintController.php:89
 * @route '/customer-complaint/{customer_complaint}'
 */
        updateForm.patch = (args: { customer_complaint: number | { id: number } } | [customer_complaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\CustomerComplaintController::destroy
 * @see app/Http/Controllers/CustomerComplaintController.php:98
 * @route '/customer-complaint/{customer_complaint}'
 */
export const destroy = (args: { customer_complaint: number | { id: number } } | [customer_complaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/customer-complaint/{customer_complaint}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\CustomerComplaintController::destroy
 * @see app/Http/Controllers/CustomerComplaintController.php:98
 * @route '/customer-complaint/{customer_complaint}'
 */
destroy.url = (args: { customer_complaint: number | { id: number } } | [customer_complaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { customer_complaint: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { customer_complaint: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    customer_complaint: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        customer_complaint: typeof args.customer_complaint === 'object'
                ? args.customer_complaint.id
                : args.customer_complaint,
                }

    return destroy.definition.url
            .replace('{customer_complaint}', parsedArgs.customer_complaint.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CustomerComplaintController::destroy
 * @see app/Http/Controllers/CustomerComplaintController.php:98
 * @route '/customer-complaint/{customer_complaint}'
 */
destroy.delete = (args: { customer_complaint: number | { id: number } } | [customer_complaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\CustomerComplaintController::destroy
 * @see app/Http/Controllers/CustomerComplaintController.php:98
 * @route '/customer-complaint/{customer_complaint}'
 */
    const destroyForm = (args: { customer_complaint: number | { id: number } } | [customer_complaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CustomerComplaintController::destroy
 * @see app/Http/Controllers/CustomerComplaintController.php:98
 * @route '/customer-complaint/{customer_complaint}'
 */
        destroyForm.delete = (args: { customer_complaint: number | { id: number } } | [customer_complaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const CustomerComplaintController = { index, create, store, show, edit, update, destroy }

export default CustomerComplaintController