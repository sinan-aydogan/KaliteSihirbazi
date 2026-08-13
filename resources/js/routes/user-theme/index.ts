import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\User\UpdateActiveThemeController::__invoke
* @see app/Http/Controllers/User/UpdateActiveThemeController.php:16
* @route '/user-theme-update'
*/
export const update = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

update.definition = {
    methods: ["post"],
    url: '/user-theme-update',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\User\UpdateActiveThemeController::__invoke
* @see app/Http/Controllers/User/UpdateActiveThemeController.php:16
* @route '/user-theme-update'
*/
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\User\UpdateActiveThemeController::__invoke
* @see app/Http/Controllers/User/UpdateActiveThemeController.php:16
* @route '/user-theme-update'
*/
update.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\User\UpdateActiveThemeController::__invoke
* @see app/Http/Controllers/User/UpdateActiveThemeController.php:16
* @route '/user-theme-update'
*/
const updateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\User\UpdateActiveThemeController::__invoke
* @see app/Http/Controllers/User/UpdateActiveThemeController.php:16
* @route '/user-theme-update'
*/
updateForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(options),
    method: 'post',
})

update.form = updateForm

const userTheme = {
    update: Object.assign(update, update),
}

export default userTheme