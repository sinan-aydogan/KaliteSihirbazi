import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleSettingController::index
 * @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleSettingController.php:12
 * @route '/vehicle/setting'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/vehicle/setting',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleSettingController::index
 * @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleSettingController.php:12
 * @route '/vehicle/setting'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleSettingController::index
 * @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleSettingController.php:12
 * @route '/vehicle/setting'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleSettingController::index
 * @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleSettingController.php:12
 * @route '/vehicle/setting'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleSettingController::index
 * @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleSettingController.php:12
 * @route '/vehicle/setting'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleSettingController::index
 * @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleSettingController.php:12
 * @route '/vehicle/setting'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleSettingController::index
 * @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleSettingController.php:12
 * @route '/vehicle/setting'
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
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleSettingController::update
 * @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleSettingController.php:0
 * @route '/vehicle/setting'
 */
export const update = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

update.definition = {
    methods: ["post"],
    url: '/vehicle/setting',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleSettingController::update
 * @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleSettingController.php:0
 * @route '/vehicle/setting'
 */
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleSettingController::update
 * @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleSettingController.php:0
 * @route '/vehicle/setting'
 */
update.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleSettingController::update
 * @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleSettingController.php:0
 * @route '/vehicle/setting'
 */
    const updateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\BusinessManagement\Vehicle\VehicleSettingController::update
 * @see app/Http/Controllers/BusinessManagement/Vehicle/VehicleSettingController.php:0
 * @route '/vehicle/setting'
 */
        updateForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(options),
            method: 'post',
        })
    
    update.form = updateForm
const vehicleSetting = {
    index: Object.assign(index, index),
update: Object.assign(update, update),
}

export default vehicleSetting