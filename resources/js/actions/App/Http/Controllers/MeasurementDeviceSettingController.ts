import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\MeasurementDeviceSettingController::index
 * @see app/Http/Controllers/MeasurementDeviceSettingController.php:12
 * @route '/measurement-device/setting'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/measurement-device/setting',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MeasurementDeviceSettingController::index
 * @see app/Http/Controllers/MeasurementDeviceSettingController.php:12
 * @route '/measurement-device/setting'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDeviceSettingController::index
 * @see app/Http/Controllers/MeasurementDeviceSettingController.php:12
 * @route '/measurement-device/setting'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MeasurementDeviceSettingController::index
 * @see app/Http/Controllers/MeasurementDeviceSettingController.php:12
 * @route '/measurement-device/setting'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MeasurementDeviceSettingController::index
 * @see app/Http/Controllers/MeasurementDeviceSettingController.php:12
 * @route '/measurement-device/setting'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MeasurementDeviceSettingController::index
 * @see app/Http/Controllers/MeasurementDeviceSettingController.php:12
 * @route '/measurement-device/setting'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MeasurementDeviceSettingController::index
 * @see app/Http/Controllers/MeasurementDeviceSettingController.php:12
 * @route '/measurement-device/setting'
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
* @see \App\Http\Controllers\MeasurementDeviceSettingController::update
 * @see app/Http/Controllers/MeasurementDeviceSettingController.php:21
 * @route '/measurement-device/setting'
 */
export const update = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

update.definition = {
    methods: ["post"],
    url: '/measurement-device/setting',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MeasurementDeviceSettingController::update
 * @see app/Http/Controllers/MeasurementDeviceSettingController.php:21
 * @route '/measurement-device/setting'
 */
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDeviceSettingController::update
 * @see app/Http/Controllers/MeasurementDeviceSettingController.php:21
 * @route '/measurement-device/setting'
 */
update.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\MeasurementDeviceSettingController::update
 * @see app/Http/Controllers/MeasurementDeviceSettingController.php:21
 * @route '/measurement-device/setting'
 */
    const updateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MeasurementDeviceSettingController::update
 * @see app/Http/Controllers/MeasurementDeviceSettingController.php:21
 * @route '/measurement-device/setting'
 */
        updateForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(options),
            method: 'post',
        })
    
    update.form = updateForm
const MeasurementDeviceSettingController = { index, update }

export default MeasurementDeviceSettingController