import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Setting\GlobalSettingController::update
 * @see app/Http/Controllers/Setting/GlobalSettingController.php:45
 * @route '/settings/time'
 */
export const update = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

update.definition = {
    methods: ["post"],
    url: '/settings/time',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Setting\GlobalSettingController::update
 * @see app/Http/Controllers/Setting/GlobalSettingController.php:45
 * @route '/settings/time'
 */
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Setting\GlobalSettingController::update
 * @see app/Http/Controllers/Setting/GlobalSettingController.php:45
 * @route '/settings/time'
 */
update.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Setting\GlobalSettingController::update
 * @see app/Http/Controllers/Setting/GlobalSettingController.php:45
 * @route '/settings/time'
 */
    const updateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Setting\GlobalSettingController::update
 * @see app/Http/Controllers/Setting/GlobalSettingController.php:45
 * @route '/settings/time'
 */
        updateForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(options),
            method: 'post',
        })
    
    update.form = updateForm
const time = {
    update: Object.assign(update, update),
}

export default time