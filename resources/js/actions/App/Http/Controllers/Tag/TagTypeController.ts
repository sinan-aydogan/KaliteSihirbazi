import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Tag\TagTypeController::index
 * @see app/Http/Controllers/Tag/TagTypeController.php:18
 * @route '/settings/tag-type'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/settings/tag-type',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Tag\TagTypeController::index
 * @see app/Http/Controllers/Tag/TagTypeController.php:18
 * @route '/settings/tag-type'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Tag\TagTypeController::index
 * @see app/Http/Controllers/Tag/TagTypeController.php:18
 * @route '/settings/tag-type'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Tag\TagTypeController::index
 * @see app/Http/Controllers/Tag/TagTypeController.php:18
 * @route '/settings/tag-type'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Tag\TagTypeController::index
 * @see app/Http/Controllers/Tag/TagTypeController.php:18
 * @route '/settings/tag-type'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Tag\TagTypeController::index
 * @see app/Http/Controllers/Tag/TagTypeController.php:18
 * @route '/settings/tag-type'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Tag\TagTypeController::index
 * @see app/Http/Controllers/Tag/TagTypeController.php:18
 * @route '/settings/tag-type'
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
* @see \App\Http\Controllers\Tag\TagTypeController::store
 * @see app/Http/Controllers/Tag/TagTypeController.php:27
 * @route '/settings/tag-type'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/settings/tag-type',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Tag\TagTypeController::store
 * @see app/Http/Controllers/Tag/TagTypeController.php:27
 * @route '/settings/tag-type'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Tag\TagTypeController::store
 * @see app/Http/Controllers/Tag/TagTypeController.php:27
 * @route '/settings/tag-type'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Tag\TagTypeController::store
 * @see app/Http/Controllers/Tag/TagTypeController.php:27
 * @route '/settings/tag-type'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Tag\TagTypeController::store
 * @see app/Http/Controllers/Tag/TagTypeController.php:27
 * @route '/settings/tag-type'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Tag\TagTypeController::update
 * @see app/Http/Controllers/Tag/TagTypeController.php:38
 * @route '/settings/tag-type/{tag_type}'
 */
export const update = (args: { tag_type: number | { id: number } } | [tag_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/settings/tag-type/{tag_type}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Tag\TagTypeController::update
 * @see app/Http/Controllers/Tag/TagTypeController.php:38
 * @route '/settings/tag-type/{tag_type}'
 */
update.url = (args: { tag_type: number | { id: number } } | [tag_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { tag_type: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { tag_type: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    tag_type: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        tag_type: typeof args.tag_type === 'object'
                ? args.tag_type.id
                : args.tag_type,
                }

    return update.definition.url
            .replace('{tag_type}', parsedArgs.tag_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Tag\TagTypeController::update
 * @see app/Http/Controllers/Tag/TagTypeController.php:38
 * @route '/settings/tag-type/{tag_type}'
 */
update.put = (args: { tag_type: number | { id: number } } | [tag_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Tag\TagTypeController::update
 * @see app/Http/Controllers/Tag/TagTypeController.php:38
 * @route '/settings/tag-type/{tag_type}'
 */
update.patch = (args: { tag_type: number | { id: number } } | [tag_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\Tag\TagTypeController::update
 * @see app/Http/Controllers/Tag/TagTypeController.php:38
 * @route '/settings/tag-type/{tag_type}'
 */
    const updateForm = (args: { tag_type: number | { id: number } } | [tag_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Tag\TagTypeController::update
 * @see app/Http/Controllers/Tag/TagTypeController.php:38
 * @route '/settings/tag-type/{tag_type}'
 */
        updateForm.put = (args: { tag_type: number | { id: number } } | [tag_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\Tag\TagTypeController::update
 * @see app/Http/Controllers/Tag/TagTypeController.php:38
 * @route '/settings/tag-type/{tag_type}'
 */
        updateForm.patch = (args: { tag_type: number | { id: number } } | [tag_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\Tag\TagTypeController::destroy
 * @see app/Http/Controllers/Tag/TagTypeController.php:49
 * @route '/settings/tag-type/{tag_type}'
 */
export const destroy = (args: { tag_type: number | { id: number } } | [tag_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/settings/tag-type/{tag_type}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Tag\TagTypeController::destroy
 * @see app/Http/Controllers/Tag/TagTypeController.php:49
 * @route '/settings/tag-type/{tag_type}'
 */
destroy.url = (args: { tag_type: number | { id: number } } | [tag_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { tag_type: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { tag_type: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    tag_type: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        tag_type: typeof args.tag_type === 'object'
                ? args.tag_type.id
                : args.tag_type,
                }

    return destroy.definition.url
            .replace('{tag_type}', parsedArgs.tag_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Tag\TagTypeController::destroy
 * @see app/Http/Controllers/Tag/TagTypeController.php:49
 * @route '/settings/tag-type/{tag_type}'
 */
destroy.delete = (args: { tag_type: number | { id: number } } | [tag_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Tag\TagTypeController::destroy
 * @see app/Http/Controllers/Tag/TagTypeController.php:49
 * @route '/settings/tag-type/{tag_type}'
 */
    const destroyForm = (args: { tag_type: number | { id: number } } | [tag_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Tag\TagTypeController::destroy
 * @see app/Http/Controllers/Tag/TagTypeController.php:49
 * @route '/settings/tag-type/{tag_type}'
 */
        destroyForm.delete = (args: { tag_type: number | { id: number } } | [tag_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const TagTypeController = { index, store, update, destroy }

export default TagTypeController