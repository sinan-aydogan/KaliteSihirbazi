import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\HumanResources\Employee\EmployeeController::index
 * @see app/Http/Controllers/HumanResources/Employee/EmployeeController.php:23
 * @route '/employee/search'
 */
const index2bd44c7d3046264c186c87168f941759 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: index2bd44c7d3046264c186c87168f941759.url(options),
    method: 'post',
})

index2bd44c7d3046264c186c87168f941759.definition = {
    methods: ["post"],
    url: '/employee/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\HumanResources\Employee\EmployeeController::index
 * @see app/Http/Controllers/HumanResources/Employee/EmployeeController.php:23
 * @route '/employee/search'
 */
index2bd44c7d3046264c186c87168f941759.url = (options?: RouteQueryOptions) => {
    return index2bd44c7d3046264c186c87168f941759.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\Employee\EmployeeController::index
 * @see app/Http/Controllers/HumanResources/Employee/EmployeeController.php:23
 * @route '/employee/search'
 */
index2bd44c7d3046264c186c87168f941759.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: index2bd44c7d3046264c186c87168f941759.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\HumanResources\Employee\EmployeeController::index
 * @see app/Http/Controllers/HumanResources/Employee/EmployeeController.php:23
 * @route '/employee/search'
 */
    const index2bd44c7d3046264c186c87168f941759Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: index2bd44c7d3046264c186c87168f941759.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\HumanResources\Employee\EmployeeController::index
 * @see app/Http/Controllers/HumanResources/Employee/EmployeeController.php:23
 * @route '/employee/search'
 */
        index2bd44c7d3046264c186c87168f941759Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: index2bd44c7d3046264c186c87168f941759.url(options),
            method: 'post',
        })
    
    index2bd44c7d3046264c186c87168f941759.form = index2bd44c7d3046264c186c87168f941759Form
    /**
* @see \App\Http\Controllers\HumanResources\Employee\EmployeeController::index
 * @see app/Http/Controllers/HumanResources/Employee/EmployeeController.php:23
 * @route '/employee'
 */
const index262ee77214880dd5578e501daede0132 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index262ee77214880dd5578e501daede0132.url(options),
    method: 'get',
})

