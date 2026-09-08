import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\CustomerController::index
 * @see app/Http/Controllers/CustomerController.php:12
 * @route '/customer/search'
 */
const index258cb13cddc57e1eafd8b21100b1de28 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: index258cb13cddc57e1eafd8b21100b1de28.url(options),
    method: 'post',
})

index258cb13cddc57e1eafd8b21100b1de28.definition = {
    methods: ["post"],
    url: '/customer/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CustomerController::index
 * @see app/Http/Controllers/CustomerController.php:12
 * @route '/customer/search'
 */
index258cb13cddc57e1eafd8b21100b1de28.url = (options?: RouteQueryOptions) => {
    return index258cb13cddc57e1eafd8b21100b1de28.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CustomerController::index
 * @see app/Http/Controllers/CustomerController.php:12
 * @route '/customer/search'
 */
index258cb13cddc57e1eafd8b21100b1de28.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: index258cb13cddc57e1eafd8b21100b1de28.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CustomerController::index
 * @see app/Http/Controllers/CustomerController.php:12
 * @route '/customer/search'
 */
    const index258cb13cddc57e1eafd8b21100b1de28Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: index258cb13cddc57e1eafd8b21100b1de28.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CustomerController::index
 * @see app/Http/Controllers/CustomerController.php:12
 * @route '/customer/search'
 */
        index258cb13cddc57e1eafd8b21100b1de28Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: index258cb13cddc57e1eafd8b21100b1de28.url(options),
            method: 'post',
        })
    
    index258cb13cddc57e1eafd8b21100b1de28.form = index258cb13cddc57e1eafd8b21100b1de28Form
    /**
* @see \App\Http\Controllers\CustomerController::index
 * @see app/Http/Controllers/CustomerController.php:12
 * @route '/customer'
 */
const index6e8d88c1af9fa55d5456ce0119408fe8 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index6e8d88c1af9fa55d5456ce0119408fe8.url(options),
    method: 'get',
})

