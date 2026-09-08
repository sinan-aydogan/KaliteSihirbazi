import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\AuditChecklistPrintController::template
 * @see app/Http/Controllers/AuditChecklistPrintController.php:10
 * @route '/audit-checklist-template/{auditChecklistTemplate}/print'
 */
export const template = (args: { auditChecklistTemplate: number | { id: number } } | [auditChecklistTemplate: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: template.url(args, options),
    method: 'get',
})

template.definition = {
    methods: ["get","head"],
    url: '/audit-checklist-template/{auditChecklistTemplate}/print',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AuditChecklistPrintController::template
 * @see app/Http/Controllers/AuditChecklistPrintController.php:10
 * @route '/audit-checklist-template/{auditChecklistTemplate}/print'
 */
template.url = (args: { auditChecklistTemplate: number | { id: number } } | [auditChecklistTemplate: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { auditChecklistTemplate: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { auditChecklistTemplate: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    auditChecklistTemplate: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        auditChecklistTemplate: typeof args.auditChecklistTemplate === 'object'
                ? args.auditChecklistTemplate.id
                : args.auditChecklistTemplate,
                }

    return template.definition.url
            .replace('{auditChecklistTemplate}', parsedArgs.auditChecklistTemplate.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditChecklistPrintController::template
 * @see app/Http/Controllers/AuditChecklistPrintController.php:10
 * @route '/audit-checklist-template/{auditChecklistTemplate}/print'
 */
template.get = (args: { auditChecklistTemplate: number | { id: number } } | [auditChecklistTemplate: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: template.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AuditChecklistPrintController::template
 * @see app/Http/Controllers/AuditChecklistPrintController.php:10
 * @route '/audit-checklist-template/{auditChecklistTemplate}/print'
 */
template.head = (args: { auditChecklistTemplate: number | { id: number } } | [auditChecklistTemplate: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: template.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AuditChecklistPrintController::template
 * @see app/Http/Controllers/AuditChecklistPrintController.php:10
 * @route '/audit-checklist-template/{auditChecklistTemplate}/print'
 */
    const templateForm = (args: { auditChecklistTemplate: number | { id: number } } | [auditChecklistTemplate: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: template.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AuditChecklistPrintController::template
 * @see app/Http/Controllers/AuditChecklistPrintController.php:10
 * @route '/audit-checklist-template/{auditChecklistTemplate}/print'
 */
        templateForm.get = (args: { auditChecklistTemplate: number | { id: number } } | [auditChecklistTemplate: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: template.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AuditChecklistPrintController::template
 * @see app/Http/Controllers/AuditChecklistPrintController.php:10
 * @route '/audit-checklist-template/{auditChecklistTemplate}/print'
 */
        templateForm.head = (args: { auditChecklistTemplate: number | { id: number } } | [auditChecklistTemplate: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: template.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    template.form = templateForm
/**
* @see \App\Http\Controllers\AuditChecklistPrintController::checklist
 * @see app/Http/Controllers/AuditChecklistPrintController.php:26
 * @route '/audit-checklist/{auditChecklist}/print'
 */
export const checklist = (args: { auditChecklist: number | { id: number } } | [auditChecklist: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: checklist.url(args, options),
    method: 'get',
})

checklist.definition = {
    methods: ["get","head"],
    url: '/audit-checklist/{auditChecklist}/print',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AuditChecklistPrintController::checklist
 * @see app/Http/Controllers/AuditChecklistPrintController.php:26
 * @route '/audit-checklist/{auditChecklist}/print'
 */
checklist.url = (args: { auditChecklist: number | { id: number } } | [auditChecklist: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return checklist.definition.url
            .replace('{auditChecklist}', parsedArgs.auditChecklist.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditChecklistPrintController::checklist
 * @see app/Http/Controllers/AuditChecklistPrintController.php:26
 * @route '/audit-checklist/{auditChecklist}/print'
 */
checklist.get = (args: { auditChecklist: number | { id: number } } | [auditChecklist: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: checklist.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AuditChecklistPrintController::checklist
 * @see app/Http/Controllers/AuditChecklistPrintController.php:26
 * @route '/audit-checklist/{auditChecklist}/print'
 */
checklist.head = (args: { auditChecklist: number | { id: number } } | [auditChecklist: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: checklist.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AuditChecklistPrintController::checklist
 * @see app/Http/Controllers/AuditChecklistPrintController.php:26
 * @route '/audit-checklist/{auditChecklist}/print'
 */
    const checklistForm = (args: { auditChecklist: number | { id: number } } | [auditChecklist: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: checklist.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AuditChecklistPrintController::checklist
 * @see app/Http/Controllers/AuditChecklistPrintController.php:26
 * @route '/audit-checklist/{auditChecklist}/print'
 */
        checklistForm.get = (args: { auditChecklist: number | { id: number } } | [auditChecklist: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: checklist.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AuditChecklistPrintController::checklist
 * @see app/Http/Controllers/AuditChecklistPrintController.php:26
 * @route '/audit-checklist/{auditChecklist}/print'
 */
        checklistForm.head = (args: { auditChecklist: number | { id: number } } | [auditChecklist: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: checklist.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    checklist.form = checklistForm
const AuditChecklistPrintController = { template, checklist }

export default AuditChecklistPrintController