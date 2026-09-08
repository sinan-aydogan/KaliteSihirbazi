import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\AuditFirmAuditorController::index
 * @see app/Http/Controllers/AuditFirmAuditorController.php:13
 * @route '/audit-firm/{auditFirm}/auditors'
 */
export const index = (args: { auditFirm: number | { id: number } } | [auditFirm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/audit-firm/{auditFirm}/auditors',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AuditFirmAuditorController::index
 * @see app/Http/Controllers/AuditFirmAuditorController.php:13
 * @route '/audit-firm/{auditFirm}/auditors'
 */
index.url = (args: { auditFirm: number | { id: number } } | [auditFirm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { auditFirm: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { auditFirm: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    auditFirm: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        auditFirm: typeof args.auditFirm === 'object'
                ? args.auditFirm.id
                : args.auditFirm,
                }

    return index.definition.url
            .replace('{auditFirm}', parsedArgs.auditFirm.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditFirmAuditorController::index
 * @see app/Http/Controllers/AuditFirmAuditorController.php:13
 * @route '/audit-firm/{auditFirm}/auditors'
 */
index.get = (args: { auditFirm: number | { id: number } } | [auditFirm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AuditFirmAuditorController::index
 * @see app/Http/Controllers/AuditFirmAuditorController.php:13
 * @route '/audit-firm/{auditFirm}/auditors'
 */
index.head = (args: { auditFirm: number | { id: number } } | [auditFirm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AuditFirmAuditorController::index
 * @see app/Http/Controllers/AuditFirmAuditorController.php:13
 * @route '/audit-firm/{auditFirm}/auditors'
 */
    const indexForm = (args: { auditFirm: number | { id: number } } | [auditFirm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AuditFirmAuditorController::index
 * @see app/Http/Controllers/AuditFirmAuditorController.php:13
 * @route '/audit-firm/{auditFirm}/auditors'
 */
        indexForm.get = (args: { auditFirm: number | { id: number } } | [auditFirm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AuditFirmAuditorController::index
 * @see app/Http/Controllers/AuditFirmAuditorController.php:13
 * @route '/audit-firm/{auditFirm}/auditors'
 */
        indexForm.head = (args: { auditFirm: number | { id: number } } | [auditFirm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\AuditFirmAuditorController::store
 * @see app/Http/Controllers/AuditFirmAuditorController.php:29
 * @route '/audit-firm/{auditFirm}/auditors'
 */
export const store = (args: { auditFirm: number | { id: number } } | [auditFirm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/audit-firm/{auditFirm}/auditors',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AuditFirmAuditorController::store
 * @see app/Http/Controllers/AuditFirmAuditorController.php:29
 * @route '/audit-firm/{auditFirm}/auditors'
 */
store.url = (args: { auditFirm: number | { id: number } } | [auditFirm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { auditFirm: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { auditFirm: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    auditFirm: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        auditFirm: typeof args.auditFirm === 'object'
                ? args.auditFirm.id
                : args.auditFirm,
                }

    return store.definition.url
            .replace('{auditFirm}', parsedArgs.auditFirm.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditFirmAuditorController::store
 * @see app/Http/Controllers/AuditFirmAuditorController.php:29
 * @route '/audit-firm/{auditFirm}/auditors'
 */
store.post = (args: { auditFirm: number | { id: number } } | [auditFirm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\AuditFirmAuditorController::store
 * @see app/Http/Controllers/AuditFirmAuditorController.php:29
 * @route '/audit-firm/{auditFirm}/auditors'
 */
    const storeForm = (args: { auditFirm: number | { id: number } } | [auditFirm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AuditFirmAuditorController::store
 * @see app/Http/Controllers/AuditFirmAuditorController.php:29
 * @route '/audit-firm/{auditFirm}/auditors'
 */
        storeForm.post = (args: { auditFirm: number | { id: number } } | [auditFirm: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(args, options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\AuditFirmAuditorController::update
 * @see app/Http/Controllers/AuditFirmAuditorController.php:40
 * @route '/audit-firm-auditor/{auditFirmAuditor}'
 */
export const update = (args: { auditFirmAuditor: number | { id: number } } | [auditFirmAuditor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/audit-firm-auditor/{auditFirmAuditor}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\AuditFirmAuditorController::update
 * @see app/Http/Controllers/AuditFirmAuditorController.php:40
 * @route '/audit-firm-auditor/{auditFirmAuditor}'
 */
update.url = (args: { auditFirmAuditor: number | { id: number } } | [auditFirmAuditor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { auditFirmAuditor: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { auditFirmAuditor: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    auditFirmAuditor: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        auditFirmAuditor: typeof args.auditFirmAuditor === 'object'
                ? args.auditFirmAuditor.id
                : args.auditFirmAuditor,
                }

    return update.definition.url
            .replace('{auditFirmAuditor}', parsedArgs.auditFirmAuditor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditFirmAuditorController::update
 * @see app/Http/Controllers/AuditFirmAuditorController.php:40
 * @route '/audit-firm-auditor/{auditFirmAuditor}'
 */
update.put = (args: { auditFirmAuditor: number | { id: number } } | [auditFirmAuditor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\AuditFirmAuditorController::update
 * @see app/Http/Controllers/AuditFirmAuditorController.php:40
 * @route '/audit-firm-auditor/{auditFirmAuditor}'
 */
    const updateForm = (args: { auditFirmAuditor: number | { id: number } } | [auditFirmAuditor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AuditFirmAuditorController::update
 * @see app/Http/Controllers/AuditFirmAuditorController.php:40
 * @route '/audit-firm-auditor/{auditFirmAuditor}'
 */
        updateForm.put = (args: { auditFirmAuditor: number | { id: number } } | [auditFirmAuditor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\AuditFirmAuditorController::destroy
 * @see app/Http/Controllers/AuditFirmAuditorController.php:51
 * @route '/audit-firm-auditor/{auditFirmAuditor}'
 */
export const destroy = (args: { auditFirmAuditor: number | { id: number } } | [auditFirmAuditor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/audit-firm-auditor/{auditFirmAuditor}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\AuditFirmAuditorController::destroy
 * @see app/Http/Controllers/AuditFirmAuditorController.php:51
 * @route '/audit-firm-auditor/{auditFirmAuditor}'
 */
destroy.url = (args: { auditFirmAuditor: number | { id: number } } | [auditFirmAuditor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { auditFirmAuditor: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { auditFirmAuditor: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    auditFirmAuditor: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        auditFirmAuditor: typeof args.auditFirmAuditor === 'object'
                ? args.auditFirmAuditor.id
                : args.auditFirmAuditor,
                }

    return destroy.definition.url
            .replace('{auditFirmAuditor}', parsedArgs.auditFirmAuditor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditFirmAuditorController::destroy
 * @see app/Http/Controllers/AuditFirmAuditorController.php:51
 * @route '/audit-firm-auditor/{auditFirmAuditor}'
 */
destroy.delete = (args: { auditFirmAuditor: number | { id: number } } | [auditFirmAuditor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\AuditFirmAuditorController::destroy
 * @see app/Http/Controllers/AuditFirmAuditorController.php:51
 * @route '/audit-firm-auditor/{auditFirmAuditor}'
 */
    const destroyForm = (args: { auditFirmAuditor: number | { id: number } } | [auditFirmAuditor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AuditFirmAuditorController::destroy
 * @see app/Http/Controllers/AuditFirmAuditorController.php:51
 * @route '/audit-firm-auditor/{auditFirmAuditor}'
 */
        destroyForm.delete = (args: { auditFirmAuditor: number | { id: number } } | [auditFirmAuditor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
/**
* @see \App\Http\Controllers\AuditFirmAuditorController::deleteMedia
 * @see app/Http/Controllers/AuditFirmAuditorController.php:60
 * @route '/audit-firm-auditor/{auditFirmAuditor}/media/{mediaId}'
 */
export const deleteMedia = (args: { auditFirmAuditor: number | { id: number }, mediaId: string | number } | [auditFirmAuditor: number | { id: number }, mediaId: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMedia.url(args, options),
    method: 'delete',
})

deleteMedia.definition = {
    methods: ["delete"],
    url: '/audit-firm-auditor/{auditFirmAuditor}/media/{mediaId}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\AuditFirmAuditorController::deleteMedia
 * @see app/Http/Controllers/AuditFirmAuditorController.php:60
 * @route '/audit-firm-auditor/{auditFirmAuditor}/media/{mediaId}'
 */
deleteMedia.url = (args: { auditFirmAuditor: number | { id: number }, mediaId: string | number } | [auditFirmAuditor: number | { id: number }, mediaId: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    auditFirmAuditor: args[0],
                    mediaId: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        auditFirmAuditor: typeof args.auditFirmAuditor === 'object'
                ? args.auditFirmAuditor.id
                : args.auditFirmAuditor,
                                mediaId: args.mediaId,
                }

    return deleteMedia.definition.url
            .replace('{auditFirmAuditor}', parsedArgs.auditFirmAuditor.toString())
            .replace('{mediaId}', parsedArgs.mediaId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditFirmAuditorController::deleteMedia
 * @see app/Http/Controllers/AuditFirmAuditorController.php:60
 * @route '/audit-firm-auditor/{auditFirmAuditor}/media/{mediaId}'
 */
deleteMedia.delete = (args: { auditFirmAuditor: number | { id: number }, mediaId: string | number } | [auditFirmAuditor: number | { id: number }, mediaId: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMedia.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\AuditFirmAuditorController::deleteMedia
 * @see app/Http/Controllers/AuditFirmAuditorController.php:60
 * @route '/audit-firm-auditor/{auditFirmAuditor}/media/{mediaId}'
 */
    const deleteMediaForm = (args: { auditFirmAuditor: number | { id: number }, mediaId: string | number } | [auditFirmAuditor: number | { id: number }, mediaId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: deleteMedia.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AuditFirmAuditorController::deleteMedia
 * @see app/Http/Controllers/AuditFirmAuditorController.php:60
 * @route '/audit-firm-auditor/{auditFirmAuditor}/media/{mediaId}'
 */
        deleteMediaForm.delete = (args: { auditFirmAuditor: number | { id: number }, mediaId: string | number } | [auditFirmAuditor: number | { id: number }, mediaId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: deleteMedia.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    deleteMedia.form = deleteMediaForm
const AuditFirmAuditorController = { index, store, update, destroy, deleteMedia }

export default AuditFirmAuditorController