import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\AccountController::show
* @see app/Http/Controllers/AccountController.php:17
* @route '/user/profile'
*/
export const show = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/user/profile',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AccountController::show
* @see app/Http/Controllers/AccountController.php:17
* @route '/user/profile'
*/
show.url = (options?: RouteQueryOptions) => {
    return show.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AccountController::show
* @see app/Http/Controllers/AccountController.php:17
* @route '/user/profile'
*/
show.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AccountController::show
* @see app/Http/Controllers/AccountController.php:17
* @route '/user/profile'
*/
show.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AccountController::show
* @see app/Http/Controllers/AccountController.php:17
* @route '/user/profile'
*/
const showForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AccountController::show
* @see app/Http/Controllers/AccountController.php:17
* @route '/user/profile'
*/
showForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AccountController::show
* @see app/Http/Controllers/AccountController.php:17
* @route '/user/profile'
*/
showForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

/**
* @see \App\Http\Controllers\AccountController::destroy
* @see app/Http/Controllers/AccountController.php:28
* @route '/user'
*/
export const destroy = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/user',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\AccountController::destroy
* @see app/Http/Controllers/AccountController.php:28
* @route '/user'
*/
destroy.url = (options?: RouteQueryOptions) => {
    return destroy.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AccountController::destroy
* @see app/Http/Controllers/AccountController.php:28
* @route '/user'
*/
destroy.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\AccountController::destroy
* @see app/Http/Controllers/AccountController.php:28
* @route '/user'
*/
const destroyForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AccountController::destroy
* @see app/Http/Controllers/AccountController.php:28
* @route '/user'
*/
destroyForm.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

/**
* @see \App\Http\Controllers\AccountController::destroyPhoto
* @see app/Http/Controllers/AccountController.php:58
* @route '/user/profile-photo'
*/
export const destroyPhoto = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyPhoto.url(options),
    method: 'delete',
})

destroyPhoto.definition = {
    methods: ["delete"],
    url: '/user/profile-photo',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\AccountController::destroyPhoto
* @see app/Http/Controllers/AccountController.php:58
* @route '/user/profile-photo'
*/
destroyPhoto.url = (options?: RouteQueryOptions) => {
    return destroyPhoto.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AccountController::destroyPhoto
* @see app/Http/Controllers/AccountController.php:58
* @route '/user/profile-photo'
*/
destroyPhoto.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyPhoto.url(options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\AccountController::destroyPhoto
* @see app/Http/Controllers/AccountController.php:58
* @route '/user/profile-photo'
*/
const destroyPhotoForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyPhoto.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AccountController::destroyPhoto
* @see app/Http/Controllers/AccountController.php:58
* @route '/user/profile-photo'
*/
destroyPhotoForm.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyPhoto.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroyPhoto.form = destroyPhotoForm

/**
* @see \App\Http\Controllers\AccountController::destroyOtherBrowserSessions
* @see app/Http/Controllers/AccountController.php:43
* @route '/user/other-browser-sessions'
*/
export const destroyOtherBrowserSessions = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyOtherBrowserSessions.url(options),
    method: 'delete',
})

destroyOtherBrowserSessions.definition = {
    methods: ["delete"],
    url: '/user/other-browser-sessions',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\AccountController::destroyOtherBrowserSessions
* @see app/Http/Controllers/AccountController.php:43
* @route '/user/other-browser-sessions'
*/
destroyOtherBrowserSessions.url = (options?: RouteQueryOptions) => {
    return destroyOtherBrowserSessions.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AccountController::destroyOtherBrowserSessions
* @see app/Http/Controllers/AccountController.php:43
* @route '/user/other-browser-sessions'
*/
destroyOtherBrowserSessions.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyOtherBrowserSessions.url(options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\AccountController::destroyOtherBrowserSessions
* @see app/Http/Controllers/AccountController.php:43
* @route '/user/other-browser-sessions'
*/
const destroyOtherBrowserSessionsForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyOtherBrowserSessions.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AccountController::destroyOtherBrowserSessions
* @see app/Http/Controllers/AccountController.php:43
* @route '/user/other-browser-sessions'
*/
destroyOtherBrowserSessionsForm.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyOtherBrowserSessions.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroyOtherBrowserSessions.form = destroyOtherBrowserSessionsForm

const AccountController = { show, destroy, destroyPhoto, destroyOtherBrowserSessions }

export default AccountController