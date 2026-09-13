import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\DeviceController::index
 * @see app/Http/Controllers/DeviceController.php:19
 * @route '/device/search'
 */
const index22009110a038001033a21a8e6ea9b2ca = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: index22009110a038001033a21a8e6ea9b2ca.url(options),
    method: 'post',
})

index22009110a038001033a21a8e6ea9b2ca.definition = {
    methods: ["post"],
    url: '/device/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\DeviceController::index
 * @see app/Http/Controllers/DeviceController.php:19
 * @route '/device/search'
 */
index22009110a038001033a21a8e6ea9b2ca.url = (options?: RouteQueryOptions) => {
    return index22009110a038001033a21a8e6ea9b2ca.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DeviceController::index
 * @see app/Http/Controllers/DeviceController.php:19
 * @route '/device/search'
 */
index22009110a038001033a21a8e6ea9b2ca.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: index22009110a038001033a21a8e6ea9b2ca.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\DeviceController::index
 * @see app/Http/Controllers/DeviceController.php:19
 * @route '/device/search'
 */
    const index22009110a038001033a21a8e6ea9b2caForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: index22009110a038001033a21a8e6ea9b2ca.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\DeviceController::index
 * @see app/Http/Controllers/DeviceController.php:19
 * @route '/device/search'
 */
        index22009110a038001033a21a8e6ea9b2caForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: index22009110a038001033a21a8e6ea9b2ca.url(options),
            method: 'post',
        })
    
    index22009110a038001033a21a8e6ea9b2ca.form = index22009110a038001033a21a8e6ea9b2caForm
    /**
* @see \App\Http\Controllers\DeviceController::index
 * @see app/Http/Controllers/DeviceController.php:19
 * @route '/device'
 */
const indexa298687ae69adb4ba9ea861a25e501aa = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexa298687ae69adb4ba9ea861a25e501aa.url(options),
    method: 'get',
})

indexa298687ae69adb4ba9ea861a25e501aa.definition = {
    methods: ["get","head"],
    url: '/device',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DeviceController::index
 * @see app/Http/Controllers/DeviceController.php:19
 * @route '/device'
 */
indexa298687ae69adb4ba9ea861a25e501aa.url = (options?: RouteQueryOptions) => {
    return indexa298687ae69adb4ba9ea861a25e501aa.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DeviceController::index
 * @see app/Http/Controllers/DeviceController.php:19
 * @route '/device'
 */
indexa298687ae69adb4ba9ea861a25e501aa.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexa298687ae69adb4ba9ea861a25e501aa.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\DeviceController::index
 * @see app/Http/Controllers/DeviceController.php:19
 * @route '/device'
 */
indexa298687ae69adb4ba9ea861a25e501aa.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexa298687ae69adb4ba9ea861a25e501aa.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\DeviceController::index
 * @see app/Http/Controllers/DeviceController.php:19
 * @route '/device'
 */
    const indexa298687ae69adb4ba9ea861a25e501aaForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: indexa298687ae69adb4ba9ea861a25e501aa.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\DeviceController::index
 * @see app/Http/Controllers/DeviceController.php:19
 * @route '/device'
 */
        indexa298687ae69adb4ba9ea861a25e501aaForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexa298687ae69adb4ba9ea861a25e501aa.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\DeviceController::index
 * @see app/Http/Controllers/DeviceController.php:19
 * @route '/device'
 */
        indexa298687ae69adb4ba9ea861a25e501aaForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexa298687ae69adb4ba9ea861a25e501aa.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    indexa298687ae69adb4ba9ea861a25e501aa.form = indexa298687ae69adb4ba9ea861a25e501aaForm

/**
* Multiple routes resolve to \App\Http\Controllers\DeviceController::index, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `index['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const index = {
    '/device/search': index22009110a038001033a21a8e6ea9b2ca,
    '/device': indexa298687ae69adb4ba9ea861a25e501aa,
}

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
* @see \App\Http\Controllers\DeviceController::permanentDestroy
 * @see app/Http/Controllers/DeviceController.php:99
 * @route '/device-permanent-delete/{device}'
 */
export const permanentDestroy = (args: { device: number | { id: number } } | [device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: permanentDestroy.url(args, options),
    method: 'delete',
})

permanentDestroy.definition = {
    methods: ["delete"],
    url: '/device-permanent-delete/{device}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\DeviceController::permanentDestroy
 * @see app/Http/Controllers/DeviceController.php:99
 * @route '/device-permanent-delete/{device}'
 */
permanentDestroy.url = (args: { device: number | { id: number } } | [device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return permanentDestroy.definition.url
            .replace('{device}', parsedArgs.device.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DeviceController::permanentDestroy
 * @see app/Http/Controllers/DeviceController.php:99
 * @route '/device-permanent-delete/{device}'
 */
permanentDestroy.delete = (args: { device: number | { id: number } } | [device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: permanentDestroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\DeviceController::permanentDestroy
 * @see app/Http/Controllers/DeviceController.php:99
 * @route '/device-permanent-delete/{device}'
 */
    const permanentDestroyForm = (args: { device: number | { id: number } } | [device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: permanentDestroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\DeviceController::permanentDestroy
 * @see app/Http/Controllers/DeviceController.php:99
 * @route '/device-permanent-delete/{device}'
 */
        permanentDestroyForm.delete = (args: { device: number | { id: number } } | [device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: permanentDestroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    permanentDestroy.form = permanentDestroyForm
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
const DeviceController = { index, create, store, show, edit, update, destroy, deleted, permanentDestroy, restore }

export default DeviceController