import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Document\DocumentTypeAuthorityController::index
 * @see app/Http/Controllers/Document/DocumentTypeAuthorityController.php:26
 * @route '/document-type/{documentType}/authorities'
 */
export const index = (args: { documentType: number | { id: number } } | [documentType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/document-type/{documentType}/authorities',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Document\DocumentTypeAuthorityController::index
 * @see app/Http/Controllers/Document/DocumentTypeAuthorityController.php:26
 * @route '/document-type/{documentType}/authorities'
 */
index.url = (args: { documentType: number | { id: number } } | [documentType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { documentType: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { documentType: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    documentType: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        documentType: typeof args.documentType === 'object'
                ? args.documentType.id
                : args.documentType,
                }

    return index.definition.url
            .replace('{documentType}', parsedArgs.documentType.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Document\DocumentTypeAuthorityController::index
 * @see app/Http/Controllers/Document/DocumentTypeAuthorityController.php:26
 * @route '/document-type/{documentType}/authorities'
 */
index.get = (args: { documentType: number | { id: number } } | [documentType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Document\DocumentTypeAuthorityController::index
 * @see app/Http/Controllers/Document/DocumentTypeAuthorityController.php:26
 * @route '/document-type/{documentType}/authorities'
 */
index.head = (args: { documentType: number | { id: number } } | [documentType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Document\DocumentTypeAuthorityController::index
 * @see app/Http/Controllers/Document/DocumentTypeAuthorityController.php:26
 * @route '/document-type/{documentType}/authorities'
 */
    const indexForm = (args: { documentType: number | { id: number } } | [documentType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Document\DocumentTypeAuthorityController::index
 * @see app/Http/Controllers/Document/DocumentTypeAuthorityController.php:26
 * @route '/document-type/{documentType}/authorities'
 */
        indexForm.get = (args: { documentType: number | { id: number } } | [documentType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Document\DocumentTypeAuthorityController::index
 * @see app/Http/Controllers/Document/DocumentTypeAuthorityController.php:26
 * @route '/document-type/{documentType}/authorities'
 */
        indexForm.head = (args: { documentType: number | { id: number } } | [documentType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Document\DocumentTypeAuthorityController::store
 * @see app/Http/Controllers/Document/DocumentTypeAuthorityController.php:42
 * @route '/document-type/{documentType}/authorities'
 */
export const store = (args: { documentType: number | { id: number } } | [documentType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/document-type/{documentType}/authorities',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Document\DocumentTypeAuthorityController::store
 * @see app/Http/Controllers/Document/DocumentTypeAuthorityController.php:42
 * @route '/document-type/{documentType}/authorities'
 */
store.url = (args: { documentType: number | { id: number } } | [documentType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { documentType: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { documentType: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    documentType: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        documentType: typeof args.documentType === 'object'
                ? args.documentType.id
                : args.documentType,
                }

    return store.definition.url
            .replace('{documentType}', parsedArgs.documentType.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Document\DocumentTypeAuthorityController::store
 * @see app/Http/Controllers/Document/DocumentTypeAuthorityController.php:42
 * @route '/document-type/{documentType}/authorities'
 */
store.post = (args: { documentType: number | { id: number } } | [documentType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Document\DocumentTypeAuthorityController::store
 * @see app/Http/Controllers/Document/DocumentTypeAuthorityController.php:42
 * @route '/document-type/{documentType}/authorities'
 */
    const storeForm = (args: { documentType: number | { id: number } } | [documentType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Document\DocumentTypeAuthorityController::store
 * @see app/Http/Controllers/Document/DocumentTypeAuthorityController.php:42
 * @route '/document-type/{documentType}/authorities'
 */
        storeForm.post = (args: { documentType: number | { id: number } } | [documentType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(args, options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Document\DocumentTypeAuthorityController::destroy
 * @see app/Http/Controllers/Document/DocumentTypeAuthorityController.php:67
 * @route '/document-type-authority/{documentTypeAuthority}'
 */
export const destroy = (args: { documentTypeAuthority: number | { id: number } } | [documentTypeAuthority: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/document-type-authority/{documentTypeAuthority}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Document\DocumentTypeAuthorityController::destroy
 * @see app/Http/Controllers/Document/DocumentTypeAuthorityController.php:67
 * @route '/document-type-authority/{documentTypeAuthority}'
 */
destroy.url = (args: { documentTypeAuthority: number | { id: number } } | [documentTypeAuthority: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { documentTypeAuthority: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { documentTypeAuthority: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    documentTypeAuthority: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        documentTypeAuthority: typeof args.documentTypeAuthority === 'object'
                ? args.documentTypeAuthority.id
                : args.documentTypeAuthority,
                }

    return destroy.definition.url
            .replace('{documentTypeAuthority}', parsedArgs.documentTypeAuthority.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Document\DocumentTypeAuthorityController::destroy
 * @see app/Http/Controllers/Document/DocumentTypeAuthorityController.php:67
 * @route '/document-type-authority/{documentTypeAuthority}'
 */
destroy.delete = (args: { documentTypeAuthority: number | { id: number } } | [documentTypeAuthority: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Document\DocumentTypeAuthorityController::destroy
 * @see app/Http/Controllers/Document/DocumentTypeAuthorityController.php:67
 * @route '/document-type-authority/{documentTypeAuthority}'
 */
    const destroyForm = (args: { documentTypeAuthority: number | { id: number } } | [documentTypeAuthority: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Document\DocumentTypeAuthorityController::destroy
 * @see app/Http/Controllers/Document/DocumentTypeAuthorityController.php:67
 * @route '/document-type-authority/{documentTypeAuthority}'
 */
        destroyForm.delete = (args: { documentTypeAuthority: number | { id: number } } | [documentTypeAuthority: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const documentTypeAuthority = {
    index: Object.assign(index, index),
store: Object.assign(store, store),
destroy: Object.assign(destroy, destroy),
}

export default documentTypeAuthority