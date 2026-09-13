import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenCategoryController::index
 * @see app/Http/Controllers/ContinuousImprovement/KaizenCategoryController.php:14
 * @route '/kaizen-category/search'
 */
const index41922480f74a9e274c28e624dfd33849 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: index41922480f74a9e274c28e624dfd33849.url(options),
    method: 'post',
})

index41922480f74a9e274c28e624dfd33849.definition = {
    methods: ["post"],
    url: '/kaizen-category/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenCategoryController::index
 * @see app/Http/Controllers/ContinuousImprovement/KaizenCategoryController.php:14
 * @route '/kaizen-category/search'
 */
index41922480f74a9e274c28e624dfd33849.url = (options?: RouteQueryOptions) => {
    return index41922480f74a9e274c28e624dfd33849.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenCategoryController::index
 * @see app/Http/Controllers/ContinuousImprovement/KaizenCategoryController.php:14
 * @route '/kaizen-category/search'
 */
index41922480f74a9e274c28e624dfd33849.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: index41922480f74a9e274c28e624dfd33849.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenCategoryController::index
 * @see app/Http/Controllers/ContinuousImprovement/KaizenCategoryController.php:14
 * @route '/kaizen-category/search'
 */
    const index41922480f74a9e274c28e624dfd33849Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: index41922480f74a9e274c28e624dfd33849.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenCategoryController::index
 * @see app/Http/Controllers/ContinuousImprovement/KaizenCategoryController.php:14
 * @route '/kaizen-category/search'
 */
        index41922480f74a9e274c28e624dfd33849Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: index41922480f74a9e274c28e624dfd33849.url(options),
            method: 'post',
        })
    
    index41922480f74a9e274c28e624dfd33849.form = index41922480f74a9e274c28e624dfd33849Form
    /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenCategoryController::index
 * @see app/Http/Controllers/ContinuousImprovement/KaizenCategoryController.php:14
 * @route '/kaizen-category'
 */
const index8410f04f293b946f210ca07e7e04ffa4 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index8410f04f293b946f210ca07e7e04ffa4.url(options),
    method: 'get',
})

