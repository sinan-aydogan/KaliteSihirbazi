import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Document\DocumentActionController::index
 * @see app/Http/Controllers/Document/DocumentActionController.php:18
 * @route '/document-actions'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/document-actions',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Document\DocumentActionController::index
 * @see app/Http/Controllers/Document/DocumentActionController.php:18
 * @route '/document-actions'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Document\DocumentActionController::index
 * @see app/Http/Controllers/Document/DocumentActionController.php:18
 * @route '/document-actions'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Document\DocumentActionController::index
 * @see app/Http/Controllers/Document/DocumentActionController.php:18
 * @route '/document-actions'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Document\DocumentActionController::index
 * @see app/Http/Controllers/Document/DocumentActionController.php:18
 * @route '/document-actions'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Document\DocumentActionController::index
 * @see app/Http/Controllers/Document/DocumentActionController.php:18
 * @route '/document-actions'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Document\DocumentActionController::index
 * @see app/Http/Controllers/Document/DocumentActionController.php:18
 * @route '/document-actions'
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
const DocumentActionController = { index }

export default DocumentActionController