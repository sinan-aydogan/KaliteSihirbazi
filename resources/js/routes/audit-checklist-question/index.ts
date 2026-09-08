import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\AuditChecklistQuestionController::store
 * @see app/Http/Controllers/AuditChecklistQuestionController.php:12
 * @route '/audit-checklist-template/{auditChecklistTemplate}/questions'
 */
export const store = (args: { auditChecklistTemplate: number | { id: number } } | [auditChecklistTemplate: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/audit-checklist-template/{auditChecklistTemplate}/questions',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AuditChecklistQuestionController::store
 * @see app/Http/Controllers/AuditChecklistQuestionController.php:12
 * @route '/audit-checklist-template/{auditChecklistTemplate}/questions'
 */
store.url = (args: { auditChecklistTemplate: number | { id: number } } | [auditChecklistTemplate: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return store.definition.url
            .replace('{auditChecklistTemplate}', parsedArgs.auditChecklistTemplate.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditChecklistQuestionController::store
 * @see app/Http/Controllers/AuditChecklistQuestionController.php:12
 * @route '/audit-checklist-template/{auditChecklistTemplate}/questions'
 */
store.post = (args: { auditChecklistTemplate: number | { id: number } } | [auditChecklistTemplate: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\AuditChecklistQuestionController::store
 * @see app/Http/Controllers/AuditChecklistQuestionController.php:12
 * @route '/audit-checklist-template/{auditChecklistTemplate}/questions'
 */
    const storeForm = (args: { auditChecklistTemplate: number | { id: number } } | [auditChecklistTemplate: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AuditChecklistQuestionController::store
 * @see app/Http/Controllers/AuditChecklistQuestionController.php:12
 * @route '/audit-checklist-template/{auditChecklistTemplate}/questions'
 */
        storeForm.post = (args: { auditChecklistTemplate: number | { id: number } } | [auditChecklistTemplate: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(args, options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\AuditChecklistQuestionController::update
 * @see app/Http/Controllers/AuditChecklistQuestionController.php:24
 * @route '/audit-checklist-question/{auditChecklistQuestion}'
 */
export const update = (args: { auditChecklistQuestion: number | { id: number } } | [auditChecklistQuestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/audit-checklist-question/{auditChecklistQuestion}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\AuditChecklistQuestionController::update
 * @see app/Http/Controllers/AuditChecklistQuestionController.php:24
 * @route '/audit-checklist-question/{auditChecklistQuestion}'
 */
update.url = (args: { auditChecklistQuestion: number | { id: number } } | [auditChecklistQuestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { auditChecklistQuestion: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { auditChecklistQuestion: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    auditChecklistQuestion: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        auditChecklistQuestion: typeof args.auditChecklistQuestion === 'object'
                ? args.auditChecklistQuestion.id
                : args.auditChecklistQuestion,
                }

    return update.definition.url
            .replace('{auditChecklistQuestion}', parsedArgs.auditChecklistQuestion.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditChecklistQuestionController::update
 * @see app/Http/Controllers/AuditChecklistQuestionController.php:24
 * @route '/audit-checklist-question/{auditChecklistQuestion}'
 */
update.put = (args: { auditChecklistQuestion: number | { id: number } } | [auditChecklistQuestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\AuditChecklistQuestionController::update
 * @see app/Http/Controllers/AuditChecklistQuestionController.php:24
 * @route '/audit-checklist-question/{auditChecklistQuestion}'
 */
    const updateForm = (args: { auditChecklistQuestion: number | { id: number } } | [auditChecklistQuestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AuditChecklistQuestionController::update
 * @see app/Http/Controllers/AuditChecklistQuestionController.php:24
 * @route '/audit-checklist-question/{auditChecklistQuestion}'
 */
        updateForm.put = (args: { auditChecklistQuestion: number | { id: number } } | [auditChecklistQuestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\AuditChecklistQuestionController::destroy
 * @see app/Http/Controllers/AuditChecklistQuestionController.php:33
 * @route '/audit-checklist-question/{auditChecklistQuestion}'
 */
export const destroy = (args: { auditChecklistQuestion: number | { id: number } } | [auditChecklistQuestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/audit-checklist-question/{auditChecklistQuestion}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\AuditChecklistQuestionController::destroy
 * @see app/Http/Controllers/AuditChecklistQuestionController.php:33
 * @route '/audit-checklist-question/{auditChecklistQuestion}'
 */
destroy.url = (args: { auditChecklistQuestion: number | { id: number } } | [auditChecklistQuestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { auditChecklistQuestion: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { auditChecklistQuestion: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    auditChecklistQuestion: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        auditChecklistQuestion: typeof args.auditChecklistQuestion === 'object'
                ? args.auditChecklistQuestion.id
                : args.auditChecklistQuestion,
                }

    return destroy.definition.url
            .replace('{auditChecklistQuestion}', parsedArgs.auditChecklistQuestion.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditChecklistQuestionController::destroy
 * @see app/Http/Controllers/AuditChecklistQuestionController.php:33
 * @route '/audit-checklist-question/{auditChecklistQuestion}'
 */
destroy.delete = (args: { auditChecklistQuestion: number | { id: number } } | [auditChecklistQuestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\AuditChecklistQuestionController::destroy
 * @see app/Http/Controllers/AuditChecklistQuestionController.php:33
 * @route '/audit-checklist-question/{auditChecklistQuestion}'
 */
    const destroyForm = (args: { auditChecklistQuestion: number | { id: number } } | [auditChecklistQuestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AuditChecklistQuestionController::destroy
 * @see app/Http/Controllers/AuditChecklistQuestionController.php:33
 * @route '/audit-checklist-question/{auditChecklistQuestion}'
 */
        destroyForm.delete = (args: { auditChecklistQuestion: number | { id: number } } | [auditChecklistQuestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const auditChecklistQuestion = {
    store: Object.assign(store, store),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default auditChecklistQuestion