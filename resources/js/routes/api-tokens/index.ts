import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\ApiTokenController::index
 * @see app/Http/Controllers/ApiTokenController.php:15
 * @route '/user/api-tokens'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/user/api-tokens',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ApiTokenController::index
 * @see app/Http/Controllers/ApiTokenController.php:15
 * @route '/user/api-tokens'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ApiTokenController::index
 * @see app/Http/Controllers/ApiTokenController.php:15
 * @route '/user/api-tokens'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ApiTokenController::index
 * @see app/Http/Controllers/ApiTokenController.php:15
 * @route '/user/api-tokens'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ApiTokenController::index
 * @see app/Http/Controllers/ApiTokenController.php:15
 * @route '/user/api-tokens'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ApiTokenController::index
 * @see app/Http/Controllers/ApiTokenController.php:15
 * @route '/user/api-tokens'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ApiTokenController::index
 * @see app/Http/Controllers/ApiTokenController.php:15
 * @route '/user/api-tokens'
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
* @see \App\Http\Controllers\ApiTokenController::store
 * @see app/Http/Controllers/ApiTokenController.php:29
 * @route '/user/api-tokens'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/user/api-tokens',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ApiTokenController::store
 * @see app/Http/Controllers/ApiTokenController.php:29
 * @route '/user/api-tokens'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ApiTokenController::store
 * @see app/Http/Controllers/ApiTokenController.php:29
 * @route '/user/api-tokens'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ApiTokenController::store
 * @see app/Http/Controllers/ApiTokenController.php:29
 * @route '/user/api-tokens'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ApiTokenController::store
 * @see app/Http/Controllers/ApiTokenController.php:29
 * @route '/user/api-tokens'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\ApiTokenController::update
 * @see app/Http/Controllers/ApiTokenController.php:43
 * @route '/user/api-tokens/{token}'
 */
export const update = (args: { token: number | { id: number } } | [token: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/user/api-tokens/{token}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\ApiTokenController::update
 * @see app/Http/Controllers/ApiTokenController.php:43
 * @route '/user/api-tokens/{token}'
 */
update.url = (args: { token: number | { id: number } } | [token: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { token: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { token: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    token: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        token: typeof args.token === 'object'
                ? args.token.id
                : args.token,
                }

    return update.definition.url
            .replace('{token}', parsedArgs.token.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ApiTokenController::update
 * @see app/Http/Controllers/ApiTokenController.php:43
 * @route '/user/api-tokens/{token}'
 */
update.put = (args: { token: number | { id: number } } | [token: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\ApiTokenController::update
 * @see app/Http/Controllers/ApiTokenController.php:43
 * @route '/user/api-tokens/{token}'
 */
    const updateForm = (args: { token: number | { id: number } } | [token: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ApiTokenController::update
 * @see app/Http/Controllers/ApiTokenController.php:43
 * @route '/user/api-tokens/{token}'
 */
        updateForm.put = (args: { token: number | { id: number } } | [token: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\ApiTokenController::destroy
 * @see app/Http/Controllers/ApiTokenController.php:58
 * @route '/user/api-tokens/{token}'
 */
export const destroy = (args: { token: number | { id: number } } | [token: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/user/api-tokens/{token}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ApiTokenController::destroy
 * @see app/Http/Controllers/ApiTokenController.php:58
 * @route '/user/api-tokens/{token}'
 */
destroy.url = (args: { token: number | { id: number } } | [token: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { token: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { token: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    token: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        token: typeof args.token === 'object'
                ? args.token.id
                : args.token,
                }

    return destroy.definition.url
            .replace('{token}', parsedArgs.token.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ApiTokenController::destroy
 * @see app/Http/Controllers/ApiTokenController.php:58
 * @route '/user/api-tokens/{token}'
 */
destroy.delete = (args: { token: number | { id: number } } | [token: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\ApiTokenController::destroy
 * @see app/Http/Controllers/ApiTokenController.php:58
 * @route '/user/api-tokens/{token}'
 */
    const destroyForm = (args: { token: number | { id: number } } | [token: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ApiTokenController::destroy
 * @see app/Http/Controllers/ApiTokenController.php:58
 * @route '/user/api-tokens/{token}'
 */
        destroyForm.delete = (args: { token: number | { id: number } } | [token: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const apiTokens = {
    index: Object.assign(index, index),
store: Object.assign(store, store),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default apiTokens