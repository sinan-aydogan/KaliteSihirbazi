import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\AuditSettingController::index
 * @see app/Http/Controllers/AuditSettingController.php:12
 * @route '/audit/setting'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/audit/setting',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AuditSettingController::index
 * @see app/Http/Controllers/AuditSettingController.php:12
 * @route '/audit/setting'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditSettingController::index
 * @see app/Http/Controllers/AuditSettingController.php:12
 * @route '/audit/setting'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AuditSettingController::index
 * @see app/Http/Controllers/AuditSettingController.php:12
 * @route '/audit/setting'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AuditSettingController::index
 * @see app/Http/Controllers/AuditSettingController.php:12
 * @route '/audit/setting'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AuditSettingController::index
 * @see app/Http/Controllers/AuditSettingController.php:12
 * @route '/audit/setting'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AuditSettingController::index
 * @see app/Http/Controllers/AuditSettingController.php:12
 * @route '/audit/setting'
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
* @see \App\Http\Controllers\AuditSettingController::update
 * @see app/Http/Controllers/AuditSettingController.php:21
 * @route '/audit/setting'
 */
export const update = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

update.definition = {
    methods: ["post"],
    url: '/audit/setting',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AuditSettingController::update
 * @see app/Http/Controllers/AuditSettingController.php:21
 * @route '/audit/setting'
 */
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditSettingController::update
 * @see app/Http/Controllers/AuditSettingController.php:21
 * @route '/audit/setting'
 */
update.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\AuditSettingController::update
 * @see app/Http/Controllers/AuditSettingController.php:21
 * @route '/audit/setting'
 */
    const updateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AuditSettingController::update
 * @see app/Http/Controllers/AuditSettingController.php:21
 * @route '/audit/setting'
 */
        updateForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(options),
            method: 'post',
        })
    
    update.form = updateForm
const auditSetting = {
    index: Object.assign(index, index),
update: Object.assign(update, update),
}

export default auditSetting