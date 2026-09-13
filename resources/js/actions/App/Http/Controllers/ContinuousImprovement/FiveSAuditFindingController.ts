import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\ContinuousImprovement\FiveSAuditFindingController::store
 * @see app/Http/Controllers/ContinuousImprovement/FiveSAuditFindingController.php:19
 * @route '/five-s-audit/{fiveSAudit}/findings'
 */
export const store = (args: { fiveSAudit: number | { id: number } } | [fiveSAudit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/five-s-audit/{fiveSAudit}/findings',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ContinuousImprovement\FiveSAuditFindingController::store
 * @see app/Http/Controllers/ContinuousImprovement/FiveSAuditFindingController.php:19
 * @route '/five-s-audit/{fiveSAudit}/findings'
 */
store.url = (args: { fiveSAudit: number | { id: number } } | [fiveSAudit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { fiveSAudit: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { fiveSAudit: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    fiveSAudit: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        fiveSAudit: typeof args.fiveSAudit === 'object'
                ? args.fiveSAudit.id
                : args.fiveSAudit,
                }

    return store.definition.url
            .replace('{fiveSAudit}', parsedArgs.fiveSAudit.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContinuousImprovement\FiveSAuditFindingController::store
 * @see app/Http/Controllers/ContinuousImprovement/FiveSAuditFindingController.php:19
 * @route '/five-s-audit/{fiveSAudit}/findings'
 */
store.post = (args: { fiveSAudit: number | { id: number } } | [fiveSAudit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ContinuousImprovement\FiveSAuditFindingController::store
 * @see app/Http/Controllers/ContinuousImprovement/FiveSAuditFindingController.php:19
 * @route '/five-s-audit/{fiveSAudit}/findings'
 */
    const storeForm = (args: { fiveSAudit: number | { id: number } } | [fiveSAudit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ContinuousImprovement\FiveSAuditFindingController::store
 * @see app/Http/Controllers/ContinuousImprovement/FiveSAuditFindingController.php:19
 * @route '/five-s-audit/{fiveSAudit}/findings'
 */
        storeForm.post = (args: { fiveSAudit: number | { id: number } } | [fiveSAudit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(args, options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\ContinuousImprovement\FiveSAuditFindingController::update
 * @see app/Http/Controllers/ContinuousImprovement/FiveSAuditFindingController.php:28
 * @route '/five-s-audit-finding/{fiveSAuditFinding}'
 */
export const update = (args: { fiveSAuditFinding: number | { id: number } } | [fiveSAuditFinding: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/five-s-audit-finding/{fiveSAuditFinding}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\ContinuousImprovement\FiveSAuditFindingController::update
 * @see app/Http/Controllers/ContinuousImprovement/FiveSAuditFindingController.php:28
 * @route '/five-s-audit-finding/{fiveSAuditFinding}'
 */
update.url = (args: { fiveSAuditFinding: number | { id: number } } | [fiveSAuditFinding: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { fiveSAuditFinding: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { fiveSAuditFinding: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    fiveSAuditFinding: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        fiveSAuditFinding: typeof args.fiveSAuditFinding === 'object'
                ? args.fiveSAuditFinding.id
                : args.fiveSAuditFinding,
                }

    return update.definition.url
            .replace('{fiveSAuditFinding}', parsedArgs.fiveSAuditFinding.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContinuousImprovement\FiveSAuditFindingController::update
 * @see app/Http/Controllers/ContinuousImprovement/FiveSAuditFindingController.php:28
 * @route '/five-s-audit-finding/{fiveSAuditFinding}'
 */
update.put = (args: { fiveSAuditFinding: number | { id: number } } | [fiveSAuditFinding: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\ContinuousImprovement\FiveSAuditFindingController::update
 * @see app/Http/Controllers/ContinuousImprovement/FiveSAuditFindingController.php:28
 * @route '/five-s-audit-finding/{fiveSAuditFinding}'
 */
    const updateForm = (args: { fiveSAuditFinding: number | { id: number } } | [fiveSAuditFinding: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ContinuousImprovement\FiveSAuditFindingController::update
 * @see app/Http/Controllers/ContinuousImprovement/FiveSAuditFindingController.php:28
 * @route '/five-s-audit-finding/{fiveSAuditFinding}'
 */
        updateForm.put = (args: { fiveSAuditFinding: number | { id: number } } | [fiveSAuditFinding: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\ContinuousImprovement\FiveSAuditFindingController::resolve
 * @see app/Http/Controllers/ContinuousImprovement/FiveSAuditFindingController.php:37
 * @route '/five-s-audit-finding/{fiveSAuditFinding}/resolve'
 */
export const resolve = (args: { fiveSAuditFinding: number | { id: number } } | [fiveSAuditFinding: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: resolve.url(args, options),
    method: 'post',
})

resolve.definition = {
    methods: ["post"],
    url: '/five-s-audit-finding/{fiveSAuditFinding}/resolve',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ContinuousImprovement\FiveSAuditFindingController::resolve
 * @see app/Http/Controllers/ContinuousImprovement/FiveSAuditFindingController.php:37
 * @route '/five-s-audit-finding/{fiveSAuditFinding}/resolve'
 */
resolve.url = (args: { fiveSAuditFinding: number | { id: number } } | [fiveSAuditFinding: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { fiveSAuditFinding: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { fiveSAuditFinding: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    fiveSAuditFinding: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        fiveSAuditFinding: typeof args.fiveSAuditFinding === 'object'
                ? args.fiveSAuditFinding.id
                : args.fiveSAuditFinding,
                }

    return resolve.definition.url
            .replace('{fiveSAuditFinding}', parsedArgs.fiveSAuditFinding.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContinuousImprovement\FiveSAuditFindingController::resolve
 * @see app/Http/Controllers/ContinuousImprovement/FiveSAuditFindingController.php:37
 * @route '/five-s-audit-finding/{fiveSAuditFinding}/resolve'
 */
resolve.post = (args: { fiveSAuditFinding: number | { id: number } } | [fiveSAuditFinding: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: resolve.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ContinuousImprovement\FiveSAuditFindingController::resolve
 * @see app/Http/Controllers/ContinuousImprovement/FiveSAuditFindingController.php:37
 * @route '/five-s-audit-finding/{fiveSAuditFinding}/resolve'
 */
    const resolveForm = (args: { fiveSAuditFinding: number | { id: number } } | [fiveSAuditFinding: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: resolve.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ContinuousImprovement\FiveSAuditFindingController::resolve
 * @see app/Http/Controllers/ContinuousImprovement/FiveSAuditFindingController.php:37
 * @route '/five-s-audit-finding/{fiveSAuditFinding}/resolve'
 */
        resolveForm.post = (args: { fiveSAuditFinding: number | { id: number } } | [fiveSAuditFinding: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: resolve.url(args, options),
            method: 'post',
        })
    
    resolve.form = resolveForm
/**
* @see \App\Http\Controllers\ContinuousImprovement\FiveSAuditFindingController::destroy
 * @see app/Http/Controllers/ContinuousImprovement/FiveSAuditFindingController.php:46
 * @route '/five-s-audit-finding/{fiveSAuditFinding}'
 */
export const destroy = (args: { fiveSAuditFinding: number | { id: number } } | [fiveSAuditFinding: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/five-s-audit-finding/{fiveSAuditFinding}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ContinuousImprovement\FiveSAuditFindingController::destroy
 * @see app/Http/Controllers/ContinuousImprovement/FiveSAuditFindingController.php:46
 * @route '/five-s-audit-finding/{fiveSAuditFinding}'
 */
destroy.url = (args: { fiveSAuditFinding: number | { id: number } } | [fiveSAuditFinding: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { fiveSAuditFinding: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { fiveSAuditFinding: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    fiveSAuditFinding: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        fiveSAuditFinding: typeof args.fiveSAuditFinding === 'object'
                ? args.fiveSAuditFinding.id
                : args.fiveSAuditFinding,
                }

    return destroy.definition.url
            .replace('{fiveSAuditFinding}', parsedArgs.fiveSAuditFinding.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContinuousImprovement\FiveSAuditFindingController::destroy
 * @see app/Http/Controllers/ContinuousImprovement/FiveSAuditFindingController.php:46
 * @route '/five-s-audit-finding/{fiveSAuditFinding}'
 */
destroy.delete = (args: { fiveSAuditFinding: number | { id: number } } | [fiveSAuditFinding: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\ContinuousImprovement\FiveSAuditFindingController::destroy
 * @see app/Http/Controllers/ContinuousImprovement/FiveSAuditFindingController.php:46
 * @route '/five-s-audit-finding/{fiveSAuditFinding}'
 */
    const destroyForm = (args: { fiveSAuditFinding: number | { id: number } } | [fiveSAuditFinding: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ContinuousImprovement\FiveSAuditFindingController::destroy
 * @see app/Http/Controllers/ContinuousImprovement/FiveSAuditFindingController.php:46
 * @route '/five-s-audit-finding/{fiveSAuditFinding}'
 */
        destroyForm.delete = (args: { fiveSAuditFinding: number | { id: number } } | [fiveSAuditFinding: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const FiveSAuditFindingController = { store, update, resolve, destroy }

export default FiveSAuditFindingController