import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\MachineController::index
 * @see app/Http/Controllers/MachineController.php:19
 * @route '/machine/search'
 */
const indexfe81588909927aae99d64029c055f692 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: indexfe81588909927aae99d64029c055f692.url(options),
    method: 'post',
})

indexfe81588909927aae99d64029c055f692.definition = {
    methods: ["post"],
    url: '/machine/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MachineController::index
 * @see app/Http/Controllers/MachineController.php:19
 * @route '/machine/search'
 */
indexfe81588909927aae99d64029c055f692.url = (options?: RouteQueryOptions) => {
    return indexfe81588909927aae99d64029c055f692.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MachineController::index
 * @see app/Http/Controllers/MachineController.php:19
 * @route '/machine/search'
 */
indexfe81588909927aae99d64029c055f692.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: indexfe81588909927aae99d64029c055f692.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\MachineController::index
 * @see app/Http/Controllers/MachineController.php:19
 * @route '/machine/search'
 */
    const indexfe81588909927aae99d64029c055f692Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: indexfe81588909927aae99d64029c055f692.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MachineController::index
 * @see app/Http/Controllers/MachineController.php:19
 * @route '/machine/search'
 */
        indexfe81588909927aae99d64029c055f692Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: indexfe81588909927aae99d64029c055f692.url(options),
            method: 'post',
        })
    
    indexfe81588909927aae99d64029c055f692.form = indexfe81588909927aae99d64029c055f692Form
    /**
* @see \App\Http\Controllers\MachineController::index
 * @see app/Http/Controllers/MachineController.php:19
 * @route '/machine'
 */
const index3f3bba382504c9cdeab158850e8981cc = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index3f3bba382504c9cdeab158850e8981cc.url(options),
    method: 'get',
})