index6e8d88c1af9fa55d5456ce0119408fe8.definition = {
    methods: ["get","head"],
    url: '/customer',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CustomerController::index
 * @see app/Http/Controllers/CustomerController.php:12
 * @route '/customer'
 */
index6e8d88c1af9fa55d5456ce0119408fe8.url = (options?: RouteQueryOptions) => {
    return index6e8d88c1af9fa55d5456ce0119408fe8.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CustomerController::index
 * @see app/Http/Controllers/CustomerController.php:12
 * @route '/customer'
 */
index6e8d88c1af9fa55d5456ce0119408fe8.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index6e8d88c1af9fa55d5456ce0119408fe8.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CustomerController::index
 * @see app/Http/Controllers/CustomerController.php:12
 * @route '/customer'
 */
index6e8d88c1af9fa55d5456ce0119408fe8.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index6e8d88c1af9fa55d5456ce0119408fe8.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CustomerController::index
 * @see app/Http/Controllers/CustomerController.php:12
 * @route '/customer'
 */
    const index6e8d88c1af9fa55d5456ce0119408fe8Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index6e8d88c1af9fa55d5456ce0119408fe8.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CustomerController::index
 * @see app/Http/Controllers/CustomerController.php:12
 * @route '/customer'
 */
        index6e8d88c1af9fa55d5456ce0119408fe8Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index6e8d88c1af9fa55d5456ce0119408fe8.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CustomerController::index
 * @see app/Http/Controllers/CustomerController.php:12
 * @route '/customer'
 */
        index6e8d88c1af9fa55d5456ce0119408fe8Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index6e8d88c1af9fa55d5456ce0119408fe8.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index6e8d88c1af9fa55d5456ce0119408fe8.form = index6e8d88c1af9fa55d5456ce0119408fe8Form

/**
* Multiple routes resolve to \App\Http\Controllers\CustomerController::index, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `index['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const index = {
    '/customer/search': index258cb13cddc57e1eafd8b21100b1de28,
    '/customer': index6e8d88c1af9fa55d5456ce0119408fe8,
}

/**
* @see \App\Http\Controllers\CustomerController::create
 * @see app/Http/Controllers/CustomerController.php:24
 * @route '/customer/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/customer/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CustomerController::create
 * @see app/Http/Controllers/CustomerController.php:24
 * @route '/customer/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CustomerController::create
 * @see app/Http/Controllers/CustomerController.php:24
 * @route '/customer/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CustomerController::create
 * @see app/Http/Controllers/CustomerController.php:24
 * @route '/customer/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CustomerController::create
 * @see app/Http/Controllers/CustomerController.php:24
 * @route '/customer/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CustomerController::create
 * @see app/Http/Controllers/CustomerController.php:24
 * @route '/customer/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CustomerController::create
 * @see app/Http/Controllers/CustomerController.php:24
 * @route '/customer/create'
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
* @see \App\Http\Controllers\CustomerController::store
 * @see app/Http/Controllers/CustomerController.php:29
 * @route '/customer'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/customer',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CustomerController::store
 * @see app/Http/Controllers/CustomerController.php:29
 * @route '/customer'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CustomerController::store
 * @see app/Http/Controllers/CustomerController.php:29
 * @route '/customer'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CustomerController::store
 * @see app/Http/Controllers/CustomerController.php:29
 * @route '/customer'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CustomerController::store
 * @see app/Http/Controllers/CustomerController.php:29
 * @route '/customer'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\CustomerController::show
 * @see app/Http/Controllers/CustomerController.php:38
 * @route '/customer/{customer}'
 */
export const show = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/customer/{customer}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CustomerController::show
 * @see app/Http/Controllers/CustomerController.php:38
 * @route '/customer/{customer}'
 */
show.url = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { customer: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { customer: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    customer: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        customer: typeof args.customer === 'object'
                ? args.customer.id
                : args.customer,
                }

    return show.definition.url
            .replace('{customer}', parsedArgs.customer.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CustomerController::show
 * @see app/Http/Controllers/CustomerController.php:38
 * @route '/customer/{customer}'
 */
show.get = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CustomerController::show
 * @see app/Http/Controllers/CustomerController.php:38
 * @route '/customer/{customer}'
 */
show.head = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CustomerController::show
 * @see app/Http/Controllers/CustomerController.php:38
 * @route '/customer/{customer}'
 */
    const showForm = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CustomerController::show
 * @see app/Http/Controllers/CustomerController.php:38
 * @route '/customer/{customer}'
 */
        showForm.get = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CustomerController::show
 * @see app/Http/Controllers/CustomerController.php:38
 * @route '/customer/{customer}'
 */
        showForm.head = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\CustomerController::edit
 * @see app/Http/Controllers/CustomerController.php:43
 * @route '/customer/{customer}/edit'
 */
export const edit = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/customer/{customer}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CustomerController::edit
 * @see app/Http/Controllers/CustomerController.php:43
 * @route '/customer/{customer}/edit'
 */
edit.url = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { customer: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { customer: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    customer: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        customer: typeof args.customer === 'object'
                ? args.customer.id
                : args.customer,
                }

    return edit.definition.url
            .replace('{customer}', parsedArgs.customer.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CustomerController::edit
 * @see app/Http/Controllers/CustomerController.php:43
 * @route '/customer/{customer}/edit'
 */
edit.get = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CustomerController::edit
 * @see app/Http/Controllers/CustomerController.php:43
 * @route '/customer/{customer}/edit'
 */
edit.head = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CustomerController::edit
 * @see app/Http/Controllers/CustomerController.php:43
 * @route '/customer/{customer}/edit'
 */
    const editForm = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CustomerController::edit
 * @see app/Http/Controllers/CustomerController.php:43
 * @route '/customer/{customer}/edit'
 */
        editForm.get = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CustomerController::edit
 * @see app/Http/Controllers/CustomerController.php:43
 * @route '/customer/{customer}/edit'
 */
        editForm.head = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\CustomerController::update
 * @see app/Http/Controllers/CustomerController.php:48
 * @route '/customer/{customer}'
 */
export const update = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/customer/{customer}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\CustomerController::update
 * @see app/Http/Controllers/CustomerController.php:48
 * @route '/customer/{customer}'
 */
update.url = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { customer: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { customer: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    customer: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        customer: typeof args.customer === 'object'
                ? args.customer.id
                : args.customer,
                }

    return update.definition.url
            .replace('{customer}', parsedArgs.customer.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CustomerController::update
 * @see app/Http/Controllers/CustomerController.php:48
 * @route '/customer/{customer}'
 */
update.put = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\CustomerController::update
 * @see app/Http/Controllers/CustomerController.php:48
 * @route '/customer/{customer}'
 */
update.patch = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\CustomerController::update
 * @see app/Http/Controllers/CustomerController.php:48
 * @route '/customer/{customer}'
 */
    const updateForm = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CustomerController::update
 * @see app/Http/Controllers/CustomerController.php:48
 * @route '/customer/{customer}'
 */
        updateForm.put = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\CustomerController::update
 * @see app/Http/Controllers/CustomerController.php:48
 * @route '/customer/{customer}'
 */
        updateForm.patch = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\CustomerController::destroy
 * @see app/Http/Controllers/CustomerController.php:57
 * @route '/customer/{customer}'
 */
export const destroy = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/customer/{customer}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\CustomerController::destroy
 * @see app/Http/Controllers/CustomerController.php:57
 * @route '/customer/{customer}'
 */
destroy.url = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { customer: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { customer: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    customer: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        customer: typeof args.customer === 'object'
                ? args.customer.id
                : args.customer,
                }

    return destroy.definition.url
            .replace('{customer}', parsedArgs.customer.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CustomerController::destroy
 * @see app/Http/Controllers/CustomerController.php:57
 * @route '/customer/{customer}'
 */
destroy.delete = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\CustomerController::destroy
 * @see app/Http/Controllers/CustomerController.php:57
 * @route '/customer/{customer}'
 */
    const destroyForm = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CustomerController::destroy
 * @see app/Http/Controllers/CustomerController.php:57
 * @route '/customer/{customer}'
 */
        destroyForm.delete = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const CustomerController = { index, create, store, show, edit, update, destroy }

export default CustomerController