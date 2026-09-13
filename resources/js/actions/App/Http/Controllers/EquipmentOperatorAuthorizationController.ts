import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\EquipmentOperatorAuthorizationController::store
 * @see app/Http/Controllers/EquipmentOperatorAuthorizationController.php:25
 * @route '/equipment/{equipmentType}/{equipmentId}/operator-authorizations'
 */
export const store = (args: { equipmentType: string | number, equipmentId: string | number } | [equipmentType: string | number, equipmentId: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/equipment/{equipmentType}/{equipmentId}/operator-authorizations',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\EquipmentOperatorAuthorizationController::store
 * @see app/Http/Controllers/EquipmentOperatorAuthorizationController.php:25
 * @route '/equipment/{equipmentType}/{equipmentId}/operator-authorizations'
 */
store.url = (args: { equipmentType: string | number, equipmentId: string | number } | [equipmentType: string | number, equipmentId: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    equipmentType: args[0],
                    equipmentId: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        equipmentType: args.equipmentType,
                                equipmentId: args.equipmentId,
                }

    return store.definition.url
            .replace('{equipmentType}', parsedArgs.equipmentType.toString())
            .replace('{equipmentId}', parsedArgs.equipmentId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\EquipmentOperatorAuthorizationController::store
 * @see app/Http/Controllers/EquipmentOperatorAuthorizationController.php:25
 * @route '/equipment/{equipmentType}/{equipmentId}/operator-authorizations'
 */
store.post = (args: { equipmentType: string | number, equipmentId: string | number } | [equipmentType: string | number, equipmentId: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\EquipmentOperatorAuthorizationController::store
 * @see app/Http/Controllers/EquipmentOperatorAuthorizationController.php:25
 * @route '/equipment/{equipmentType}/{equipmentId}/operator-authorizations'
 */
    const storeForm = (args: { equipmentType: string | number, equipmentId: string | number } | [equipmentType: string | number, equipmentId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\EquipmentOperatorAuthorizationController::store
 * @see app/Http/Controllers/EquipmentOperatorAuthorizationController.php:25
 * @route '/equipment/{equipmentType}/{equipmentId}/operator-authorizations'
 */
        storeForm.post = (args: { equipmentType: string | number, equipmentId: string | number } | [equipmentType: string | number, equipmentId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(args, options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\EquipmentOperatorAuthorizationController::update
 * @see app/Http/Controllers/EquipmentOperatorAuthorizationController.php:41
 * @route '/equipment/{equipmentType}/{equipmentId}/operator-authorizations/{authorization}'
 */
export const update = (args: { equipmentType: string | number, equipmentId: string | number, authorization: number | { id: number } } | [equipmentType: string | number, equipmentId: string | number, authorization: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/equipment/{equipmentType}/{equipmentId}/operator-authorizations/{authorization}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\EquipmentOperatorAuthorizationController::update
 * @see app/Http/Controllers/EquipmentOperatorAuthorizationController.php:41
 * @route '/equipment/{equipmentType}/{equipmentId}/operator-authorizations/{authorization}'
 */
update.url = (args: { equipmentType: string | number, equipmentId: string | number, authorization: number | { id: number } } | [equipmentType: string | number, equipmentId: string | number, authorization: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    equipmentType: args[0],
                    equipmentId: args[1],
                    authorization: args[2],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        equipmentType: args.equipmentType,
                                equipmentId: args.equipmentId,
                                authorization: typeof args.authorization === 'object'
                ? args.authorization.id
                : args.authorization,
                }

    return update.definition.url
            .replace('{equipmentType}', parsedArgs.equipmentType.toString())
            .replace('{equipmentId}', parsedArgs.equipmentId.toString())
            .replace('{authorization}', parsedArgs.authorization.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\EquipmentOperatorAuthorizationController::update
 * @see app/Http/Controllers/EquipmentOperatorAuthorizationController.php:41
 * @route '/equipment/{equipmentType}/{equipmentId}/operator-authorizations/{authorization}'
 */
update.put = (args: { equipmentType: string | number, equipmentId: string | number, authorization: number | { id: number } } | [equipmentType: string | number, equipmentId: string | number, authorization: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\EquipmentOperatorAuthorizationController::update
 * @see app/Http/Controllers/EquipmentOperatorAuthorizationController.php:41
 * @route '/equipment/{equipmentType}/{equipmentId}/operator-authorizations/{authorization}'
 */
    const updateForm = (args: { equipmentType: string | number, equipmentId: string | number, authorization: number | { id: number } } | [equipmentType: string | number, equipmentId: string | number, authorization: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\EquipmentOperatorAuthorizationController::update
 * @see app/Http/Controllers/EquipmentOperatorAuthorizationController.php:41
 * @route '/equipment/{equipmentType}/{equipmentId}/operator-authorizations/{authorization}'
 */
        updateForm.put = (args: { equipmentType: string | number, equipmentId: string | number, authorization: number | { id: number } } | [equipmentType: string | number, equipmentId: string | number, authorization: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\EquipmentOperatorAuthorizationController::destroy
 * @see app/Http/Controllers/EquipmentOperatorAuthorizationController.php:52
 * @route '/equipment/{equipmentType}/{equipmentId}/operator-authorizations/{authorization}'
 */
export const destroy = (args: { equipmentType: string | number, equipmentId: string | number, authorization: number | { id: number } } | [equipmentType: string | number, equipmentId: string | number, authorization: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/equipment/{equipmentType}/{equipmentId}/operator-authorizations/{authorization}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\EquipmentOperatorAuthorizationController::destroy
 * @see app/Http/Controllers/EquipmentOperatorAuthorizationController.php:52
 * @route '/equipment/{equipmentType}/{equipmentId}/operator-authorizations/{authorization}'
 */
destroy.url = (args: { equipmentType: string | number, equipmentId: string | number, authorization: number | { id: number } } | [equipmentType: string | number, equipmentId: string | number, authorization: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    equipmentType: args[0],
                    equipmentId: args[1],
                    authorization: args[2],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        equipmentType: args.equipmentType,
                                equipmentId: args.equipmentId,
                                authorization: typeof args.authorization === 'object'
                ? args.authorization.id
                : args.authorization,
                }

    return destroy.definition.url
            .replace('{equipmentType}', parsedArgs.equipmentType.toString())
            .replace('{equipmentId}', parsedArgs.equipmentId.toString())
            .replace('{authorization}', parsedArgs.authorization.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\EquipmentOperatorAuthorizationController::destroy
 * @see app/Http/Controllers/EquipmentOperatorAuthorizationController.php:52
 * @route '/equipment/{equipmentType}/{equipmentId}/operator-authorizations/{authorization}'
 */
destroy.delete = (args: { equipmentType: string | number, equipmentId: string | number, authorization: number | { id: number } } | [equipmentType: string | number, equipmentId: string | number, authorization: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\EquipmentOperatorAuthorizationController::destroy
 * @see app/Http/Controllers/EquipmentOperatorAuthorizationController.php:52
 * @route '/equipment/{equipmentType}/{equipmentId}/operator-authorizations/{authorization}'
 */
    const destroyForm = (args: { equipmentType: string | number, equipmentId: string | number, authorization: number | { id: number } } | [equipmentType: string | number, equipmentId: string | number, authorization: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\EquipmentOperatorAuthorizationController::destroy
 * @see app/Http/Controllers/EquipmentOperatorAuthorizationController.php:52
 * @route '/equipment/{equipmentType}/{equipmentId}/operator-authorizations/{authorization}'
 */
        destroyForm.delete = (args: { equipmentType: string | number, equipmentId: string | number, authorization: number | { id: number } } | [equipmentType: string | number, equipmentId: string | number, authorization: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const EquipmentOperatorAuthorizationController = { store, update, destroy }

export default EquipmentOperatorAuthorizationController