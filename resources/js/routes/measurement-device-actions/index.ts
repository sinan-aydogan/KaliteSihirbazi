import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\MeasurementDevice\Action\DeviceActionController::index
* @see app/Http/Controllers/MeasurementDevice/Action/DeviceActionController.php:11
* @route '/measurement-device/{measurementDevice}/device-actions'
*/
export const index = (args: { measurementDevice: string | number | { id: string | number } } | [measurementDevice: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/measurement-device/{measurementDevice}/device-actions',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MeasurementDevice\Action\DeviceActionController::index
* @see app/Http/Controllers/MeasurementDevice/Action/DeviceActionController.php:11
* @route '/measurement-device/{measurementDevice}/device-actions'
*/
index.url = (args: { measurementDevice: string | number | { id: string | number } } | [measurementDevice: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { measurementDevice: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { measurementDevice: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            measurementDevice: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        measurementDevice: typeof args.measurementDevice === 'object'
        ? args.measurementDevice.id
        : args.measurementDevice,
    }

    return index.definition.url
            .replace('{measurementDevice}', parsedArgs.measurementDevice.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDevice\Action\DeviceActionController::index
* @see app/Http/Controllers/MeasurementDevice/Action/DeviceActionController.php:11
* @route '/measurement-device/{measurementDevice}/device-actions'
*/
index.get = (args: { measurementDevice: string | number | { id: string | number } } | [measurementDevice: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MeasurementDevice\Action\DeviceActionController::index
* @see app/Http/Controllers/MeasurementDevice/Action/DeviceActionController.php:11
* @route '/measurement-device/{measurementDevice}/device-actions'
*/
index.head = (args: { measurementDevice: string | number | { id: string | number } } | [measurementDevice: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\MeasurementDevice\Action\DeviceActionController::index
* @see app/Http/Controllers/MeasurementDevice/Action/DeviceActionController.php:11
* @route '/measurement-device/{measurementDevice}/device-actions'
*/
const indexForm = (args: { measurementDevice: string | number | { id: string | number } } | [measurementDevice: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MeasurementDevice\Action\DeviceActionController::index
* @see app/Http/Controllers/MeasurementDevice/Action/DeviceActionController.php:11
* @route '/measurement-device/{measurementDevice}/device-actions'
*/
indexForm.get = (args: { measurementDevice: string | number | { id: string | number } } | [measurementDevice: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MeasurementDevice\Action\DeviceActionController::index
* @see app/Http/Controllers/MeasurementDevice/Action/DeviceActionController.php:11
* @route '/measurement-device/{measurementDevice}/device-actions'
*/
indexForm.head = (args: { measurementDevice: string | number | { id: string | number } } | [measurementDevice: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

const measurementDeviceActions = {
    index: Object.assign(index, index),
}

export default measurementDeviceActions