index262ee77214880dd5578e501daede0132.definition = {
    methods: ["get","head"],
    url: '/employee',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HumanResources\Employee\EmployeeController::index
 * @see app/Http/Controllers/HumanResources/Employee/EmployeeController.php:23
 * @route '/employee'
 */
index262ee77214880dd5578e501daede0132.url = (options?: RouteQueryOptions) => {
    return index262ee77214880dd5578e501daede0132.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\Employee\EmployeeController::index
 * @see app/Http/Controllers/HumanResources/Employee/EmployeeController.php:23
 * @route '/employee'
 */
index262ee77214880dd5578e501daede0132.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index262ee77214880dd5578e501daede0132.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\HumanResources\Employee\EmployeeController::index
 * @see app/Http/Controllers/HumanResources/Employee/EmployeeController.php:23
 * @route '/employee'
 */
index262ee77214880dd5578e501daede0132.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index262ee77214880dd5578e501daede0132.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\HumanResources\Employee\EmployeeController::index
 * @see app/Http/Controllers/HumanResources/Employee/EmployeeController.php:23
 * @route '/employee'
 */
    const index262ee77214880dd5578e501daede0132Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index262ee77214880dd5578e501daede0132.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\HumanResources\Employee\EmployeeController::index
 * @see app/Http/Controllers/HumanResources/Employee/EmployeeController.php:23
 * @route '/employee'
 */
        index262ee77214880dd5578e501daede0132Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index262ee77214880dd5578e501daede0132.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\HumanResources\Employee\EmployeeController::index
 * @see app/Http/Controllers/HumanResources/Employee/EmployeeController.php:23
 * @route '/employee'
 */
        index262ee77214880dd5578e501daede0132Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index262ee77214880dd5578e501daede0132.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index262ee77214880dd5578e501daede0132.form = index262ee77214880dd5578e501daede0132Form

/**
* Multiple routes resolve to \App\Http\Controllers\HumanResources\Employee\EmployeeController::index, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `index['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const index = {
    '/employee/search': index2bd44c7d3046264c186c87168f941759,
    '/employee': index262ee77214880dd5578e501daede0132,
}

/**
* @see \App\Http\Controllers\HumanResources\Employee\EmployeeController::create
 * @see app/Http/Controllers/HumanResources/Employee/EmployeeController.php:46
 * @route '/employee/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/employee/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HumanResources\Employee\EmployeeController::create
 * @see app/Http/Controllers/HumanResources/Employee/EmployeeController.php:46
 * @route '/employee/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\Employee\EmployeeController::create
 * @see app/Http/Controllers/HumanResources/Employee/EmployeeController.php:46
 * @route '/employee/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\HumanResources\Employee\EmployeeController::create
 * @see app/Http/Controllers/HumanResources/Employee/EmployeeController.php:46
 * @route '/employee/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\HumanResources\Employee\EmployeeController::create
 * @see app/Http/Controllers/HumanResources/Employee/EmployeeController.php:46
 * @route '/employee/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\HumanResources\Employee\EmployeeController::create
 * @see app/Http/Controllers/HumanResources/Employee/EmployeeController.php:46
 * @route '/employee/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\HumanResources\Employee\EmployeeController::create
 * @see app/Http/Controllers/HumanResources/Employee/EmployeeController.php:46
 * @route '/employee/create'
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
* @see \App\Http\Controllers\HumanResources\Employee\EmployeeController::store
 * @see app/Http/Controllers/HumanResources/Employee/EmployeeController.php:56
 * @route '/employee'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/employee',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\HumanResources\Employee\EmployeeController::store
 * @see app/Http/Controllers/HumanResources/Employee/EmployeeController.php:56
 * @route '/employee'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\Employee\EmployeeController::store
 * @see app/Http/Controllers/HumanResources/Employee/EmployeeController.php:56
 * @route '/employee'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\HumanResources\Employee\EmployeeController::store
 * @see app/Http/Controllers/HumanResources/Employee/EmployeeController.php:56
 * @route '/employee'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\HumanResources\Employee\EmployeeController::store
 * @see app/Http/Controllers/HumanResources/Employee/EmployeeController.php:56
 * @route '/employee'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\HumanResources\Employee\EmployeeController::show
 * @see app/Http/Controllers/HumanResources/Employee/EmployeeController.php:84
 * @route '/employee/{employee}'
 */
export const show = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/employee/{employee}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HumanResources\Employee\EmployeeController::show
 * @see app/Http/Controllers/HumanResources/Employee/EmployeeController.php:84
 * @route '/employee/{employee}'
 */
show.url = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { employee: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { employee: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    employee: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        employee: typeof args.employee === 'object'
                ? args.employee.id
                : args.employee,
                }

    return show.definition.url
            .replace('{employee}', parsedArgs.employee.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\Employee\EmployeeController::show
 * @see app/Http/Controllers/HumanResources/Employee/EmployeeController.php:84
 * @route '/employee/{employee}'
 */
show.get = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\HumanResources\Employee\EmployeeController::show
 * @see app/Http/Controllers/HumanResources/Employee/EmployeeController.php:84
 * @route '/employee/{employee}'
 */
show.head = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\HumanResources\Employee\EmployeeController::show
 * @see app/Http/Controllers/HumanResources/Employee/EmployeeController.php:84
 * @route '/employee/{employee}'
 */
    const showForm = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\HumanResources\Employee\EmployeeController::show
 * @see app/Http/Controllers/HumanResources/Employee/EmployeeController.php:84
 * @route '/employee/{employee}'
 */
        showForm.get = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\HumanResources\Employee\EmployeeController::show
 * @see app/Http/Controllers/HumanResources/Employee/EmployeeController.php:84
 * @route '/employee/{employee}'
 */
        showForm.head = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\HumanResources\Employee\EmployeeController::edit
 * @see app/Http/Controllers/HumanResources/Employee/EmployeeController.php:94
 * @route '/employee/{employee}/edit'
 */
export const edit = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/employee/{employee}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HumanResources\Employee\EmployeeController::edit
 * @see app/Http/Controllers/HumanResources/Employee/EmployeeController.php:94
 * @route '/employee/{employee}/edit'
 */
edit.url = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { employee: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { employee: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    employee: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        employee: typeof args.employee === 'object'
                ? args.employee.id
                : args.employee,
                }

    return edit.definition.url
            .replace('{employee}', parsedArgs.employee.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\Employee\EmployeeController::edit
 * @see app/Http/Controllers/HumanResources/Employee/EmployeeController.php:94
 * @route '/employee/{employee}/edit'
 */
edit.get = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\HumanResources\Employee\EmployeeController::edit
 * @see app/Http/Controllers/HumanResources/Employee/EmployeeController.php:94
 * @route '/employee/{employee}/edit'
 */
edit.head = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\HumanResources\Employee\EmployeeController::edit
 * @see app/Http/Controllers/HumanResources/Employee/EmployeeController.php:94
 * @route '/employee/{employee}/edit'
 */
    const editForm = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\HumanResources\Employee\EmployeeController::edit
 * @see app/Http/Controllers/HumanResources/Employee/EmployeeController.php:94
 * @route '/employee/{employee}/edit'
 */
        editForm.get = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\HumanResources\Employee\EmployeeController::edit
 * @see app/Http/Controllers/HumanResources/Employee/EmployeeController.php:94
 * @route '/employee/{employee}/edit'
 */
        editForm.head = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\HumanResources\Employee\EmployeeController::update
 * @see app/Http/Controllers/HumanResources/Employee/EmployeeController.php:104
 * @route '/employee/{employee}'
 */
export const update = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/employee/{employee}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\HumanResources\Employee\EmployeeController::update
 * @see app/Http/Controllers/HumanResources/Employee/EmployeeController.php:104
 * @route '/employee/{employee}'
 */
update.url = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { employee: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { employee: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    employee: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        employee: typeof args.employee === 'object'
                ? args.employee.id
                : args.employee,
                }

    return update.definition.url
            .replace('{employee}', parsedArgs.employee.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\Employee\EmployeeController::update
 * @see app/Http/Controllers/HumanResources/Employee/EmployeeController.php:104
 * @route '/employee/{employee}'
 */
update.put = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\HumanResources\Employee\EmployeeController::update
 * @see app/Http/Controllers/HumanResources/Employee/EmployeeController.php:104
 * @route '/employee/{employee}'
 */
update.patch = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\HumanResources\Employee\EmployeeController::update
 * @see app/Http/Controllers/HumanResources/Employee/EmployeeController.php:104
 * @route '/employee/{employee}'
 */
    const updateForm = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\HumanResources\Employee\EmployeeController::update
 * @see app/Http/Controllers/HumanResources/Employee/EmployeeController.php:104
 * @route '/employee/{employee}'
 */
        updateForm.put = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\HumanResources\Employee\EmployeeController::update
 * @see app/Http/Controllers/HumanResources/Employee/EmployeeController.php:104
 * @route '/employee/{employee}'
 */
        updateForm.patch = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\HumanResources\Employee\EmployeeController::destroy
 * @see app/Http/Controllers/HumanResources/Employee/EmployeeController.php:138
 * @route '/employee/{employee}'
 */
export const destroy = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/employee/{employee}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\HumanResources\Employee\EmployeeController::destroy
 * @see app/Http/Controllers/HumanResources/Employee/EmployeeController.php:138
 * @route '/employee/{employee}'
 */
destroy.url = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { employee: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { employee: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    employee: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        employee: typeof args.employee === 'object'
                ? args.employee.id
                : args.employee,
                }

    return destroy.definition.url
            .replace('{employee}', parsedArgs.employee.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\Employee\EmployeeController::destroy
 * @see app/Http/Controllers/HumanResources/Employee/EmployeeController.php:138
 * @route '/employee/{employee}'
 */
destroy.delete = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\HumanResources\Employee\EmployeeController::destroy
 * @see app/Http/Controllers/HumanResources/Employee/EmployeeController.php:138
 * @route '/employee/{employee}'
 */
    const destroyForm = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\HumanResources\Employee\EmployeeController::destroy
 * @see app/Http/Controllers/HumanResources/Employee/EmployeeController.php:138
 * @route '/employee/{employee}'
 */
        destroyForm.delete = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const EmployeeController = { index, create, store, show, edit, update, destroy }

export default EmployeeController