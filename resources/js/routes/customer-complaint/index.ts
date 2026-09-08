import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\CustomerComplaintController::search
 * @see app/Http/Controllers/CustomerComplaintController.php:21
 * @route '/customer-complaint/search'
 */
export const search = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: search.url(options),
    method: 'post',
})

search.definition = {
    methods: ["post"],
    url: '/customer-complaint/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CustomerComplaintController::search
 * @see app/Http/Controllers/CustomerComplaintController.php:21
 * @route '/customer-complaint/search'
 */
search.url = (options?: RouteQueryOptions) => {
    return search.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CustomerComplaintController::search
 * @see app/Http/Controllers/CustomerComplaintController.php:21
 * @route '/customer-complaint/search'
 */
search.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: search.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CustomerComplaintController::search
 * @see app/Http/Controllers/CustomerComplaintController.php:21
 * @route '/customer-complaint/search'
 */
    const searchForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: search.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CustomerComplaintController::search
 * @see app/Http/Controllers/CustomerComplaintController.php:21
 * @route '/customer-complaint/search'
 */
        searchForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: search.url(options),
            method: 'post',
        })
    
    search.form = searchForm
/**
* @see \App\Http\Controllers\CustomerComplaintController::index
 * @see app/Http/Controllers/CustomerComplaintController.php:21
 * @route '/customer-complaint'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/customer-complaint',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CustomerComplaintController::index
 * @see app/Http/Controllers/CustomerComplaintController.php:21
 * @route '/customer-complaint'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CustomerComplaintController::index
 * @see app/Http/Controllers/CustomerComplaintController.php:21
 * @route '/customer-complaint'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CustomerComplaintController::index
 * @see app/Http/Controllers/CustomerComplaintController.php:21
 * @route '/customer-complaint'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CustomerComplaintController::index
 * @see app/Http/Controllers/CustomerComplaintController.php:21
 * @route '/customer-complaint'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CustomerComplaintController::index
 * @see app/Http/Controllers/CustomerComplaintController.php:21
 * @route '/customer-complaint'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CustomerComplaintController::index
 * @see app/Http/Controllers/CustomerComplaintController.php:21
 * @route '/customer-complaint'
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
* @see \App\Http\Controllers\CustomerComplaintController::create
 * @see app/Http/Controllers/CustomerComplaintController.php:35
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
 * @see app/Http/Controllers/CustomerComplaintController.php:35
 * @route '/customer-complaint/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CustomerComplaintController::create
 * @see app/Http/Controllers/CustomerComplaintController.php:35
 * @route '/customer-complaint/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CustomerComplaintController::create
 * @see app/Http/Controllers/CustomerComplaintController.php:35
 * @route '/customer-complaint/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CustomerComplaintController::create
 * @see app/Http/Controllers/CustomerComplaintController.php:35
 * @route '/customer-complaint/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CustomerComplaintController::create
 * @see app/Http/Controllers/CustomerComplaintController.php:35
 * @route '/customer-complaint/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CustomerComplaintController::create
 * @see app/Http/Controllers/CustomerComplaintController.php:35
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
 * @see app/Http/Controllers/CustomerComplaintController.php:40
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
 * @see app/Http/Controllers/CustomerComplaintController.php:40
 * @route '/customer-complaint'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CustomerComplaintController::store
 * @see app/Http/Controllers/CustomerComplaintController.php:40
 * @route '/customer-complaint'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CustomerComplaintController::store
 * @see app/Http/Controllers/CustomerComplaintController.php:40
 * @route '/customer-complaint'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CustomerComplaintController::store
 * @see app/Http/Controllers/CustomerComplaintController.php:40
 * @route '/customer-complaint'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\CustomerComplaintController::show
 * @see app/Http/Controllers/CustomerComplaintController.php:49
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
 * @see app/Http/Controllers/CustomerComplaintController.php:49
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
 * @see app/Http/Controllers/CustomerComplaintController.php:49
 * @route '/customer-complaint/{customer_complaint}'
 */
