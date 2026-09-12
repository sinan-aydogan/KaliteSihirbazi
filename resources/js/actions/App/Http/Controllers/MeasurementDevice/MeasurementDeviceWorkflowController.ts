import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceWorkflowController::decommission
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceWorkflowController.php:17
 * @route '/measurement-device/{measurementDevice}/decommission'
 */
export const decommission = (args: { measurementDevice: number | { id: number } } | [measurementDevice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: decommission.url(args, options),
    method: 'post',
})

decommission.definition = {
    methods: ["post"],
    url: '/measurement-device/{measurementDevice}/decommission',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceWorkflowController::decommission
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceWorkflowController.php:17
 * @route '/measurement-device/{measurementDevice}/decommission'
 */
decommission.url = (args: { measurementDevice: number | { id: number } } | [measurementDevice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return decommission.definition.url
            .replace('{measurementDevice}', parsedArgs.measurementDevice.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceWorkflowController::decommission
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceWorkflowController.php:17
 * @route '/measurement-device/{measurementDevice}/decommission'
 */
decommission.post = (args: { measurementDevice: number | { id: number } } | [measurementDevice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: decommission.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceWorkflowController::decommission
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceWorkflowController.php:17
 * @route '/measurement-device/{measurementDevice}/decommission'
 */
    const decommissionForm = (args: { measurementDevice: number | { id: number } } | [measurementDevice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: decommission.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceWorkflowController::decommission
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceWorkflowController.php:17
 * @route '/measurement-device/{measurementDevice}/decommission'
 */
        decommissionForm.post = (args: { measurementDevice: number | { id: number } } | [measurementDevice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: decommission.url(args, options),
            method: 'post',
        })
    
    decommission.form = decommissionForm
/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceWorkflowController::reactivate
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceWorkflowController.php:26
 * @route '/measurement-device/{measurementDevice}/reactivate'
 */
export const reactivate = (args: { measurementDevice: number | { id: number } } | [measurementDevice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reactivate.url(args, options),
    method: 'post',
})

reactivate.definition = {
    methods: ["post"],
    url: '/measurement-device/{measurementDevice}/reactivate',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceWorkflowController::reactivate
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceWorkflowController.php:26
 * @route '/measurement-device/{measurementDevice}/reactivate'
 */
reactivate.url = (args: { measurementDevice: number | { id: number } } | [measurementDevice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return reactivate.definition.url
            .replace('{measurementDevice}', parsedArgs.measurementDevice.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceWorkflowController::reactivate
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceWorkflowController.php:26
 * @route '/measurement-device/{measurementDevice}/reactivate'
 */
reactivate.post = (args: { measurementDevice: number | { id: number } } | [measurementDevice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reactivate.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceWorkflowController::reactivate
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceWorkflowController.php:26
 * @route '/measurement-device/{measurementDevice}/reactivate'
 */
    const reactivateForm = (args: { measurementDevice: number | { id: number } } | [measurementDevice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: reactivate.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MeasurementDevice\MeasurementDeviceWorkflowController::reactivate
 * @see app/Http/Controllers/MeasurementDevice/MeasurementDeviceWorkflowController.php:26
 * @route '/measurement-device/{measurementDevice}/reactivate'
 */
        reactivateForm.post = (args: { measurementDevice: number | { id: number } } | [measurementDevice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: reactivate.url(args, options),
            method: 'post',
        })
    
    reactivate.form = reactivateForm
const MeasurementDeviceWorkflowController = { decommission, reactivate }

export default MeasurementDeviceWorkflowController