import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\CustomerComplaintAnalyticsController::index
 * @see app/Http/Controllers/CustomerComplaintAnalyticsController.php:15
 * @route '/customer-complaint/analytics'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/customer-complaint/analytics',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CustomerComplaintAnalyticsController::index
 * @see app/Http/Controllers/CustomerComplaintAnalyticsController.php:15
 * @route '/customer-complaint/analytics'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CustomerComplaintAnalyticsController::index
 * @see app/Http/Controllers/CustomerComplaintAnalyticsController.php:15
 * @route '/customer-complaint/analytics'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CustomerComplaintAnalyticsController::index
 * @see app/Http/Controllers/CustomerComplaintAnalyticsController.php:15
 * @route '/customer-complaint/analytics'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CustomerComplaintAnalyticsController::index
 * @see app/Http/Controllers/CustomerComplaintAnalyticsController.php:15
 * @route '/customer-complaint/analytics'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CustomerComplaintAnalyticsController::index
 * @see app/Http/Controllers/CustomerComplaintAnalyticsController.php:15
 * @route '/customer-complaint/analytics'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CustomerComplaintAnalyticsController::index
 * @see app/Http/Controllers/CustomerComplaintAnalyticsController.php:15
 * @route '/customer-complaint/analytics'
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
/**
* @see \App\Http\Controllers\CustomerComplaintAnalyticsController::preview
 * @see app/Http/Controllers/CustomerComplaintAnalyticsController.php:66
 * @route '/customer-complaint/analytics/preview'
 */
export const preview = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: preview.url(options),
    method: 'post',
})

preview.definition = {
    methods: ["post"],
    url: '/customer-complaint/analytics/preview',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CustomerComplaintAnalyticsController::preview
 * @see app/Http/Controllers/CustomerComplaintAnalyticsController.php:66
 * @route '/customer-complaint/analytics/preview'
 */
preview.url = (options?: RouteQueryOptions) => {
    return preview.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CustomerComplaintAnalyticsController::preview
 * @see app/Http/Controllers/CustomerComplaintAnalyticsController.php:66
 * @route '/customer-complaint/analytics/preview'
 */
preview.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: preview.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CustomerComplaintAnalyticsController::preview
 * @see app/Http/Controllers/CustomerComplaintAnalyticsController.php:66
 * @route '/customer-complaint/analytics/preview'
 */
    const previewForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: preview.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CustomerComplaintAnalyticsController::preview
 * @see app/Http/Controllers/CustomerComplaintAnalyticsController.php:66
 * @route '/customer-complaint/analytics/preview'
 */
        previewForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: preview.url(options),
            method: 'post',
        })
    
    preview.form = previewForm
const customerComplaintAnalytics = {
    index: Object.assign(index, index),
preview: Object.assign(preview, preview),
}

export default customerComplaintAnalytics