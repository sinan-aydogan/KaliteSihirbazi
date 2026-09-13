import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\DeviceController::search
 * @see app/Http/Controllers/DeviceController.php:19
 * @route '/device/search'
 */
export const search = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: search.url(options),
    method: 'post',
})

search.definition = {
    methods: ["post"],
    url: '/device/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\DeviceController::search
 * @see app/Http/Controllers/DeviceController.php:19
 * @route '/device/search'
 */
search.url = (options?: RouteQueryOptions) => {
    return search.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DeviceController::search
 * @see app/Http/Controllers/DeviceController.php:19
 * @route '/device/search'
 */
search.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: search.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\DeviceController::search
 * @see app/Http/Controllers/DeviceController.php:19
 * @route '/device/search'
 */
    const searchForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: search.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\DeviceController::search
 * @see app/Http/Controllers/DeviceController.php:19
 * @route '/device/search'
 */
        searchForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: search.url(options),
            method: 'post',
        })
    
    search.form = searchForm
/**
* @see \App\Http\Controllers\DeviceController::index
 * @see app/Http/Controllers/DeviceController.php:19
 * @route '/device'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/device',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DeviceController::index
 * @see app/Http/Controllers/DeviceController.php:19
 * @route '/device'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DeviceController::index
 * @see app/Http/Controllers/DeviceController.php:19
 * @route '/device'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\DeviceController::index
 * @see app/Http/Controllers/DeviceController.php:19
 * @route '/device'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\DeviceController::index
 * @see app/Http/Controllers/DeviceController.php:19
 * @route '/device'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\DeviceController::index
 * @see app/Http/Controllers/DeviceController.php:19
 * @route '/device'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\DeviceController::index
 * @see app/Http/Controllers/DeviceController.php:19
 * @route '/device'
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
* @see \App\Http\Controllers\DeviceController::create
 * @see app/Http/Controllers/DeviceController.php:41
 * @route '/device/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/device/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DeviceController::create
 * @see app/Http/Controllers/DeviceController.php:41
 * @route '/device/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DeviceController::create
 * @see app/Http/Controllers/DeviceController.php:41
 * @route '/device/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\DeviceController::create
 * @see app/Http/Controllers/DeviceController.php:41
 * @route '/device/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\DeviceController::create
 * @see app/Http/Controllers/DeviceController.php:41
 * @route '/device/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\DeviceController::create
 * @see app/Http/Controllers/DeviceController.php:41
 * @route '/device/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\DeviceController::create
 * @see app/Http/Controllers/DeviceController.php:41
 * @route '/device/create'
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
* @see \App\Http\Controllers\DeviceController::store
 * @see app/Http/Controllers/DeviceController.php:46
 * @route '/device'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/device',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\DeviceController::store
 * @see app/Http/Controllers/DeviceController.php:46
 * @route '/device'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DeviceController::store
 * @see app/Http/Controllers/DeviceController.php:46
 * @route '/device'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\DeviceController::store
 * @see app/Http/Controllers/DeviceController.php:46
 * @route '/device'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\DeviceController::store
 * @see app/Http/Controllers/DeviceController.php:46
 * @route '/device'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\DeviceController::show
 * @see app/Http/Controllers/DeviceController.php:55
 * @route '/device/{device}'
 */
