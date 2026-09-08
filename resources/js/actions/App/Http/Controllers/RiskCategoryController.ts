import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\RiskCategoryController::index
 * @see app/Http/Controllers/RiskCategoryController.php:13
 * @route '/risk-category/search'
 */
const index02b1f8a0db70e789825cf311473bffed = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: index02b1f8a0db70e789825cf311473bffed.url(options),
    method: 'post',
})

index02b1f8a0db70e789825cf311473bffed.definition = {
    methods: ["post"],
    url: '/risk-category/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\RiskCategoryController::index
 * @see app/Http/Controllers/RiskCategoryController.php:13
 * @route '/risk-category/search'
 */
index02b1f8a0db70e789825cf311473bffed.url = (options?: RouteQueryOptions) => {
    return index02b1f8a0db70e789825cf311473bffed.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\RiskCategoryController::index
 * @see app/Http/Controllers/RiskCategoryController.php:13
 * @route '/risk-category/search'
 */
index02b1f8a0db70e789825cf311473bffed.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: index02b1f8a0db70e789825cf311473bffed.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\RiskCategoryController::index
 * @see app/Http/Controllers/RiskCategoryController.php:13
 * @route '/risk-category/search'
 */
    const index02b1f8a0db70e789825cf311473bffedForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: index02b1f8a0db70e789825cf311473bffed.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\RiskCategoryController::index
 * @see app/Http/Controllers/RiskCategoryController.php:13
 * @route '/risk-category/search'
 */
        index02b1f8a0db70e789825cf311473bffedForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: index02b1f8a0db70e789825cf311473bffed.url(options),
            method: 'post',
        })
    
    index02b1f8a0db70e789825cf311473bffed.form = index02b1f8a0db70e789825cf311473bffedForm
    /**
* @see \App\Http\Controllers\RiskCategoryController::index
 * @see app/Http/Controllers/RiskCategoryController.php:13
 * @route '/risk-category'
 */
const index9bf280d1d120db426228307407137ed7 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index9bf280d1d120db426228307407137ed7.url(options),
    method: 'get',
})

