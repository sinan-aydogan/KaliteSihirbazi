import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Document\DocumentVersionController::store
 * @see app/Http/Controllers/Document/DocumentVersionController.php:22
 * @route '/document/{document}/versions'
 */
export const store = (args: { document: number | { id: number } } | [document: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/document/{document}/versions',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Document\DocumentVersionController::store
 * @see app/Http/Controllers/Document/DocumentVersionController.php:22
 * @route '/document/{document}/versions'
 */
store.url = (args: { document: number | { id: number } } | [document: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { document: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { document: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    document: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        document: typeof args.document === 'object'
                ? args.document.id
                : args.document,
                }

    return store.definition.url
            .replace('{document}', parsedArgs.document.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Document\DocumentVersionController::store
 * @see app/Http/Controllers/Document/DocumentVersionController.php:22
 * @route '/document/{document}/versions'
 */
store.post = (args: { document: number | { id: number } } | [document: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Document\DocumentVersionController::store
 * @see app/Http/Controllers/Document/DocumentVersionController.php:22
 * @route '/document/{document}/versions'
 */
    const storeForm = (args: { document: number | { id: number } } | [document: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Document\DocumentVersionController::store
 * @see app/Http/Controllers/Document/DocumentVersionController.php:22
 * @route '/document/{document}/versions'
 */
        storeForm.post = (args: { document: number | { id: number } } | [document: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(args, options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Document\DocumentVersionWorkflowController::submit
 * @see app/Http/Controllers/Document/DocumentVersionWorkflowController.php:18
 * @route '/document-version/{documentVersion}/submit'
 */
export const submit = (args: { documentVersion: number | { id: number } } | [documentVersion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: submit.url(args, options),
    method: 'post',
})

submit.definition = {
    methods: ["post"],
    url: '/document-version/{documentVersion}/submit',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Document\DocumentVersionWorkflowController::submit
 * @see app/Http/Controllers/Document/DocumentVersionWorkflowController.php:18
 * @route '/document-version/{documentVersion}/submit'
 */
submit.url = (args: { documentVersion: number | { id: number } } | [documentVersion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { documentVersion: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { documentVersion: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    documentVersion: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        documentVersion: typeof args.documentVersion === 'object'
                ? args.documentVersion.id
                : args.documentVersion,
                }

    return submit.definition.url
            .replace('{documentVersion}', parsedArgs.documentVersion.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Document\DocumentVersionWorkflowController::submit
 * @see app/Http/Controllers/Document/DocumentVersionWorkflowController.php:18
 * @route '/document-version/{documentVersion}/submit'
 */
submit.post = (args: { documentVersion: number | { id: number } } | [documentVersion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: submit.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Document\DocumentVersionWorkflowController::submit
 * @see app/Http/Controllers/Document/DocumentVersionWorkflowController.php:18
 * @route '/document-version/{documentVersion}/submit'
 */
    const submitForm = (args: { documentVersion: number | { id: number } } | [documentVersion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: submit.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Document\DocumentVersionWorkflowController::submit
 * @see app/Http/Controllers/Document/DocumentVersionWorkflowController.php:18
 * @route '/document-version/{documentVersion}/submit'
 */
        submitForm.post = (args: { documentVersion: number | { id: number } } | [documentVersion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: submit.url(args, options),
            method: 'post',
        })
    
    submit.form = submitForm
/**
* @see \App\Http\Controllers\Document\DocumentVersionWorkflowController::review
 * @see app/Http/Controllers/Document/DocumentVersionWorkflowController.php:28
 * @route '/document-version/{documentVersion}/review'
 */
export const review = (args: { documentVersion: number | { id: number } } | [documentVersion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: review.url(args, options),
    method: 'post',
})

review.definition = {
    methods: ["post"],
    url: '/document-version/{documentVersion}/review',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Document\DocumentVersionWorkflowController::review
 * @see app/Http/Controllers/Document/DocumentVersionWorkflowController.php:28
 * @route '/document-version/{documentVersion}/review'
 */
review.url = (args: { documentVersion: number | { id: number } } | [documentVersion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { documentVersion: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { documentVersion: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    documentVersion: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        documentVersion: typeof args.documentVersion === 'object'
                ? args.documentVersion.id
                : args.documentVersion,
                }

    return review.definition.url
            .replace('{documentVersion}', parsedArgs.documentVersion.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Document\DocumentVersionWorkflowController::review
 * @see app/Http/Controllers/Document/DocumentVersionWorkflowController.php:28
 * @route '/document-version/{documentVersion}/review'
 */
review.post = (args: { documentVersion: number | { id: number } } | [documentVersion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: review.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Document\DocumentVersionWorkflowController::review
 * @see app/Http/Controllers/Document/DocumentVersionWorkflowController.php:28
 * @route '/document-version/{documentVersion}/review'
 */
    const reviewForm = (args: { documentVersion: number | { id: number } } | [documentVersion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: review.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Document\DocumentVersionWorkflowController::review
 * @see app/Http/Controllers/Document/DocumentVersionWorkflowController.php:28
 * @route '/document-version/{documentVersion}/review'
 */
        reviewForm.post = (args: { documentVersion: number | { id: number } } | [documentVersion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: review.url(args, options),
            method: 'post',
        })
    
    review.form = reviewForm
/**
* @see \App\Http\Controllers\Document\DocumentVersionWorkflowController::approve
 * @see app/Http/Controllers/Document/DocumentVersionWorkflowController.php:43
 * @route '/document-version/{documentVersion}/approve'
 */
export const approve = (args: { documentVersion: number | { id: number } } | [documentVersion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: approve.url(args, options),
    method: 'post',
})

approve.definition = {
    methods: ["post"],
    url: '/document-version/{documentVersion}/approve',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Document\DocumentVersionWorkflowController::approve
 * @see app/Http/Controllers/Document/DocumentVersionWorkflowController.php:43
 * @route '/document-version/{documentVersion}/approve'
 */
approve.url = (args: { documentVersion: number | { id: number } } | [documentVersion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { documentVersion: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { documentVersion: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    documentVersion: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        documentVersion: typeof args.documentVersion === 'object'
                ? args.documentVersion.id
                : args.documentVersion,
                }

    return approve.definition.url
            .replace('{documentVersion}', parsedArgs.documentVersion.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Document\DocumentVersionWorkflowController::approve
 * @see app/Http/Controllers/Document/DocumentVersionWorkflowController.php:43
 * @route '/document-version/{documentVersion}/approve'
 */
approve.post = (args: { documentVersion: number | { id: number } } | [documentVersion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: approve.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Document\DocumentVersionWorkflowController::approve
 * @see app/Http/Controllers/Document/DocumentVersionWorkflowController.php:43
 * @route '/document-version/{documentVersion}/approve'
 */
    const approveForm = (args: { documentVersion: number | { id: number } } | [documentVersion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: approve.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Document\DocumentVersionWorkflowController::approve
 * @see app/Http/Controllers/Document/DocumentVersionWorkflowController.php:43
 * @route '/document-version/{documentVersion}/approve'
 */
        approveForm.post = (args: { documentVersion: number | { id: number } } | [documentVersion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: approve.url(args, options),
            method: 'post',
        })
    
    approve.form = approveForm
/**
* @see \App\Http\Controllers\Document\DocumentVersionWorkflowController::reject
 * @see app/Http/Controllers/Document/DocumentVersionWorkflowController.php:53
 * @route '/document-version/{documentVersion}/reject'
 */
export const reject = (args: { documentVersion: number | { id: number } } | [documentVersion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reject.url(args, options),
    method: 'post',
})

reject.definition = {
    methods: ["post"],
    url: '/document-version/{documentVersion}/reject',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Document\DocumentVersionWorkflowController::reject
 * @see app/Http/Controllers/Document/DocumentVersionWorkflowController.php:53
 * @route '/document-version/{documentVersion}/reject'
 */
reject.url = (args: { documentVersion: number | { id: number } } | [documentVersion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { documentVersion: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { documentVersion: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    documentVersion: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        documentVersion: typeof args.documentVersion === 'object'
                ? args.documentVersion.id
                : args.documentVersion,
                }

    return reject.definition.url
            .replace('{documentVersion}', parsedArgs.documentVersion.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Document\DocumentVersionWorkflowController::reject
 * @see app/Http/Controllers/Document/DocumentVersionWorkflowController.php:53
 * @route '/document-version/{documentVersion}/reject'
 */
reject.post = (args: { documentVersion: number | { id: number } } | [documentVersion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reject.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Document\DocumentVersionWorkflowController::reject
 * @see app/Http/Controllers/Document/DocumentVersionWorkflowController.php:53
 * @route '/document-version/{documentVersion}/reject'
 */
    const rejectForm = (args: { documentVersion: number | { id: number } } | [documentVersion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: reject.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Document\DocumentVersionWorkflowController::reject
 * @see app/Http/Controllers/Document/DocumentVersionWorkflowController.php:53
 * @route '/document-version/{documentVersion}/reject'
 */
        rejectForm.post = (args: { documentVersion: number | { id: number } } | [documentVersion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: reject.url(args, options),
            method: 'post',
        })
    
    reject.form = rejectForm
/**
* @see \App\Http\Controllers\Document\DocumentVersionWorkflowController::acknowledge
 * @see app/Http/Controllers/Document/DocumentVersionWorkflowController.php:63
 * @route '/document-version/{documentVersion}/acknowledge'
 */
export const acknowledge = (args: { documentVersion: number | { id: number } } | [documentVersion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: acknowledge.url(args, options),
    method: 'post',
})

acknowledge.definition = {
    methods: ["post"],
    url: '/document-version/{documentVersion}/acknowledge',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Document\DocumentVersionWorkflowController::acknowledge
 * @see app/Http/Controllers/Document/DocumentVersionWorkflowController.php:63
 * @route '/document-version/{documentVersion}/acknowledge'
 */
acknowledge.url = (args: { documentVersion: number | { id: number } } | [documentVersion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { documentVersion: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { documentVersion: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    documentVersion: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        documentVersion: typeof args.documentVersion === 'object'
                ? args.documentVersion.id
                : args.documentVersion,
                }

    return acknowledge.definition.url
            .replace('{documentVersion}', parsedArgs.documentVersion.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Document\DocumentVersionWorkflowController::acknowledge
 * @see app/Http/Controllers/Document/DocumentVersionWorkflowController.php:63
 * @route '/document-version/{documentVersion}/acknowledge'
 */
acknowledge.post = (args: { documentVersion: number | { id: number } } | [documentVersion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: acknowledge.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Document\DocumentVersionWorkflowController::acknowledge
 * @see app/Http/Controllers/Document/DocumentVersionWorkflowController.php:63
 * @route '/document-version/{documentVersion}/acknowledge'
 */
    const acknowledgeForm = (args: { documentVersion: number | { id: number } } | [documentVersion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: acknowledge.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Document\DocumentVersionWorkflowController::acknowledge
 * @see app/Http/Controllers/Document/DocumentVersionWorkflowController.php:63
 * @route '/document-version/{documentVersion}/acknowledge'
 */
        acknowledgeForm.post = (args: { documentVersion: number | { id: number } } | [documentVersion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: acknowledge.url(args, options),
            method: 'post',
        })
    
    acknowledge.form = acknowledgeForm
const documentVersion = {
    store: Object.assign(store, store),
submit: Object.assign(submit, submit),
review: Object.assign(review, review),
approve: Object.assign(approve, approve),
reject: Object.assign(reject, reject),
acknowledge: Object.assign(acknowledge, acknowledge),
}

export default documentVersion