index8410f04f293b946f210ca07e7e04ffa4.definition = {
    methods: ["get","head"],
    url: '/kaizen-category',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenCategoryController::index
 * @see app/Http/Controllers/ContinuousImprovement/KaizenCategoryController.php:14
 * @route '/kaizen-category'
 */
index8410f04f293b946f210ca07e7e04ffa4.url = (options?: RouteQueryOptions) => {
    return index8410f04f293b946f210ca07e7e04ffa4.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenCategoryController::index
 * @see app/Http/Controllers/ContinuousImprovement/KaizenCategoryController.php:14
 * @route '/kaizen-category'
 */
index8410f04f293b946f210ca07e7e04ffa4.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index8410f04f293b946f210ca07e7e04ffa4.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenCategoryController::index
 * @see app/Http/Controllers/ContinuousImprovement/KaizenCategoryController.php:14
 * @route '/kaizen-category'
 */
index8410f04f293b946f210ca07e7e04ffa4.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index8410f04f293b946f210ca07e7e04ffa4.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenCategoryController::index
 * @see app/Http/Controllers/ContinuousImprovement/KaizenCategoryController.php:14
 * @route '/kaizen-category'
 */
    const index8410f04f293b946f210ca07e7e04ffa4Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index8410f04f293b946f210ca07e7e04ffa4.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenCategoryController::index
 * @see app/Http/Controllers/ContinuousImprovement/KaizenCategoryController.php:14
 * @route '/kaizen-category'
 */
        index8410f04f293b946f210ca07e7e04ffa4Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index8410f04f293b946f210ca07e7e04ffa4.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenCategoryController::index
 * @see app/Http/Controllers/ContinuousImprovement/KaizenCategoryController.php:14
 * @route '/kaizen-category'
 */
        index8410f04f293b946f210ca07e7e04ffa4Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index8410f04f293b946f210ca07e7e04ffa4.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index8410f04f293b946f210ca07e7e04ffa4.form = index8410f04f293b946f210ca07e7e04ffa4Form

/**
* Multiple routes resolve to \App\Http\Controllers\ContinuousImprovement\KaizenCategoryController::index, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `index['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const index = {
    '/kaizen-category/search': index41922480f74a9e274c28e624dfd33849,
    '/kaizen-category': index8410f04f293b946f210ca07e7e04ffa4,
}

/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenCategoryController::create
 * @see app/Http/Controllers/ContinuousImprovement/KaizenCategoryController.php:26
 * @route '/kaizen-category/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/kaizen-category/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenCategoryController::create
 * @see app/Http/Controllers/ContinuousImprovement/KaizenCategoryController.php:26
 * @route '/kaizen-category/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenCategoryController::create
 * @see app/Http/Controllers/ContinuousImprovement/KaizenCategoryController.php:26
 * @route '/kaizen-category/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenCategoryController::create
 * @see app/Http/Controllers/ContinuousImprovement/KaizenCategoryController.php:26
 * @route '/kaizen-category/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenCategoryController::create
 * @see app/Http/Controllers/ContinuousImprovement/KaizenCategoryController.php:26
 * @route '/kaizen-category/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenCategoryController::create
 * @see app/Http/Controllers/ContinuousImprovement/KaizenCategoryController.php:26
 * @route '/kaizen-category/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenCategoryController::create
 * @see app/Http/Controllers/ContinuousImprovement/KaizenCategoryController.php:26
 * @route '/kaizen-category/create'
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
* @see \App\Http\Controllers\ContinuousImprovement\KaizenCategoryController::store
 * @see app/Http/Controllers/ContinuousImprovement/KaizenCategoryController.php:31
 * @route '/kaizen-category'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/kaizen-category',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenCategoryController::store
 * @see app/Http/Controllers/ContinuousImprovement/KaizenCategoryController.php:31
 * @route '/kaizen-category'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenCategoryController::store
 * @see app/Http/Controllers/ContinuousImprovement/KaizenCategoryController.php:31
 * @route '/kaizen-category'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenCategoryController::store
 * @see app/Http/Controllers/ContinuousImprovement/KaizenCategoryController.php:31
 * @route '/kaizen-category'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenCategoryController::store
 * @see app/Http/Controllers/ContinuousImprovement/KaizenCategoryController.php:31
 * @route '/kaizen-category'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenCategoryController::show
 * @see app/Http/Controllers/ContinuousImprovement/KaizenCategoryController.php:44
 * @route '/kaizen-category/{kaizen_category}'
 */
export const show = (args: { kaizen_category: number | { id: number } } | [kaizen_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/kaizen-category/{kaizen_category}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenCategoryController::show
 * @see app/Http/Controllers/ContinuousImprovement/KaizenCategoryController.php:44
 * @route '/kaizen-category/{kaizen_category}'
 */
show.url = (args: { kaizen_category: number | { id: number } } | [kaizen_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { kaizen_category: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { kaizen_category: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    kaizen_category: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        kaizen_category: typeof args.kaizen_category === 'object'
                ? args.kaizen_category.id
                : args.kaizen_category,
                }

    return show.definition.url
            .replace('{kaizen_category}', parsedArgs.kaizen_category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenCategoryController::show
 * @see app/Http/Controllers/ContinuousImprovement/KaizenCategoryController.php:44
 * @route '/kaizen-category/{kaizen_category}'
 */
show.get = (args: { kaizen_category: number | { id: number } } | [kaizen_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenCategoryController::show
 * @see app/Http/Controllers/ContinuousImprovement/KaizenCategoryController.php:44
 * @route '/kaizen-category/{kaizen_category}'
 */
show.head = (args: { kaizen_category: number | { id: number } } | [kaizen_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenCategoryController::show
 * @see app/Http/Controllers/ContinuousImprovement/KaizenCategoryController.php:44
 * @route '/kaizen-category/{kaizen_category}'
 */
    const showForm = (args: { kaizen_category: number | { id: number } } | [kaizen_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenCategoryController::show
 * @see app/Http/Controllers/ContinuousImprovement/KaizenCategoryController.php:44
 * @route '/kaizen-category/{kaizen_category}'
 */
        showForm.get = (args: { kaizen_category: number | { id: number } } | [kaizen_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenCategoryController::show
 * @see app/Http/Controllers/ContinuousImprovement/KaizenCategoryController.php:44
 * @route '/kaizen-category/{kaizen_category}'
 */
        showForm.head = (args: { kaizen_category: number | { id: number } } | [kaizen_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\ContinuousImprovement\KaizenCategoryController::edit
 * @see app/Http/Controllers/ContinuousImprovement/KaizenCategoryController.php:49
 * @route '/kaizen-category/{kaizen_category}/edit'
 */
export const edit = (args: { kaizen_category: number | { id: number } } | [kaizen_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/kaizen-category/{kaizen_category}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenCategoryController::edit
 * @see app/Http/Controllers/ContinuousImprovement/KaizenCategoryController.php:49
 * @route '/kaizen-category/{kaizen_category}/edit'
 */
edit.url = (args: { kaizen_category: number | { id: number } } | [kaizen_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { kaizen_category: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { kaizen_category: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    kaizen_category: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        kaizen_category: typeof args.kaizen_category === 'object'
                ? args.kaizen_category.id
                : args.kaizen_category,
                }

    return edit.definition.url
            .replace('{kaizen_category}', parsedArgs.kaizen_category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenCategoryController::edit
 * @see app/Http/Controllers/ContinuousImprovement/KaizenCategoryController.php:49
 * @route '/kaizen-category/{kaizen_category}/edit'
 */
edit.get = (args: { kaizen_category: number | { id: number } } | [kaizen_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenCategoryController::edit
 * @see app/Http/Controllers/ContinuousImprovement/KaizenCategoryController.php:49
 * @route '/kaizen-category/{kaizen_category}/edit'
 */
edit.head = (args: { kaizen_category: number | { id: number } } | [kaizen_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenCategoryController::edit
 * @see app/Http/Controllers/ContinuousImprovement/KaizenCategoryController.php:49
 * @route '/kaizen-category/{kaizen_category}/edit'
 */
    const editForm = (args: { kaizen_category: number | { id: number } } | [kaizen_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenCategoryController::edit
 * @see app/Http/Controllers/ContinuousImprovement/KaizenCategoryController.php:49
 * @route '/kaizen-category/{kaizen_category}/edit'
 */
        editForm.get = (args: { kaizen_category: number | { id: number } } | [kaizen_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenCategoryController::edit
 * @see app/Http/Controllers/ContinuousImprovement/KaizenCategoryController.php:49
 * @route '/kaizen-category/{kaizen_category}/edit'
 */
        editForm.head = (args: { kaizen_category: number | { id: number } } | [kaizen_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\ContinuousImprovement\KaizenCategoryController::update
 * @see app/Http/Controllers/ContinuousImprovement/KaizenCategoryController.php:54
 * @route '/kaizen-category/{kaizen_category}'
 */
export const update = (args: { kaizen_category: number | { id: number } } | [kaizen_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/kaizen-category/{kaizen_category}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenCategoryController::update
 * @see app/Http/Controllers/ContinuousImprovement/KaizenCategoryController.php:54
 * @route '/kaizen-category/{kaizen_category}'
 */
update.url = (args: { kaizen_category: number | { id: number } } | [kaizen_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { kaizen_category: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { kaizen_category: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    kaizen_category: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        kaizen_category: typeof args.kaizen_category === 'object'
                ? args.kaizen_category.id
                : args.kaizen_category,
                }

    return update.definition.url
            .replace('{kaizen_category}', parsedArgs.kaizen_category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenCategoryController::update
 * @see app/Http/Controllers/ContinuousImprovement/KaizenCategoryController.php:54
 * @route '/kaizen-category/{kaizen_category}'
 */
update.put = (args: { kaizen_category: number | { id: number } } | [kaizen_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenCategoryController::update
 * @see app/Http/Controllers/ContinuousImprovement/KaizenCategoryController.php:54
 * @route '/kaizen-category/{kaizen_category}'
 */
update.patch = (args: { kaizen_category: number | { id: number } } | [kaizen_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenCategoryController::update
 * @see app/Http/Controllers/ContinuousImprovement/KaizenCategoryController.php:54
 * @route '/kaizen-category/{kaizen_category}'
 */
    const updateForm = (args: { kaizen_category: number | { id: number } } | [kaizen_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenCategoryController::update
 * @see app/Http/Controllers/ContinuousImprovement/KaizenCategoryController.php:54
 * @route '/kaizen-category/{kaizen_category}'
 */
        updateForm.put = (args: { kaizen_category: number | { id: number } } | [kaizen_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenCategoryController::update
 * @see app/Http/Controllers/ContinuousImprovement/KaizenCategoryController.php:54
 * @route '/kaizen-category/{kaizen_category}'
 */
        updateForm.patch = (args: { kaizen_category: number | { id: number } } | [kaizen_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\ContinuousImprovement\KaizenCategoryController::destroy
 * @see app/Http/Controllers/ContinuousImprovement/KaizenCategoryController.php:63
 * @route '/kaizen-category/{kaizen_category}'
 */
export const destroy = (args: { kaizen_category: number | { id: number } } | [kaizen_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/kaizen-category/{kaizen_category}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenCategoryController::destroy
 * @see app/Http/Controllers/ContinuousImprovement/KaizenCategoryController.php:63
 * @route '/kaizen-category/{kaizen_category}'
 */
destroy.url = (args: { kaizen_category: number | { id: number } } | [kaizen_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { kaizen_category: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { kaizen_category: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    kaizen_category: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        kaizen_category: typeof args.kaizen_category === 'object'
                ? args.kaizen_category.id
                : args.kaizen_category,
                }

    return destroy.definition.url
            .replace('{kaizen_category}', parsedArgs.kaizen_category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenCategoryController::destroy
 * @see app/Http/Controllers/ContinuousImprovement/KaizenCategoryController.php:63
 * @route '/kaizen-category/{kaizen_category}'
 */
destroy.delete = (args: { kaizen_category: number | { id: number } } | [kaizen_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenCategoryController::destroy
 * @see app/Http/Controllers/ContinuousImprovement/KaizenCategoryController.php:63
 * @route '/kaizen-category/{kaizen_category}'
 */
    const destroyForm = (args: { kaizen_category: number | { id: number } } | [kaizen_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenCategoryController::destroy
 * @see app/Http/Controllers/ContinuousImprovement/KaizenCategoryController.php:63
 * @route '/kaizen-category/{kaizen_category}'
 */
        destroyForm.delete = (args: { kaizen_category: number | { id: number } } | [kaizen_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const KaizenCategoryController = { index, create, store, show, edit, update, destroy }

export default KaizenCategoryController