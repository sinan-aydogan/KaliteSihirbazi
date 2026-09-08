import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\RiskWorkflowController::close
 * @see app/Http/Controllers/RiskWorkflowController.php:15
 * @route '/risk/{risk}/close'
 */
export const close = (args: { risk: number | { id: number } } | [risk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: close.url(args, options),
    method: 'post',
})

close.definition = {
    methods: ["post"],
    url: '/risk/{risk}/close',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\RiskWorkflowController::close
 * @see app/Http/Controllers/RiskWorkflowController.php:15
 * @route '/risk/{risk}/close'
 */
close.url = (args: { risk: number | { id: number } } | [risk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { risk: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { risk: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    risk: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        risk: typeof args.risk === 'object'
                ? args.risk.id
                : args.risk,
                }

    return close.definition.url
            .replace('{risk}', parsedArgs.risk.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\RiskWorkflowController::close
 * @see app/Http/Controllers/RiskWorkflowController.php:15
 * @route '/risk/{risk}/close'
 */
close.post = (args: { risk: number | { id: number } } | [risk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: close.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\RiskWorkflowController::close
 * @see app/Http/Controllers/RiskWorkflowController.php:15
 * @route '/risk/{risk}/close'
 */
    const closeForm = (args: { risk: number | { id: number } } | [risk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: close.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\RiskWorkflowController::close
 * @see app/Http/Controllers/RiskWorkflowController.php:15
 * @route '/risk/{risk}/close'
 */
        closeForm.post = (args: { risk: number | { id: number } } | [risk: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: close.url(args, options),
            method: 'post',
        })
    
    close.form = closeForm
const RiskWorkflowController = { close }

export default RiskWorkflowController