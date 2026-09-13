import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\ContinuousImprovement\ContinuousImprovementController::index
 * @see app/Http/Controllers/ContinuousImprovement/ContinuousImprovementController.php:15
 * @route '/continuous-improvement'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/continuous-improvement',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ContinuousImprovement\ContinuousImprovementController::index
 * @see app/Http/Controllers/ContinuousImprovement/ContinuousImprovementController.php:15
 * @route '/continuous-improvement'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContinuousImprovement\ContinuousImprovementController::index
 * @see app/Http/Controllers/ContinuousImprovement/ContinuousImprovementController.php:15
 * @route '/continuous-improvement'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ContinuousImprovement\ContinuousImprovementController::index
 * @see app/Http/Controllers/ContinuousImprovement/ContinuousImprovementController.php:15
 * @route '/continuous-improvement'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ContinuousImprovement\ContinuousImprovementController::index
 * @see app/Http/Controllers/ContinuousImprovement/ContinuousImprovementController.php:15
 * @route '/continuous-improvement'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ContinuousImprovement\ContinuousImprovementController::index
 * @see app/Http/Controllers/ContinuousImprovement/ContinuousImprovementController.php:15
 * @route '/continuous-improvement'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ContinuousImprovement\ContinuousImprovementController::index
 * @see app/Http/Controllers/ContinuousImprovement/ContinuousImprovementController.php:15
 * @route '/continuous-improvement'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
const continuousImprovement = {
    index: Object.assign(index, index),
}

export default continuousImprovement