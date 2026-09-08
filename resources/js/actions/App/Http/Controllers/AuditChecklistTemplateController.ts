import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\AuditChecklistTemplateController::index
 * @see app/Http/Controllers/AuditChecklistTemplateController.php:13
 * @route '/audit-checklist-template/search'
 */
const index220df34b56f6e1a6a3d85f30f7449f72 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: index220df34b56f6e1a6a3d85f30f7449f72.url(options),
    method: 'post',
})

index220df34b56f6e1a6a3d85f30f7449f72.definition = {
    methods: ["post"],
    url: '/audit-checklist-template/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AuditChecklistTemplateController::index
 * @see app/Http/Controllers/AuditChecklistTemplateController.php:13
 * @route '/audit-checklist-template/search'
 */
index220df34b56f6e1a6a3d85f30f7449f72.url = (options?: RouteQueryOptions) => {
    return index220df34b56f6e1a6a3d85f30f7449f72.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditChecklistTemplateController::index
 * @see app/Http/Controllers/AuditChecklistTemplateController.php:13
 * @route '/audit-checklist-template/search'
 */
index220df34b56f6e1a6a3d85f30f7449f72.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: index220df34b56f6e1a6a3d85f30f7449f72.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\AuditChecklistTemplateController::index
 * @see app/Http/Controllers/AuditChecklistTemplateController.php:13
 * @route '/audit-checklist-template/search'
 */
    const index220df34b56f6e1a6a3d85f30f7449f72Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: index220df34b56f6e1a6a3d85f30f7449f72.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AuditChecklistTemplateController::index
 * @see app/Http/Controllers/AuditChecklistTemplateController.php:13
 * @route '/audit-checklist-template/search'
 */
        index220df34b56f6e1a6a3d85f30f7449f72Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: index220df34b56f6e1a6a3d85f30f7449f72.url(options),
            method: 'post',
        })
    
    index220df34b56f6e1a6a3d85f30f7449f72.form = index220df34b56f6e1a6a3d85f30f7449f72Form
    /**
* @see \App\Http\Controllers\AuditChecklistTemplateController::index
 * @see app/Http/Controllers/AuditChecklistTemplateController.php:13
 * @route '/audit-checklist-template'
 */
const index55d073479a5e850e84e9e6ab5ad1e1ef = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index55d073479a5e850e84e9e6ab5ad1e1ef.url(options),
    method: 'get',
})

