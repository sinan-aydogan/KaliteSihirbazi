import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\User\UpdateActiveThemeController::__invoke
* @see app/Http/Controllers/User/UpdateActiveThemeController.php:16
* @route '/user-theme-update'
*/
const UpdateActiveThemeController = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: UpdateActiveThemeController.url(options),
    method: 'post',
})

UpdateActiveThemeController.definition = {
    methods: ["post"],
    url: '/user-theme-update',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\User\UpdateActiveThemeController::__invoke
* @see app/Http/Controllers/User/UpdateActiveThemeController.php:16
* @route '/user-theme-update'
*/
UpdateActiveThemeController.url = (options?: RouteQueryOptions) => {
    return UpdateActiveThemeController.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\User\UpdateActiveThemeController::__invoke
* @see app/Http/Controllers/User/UpdateActiveThemeController.php:16
* @route '/user-theme-update'
*/
UpdateActiveThemeController.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: UpdateActiveThemeController.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\User\UpdateActiveThemeController::__invoke
* @see app/Http/Controllers/User/UpdateActiveThemeController.php:16
* @route '/user-theme-update'
*/
const UpdateActiveThemeControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: UpdateActiveThemeController.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\User\UpdateActiveThemeController::__invoke
* @see app/Http/Controllers/User/UpdateActiveThemeController.php:16
* @route '/user-theme-update'
*/
UpdateActiveThemeControllerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: UpdateActiveThemeController.url(options),
    method: 'post',
})

UpdateActiveThemeController.form = UpdateActiveThemeControllerForm

export default UpdateActiveThemeController