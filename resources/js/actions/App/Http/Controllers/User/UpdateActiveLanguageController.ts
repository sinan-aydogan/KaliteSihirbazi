import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\User\UpdateActiveLanguageController::__invoke
* @see app/Http/Controllers/User/UpdateActiveLanguageController.php:16
* @route '/user-language-update'
*/
const UpdateActiveLanguageController = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: UpdateActiveLanguageController.url(options),
    method: 'post',
})

UpdateActiveLanguageController.definition = {
    methods: ["post"],
    url: '/user-language-update',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\User\UpdateActiveLanguageController::__invoke
* @see app/Http/Controllers/User/UpdateActiveLanguageController.php:16
* @route '/user-language-update'
*/
UpdateActiveLanguageController.url = (options?: RouteQueryOptions) => {
    return UpdateActiveLanguageController.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\User\UpdateActiveLanguageController::__invoke
* @see app/Http/Controllers/User/UpdateActiveLanguageController.php:16
* @route '/user-language-update'
*/
UpdateActiveLanguageController.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: UpdateActiveLanguageController.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\User\UpdateActiveLanguageController::__invoke
* @see app/Http/Controllers/User/UpdateActiveLanguageController.php:16
* @route '/user-language-update'
*/
const UpdateActiveLanguageControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: UpdateActiveLanguageController.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\User\UpdateActiveLanguageController::__invoke
* @see app/Http/Controllers/User/UpdateActiveLanguageController.php:16
* @route '/user-language-update'
*/
UpdateActiveLanguageControllerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: UpdateActiveLanguageController.url(options),
    method: 'post',
})

UpdateActiveLanguageController.form = UpdateActiveLanguageControllerForm

export default UpdateActiveLanguageController