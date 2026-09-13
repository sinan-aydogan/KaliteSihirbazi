import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\MachineController::search
 * @see app/Http/Controllers/MachineController.php:19
 * @route '/machine/search'
 */
export const search = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: search.url(options),
    method: 'post',
})

search.definition = {
    methods: ["post"],
    url: '/machine/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MachineController::search
 * @see app/Http/Controllers/MachineController.php:19
 * @route '/machine/search'
 */
search.url = (options?: RouteQueryOptions) => {
    return search.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MachineController::search
 * @see app/Http/Controllers/MachineController.php:19
 * @route '/machine/search'
 */
search.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: search.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\MachineController::search
 * @see app/Http/Controllers/MachineController.php:19
 * @route '/machine/search'
 */
    const searchForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: search.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MachineController::search
 * @see app/Http/Controllers/MachineController.php:19
 * @route '/machine/search'
 */
        searchForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: search.url(options),
            method: 'post',
        })
    
    search.form = searchForm
/**
* @see \App\Http\Controllers\MachineController::index
 * @see app/Http/Controllers/MachineController.php:19
 * @route '/machine'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/machine',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MachineController::index
 * @see app/Http/Controllers/MachineController.php:19
 * @route '/machine'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MachineController::index
 * @see app/Http/Controllers/MachineController.php:19
 * @route '/machine'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MachineController::index
 * @see app/Http/Controllers/MachineController.php:19
 * @route '/machine'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MachineController::index
 * @see app/Http/Controllers/MachineController.php:19
 * @route '/machine'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MachineController::index
 * @see app/Http/Controllers/MachineController.php:19
 * @route '/machine'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MachineController::index
 * @see app/Http/Controllers/MachineController.php:19
 * @route '/machine'
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
* @see \App\Http\Controllers\MachineController::permanentDelete
 * @see app/Http/Controllers/MachineController.php:99
 * @route '/machine-permanent-delete/{machine}'
 */
export const permanentDelete = (args: { machine: number | { id: number } } | [machine: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: permanentDelete.url(args, options),
    method: 'delete',
})

permanentDelete.definition = {
    methods: ["delete"],
    url: '/machine-permanent-delete/{machine}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\MachineController::permanentDelete
 * @see app/Http/Controllers/MachineController.php:99
 * @route '/machine-permanent-delete/{machine}'
 */
permanentDelete.url = (args: { machine: number | { id: number } } | [machine: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return permanentDelete.definition.url
            .replace('{machine}', parsedArgs.machine.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MachineController::permanentDelete
 * @see app/Http/Controllers/MachineController.php:99
 * @route '/machine-permanent-delete/{machine}'
 */
permanentDelete.delete = (args: { machine: number | { id: number } } | [machine: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: permanentDelete.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\MachineController::permanentDelete
 * @see app/Http/Controllers/MachineController.php:99
 * @route '/machine-permanent-delete/{machine}'
 */
    const permanentDeleteForm = (args: { machine: number | { id: number } } | [machine: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: permanentDelete.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MachineController::permanentDelete
 * @see app/Http/Controllers/MachineController.php:99
 * @route '/machine-permanent-delete/{machine}'
 */
        permanentDeleteForm.delete = (args: { machine: number | { id: number } } | [machine: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
const machine = {
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

export default machine