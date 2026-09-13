import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenWorkflowController::markUnderReview
 * @see app/Http/Controllers/ContinuousImprovement/KaizenWorkflowController.php:20
 * @route '/kaizen-suggestion/{kaizenSuggestion}/mark-under-review'
 */
export const markUnderReview = (args: { kaizenSuggestion: number | { id: number } } | [kaizenSuggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: markUnderReview.url(args, options),
    method: 'post',
})

markUnderReview.definition = {
    methods: ["post"],
    url: '/kaizen-suggestion/{kaizenSuggestion}/mark-under-review',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenWorkflowController::markUnderReview
 * @see app/Http/Controllers/ContinuousImprovement/KaizenWorkflowController.php:20
 * @route '/kaizen-suggestion/{kaizenSuggestion}/mark-under-review'
 */
markUnderReview.url = (args: { kaizenSuggestion: number | { id: number } } | [kaizenSuggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { kaizenSuggestion: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { kaizenSuggestion: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    kaizenSuggestion: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        kaizenSuggestion: typeof args.kaizenSuggestion === 'object'
                ? args.kaizenSuggestion.id
                : args.kaizenSuggestion,
                }

    return markUnderReview.definition.url
            .replace('{kaizenSuggestion}', parsedArgs.kaizenSuggestion.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenWorkflowController::markUnderReview
 * @see app/Http/Controllers/ContinuousImprovement/KaizenWorkflowController.php:20
 * @route '/kaizen-suggestion/{kaizenSuggestion}/mark-under-review'
 */
markUnderReview.post = (args: { kaizenSuggestion: number | { id: number } } | [kaizenSuggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: markUnderReview.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenWorkflowController::markUnderReview
 * @see app/Http/Controllers/ContinuousImprovement/KaizenWorkflowController.php:20
 * @route '/kaizen-suggestion/{kaizenSuggestion}/mark-under-review'
 */
    const markUnderReviewForm = (args: { kaizenSuggestion: number | { id: number } } | [kaizenSuggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: markUnderReview.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenWorkflowController::markUnderReview
 * @see app/Http/Controllers/ContinuousImprovement/KaizenWorkflowController.php:20
 * @route '/kaizen-suggestion/{kaizenSuggestion}/mark-under-review'
 */
        markUnderReviewForm.post = (args: { kaizenSuggestion: number | { id: number } } | [kaizenSuggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: markUnderReview.url(args, options),
            method: 'post',
        })
    
    markUnderReview.form = markUnderReviewForm
/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenWorkflowController::approve
 * @see app/Http/Controllers/ContinuousImprovement/KaizenWorkflowController.php:25
 * @route '/kaizen-suggestion/{kaizenSuggestion}/approve'
 */
export const approve = (args: { kaizenSuggestion: number | { id: number } } | [kaizenSuggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: approve.url(args, options),
    method: 'post',
})

approve.definition = {
    methods: ["post"],
    url: '/kaizen-suggestion/{kaizenSuggestion}/approve',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenWorkflowController::approve
 * @see app/Http/Controllers/ContinuousImprovement/KaizenWorkflowController.php:25
 * @route '/kaizen-suggestion/{kaizenSuggestion}/approve'
 */
approve.url = (args: { kaizenSuggestion: number | { id: number } } | [kaizenSuggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { kaizenSuggestion: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { kaizenSuggestion: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    kaizenSuggestion: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        kaizenSuggestion: typeof args.kaizenSuggestion === 'object'
                ? args.kaizenSuggestion.id
                : args.kaizenSuggestion,
                }

    return approve.definition.url
            .replace('{kaizenSuggestion}', parsedArgs.kaizenSuggestion.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenWorkflowController::approve
 * @see app/Http/Controllers/ContinuousImprovement/KaizenWorkflowController.php:25
 * @route '/kaizen-suggestion/{kaizenSuggestion}/approve'
 */
approve.post = (args: { kaizenSuggestion: number | { id: number } } | [kaizenSuggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: approve.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenWorkflowController::approve
 * @see app/Http/Controllers/ContinuousImprovement/KaizenWorkflowController.php:25
 * @route '/kaizen-suggestion/{kaizenSuggestion}/approve'
 */
    const approveForm = (args: { kaizenSuggestion: number | { id: number } } | [kaizenSuggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: approve.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenWorkflowController::approve
 * @see app/Http/Controllers/ContinuousImprovement/KaizenWorkflowController.php:25
 * @route '/kaizen-suggestion/{kaizenSuggestion}/approve'
 */
        approveForm.post = (args: { kaizenSuggestion: number | { id: number } } | [kaizenSuggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: approve.url(args, options),
            method: 'post',
        })
    
    approve.form = approveForm
/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenWorkflowController::reject
 * @see app/Http/Controllers/ContinuousImprovement/KaizenWorkflowController.php:30
 * @route '/kaizen-suggestion/{kaizenSuggestion}/reject'
 */
export const reject = (args: { kaizenSuggestion: number | { id: number } } | [kaizenSuggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reject.url(args, options),
    method: 'post',
})

reject.definition = {
    methods: ["post"],
    url: '/kaizen-suggestion/{kaizenSuggestion}/reject',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenWorkflowController::reject
 * @see app/Http/Controllers/ContinuousImprovement/KaizenWorkflowController.php:30
 * @route '/kaizen-suggestion/{kaizenSuggestion}/reject'
 */
reject.url = (args: { kaizenSuggestion: number | { id: number } } | [kaizenSuggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { kaizenSuggestion: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { kaizenSuggestion: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    kaizenSuggestion: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        kaizenSuggestion: typeof args.kaizenSuggestion === 'object'
                ? args.kaizenSuggestion.id
                : args.kaizenSuggestion,
                }

    return reject.definition.url
            .replace('{kaizenSuggestion}', parsedArgs.kaizenSuggestion.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenWorkflowController::reject
 * @see app/Http/Controllers/ContinuousImprovement/KaizenWorkflowController.php:30
 * @route '/kaizen-suggestion/{kaizenSuggestion}/reject'
 */
reject.post = (args: { kaizenSuggestion: number | { id: number } } | [kaizenSuggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reject.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenWorkflowController::reject
 * @see app/Http/Controllers/ContinuousImprovement/KaizenWorkflowController.php:30
 * @route '/kaizen-suggestion/{kaizenSuggestion}/reject'
 */
    const rejectForm = (args: { kaizenSuggestion: number | { id: number } } | [kaizenSuggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: reject.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenWorkflowController::reject
 * @see app/Http/Controllers/ContinuousImprovement/KaizenWorkflowController.php:30
 * @route '/kaizen-suggestion/{kaizenSuggestion}/reject'
 */
        rejectForm.post = (args: { kaizenSuggestion: number | { id: number } } | [kaizenSuggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: reject.url(args, options),
            method: 'post',
        })
    
    reject.form = rejectForm
/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenWorkflowController::start
 * @see app/Http/Controllers/ContinuousImprovement/KaizenWorkflowController.php:35
 * @route '/kaizen-suggestion/{kaizenSuggestion}/start'
 */
export const start = (args: { kaizenSuggestion: number | { id: number } } | [kaizenSuggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: start.url(args, options),
    method: 'post',
})

start.definition = {
    methods: ["post"],
    url: '/kaizen-suggestion/{kaizenSuggestion}/start',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenWorkflowController::start
 * @see app/Http/Controllers/ContinuousImprovement/KaizenWorkflowController.php:35
 * @route '/kaizen-suggestion/{kaizenSuggestion}/start'
 */
start.url = (args: { kaizenSuggestion: number | { id: number } } | [kaizenSuggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { kaizenSuggestion: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { kaizenSuggestion: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    kaizenSuggestion: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        kaizenSuggestion: typeof args.kaizenSuggestion === 'object'
                ? args.kaizenSuggestion.id
                : args.kaizenSuggestion,
                }

    return start.definition.url
            .replace('{kaizenSuggestion}', parsedArgs.kaizenSuggestion.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenWorkflowController::start
 * @see app/Http/Controllers/ContinuousImprovement/KaizenWorkflowController.php:35
 * @route '/kaizen-suggestion/{kaizenSuggestion}/start'
 */
start.post = (args: { kaizenSuggestion: number | { id: number } } | [kaizenSuggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: start.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenWorkflowController::start
 * @see app/Http/Controllers/ContinuousImprovement/KaizenWorkflowController.php:35
 * @route '/kaizen-suggestion/{kaizenSuggestion}/start'
 */
    const startForm = (args: { kaizenSuggestion: number | { id: number } } | [kaizenSuggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: start.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenWorkflowController::start
 * @see app/Http/Controllers/ContinuousImprovement/KaizenWorkflowController.php:35
 * @route '/kaizen-suggestion/{kaizenSuggestion}/start'
 */
        startForm.post = (args: { kaizenSuggestion: number | { id: number } } | [kaizenSuggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: start.url(args, options),
            method: 'post',
        })
    
    start.form = startForm
/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenWorkflowController::implement
 * @see app/Http/Controllers/ContinuousImprovement/KaizenWorkflowController.php:40
 * @route '/kaizen-suggestion/{kaizenSuggestion}/implement'
 */
export const implement = (args: { kaizenSuggestion: number | { id: number } } | [kaizenSuggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: implement.url(args, options),
    method: 'post',
})

implement.definition = {
    methods: ["post"],
    url: '/kaizen-suggestion/{kaizenSuggestion}/implement',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenWorkflowController::implement
 * @see app/Http/Controllers/ContinuousImprovement/KaizenWorkflowController.php:40
 * @route '/kaizen-suggestion/{kaizenSuggestion}/implement'
 */
implement.url = (args: { kaizenSuggestion: number | { id: number } } | [kaizenSuggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { kaizenSuggestion: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { kaizenSuggestion: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    kaizenSuggestion: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        kaizenSuggestion: typeof args.kaizenSuggestion === 'object'
                ? args.kaizenSuggestion.id
                : args.kaizenSuggestion,
                }

    return implement.definition.url
            .replace('{kaizenSuggestion}', parsedArgs.kaizenSuggestion.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenWorkflowController::implement
 * @see app/Http/Controllers/ContinuousImprovement/KaizenWorkflowController.php:40
 * @route '/kaizen-suggestion/{kaizenSuggestion}/implement'
 */
implement.post = (args: { kaizenSuggestion: number | { id: number } } | [kaizenSuggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: implement.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenWorkflowController::implement
 * @see app/Http/Controllers/ContinuousImprovement/KaizenWorkflowController.php:40
 * @route '/kaizen-suggestion/{kaizenSuggestion}/implement'
 */
    const implementForm = (args: { kaizenSuggestion: number | { id: number } } | [kaizenSuggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: implement.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenWorkflowController::implement
 * @see app/Http/Controllers/ContinuousImprovement/KaizenWorkflowController.php:40
 * @route '/kaizen-suggestion/{kaizenSuggestion}/implement'
 */
        implementForm.post = (args: { kaizenSuggestion: number | { id: number } } | [kaizenSuggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: implement.url(args, options),
            method: 'post',
        })
    
    implement.form = implementForm
/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenWorkflowController::close
 * @see app/Http/Controllers/ContinuousImprovement/KaizenWorkflowController.php:45
 * @route '/kaizen-suggestion/{kaizenSuggestion}/close'
 */
export const close = (args: { kaizenSuggestion: number | { id: number } } | [kaizenSuggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: close.url(args, options),
    method: 'post',
})

close.definition = {
    methods: ["post"],
    url: '/kaizen-suggestion/{kaizenSuggestion}/close',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenWorkflowController::close
 * @see app/Http/Controllers/ContinuousImprovement/KaizenWorkflowController.php:45
 * @route '/kaizen-suggestion/{kaizenSuggestion}/close'
 */
close.url = (args: { kaizenSuggestion: number | { id: number } } | [kaizenSuggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { kaizenSuggestion: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { kaizenSuggestion: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    kaizenSuggestion: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        kaizenSuggestion: typeof args.kaizenSuggestion === 'object'
                ? args.kaizenSuggestion.id
                : args.kaizenSuggestion,
                }

    return close.definition.url
            .replace('{kaizenSuggestion}', parsedArgs.kaizenSuggestion.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenWorkflowController::close
 * @see app/Http/Controllers/ContinuousImprovement/KaizenWorkflowController.php:45
 * @route '/kaizen-suggestion/{kaizenSuggestion}/close'
 */
close.post = (args: { kaizenSuggestion: number | { id: number } } | [kaizenSuggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: close.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenWorkflowController::close
 * @see app/Http/Controllers/ContinuousImprovement/KaizenWorkflowController.php:45
 * @route '/kaizen-suggestion/{kaizenSuggestion}/close'
 */
    const closeForm = (args: { kaizenSuggestion: number | { id: number } } | [kaizenSuggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: close.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ContinuousImprovement\KaizenWorkflowController::close
 * @see app/Http/Controllers/ContinuousImprovement/KaizenWorkflowController.php:45
 * @route '/kaizen-suggestion/{kaizenSuggestion}/close'
 */
        closeForm.post = (args: { kaizenSuggestion: number | { id: number } } | [kaizenSuggestion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: close.url(args, options),
            method: 'post',
        })
    
    close.form = closeForm
const KaizenWorkflowController = { markUnderReview, approve, reject, start, implement, close }

export default KaizenWorkflowController