export const show = (args: { device: number | { id: number } } | [device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/device/{device}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DeviceController::show
 * @see app/Http/Controllers/DeviceController.php:55
 * @route '/device/{device}'
 */
show.url = (args: { device: number | { id: number } } | [device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { device: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { device: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    device: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        device: typeof args.device === 'object'
                ? args.device.id
                : args.device,
                }

    return show.definition.url
            .replace('{device}', parsedArgs.device.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DeviceController::show
 * @see app/Http/Controllers/DeviceController.php:55
 * @route '/device/{device}'
 */
show.get = (args: { device: number | { id: number } } | [device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\DeviceController::show
 * @see app/Http/Controllers/DeviceController.php:55
 * @route '/device/{device}'
 */
show.head = (args: { device: number | { id: number } } | [device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\DeviceController::show
 * @see app/Http/Controllers/DeviceController.php:55
 * @route '/device/{device}'
 */
    const showForm = (args: { device: number | { id: number } } | [device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\DeviceController::show
 * @see app/Http/Controllers/DeviceController.php:55
 * @route '/device/{device}'
 */
        showForm.get = (args: { device: number | { id: number } } | [device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\DeviceController::show
 * @see app/Http/Controllers/DeviceController.php:55
 * @route '/device/{device}'
 */
        showForm.head = (args: { device: number | { id: number } } | [device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\DeviceController::edit
 * @see app/Http/Controllers/DeviceController.php:76
 * @route '/device/{device}/edit'
 */
export const edit = (args: { device: number | { id: number } } | [device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/device/{device}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DeviceController::edit
 * @see app/Http/Controllers/DeviceController.php:76
 * @route '/device/{device}/edit'
 */
edit.url = (args: { device: number | { id: number } } | [device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { device: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { device: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    device: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        device: typeof args.device === 'object'
                ? args.device.id
                : args.device,
                }

    return edit.definition.url
            .replace('{device}', parsedArgs.device.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DeviceController::edit
 * @see app/Http/Controllers/DeviceController.php:76
 * @route '/device/{device}/edit'
 */
edit.get = (args: { device: number | { id: number } } | [device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\DeviceController::edit
 * @see app/Http/Controllers/DeviceController.php:76
 * @route '/device/{device}/edit'
 */
edit.head = (args: { device: number | { id: number } } | [device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\DeviceController::edit
 * @see app/Http/Controllers/DeviceController.php:76
 * @route '/device/{device}/edit'
 */
    const editForm = (args: { device: number | { id: number } } | [device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\DeviceController::edit
 * @see app/Http/Controllers/DeviceController.php:76
 * @route '/device/{device}/edit'
 */
        editForm.get = (args: { device: number | { id: number } } | [device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\DeviceController::edit
 * @see app/Http/Controllers/DeviceController.php:76
 * @route '/device/{device}/edit'
 */
        editForm.head = (args: { device: number | { id: number } } | [device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\DeviceController::update
 * @see app/Http/Controllers/DeviceController.php:81
 * @route '/device/{device}'
 */
export const update = (args: { device: number | { id: number } } | [device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/device/{device}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\DeviceController::update
 * @see app/Http/Controllers/DeviceController.php:81
 * @route '/device/{device}'
 */
update.url = (args: { device: number | { id: number } } | [device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { device: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { device: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    device: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        device: typeof args.device === 'object'
                ? args.device.id
                : args.device,
                }

    return update.definition.url
            .replace('{device}', parsedArgs.device.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DeviceController::update
 * @see app/Http/Controllers/DeviceController.php:81
 * @route '/device/{device}'
 */
update.put = (args: { device: number | { id: number } } | [device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\DeviceController::update
 * @see app/Http/Controllers/DeviceController.php:81
 * @route '/device/{device}'
 */
update.patch = (args: { device: number | { id: number } } | [device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\DeviceController::update
 * @see app/Http/Controllers/DeviceController.php:81
 * @route '/device/{device}'
 */
    const updateForm = (args: { device: number | { id: number } } | [device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\DeviceController::update
 * @see app/Http/Controllers/DeviceController.php:81
 * @route '/device/{device}'
 */
        updateForm.put = (args: { device: number | { id: number } } | [device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\DeviceController::update
 * @see app/Http/Controllers/DeviceController.php:81
 * @route '/device/{device}'
 */
        updateForm.patch = (args: { device: number | { id: number } } | [device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\DeviceController::destroy
 * @see app/Http/Controllers/DeviceController.php:90
 * @route '/device/{device}'
 */
export const destroy = (args: { device: number | { id: number } } | [device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/device/{device}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\DeviceController::destroy
 * @see app/Http/Controllers/DeviceController.php:90
 * @route '/device/{device}'
 */
destroy.url = (args: { device: number | { id: number } } | [device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { device: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { device: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    device: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        device: typeof args.device === 'object'
                ? args.device.id
                : args.device,
                }

    return destroy.definition.url
            .replace('{device}', parsedArgs.device.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DeviceController::destroy
 * @see app/Http/Controllers/DeviceController.php:90
 * @route '/device/{device}'
 */
destroy.delete = (args: { device: number | { id: number } } | [device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\DeviceController::destroy
 * @see app/Http/Controllers/DeviceController.php:90
 * @route '/device/{device}'
 */
    const destroyForm = (args: { device: number | { id: number } } | [device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\DeviceController::destroy
 * @see app/Http/Controllers/DeviceController.php:90
 * @route '/device/{device}'
 */
        destroyForm.delete = (args: { device: number | { id: number } } | [device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\DeviceController::deleted
 * @see app/Http/Controllers/DeviceController.php:33
 * @route '/device-deleted'
 */
export const deleted = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deleted.url(options),
    method: 'get',
})

deleted.definition = {
    methods: ["get","head"],
    url: '/device-deleted',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DeviceController::deleted
 * @see app/Http/Controllers/DeviceController.php:33
 * @route '/device-deleted'
 */
deleted.url = (options?: RouteQueryOptions) => {
    return deleted.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DeviceController::deleted
 * @see app/Http/Controllers/DeviceController.php:33
 * @route '/device-deleted'
 */
deleted.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deleted.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\DeviceController::deleted
 * @see app/Http/Controllers/DeviceController.php:33
 * @route '/device-deleted'
 */
deleted.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: deleted.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\DeviceController::deleted
 * @see app/Http/Controllers/DeviceController.php:33
 * @route '/device-deleted'
 */
    const deletedForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: deleted.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\DeviceController::deleted
 * @see app/Http/Controllers/DeviceController.php:33
 * @route '/device-deleted'
 */
        deletedForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: deleted.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\DeviceController::deleted
 * @see app/Http/Controllers/DeviceController.php:33
 * @route '/device-deleted'
 */
        deletedForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: deleted.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    deleted.form = deletedForm
/**
* @see \App\Http\Controllers\DeviceController::permanentDelete
 * @see app/Http/Controllers/DeviceController.php:99
 * @route '/device-permanent-delete/{device}'
 */
export const permanentDelete = (args: { device: number | { id: number } } | [device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: permanentDelete.url(args, options),
    method: 'delete',
})

permanentDelete.definition = {
    methods: ["delete"],
    url: '/device-permanent-delete/{device}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\DeviceController::permanentDelete
 * @see app/Http/Controllers/DeviceController.php:99
 * @route '/device-permanent-delete/{device}'
 */
permanentDelete.url = (args: { device: number | { id: number } } | [device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { device: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { device: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    device: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        device: typeof args.device === 'object'
                ? args.device.id
                : args.device,
                }

    return permanentDelete.definition.url
            .replace('{device}', parsedArgs.device.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DeviceController::permanentDelete
 * @see app/Http/Controllers/DeviceController.php:99
 * @route '/device-permanent-delete/{device}'
 */
permanentDelete.delete = (args: { device: number | { id: number } } | [device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: permanentDelete.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\DeviceController::permanentDelete
 * @see app/Http/Controllers/DeviceController.php:99
 * @route '/device-permanent-delete/{device}'
 */
    const permanentDeleteForm = (args: { device: number | { id: number } } | [device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: permanentDelete.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\DeviceController::permanentDelete
 * @see app/Http/Controllers/DeviceController.php:99
 * @route '/device-permanent-delete/{device}'
 */
        permanentDeleteForm.delete = (args: { device: number | { id: number } } | [device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: permanentDelete.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    permanentDelete.form = permanentDeleteForm
/**
* @see \App\Http\Controllers\DeviceController::restore
 * @see app/Http/Controllers/DeviceController.php:108
 * @route '/device-restore/{device}'
 */
export const restore = (args: { device: number | { id: number } } | [device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: restore.url(args, options),
    method: 'get',
})

restore.definition = {
    methods: ["get","head"],
    url: '/device-restore/{device}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DeviceController::restore
 * @see app/Http/Controllers/DeviceController.php:108
 * @route '/device-restore/{device}'
 */
restore.url = (args: { device: number | { id: number } } | [device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { device: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { device: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    device: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        device: typeof args.device === 'object'
                ? args.device.id
                : args.device,
                }

    return restore.definition.url
            .replace('{device}', parsedArgs.device.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DeviceController::restore
 * @see app/Http/Controllers/DeviceController.php:108
 * @route '/device-restore/{device}'
 */
restore.get = (args: { device: number | { id: number } } | [device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: restore.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\DeviceController::restore
 * @see app/Http/Controllers/DeviceController.php:108
 * @route '/device-restore/{device}'
 */
restore.head = (args: { device: number | { id: number } } | [device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: restore.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\DeviceController::restore
 * @see app/Http/Controllers/DeviceController.php:108
 * @route '/device-restore/{device}'
 */
    const restoreForm = (args: { device: number | { id: number } } | [device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: restore.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\DeviceController::restore
 * @see app/Http/Controllers/DeviceController.php:108
 * @route '/device-restore/{device}'
 */
        restoreForm.get = (args: { device: number | { id: number } } | [device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: restore.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\DeviceController::restore
 * @see app/Http/Controllers/DeviceController.php:108
 * @route '/device-restore/{device}'
 */
        restoreForm.head = (args: { device: number | { id: number } } | [device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: restore.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    restore.form = restoreForm
const device = {
    search: Object.assign(search, search),
index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
deleted: Object.assign(deleted, deleted),
permanentDelete: Object.assign(permanentDelete, permanentDelete),
restore: Object.assign(restore, restore),
}

export default device