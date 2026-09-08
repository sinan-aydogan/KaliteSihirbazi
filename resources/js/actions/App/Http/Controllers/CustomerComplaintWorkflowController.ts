import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\CustomerComplaintWorkflowController::acknowledge
 * @see app/Http/Controllers/CustomerComplaintWorkflowController.php:18
 * @route '/customer-complaint/{customerComplaint}/acknowledge'
 */
export const acknowledge = (args: { customerComplaint: number | { id: number } } | [customerComplaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: acknowledge.url(args, options),
    method: 'post',
})

acknowledge.definition = {
    methods: ["post"],
    url: '/customer-complaint/{customerComplaint}/acknowledge',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CustomerComplaintWorkflowController::acknowledge
 * @see app/Http/Controllers/CustomerComplaintWorkflowController.php:18
 * @route '/customer-complaint/{customerComplaint}/acknowledge'
 */
acknowledge.url = (args: { customerComplaint: number | { id: number } } | [customerComplaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { customerComplaint: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { customerComplaint: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    customerComplaint: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        customerComplaint: typeof args.customerComplaint === 'object'
                ? args.customerComplaint.id
                : args.customerComplaint,
                }

    return acknowledge.definition.url
            .replace('{customerComplaint}', parsedArgs.customerComplaint.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CustomerComplaintWorkflowController::acknowledge
 * @see app/Http/Controllers/CustomerComplaintWorkflowController.php:18
 * @route '/customer-complaint/{customerComplaint}/acknowledge'
 */
acknowledge.post = (args: { customerComplaint: number | { id: number } } | [customerComplaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: acknowledge.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CustomerComplaintWorkflowController::acknowledge
 * @see app/Http/Controllers/CustomerComplaintWorkflowController.php:18
 * @route '/customer-complaint/{customerComplaint}/acknowledge'
 */
    const acknowledgeForm = (args: { customerComplaint: number | { id: number } } | [customerComplaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: acknowledge.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CustomerComplaintWorkflowController::acknowledge
 * @see app/Http/Controllers/CustomerComplaintWorkflowController.php:18
 * @route '/customer-complaint/{customerComplaint}/acknowledge'
 */
        acknowledgeForm.post = (args: { customerComplaint: number | { id: number } } | [customerComplaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: acknowledge.url(args, options),
            method: 'post',
        })
    
    acknowledge.form = acknowledgeForm
/**
* @see \App\Http\Controllers\CustomerComplaintWorkflowController::resolve
 * @see app/Http/Controllers/CustomerComplaintWorkflowController.php:23
 * @route '/customer-complaint/{customerComplaint}/resolve'
 */
export const resolve = (args: { customerComplaint: number | { id: number } } | [customerComplaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: resolve.url(args, options),
    method: 'post',
})

resolve.definition = {
    methods: ["post"],
    url: '/customer-complaint/{customerComplaint}/resolve',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CustomerComplaintWorkflowController::resolve
 * @see app/Http/Controllers/CustomerComplaintWorkflowController.php:23
 * @route '/customer-complaint/{customerComplaint}/resolve'
 */
resolve.url = (args: { customerComplaint: number | { id: number } } | [customerComplaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { customerComplaint: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { customerComplaint: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    customerComplaint: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        customerComplaint: typeof args.customerComplaint === 'object'
                ? args.customerComplaint.id
                : args.customerComplaint,
                }

    return resolve.definition.url
            .replace('{customerComplaint}', parsedArgs.customerComplaint.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CustomerComplaintWorkflowController::resolve
 * @see app/Http/Controllers/CustomerComplaintWorkflowController.php:23
 * @route '/customer-complaint/{customerComplaint}/resolve'
 */
resolve.post = (args: { customerComplaint: number | { id: number } } | [customerComplaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: resolve.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CustomerComplaintWorkflowController::resolve
 * @see app/Http/Controllers/CustomerComplaintWorkflowController.php:23
 * @route '/customer-complaint/{customerComplaint}/resolve'
 */
    const resolveForm = (args: { customerComplaint: number | { id: number } } | [customerComplaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: resolve.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CustomerComplaintWorkflowController::resolve
 * @see app/Http/Controllers/CustomerComplaintWorkflowController.php:23
 * @route '/customer-complaint/{customerComplaint}/resolve'
 */
        resolveForm.post = (args: { customerComplaint: number | { id: number } } | [customerComplaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: resolve.url(args, options),
            method: 'post',
        })
    
    resolve.form = resolveForm
/**
* @see \App\Http\Controllers\CustomerComplaintWorkflowController::close
 * @see app/Http/Controllers/CustomerComplaintWorkflowController.php:28
 * @route '/customer-complaint/{customerComplaint}/close'
 */
export const close = (args: { customerComplaint: number | { id: number } } | [customerComplaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: close.url(args, options),
    method: 'post',
})

close.definition = {
    methods: ["post"],
    url: '/customer-complaint/{customerComplaint}/close',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CustomerComplaintWorkflowController::close
 * @see app/Http/Controllers/CustomerComplaintWorkflowController.php:28
 * @route '/customer-complaint/{customerComplaint}/close'
 */
close.url = (args: { customerComplaint: number | { id: number } } | [customerComplaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { customerComplaint: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { customerComplaint: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    customerComplaint: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        customerComplaint: typeof args.customerComplaint === 'object'
                ? args.customerComplaint.id
                : args.customerComplaint,
                }

    return close.definition.url
            .replace('{customerComplaint}', parsedArgs.customerComplaint.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CustomerComplaintWorkflowController::close
 * @see app/Http/Controllers/CustomerComplaintWorkflowController.php:28
 * @route '/customer-complaint/{customerComplaint}/close'
 */
close.post = (args: { customerComplaint: number | { id: number } } | [customerComplaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: close.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CustomerComplaintWorkflowController::close
 * @see app/Http/Controllers/CustomerComplaintWorkflowController.php:28
 * @route '/customer-complaint/{customerComplaint}/close'
 */
    const closeForm = (args: { customerComplaint: number | { id: number } } | [customerComplaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: close.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CustomerComplaintWorkflowController::close
 * @see app/Http/Controllers/CustomerComplaintWorkflowController.php:28
 * @route '/customer-complaint/{customerComplaint}/close'
 */
        closeForm.post = (args: { customerComplaint: number | { id: number } } | [customerComplaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: close.url(args, options),
            method: 'post',
        })
    
    close.form = closeForm
/**
* @see \App\Http\Controllers\CustomerComplaintWorkflowController::reopen
 * @see app/Http/Controllers/CustomerComplaintWorkflowController.php:33
 * @route '/customer-complaint/{customerComplaint}/reopen'
 */
export const reopen = (args: { customerComplaint: number | { id: number } } | [customerComplaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reopen.url(args, options),
    method: 'post',
})

reopen.definition = {
    methods: ["post"],
    url: '/customer-complaint/{customerComplaint}/reopen',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CustomerComplaintWorkflowController::reopen
 * @see app/Http/Controllers/CustomerComplaintWorkflowController.php:33
 * @route '/customer-complaint/{customerComplaint}/reopen'
 */
reopen.url = (args: { customerComplaint: number | { id: number } } | [customerComplaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { customerComplaint: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { customerComplaint: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    customerComplaint: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        customerComplaint: typeof args.customerComplaint === 'object'
                ? args.customerComplaint.id
                : args.customerComplaint,
                }

    return reopen.definition.url
            .replace('{customerComplaint}', parsedArgs.customerComplaint.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CustomerComplaintWorkflowController::reopen
 * @see app/Http/Controllers/CustomerComplaintWorkflowController.php:33
 * @route '/customer-complaint/{customerComplaint}/reopen'
 */
reopen.post = (args: { customerComplaint: number | { id: number } } | [customerComplaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reopen.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CustomerComplaintWorkflowController::reopen
 * @see app/Http/Controllers/CustomerComplaintWorkflowController.php:33
 * @route '/customer-complaint/{customerComplaint}/reopen'
 */
    const reopenForm = (args: { customerComplaint: number | { id: number } } | [customerComplaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: reopen.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CustomerComplaintWorkflowController::reopen
 * @see app/Http/Controllers/CustomerComplaintWorkflowController.php:33
 * @route '/customer-complaint/{customerComplaint}/reopen'
 */
        reopenForm.post = (args: { customerComplaint: number | { id: number } } | [customerComplaint: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: reopen.url(args, options),
            method: 'post',
        })
    
    reopen.form = reopenForm
const CustomerComplaintWorkflowController = { acknowledge, resolve, close, reopen }

export default CustomerComplaintWorkflowController