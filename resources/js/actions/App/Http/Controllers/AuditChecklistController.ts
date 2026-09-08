import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
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
const AuditChecklistController = { store }

export default AuditChecklistController