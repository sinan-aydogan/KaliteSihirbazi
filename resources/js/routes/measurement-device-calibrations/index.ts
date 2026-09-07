import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationTaskController::index
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationTaskController.php:12
 * @route '/measurement-device/{measurementDevice}/calibration-tasks'
 */
export const index = (args: { measurementDevice: number | { id: number } } | [measurementDevice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/measurement-device/{measurementDevice}/calibration-tasks',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationTaskController::index
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationTaskController.php:12
 * @route '/measurement-device/{measurementDevice}/calibration-tasks'
 */
index.url = (args: { measurementDevice: number | { id: number } } | [measurementDevice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationTaskController::index
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationTaskController.php:12
 * @route '/measurement-device/{measurementDevice}/calibration-tasks'
 */
index.get = (args: { measurementDevice: number | { id: number } } | [measurementDevice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationTaskController::index
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationTaskController.php:12
 * @route '/measurement-device/{measurementDevice}/calibration-tasks'
 */
index.head = (args: { measurementDevice: number | { id: number } } | [measurementDevice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationTaskController::index
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationTaskController.php:12
 * @route '/measurement-device/{measurementDevice}/calibration-tasks'
 */
    const indexForm = (args: { measurementDevice: number | { id: number } } | [measurementDevice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationTaskController::index
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationTaskController.php:12
 * @route '/measurement-device/{measurementDevice}/calibration-tasks'
 */
        indexForm.get = (args: { measurementDevice: number | { id: number } } | [measurementDevice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationTaskController::index
 * @see app/Http/Controllers/MeasurementDevice/Calibration/CalibrationTaskController.php:12
 * @route '/measurement-device/{measurementDevice}/calibration-tasks'
 */
        indexForm.head = (args: { measurementDevice: number | { id: number } } | [measurementDevice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
const measurementDeviceCalibrations = {
    index: Object.assign(index, index),
}

export default measurementDeviceCalibrations