import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Setting\GlobalSettingController::index
* @see app/Http/Controllers/Setting/GlobalSettingController.php:19
* @route '/settings'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Setting\GlobalSettingController::index
* @see app/Http/Controllers/Setting/GlobalSettingController.php:19
* @route '/settings'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Setting\GlobalSettingController::index
* @see app/Http/Controllers/Setting/GlobalSettingController.php:19
* @route '/settings'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Setting\GlobalSettingController::index
* @see app/Http/Controllers/Setting/GlobalSettingController.php:19
* @route '/settings'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Setting\GlobalSettingController::index
* @see app/Http/Controllers/Setting/GlobalSettingController.php:19
* @route '/settings'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Setting\GlobalSettingController::index
* @see app/Http/Controllers/Setting/GlobalSettingController.php:19
* @route '/settings'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Setting\GlobalSettingController::index
* @see app/Http/Controllers/Setting/GlobalSettingController.php:19
* @route '/settings'
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
* @see \App\Http\Controllers\Setting\GlobalSettingController::mediaUpload
* @see app/Http/Controllers/Setting/GlobalSettingController.php:59
* @route '/settings/media-upload/{type}'
*/
export const mediaUpload = (args: { type: string | number } | [type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: mediaUpload.url(args, options),
    method: 'post',
})

mediaUpload.definition = {
    methods: ["post"],
    url: '/settings/media-upload/{type}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Setting\GlobalSettingController::mediaUpload
* @see app/Http/Controllers/Setting/GlobalSettingController.php:59
* @route '/settings/media-upload/{type}'
*/
mediaUpload.url = (args: { type: string | number } | [type: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { type: args }
    }

    if (Array.isArray(args)) {
        args = {
            type: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        type: args.type,
    }

    return mediaUpload.definition.url
            .replace('{type}', parsedArgs.type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Setting\GlobalSettingController::mediaUpload
* @see app/Http/Controllers/Setting/GlobalSettingController.php:59
* @route '/settings/media-upload/{type}'
*/
mediaUpload.post = (args: { type: string | number } | [type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: mediaUpload.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Setting\GlobalSettingController::mediaUpload
* @see app/Http/Controllers/Setting/GlobalSettingController.php:59
* @route '/settings/media-upload/{type}'
*/
const mediaUploadForm = (args: { type: string | number } | [type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: mediaUpload.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Setting\GlobalSettingController::mediaUpload
* @see app/Http/Controllers/Setting/GlobalSettingController.php:59
* @route '/settings/media-upload/{type}'
*/
mediaUploadForm.post = (args: { type: string | number } | [type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: mediaUpload.url(args, options),
    method: 'post',
})

mediaUpload.form = mediaUploadForm

/**
* @see \App\Http\Controllers\Setting\GlobalSettingController::getSetting
* @see app/Http/Controllers/Setting/GlobalSettingController.php:27
* @route '/settings/get-setting'
*/
export const getSetting = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getSetting.url(options),
    method: 'get',
})

getSetting.definition = {
    methods: ["get","head"],
    url: '/settings/get-setting',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Setting\GlobalSettingController::getSetting
* @see app/Http/Controllers/Setting/GlobalSettingController.php:27
* @route '/settings/get-setting'
*/
getSetting.url = (options?: RouteQueryOptions) => {
    return getSetting.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Setting\GlobalSettingController::getSetting
* @see app/Http/Controllers/Setting/GlobalSettingController.php:27
* @route '/settings/get-setting'
*/
getSetting.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getSetting.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Setting\GlobalSettingController::getSetting
* @see app/Http/Controllers/Setting/GlobalSettingController.php:27
* @route '/settings/get-setting'
*/
getSetting.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getSetting.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Setting\GlobalSettingController::getSetting
* @see app/Http/Controllers/Setting/GlobalSettingController.php:27
* @route '/settings/get-setting'
*/
const getSettingForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getSetting.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Setting\GlobalSettingController::getSetting
* @see app/Http/Controllers/Setting/GlobalSettingController.php:27
* @route '/settings/get-setting'
*/
getSettingForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getSetting.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Setting\GlobalSettingController::getSetting
* @see app/Http/Controllers/Setting/GlobalSettingController.php:27
* @route '/settings/get-setting'
*/
getSettingForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getSetting.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

getSetting.form = getSettingForm

const globalSetting = {
    index: Object.assign(index, index),
    mediaUpload: Object.assign(mediaUpload, mediaUpload),
    getSetting: Object.assign(getSetting, getSetting),
}

export default globalSetting