import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\ComplaintSubjectController::search
 * @see app/Http/Controllers/ComplaintSubjectController.php:13
 * @route '/complaint-subject/search'
 */
export const search = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: search.url(options),
    method: 'post',
})

search.definition = {
    methods: ["post"],
    url: '/complaint-subject/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ComplaintSubjectController::search
 * @see app/Http/Controllers/ComplaintSubjectController.php:13
 * @route '/complaint-subject/search'
 */
search.url = (options?: RouteQueryOptions) => {
    return search.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ComplaintSubjectController::search
 * @see app/Http/Controllers/ComplaintSubjectController.php:13
 * @route '/complaint-subject/search'
 */
search.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: search.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ComplaintSubjectController::search
 * @see app/Http/Controllers/ComplaintSubjectController.php:13
 * @route '/complaint-subject/search'
 */
    const searchForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: search.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ComplaintSubjectController::search
 * @see app/Http/Controllers/ComplaintSubjectController.php:13
 * @route '/complaint-subject/search'
 */
        searchForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: search.url(options),
            method: 'post',
        })
    
    search.form = searchForm
/**
* @see \App\Http\Controllers\ComplaintSubjectController::index
 * @see app/Http/Controllers/ComplaintSubjectController.php:13
 * @route '/complaint-subject'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/complaint-subject',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ComplaintSubjectController::index
 * @see app/Http/Controllers/ComplaintSubjectController.php:13
 * @route '/complaint-subject'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ComplaintSubjectController::index
 * @see app/Http/Controllers/ComplaintSubjectController.php:13
 * @route '/complaint-subject'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ComplaintSubjectController::index
 * @see app/Http/Controllers/ComplaintSubjectController.php:13
 * @route '/complaint-subject'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ComplaintSubjectController::index
 * @see app/Http/Controllers/ComplaintSubjectController.php:13
 * @route '/complaint-subject'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ComplaintSubjectController::index
 * @see app/Http/Controllers/ComplaintSubjectController.php:13
 * @route '/complaint-subject'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ComplaintSubjectController::index
 * @see app/Http/Controllers/ComplaintSubjectController.php:13
 * @route '/complaint-subject'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\ComplaintSubjectController::create
 * @see app/Http/Controllers/ComplaintSubjectController.php:25
 * @route '/complaint-subject/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/complaint-subject/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ComplaintSubjectController::create
 * @see app/Http/Controllers/ComplaintSubjectController.php:25
 * @route '/complaint-subject/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ComplaintSubjectController::create
 * @see app/Http/Controllers/ComplaintSubjectController.php:25
 * @route '/complaint-subject/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ComplaintSubjectController::create
 * @see app/Http/Controllers/ComplaintSubjectController.php:25
 * @route '/complaint-subject/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ComplaintSubjectController::create
 * @see app/Http/Controllers/ComplaintSubjectController.php:25
 * @route '/complaint-subject/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ComplaintSubjectController::create
 * @see app/Http/Controllers/ComplaintSubjectController.php:25
 * @route '/complaint-subject/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ComplaintSubjectController::create
 * @see app/Http/Controllers/ComplaintSubjectController.php:25
 * @route '/complaint-subject/create'
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
* @see \App\Http\Controllers\ComplaintSubjectController::store
 * @see app/Http/Controllers/ComplaintSubjectController.php:30
 * @route '/complaint-subject'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/complaint-subject',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ComplaintSubjectController::store
 * @see app/Http/Controllers/ComplaintSubjectController.php:30
 * @route '/complaint-subject'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ComplaintSubjectController::store
 * @see app/Http/Controllers/ComplaintSubjectController.php:30
 * @route '/complaint-subject'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ComplaintSubjectController::store
 * @see app/Http/Controllers/ComplaintSubjectController.php:30
 * @route '/complaint-subject'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ComplaintSubjectController::store
 * @see app/Http/Controllers/ComplaintSubjectController.php:30
 * @route '/complaint-subject'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\ComplaintSubjectController::show
 * @see app/Http/Controllers/ComplaintSubjectController.php:43
 * @route '/complaint-subject/{complaint_subject}'
 */