index9bf280d1d120db426228307407137ed7.definition = {
    methods: ["get","head"],
    url: '/risk-category',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\RiskCategoryController::index
 * @see app/Http/Controllers/RiskCategoryController.php:13
 * @route '/risk-category'
 */
index9bf280d1d120db426228307407137ed7.url = (options?: RouteQueryOptions) => {
    return index9bf280d1d120db426228307407137ed7.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\RiskCategoryController::index
 * @see app/Http/Controllers/RiskCategoryController.php:13
 * @route '/risk-category'
 */
index9bf280d1d120db426228307407137ed7.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index9bf280d1d120db426228307407137ed7.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\RiskCategoryController::index
 * @see app/Http/Controllers/RiskCategoryController.php:13
 * @route '/risk-category'
 */
index9bf280d1d120db426228307407137ed7.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index9bf280d1d120db426228307407137ed7.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\RiskCategoryController::index
 * @see app/Http/Controllers/RiskCategoryController.php:13
 * @route '/risk-category'
 */
    const index9bf280d1d120db426228307407137ed7Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index9bf280d1d120db426228307407137ed7.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\RiskCategoryController::index
 * @see app/Http/Controllers/RiskCategoryController.php:13
 * @route '/risk-category'
 */
        index9bf280d1d120db426228307407137ed7Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index9bf280d1d120db426228307407137ed7.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\RiskCategoryController::index
 * @see app/Http/Controllers/RiskCategoryController.php:13
 * @route '/risk-category'
 */
        index9bf280d1d120db426228307407137ed7Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index9bf280d1d120db426228307407137ed7.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index9bf280d1d120db426228307407137ed7.form = index9bf280d1d120db426228307407137ed7Form

/**
* Multiple routes resolve to \App\Http\Controllers\RiskCategoryController::index, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `index['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const index = {
    '/risk-category/search': index02b1f8a0db70e789825cf311473bffed,
    '/risk-category': index9bf280d1d120db426228307407137ed7,
}

/**
* @see \App\Http\Controllers\RiskCategoryController::create
 * @see app/Http/Controllers/RiskCategoryController.php:25
 * @route '/risk-category/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/risk-category/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\RiskCategoryController::create
 * @see app/Http/Controllers/RiskCategoryController.php:25
 * @route '/risk-category/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\RiskCategoryController::create
 * @see app/Http/Controllers/RiskCategoryController.php:25
 * @route '/risk-category/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\RiskCategoryController::create
 * @see app/Http/Controllers/RiskCategoryController.php:25
 * @route '/risk-category/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\RiskCategoryController::create
 * @see app/Http/Controllers/RiskCategoryController.php:25
 * @route '/risk-category/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\RiskCategoryController::create
 * @see app/Http/Controllers/RiskCategoryController.php:25
 * @route '/risk-category/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\RiskCategoryController::create
 * @see app/Http/Controllers/RiskCategoryController.php:25
 * @route '/risk-category/create'
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
* @see \App\Http\Controllers\RiskCategoryController::store
 * @see app/Http/Controllers/RiskCategoryController.php:30
 * @route '/risk-category'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/risk-category',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\RiskCategoryController::store
 * @see app/Http/Controllers/RiskCategoryController.php:30
 * @route '/risk-category'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\RiskCategoryController::store
 * @see app/Http/Controllers/RiskCategoryController.php:30
 * @route '/risk-category'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\RiskCategoryController::store
 * @see app/Http/Controllers/RiskCategoryController.php:30
 * @route '/risk-category'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\RiskCategoryController::store
 * @see app/Http/Controllers/RiskCategoryController.php:30
 * @route '/risk-category'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\RiskCategoryController::show
 * @see app/Http/Controllers/RiskCategoryController.php:43
 * @route '/risk-category/{risk_category}'
 */
export const show = (args: { risk_category: number | { id: number } } | [risk_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/risk-category/{risk_category}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\RiskCategoryController::show
 * @see app/Http/Controllers/RiskCategoryController.php:43
 * @route '/risk-category/{risk_category}'
 */
show.url = (args: { risk_category: number | { id: number } } | [risk_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { risk_category: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { risk_category: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    risk_category: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        risk_category: typeof args.risk_category === 'object'
                ? args.risk_category.id
                : args.risk_category,
                }

    return show.definition.url
            .replace('{risk_category}', parsedArgs.risk_category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\RiskCategoryController::show
 * @see app/Http/Controllers/RiskCategoryController.php:43
 * @route '/risk-category/{risk_category}'
 */
show.get = (args: { risk_category: number | { id: number } } | [risk_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\RiskCategoryController::show
 * @see app/Http/Controllers/RiskCategoryController.php:43
 * @route '/risk-category/{risk_category}'
 */
show.head = (args: { risk_category: number | { id: number } } | [risk_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\RiskCategoryController::show
 * @see app/Http/Controllers/RiskCategoryController.php:43
 * @route '/risk-category/{risk_category}'
 */
    const showForm = (args: { risk_category: number | { id: number } } | [risk_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\RiskCategoryController::show
 * @see app/Http/Controllers/RiskCategoryController.php:43
 * @route '/risk-category/{risk_category}'
 */
        showForm.get = (args: { risk_category: number | { id: number } } | [risk_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\RiskCategoryController::show
 * @see app/Http/Controllers/RiskCategoryController.php:43
 * @route '/risk-category/{risk_category}'
 */
        showForm.head = (args: { risk_category: number | { id: number } } | [risk_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\RiskCategoryController::edit
 * @see app/Http/Controllers/RiskCategoryController.php:48
 * @route '/risk-category/{risk_category}/edit'
 */
export const edit = (args: { risk_category: number | { id: number } } | [risk_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/risk-category/{risk_category}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\RiskCategoryController::edit
 * @see app/Http/Controllers/RiskCategoryController.php:48
 * @route '/risk-category/{risk_category}/edit'
 */
edit.url = (args: { risk_category: number | { id: number } } | [risk_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { risk_category: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { risk_category: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    risk_category: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        risk_category: typeof args.risk_category === 'object'
                ? args.risk_category.id
                : args.risk_category,
                }

    return edit.definition.url
            .replace('{risk_category}', parsedArgs.risk_category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\RiskCategoryController::edit
 * @see app/Http/Controllers/RiskCategoryController.php:48
 * @route '/risk-category/{risk_category}/edit'
 */
edit.get = (args: { risk_category: number | { id: number } } | [risk_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\RiskCategoryController::edit
 * @see app/Http/Controllers/RiskCategoryController.php:48
 * @route '/risk-category/{risk_category}/edit'
 */
edit.head = (args: { risk_category: number | { id: number } } | [risk_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\RiskCategoryController::edit
 * @see app/Http/Controllers/RiskCategoryController.php:48
 * @route '/risk-category/{risk_category}/edit'
 */
    const editForm = (args: { risk_category: number | { id: number } } | [risk_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\RiskCategoryController::edit
 * @see app/Http/Controllers/RiskCategoryController.php:48
 * @route '/risk-category/{risk_category}/edit'
 */
        editForm.get = (args: { risk_category: number | { id: number } } | [risk_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\RiskCategoryController::edit
 * @see app/Http/Controllers/RiskCategoryController.php:48
 * @route '/risk-category/{risk_category}/edit'
 */
        editForm.head = (args: { risk_category: number | { id: number } } | [risk_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\RiskCategoryController::update
 * @see app/Http/Controllers/RiskCategoryController.php:53
 * @route '/risk-category/{risk_category}'
 */
export const update = (args: { risk_category: number | { id: number } } | [risk_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/risk-category/{risk_category}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\RiskCategoryController::update
 * @see app/Http/Controllers/RiskCategoryController.php:53
 * @route '/risk-category/{risk_category}'
 */
update.url = (args: { risk_category: number | { id: number } } | [risk_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { risk_category: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { risk_category: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    risk_category: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        risk_category: typeof args.risk_category === 'object'
                ? args.risk_category.id
                : args.risk_category,
                }

    return update.definition.url
            .replace('{risk_category}', parsedArgs.risk_category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\RiskCategoryController::update
 * @see app/Http/Controllers/RiskCategoryController.php:53
 * @route '/risk-category/{risk_category}'
 */
update.put = (args: { risk_category: number | { id: number } } | [risk_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\RiskCategoryController::update
 * @see app/Http/Controllers/RiskCategoryController.php:53
 * @route '/risk-category/{risk_category}'
 */
update.patch = (args: { risk_category: number | { id: number } } | [risk_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\RiskCategoryController::update
 * @see app/Http/Controllers/RiskCategoryController.php:53
 * @route '/risk-category/{risk_category}'
 */
    const updateForm = (args: { risk_category: number | { id: number } } | [risk_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\RiskCategoryController::update
 * @see app/Http/Controllers/RiskCategoryController.php:53
 * @route '/risk-category/{risk_category}'
 */
        updateForm.put = (args: { risk_category: number | { id: number } } | [risk_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\RiskCategoryController::update
 * @see app/Http/Controllers/RiskCategoryController.php:53
 * @route '/risk-category/{risk_category}'
 */
        updateForm.patch = (args: { risk_category: number | { id: number } } | [risk_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\RiskCategoryController::destroy
 * @see app/Http/Controllers/RiskCategoryController.php:62
 * @route '/risk-category/{risk_category}'
 */
export const destroy = (args: { risk_category: number | { id: number } } | [risk_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/risk-category/{risk_category}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\RiskCategoryController::destroy
 * @see app/Http/Controllers/RiskCategoryController.php:62
 * @route '/risk-category/{risk_category}'
 */
destroy.url = (args: { risk_category: number | { id: number } } | [risk_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { risk_category: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { risk_category: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    risk_category: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        risk_category: typeof args.risk_category === 'object'
                ? args.risk_category.id
                : args.risk_category,
                }

    return destroy.definition.url
            .replace('{risk_category}', parsedArgs.risk_category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\RiskCategoryController::destroy
 * @see app/Http/Controllers/RiskCategoryController.php:62
 * @route '/risk-category/{risk_category}'
 */
destroy.delete = (args: { risk_category: number | { id: number } } | [risk_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\RiskCategoryController::destroy
 * @see app/Http/Controllers/RiskCategoryController.php:62
 * @route '/risk-category/{risk_category}'
 */
    const destroyForm = (args: { risk_category: number | { id: number } } | [risk_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\RiskCategoryController::destroy
 * @see app/Http/Controllers/RiskCategoryController.php:62
 * @route '/risk-category/{risk_category}'
 */
        destroyForm.delete = (args: { risk_category: number | { id: number } } | [risk_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const RiskCategoryController = { index, create, store, show, edit, update, destroy }

export default RiskCategoryController