show.get = (args: { customer_complaint: number | { id: number } } | [customer_complaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CustomerComplaintController::show
 * @see app/Http/Controllers/CustomerComplaintController.php:49
 * @route '/customer-complaint/{customer_complaint}'
 */
show.head = (args: { customer_complaint: number | { id: number } } | [customer_complaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CustomerComplaintController::show
 * @see app/Http/Controllers/CustomerComplaintController.php:49
 * @route '/customer-complaint/{customer_complaint}'
 */
    const showForm = (args: { customer_complaint: number | { id: number } } | [customer_complaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CustomerComplaintController::show
 * @see app/Http/Controllers/CustomerComplaintController.php:49
 * @route '/customer-complaint/{customer_complaint}'
 */
        showForm.get = (args: { customer_complaint: number | { id: number } } | [customer_complaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CustomerComplaintController::show
 * @see app/Http/Controllers/CustomerComplaintController.php:49
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
 * @see app/Http/Controllers/CustomerComplaintController.php:65
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
 * @see app/Http/Controllers/CustomerComplaintController.php:65
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
 * @see app/Http/Controllers/CustomerComplaintController.php:65
 * @route '/customer-complaint/{customer_complaint}/edit'
 */
edit.get = (args: { customer_complaint: number | { id: number } } | [customer_complaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CustomerComplaintController::edit
 * @see app/Http/Controllers/CustomerComplaintController.php:65
 * @route '/customer-complaint/{customer_complaint}/edit'
 */
edit.head = (args: { customer_complaint: number | { id: number } } | [customer_complaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CustomerComplaintController::edit
 * @see app/Http/Controllers/CustomerComplaintController.php:65
 * @route '/customer-complaint/{customer_complaint}/edit'
 */
    const editForm = (args: { customer_complaint: number | { id: number } } | [customer_complaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CustomerComplaintController::edit
 * @see app/Http/Controllers/CustomerComplaintController.php:65
 * @route '/customer-complaint/{customer_complaint}/edit'
 */
        editForm.get = (args: { customer_complaint: number | { id: number } } | [customer_complaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CustomerComplaintController::edit
 * @see app/Http/Controllers/CustomerComplaintController.php:65
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
 * @see app/Http/Controllers/CustomerComplaintController.php:70
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
 * @see app/Http/Controllers/CustomerComplaintController.php:70
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
 * @see app/Http/Controllers/CustomerComplaintController.php:70
 * @route '/customer-complaint/{customer_complaint}'
 */
update.put = (args: { customer_complaint: number | { id: number } } | [customer_complaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\CustomerComplaintController::update
 * @see app/Http/Controllers/CustomerComplaintController.php:70
 * @route '/customer-complaint/{customer_complaint}'
 */
update.patch = (args: { customer_complaint: number | { id: number } } | [customer_complaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\CustomerComplaintController::update
 * @see app/Http/Controllers/CustomerComplaintController.php:70
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
 * @see app/Http/Controllers/CustomerComplaintController.php:70
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
 * @see app/Http/Controllers/CustomerComplaintController.php:70
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
 * @see app/Http/Controllers/CustomerComplaintController.php:79
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
 * @see app/Http/Controllers/CustomerComplaintController.php:79
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
 * @see app/Http/Controllers/CustomerComplaintController.php:79
 * @route '/customer-complaint/{customer_complaint}'
 */
destroy.delete = (args: { customer_complaint: number | { id: number } } | [customer_complaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\CustomerComplaintController::destroy
 * @see app/Http/Controllers/CustomerComplaintController.php:79
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
 * @see app/Http/Controllers/CustomerComplaintController.php:79
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
/**
* @see \App\Http\Controllers\CustomerComplaintWorkflowController::acknowledge
 * @see app/Http/Controllers/CustomerComplaintWorkflowController.php:18
 * @route '/customer-complaint/{customerComplaint}/acknowledge'
 */
export const acknowledge = (args: { customerComplaint: number | { id: number } } | [customerComplaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: acknowledge.url(args, options),
    method: 'post',
})

acknowledge.definition = {
    methods: ["post"],
    url: '/customer-complaint/{customerComplaint}/acknowledge',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CustomerComplaintWorkflowController::acknowledge
 * @see app/Http/Controllers/CustomerComplaintWorkflowController.php:18
 * @route '/customer-complaint/{customerComplaint}/acknowledge'
 */
acknowledge.url = (args: { customerComplaint: number | { id: number } } | [customerComplaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { customerComplaint: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { customerComplaint: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    customerComplaint: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        customerComplaint: typeof args.customerComplaint === 'object'
                ? args.customerComplaint.id
                : args.customerComplaint,
                }

    return acknowledge.definition.url
            .replace('{customerComplaint}', parsedArgs.customerComplaint.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CustomerComplaintWorkflowController::acknowledge
 * @see app/Http/Controllers/CustomerComplaintWorkflowController.php:18
 * @route '/customer-complaint/{customerComplaint}/acknowledge'
 */
acknowledge.post = (args: { customerComplaint: number | { id: number } } | [customerComplaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: acknowledge.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CustomerComplaintWorkflowController::acknowledge
 * @see app/Http/Controllers/CustomerComplaintWorkflowController.php:18
 * @route '/customer-complaint/{customerComplaint}/acknowledge'
 */
    const acknowledgeForm = (args: { customerComplaint: number | { id: number } } | [customerComplaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: acknowledge.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CustomerComplaintWorkflowController::acknowledge
 * @see app/Http/Controllers/CustomerComplaintWorkflowController.php:18
 * @route '/customer-complaint/{customerComplaint}/acknowledge'
 */
        acknowledgeForm.post = (args: { customerComplaint: number | { id: number } } | [customerComplaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: acknowledge.url(args, options),
            method: 'post',
        })
    
    acknowledge.form = acknowledgeForm
/**
* @see \App\Http\Controllers\CustomerComplaintWorkflowController::resolve
 * @see app/Http/Controllers/CustomerComplaintWorkflowController.php:23
 * @route '/customer-complaint/{customerComplaint}/resolve'
 */
export const resolve = (args: { customerComplaint: number | { id: number } } | [customerComplaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: resolve.url(args, options),
    method: 'post',
})

resolve.definition = {
    methods: ["post"],
    url: '/customer-complaint/{customerComplaint}/resolve',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CustomerComplaintWorkflowController::resolve
 * @see app/Http/Controllers/CustomerComplaintWorkflowController.php:23
 * @route '/customer-complaint/{customerComplaint}/resolve'
 */
resolve.url = (args: { customerComplaint: number | { id: number } } | [customerComplaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { customerComplaint: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { customerComplaint: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    customerComplaint: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        customerComplaint: typeof args.customerComplaint === 'object'
                ? args.customerComplaint.id
                : args.customerComplaint,
                }

    return resolve.definition.url
            .replace('{customerComplaint}', parsedArgs.customerComplaint.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CustomerComplaintWorkflowController::resolve
 * @see app/Http/Controllers/CustomerComplaintWorkflowController.php:23
 * @route '/customer-complaint/{customerComplaint}/resolve'
 */
resolve.post = (args: { customerComplaint: number | { id: number } } | [customerComplaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: resolve.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CustomerComplaintWorkflowController::resolve
 * @see app/Http/Controllers/CustomerComplaintWorkflowController.php:23
 * @route '/customer-complaint/{customerComplaint}/resolve'
 */
    const resolveForm = (args: { customerComplaint: number | { id: number } } | [customerComplaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: resolve.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CustomerComplaintWorkflowController::resolve
 * @see app/Http/Controllers/CustomerComplaintWorkflowController.php:23
 * @route '/customer-complaint/{customerComplaint}/resolve'
 */
        resolveForm.post = (args: { customerComplaint: number | { id: number } } | [customerComplaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: resolve.url(args, options),
            method: 'post',
        })
    
    resolve.form = resolveForm
/**
* @see \App\Http\Controllers\CustomerComplaintWorkflowController::close
 * @see app/Http/Controllers/CustomerComplaintWorkflowController.php:28
 * @route '/customer-complaint/{customerComplaint}/close'
 */
export const close = (args: { customerComplaint: number | { id: number } } | [customerComplaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: close.url(args, options),
    method: 'post',
})

close.definition = {
    methods: ["post"],
    url: '/customer-complaint/{customerComplaint}/close',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CustomerComplaintWorkflowController::close
 * @see app/Http/Controllers/CustomerComplaintWorkflowController.php:28
 * @route '/customer-complaint/{customerComplaint}/close'
 */
close.url = (args: { customerComplaint: number | { id: number } } | [customerComplaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { customerComplaint: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { customerComplaint: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    customerComplaint: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        customerComplaint: typeof args.customerComplaint === 'object'
                ? args.customerComplaint.id
                : args.customerComplaint,
                }

    return close.definition.url
            .replace('{customerComplaint}', parsedArgs.customerComplaint.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CustomerComplaintWorkflowController::close
 * @see app/Http/Controllers/CustomerComplaintWorkflowController.php:28
 * @route '/customer-complaint/{customerComplaint}/close'
 */
close.post = (args: { customerComplaint: number | { id: number } } | [customerComplaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: close.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CustomerComplaintWorkflowController::close
 * @see app/Http/Controllers/CustomerComplaintWorkflowController.php:28
 * @route '/customer-complaint/{customerComplaint}/close'
 */
    const closeForm = (args: { customerComplaint: number | { id: number } } | [customerComplaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: close.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CustomerComplaintWorkflowController::close
 * @see app/Http/Controllers/CustomerComplaintWorkflowController.php:28
 * @route '/customer-complaint/{customerComplaint}/close'
 */
        closeForm.post = (args: { customerComplaint: number | { id: number } } | [customerComplaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: close.url(args, options),
            method: 'post',
        })
    
    close.form = closeForm
/**
* @see \App\Http\Controllers\CustomerComplaintWorkflowController::reopen
 * @see app/Http/Controllers/CustomerComplaintWorkflowController.php:33
 * @route '/customer-complaint/{customerComplaint}/reopen'
 */
export const reopen = (args: { customerComplaint: number | { id: number } } | [customerComplaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reopen.url(args, options),
    method: 'post',
})

reopen.definition = {
    methods: ["post"],
    url: '/customer-complaint/{customerComplaint}/reopen',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CustomerComplaintWorkflowController::reopen
 * @see app/Http/Controllers/CustomerComplaintWorkflowController.php:33
 * @route '/customer-complaint/{customerComplaint}/reopen'
 */
reopen.url = (args: { customerComplaint: number | { id: number } } | [customerComplaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { customerComplaint: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { customerComplaint: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    customerComplaint: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        customerComplaint: typeof args.customerComplaint === 'object'
                ? args.customerComplaint.id
                : args.customerComplaint,
                }

    return reopen.definition.url
            .replace('{customerComplaint}', parsedArgs.customerComplaint.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CustomerComplaintWorkflowController::reopen
 * @see app/Http/Controllers/CustomerComplaintWorkflowController.php:33
 * @route '/customer-complaint/{customerComplaint}/reopen'
 */
reopen.post = (args: { customerComplaint: number | { id: number } } | [customerComplaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reopen.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CustomerComplaintWorkflowController::reopen
 * @see app/Http/Controllers/CustomerComplaintWorkflowController.php:33
 * @route '/customer-complaint/{customerComplaint}/reopen'
 */
    const reopenForm = (args: { customerComplaint: number | { id: number } } | [customerComplaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: reopen.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CustomerComplaintWorkflowController::reopen
 * @see app/Http/Controllers/CustomerComplaintWorkflowController.php:33
 * @route '/customer-complaint/{customerComplaint}/reopen'
 */
        reopenForm.post = (args: { customerComplaint: number | { id: number } } | [customerComplaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: reopen.url(args, options),
            method: 'post',
        })
    
    reopen.form = reopenForm
const customerComplaint = {
    search: Object.assign(search, search),
index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
acknowledge: Object.assign(acknowledge, acknowledge),
resolve: Object.assign(resolve, resolve),
close: Object.assign(close, close),
reopen: Object.assign(reopen, reopen),
}

export default customerComplaint