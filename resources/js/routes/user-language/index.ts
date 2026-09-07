import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\User\UpdateActiveLanguageController::__invoke
 * @see app/Http/Controllers/User/UpdateActiveLanguageController.php:16
 * @route '/user-language-update'
 */
export const update = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

update.definition = {
    methods: ["post"],
    url: '/user-language-update',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\User\UpdateActiveLanguageController::__invoke
 * @see app/Http/Controllers/User/UpdateActiveLanguageController.php:16
 * @route '/user-language-update'
 */
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\User\UpdateActiveLanguageController::__invoke
 * @see app/Http/Controllers/User/UpdateActiveLanguageController.php:16
 * @route '/user-language-update'
 */
update.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\User\UpdateActiveLanguageController::__invoke
 * @see app/Http/Controllers/User/UpdateActiveLanguageController.php:16
 * @route '/user-language-update'
 */
    const updateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\User\UpdateActiveLanguageController::__invoke
 * @see app/Http/Controllers/User/UpdateActiveLanguageController.php:16
 * @route '/user-language-update'
 */
        updateForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(options),
            method: 'post',
        })
    
    update.form = updateForm
const userLanguage = {
    update: Object.assign(update, update),
}

export default userLanguage