import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\DepartmentController::index
 * @see app/Http/Controllers/DepartmentController.php:18
 * @route '/department/search'
 */
const index94da4c04959cc6672fb82b3347dd3cc2 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: index94da4c04959cc6672fb82b3347dd3cc2.url(options),
    method: 'post',
})

index94da4c04959cc6672fb82b3347dd3cc2.definition = {
    methods: ["post"],
    url: '/department/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\DepartmentController::index
 * @see app/Http/Controllers/DepartmentController.php:18
 * @route '/department/search'
 */
index94da4c04959cc6672fb82b3347dd3cc2.url = (options?: RouteQueryOptions) => {
    return index94da4c04959cc6672fb82b3347dd3cc2.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DepartmentController::index
 * @see app/Http/Controllers/DepartmentController.php:18
 * @route '/department/search'
 */
index94da4c04959cc6672fb82b3347dd3cc2.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: index94da4c04959cc6672fb82b3347dd3cc2.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\DepartmentController::index
 * @see app/Http/Controllers/DepartmentController.php:18
 * @route '/department/search'
 */
    const index94da4c04959cc6672fb82b3347dd3cc2Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: index94da4c04959cc6672fb82b3347dd3cc2.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\DepartmentController::index
 * @see app/Http/Controllers/DepartmentController.php:18
 * @route '/department/search'
 */
        index94da4c04959cc6672fb82b3347dd3cc2Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: index94da4c04959cc6672fb82b3347dd3cc2.url(options),
            method: 'post',
        })
    
    index94da4c04959cc6672fb82b3347dd3cc2.form = index94da4c04959cc6672fb82b3347dd3cc2Form
    /**
* @see \App\Http\Controllers\DepartmentController::index
 * @see app/Http/Controllers/DepartmentController.php:18
 * @route '/department'
 */
const index0c1c2e7e08c65cf2ccd4beae1f50d4c5 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index0c1c2e7e08c65cf2ccd4beae1f50d4c5.url(options),
    method: 'get',
})

