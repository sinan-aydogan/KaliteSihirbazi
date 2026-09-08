import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\CapaWorkflowController::submitForVerification
 * @see app/Http/Controllers/CapaWorkflowController.php:16
 * @route '/capa/{capa}/submit-for-verification'
 */
export const submitForVerification = (args: { capa: number | { id: number } } | [capa: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: submitForVerification.url(args, options),
    method: 'post',
})

submitForVerification.definition = {
    methods: ["post"],
    url: '/capa/{capa}/submit-for-verification',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CapaWorkflowController::submitForVerification
 * @see app/Http/Controllers/CapaWorkflowController.php:16
 * @route '/capa/{capa}/submit-for-verification'
 */
submitForVerification.url = (args: { capa: number | { id: number } } | [capa: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { capa: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { capa: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    capa: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        capa: typeof args.capa === 'object'
                ? args.capa.id
                : args.capa,
                }

    return submitForVerification.definition.url
            .replace('{capa}', parsedArgs.capa.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CapaWorkflowController::submitForVerification
 * @see app/Http/Controllers/CapaWorkflowController.php:16
 * @route '/capa/{capa}/submit-for-verification'
 */
submitForVerification.post = (args: { capa: number | { id: number } } | [capa: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: submitForVerification.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CapaWorkflowController::submitForVerification
 * @see app/Http/Controllers/CapaWorkflowController.php:16
 * @route '/capa/{capa}/submit-for-verification'
 */
    const submitForVerificationForm = (args: { capa: number | { id: number } } | [capa: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: submitForVerification.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CapaWorkflowController::submitForVerification
 * @see app/Http/Controllers/CapaWorkflowController.php:16
 * @route '/capa/{capa}/submit-for-verification'
 */
        submitForVerificationForm.post = (args: { capa: number | { id: number } } | [capa: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: submitForVerification.url(args, options),
            method: 'post',
        })
    
    submitForVerification.form = submitForVerificationForm
/**
* @see \App\Http\Controllers\CapaWorkflowController::verify
 * @see app/Http/Controllers/CapaWorkflowController.php:24
 * @route '/capa/{capa}/verify'
 */
export const verify = (args: { capa: number | { id: number } } | [capa: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: verify.url(args, options),
    method: 'post',
})

verify.definition = {
    methods: ["post"],
    url: '/capa/{capa}/verify',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CapaWorkflowController::verify
 * @see app/Http/Controllers/CapaWorkflowController.php:24
 * @route '/capa/{capa}/verify'
 */
verify.url = (args: { capa: number | { id: number } } | [capa: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { capa: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { capa: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    capa: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        capa: typeof args.capa === 'object'
                ? args.capa.id
                : args.capa,
                }

    return verify.definition.url
            .replace('{capa}', parsedArgs.capa.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CapaWorkflowController::verify
 * @see app/Http/Controllers/CapaWorkflowController.php:24
 * @route '/capa/{capa}/verify'
 */
verify.post = (args: { capa: number | { id: number } } | [capa: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: verify.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CapaWorkflowController::verify
 * @see app/Http/Controllers/CapaWorkflowController.php:24
 * @route '/capa/{capa}/verify'
 */
    const verifyForm = (args: { capa: number | { id: number } } | [capa: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: verify.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CapaWorkflowController::verify
 * @see app/Http/Controllers/CapaWorkflowController.php:24
 * @route '/capa/{capa}/verify'
 */
        verifyForm.post = (args: { capa: number | { id: number } } | [capa: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: verify.url(args, options),
            method: 'post',
        })
    
    verify.form = verifyForm
/**
* @see \App\Http\Controllers\CapaWorkflowController::reopen
 * @see app/Http/Controllers/CapaWorkflowController.php:37
 * @route '/capa/{capa}/reopen'
 */
export const reopen = (args: { capa: number | { id: number } } | [capa: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reopen.url(args, options),
    method: 'post',
})

reopen.definition = {
    methods: ["post"],
    url: '/capa/{capa}/reopen',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CapaWorkflowController::reopen
 * @see app/Http/Controllers/CapaWorkflowController.php:37
 * @route '/capa/{capa}/reopen'
 */
reopen.url = (args: { capa: number | { id: number } } | [capa: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { capa: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { capa: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    capa: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        capa: typeof args.capa === 'object'
                ? args.capa.id
                : args.capa,
                }

    return reopen.definition.url
            .replace('{capa}', parsedArgs.capa.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CapaWorkflowController::reopen
 * @see app/Http/Controllers/CapaWorkflowController.php:37
 * @route '/capa/{capa}/reopen'
 */
reopen.post = (args: { capa: number | { id: number } } | [capa: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reopen.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CapaWorkflowController::reopen
 * @see app/Http/Controllers/CapaWorkflowController.php:37
 * @route '/capa/{capa}/reopen'
 */
    const reopenForm = (args: { capa: number | { id: number } } | [capa: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: reopen.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CapaWorkflowController::reopen
 * @see app/Http/Controllers/CapaWorkflowController.php:37
 * @route '/capa/{capa}/reopen'
 */
        reopenForm.post = (args: { capa: number | { id: number } } | [capa: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: reopen.url(args, options),
            method: 'post',
        })
    
    reopen.form = reopenForm
const CapaWorkflowController = { submitForVerification, verify, reopen }

export default CapaWorkflowController