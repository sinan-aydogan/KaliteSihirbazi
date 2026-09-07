import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionAssignmentController::index
 * @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionAssignmentController.php:19
 * @route '/job-description-assignment/search'
 */
const index75429ece52bd995459d9677664604de4 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: index75429ece52bd995459d9677664604de4.url(options),
    method: 'post',
})

index75429ece52bd995459d9677664604de4.definition = {
    methods: ["post"],
    url: '/job-description-assignment/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionAssignmentController::index
 * @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionAssignmentController.php:19
 * @route '/job-description-assignment/search'
 */
index75429ece52bd995459d9677664604de4.url = (options?: RouteQueryOptions) => {
    return index75429ece52bd995459d9677664604de4.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionAssignmentController::index
 * @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionAssignmentController.php:19
 * @route '/job-description-assignment/search'
 */
index75429ece52bd995459d9677664604de4.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: index75429ece52bd995459d9677664604de4.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionAssignmentController::index
 * @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionAssignmentController.php:19
 * @route '/job-description-assignment/search'
 */
    const index75429ece52bd995459d9677664604de4Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: index75429ece52bd995459d9677664604de4.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionAssignmentController::index
 * @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionAssignmentController.php:19
 * @route '/job-description-assignment/search'
 */
        index75429ece52bd995459d9677664604de4Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: index75429ece52bd995459d9677664604de4.url(options),
            method: 'post',
        })
    
    index75429ece52bd995459d9677664604de4.form = index75429ece52bd995459d9677664604de4Form
    /**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionAssignmentController::index
 * @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionAssignmentController.php:19
 * @route '/job-description-assignment'
 */
const index08a4c81585e884dda1007161d7716692 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index08a4c81585e884dda1007161d7716692.url(options),
    method: 'get',
})

