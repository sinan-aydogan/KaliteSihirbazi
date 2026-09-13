import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\EquipmentAreaController::update
 * @see app/Http/Controllers/EquipmentAreaController.php:24
 * @route '/equipment/{equipmentType}/{equipmentId}/areas'
 */
export const update = (args: { equipmentType: string | number, equipmentId: string | number } | [equipmentType: string | number, equipmentId: string | number ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/equipment/{equipmentType}/{equipmentId}/areas',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\EquipmentAreaController::update
 * @see app/Http/Controllers/EquipmentAreaController.php:24
 * @route '/equipment/{equipmentType}/{equipmentId}/areas'
 */
update.url = (args: { equipmentType: string | number, equipmentId: string | number } | [equipmentType: string | number, equipmentId: string | number ], options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{equipmentType}', parsedArgs.equipmentType.toString())
            .replace('{equipmentId}', parsedArgs.equipmentId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\EquipmentAreaController::update
 * @see app/Http/Controllers/EquipmentAreaController.php:24
 * @route '/equipment/{equipmentType}/{equipmentId}/areas'
 */
update.put = (args: { equipmentType: string | number, equipmentId: string | number } | [equipmentType: string | number, equipmentId: string | number ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\EquipmentAreaController::update
 * @see app/Http/Controllers/EquipmentAreaController.php:24
 * @route '/equipment/{equipmentType}/{equipmentId}/areas'
 */
    const updateForm = (args: { equipmentType: string | number, equipmentId: string | number } | [equipmentType: string | number, equipmentId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\EquipmentAreaController::update
 * @see app/Http/Controllers/EquipmentAreaController.php:24
 * @route '/equipment/{equipmentType}/{equipmentId}/areas'
 */
        updateForm.put = (args: { equipmentType: string | number, equipmentId: string | number } | [equipmentType: string | number, equipmentId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
const EquipmentAreaController = { update }

export default EquipmentAreaController