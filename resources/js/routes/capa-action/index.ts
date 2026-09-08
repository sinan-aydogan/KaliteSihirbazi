import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\CapaActionController::store
 * @see app/Http/Controllers/CapaActionController.php:18
 * @route '/capa/{capa}/actions'
 */
export const store = (args: { capa: number | { id: number } } | [capa: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/capa/{capa}/actions',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CapaActionController::store
 * @see app/Http/Controllers/CapaActionController.php:18
 * @route '/capa/{capa}/actions'
 */
store.url = (args: { capa: number | { id: number } } | [capa: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { capa: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { capa: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    capa: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        capa: typeof args.capa === 'object'
                ? args.capa.id
                : args.capa,
                }

    return store.definition.url
            .replace('{capa}', parsedArgs.capa.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CapaActionController::store
 * @see app/Http/Controllers/CapaActionController.php:18
 * @route '/capa/{capa}/actions'
 */
store.post = (args: { capa: number | { id: number } } | [capa: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CapaActionController::store
 * @see app/Http/Controllers/CapaActionController.php:18
 * @route '/capa/{capa}/actions'
 */
    const storeForm = (args: { capa: number | { id: number } } | [capa: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CapaActionController::store
 * @see app/Http/Controllers/CapaActionController.php:18
 * @route '/capa/{capa}/actions'
 */
        storeForm.post = (args: { capa: number | { id: number } } | [capa: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(args, options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\CapaActionController::update
 * @see app/Http/Controllers/CapaActionController.php:27
 * @route '/capa-action/{capaAction}'
 */
export const update = (args: { capaAction: number | { id: number } } | [capaAction: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/capa-action/{capaAction}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\CapaActionController::update
 * @see app/Http/Controllers/CapaActionController.php:27
 * @route '/capa-action/{capaAction}'
 */
update.url = (args: { capaAction: number | { id: number } } | [capaAction: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { capaAction: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { capaAction: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    capaAction: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        capaAction: typeof args.capaAction === 'object'
                ? args.capaAction.id
                : args.capaAction,
                }

    return update.definition.url
            .replace('{capaAction}', parsedArgs.capaAction.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CapaActionController::update
 * @see app/Http/Controllers/CapaActionController.php:27
 * @route '/capa-action/{capaAction}'
 */
update.put = (args: { capaAction: number | { id: number } } | [capaAction: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\CapaActionController::update
 * @see app/Http/Controllers/CapaActionController.php:27
 * @route '/capa-action/{capaAction}'
 */
    const updateForm = (args: { capaAction: number | { id: number } } | [capaAction: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CapaActionController::update
 * @see app/Http/Controllers/CapaActionController.php:27
 * @route '/capa-action/{capaAction}'
 */
        updateForm.put = (args: { capaAction: number | { id: number } } | [capaAction: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\CapaActionController::destroy
 * @see app/Http/Controllers/CapaActionController.php:36
 * @route '/capa-action/{capaAction}'
 */
export const destroy = (args: { capaAction: number | { id: number } } | [capaAction: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/capa-action/{capaAction}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\CapaActionController::destroy
 * @see app/Http/Controllers/CapaActionController.php:36
 * @route '/capa-action/{capaAction}'
 */
destroy.url = (args: { capaAction: number | { id: number } } | [capaAction: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { capaAction: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { capaAction: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    capaAction: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        capaAction: typeof args.capaAction === 'object'
                ? args.capaAction.id
                : args.capaAction,
                }

    return destroy.definition.url
            .replace('{capaAction}', parsedArgs.capaAction.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CapaActionController::destroy
 * @see app/Http/Controllers/CapaActionController.php:36
 * @route '/capa-action/{capaAction}'
 */
destroy.delete = (args: { capaAction: number | { id: number } } | [capaAction: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\CapaActionController::destroy
 * @see app/Http/Controllers/CapaActionController.php:36
 * @route '/capa-action/{capaAction}'
 */
    const destroyForm = (args: { capaAction: number | { id: number } } | [capaAction: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CapaActionController::destroy
 * @see app/Http/Controllers/CapaActionController.php:36
 * @route '/capa-action/{capaAction}'
 */
        destroyForm.delete = (args: { capaAction: number | { id: number } } | [capaAction: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\CapaActionController::start
 * @see app/Http/Controllers/CapaActionController.php:45
 * @route '/capa-action/{capaAction}/start'
 */
export const start = (args: { capaAction: number | { id: number } } | [capaAction: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: start.url(args, options),
    method: 'post',
})

start.definition = {
    methods: ["post"],
    url: '/capa-action/{capaAction}/start',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CapaActionController::start
 * @see app/Http/Controllers/CapaActionController.php:45
 * @route '/capa-action/{capaAction}/start'
 */
start.url = (args: { capaAction: number | { id: number } } | [capaAction: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { capaAction: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { capaAction: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    capaAction: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        capaAction: typeof args.capaAction === 'object'
                ? args.capaAction.id
                : args.capaAction,
                }

    return start.definition.url
            .replace('{capaAction}', parsedArgs.capaAction.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CapaActionController::start
 * @see app/Http/Controllers/CapaActionController.php:45
 * @route '/capa-action/{capaAction}/start'
 */
start.post = (args: { capaAction: number | { id: number } } | [capaAction: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: start.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CapaActionController::start
 * @see app/Http/Controllers/CapaActionController.php:45
 * @route '/capa-action/{capaAction}/start'
 */
    const startForm = (args: { capaAction: number | { id: number } } | [capaAction: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: start.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CapaActionController::start
 * @see app/Http/Controllers/CapaActionController.php:45
 * @route '/capa-action/{capaAction}/start'
 */
        startForm.post = (args: { capaAction: number | { id: number } } | [capaAction: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: start.url(args, options),
            method: 'post',
        })
    
    start.form = startForm
/**
* @see \App\Http\Controllers\CapaActionController::complete
 * @see app/Http/Controllers/CapaActionController.php:53
 * @route '/capa-action/{capaAction}/complete'
 */
export const complete = (args: { capaAction: number | { id: number } } | [capaAction: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: complete.url(args, options),
    method: 'post',
})

complete.definition = {
    methods: ["post"],
    url: '/capa-action/{capaAction}/complete',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CapaActionController::complete
 * @see app/Http/Controllers/CapaActionController.php:53
 * @route '/capa-action/{capaAction}/complete'
 */
complete.url = (args: { capaAction: number | { id: number } } | [capaAction: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { capaAction: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { capaAction: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    capaAction: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        capaAction: typeof args.capaAction === 'object'
                ? args.capaAction.id
                : args.capaAction,
                }

    return complete.definition.url
            .replace('{capaAction}', parsedArgs.capaAction.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CapaActionController::complete
 * @see app/Http/Controllers/CapaActionController.php:53
 * @route '/capa-action/{capaAction}/complete'
 */
complete.post = (args: { capaAction: number | { id: number } } | [capaAction: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: complete.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CapaActionController::complete
 * @see app/Http/Controllers/CapaActionController.php:53
 * @route '/capa-action/{capaAction}/complete'
 */
    const completeForm = (args: { capaAction: number | { id: number } } | [capaAction: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: complete.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CapaActionController::complete
 * @see app/Http/Controllers/CapaActionController.php:53
 * @route '/capa-action/{capaAction}/complete'
 */
        completeForm.post = (args: { capaAction: number | { id: number } } | [capaAction: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: complete.url(args, options),
            method: 'post',
        })
    
    complete.form = completeForm
const capaAction = {
    store: Object.assign(store, store),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
start: Object.assign(start, start),
complete: Object.assign(complete, complete),
}

export default capaAction