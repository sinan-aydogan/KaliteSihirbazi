import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\HumanResources\Education\EducationTypeController::index
 * @see app/Http/Controllers/HumanResources/Education/EducationTypeController.php:21
 * @route '/education-type/search'
 */
const indexfed67f2b7a06af86bb6a66f1c729d814 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: indexfed67f2b7a06af86bb6a66f1c729d814.url(options),
    method: 'post',
})

indexfed67f2b7a06af86bb6a66f1c729d814.definition = {
    methods: ["post"],
    url: '/education-type/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationTypeController::index
 * @see app/Http/Controllers/HumanResources/Education/EducationTypeController.php:21
 * @route '/education-type/search'
 */
indexfed67f2b7a06af86bb6a66f1c729d814.url = (options?: RouteQueryOptions) => {
    return indexfed67f2b7a06af86bb6a66f1c729d814.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationTypeController::index
 * @see app/Http/Controllers/HumanResources/Education/EducationTypeController.php:21
 * @route '/education-type/search'
 */
indexfed67f2b7a06af86bb6a66f1c729d814.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: indexfed67f2b7a06af86bb6a66f1c729d814.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\HumanResources\Education\EducationTypeController::index
 * @see app/Http/Controllers/HumanResources/Education/EducationTypeController.php:21
 * @route '/education-type/search'
 */
    const indexfed67f2b7a06af86bb6a66f1c729d814Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: indexfed67f2b7a06af86bb6a66f1c729d814.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\HumanResources\Education\EducationTypeController::index
 * @see app/Http/Controllers/HumanResources/Education/EducationTypeController.php:21
 * @route '/education-type/search'
 */
        indexfed67f2b7a06af86bb6a66f1c729d814Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: indexfed67f2b7a06af86bb6a66f1c729d814.url(options),
            method: 'post',
        })
    
    indexfed67f2b7a06af86bb6a66f1c729d814.form = indexfed67f2b7a06af86bb6a66f1c729d814Form
    /**
* @see \App\Http\Controllers\HumanResources\Education\EducationTypeController::index
 * @see app/Http/Controllers/HumanResources/Education/EducationTypeController.php:21
 * @route '/education-type'
 */
const index75f346094753d5493fe4571cea50d36a = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index75f346094753d5493fe4571cea50d36a.url(options),
    method: 'get',
})

