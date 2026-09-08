import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\RiskControlController::store
 * @see app/Http/Controllers/RiskControlController.php:17
 * @route '/risk/{risk}/controls'
 */
export const store = (args: { risk: number | { id: number } } | [risk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/risk/{risk}/controls',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\RiskControlController::store
 * @see app/Http/Controllers/RiskControlController.php:17
 * @route '/risk/{risk}/controls'
 */
store.url = (args: { risk: number | { id: number } } | [risk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { risk: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { risk: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    risk: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        risk: typeof args.risk === 'object'
                ? args.risk.id
                : args.risk,
                }

    return store.definition.url
            .replace('{risk}', parsedArgs.risk.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\RiskControlController::store
 * @see app/Http/Controllers/RiskControlController.php:17
 * @route '/risk/{risk}/controls'
 */
store.post = (args: { risk: number | { id: number } } | [risk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\RiskControlController::store
 * @see app/Http/Controllers/RiskControlController.php:17
 * @route '/risk/{risk}/controls'
 */
    const storeForm = (args: { risk: number | { id: number } } | [risk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\RiskControlController::store
 * @see app/Http/Controllers/RiskControlController.php:17
 * @route '/risk/{risk}/controls'
 */
        storeForm.post = (args: { risk: number | { id: number } } | [risk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(args, options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\RiskControlController::update
 * @see app/Http/Controllers/RiskControlController.php:26
 * @route '/risk-control/{riskControl}'
 */
export const update = (args: { riskControl: number | { id: number } } | [riskControl: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/risk-control/{riskControl}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\RiskControlController::update
 * @see app/Http/Controllers/RiskControlController.php:26
 * @route '/risk-control/{riskControl}'
 */
update.url = (args: { riskControl: number | { id: number } } | [riskControl: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { riskControl: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { riskControl: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    riskControl: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        riskControl: typeof args.riskControl === 'object'
                ? args.riskControl.id
                : args.riskControl,
                }

    return update.definition.url
            .replace('{riskControl}', parsedArgs.riskControl.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\RiskControlController::update
 * @see app/Http/Controllers/RiskControlController.php:26
 * @route '/risk-control/{riskControl}'
 */
update.put = (args: { riskControl: number | { id: number } } | [riskControl: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\RiskControlController::update
 * @see app/Http/Controllers/RiskControlController.php:26
 * @route '/risk-control/{riskControl}'
 */
    const updateForm = (args: { riskControl: number | { id: number } } | [riskControl: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\RiskControlController::update
 * @see app/Http/Controllers/RiskControlController.php:26
 * @route '/risk-control/{riskControl}'
 */
        updateForm.put = (args: { riskControl: number | { id: number } } | [riskControl: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\RiskControlController::destroy
 * @see app/Http/Controllers/RiskControlController.php:35
 * @route '/risk-control/{riskControl}'
 */
export const destroy = (args: { riskControl: number | { id: number } } | [riskControl: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/risk-control/{riskControl}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\RiskControlController::destroy
 * @see app/Http/Controllers/RiskControlController.php:35
 * @route '/risk-control/{riskControl}'
 */
destroy.url = (args: { riskControl: number | { id: number } } | [riskControl: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { riskControl: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { riskControl: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    riskControl: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        riskControl: typeof args.riskControl === 'object'
                ? args.riskControl.id
                : args.riskControl,
                }

    return destroy.definition.url
            .replace('{riskControl}', parsedArgs.riskControl.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\RiskControlController::destroy
 * @see app/Http/Controllers/RiskControlController.php:35
 * @route '/risk-control/{riskControl}'
 */
destroy.delete = (args: { riskControl: number | { id: number } } | [riskControl: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\RiskControlController::destroy
 * @see app/Http/Controllers/RiskControlController.php:35
 * @route '/risk-control/{riskControl}'
 */
    const destroyForm = (args: { riskControl: number | { id: number } } | [riskControl: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\RiskControlController::destroy
 * @see app/Http/Controllers/RiskControlController.php:35
 * @route '/risk-control/{riskControl}'
 */
        destroyForm.delete = (args: { riskControl: number | { id: number } } | [riskControl: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const RiskControlController = { store, update, destroy }

export default RiskControlController