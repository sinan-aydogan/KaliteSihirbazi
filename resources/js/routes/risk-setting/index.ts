import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\RiskSettingController::index
 * @see app/Http/Controllers/RiskSettingController.php:12
 * @route '/risk/setting'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/risk/setting',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\RiskSettingController::index
 * @see app/Http/Controllers/RiskSettingController.php:12
 * @route '/risk/setting'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\RiskSettingController::index
 * @see app/Http/Controllers/RiskSettingController.php:12
 * @route '/risk/setting'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\RiskSettingController::index
 * @see app/Http/Controllers/RiskSettingController.php:12
 * @route '/risk/setting'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\RiskSettingController::index
 * @see app/Http/Controllers/RiskSettingController.php:12
 * @route '/risk/setting'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\RiskSettingController::index
 * @see app/Http/Controllers/RiskSettingController.php:12
 * @route '/risk/setting'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\RiskSettingController::index
 * @see app/Http/Controllers/RiskSettingController.php:12
 * @route '/risk/setting'
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
* @see \App\Http\Controllers\RiskSettingController::update
 * @see app/Http/Controllers/RiskSettingController.php:21
 * @route '/risk/setting'
 */
export const update = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

update.definition = {
    methods: ["post"],
    url: '/risk/setting',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\RiskSettingController::update
 * @see app/Http/Controllers/RiskSettingController.php:21
 * @route '/risk/setting'
 */
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\RiskSettingController::update
 * @see app/Http/Controllers/RiskSettingController.php:21
 * @route '/risk/setting'
 */
update.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\RiskSettingController::update
 * @see app/Http/Controllers/RiskSettingController.php:21
 * @route '/risk/setting'
 */
    const updateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\RiskSettingController::update
 * @see app/Http/Controllers/RiskSettingController.php:21
 * @route '/risk/setting'
 */
        updateForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(options),
            method: 'post',
        })
    
    update.form = updateForm
const riskSetting = {
    index: Object.assign(index, index),
update: Object.assign(update, update),
}

export default riskSetting