index0c1c2e7e08c65cf2ccd4beae1f50d4c5.definition = {
    methods: ["get","head"],
    url: '/department',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DepartmentController::index
 * @see app/Http/Controllers/DepartmentController.php:18
 * @route '/department'
 */
index0c1c2e7e08c65cf2ccd4beae1f50d4c5.url = (options?: RouteQueryOptions) => {
    return index0c1c2e7e08c65cf2ccd4beae1f50d4c5.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DepartmentController::index
 * @see app/Http/Controllers/DepartmentController.php:18
 * @route '/department'
 */
index0c1c2e7e08c65cf2ccd4beae1f50d4c5.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index0c1c2e7e08c65cf2ccd4beae1f50d4c5.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\DepartmentController::index
 * @see app/Http/Controllers/DepartmentController.php:18
 * @route '/department'
 */
index0c1c2e7e08c65cf2ccd4beae1f50d4c5.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index0c1c2e7e08c65cf2ccd4beae1f50d4c5.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\DepartmentController::index
 * @see app/Http/Controllers/DepartmentController.php:18
 * @route '/department'
 */
    const index0c1c2e7e08c65cf2ccd4beae1f50d4c5Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index0c1c2e7e08c65cf2ccd4beae1f50d4c5.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\DepartmentController::index
 * @see app/Http/Controllers/DepartmentController.php:18
 * @route '/department'
 */
        index0c1c2e7e08c65cf2ccd4beae1f50d4c5Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index0c1c2e7e08c65cf2ccd4beae1f50d4c5.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\DepartmentController::index
 * @see app/Http/Controllers/DepartmentController.php:18
 * @route '/department'
 */
        index0c1c2e7e08c65cf2ccd4beae1f50d4c5Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index0c1c2e7e08c65cf2ccd4beae1f50d4c5.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index0c1c2e7e08c65cf2ccd4beae1f50d4c5.form = index0c1c2e7e08c65cf2ccd4beae1f50d4c5Form

/**
* Multiple routes resolve to \App\Http\Controllers\DepartmentController::index, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `index['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const index = {
    '/department/search': index94da4c04959cc6672fb82b3347dd3cc2,
    '/department': index0c1c2e7e08c65cf2ccd4beae1f50d4c5,
}

/**
* @see \App\Http\Controllers\DepartmentController::create
 * @see app/Http/Controllers/DepartmentController.php:48
 * @route '/department/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/department/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DepartmentController::create
 * @see app/Http/Controllers/DepartmentController.php:48
 * @route '/department/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DepartmentController::create
 * @see app/Http/Controllers/DepartmentController.php:48
 * @route '/department/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\DepartmentController::create
 * @see app/Http/Controllers/DepartmentController.php:48
 * @route '/department/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\DepartmentController::create
 * @see app/Http/Controllers/DepartmentController.php:48
 * @route '/department/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\DepartmentController::create
 * @see app/Http/Controllers/DepartmentController.php:48
 * @route '/department/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\DepartmentController::create
 * @see app/Http/Controllers/DepartmentController.php:48
 * @route '/department/create'
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
* @see \App\Http\Controllers\DepartmentController::store
 * @see app/Http/Controllers/DepartmentController.php:59
 * @route '/department'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/department',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\DepartmentController::store
 * @see app/Http/Controllers/DepartmentController.php:59
 * @route '/department'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DepartmentController::store
 * @see app/Http/Controllers/DepartmentController.php:59
 * @route '/department'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\DepartmentController::store
 * @see app/Http/Controllers/DepartmentController.php:59
 * @route '/department'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\DepartmentController::store
 * @see app/Http/Controllers/DepartmentController.php:59
 * @route '/department'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\DepartmentController::show
 * @see app/Http/Controllers/DepartmentController.php:90
 * @route '/department/{department}'
 */
export const show = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/department/{department}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DepartmentController::show
 * @see app/Http/Controllers/DepartmentController.php:90
 * @route '/department/{department}'
 */
show.url = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { department: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { department: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    department: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        department: typeof args.department === 'object'
                ? args.department.id
                : args.department,
                }

    return show.definition.url
            .replace('{department}', parsedArgs.department.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DepartmentController::show
 * @see app/Http/Controllers/DepartmentController.php:90
 * @route '/department/{department}'
 */
show.get = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\DepartmentController::show
 * @see app/Http/Controllers/DepartmentController.php:90
 * @route '/department/{department}'
 */
show.head = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\DepartmentController::show
 * @see app/Http/Controllers/DepartmentController.php:90
 * @route '/department/{department}'
 */
    const showForm = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\DepartmentController::show
 * @see app/Http/Controllers/DepartmentController.php:90
 * @route '/department/{department}'
 */
        showForm.get = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\DepartmentController::show
 * @see app/Http/Controllers/DepartmentController.php:90
 * @route '/department/{department}'
 */
        showForm.head = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\DepartmentController::edit
 * @see app/Http/Controllers/DepartmentController.php:116
 * @route '/department/{department}/edit'
 */
export const edit = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/department/{department}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DepartmentController::edit
 * @see app/Http/Controllers/DepartmentController.php:116
 * @route '/department/{department}/edit'
 */
edit.url = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { department: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { department: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    department: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        department: typeof args.department === 'object'
                ? args.department.id
                : args.department,
                }

    return edit.definition.url
            .replace('{department}', parsedArgs.department.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DepartmentController::edit
 * @see app/Http/Controllers/DepartmentController.php:116
 * @route '/department/{department}/edit'
 */
edit.get = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\DepartmentController::edit
 * @see app/Http/Controllers/DepartmentController.php:116
 * @route '/department/{department}/edit'
 */
edit.head = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\DepartmentController::edit
 * @see app/Http/Controllers/DepartmentController.php:116
 * @route '/department/{department}/edit'
 */
    const editForm = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\DepartmentController::edit
 * @see app/Http/Controllers/DepartmentController.php:116
 * @route '/department/{department}/edit'
 */
        editForm.get = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\DepartmentController::edit
 * @see app/Http/Controllers/DepartmentController.php:116
 * @route '/department/{department}/edit'
 */
        editForm.head = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\DepartmentController::update
 * @see app/Http/Controllers/DepartmentController.php:128
 * @route '/department/{department}'
 */
export const update = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/department/{department}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\DepartmentController::update
 * @see app/Http/Controllers/DepartmentController.php:128
 * @route '/department/{department}'
 */
update.url = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { department: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { department: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    department: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        department: typeof args.department === 'object'
                ? args.department.id
                : args.department,
                }

    return update.definition.url
            .replace('{department}', parsedArgs.department.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DepartmentController::update
 * @see app/Http/Controllers/DepartmentController.php:128
 * @route '/department/{department}'
 */
update.put = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\DepartmentController::update
 * @see app/Http/Controllers/DepartmentController.php:128
 * @route '/department/{department}'
 */
update.patch = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\DepartmentController::update
 * @see app/Http/Controllers/DepartmentController.php:128
 * @route '/department/{department}'
 */
    const updateForm = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\DepartmentController::update
 * @see app/Http/Controllers/DepartmentController.php:128
 * @route '/department/{department}'
 */
        updateForm.put = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\DepartmentController::update
 * @see app/Http/Controllers/DepartmentController.php:128
 * @route '/department/{department}'
 */
        updateForm.patch = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\DepartmentController::destroy
 * @see app/Http/Controllers/DepartmentController.php:171
 * @route '/department/{department}'
 */
export const destroy = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/department/{department}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\DepartmentController::destroy
 * @see app/Http/Controllers/DepartmentController.php:171
 * @route '/department/{department}'
 */
destroy.url = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { department: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { department: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    department: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        department: typeof args.department === 'object'
                ? args.department.id
                : args.department,
                }

    return destroy.definition.url
            .replace('{department}', parsedArgs.department.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DepartmentController::destroy
 * @see app/Http/Controllers/DepartmentController.php:171
 * @route '/department/{department}'
 */
destroy.delete = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\DepartmentController::destroy
 * @see app/Http/Controllers/DepartmentController.php:171
 * @route '/department/{department}'
 */
    const destroyForm = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\DepartmentController::destroy
 * @see app/Http/Controllers/DepartmentController.php:171
 * @route '/department/{department}'
 */
        destroyForm.delete = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\DepartmentController::deleted
 * @see app/Http/Controllers/DepartmentController.php:34
 * @route '/department-deleted'
 */
export const deleted = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deleted.url(options),
    method: 'get',
})

deleted.definition = {
    methods: ["get","head"],
    url: '/department-deleted',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DepartmentController::deleted
 * @see app/Http/Controllers/DepartmentController.php:34
 * @route '/department-deleted'
 */
deleted.url = (options?: RouteQueryOptions) => {
    return deleted.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DepartmentController::deleted
 * @see app/Http/Controllers/DepartmentController.php:34
 * @route '/department-deleted'
 */
deleted.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deleted.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\DepartmentController::deleted
 * @see app/Http/Controllers/DepartmentController.php:34
 * @route '/department-deleted'
 */
deleted.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: deleted.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\DepartmentController::deleted
 * @see app/Http/Controllers/DepartmentController.php:34
 * @route '/department-deleted'
 */
    const deletedForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: deleted.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\DepartmentController::deleted
 * @see app/Http/Controllers/DepartmentController.php:34
 * @route '/department-deleted'
 */
        deletedForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: deleted.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\DepartmentController::deleted
 * @see app/Http/Controllers/DepartmentController.php:34
 * @route '/department-deleted'
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
* @see \App\Http\Controllers\DepartmentController::permanentDestroy
 * @see app/Http/Controllers/DepartmentController.php:186
 * @route '/department-permanent-delete/{department}'
 */
export const permanentDestroy = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: permanentDestroy.url(args, options),
    method: 'delete',
})

permanentDestroy.definition = {
    methods: ["delete"],
    url: '/department-permanent-delete/{department}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\DepartmentController::permanentDestroy
 * @see app/Http/Controllers/DepartmentController.php:186
 * @route '/department-permanent-delete/{department}'
 */
permanentDestroy.url = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { department: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { department: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    department: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        department: typeof args.department === 'object'
                ? args.department.id
                : args.department,
                }

    return permanentDestroy.definition.url
            .replace('{department}', parsedArgs.department.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DepartmentController::permanentDestroy
 * @see app/Http/Controllers/DepartmentController.php:186
 * @route '/department-permanent-delete/{department}'
 */
permanentDestroy.delete = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: permanentDestroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\DepartmentController::permanentDestroy
 * @see app/Http/Controllers/DepartmentController.php:186
 * @route '/department-permanent-delete/{department}'
 */
    const permanentDestroyForm = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: permanentDestroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\DepartmentController::permanentDestroy
 * @see app/Http/Controllers/DepartmentController.php:186
 * @route '/department-permanent-delete/{department}'
 */
        permanentDestroyForm.delete = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\DepartmentController::restore
 * @see app/Http/Controllers/DepartmentController.php:201
 * @route '/department-restore/{department}'
 */
export const restore = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: restore.url(args, options),
    method: 'get',
})

restore.definition = {
    methods: ["get","head"],
    url: '/department-restore/{department}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DepartmentController::restore
 * @see app/Http/Controllers/DepartmentController.php:201
 * @route '/department-restore/{department}'
 */
restore.url = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { department: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { department: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    department: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        department: typeof args.department === 'object'
                ? args.department.id
                : args.department,
                }

    return restore.definition.url
            .replace('{department}', parsedArgs.department.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DepartmentController::restore
 * @see app/Http/Controllers/DepartmentController.php:201
 * @route '/department-restore/{department}'
 */
restore.get = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: restore.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\DepartmentController::restore
 * @see app/Http/Controllers/DepartmentController.php:201
 * @route '/department-restore/{department}'
 */
restore.head = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: restore.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\DepartmentController::restore
 * @see app/Http/Controllers/DepartmentController.php:201
 * @route '/department-restore/{department}'
 */
    const restoreForm = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: restore.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\DepartmentController::restore
 * @see app/Http/Controllers/DepartmentController.php:201
 * @route '/department-restore/{department}'
 */
        restoreForm.get = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: restore.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\DepartmentController::restore
 * @see app/Http/Controllers/DepartmentController.php:201
 * @route '/department-restore/{department}'
 */
        restoreForm.head = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: restore.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    restore.form = restoreForm
const DepartmentController = { index, create, store, show, edit, update, destroy, deleted, permanentDestroy, restore }

export default DepartmentController