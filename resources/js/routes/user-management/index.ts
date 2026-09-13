import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Setting\UserManagementController::index
 * @see app/Http/Controllers/Setting/UserManagementController.php:16
 * @route '/settings/users'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/settings/users',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Setting\UserManagementController::index
 * @see app/Http/Controllers/Setting/UserManagementController.php:16
 * @route '/settings/users'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Setting\UserManagementController::index
 * @see app/Http/Controllers/Setting/UserManagementController.php:16
 * @route '/settings/users'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Setting\UserManagementController::index
 * @see app/Http/Controllers/Setting/UserManagementController.php:16
 * @route '/settings/users'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Setting\UserManagementController::index
 * @see app/Http/Controllers/Setting/UserManagementController.php:16
 * @route '/settings/users'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Setting\UserManagementController::index
 * @see app/Http/Controllers/Setting/UserManagementController.php:16
 * @route '/settings/users'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Setting\UserManagementController::index
 * @see app/Http/Controllers/Setting/UserManagementController.php:16
 * @route '/settings/users'
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
* @see \App\Http\Controllers\Setting\UserManagementController::updateRoles
 * @see app/Http/Controllers/Setting/UserManagementController.php:33
 * @route '/settings/users/{user}/roles'
 */
export const updateRoles = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateRoles.url(args, options),
    method: 'put',
})

updateRoles.definition = {
    methods: ["put"],
    url: '/settings/users/{user}/roles',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Setting\UserManagementController::updateRoles
 * @see app/Http/Controllers/Setting/UserManagementController.php:33
 * @route '/settings/users/{user}/roles'
 */
updateRoles.url = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { user: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    user: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        user: typeof args.user === 'object'
                ? args.user.id
                : args.user,
                }

    return updateRoles.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Setting\UserManagementController::updateRoles
 * @see app/Http/Controllers/Setting/UserManagementController.php:33
 * @route '/settings/users/{user}/roles'
 */
updateRoles.put = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateRoles.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\Setting\UserManagementController::updateRoles
 * @see app/Http/Controllers/Setting/UserManagementController.php:33
 * @route '/settings/users/{user}/roles'
 */
    const updateRolesForm = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updateRoles.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Setting\UserManagementController::updateRoles
 * @see app/Http/Controllers/Setting/UserManagementController.php:33
 * @route '/settings/users/{user}/roles'
 */
        updateRolesForm.put = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updateRoles.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    updateRoles.form = updateRolesForm
const userManagement = {
    index: Object.assign(index, index),
updateRoles: Object.assign(updateRoles, updateRoles),
}

export default userManagement