index55d073479a5e850e84e9e6ab5ad1e1ef.definition = {
    methods: ["get","head"],
    url: '/audit-checklist-template',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AuditChecklistTemplateController::index
 * @see app/Http/Controllers/AuditChecklistTemplateController.php:13
 * @route '/audit-checklist-template'
 */
index55d073479a5e850e84e9e6ab5ad1e1ef.url = (options?: RouteQueryOptions) => {
    return index55d073479a5e850e84e9e6ab5ad1e1ef.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditChecklistTemplateController::index
 * @see app/Http/Controllers/AuditChecklistTemplateController.php:13
 * @route '/audit-checklist-template'
 */
index55d073479a5e850e84e9e6ab5ad1e1ef.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index55d073479a5e850e84e9e6ab5ad1e1ef.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AuditChecklistTemplateController::index
 * @see app/Http/Controllers/AuditChecklistTemplateController.php:13
 * @route '/audit-checklist-template'
 */
index55d073479a5e850e84e9e6ab5ad1e1ef.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index55d073479a5e850e84e9e6ab5ad1e1ef.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AuditChecklistTemplateController::index
 * @see app/Http/Controllers/AuditChecklistTemplateController.php:13
 * @route '/audit-checklist-template'
 */
    const index55d073479a5e850e84e9e6ab5ad1e1efForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index55d073479a5e850e84e9e6ab5ad1e1ef.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AuditChecklistTemplateController::index
 * @see app/Http/Controllers/AuditChecklistTemplateController.php:13
 * @route '/audit-checklist-template'
 */
        index55d073479a5e850e84e9e6ab5ad1e1efForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index55d073479a5e850e84e9e6ab5ad1e1ef.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AuditChecklistTemplateController::index
 * @see app/Http/Controllers/AuditChecklistTemplateController.php:13
 * @route '/audit-checklist-template'
 */
        index55d073479a5e850e84e9e6ab5ad1e1efForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index55d073479a5e850e84e9e6ab5ad1e1ef.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index55d073479a5e850e84e9e6ab5ad1e1ef.form = index55d073479a5e850e84e9e6ab5ad1e1efForm

/**
* Multiple routes resolve to \App\Http\Controllers\AuditChecklistTemplateController::index, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `index['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const index = {
    '/audit-checklist-template/search': index220df34b56f6e1a6a3d85f30f7449f72,
    '/audit-checklist-template': index55d073479a5e850e84e9e6ab5ad1e1ef,
}

/**
* @see \App\Http\Controllers\AuditChecklistTemplateController::create
 * @see app/Http/Controllers/AuditChecklistTemplateController.php:26
 * @route '/audit-checklist-template/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/audit-checklist-template/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AuditChecklistTemplateController::create
 * @see app/Http/Controllers/AuditChecklistTemplateController.php:26
 * @route '/audit-checklist-template/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditChecklistTemplateController::create
 * @see app/Http/Controllers/AuditChecklistTemplateController.php:26
 * @route '/audit-checklist-template/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AuditChecklistTemplateController::create
 * @see app/Http/Controllers/AuditChecklistTemplateController.php:26
 * @route '/audit-checklist-template/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AuditChecklistTemplateController::create
 * @see app/Http/Controllers/AuditChecklistTemplateController.php:26
 * @route '/audit-checklist-template/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AuditChecklistTemplateController::create
 * @see app/Http/Controllers/AuditChecklistTemplateController.php:26
 * @route '/audit-checklist-template/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AuditChecklistTemplateController::create
 * @see app/Http/Controllers/AuditChecklistTemplateController.php:26
 * @route '/audit-checklist-template/create'
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
* @see \App\Http\Controllers\AuditChecklistTemplateController::store
 * @see app/Http/Controllers/AuditChecklistTemplateController.php:31
 * @route '/audit-checklist-template'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/audit-checklist-template',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AuditChecklistTemplateController::store
 * @see app/Http/Controllers/AuditChecklistTemplateController.php:31
 * @route '/audit-checklist-template'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditChecklistTemplateController::store
 * @see app/Http/Controllers/AuditChecklistTemplateController.php:31
 * @route '/audit-checklist-template'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\AuditChecklistTemplateController::store
 * @see app/Http/Controllers/AuditChecklistTemplateController.php:31
 * @route '/audit-checklist-template'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AuditChecklistTemplateController::store
 * @see app/Http/Controllers/AuditChecklistTemplateController.php:31
 * @route '/audit-checklist-template'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\AuditChecklistTemplateController::show
 * @see app/Http/Controllers/AuditChecklistTemplateController.php:40
 * @route '/audit-checklist-template/{audit_checklist_template}'
 */
export const show = (args: { audit_checklist_template: number | { id: number } } | [audit_checklist_template: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/audit-checklist-template/{audit_checklist_template}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AuditChecklistTemplateController::show
 * @see app/Http/Controllers/AuditChecklistTemplateController.php:40
 * @route '/audit-checklist-template/{audit_checklist_template}'
 */
show.url = (args: { audit_checklist_template: number | { id: number } } | [audit_checklist_template: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { audit_checklist_template: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { audit_checklist_template: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    audit_checklist_template: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        audit_checklist_template: typeof args.audit_checklist_template === 'object'
                ? args.audit_checklist_template.id
                : args.audit_checklist_template,
                }

    return show.definition.url
            .replace('{audit_checklist_template}', parsedArgs.audit_checklist_template.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditChecklistTemplateController::show
 * @see app/Http/Controllers/AuditChecklistTemplateController.php:40
 * @route '/audit-checklist-template/{audit_checklist_template}'
 */
show.get = (args: { audit_checklist_template: number | { id: number } } | [audit_checklist_template: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AuditChecklistTemplateController::show
 * @see app/Http/Controllers/AuditChecklistTemplateController.php:40
 * @route '/audit-checklist-template/{audit_checklist_template}'
 */
show.head = (args: { audit_checklist_template: number | { id: number } } | [audit_checklist_template: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AuditChecklistTemplateController::show
 * @see app/Http/Controllers/AuditChecklistTemplateController.php:40
 * @route '/audit-checklist-template/{audit_checklist_template}'
 */
    const showForm = (args: { audit_checklist_template: number | { id: number } } | [audit_checklist_template: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AuditChecklistTemplateController::show
 * @see app/Http/Controllers/AuditChecklistTemplateController.php:40
 * @route '/audit-checklist-template/{audit_checklist_template}'
 */
        showForm.get = (args: { audit_checklist_template: number | { id: number } } | [audit_checklist_template: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AuditChecklistTemplateController::show
 * @see app/Http/Controllers/AuditChecklistTemplateController.php:40
 * @route '/audit-checklist-template/{audit_checklist_template}'
 */
        showForm.head = (args: { audit_checklist_template: number | { id: number } } | [audit_checklist_template: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\AuditChecklistTemplateController::edit
 * @see app/Http/Controllers/AuditChecklistTemplateController.php:49
 * @route '/audit-checklist-template/{audit_checklist_template}/edit'
 */
export const edit = (args: { audit_checklist_template: number | { id: number } } | [audit_checklist_template: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/audit-checklist-template/{audit_checklist_template}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AuditChecklistTemplateController::edit
 * @see app/Http/Controllers/AuditChecklistTemplateController.php:49
 * @route '/audit-checklist-template/{audit_checklist_template}/edit'
 */
edit.url = (args: { audit_checklist_template: number | { id: number } } | [audit_checklist_template: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { audit_checklist_template: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { audit_checklist_template: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    audit_checklist_template: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        audit_checklist_template: typeof args.audit_checklist_template === 'object'
                ? args.audit_checklist_template.id
                : args.audit_checklist_template,
                }

    return edit.definition.url
            .replace('{audit_checklist_template}', parsedArgs.audit_checklist_template.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditChecklistTemplateController::edit
 * @see app/Http/Controllers/AuditChecklistTemplateController.php:49
 * @route '/audit-checklist-template/{audit_checklist_template}/edit'
 */
edit.get = (args: { audit_checklist_template: number | { id: number } } | [audit_checklist_template: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AuditChecklistTemplateController::edit
 * @see app/Http/Controllers/AuditChecklistTemplateController.php:49
 * @route '/audit-checklist-template/{audit_checklist_template}/edit'
 */
edit.head = (args: { audit_checklist_template: number | { id: number } } | [audit_checklist_template: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AuditChecklistTemplateController::edit
 * @see app/Http/Controllers/AuditChecklistTemplateController.php:49
 * @route '/audit-checklist-template/{audit_checklist_template}/edit'
 */
    const editForm = (args: { audit_checklist_template: number | { id: number } } | [audit_checklist_template: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AuditChecklistTemplateController::edit
 * @see app/Http/Controllers/AuditChecklistTemplateController.php:49
 * @route '/audit-checklist-template/{audit_checklist_template}/edit'
 */
        editForm.get = (args: { audit_checklist_template: number | { id: number } } | [audit_checklist_template: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AuditChecklistTemplateController::edit
 * @see app/Http/Controllers/AuditChecklistTemplateController.php:49
 * @route '/audit-checklist-template/{audit_checklist_template}/edit'
 */
        editForm.head = (args: { audit_checklist_template: number | { id: number } } | [audit_checklist_template: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\AuditChecklistTemplateController::update
 * @see app/Http/Controllers/AuditChecklistTemplateController.php:54
 * @route '/audit-checklist-template/{audit_checklist_template}'
 */
export const update = (args: { audit_checklist_template: number | { id: number } } | [audit_checklist_template: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/audit-checklist-template/{audit_checklist_template}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\AuditChecklistTemplateController::update
 * @see app/Http/Controllers/AuditChecklistTemplateController.php:54
 * @route '/audit-checklist-template/{audit_checklist_template}'
 */
update.url = (args: { audit_checklist_template: number | { id: number } } | [audit_checklist_template: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { audit_checklist_template: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { audit_checklist_template: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    audit_checklist_template: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        audit_checklist_template: typeof args.audit_checklist_template === 'object'
                ? args.audit_checklist_template.id
                : args.audit_checklist_template,
                }

    return update.definition.url
            .replace('{audit_checklist_template}', parsedArgs.audit_checklist_template.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditChecklistTemplateController::update
 * @see app/Http/Controllers/AuditChecklistTemplateController.php:54
 * @route '/audit-checklist-template/{audit_checklist_template}'
 */
update.put = (args: { audit_checklist_template: number | { id: number } } | [audit_checklist_template: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\AuditChecklistTemplateController::update
 * @see app/Http/Controllers/AuditChecklistTemplateController.php:54
 * @route '/audit-checklist-template/{audit_checklist_template}'
 */
update.patch = (args: { audit_checklist_template: number | { id: number } } | [audit_checklist_template: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\AuditChecklistTemplateController::update
 * @see app/Http/Controllers/AuditChecklistTemplateController.php:54
 * @route '/audit-checklist-template/{audit_checklist_template}'
 */
    const updateForm = (args: { audit_checklist_template: number | { id: number } } | [audit_checklist_template: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AuditChecklistTemplateController::update
 * @see app/Http/Controllers/AuditChecklistTemplateController.php:54
 * @route '/audit-checklist-template/{audit_checklist_template}'
 */
        updateForm.put = (args: { audit_checklist_template: number | { id: number } } | [audit_checklist_template: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\AuditChecklistTemplateController::update
 * @see app/Http/Controllers/AuditChecklistTemplateController.php:54
 * @route '/audit-checklist-template/{audit_checklist_template}'
 */
        updateForm.patch = (args: { audit_checklist_template: number | { id: number } } | [audit_checklist_template: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\AuditChecklistTemplateController::destroy
 * @see app/Http/Controllers/AuditChecklistTemplateController.php:63
 * @route '/audit-checklist-template/{audit_checklist_template}'
 */
export const destroy = (args: { audit_checklist_template: number | { id: number } } | [audit_checklist_template: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/audit-checklist-template/{audit_checklist_template}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\AuditChecklistTemplateController::destroy
 * @see app/Http/Controllers/AuditChecklistTemplateController.php:63
 * @route '/audit-checklist-template/{audit_checklist_template}'
 */
destroy.url = (args: { audit_checklist_template: number | { id: number } } | [audit_checklist_template: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { audit_checklist_template: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { audit_checklist_template: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    audit_checklist_template: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        audit_checklist_template: typeof args.audit_checklist_template === 'object'
                ? args.audit_checklist_template.id
                : args.audit_checklist_template,
                }

    return destroy.definition.url
            .replace('{audit_checklist_template}', parsedArgs.audit_checklist_template.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditChecklistTemplateController::destroy
 * @see app/Http/Controllers/AuditChecklistTemplateController.php:63
 * @route '/audit-checklist-template/{audit_checklist_template}'
 */
destroy.delete = (args: { audit_checklist_template: number | { id: number } } | [audit_checklist_template: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\AuditChecklistTemplateController::destroy
 * @see app/Http/Controllers/AuditChecklistTemplateController.php:63
 * @route '/audit-checklist-template/{audit_checklist_template}'
 */
    const destroyForm = (args: { audit_checklist_template: number | { id: number } } | [audit_checklist_template: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AuditChecklistTemplateController::destroy
 * @see app/Http/Controllers/AuditChecklistTemplateController.php:63
 * @route '/audit-checklist-template/{audit_checklist_template}'
 */
        destroyForm.delete = (args: { audit_checklist_template: number | { id: number } } | [audit_checklist_template: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const AuditChecklistTemplateController = { index, create, store, show, edit, update, destroy }

export default AuditChecklistTemplateController