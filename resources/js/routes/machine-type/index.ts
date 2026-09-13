import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\MachineTypeController::search
 * @see app/Http/Controllers/MachineTypeController.php:12
 * @route '/machine-type/search'
 */
export const search = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: search.url(options),
    method: 'post',
})

search.definition = {
    methods: ["post"],
    url: '/machine-type/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MachineTypeController::search
 * @see app/Http/Controllers/MachineTypeController.php:12
 * @route '/machine-type/search'
 */
search.url = (options?: RouteQueryOptions) => {
    return search.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MachineTypeController::search
 * @see app/Http/Controllers/MachineTypeController.php:12
 * @route '/machine-type/search'
 */
search.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: search.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\MachineTypeController::search
 * @see app/Http/Controllers/MachineTypeController.php:12
 * @route '/machine-type/search'
 */
    const searchForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: search.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MachineTypeController::search
 * @see app/Http/Controllers/MachineTypeController.php:12
 * @route '/machine-type/search'
 */
        searchForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: search.url(options),
            method: 'post',
        })
    
    search.form = searchForm
/**
* @see \App\Http\Controllers\MachineTypeController::index
 * @see app/Http/Controllers/MachineTypeController.php:12
 * @route '/machine-type'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/machine-type',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MachineTypeController::index
 * @see app/Http/Controllers/MachineTypeController.php:12
 * @route '/machine-type'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MachineTypeController::index
 * @see app/Http/Controllers/MachineTypeController.php:12
 * @route '/machine-type'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MachineTypeController::index
 * @see app/Http/Controllers/MachineTypeController.php:12
 * @route '/machine-type'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MachineTypeController::index
 * @see app/Http/Controllers/MachineTypeController.php:12
 * @route '/machine-type'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MachineTypeController::index
 * @see app/Http/Controllers/MachineTypeController.php:12
 * @route '/machine-type'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MachineTypeController::index
 * @see app/Http/Controllers/MachineTypeController.php:12
 * @route '/machine-type'
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
* @see \App\Http\Controllers\MachineTypeController::create
 * @see app/Http/Controllers/MachineTypeController.php:19
 * @route '/machine-type/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/machine-type/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MachineTypeController::create
 * @see app/Http/Controllers/MachineTypeController.php:19
 * @route '/machine-type/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MachineTypeController::create
 * @see app/Http/Controllers/MachineTypeController.php:19
 * @route '/machine-type/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MachineTypeController::create
 * @see app/Http/Controllers/MachineTypeController.php:19
 * @route '/machine-type/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MachineTypeController::create
 * @see app/Http/Controllers/MachineTypeController.php:19
 * @route '/machine-type/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MachineTypeController::create
 * @see app/Http/Controllers/MachineTypeController.php:19
 * @route '/machine-type/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MachineTypeController::create
 * @see app/Http/Controllers/MachineTypeController.php:19
 * @route '/machine-type/create'
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
* @see \App\Http\Controllers\MachineTypeController::store
 * @see app/Http/Controllers/MachineTypeController.php:24
 * @route '/machine-type'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/machine-type',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MachineTypeController::store
 * @see app/Http/Controllers/MachineTypeController.php:24
 * @route '/machine-type'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MachineTypeController::store
 * @see app/Http/Controllers/MachineTypeController.php:24
 * @route '/machine-type'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\MachineTypeController::store
 * @see app/Http/Controllers/MachineTypeController.php:24
 * @route '/machine-type'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MachineTypeController::store
 * @see app/Http/Controllers/MachineTypeController.php:24
 * @route '/machine-type'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\MachineTypeController::show
 * @see app/Http/Controllers/MachineTypeController.php:33
 * @route '/machine-type/{machine_type}'
 */
