import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\AuditChecklistAnswerController::update
 * @see app/Http/Controllers/AuditChecklistAnswerController.php:15
 * @route '/audit-checklist-answer/{auditChecklistAnswer}'
 */
export const update = (args: { auditChecklistAnswer: number | { id: number } } | [auditChecklistAnswer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/audit-checklist-answer/{auditChecklistAnswer}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\AuditChecklistAnswerController::update
 * @see app/Http/Controllers/AuditChecklistAnswerController.php:15
 * @route '/audit-checklist-answer/{auditChecklistAnswer}'
 */
update.url = (args: { auditChecklistAnswer: number | { id: number } } | [auditChecklistAnswer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { auditChecklistAnswer: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { auditChecklistAnswer: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    auditChecklistAnswer: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        auditChecklistAnswer: typeof args.auditChecklistAnswer === 'object'
                ? args.auditChecklistAnswer.id
                : args.auditChecklistAnswer,
                }

    return update.definition.url
            .replace('{auditChecklistAnswer}', parsedArgs.auditChecklistAnswer.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditChecklistAnswerController::update
 * @see app/Http/Controllers/AuditChecklistAnswerController.php:15
 * @route '/audit-checklist-answer/{auditChecklistAnswer}'
 */
update.put = (args: { auditChecklistAnswer: number | { id: number } } | [auditChecklistAnswer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\AuditChecklistAnswerController::update
 * @see app/Http/Controllers/AuditChecklistAnswerController.php:15
 * @route '/audit-checklist-answer/{auditChecklistAnswer}'
 */
    const updateForm = (args: { auditChecklistAnswer: number | { id: number } } | [auditChecklistAnswer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AuditChecklistAnswerController::update
 * @see app/Http/Controllers/AuditChecklistAnswerController.php:15
 * @route '/audit-checklist-answer/{auditChecklistAnswer}'
 */
        updateForm.put = (args: { auditChecklistAnswer: number | { id: number } } | [auditChecklistAnswer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
const auditChecklistAnswer = {
    update: Object.assign(update, update),
}

export default auditChecklistAnswer