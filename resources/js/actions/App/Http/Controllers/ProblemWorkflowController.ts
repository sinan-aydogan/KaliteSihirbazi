import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\ProblemWorkflowController::markUnderReview
 * @see app/Http/Controllers/ProblemWorkflowController.php:15
 * @route '/problem/{problem}/mark-under-review'
 */
export const markUnderReview = (args: { problem: number | { id: number } } | [problem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: markUnderReview.url(args, options),
    method: 'post',
})

markUnderReview.definition = {
    methods: ["post"],
    url: '/problem/{problem}/mark-under-review',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ProblemWorkflowController::markUnderReview
 * @see app/Http/Controllers/ProblemWorkflowController.php:15
 * @route '/problem/{problem}/mark-under-review'
 */
markUnderReview.url = (args: { problem: number | { id: number } } | [problem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { problem: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { problem: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    problem: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        problem: typeof args.problem === 'object'
                ? args.problem.id
                : args.problem,
                }

    return markUnderReview.definition.url
            .replace('{problem}', parsedArgs.problem.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProblemWorkflowController::markUnderReview
 * @see app/Http/Controllers/ProblemWorkflowController.php:15
 * @route '/problem/{problem}/mark-under-review'
 */
markUnderReview.post = (args: { problem: number | { id: number } } | [problem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: markUnderReview.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ProblemWorkflowController::markUnderReview
 * @see app/Http/Controllers/ProblemWorkflowController.php:15
 * @route '/problem/{problem}/mark-under-review'
 */
    const markUnderReviewForm = (args: { problem: number | { id: number } } | [problem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: markUnderReview.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ProblemWorkflowController::markUnderReview
 * @see app/Http/Controllers/ProblemWorkflowController.php:15
 * @route '/problem/{problem}/mark-under-review'
 */
        markUnderReviewForm.post = (args: { problem: number | { id: number } } | [problem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: markUnderReview.url(args, options),
            method: 'post',
        })
    
    markUnderReview.form = markUnderReviewForm
/**
* @see \App\Http\Controllers\ProblemWorkflowController::closeWithoutCapa
 * @see app/Http/Controllers/ProblemWorkflowController.php:23
 * @route '/problem/{problem}/close-without-capa'
 */
export const closeWithoutCapa = (args: { problem: number | { id: number } } | [problem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: closeWithoutCapa.url(args, options),
    method: 'post',
})

closeWithoutCapa.definition = {
    methods: ["post"],
    url: '/problem/{problem}/close-without-capa',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ProblemWorkflowController::closeWithoutCapa
 * @see app/Http/Controllers/ProblemWorkflowController.php:23
 * @route '/problem/{problem}/close-without-capa'
 */
closeWithoutCapa.url = (args: { problem: number | { id: number } } | [problem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { problem: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { problem: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    problem: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        problem: typeof args.problem === 'object'
                ? args.problem.id
                : args.problem,
                }

    return closeWithoutCapa.definition.url
            .replace('{problem}', parsedArgs.problem.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProblemWorkflowController::closeWithoutCapa
 * @see app/Http/Controllers/ProblemWorkflowController.php:23
 * @route '/problem/{problem}/close-without-capa'
 */
closeWithoutCapa.post = (args: { problem: number | { id: number } } | [problem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: closeWithoutCapa.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ProblemWorkflowController::closeWithoutCapa
 * @see app/Http/Controllers/ProblemWorkflowController.php:23
 * @route '/problem/{problem}/close-without-capa'
 */
    const closeWithoutCapaForm = (args: { problem: number | { id: number } } | [problem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: closeWithoutCapa.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ProblemWorkflowController::closeWithoutCapa
 * @see app/Http/Controllers/ProblemWorkflowController.php:23
 * @route '/problem/{problem}/close-without-capa'
 */
        closeWithoutCapaForm.post = (args: { problem: number | { id: number } } | [problem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: closeWithoutCapa.url(args, options),
            method: 'post',
        })
    
    closeWithoutCapa.form = closeWithoutCapaForm
/**
* @see \App\Http\Controllers\ProblemWorkflowController::close
 * @see app/Http/Controllers/ProblemWorkflowController.php:31
 * @route '/problem/{problem}/close'
 */
export const close = (args: { problem: number | { id: number } } | [problem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: close.url(args, options),
    method: 'post',
})

close.definition = {
    methods: ["post"],
    url: '/problem/{problem}/close',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ProblemWorkflowController::close
 * @see app/Http/Controllers/ProblemWorkflowController.php:31
 * @route '/problem/{problem}/close'
 */
close.url = (args: { problem: number | { id: number } } | [problem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { problem: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { problem: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    problem: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        problem: typeof args.problem === 'object'
                ? args.problem.id
                : args.problem,
                }

    return close.definition.url
            .replace('{problem}', parsedArgs.problem.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProblemWorkflowController::close
 * @see app/Http/Controllers/ProblemWorkflowController.php:31
 * @route '/problem/{problem}/close'
 */
close.post = (args: { problem: number | { id: number } } | [problem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: close.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ProblemWorkflowController::close
 * @see app/Http/Controllers/ProblemWorkflowController.php:31
 * @route '/problem/{problem}/close'
 */
    const closeForm = (args: { problem: number | { id: number } } | [problem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: close.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ProblemWorkflowController::close
 * @see app/Http/Controllers/ProblemWorkflowController.php:31
 * @route '/problem/{problem}/close'
 */
        closeForm.post = (args: { problem: number | { id: number } } | [problem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: close.url(args, options),
            method: 'post',
        })
    
    close.form = closeForm
const ProblemWorkflowController = { markUnderReview, closeWithoutCapa, close }

export default ProblemWorkflowController