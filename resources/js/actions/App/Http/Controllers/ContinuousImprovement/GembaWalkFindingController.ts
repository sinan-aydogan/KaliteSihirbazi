import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\ContinuousImprovement\GembaWalkFindingController::store
 * @see app/Http/Controllers/ContinuousImprovement/GembaWalkFindingController.php:19
 * @route '/gemba-walk/{gembaWalk}/findings'
 */
export const store = (args: { gembaWalk: number | { id: number } } | [gembaWalk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/gemba-walk/{gembaWalk}/findings',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ContinuousImprovement\GembaWalkFindingController::store
 * @see app/Http/Controllers/ContinuousImprovement/GembaWalkFindingController.php:19
 * @route '/gemba-walk/{gembaWalk}/findings'
 */
store.url = (args: { gembaWalk: number | { id: number } } | [gembaWalk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { gembaWalk: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { gembaWalk: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    gembaWalk: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        gembaWalk: typeof args.gembaWalk === 'object'
                ? args.gembaWalk.id
                : args.gembaWalk,
                }

    return store.definition.url
            .replace('{gembaWalk}', parsedArgs.gembaWalk.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContinuousImprovement\GembaWalkFindingController::store
 * @see app/Http/Controllers/ContinuousImprovement/GembaWalkFindingController.php:19
 * @route '/gemba-walk/{gembaWalk}/findings'
 */
store.post = (args: { gembaWalk: number | { id: number } } | [gembaWalk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ContinuousImprovement\GembaWalkFindingController::store
 * @see app/Http/Controllers/ContinuousImprovement/GembaWalkFindingController.php:19
 * @route '/gemba-walk/{gembaWalk}/findings'
 */
    const storeForm = (args: { gembaWalk: number | { id: number } } | [gembaWalk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ContinuousImprovement\GembaWalkFindingController::store
 * @see app/Http/Controllers/ContinuousImprovement/GembaWalkFindingController.php:19
 * @route '/gemba-walk/{gembaWalk}/findings'
 */
        storeForm.post = (args: { gembaWalk: number | { id: number } } | [gembaWalk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(args, options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\ContinuousImprovement\GembaWalkFindingController::update
 * @see app/Http/Controllers/ContinuousImprovement/GembaWalkFindingController.php:28
 * @route '/gemba-walk-finding/{gembaWalkFinding}'
 */
export const update = (args: { gembaWalkFinding: number | { id: number } } | [gembaWalkFinding: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/gemba-walk-finding/{gembaWalkFinding}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\ContinuousImprovement\GembaWalkFindingController::update
 * @see app/Http/Controllers/ContinuousImprovement/GembaWalkFindingController.php:28
 * @route '/gemba-walk-finding/{gembaWalkFinding}'
 */
update.url = (args: { gembaWalkFinding: number | { id: number } } | [gembaWalkFinding: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { gembaWalkFinding: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { gembaWalkFinding: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    gembaWalkFinding: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        gembaWalkFinding: typeof args.gembaWalkFinding === 'object'
                ? args.gembaWalkFinding.id
                : args.gembaWalkFinding,
                }

    return update.definition.url
            .replace('{gembaWalkFinding}', parsedArgs.gembaWalkFinding.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContinuousImprovement\GembaWalkFindingController::update
 * @see app/Http/Controllers/ContinuousImprovement/GembaWalkFindingController.php:28
 * @route '/gemba-walk-finding/{gembaWalkFinding}'
 */
update.put = (args: { gembaWalkFinding: number | { id: number } } | [gembaWalkFinding: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\ContinuousImprovement\GembaWalkFindingController::update
 * @see app/Http/Controllers/ContinuousImprovement/GembaWalkFindingController.php:28
 * @route '/gemba-walk-finding/{gembaWalkFinding}'
 */
    const updateForm = (args: { gembaWalkFinding: number | { id: number } } | [gembaWalkFinding: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ContinuousImprovement\GembaWalkFindingController::update
 * @see app/Http/Controllers/ContinuousImprovement/GembaWalkFindingController.php:28
 * @route '/gemba-walk-finding/{gembaWalkFinding}'
 */
        updateForm.put = (args: { gembaWalkFinding: number | { id: number } } | [gembaWalkFinding: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\ContinuousImprovement\GembaWalkFindingController::resolve
 * @see app/Http/Controllers/ContinuousImprovement/GembaWalkFindingController.php:37
 * @route '/gemba-walk-finding/{gembaWalkFinding}/resolve'
 */
export const resolve = (args: { gembaWalkFinding: number | { id: number } } | [gembaWalkFinding: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: resolve.url(args, options),
    method: 'post',
})

resolve.definition = {
    methods: ["post"],
    url: '/gemba-walk-finding/{gembaWalkFinding}/resolve',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ContinuousImprovement\GembaWalkFindingController::resolve
 * @see app/Http/Controllers/ContinuousImprovement/GembaWalkFindingController.php:37
 * @route '/gemba-walk-finding/{gembaWalkFinding}/resolve'
 */
resolve.url = (args: { gembaWalkFinding: number | { id: number } } | [gembaWalkFinding: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { gembaWalkFinding: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { gembaWalkFinding: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    gembaWalkFinding: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        gembaWalkFinding: typeof args.gembaWalkFinding === 'object'
                ? args.gembaWalkFinding.id
                : args.gembaWalkFinding,
                }

    return resolve.definition.url
            .replace('{gembaWalkFinding}', parsedArgs.gembaWalkFinding.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContinuousImprovement\GembaWalkFindingController::resolve
 * @see app/Http/Controllers/ContinuousImprovement/GembaWalkFindingController.php:37
 * @route '/gemba-walk-finding/{gembaWalkFinding}/resolve'
 */
resolve.post = (args: { gembaWalkFinding: number | { id: number } } | [gembaWalkFinding: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: resolve.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ContinuousImprovement\GembaWalkFindingController::resolve
 * @see app/Http/Controllers/ContinuousImprovement/GembaWalkFindingController.php:37
 * @route '/gemba-walk-finding/{gembaWalkFinding}/resolve'
 */
    const resolveForm = (args: { gembaWalkFinding: number | { id: number } } | [gembaWalkFinding: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: resolve.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ContinuousImprovement\GembaWalkFindingController::resolve
 * @see app/Http/Controllers/ContinuousImprovement/GembaWalkFindingController.php:37
 * @route '/gemba-walk-finding/{gembaWalkFinding}/resolve'
 */
        resolveForm.post = (args: { gembaWalkFinding: number | { id: number } } | [gembaWalkFinding: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: resolve.url(args, options),
            method: 'post',
        })
    
    resolve.form = resolveForm
/**
* @see \App\Http\Controllers\ContinuousImprovement\GembaWalkFindingController::destroy
 * @see app/Http/Controllers/ContinuousImprovement/GembaWalkFindingController.php:46
 * @route '/gemba-walk-finding/{gembaWalkFinding}'
 */
export const destroy = (args: { gembaWalkFinding: number | { id: number } } | [gembaWalkFinding: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/gemba-walk-finding/{gembaWalkFinding}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ContinuousImprovement\GembaWalkFindingController::destroy
 * @see app/Http/Controllers/ContinuousImprovement/GembaWalkFindingController.php:46
 * @route '/gemba-walk-finding/{gembaWalkFinding}'
 */
destroy.url = (args: { gembaWalkFinding: number | { id: number } } | [gembaWalkFinding: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { gembaWalkFinding: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { gembaWalkFinding: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    gembaWalkFinding: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        gembaWalkFinding: typeof args.gembaWalkFinding === 'object'
                ? args.gembaWalkFinding.id
                : args.gembaWalkFinding,
                }

    return destroy.definition.url
            .replace('{gembaWalkFinding}', parsedArgs.gembaWalkFinding.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContinuousImprovement\GembaWalkFindingController::destroy
 * @see app/Http/Controllers/ContinuousImprovement/GembaWalkFindingController.php:46
 * @route '/gemba-walk-finding/{gembaWalkFinding}'
 */
destroy.delete = (args: { gembaWalkFinding: number | { id: number } } | [gembaWalkFinding: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\ContinuousImprovement\GembaWalkFindingController::destroy
 * @see app/Http/Controllers/ContinuousImprovement/GembaWalkFindingController.php:46
 * @route '/gemba-walk-finding/{gembaWalkFinding}'
 */
    const destroyForm = (args: { gembaWalkFinding: number | { id: number } } | [gembaWalkFinding: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ContinuousImprovement\GembaWalkFindingController::destroy
 * @see app/Http/Controllers/ContinuousImprovement/GembaWalkFindingController.php:46
 * @route '/gemba-walk-finding/{gembaWalkFinding}'
 */
        destroyForm.delete = (args: { gembaWalkFinding: number | { id: number } } | [gembaWalkFinding: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const GembaWalkFindingController = { store, update, resolve, destroy }

export default GembaWalkFindingController