export const show = (args: { complaint_subject: number | { id: number } } | [complaint_subject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/complaint-subject/{complaint_subject}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ComplaintSubjectController::show
 * @see app/Http/Controllers/ComplaintSubjectController.php:43
 * @route '/complaint-subject/{complaint_subject}'
 */
show.url = (args: { complaint_subject: number | { id: number } } | [complaint_subject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { complaint_subject: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { complaint_subject: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    complaint_subject: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        complaint_subject: typeof args.complaint_subject === 'object'
                ? args.complaint_subject.id
                : args.complaint_subject,
                }

    return show.definition.url
            .replace('{complaint_subject}', parsedArgs.complaint_subject.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ComplaintSubjectController::show
 * @see app/Http/Controllers/ComplaintSubjectController.php:43
 * @route '/complaint-subject/{complaint_subject}'
 */
show.get = (args: { complaint_subject: number | { id: number } } | [complaint_subject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ComplaintSubjectController::show
 * @see app/Http/Controllers/ComplaintSubjectController.php:43
 * @route '/complaint-subject/{complaint_subject}'
 */
show.head = (args: { complaint_subject: number | { id: number } } | [complaint_subject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ComplaintSubjectController::show
 * @see app/Http/Controllers/ComplaintSubjectController.php:43
 * @route '/complaint-subject/{complaint_subject}'
 */
    const showForm = (args: { complaint_subject: number | { id: number } } | [complaint_subject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ComplaintSubjectController::show
 * @see app/Http/Controllers/ComplaintSubjectController.php:43
 * @route '/complaint-subject/{complaint_subject}'
 */
        showForm.get = (args: { complaint_subject: number | { id: number } } | [complaint_subject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ComplaintSubjectController::show
 * @see app/Http/Controllers/ComplaintSubjectController.php:43
 * @route '/complaint-subject/{complaint_subject}'
 */
        showForm.head = (args: { complaint_subject: number | { id: number } } | [complaint_subject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\ComplaintSubjectController::edit
 * @see app/Http/Controllers/ComplaintSubjectController.php:48
 * @route '/complaint-subject/{complaint_subject}/edit'
 */
export const edit = (args: { complaint_subject: number | { id: number } } | [complaint_subject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/complaint-subject/{complaint_subject}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ComplaintSubjectController::edit
 * @see app/Http/Controllers/ComplaintSubjectController.php:48
 * @route '/complaint-subject/{complaint_subject}/edit'
 */
edit.url = (args: { complaint_subject: number | { id: number } } | [complaint_subject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { complaint_subject: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { complaint_subject: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    complaint_subject: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        complaint_subject: typeof args.complaint_subject === 'object'
                ? args.complaint_subject.id
                : args.complaint_subject,
                }

    return edit.definition.url
            .replace('{complaint_subject}', parsedArgs.complaint_subject.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ComplaintSubjectController::edit
 * @see app/Http/Controllers/ComplaintSubjectController.php:48
 * @route '/complaint-subject/{complaint_subject}/edit'
 */
edit.get = (args: { complaint_subject: number | { id: number } } | [complaint_subject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ComplaintSubjectController::edit
 * @see app/Http/Controllers/ComplaintSubjectController.php:48
 * @route '/complaint-subject/{complaint_subject}/edit'
 */
edit.head = (args: { complaint_subject: number | { id: number } } | [complaint_subject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ComplaintSubjectController::edit
 * @see app/Http/Controllers/ComplaintSubjectController.php:48
 * @route '/complaint-subject/{complaint_subject}/edit'
 */
    const editForm = (args: { complaint_subject: number | { id: number } } | [complaint_subject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ComplaintSubjectController::edit
 * @see app/Http/Controllers/ComplaintSubjectController.php:48
 * @route '/complaint-subject/{complaint_subject}/edit'
 */
        editForm.get = (args: { complaint_subject: number | { id: number } } | [complaint_subject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ComplaintSubjectController::edit
 * @see app/Http/Controllers/ComplaintSubjectController.php:48
 * @route '/complaint-subject/{complaint_subject}/edit'
 */
        editForm.head = (args: { complaint_subject: number | { id: number } } | [complaint_subject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\ComplaintSubjectController::update
 * @see app/Http/Controllers/ComplaintSubjectController.php:53
 * @route '/complaint-subject/{complaint_subject}'
 */
export const update = (args: { complaint_subject: number | { id: number } } | [complaint_subject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/complaint-subject/{complaint_subject}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\ComplaintSubjectController::update
 * @see app/Http/Controllers/ComplaintSubjectController.php:53
 * @route '/complaint-subject/{complaint_subject}'
 */
update.url = (args: { complaint_subject: number | { id: number } } | [complaint_subject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { complaint_subject: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { complaint_subject: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    complaint_subject: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        complaint_subject: typeof args.complaint_subject === 'object'
                ? args.complaint_subject.id
                : args.complaint_subject,
                }

    return update.definition.url
            .replace('{complaint_subject}', parsedArgs.complaint_subject.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ComplaintSubjectController::update
 * @see app/Http/Controllers/ComplaintSubjectController.php:53
 * @route '/complaint-subject/{complaint_subject}'
 */
update.put = (args: { complaint_subject: number | { id: number } } | [complaint_subject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\ComplaintSubjectController::update
 * @see app/Http/Controllers/ComplaintSubjectController.php:53
 * @route '/complaint-subject/{complaint_subject}'
 */
update.patch = (args: { complaint_subject: number | { id: number } } | [complaint_subject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\ComplaintSubjectController::update
 * @see app/Http/Controllers/ComplaintSubjectController.php:53
 * @route '/complaint-subject/{complaint_subject}'
 */
    const updateForm = (args: { complaint_subject: number | { id: number } } | [complaint_subject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ComplaintSubjectController::update
 * @see app/Http/Controllers/ComplaintSubjectController.php:53
 * @route '/complaint-subject/{complaint_subject}'
 */
        updateForm.put = (args: { complaint_subject: number | { id: number } } | [complaint_subject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\ComplaintSubjectController::update
 * @see app/Http/Controllers/ComplaintSubjectController.php:53
 * @route '/complaint-subject/{complaint_subject}'
 */
        updateForm.patch = (args: { complaint_subject: number | { id: number } } | [complaint_subject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\ComplaintSubjectController::destroy
 * @see app/Http/Controllers/ComplaintSubjectController.php:62
 * @route '/complaint-subject/{complaint_subject}'
 */
export const destroy = (args: { complaint_subject: number | { id: number } } | [complaint_subject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/complaint-subject/{complaint_subject}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ComplaintSubjectController::destroy
 * @see app/Http/Controllers/ComplaintSubjectController.php:62
 * @route '/complaint-subject/{complaint_subject}'
 */
destroy.url = (args: { complaint_subject: number | { id: number } } | [complaint_subject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { complaint_subject: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { complaint_subject: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    complaint_subject: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        complaint_subject: typeof args.complaint_subject === 'object'
                ? args.complaint_subject.id
                : args.complaint_subject,
                }

    return destroy.definition.url
            .replace('{complaint_subject}', parsedArgs.complaint_subject.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ComplaintSubjectController::destroy
 * @see app/Http/Controllers/ComplaintSubjectController.php:62
 * @route '/complaint-subject/{complaint_subject}'
 */
destroy.delete = (args: { complaint_subject: number | { id: number } } | [complaint_subject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\ComplaintSubjectController::destroy
 * @see app/Http/Controllers/ComplaintSubjectController.php:62
 * @route '/complaint-subject/{complaint_subject}'
 */
    const destroyForm = (args: { complaint_subject: number | { id: number } } | [complaint_subject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ComplaintSubjectController::destroy
 * @see app/Http/Controllers/ComplaintSubjectController.php:62
 * @route '/complaint-subject/{complaint_subject}'
 */
        destroyForm.delete = (args: { complaint_subject: number | { id: number } } | [complaint_subject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const complaintSubject = {
    search: Object.assign(search, search),
index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default complaintSubject