index75f346094753d5493fe4571cea50d36a.definition = {
    methods: ["get","head"],
    url: '/education-type',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationTypeController::index
 * @see app/Http/Controllers/HumanResources/Education/EducationTypeController.php:21
 * @route '/education-type'
 */
index75f346094753d5493fe4571cea50d36a.url = (options?: RouteQueryOptions) => {
    return index75f346094753d5493fe4571cea50d36a.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationTypeController::index
 * @see app/Http/Controllers/HumanResources/Education/EducationTypeController.php:21
 * @route '/education-type'
 */
index75f346094753d5493fe4571cea50d36a.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index75f346094753d5493fe4571cea50d36a.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\HumanResources\Education\EducationTypeController::index
 * @see app/Http/Controllers/HumanResources/Education/EducationTypeController.php:21
 * @route '/education-type'
 */
index75f346094753d5493fe4571cea50d36a.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index75f346094753d5493fe4571cea50d36a.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\HumanResources\Education\EducationTypeController::index
 * @see app/Http/Controllers/HumanResources/Education/EducationTypeController.php:21
 * @route '/education-type'
 */
    const index75f346094753d5493fe4571cea50d36aForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index75f346094753d5493fe4571cea50d36a.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\HumanResources\Education\EducationTypeController::index
 * @see app/Http/Controllers/HumanResources/Education/EducationTypeController.php:21
 * @route '/education-type'
 */
        index75f346094753d5493fe4571cea50d36aForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index75f346094753d5493fe4571cea50d36a.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\HumanResources\Education\EducationTypeController::index
 * @see app/Http/Controllers/HumanResources/Education/EducationTypeController.php:21
 * @route '/education-type'
 */
        index75f346094753d5493fe4571cea50d36aForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index75f346094753d5493fe4571cea50d36a.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index75f346094753d5493fe4571cea50d36a.form = index75f346094753d5493fe4571cea50d36aForm

/**
* Multiple routes resolve to \App\Http\Controllers\HumanResources\Education\EducationTypeController::index, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `index['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const index = {
    '/education-type/search': indexfed67f2b7a06af86bb6a66f1c729d814,
    '/education-type': index75f346094753d5493fe4571cea50d36a,
}

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationTypeController::create
 * @see app/Http/Controllers/HumanResources/Education/EducationTypeController.php:45
 * @route '/education-type/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/education-type/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationTypeController::create
 * @see app/Http/Controllers/HumanResources/Education/EducationTypeController.php:45
 * @route '/education-type/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationTypeController::create
 * @see app/Http/Controllers/HumanResources/Education/EducationTypeController.php:45
 * @route '/education-type/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\HumanResources\Education\EducationTypeController::create
 * @see app/Http/Controllers/HumanResources/Education/EducationTypeController.php:45
 * @route '/education-type/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\HumanResources\Education\EducationTypeController::create
 * @see app/Http/Controllers/HumanResources/Education/EducationTypeController.php:45
 * @route '/education-type/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\HumanResources\Education\EducationTypeController::create
 * @see app/Http/Controllers/HumanResources/Education/EducationTypeController.php:45
 * @route '/education-type/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\HumanResources\Education\EducationTypeController::create
 * @see app/Http/Controllers/HumanResources/Education/EducationTypeController.php:45
 * @route '/education-type/create'
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
* @see \App\Http\Controllers\HumanResources\Education\EducationTypeController::store
 * @see app/Http/Controllers/HumanResources/Education/EducationTypeController.php:56
 * @route '/education-type'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/education-type',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationTypeController::store
 * @see app/Http/Controllers/HumanResources/Education/EducationTypeController.php:56
 * @route '/education-type'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationTypeController::store
 * @see app/Http/Controllers/HumanResources/Education/EducationTypeController.php:56
 * @route '/education-type'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\HumanResources\Education\EducationTypeController::store
 * @see app/Http/Controllers/HumanResources/Education/EducationTypeController.php:56
 * @route '/education-type'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\HumanResources\Education\EducationTypeController::store
 * @see app/Http/Controllers/HumanResources/Education/EducationTypeController.php:56
 * @route '/education-type'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\HumanResources\Education\EducationTypeController::show
 * @see app/Http/Controllers/HumanResources/Education/EducationTypeController.php:72
 * @route '/education-type/{education_type}'
 */
export const show = (args: { education_type: number | { id: number } } | [education_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/education-type/{education_type}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationTypeController::show
 * @see app/Http/Controllers/HumanResources/Education/EducationTypeController.php:72
 * @route '/education-type/{education_type}'
 */
show.url = (args: { education_type: number | { id: number } } | [education_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { education_type: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { education_type: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    education_type: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        education_type: typeof args.education_type === 'object'
                ? args.education_type.id
                : args.education_type,
                }

    return show.definition.url
            .replace('{education_type}', parsedArgs.education_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationTypeController::show
 * @see app/Http/Controllers/HumanResources/Education/EducationTypeController.php:72
 * @route '/education-type/{education_type}'
 */
show.get = (args: { education_type: number | { id: number } } | [education_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\HumanResources\Education\EducationTypeController::show
 * @see app/Http/Controllers/HumanResources/Education/EducationTypeController.php:72
 * @route '/education-type/{education_type}'
 */
show.head = (args: { education_type: number | { id: number } } | [education_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\HumanResources\Education\EducationTypeController::show
 * @see app/Http/Controllers/HumanResources/Education/EducationTypeController.php:72
 * @route '/education-type/{education_type}'
 */
    const showForm = (args: { education_type: number | { id: number } } | [education_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\HumanResources\Education\EducationTypeController::show
 * @see app/Http/Controllers/HumanResources/Education/EducationTypeController.php:72
 * @route '/education-type/{education_type}'
 */
        showForm.get = (args: { education_type: number | { id: number } } | [education_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\HumanResources\Education\EducationTypeController::show
 * @see app/Http/Controllers/HumanResources/Education/EducationTypeController.php:72
 * @route '/education-type/{education_type}'
 */
        showForm.head = (args: { education_type: number | { id: number } } | [education_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\HumanResources\Education\EducationTypeController::edit
 * @see app/Http/Controllers/HumanResources/Education/EducationTypeController.php:85
 * @route '/education-type/{education_type}/edit'
 */
export const edit = (args: { education_type: number | { id: number } } | [education_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/education-type/{education_type}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationTypeController::edit
 * @see app/Http/Controllers/HumanResources/Education/EducationTypeController.php:85
 * @route '/education-type/{education_type}/edit'
 */
edit.url = (args: { education_type: number | { id: number } } | [education_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { education_type: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { education_type: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    education_type: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        education_type: typeof args.education_type === 'object'
                ? args.education_type.id
                : args.education_type,
                }

    return edit.definition.url
            .replace('{education_type}', parsedArgs.education_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationTypeController::edit
 * @see app/Http/Controllers/HumanResources/Education/EducationTypeController.php:85
 * @route '/education-type/{education_type}/edit'
 */
edit.get = (args: { education_type: number | { id: number } } | [education_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\HumanResources\Education\EducationTypeController::edit
 * @see app/Http/Controllers/HumanResources/Education/EducationTypeController.php:85
 * @route '/education-type/{education_type}/edit'
 */
edit.head = (args: { education_type: number | { id: number } } | [education_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\HumanResources\Education\EducationTypeController::edit
 * @see app/Http/Controllers/HumanResources/Education/EducationTypeController.php:85
 * @route '/education-type/{education_type}/edit'
 */
    const editForm = (args: { education_type: number | { id: number } } | [education_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\HumanResources\Education\EducationTypeController::edit
 * @see app/Http/Controllers/HumanResources/Education/EducationTypeController.php:85
 * @route '/education-type/{education_type}/edit'
 */
        editForm.get = (args: { education_type: number | { id: number } } | [education_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\HumanResources\Education\EducationTypeController::edit
 * @see app/Http/Controllers/HumanResources/Education/EducationTypeController.php:85
 * @route '/education-type/{education_type}/edit'
 */
        editForm.head = (args: { education_type: number | { id: number } } | [education_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\HumanResources\Education\EducationTypeController::update
 * @see app/Http/Controllers/HumanResources/Education/EducationTypeController.php:97
 * @route '/education-type/{education_type}'
 */
export const update = (args: { education_type: number | { id: number } } | [education_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/education-type/{education_type}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationTypeController::update
 * @see app/Http/Controllers/HumanResources/Education/EducationTypeController.php:97
 * @route '/education-type/{education_type}'
 */
update.url = (args: { education_type: number | { id: number } } | [education_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { education_type: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { education_type: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    education_type: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        education_type: typeof args.education_type === 'object'
                ? args.education_type.id
                : args.education_type,
                }

    return update.definition.url
            .replace('{education_type}', parsedArgs.education_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationTypeController::update
 * @see app/Http/Controllers/HumanResources/Education/EducationTypeController.php:97
 * @route '/education-type/{education_type}'
 */
update.put = (args: { education_type: number | { id: number } } | [education_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\HumanResources\Education\EducationTypeController::update
 * @see app/Http/Controllers/HumanResources/Education/EducationTypeController.php:97
 * @route '/education-type/{education_type}'
 */
update.patch = (args: { education_type: number | { id: number } } | [education_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\HumanResources\Education\EducationTypeController::update
 * @see app/Http/Controllers/HumanResources/Education/EducationTypeController.php:97
 * @route '/education-type/{education_type}'
 */
    const updateForm = (args: { education_type: number | { id: number } } | [education_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\HumanResources\Education\EducationTypeController::update
 * @see app/Http/Controllers/HumanResources/Education/EducationTypeController.php:97
 * @route '/education-type/{education_type}'
 */
        updateForm.put = (args: { education_type: number | { id: number } } | [education_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\HumanResources\Education\EducationTypeController::update
 * @see app/Http/Controllers/HumanResources/Education/EducationTypeController.php:97
 * @route '/education-type/{education_type}'
 */
        updateForm.patch = (args: { education_type: number | { id: number } } | [education_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\HumanResources\Education\EducationTypeController::destroy
 * @see app/Http/Controllers/HumanResources/Education/EducationTypeController.php:112
 * @route '/education-type/{education_type}'
 */
export const destroy = (args: { education_type: number | { id: number } } | [education_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/education-type/{education_type}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationTypeController::destroy
 * @see app/Http/Controllers/HumanResources/Education/EducationTypeController.php:112
 * @route '/education-type/{education_type}'
 */
destroy.url = (args: { education_type: number | { id: number } } | [education_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { education_type: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { education_type: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    education_type: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        education_type: typeof args.education_type === 'object'
                ? args.education_type.id
                : args.education_type,
                }

    return destroy.definition.url
            .replace('{education_type}', parsedArgs.education_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationTypeController::destroy
 * @see app/Http/Controllers/HumanResources/Education/EducationTypeController.php:112
 * @route '/education-type/{education_type}'
 */
destroy.delete = (args: { education_type: number | { id: number } } | [education_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\HumanResources\Education\EducationTypeController::destroy
 * @see app/Http/Controllers/HumanResources/Education/EducationTypeController.php:112
 * @route '/education-type/{education_type}'
 */
    const destroyForm = (args: { education_type: number | { id: number } } | [education_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\HumanResources\Education\EducationTypeController::destroy
 * @see app/Http/Controllers/HumanResources/Education/EducationTypeController.php:112
 * @route '/education-type/{education_type}'
 */
        destroyForm.delete = (args: { education_type: number | { id: number } } | [education_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\HumanResources\Education\EducationTypeController::deleted
 * @see app/Http/Controllers/HumanResources/Education/EducationTypeController.php:33
 * @route '/education-type-deleted'
 */
export const deleted = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deleted.url(options),
    method: 'get',
})

deleted.definition = {
    methods: ["get","head"],
    url: '/education-type-deleted',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationTypeController::deleted
 * @see app/Http/Controllers/HumanResources/Education/EducationTypeController.php:33
 * @route '/education-type-deleted'
 */
deleted.url = (options?: RouteQueryOptions) => {
    return deleted.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationTypeController::deleted
 * @see app/Http/Controllers/HumanResources/Education/EducationTypeController.php:33
 * @route '/education-type-deleted'
 */
deleted.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deleted.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\HumanResources\Education\EducationTypeController::deleted
 * @see app/Http/Controllers/HumanResources/Education/EducationTypeController.php:33
 * @route '/education-type-deleted'
 */
deleted.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: deleted.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\HumanResources\Education\EducationTypeController::deleted
 * @see app/Http/Controllers/HumanResources/Education/EducationTypeController.php:33
 * @route '/education-type-deleted'
 */
    const deletedForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: deleted.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\HumanResources\Education\EducationTypeController::deleted
 * @see app/Http/Controllers/HumanResources/Education/EducationTypeController.php:33
 * @route '/education-type-deleted'
 */
        deletedForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: deleted.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\HumanResources\Education\EducationTypeController::deleted
 * @see app/Http/Controllers/HumanResources/Education/EducationTypeController.php:33
 * @route '/education-type-deleted'
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
* @see \App\Http\Controllers\HumanResources\Education\EducationTypeController::permanentDestroy
 * @see app/Http/Controllers/HumanResources/Education/EducationTypeController.php:127
 * @route '/education-type-permanent-delete/{educationType}'
 */
export const permanentDestroy = (args: { educationType: number | { id: number } } | [educationType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: permanentDestroy.url(args, options),
    method: 'delete',
})

permanentDestroy.definition = {
    methods: ["delete"],
    url: '/education-type-permanent-delete/{educationType}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationTypeController::permanentDestroy
 * @see app/Http/Controllers/HumanResources/Education/EducationTypeController.php:127
 * @route '/education-type-permanent-delete/{educationType}'
 */
permanentDestroy.url = (args: { educationType: number | { id: number } } | [educationType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { educationType: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { educationType: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    educationType: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        educationType: typeof args.educationType === 'object'
                ? args.educationType.id
                : args.educationType,
                }

    return permanentDestroy.definition.url
            .replace('{educationType}', parsedArgs.educationType.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationTypeController::permanentDestroy
 * @see app/Http/Controllers/HumanResources/Education/EducationTypeController.php:127
 * @route '/education-type-permanent-delete/{educationType}'
 */
permanentDestroy.delete = (args: { educationType: number | { id: number } } | [educationType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: permanentDestroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\HumanResources\Education\EducationTypeController::permanentDestroy
 * @see app/Http/Controllers/HumanResources/Education/EducationTypeController.php:127
 * @route '/education-type-permanent-delete/{educationType}'
 */
    const permanentDestroyForm = (args: { educationType: number | { id: number } } | [educationType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: permanentDestroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\HumanResources\Education\EducationTypeController::permanentDestroy
 * @see app/Http/Controllers/HumanResources/Education/EducationTypeController.php:127
 * @route '/education-type-permanent-delete/{educationType}'
 */
        permanentDestroyForm.delete = (args: { educationType: number | { id: number } } | [educationType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\HumanResources\Education\EducationTypeController::restore
 * @see app/Http/Controllers/HumanResources/Education/EducationTypeController.php:142
 * @route '/education-type-restore/{educationType}'
 */
export const restore = (args: { educationType: number | { id: number } } | [educationType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: restore.url(args, options),
    method: 'get',
})

restore.definition = {
    methods: ["get","head"],
    url: '/education-type-restore/{educationType}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationTypeController::restore
 * @see app/Http/Controllers/HumanResources/Education/EducationTypeController.php:142
 * @route '/education-type-restore/{educationType}'
 */
restore.url = (args: { educationType: number | { id: number } } | [educationType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { educationType: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { educationType: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    educationType: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        educationType: typeof args.educationType === 'object'
                ? args.educationType.id
                : args.educationType,
                }

    return restore.definition.url
            .replace('{educationType}', parsedArgs.educationType.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationTypeController::restore
 * @see app/Http/Controllers/HumanResources/Education/EducationTypeController.php:142
 * @route '/education-type-restore/{educationType}'
 */
restore.get = (args: { educationType: number | { id: number } } | [educationType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: restore.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\HumanResources\Education\EducationTypeController::restore
 * @see app/Http/Controllers/HumanResources/Education/EducationTypeController.php:142
 * @route '/education-type-restore/{educationType}'
 */
restore.head = (args: { educationType: number | { id: number } } | [educationType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: restore.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\HumanResources\Education\EducationTypeController::restore
 * @see app/Http/Controllers/HumanResources/Education/EducationTypeController.php:142
 * @route '/education-type-restore/{educationType}'
 */
    const restoreForm = (args: { educationType: number | { id: number } } | [educationType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: restore.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\HumanResources\Education\EducationTypeController::restore
 * @see app/Http/Controllers/HumanResources/Education/EducationTypeController.php:142
 * @route '/education-type-restore/{educationType}'
 */
        restoreForm.get = (args: { educationType: number | { id: number } } | [educationType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: restore.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\HumanResources\Education\EducationTypeController::restore
 * @see app/Http/Controllers/HumanResources/Education/EducationTypeController.php:142
 * @route '/education-type-restore/{educationType}'
 */
        restoreForm.head = (args: { educationType: number | { id: number } } | [educationType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: restore.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    restore.form = restoreForm
const EducationTypeController = { index, create, store, show, edit, update, destroy, deleted, permanentDestroy, restore }

export default EducationTypeController