export const show = (args: { machine_type: number | { id: number } } | [machine_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/machine-type/{machine_type}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MachineTypeController::show
 * @see app/Http/Controllers/MachineTypeController.php:33
 * @route '/machine-type/{machine_type}'
 */
show.url = (args: { machine_type: number | { id: number } } | [machine_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { machine_type: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { machine_type: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    machine_type: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        machine_type: typeof args.machine_type === 'object'
                ? args.machine_type.id
                : args.machine_type,
                }

    return show.definition.url
            .replace('{machine_type}', parsedArgs.machine_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MachineTypeController::show
 * @see app/Http/Controllers/MachineTypeController.php:33
 * @route '/machine-type/{machine_type}'
 */
show.get = (args: { machine_type: number | { id: number } } | [machine_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MachineTypeController::show
 * @see app/Http/Controllers/MachineTypeController.php:33
 * @route '/machine-type/{machine_type}'
 */
show.head = (args: { machine_type: number | { id: number } } | [machine_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MachineTypeController::show
 * @see app/Http/Controllers/MachineTypeController.php:33
 * @route '/machine-type/{machine_type}'
 */
    const showForm = (args: { machine_type: number | { id: number } } | [machine_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MachineTypeController::show
 * @see app/Http/Controllers/MachineTypeController.php:33
 * @route '/machine-type/{machine_type}'
 */
        showForm.get = (args: { machine_type: number | { id: number } } | [machine_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MachineTypeController::show
 * @see app/Http/Controllers/MachineTypeController.php:33
 * @route '/machine-type/{machine_type}'
 */
        showForm.head = (args: { machine_type: number | { id: number } } | [machine_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\MachineTypeController::edit
 * @see app/Http/Controllers/MachineTypeController.php:38
 * @route '/machine-type/{machine_type}/edit'
 */
export const edit = (args: { machine_type: number | { id: number } } | [machine_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/machine-type/{machine_type}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MachineTypeController::edit
 * @see app/Http/Controllers/MachineTypeController.php:38
 * @route '/machine-type/{machine_type}/edit'
 */
edit.url = (args: { machine_type: number | { id: number } } | [machine_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { machine_type: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { machine_type: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    machine_type: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        machine_type: typeof args.machine_type === 'object'
                ? args.machine_type.id
                : args.machine_type,
                }

    return edit.definition.url
            .replace('{machine_type}', parsedArgs.machine_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MachineTypeController::edit
 * @see app/Http/Controllers/MachineTypeController.php:38
 * @route '/machine-type/{machine_type}/edit'
 */
edit.get = (args: { machine_type: number | { id: number } } | [machine_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MachineTypeController::edit
 * @see app/Http/Controllers/MachineTypeController.php:38
 * @route '/machine-type/{machine_type}/edit'
 */
edit.head = (args: { machine_type: number | { id: number } } | [machine_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MachineTypeController::edit
 * @see app/Http/Controllers/MachineTypeController.php:38
 * @route '/machine-type/{machine_type}/edit'
 */
    const editForm = (args: { machine_type: number | { id: number } } | [machine_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MachineTypeController::edit
 * @see app/Http/Controllers/MachineTypeController.php:38
 * @route '/machine-type/{machine_type}/edit'
 */
        editForm.get = (args: { machine_type: number | { id: number } } | [machine_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MachineTypeController::edit
 * @see app/Http/Controllers/MachineTypeController.php:38
 * @route '/machine-type/{machine_type}/edit'
 */
        editForm.head = (args: { machine_type: number | { id: number } } | [machine_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\MachineTypeController::update
 * @see app/Http/Controllers/MachineTypeController.php:43
 * @route '/machine-type/{machine_type}'
 */
export const update = (args: { machine_type: number | { id: number } } | [machine_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/machine-type/{machine_type}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\MachineTypeController::update
 * @see app/Http/Controllers/MachineTypeController.php:43
 * @route '/machine-type/{machine_type}'
 */
update.url = (args: { machine_type: number | { id: number } } | [machine_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { machine_type: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { machine_type: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    machine_type: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        machine_type: typeof args.machine_type === 'object'
                ? args.machine_type.id
                : args.machine_type,
                }

    return update.definition.url
            .replace('{machine_type}', parsedArgs.machine_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MachineTypeController::update
 * @see app/Http/Controllers/MachineTypeController.php:43
 * @route '/machine-type/{machine_type}'
 */
update.put = (args: { machine_type: number | { id: number } } | [machine_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\MachineTypeController::update
 * @see app/Http/Controllers/MachineTypeController.php:43
 * @route '/machine-type/{machine_type}'
 */
update.patch = (args: { machine_type: number | { id: number } } | [machine_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\MachineTypeController::update
 * @see app/Http/Controllers/MachineTypeController.php:43
 * @route '/machine-type/{machine_type}'
 */
    const updateForm = (args: { machine_type: number | { id: number } } | [machine_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MachineTypeController::update
 * @see app/Http/Controllers/MachineTypeController.php:43
 * @route '/machine-type/{machine_type}'
 */
        updateForm.put = (args: { machine_type: number | { id: number } } | [machine_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\MachineTypeController::update
 * @see app/Http/Controllers/MachineTypeController.php:43
 * @route '/machine-type/{machine_type}'
 */
        updateForm.patch = (args: { machine_type: number | { id: number } } | [machine_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\MachineTypeController::destroy
 * @see app/Http/Controllers/MachineTypeController.php:52
 * @route '/machine-type/{machine_type}'
 */
export const destroy = (args: { machine_type: number | { id: number } } | [machine_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/machine-type/{machine_type}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\MachineTypeController::destroy
 * @see app/Http/Controllers/MachineTypeController.php:52
 * @route '/machine-type/{machine_type}'
 */
destroy.url = (args: { machine_type: number | { id: number } } | [machine_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { machine_type: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { machine_type: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    machine_type: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        machine_type: typeof args.machine_type === 'object'
                ? args.machine_type.id
                : args.machine_type,
                }

    return destroy.definition.url
            .replace('{machine_type}', parsedArgs.machine_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MachineTypeController::destroy
 * @see app/Http/Controllers/MachineTypeController.php:52
 * @route '/machine-type/{machine_type}'
 */
destroy.delete = (args: { machine_type: number | { id: number } } | [machine_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\MachineTypeController::destroy
 * @see app/Http/Controllers/MachineTypeController.php:52
 * @route '/machine-type/{machine_type}'
 */
    const destroyForm = (args: { machine_type: number | { id: number } } | [machine_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MachineTypeController::destroy
 * @see app/Http/Controllers/MachineTypeController.php:52
 * @route '/machine-type/{machine_type}'
 */
        destroyForm.delete = (args: { machine_type: number | { id: number } } | [machine_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const machineType = {
    search: Object.assign(search, search),
index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default machineType