index08a4c81585e884dda1007161d7716692.definition = {
    methods: ["get","head"],
    url: '/job-description-assignment',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionAssignmentController::index
 * @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionAssignmentController.php:19
 * @route '/job-description-assignment'
 */
index08a4c81585e884dda1007161d7716692.url = (options?: RouteQueryOptions) => {
    return index08a4c81585e884dda1007161d7716692.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionAssignmentController::index
 * @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionAssignmentController.php:19
 * @route '/job-description-assignment'
 */
index08a4c81585e884dda1007161d7716692.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index08a4c81585e884dda1007161d7716692.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionAssignmentController::index
 * @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionAssignmentController.php:19
 * @route '/job-description-assignment'
 */
index08a4c81585e884dda1007161d7716692.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index08a4c81585e884dda1007161d7716692.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionAssignmentController::index
 * @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionAssignmentController.php:19
 * @route '/job-description-assignment'
 */
    const index08a4c81585e884dda1007161d7716692Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index08a4c81585e884dda1007161d7716692.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionAssignmentController::index
 * @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionAssignmentController.php:19
 * @route '/job-description-assignment'
 */
        index08a4c81585e884dda1007161d7716692Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index08a4c81585e884dda1007161d7716692.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionAssignmentController::index
 * @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionAssignmentController.php:19
 * @route '/job-description-assignment'
 */
        index08a4c81585e884dda1007161d7716692Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index08a4c81585e884dda1007161d7716692.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index08a4c81585e884dda1007161d7716692.form = index08a4c81585e884dda1007161d7716692Form

/**
* Multiple routes resolve to \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionAssignmentController::index, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `index['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const index = {
    '/job-description-assignment/search': index75429ece52bd995459d9677664604de4,
    '/job-description-assignment': index08a4c81585e884dda1007161d7716692,
}

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionAssignmentController::create
 * @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionAssignmentController.php:29
 * @route '/job-description-assignment/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/job-description-assignment/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionAssignmentController::create
 * @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionAssignmentController.php:29
 * @route '/job-description-assignment/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionAssignmentController::create
 * @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionAssignmentController.php:29
 * @route '/job-description-assignment/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionAssignmentController::create
 * @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionAssignmentController.php:29
 * @route '/job-description-assignment/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionAssignmentController::create
 * @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionAssignmentController.php:29
 * @route '/job-description-assignment/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionAssignmentController::create
 * @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionAssignmentController.php:29
 * @route '/job-description-assignment/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionAssignmentController::create
 * @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionAssignmentController.php:29
 * @route '/job-description-assignment/create'
 */
        createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionAssignmentController::store
 * @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionAssignmentController.php:39
 * @route '/job-description-assignment'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/job-description-assignment',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionAssignmentController::store
 * @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionAssignmentController.php:39
 * @route '/job-description-assignment'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionAssignmentController::store
 * @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionAssignmentController.php:39
 * @route '/job-description-assignment'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionAssignmentController::store
 * @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionAssignmentController.php:39
 * @route '/job-description-assignment'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionAssignmentController::store
 * @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionAssignmentController.php:39
 * @route '/job-description-assignment'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionAssignmentController::show
 * @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionAssignmentController.php:53
 * @route '/job-description-assignment/{job_description_assignment}'
 */
export const show = (args: { job_description_assignment: number | { id: number } } | [job_description_assignment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/job-description-assignment/{job_description_assignment}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionAssignmentController::show
 * @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionAssignmentController.php:53
 * @route '/job-description-assignment/{job_description_assignment}'
 */
show.url = (args: { job_description_assignment: number | { id: number } } | [job_description_assignment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { job_description_assignment: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { job_description_assignment: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    job_description_assignment: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        job_description_assignment: typeof args.job_description_assignment === 'object'
                ? args.job_description_assignment.id
                : args.job_description_assignment,
                }

    return show.definition.url
            .replace('{job_description_assignment}', parsedArgs.job_description_assignment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionAssignmentController::show
 * @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionAssignmentController.php:53
 * @route '/job-description-assignment/{job_description_assignment}'
 */
show.get = (args: { job_description_assignment: number | { id: number } } | [job_description_assignment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionAssignmentController::show
 * @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionAssignmentController.php:53
 * @route '/job-description-assignment/{job_description_assignment}'
 */
show.head = (args: { job_description_assignment: number | { id: number } } | [job_description_assignment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionAssignmentController::show
 * @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionAssignmentController.php:53
 * @route '/job-description-assignment/{job_description_assignment}'
 */
    const showForm = (args: { job_description_assignment: number | { id: number } } | [job_description_assignment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionAssignmentController::show
 * @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionAssignmentController.php:53
 * @route '/job-description-assignment/{job_description_assignment}'
 */
        showForm.get = (args: { job_description_assignment: number | { id: number } } | [job_description_assignment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionAssignmentController::show
 * @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionAssignmentController.php:53
 * @route '/job-description-assignment/{job_description_assignment}'
 */
        showForm.head = (args: { job_description_assignment: number | { id: number } } | [job_description_assignment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionAssignmentController::edit
 * @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionAssignmentController.php:63
 * @route '/job-description-assignment/{job_description_assignment}/edit'
 */
export const edit = (args: { job_description_assignment: number | { id: number } } | [job_description_assignment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/job-description-assignment/{job_description_assignment}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionAssignmentController::edit
 * @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionAssignmentController.php:63
 * @route '/job-description-assignment/{job_description_assignment}/edit'
 */
edit.url = (args: { job_description_assignment: number | { id: number } } | [job_description_assignment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { job_description_assignment: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { job_description_assignment: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    job_description_assignment: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        job_description_assignment: typeof args.job_description_assignment === 'object'
                ? args.job_description_assignment.id
                : args.job_description_assignment,
                }

    return edit.definition.url
            .replace('{job_description_assignment}', parsedArgs.job_description_assignment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionAssignmentController::edit
 * @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionAssignmentController.php:63
 * @route '/job-description-assignment/{job_description_assignment}/edit'
 */
edit.get = (args: { job_description_assignment: number | { id: number } } | [job_description_assignment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionAssignmentController::edit
 * @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionAssignmentController.php:63
 * @route '/job-description-assignment/{job_description_assignment}/edit'
 */
edit.head = (args: { job_description_assignment: number | { id: number } } | [job_description_assignment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionAssignmentController::edit
 * @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionAssignmentController.php:63
 * @route '/job-description-assignment/{job_description_assignment}/edit'
 */
    const editForm = (args: { job_description_assignment: number | { id: number } } | [job_description_assignment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionAssignmentController::edit
 * @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionAssignmentController.php:63
 * @route '/job-description-assignment/{job_description_assignment}/edit'
 */
        editForm.get = (args: { job_description_assignment: number | { id: number } } | [job_description_assignment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionAssignmentController::edit
 * @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionAssignmentController.php:63
 * @route '/job-description-assignment/{job_description_assignment}/edit'
 */
        editForm.head = (args: { job_description_assignment: number | { id: number } } | [job_description_assignment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionAssignmentController::update
 * @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionAssignmentController.php:73
 * @route '/job-description-assignment/{job_description_assignment}'
 */
export const update = (args: { job_description_assignment: number | { id: number } } | [job_description_assignment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/job-description-assignment/{job_description_assignment}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionAssignmentController::update
 * @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionAssignmentController.php:73
 * @route '/job-description-assignment/{job_description_assignment}'
 */
update.url = (args: { job_description_assignment: number | { id: number } } | [job_description_assignment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { job_description_assignment: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { job_description_assignment: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    job_description_assignment: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        job_description_assignment: typeof args.job_description_assignment === 'object'
                ? args.job_description_assignment.id
                : args.job_description_assignment,
                }

    return update.definition.url
            .replace('{job_description_assignment}', parsedArgs.job_description_assignment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionAssignmentController::update
 * @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionAssignmentController.php:73
 * @route '/job-description-assignment/{job_description_assignment}'
 */
update.put = (args: { job_description_assignment: number | { id: number } } | [job_description_assignment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionAssignmentController::update
 * @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionAssignmentController.php:73
 * @route '/job-description-assignment/{job_description_assignment}'
 */
update.patch = (args: { job_description_assignment: number | { id: number } } | [job_description_assignment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionAssignmentController::update
 * @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionAssignmentController.php:73
 * @route '/job-description-assignment/{job_description_assignment}'
 */
    const updateForm = (args: { job_description_assignment: number | { id: number } } | [job_description_assignment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionAssignmentController::update
 * @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionAssignmentController.php:73
 * @route '/job-description-assignment/{job_description_assignment}'
 */
        updateForm.put = (args: { job_description_assignment: number | { id: number } } | [job_description_assignment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionAssignmentController::update
 * @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionAssignmentController.php:73
 * @route '/job-description-assignment/{job_description_assignment}'
 */
        updateForm.patch = (args: { job_description_assignment: number | { id: number } } | [job_description_assignment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionAssignmentController::destroy
 * @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionAssignmentController.php:85
 * @route '/job-description-assignment/{job_description_assignment}'
 */
export const destroy = (args: { job_description_assignment: number | { id: number } } | [job_description_assignment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/job-description-assignment/{job_description_assignment}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionAssignmentController::destroy
 * @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionAssignmentController.php:85
 * @route '/job-description-assignment/{job_description_assignment}'
 */
destroy.url = (args: { job_description_assignment: number | { id: number } } | [job_description_assignment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { job_description_assignment: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { job_description_assignment: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    job_description_assignment: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        job_description_assignment: typeof args.job_description_assignment === 'object'
                ? args.job_description_assignment.id
                : args.job_description_assignment,
                }

    return destroy.definition.url
            .replace('{job_description_assignment}', parsedArgs.job_description_assignment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionAssignmentController::destroy
 * @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionAssignmentController.php:85
 * @route '/job-description-assignment/{job_description_assignment}'
 */
destroy.delete = (args: { job_description_assignment: number | { id: number } } | [job_description_assignment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionAssignmentController::destroy
 * @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionAssignmentController.php:85
 * @route '/job-description-assignment/{job_description_assignment}'
 */
    const destroyForm = (args: { job_description_assignment: number | { id: number } } | [job_description_assignment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionAssignmentController::destroy
 * @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionAssignmentController.php:85
 * @route '/job-description-assignment/{job_description_assignment}'
 */
        destroyForm.delete = (args: { job_description_assignment: number | { id: number } } | [job_description_assignment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const JobDescriptionAssignmentController = { index, create, store, show, edit, update, destroy }

export default JobDescriptionAssignmentController