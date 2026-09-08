import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\RiskReviewController::store
 * @see app/Http/Controllers/RiskReviewController.php:17
 * @route '/risk/{risk}/reviews'
 */
export const store = (args: { risk: number | { id: number } } | [risk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/risk/{risk}/reviews',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\RiskReviewController::store
 * @see app/Http/Controllers/RiskReviewController.php:17
 * @route '/risk/{risk}/reviews'
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
* @see \App\Http\Controllers\RiskReviewController::store
 * @see app/Http/Controllers/RiskReviewController.php:17
 * @route '/risk/{risk}/reviews'
 */
store.post = (args: { risk: number | { id: number } } | [risk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\RiskReviewController::store
 * @see app/Http/Controllers/RiskReviewController.php:17
 * @route '/risk/{risk}/reviews'
 */
    const storeForm = (args: { risk: number | { id: number } } | [risk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\RiskReviewController::store
 * @see app/Http/Controllers/RiskReviewController.php:17
 * @route '/risk/{risk}/reviews'
 */
        storeForm.post = (args: { risk: number | { id: number } } | [risk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(args, options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\RiskReviewController::update
 * @see app/Http/Controllers/RiskReviewController.php:26
 * @route '/risk-review/{riskReview}'
 */
export const update = (args: { riskReview: number | { id: number } } | [riskReview: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/risk-review/{riskReview}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\RiskReviewController::update
 * @see app/Http/Controllers/RiskReviewController.php:26
 * @route '/risk-review/{riskReview}'
 */
update.url = (args: { riskReview: number | { id: number } } | [riskReview: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { riskReview: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { riskReview: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    riskReview: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        riskReview: typeof args.riskReview === 'object'
                ? args.riskReview.id
                : args.riskReview,
                }

    return update.definition.url
            .replace('{riskReview}', parsedArgs.riskReview.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\RiskReviewController::update
 * @see app/Http/Controllers/RiskReviewController.php:26
 * @route '/risk-review/{riskReview}'
 */
update.put = (args: { riskReview: number | { id: number } } | [riskReview: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\RiskReviewController::update
 * @see app/Http/Controllers/RiskReviewController.php:26
 * @route '/risk-review/{riskReview}'
 */
    const updateForm = (args: { riskReview: number | { id: number } } | [riskReview: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\RiskReviewController::update
 * @see app/Http/Controllers/RiskReviewController.php:26
 * @route '/risk-review/{riskReview}'
 */
        updateForm.put = (args: { riskReview: number | { id: number } } | [riskReview: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
const RiskReviewController = { store, update }

export default RiskReviewController