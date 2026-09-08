import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\AuditChecklistController::store
 * @see app/Http/Controllers/AuditChecklistController.php:16
 * @route '/audit/{audit}/checklists'
 */
export const store = (args: { audit: number | { id: number } } | [audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/audit/{audit}/checklists',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AuditChecklistController::store
 * @see app/Http/Controllers/AuditChecklistController.php:16
 * @route '/audit/{audit}/checklists'
 */
store.url = (args: { audit: number | { id: number } } | [audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { audit: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { audit: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    audit: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        audit: typeof args.audit === 'object'
                ? args.audit.id
                : args.audit,
                }

    return store.definition.url
            .replace('{audit}', parsedArgs.audit.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditChecklistController::store
 * @see app/Http/Controllers/AuditChecklistController.php:16
 * @route '/audit/{audit}/checklists'
 */
store.post = (args: { audit: number | { id: number } } | [audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\AuditChecklistController::store
 * @see app/Http/Controllers/AuditChecklistController.php:16
 * @route '/audit/{audit}/checklists'
 */
    const storeForm = (args: { audit: number | { id: number } } | [audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AuditChecklistController::store
 * @see app/Http/Controllers/AuditChecklistController.php:16
 * @route '/audit/{audit}/checklists'
 */
        storeForm.post = (args: { audit: number | { id: number } } | [audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(args, options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\AuditChecklistPrintController::print
 * @see app/Http/Controllers/AuditChecklistPrintController.php:26
 * @route '/audit-checklist/{auditChecklist}/print'
 */
export const print = (args: { auditChecklist: number | { id: number } } | [auditChecklist: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: print.url(args, options),
    method: 'get',
})

print.definition = {
    methods: ["get","head"],
    url: '/audit-checklist/{auditChecklist}/print',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AuditChecklistPrintController::print
 * @see app/Http/Controllers/AuditChecklistPrintController.php:26
 * @route '/audit-checklist/{auditChecklist}/print'
 */
print.url = (args: { auditChecklist: number | { id: number } } | [auditChecklist: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { auditChecklist: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { auditChecklist: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    auditChecklist: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        auditChecklist: typeof args.auditChecklist === 'object'
                ? args.auditChecklist.id
                : args.auditChecklist,
                }

    return print.definition.url
            .replace('{auditChecklist}', parsedArgs.auditChecklist.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditChecklistPrintController::print
 * @see app/Http/Controllers/AuditChecklistPrintController.php:26
 * @route '/audit-checklist/{auditChecklist}/print'
 */
print.get = (args: { auditChecklist: number | { id: number } } | [auditChecklist: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: print.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AuditChecklistPrintController::print
 * @see app/Http/Controllers/AuditChecklistPrintController.php:26
 * @route '/audit-checklist/{auditChecklist}/print'
 */
print.head = (args: { auditChecklist: number | { id: number } } | [auditChecklist: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: print.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AuditChecklistPrintController::print
 * @see app/Http/Controllers/AuditChecklistPrintController.php:26
 * @route '/audit-checklist/{auditChecklist}/print'
 */
    const printForm = (args: { auditChecklist: number | { id: number } } | [auditChecklist: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: print.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AuditChecklistPrintController::print
 * @see app/Http/Controllers/AuditChecklistPrintController.php:26
 * @route '/audit-checklist/{auditChecklist}/print'
 */
        printForm.get = (args: { auditChecklist: number | { id: number } } | [auditChecklist: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: print.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AuditChecklistPrintController::print
 * @see app/Http/Controllers/AuditChecklistPrintController.php:26
 * @route '/audit-checklist/{auditChecklist}/print'
 */
        printForm.head = (args: { auditChecklist: number | { id: number } } | [auditChecklist: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: print.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    print.form = printForm
const auditChecklist = {
    store: Object.assign(store, store),
print: Object.assign(print, print),
}

export default auditChecklist