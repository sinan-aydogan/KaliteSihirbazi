import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Document\DocumentTagSettingController::index
 * @see app/Http/Controllers/Document/DocumentTagSettingController.php:20
 * @route '/document/setting/tags'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/document/setting/tags',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Document\DocumentTagSettingController::index
 * @see app/Http/Controllers/Document/DocumentTagSettingController.php:20
 * @route '/document/setting/tags'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Document\DocumentTagSettingController::index
 * @see app/Http/Controllers/Document/DocumentTagSettingController.php:20
 * @route '/document/setting/tags'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Document\DocumentTagSettingController::index
 * @see app/Http/Controllers/Document/DocumentTagSettingController.php:20
 * @route '/document/setting/tags'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Document\DocumentTagSettingController::index
 * @see app/Http/Controllers/Document/DocumentTagSettingController.php:20
 * @route '/document/setting/tags'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Document\DocumentTagSettingController::index
 * @see app/Http/Controllers/Document/DocumentTagSettingController.php:20
 * @route '/document/setting/tags'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Document\DocumentTagSettingController::index
 * @see app/Http/Controllers/Document/DocumentTagSettingController.php:20
 * @route '/document/setting/tags'
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
* @see \App\Http\Controllers\Document\DocumentTagSettingController::update
 * @see app/Http/Controllers/Document/DocumentTagSettingController.php:30
 * @route '/document/setting/tags'
 */
export const update = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

update.definition = {
    methods: ["post"],
    url: '/document/setting/tags',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Document\DocumentTagSettingController::update
 * @see app/Http/Controllers/Document/DocumentTagSettingController.php:30
 * @route '/document/setting/tags'
 */
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Document\DocumentTagSettingController::update
 * @see app/Http/Controllers/Document/DocumentTagSettingController.php:30
 * @route '/document/setting/tags'
 */
update.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Document\DocumentTagSettingController::update
 * @see app/Http/Controllers/Document/DocumentTagSettingController.php:30
 * @route '/document/setting/tags'
 */
    const updateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Document\DocumentTagSettingController::update
 * @see app/Http/Controllers/Document/DocumentTagSettingController.php:30
 * @route '/document/setting/tags'
 */
        updateForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(options),
            method: 'post',
        })
    
    update.form = updateForm
const DocumentTagSettingController = { index, update }

export default DocumentTagSettingController