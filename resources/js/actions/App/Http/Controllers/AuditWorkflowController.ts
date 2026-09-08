import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\AuditWorkflowController::start
 * @see app/Http/Controllers/AuditWorkflowController.php:16
 * @route '/audit/{audit}/start'
 */
export const start = (args: { audit: number | { id: number } } | [audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: start.url(args, options),
    method: 'post',
})

start.definition = {
    methods: ["post"],
    url: '/audit/{audit}/start',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AuditWorkflowController::start
 * @see app/Http/Controllers/AuditWorkflowController.php:16
 * @route '/audit/{audit}/start'
 */
start.url = (args: { audit: number | { id: number } } | [audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return start.definition.url
            .replace('{audit}', parsedArgs.audit.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditWorkflowController::start
 * @see app/Http/Controllers/AuditWorkflowController.php:16
 * @route '/audit/{audit}/start'
 */
start.post = (args: { audit: number | { id: number } } | [audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: start.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\AuditWorkflowController::start
 * @see app/Http/Controllers/AuditWorkflowController.php:16
 * @route '/audit/{audit}/start'
 */
    const startForm = (args: { audit: number | { id: number } } | [audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: start.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AuditWorkflowController::start
 * @see app/Http/Controllers/AuditWorkflowController.php:16
 * @route '/audit/{audit}/start'
 */
        startForm.post = (args: { audit: number | { id: number } } | [audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: start.url(args, options),
            method: 'post',
        })
    
    start.form = startForm
/**
* @see \App\Http\Controllers\AuditWorkflowController::complete
 * @see app/Http/Controllers/AuditWorkflowController.php:24
 * @route '/audit/{audit}/complete'
 */
export const complete = (args: { audit: number | { id: number } } | [audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: complete.url(args, options),
    method: 'post',
})

complete.definition = {
    methods: ["post"],
    url: '/audit/{audit}/complete',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AuditWorkflowController::complete
 * @see app/Http/Controllers/AuditWorkflowController.php:24
 * @route '/audit/{audit}/complete'
 */
complete.url = (args: { audit: number | { id: number } } | [audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return complete.definition.url
            .replace('{audit}', parsedArgs.audit.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditWorkflowController::complete
 * @see app/Http/Controllers/AuditWorkflowController.php:24
 * @route '/audit/{audit}/complete'
 */
complete.post = (args: { audit: number | { id: number } } | [audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: complete.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\AuditWorkflowController::complete
 * @see app/Http/Controllers/AuditWorkflowController.php:24
 * @route '/audit/{audit}/complete'
 */
    const completeForm = (args: { audit: number | { id: number } } | [audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: complete.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AuditWorkflowController::complete
 * @see app/Http/Controllers/AuditWorkflowController.php:24
 * @route '/audit/{audit}/complete'
 */
        completeForm.post = (args: { audit: number | { id: number } } | [audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: complete.url(args, options),
            method: 'post',
        })
    
    complete.form = completeForm
/**
* @see \App\Http\Controllers\AuditWorkflowController::cancel
 * @see app/Http/Controllers/AuditWorkflowController.php:32
 * @route '/audit/{audit}/cancel'
 */
export const cancel = (args: { audit: number | { id: number } } | [audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: cancel.url(args, options),
    method: 'post',
})

cancel.definition = {
    methods: ["post"],
    url: '/audit/{audit}/cancel',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AuditWorkflowController::cancel
 * @see app/Http/Controllers/AuditWorkflowController.php:32
 * @route '/audit/{audit}/cancel'
 */
cancel.url = (args: { audit: number | { id: number } } | [audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return cancel.definition.url
            .replace('{audit}', parsedArgs.audit.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditWorkflowController::cancel
 * @see app/Http/Controllers/AuditWorkflowController.php:32
 * @route '/audit/{audit}/cancel'
 */
cancel.post = (args: { audit: number | { id: number } } | [audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: cancel.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\AuditWorkflowController::cancel
 * @see app/Http/Controllers/AuditWorkflowController.php:32
 * @route '/audit/{audit}/cancel'
 */
    const cancelForm = (args: { audit: number | { id: number } } | [audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: cancel.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AuditWorkflowController::cancel
 * @see app/Http/Controllers/AuditWorkflowController.php:32
 * @route '/audit/{audit}/cancel'
 */
        cancelForm.post = (args: { audit: number | { id: number } } | [audit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: cancel.url(args, options),
            method: 'post',
        })
    
    cancel.form = cancelForm
const AuditWorkflowController = { start, complete, cancel }

export default AuditWorkflowController