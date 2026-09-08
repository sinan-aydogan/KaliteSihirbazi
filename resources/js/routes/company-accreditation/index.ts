import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\CompanyAccreditationController::index
 * @see app/Http/Controllers/CompanyAccreditationController.php:16
 * @route '/standard/{standard}/accreditations'
 */
export const index = (args: { standard: number | { id: number } } | [standard: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/standard/{standard}/accreditations',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CompanyAccreditationController::index
 * @see app/Http/Controllers/CompanyAccreditationController.php:16
 * @route '/standard/{standard}/accreditations'
 */
index.url = (args: { standard: number | { id: number } } | [standard: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { standard: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { standard: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    standard: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        standard: typeof args.standard === 'object'
                ? args.standard.id
                : args.standard,
                }

    return index.definition.url
            .replace('{standard}', parsedArgs.standard.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CompanyAccreditationController::index
 * @see app/Http/Controllers/CompanyAccreditationController.php:16
 * @route '/standard/{standard}/accreditations'
 */
index.get = (args: { standard: number | { id: number } } | [standard: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CompanyAccreditationController::index
 * @see app/Http/Controllers/CompanyAccreditationController.php:16
 * @route '/standard/{standard}/accreditations'
 */
index.head = (args: { standard: number | { id: number } } | [standard: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CompanyAccreditationController::index
 * @see app/Http/Controllers/CompanyAccreditationController.php:16
 * @route '/standard/{standard}/accreditations'
 */
    const indexForm = (args: { standard: number | { id: number } } | [standard: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CompanyAccreditationController::index
 * @see app/Http/Controllers/CompanyAccreditationController.php:16
 * @route '/standard/{standard}/accreditations'
 */
        indexForm.get = (args: { standard: number | { id: number } } | [standard: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CompanyAccreditationController::index
 * @see app/Http/Controllers/CompanyAccreditationController.php:16
 * @route '/standard/{standard}/accreditations'
 */
        indexForm.head = (args: { standard: number | { id: number } } | [standard: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\CompanyAccreditationController::store
 * @see app/Http/Controllers/CompanyAccreditationController.php:32
 * @route '/standard/{standard}/accreditations'
 */
export const store = (args: { standard: number | { id: number } } | [standard: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/standard/{standard}/accreditations',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CompanyAccreditationController::store
 * @see app/Http/Controllers/CompanyAccreditationController.php:32
 * @route '/standard/{standard}/accreditations'
 */
store.url = (args: { standard: number | { id: number } } | [standard: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { standard: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { standard: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    standard: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        standard: typeof args.standard === 'object'
                ? args.standard.id
                : args.standard,
                }

    return store.definition.url
            .replace('{standard}', parsedArgs.standard.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CompanyAccreditationController::store
 * @see app/Http/Controllers/CompanyAccreditationController.php:32
 * @route '/standard/{standard}/accreditations'
 */
store.post = (args: { standard: number | { id: number } } | [standard: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CompanyAccreditationController::store
 * @see app/Http/Controllers/CompanyAccreditationController.php:32
 * @route '/standard/{standard}/accreditations'
 */
    const storeForm = (args: { standard: number | { id: number } } | [standard: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CompanyAccreditationController::store
 * @see app/Http/Controllers/CompanyAccreditationController.php:32
 * @route '/standard/{standard}/accreditations'
 */
        storeForm.post = (args: { standard: number | { id: number } } | [standard: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(args, options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\CompanyAccreditationController::update
 * @see app/Http/Controllers/CompanyAccreditationController.php:45
 * @route '/company-accreditation/{companyAccreditation}'
 */
export const update = (args: { companyAccreditation: number | { id: number } } | [companyAccreditation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/company-accreditation/{companyAccreditation}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\CompanyAccreditationController::update
 * @see app/Http/Controllers/CompanyAccreditationController.php:45
 * @route '/company-accreditation/{companyAccreditation}'
 */
update.url = (args: { companyAccreditation: number | { id: number } } | [companyAccreditation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { companyAccreditation: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { companyAccreditation: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    companyAccreditation: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        companyAccreditation: typeof args.companyAccreditation === 'object'
                ? args.companyAccreditation.id
                : args.companyAccreditation,
                }

    return update.definition.url
            .replace('{companyAccreditation}', parsedArgs.companyAccreditation.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CompanyAccreditationController::update
 * @see app/Http/Controllers/CompanyAccreditationController.php:45
 * @route '/company-accreditation/{companyAccreditation}'
 */
update.put = (args: { companyAccreditation: number | { id: number } } | [companyAccreditation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\CompanyAccreditationController::update
 * @see app/Http/Controllers/CompanyAccreditationController.php:45
 * @route '/company-accreditation/{companyAccreditation}'
 */
    const updateForm = (args: { companyAccreditation: number | { id: number } } | [companyAccreditation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CompanyAccreditationController::update
 * @see app/Http/Controllers/CompanyAccreditationController.php:45
 * @route '/company-accreditation/{companyAccreditation}'
 */
        updateForm.put = (args: { companyAccreditation: number | { id: number } } | [companyAccreditation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\CompanyAccreditationController::destroy
 * @see app/Http/Controllers/CompanyAccreditationController.php:58
 * @route '/company-accreditation/{companyAccreditation}'
 */
export const destroy = (args: { companyAccreditation: number | { id: number } } | [companyAccreditation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/company-accreditation/{companyAccreditation}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\CompanyAccreditationController::destroy
 * @see app/Http/Controllers/CompanyAccreditationController.php:58
 * @route '/company-accreditation/{companyAccreditation}'
 */
destroy.url = (args: { companyAccreditation: number | { id: number } } | [companyAccreditation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { companyAccreditation: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { companyAccreditation: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    companyAccreditation: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        companyAccreditation: typeof args.companyAccreditation === 'object'
                ? args.companyAccreditation.id
                : args.companyAccreditation,
                }

    return destroy.definition.url
            .replace('{companyAccreditation}', parsedArgs.companyAccreditation.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CompanyAccreditationController::destroy
 * @see app/Http/Controllers/CompanyAccreditationController.php:58
 * @route '/company-accreditation/{companyAccreditation}'
 */
destroy.delete = (args: { companyAccreditation: number | { id: number } } | [companyAccreditation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\CompanyAccreditationController::destroy
 * @see app/Http/Controllers/CompanyAccreditationController.php:58
 * @route '/company-accreditation/{companyAccreditation}'
 */
    const destroyForm = (args: { companyAccreditation: number | { id: number } } | [companyAccreditation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CompanyAccreditationController::destroy
 * @see app/Http/Controllers/CompanyAccreditationController.php:58
 * @route '/company-accreditation/{companyAccreditation}'
 */
        destroyForm.delete = (args: { companyAccreditation: number | { id: number } } | [companyAccreditation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const companyAccreditation = {
    index: Object.assign(index, index),
store: Object.assign(store, store),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default companyAccreditation