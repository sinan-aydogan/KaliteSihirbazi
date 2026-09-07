import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Document\DocumentRevisionRequestController::index
 * @see app/Http/Controllers/Document/DocumentRevisionRequestController.php:20
 * @route '/document-revision-requests'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/document-revision-requests',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Document\DocumentRevisionRequestController::index
 * @see app/Http/Controllers/Document/DocumentRevisionRequestController.php:20
 * @route '/document-revision-requests'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Document\DocumentRevisionRequestController::index
 * @see app/Http/Controllers/Document/DocumentRevisionRequestController.php:20
 * @route '/document-revision-requests'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Document\DocumentRevisionRequestController::index
 * @see app/Http/Controllers/Document/DocumentRevisionRequestController.php:20
 * @route '/document-revision-requests'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Document\DocumentRevisionRequestController::index
 * @see app/Http/Controllers/Document/DocumentRevisionRequestController.php:20
 * @route '/document-revision-requests'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Document\DocumentRevisionRequestController::index
 * @see app/Http/Controllers/Document/DocumentRevisionRequestController.php:20
 * @route '/document-revision-requests'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Document\DocumentRevisionRequestController::index
 * @see app/Http/Controllers/Document/DocumentRevisionRequestController.php:20
 * @route '/document-revision-requests'
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
* @see \App\Http\Controllers\Document\DocumentRevisionRequestController::store
 * @see app/Http/Controllers/Document/DocumentRevisionRequestController.php:37
 * @route '/document/{document}/revision-requests'
 */
export const store = (args: { document: number | { id: number } } | [document: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/document/{document}/revision-requests',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Document\DocumentRevisionRequestController::store
 * @see app/Http/Controllers/Document/DocumentRevisionRequestController.php:37
 * @route '/document/{document}/revision-requests'
 */
store.url = (args: { document: number | { id: number } } | [document: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { document: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { document: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    document: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        document: typeof args.document === 'object'
                ? args.document.id
                : args.document,
                }

    return store.definition.url
            .replace('{document}', parsedArgs.document.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Document\DocumentRevisionRequestController::store
 * @see app/Http/Controllers/Document/DocumentRevisionRequestController.php:37
 * @route '/document/{document}/revision-requests'
 */
store.post = (args: { document: number | { id: number } } | [document: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Document\DocumentRevisionRequestController::store
 * @see app/Http/Controllers/Document/DocumentRevisionRequestController.php:37
 * @route '/document/{document}/revision-requests'
 */
    const storeForm = (args: { document: number | { id: number } } | [document: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Document\DocumentRevisionRequestController::store
 * @see app/Http/Controllers/Document/DocumentRevisionRequestController.php:37
 * @route '/document/{document}/revision-requests'
 */
        storeForm.post = (args: { document: number | { id: number } } | [document: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(args, options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Document\DocumentRevisionRequestController::accept
 * @see app/Http/Controllers/Document/DocumentRevisionRequestController.php:47
 * @route '/document-revision-request/{documentRevisionRequest}/accept'
 */
export const accept = (args: { documentRevisionRequest: number | { id: number } } | [documentRevisionRequest: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: accept.url(args, options),
    method: 'post',
})

accept.definition = {
    methods: ["post"],
    url: '/document-revision-request/{documentRevisionRequest}/accept',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Document\DocumentRevisionRequestController::accept
 * @see app/Http/Controllers/Document/DocumentRevisionRequestController.php:47
 * @route '/document-revision-request/{documentRevisionRequest}/accept'
 */
accept.url = (args: { documentRevisionRequest: number | { id: number } } | [documentRevisionRequest: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { documentRevisionRequest: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { documentRevisionRequest: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    documentRevisionRequest: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        documentRevisionRequest: typeof args.documentRevisionRequest === 'object'
                ? args.documentRevisionRequest.id
                : args.documentRevisionRequest,
                }

    return accept.definition.url
            .replace('{documentRevisionRequest}', parsedArgs.documentRevisionRequest.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Document\DocumentRevisionRequestController::accept
 * @see app/Http/Controllers/Document/DocumentRevisionRequestController.php:47
 * @route '/document-revision-request/{documentRevisionRequest}/accept'
 */
accept.post = (args: { documentRevisionRequest: number | { id: number } } | [documentRevisionRequest: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: accept.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Document\DocumentRevisionRequestController::accept
 * @see app/Http/Controllers/Document/DocumentRevisionRequestController.php:47
 * @route '/document-revision-request/{documentRevisionRequest}/accept'
 */
    const acceptForm = (args: { documentRevisionRequest: number | { id: number } } | [documentRevisionRequest: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: accept.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Document\DocumentRevisionRequestController::accept
 * @see app/Http/Controllers/Document/DocumentRevisionRequestController.php:47
 * @route '/document-revision-request/{documentRevisionRequest}/accept'
 */
        acceptForm.post = (args: { documentRevisionRequest: number | { id: number } } | [documentRevisionRequest: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: accept.url(args, options),
            method: 'post',
        })
    
    accept.form = acceptForm
/**
* @see \App\Http\Controllers\Document\DocumentRevisionRequestController::reject
 * @see app/Http/Controllers/Document/DocumentRevisionRequestController.php:57
 * @route '/document-revision-request/{documentRevisionRequest}/reject'
 */
export const reject = (args: { documentRevisionRequest: number | { id: number } } | [documentRevisionRequest: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reject.url(args, options),
    method: 'post',
})

reject.definition = {
    methods: ["post"],
    url: '/document-revision-request/{documentRevisionRequest}/reject',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Document\DocumentRevisionRequestController::reject
 * @see app/Http/Controllers/Document/DocumentRevisionRequestController.php:57
 * @route '/document-revision-request/{documentRevisionRequest}/reject'
 */
reject.url = (args: { documentRevisionRequest: number | { id: number } } | [documentRevisionRequest: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { documentRevisionRequest: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { documentRevisionRequest: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    documentRevisionRequest: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        documentRevisionRequest: typeof args.documentRevisionRequest === 'object'
                ? args.documentRevisionRequest.id
                : args.documentRevisionRequest,
                }

    return reject.definition.url
            .replace('{documentRevisionRequest}', parsedArgs.documentRevisionRequest.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Document\DocumentRevisionRequestController::reject
 * @see app/Http/Controllers/Document/DocumentRevisionRequestController.php:57
 * @route '/document-revision-request/{documentRevisionRequest}/reject'
 */
reject.post = (args: { documentRevisionRequest: number | { id: number } } | [documentRevisionRequest: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reject.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Document\DocumentRevisionRequestController::reject
 * @see app/Http/Controllers/Document/DocumentRevisionRequestController.php:57
 * @route '/document-revision-request/{documentRevisionRequest}/reject'
 */
    const rejectForm = (args: { documentRevisionRequest: number | { id: number } } | [documentRevisionRequest: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: reject.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Document\DocumentRevisionRequestController::reject
 * @see app/Http/Controllers/Document/DocumentRevisionRequestController.php:57
 * @route '/document-revision-request/{documentRevisionRequest}/reject'
 */
        rejectForm.post = (args: { documentRevisionRequest: number | { id: number } } | [documentRevisionRequest: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: reject.url(args, options),
            method: 'post',
        })
    
    reject.form = rejectForm
const DocumentRevisionRequestController = { index, store, accept, reject }

export default DocumentRevisionRequestController