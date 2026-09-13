import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\CustomerComplaintAnalyticsController::store
 * @see app/Http/Controllers/CustomerComplaintAnalyticsController.php:83
 * @route '/customer-complaint-report-template'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/customer-complaint-report-template',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CustomerComplaintAnalyticsController::store
 * @see app/Http/Controllers/CustomerComplaintAnalyticsController.php:83
 * @route '/customer-complaint-report-template'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CustomerComplaintAnalyticsController::store
 * @see app/Http/Controllers/CustomerComplaintAnalyticsController.php:83
 * @route '/customer-complaint-report-template'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CustomerComplaintAnalyticsController::store
 * @see app/Http/Controllers/CustomerComplaintAnalyticsController.php:83
 * @route '/customer-complaint-report-template'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CustomerComplaintAnalyticsController::store
 * @see app/Http/Controllers/CustomerComplaintAnalyticsController.php:83
 * @route '/customer-complaint-report-template'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\CustomerComplaintAnalyticsController::update
 * @see app/Http/Controllers/CustomerComplaintAnalyticsController.php:95
 * @route '/customer-complaint-report-template/{customerComplaintReportTemplate}'
 */
export const update = (args: { customerComplaintReportTemplate: number | { id: number } } | [customerComplaintReportTemplate: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/customer-complaint-report-template/{customerComplaintReportTemplate}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\CustomerComplaintAnalyticsController::update
 * @see app/Http/Controllers/CustomerComplaintAnalyticsController.php:95
 * @route '/customer-complaint-report-template/{customerComplaintReportTemplate}'
 */
update.url = (args: { customerComplaintReportTemplate: number | { id: number } } | [customerComplaintReportTemplate: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { customerComplaintReportTemplate: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { customerComplaintReportTemplate: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    customerComplaintReportTemplate: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        customerComplaintReportTemplate: typeof args.customerComplaintReportTemplate === 'object'
                ? args.customerComplaintReportTemplate.id
                : args.customerComplaintReportTemplate,
                }

    return update.definition.url
            .replace('{customerComplaintReportTemplate}', parsedArgs.customerComplaintReportTemplate.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CustomerComplaintAnalyticsController::update
 * @see app/Http/Controllers/CustomerComplaintAnalyticsController.php:95
 * @route '/customer-complaint-report-template/{customerComplaintReportTemplate}'
 */
update.put = (args: { customerComplaintReportTemplate: number | { id: number } } | [customerComplaintReportTemplate: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\CustomerComplaintAnalyticsController::update
 * @see app/Http/Controllers/CustomerComplaintAnalyticsController.php:95
 * @route '/customer-complaint-report-template/{customerComplaintReportTemplate}'
 */
    const updateForm = (args: { customerComplaintReportTemplate: number | { id: number } } | [customerComplaintReportTemplate: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CustomerComplaintAnalyticsController::update
 * @see app/Http/Controllers/CustomerComplaintAnalyticsController.php:95
 * @route '/customer-complaint-report-template/{customerComplaintReportTemplate}'
 */
        updateForm.put = (args: { customerComplaintReportTemplate: number | { id: number } } | [customerComplaintReportTemplate: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\CustomerComplaintAnalyticsController::destroy
 * @see app/Http/Controllers/CustomerComplaintAnalyticsController.php:104
 * @route '/customer-complaint-report-template/{customerComplaintReportTemplate}'
 */
export const destroy = (args: { customerComplaintReportTemplate: number | { id: number } } | [customerComplaintReportTemplate: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/customer-complaint-report-template/{customerComplaintReportTemplate}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\CustomerComplaintAnalyticsController::destroy
 * @see app/Http/Controllers/CustomerComplaintAnalyticsController.php:104
 * @route '/customer-complaint-report-template/{customerComplaintReportTemplate}'
 */
destroy.url = (args: { customerComplaintReportTemplate: number | { id: number } } | [customerComplaintReportTemplate: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { customerComplaintReportTemplate: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { customerComplaintReportTemplate: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    customerComplaintReportTemplate: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        customerComplaintReportTemplate: typeof args.customerComplaintReportTemplate === 'object'
                ? args.customerComplaintReportTemplate.id
                : args.customerComplaintReportTemplate,
                }

    return destroy.definition.url
            .replace('{customerComplaintReportTemplate}', parsedArgs.customerComplaintReportTemplate.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CustomerComplaintAnalyticsController::destroy
 * @see app/Http/Controllers/CustomerComplaintAnalyticsController.php:104
 * @route '/customer-complaint-report-template/{customerComplaintReportTemplate}'
 */
destroy.delete = (args: { customerComplaintReportTemplate: number | { id: number } } | [customerComplaintReportTemplate: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\CustomerComplaintAnalyticsController::destroy
 * @see app/Http/Controllers/CustomerComplaintAnalyticsController.php:104
 * @route '/customer-complaint-report-template/{customerComplaintReportTemplate}'
 */
    const destroyForm = (args: { customerComplaintReportTemplate: number | { id: number } } | [customerComplaintReportTemplate: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CustomerComplaintAnalyticsController::destroy
 * @see app/Http/Controllers/CustomerComplaintAnalyticsController.php:104
 * @route '/customer-complaint-report-template/{customerComplaintReportTemplate}'
 */
        destroyForm.delete = (args: { customerComplaintReportTemplate: number | { id: number } } | [customerComplaintReportTemplate: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const customerComplaintReportTemplate = {
    store: Object.assign(store, store),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default customerComplaintReportTemplate