index3f3bba382504c9cdeab158850e8981cc.definition = {
    methods: ["get","head"],
    url: '/machine',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MachineController::index
 * @see app/Http/Controllers/MachineController.php:19
 * @route '/machine'
 */
index3f3bba382504c9cdeab158850e8981cc.url = (options?: RouteQueryOptions) => {
    return index3f3bba382504c9cdeab158850e8981cc.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MachineController::index
 * @see app/Http/Controllers/MachineController.php:19
 * @route '/machine'
 */
index3f3bba382504c9cdeab158850e8981cc.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index3f3bba382504c9cdeab158850e8981cc.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MachineController::index
 * @see app/Http/Controllers/MachineController.php:19
 * @route '/machine'
 */
index3f3bba382504c9cdeab158850e8981cc.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index3f3bba382504c9cdeab158850e8981cc.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MachineController::index
 * @see app/Http/Controllers/MachineController.php:19
 * @route '/machine'
 */
    const index3f3bba382504c9cdeab158850e8981ccForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index3f3bba382504c9cdeab158850e8981cc.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MachineController::index
 * @see app/Http/Controllers/MachineController.php:19
 * @route '/machine'
 */
        index3f3bba382504c9cdeab158850e8981ccForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index3f3bba382504c9cdeab158850e8981cc.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MachineController::index
 * @see app/Http/Controllers/MachineController.php:19
 * @route '/machine'
 */
        index3f3bba382504c9cdeab158850e8981ccForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index3f3bba382504c9cdeab158850e8981cc.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index3f3bba382504c9cdeab158850e8981cc.form = index3f3bba382504c9cdeab158850e8981ccForm

/**
* Multiple routes resolve to \App\Http\Controllers\MachineController::index, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `index['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const index = {
    '/machine/search': indexfe81588909927aae99d64029c055f692,
    '/machine': index3f3bba382504c9cdeab158850e8981cc,
}

/**
* @see \App\Http\Controllers\MachineController::create
 * @see app/Http/Controllers/MachineController.php:41
 * @route '/machine/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/machine/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MachineController::create
 * @see app/Http/Controllers/MachineController.php:41
 * @route '/machine/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MachineController::create
 * @see app/Http/Controllers/MachineController.php:41
 * @route '/machine/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MachineController::create
 * @see app/Http/Controllers/MachineController.php:41
 * @route '/machine/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MachineController::create
 * @see app/Http/Controllers/MachineController.php:41
 * @route '/machine/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MachineController::create
 * @see app/Http/Controllers/MachineController.php:41
 * @route '/machine/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MachineController::create
 * @see app/Http/Controllers/MachineController.php:41
 * @route '/machine/create'
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
* @see \App\Http\Controllers\MachineController::store
 * @see app/Http/Controllers/MachineController.php:46
 * @route '/machine'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/machine',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MachineController::store
 * @see app/Http/Controllers/MachineController.php:46
 * @route '/machine'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MachineController::store
 * @see app/Http/Controllers/MachineController.php:46
 * @route '/machine'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\MachineController::store
 * @see app/Http/Controllers/MachineController.php:46
 * @route '/machine'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MachineController::store
 * @see app/Http/Controllers/MachineController.php:46
 * @route '/machine'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\MachineController::show
 * @see app/Http/Controllers/MachineController.php:55
 * @route '/machine/{machine}'
 */
export const show = (args: { machine: number | { id: number } } | [machine: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/machine/{machine}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MachineController::show
 * @see app/Http/Controllers/MachineController.php:55
 * @route '/machine/{machine}'
 */
show.url = (args: { machine: number | { id: number } } | [machine: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { machine: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { machine: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    machine: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        machine: typeof args.machine === 'object'
                ? args.machine.id
                : args.machine,
                }

    return show.definition.url
            .replace('{machine}', parsedArgs.machine.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MachineController::show
 * @see app/Http/Controllers/MachineController.php:55
 * @route '/machine/{machine}'
 */
show.get = (args: { machine: number | { id: number } } | [machine: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MachineController::show
 * @see app/Http/Controllers/MachineController.php:55
 * @route '/machine/{machine}'
 */
show.head = (args: { machine: number | { id: number } } | [machine: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MachineController::show
 * @see app/Http/Controllers/MachineController.php:55
 * @route '/machine/{machine}'
 */
    const showForm = (args: { machine: number | { id: number } } | [machine: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MachineController::show
 * @see app/Http/Controllers/MachineController.php:55
 * @route '/machine/{machine}'
 */
        showForm.get = (args: { machine: number | { id: number } } | [machine: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MachineController::show
 * @see app/Http/Controllers/MachineController.php:55
 * @route '/machine/{machine}'
 */
        showForm.head = (args: { machine: number | { id: number } } | [machine: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\MachineController::edit
 * @see app/Http/Controllers/MachineController.php:76
 * @route '/machine/{machine}/edit'
 */
export const edit = (args: { machine: number | { id: number } } | [machine: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/machine/{machine}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MachineController::edit
 * @see app/Http/Controllers/MachineController.php:76
 * @route '/machine/{machine}/edit'
 */
edit.url = (args: { machine: number | { id: number } } | [machine: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { machine: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { machine: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    machine: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        machine: typeof args.machine === 'object'
                ? args.machine.id
                : args.machine,
                }

    return edit.definition.url
            .replace('{machine}', parsedArgs.machine.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MachineController::edit
 * @see app/Http/Controllers/MachineController.php:76
 * @route '/machine/{machine}/edit'
 */
edit.get = (args: { machine: number | { id: number } } | [machine: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MachineController::edit
 * @see app/Http/Controllers/MachineController.php:76
 * @route '/machine/{machine}/edit'
 */
edit.head = (args: { machine: number | { id: number } } | [machine: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MachineController::edit
 * @see app/Http/Controllers/MachineController.php:76
 * @route '/machine/{machine}/edit'
 */
    const editForm = (args: { machine: number | { id: number } } | [machine: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MachineController::edit
 * @see app/Http/Controllers/MachineController.php:76
 * @route '/machine/{machine}/edit'
 */
        editForm.get = (args: { machine: number | { id: number } } | [machine: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MachineController::edit
 * @see app/Http/Controllers/MachineController.php:76
 * @route '/machine/{machine}/edit'
 */
        editForm.head = (args: { machine: number | { id: number } } | [machine: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\MachineController::update
 * @see app/Http/Controllers/MachineController.php:81
 * @route '/machine/{machine}'
 */
export const update = (args: { machine: number | { id: number } } | [machine: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/machine/{machine}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\MachineController::update
 * @see app/Http/Controllers/MachineController.php:81
 * @route '/machine/{machine}'
 */
update.url = (args: { machine: number | { id: number } } | [machine: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { machine: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { machine: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    machine: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        machine: typeof args.machine === 'object'
                ? args.machine.id
                : args.machine,
                }

    return update.definition.url
            .replace('{machine}', parsedArgs.machine.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MachineController::update
 * @see app/Http/Controllers/MachineController.php:81
 * @route '/machine/{machine}'
 */
update.put = (args: { machine: number | { id: number } } | [machine: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\MachineController::update
 * @see app/Http/Controllers/MachineController.php:81
 * @route '/machine/{machine}'
 */
update.patch = (args: { machine: number | { id: number } } | [machine: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\MachineController::update
 * @see app/Http/Controllers/MachineController.php:81
 * @route '/machine/{machine}'
 */
    const updateForm = (args: { machine: number | { id: number } } | [machine: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MachineController::update
 * @see app/Http/Controllers/MachineController.php:81
 * @route '/machine/{machine}'
 */
        updateForm.put = (args: { machine: number | { id: number } } | [machine: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\MachineController::update
 * @see app/Http/Controllers/MachineController.php:81
 * @route '/machine/{machine}'
 */
        updateForm.patch = (args: { machine: number | { id: number } } | [machine: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\MachineController::destroy
 * @see app/Http/Controllers/MachineController.php:90
 * @route '/machine/{machine}'
 */
export const destroy = (args: { machine: number | { id: number } } | [machine: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/machine/{machine}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\MachineController::destroy
 * @see app/Http/Controllers/MachineController.php:90
 * @route '/machine/{machine}'
 */
destroy.url = (args: { machine: number | { id: number } } | [machine: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { machine: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { machine: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    machine: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        machine: typeof args.machine === 'object'
                ? args.machine.id
                : args.machine,
                }

    return destroy.definition.url
            .replace('{machine}', parsedArgs.machine.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MachineController::destroy
 * @see app/Http/Controllers/MachineController.php:90
 * @route '/machine/{machine}'
 */
destroy.delete = (args: { machine: number | { id: number } } | [machine: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\MachineController::destroy
 * @see app/Http/Controllers/MachineController.php:90
 * @route '/machine/{machine}'
 */
    const destroyForm = (args: { machine: number | { id: number } } | [machine: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MachineController::destroy
 * @see app/Http/Controllers/MachineController.php:90
 * @route '/machine/{machine}'
 */
        destroyForm.delete = (args: { machine: number | { id: number } } | [machine: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\MachineController::deleted
 * @see app/Http/Controllers/MachineController.php:33
 * @route '/machine-deleted'
 */
export const deleted = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deleted.url(options),
    method: 'get',
})

deleted.definition = {
    methods: ["get","head"],
    url: '/machine-deleted',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MachineController::deleted
 * @see app/Http/Controllers/MachineController.php:33
 * @route '/machine-deleted'
 */
deleted.url = (options?: RouteQueryOptions) => {
    return deleted.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MachineController::deleted
 * @see app/Http/Controllers/MachineController.php:33
 * @route '/machine-deleted'
 */
deleted.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deleted.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MachineController::deleted
 * @see app/Http/Controllers/MachineController.php:33
 * @route '/machine-deleted'
 */
deleted.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: deleted.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MachineController::deleted
 * @see app/Http/Controllers/MachineController.php:33
 * @route '/machine-deleted'
 */
    const deletedForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: deleted.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MachineController::deleted
 * @see app/Http/Controllers/MachineController.php:33
 * @route '/machine-deleted'
 */
        deletedForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: deleted.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MachineController::deleted
 * @see app/Http/Controllers/MachineController.php:33
 * @route '/machine-deleted'
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
* @see \App\Http\Controllers\MachineController::permanentDestroy
 * @see app/Http/Controllers/MachineController.php:99
 * @route '/machine-permanent-delete/{machine}'
 */
export const permanentDestroy = (args: { machine: number | { id: number } } | [machine: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: permanentDestroy.url(args, options),
    method: 'delete',
})

permanentDestroy.definition = {
    methods: ["delete"],
    url: '/machine-permanent-delete/{machine}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\MachineController::permanentDestroy
 * @see app/Http/Controllers/MachineController.php:99
 * @route '/machine-permanent-delete/{machine}'
 */
permanentDestroy.url = (args: { machine: number | { id: number } } | [machine: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { machine: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { machine: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    machine: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        machine: typeof args.machine === 'object'
                ? args.machine.id
                : args.machine,
                }

    return permanentDestroy.definition.url
            .replace('{machine}', parsedArgs.machine.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MachineController::permanentDestroy
 * @see app/Http/Controllers/MachineController.php:99
 * @route '/machine-permanent-delete/{machine}'
 */
permanentDestroy.delete = (args: { machine: number | { id: number } } | [machine: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: permanentDestroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\MachineController::permanentDestroy
 * @see app/Http/Controllers/MachineController.php:99
 * @route '/machine-permanent-delete/{machine}'
 */
    const permanentDestroyForm = (args: { machine: number | { id: number } } | [machine: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: permanentDestroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MachineController::permanentDestroy
 * @see app/Http/Controllers/MachineController.php:99
 * @route '/machine-permanent-delete/{machine}'
 */
        permanentDestroyForm.delete = (args: { machine: number | { id: number } } | [machine: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\MachineController::restore
 * @see app/Http/Controllers/MachineController.php:108
 * @route '/machine-restore/{machine}'
 */
export const restore = (args: { machine: number | { id: number } } | [machine: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: restore.url(args, options),
    method: 'get',
})

restore.definition = {
    methods: ["get","head"],
    url: '/machine-restore/{machine}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MachineController::restore
 * @see app/Http/Controllers/MachineController.php:108
 * @route '/machine-restore/{machine}'
 */
restore.url = (args: { machine: number | { id: number } } | [machine: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { machine: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { machine: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    machine: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        machine: typeof args.machine === 'object'
                ? args.machine.id
                : args.machine,
                }

    return restore.definition.url
            .replace('{machine}', parsedArgs.machine.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MachineController::restore
 * @see app/Http/Controllers/MachineController.php:108
 * @route '/machine-restore/{machine}'
 */
restore.get = (args: { machine: number | { id: number } } | [machine: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: restore.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MachineController::restore
 * @see app/Http/Controllers/MachineController.php:108
 * @route '/machine-restore/{machine}'
 */
restore.head = (args: { machine: number | { id: number } } | [machine: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: restore.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MachineController::restore
 * @see app/Http/Controllers/MachineController.php:108
 * @route '/machine-restore/{machine}'
 */
    const restoreForm = (args: { machine: number | { id: number } } | [machine: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: restore.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MachineController::restore
 * @see app/Http/Controllers/MachineController.php:108
 * @route '/machine-restore/{machine}'
 */
        restoreForm.get = (args: { machine: number | { id: number } } | [machine: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: restore.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MachineController::restore
 * @see app/Http/Controllers/MachineController.php:108
 * @route '/machine-restore/{machine}'
 */
        restoreForm.head = (args: { machine: number | { id: number } } | [machine: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: restore.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    restore.form = restoreForm
const MachineController = { index, create, store, show, edit, update, destroy, deleted, permanentDestroy, restore }

export default MachineController