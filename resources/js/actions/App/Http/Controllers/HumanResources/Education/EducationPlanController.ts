import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\HumanResources\Education\EducationPlanController::index
* @see app/Http/Controllers/HumanResources/Education/EducationPlanController.php:21
* @route '/education-plan/search'
*/
const index941f30aab87f3a2432e27e0d776bc155 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: index941f30aab87f3a2432e27e0d776bc155.url(options),
    method: 'post',
})

index941f30aab87f3a2432e27e0d776bc155.definition = {
    methods: ["post"],
    url: '/education-plan/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationPlanController::index
* @see app/Http/Controllers/HumanResources/Education/EducationPlanController.php:21
* @route '/education-plan/search'
*/
index941f30aab87f3a2432e27e0d776bc155.url = (options?: RouteQueryOptions) => {
    return index941f30aab87f3a2432e27e0d776bc155.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationPlanController::index
* @see app/Http/Controllers/HumanResources/Education/EducationPlanController.php:21
* @route '/education-plan/search'
*/
index941f30aab87f3a2432e27e0d776bc155.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: index941f30aab87f3a2432e27e0d776bc155.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationPlanController::index
* @see app/Http/Controllers/HumanResources/Education/EducationPlanController.php:21
* @route '/education-plan/search'
*/
const index941f30aab87f3a2432e27e0d776bc155Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: index941f30aab87f3a2432e27e0d776bc155.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationPlanController::index
* @see app/Http/Controllers/HumanResources/Education/EducationPlanController.php:21
* @route '/education-plan/search'
*/
index941f30aab87f3a2432e27e0d776bc155Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: index941f30aab87f3a2432e27e0d776bc155.url(options),
    method: 'post',
})

index941f30aab87f3a2432e27e0d776bc155.form = index941f30aab87f3a2432e27e0d776bc155Form
/**
* @see \App\Http\Controllers\HumanResources\Education\EducationPlanController::index
* @see app/Http/Controllers/HumanResources/Education/EducationPlanController.php:21
* @route '/education-plan'
*/
const indexf8251208d4eb20839b14949dfc1458f2 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexf8251208d4eb20839b14949dfc1458f2.url(options),
    method: 'get',
})

indexf8251208d4eb20839b14949dfc1458f2.definition = {
    methods: ["get","head"],
    url: '/education-plan',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationPlanController::index
* @see app/Http/Controllers/HumanResources/Education/EducationPlanController.php:21
* @route '/education-plan'
*/
indexf8251208d4eb20839b14949dfc1458f2.url = (options?: RouteQueryOptions) => {
    return indexf8251208d4eb20839b14949dfc1458f2.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationPlanController::index
* @see app/Http/Controllers/HumanResources/Education/EducationPlanController.php:21
* @route '/education-plan'
*/
indexf8251208d4eb20839b14949dfc1458f2.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexf8251208d4eb20839b14949dfc1458f2.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationPlanController::index
* @see app/Http/Controllers/HumanResources/Education/EducationPlanController.php:21
* @route '/education-plan'
*/
indexf8251208d4eb20839b14949dfc1458f2.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexf8251208d4eb20839b14949dfc1458f2.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationPlanController::index
* @see app/Http/Controllers/HumanResources/Education/EducationPlanController.php:21
* @route '/education-plan'
*/
const indexf8251208d4eb20839b14949dfc1458f2Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexf8251208d4eb20839b14949dfc1458f2.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationPlanController::index
* @see app/Http/Controllers/HumanResources/Education/EducationPlanController.php:21
* @route '/education-plan'
*/
indexf8251208d4eb20839b14949dfc1458f2Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexf8251208d4eb20839b14949dfc1458f2.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationPlanController::index
* @see app/Http/Controllers/HumanResources/Education/EducationPlanController.php:21
* @route '/education-plan'
*/
indexf8251208d4eb20839b14949dfc1458f2Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexf8251208d4eb20839b14949dfc1458f2.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

indexf8251208d4eb20839b14949dfc1458f2.form = indexf8251208d4eb20839b14949dfc1458f2Form

/**
* Multiple routes resolve to \App\Http\Controllers\HumanResources\Education\EducationPlanController::index, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `index['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const index = {
    '/education-plan/search': index941f30aab87f3a2432e27e0d776bc155,
    '/education-plan': indexf8251208d4eb20839b14949dfc1458f2,
}

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationPlanController::create
* @see app/Http/Controllers/HumanResources/Education/EducationPlanController.php:45
* @route '/education-plan/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/education-plan/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationPlanController::create
* @see app/Http/Controllers/HumanResources/Education/EducationPlanController.php:45
* @route '/education-plan/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationPlanController::create
* @see app/Http/Controllers/HumanResources/Education/EducationPlanController.php:45
* @route '/education-plan/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationPlanController::create
* @see app/Http/Controllers/HumanResources/Education/EducationPlanController.php:45
* @route '/education-plan/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationPlanController::create
* @see app/Http/Controllers/HumanResources/Education/EducationPlanController.php:45
* @route '/education-plan/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationPlanController::create
* @see app/Http/Controllers/HumanResources/Education/EducationPlanController.php:45
* @route '/education-plan/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationPlanController::create
* @see app/Http/Controllers/HumanResources/Education/EducationPlanController.php:45
* @route '/education-plan/create'
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
* @see \App\Http\Controllers\HumanResources\Education\EducationPlanController::store
* @see app/Http/Controllers/HumanResources/Education/EducationPlanController.php:55
* @route '/education-plan'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/education-plan',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationPlanController::store
* @see app/Http/Controllers/HumanResources/Education/EducationPlanController.php:55
* @route '/education-plan'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationPlanController::store
* @see app/Http/Controllers/HumanResources/Education/EducationPlanController.php:55
* @route '/education-plan'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationPlanController::store
* @see app/Http/Controllers/HumanResources/Education/EducationPlanController.php:55
* @route '/education-plan'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationPlanController::store
* @see app/Http/Controllers/HumanResources/Education/EducationPlanController.php:55
* @route '/education-plan'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationPlanController::show
* @see app/Http/Controllers/HumanResources/Education/EducationPlanController.php:70
* @route '/education-plan/{education_plan}'
*/
export const show = (args: { education_plan: number | { id: number } } | [education_plan: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/education-plan/{education_plan}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationPlanController::show
* @see app/Http/Controllers/HumanResources/Education/EducationPlanController.php:70
* @route '/education-plan/{education_plan}'
*/
show.url = (args: { education_plan: number | { id: number } } | [education_plan: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { education_plan: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { education_plan: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            education_plan: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        education_plan: typeof args.education_plan === 'object'
        ? args.education_plan.id
        : args.education_plan,
    }

    return show.definition.url
            .replace('{education_plan}', parsedArgs.education_plan.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationPlanController::show
* @see app/Http/Controllers/HumanResources/Education/EducationPlanController.php:70
* @route '/education-plan/{education_plan}'
*/
show.get = (args: { education_plan: number | { id: number } } | [education_plan: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationPlanController::show
* @see app/Http/Controllers/HumanResources/Education/EducationPlanController.php:70
* @route '/education-plan/{education_plan}'
*/
show.head = (args: { education_plan: number | { id: number } } | [education_plan: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationPlanController::show
* @see app/Http/Controllers/HumanResources/Education/EducationPlanController.php:70
* @route '/education-plan/{education_plan}'
*/
const showForm = (args: { education_plan: number | { id: number } } | [education_plan: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationPlanController::show
* @see app/Http/Controllers/HumanResources/Education/EducationPlanController.php:70
* @route '/education-plan/{education_plan}'
*/
showForm.get = (args: { education_plan: number | { id: number } } | [education_plan: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationPlanController::show
* @see app/Http/Controllers/HumanResources/Education/EducationPlanController.php:70
* @route '/education-plan/{education_plan}'
*/
showForm.head = (args: { education_plan: number | { id: number } } | [education_plan: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\HumanResources\Education\EducationPlanController::edit
* @see app/Http/Controllers/HumanResources/Education/EducationPlanController.php:82
* @route '/education-plan/{education_plan}/edit'
*/
export const edit = (args: { education_plan: number | { id: number } } | [education_plan: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/education-plan/{education_plan}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationPlanController::edit
* @see app/Http/Controllers/HumanResources/Education/EducationPlanController.php:82
* @route '/education-plan/{education_plan}/edit'
*/
edit.url = (args: { education_plan: number | { id: number } } | [education_plan: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { education_plan: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { education_plan: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            education_plan: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        education_plan: typeof args.education_plan === 'object'
        ? args.education_plan.id
        : args.education_plan,
    }

    return edit.definition.url
            .replace('{education_plan}', parsedArgs.education_plan.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationPlanController::edit
* @see app/Http/Controllers/HumanResources/Education/EducationPlanController.php:82
* @route '/education-plan/{education_plan}/edit'
*/
edit.get = (args: { education_plan: number | { id: number } } | [education_plan: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationPlanController::edit
* @see app/Http/Controllers/HumanResources/Education/EducationPlanController.php:82
* @route '/education-plan/{education_plan}/edit'
*/
edit.head = (args: { education_plan: number | { id: number } } | [education_plan: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationPlanController::edit
* @see app/Http/Controllers/HumanResources/Education/EducationPlanController.php:82
* @route '/education-plan/{education_plan}/edit'
*/
const editForm = (args: { education_plan: number | { id: number } } | [education_plan: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationPlanController::edit
* @see app/Http/Controllers/HumanResources/Education/EducationPlanController.php:82
* @route '/education-plan/{education_plan}/edit'
*/
editForm.get = (args: { education_plan: number | { id: number } } | [education_plan: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationPlanController::edit
* @see app/Http/Controllers/HumanResources/Education/EducationPlanController.php:82
* @route '/education-plan/{education_plan}/edit'
*/
editForm.head = (args: { education_plan: number | { id: number } } | [education_plan: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\HumanResources\Education\EducationPlanController::update
* @see app/Http/Controllers/HumanResources/Education/EducationPlanController.php:92
* @route '/education-plan/{education_plan}'
*/
export const update = (args: { education_plan: number | { id: number } } | [education_plan: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/education-plan/{education_plan}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationPlanController::update
* @see app/Http/Controllers/HumanResources/Education/EducationPlanController.php:92
* @route '/education-plan/{education_plan}'
*/
update.url = (args: { education_plan: number | { id: number } } | [education_plan: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { education_plan: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { education_plan: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            education_plan: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        education_plan: typeof args.education_plan === 'object'
        ? args.education_plan.id
        : args.education_plan,
    }

    return update.definition.url
            .replace('{education_plan}', parsedArgs.education_plan.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationPlanController::update
* @see app/Http/Controllers/HumanResources/Education/EducationPlanController.php:92
* @route '/education-plan/{education_plan}'
*/
update.put = (args: { education_plan: number | { id: number } } | [education_plan: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationPlanController::update
* @see app/Http/Controllers/HumanResources/Education/EducationPlanController.php:92
* @route '/education-plan/{education_plan}'
*/
update.patch = (args: { education_plan: number | { id: number } } | [education_plan: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationPlanController::update
* @see app/Http/Controllers/HumanResources/Education/EducationPlanController.php:92
* @route '/education-plan/{education_plan}'
*/
const updateForm = (args: { education_plan: number | { id: number } } | [education_plan: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationPlanController::update
* @see app/Http/Controllers/HumanResources/Education/EducationPlanController.php:92
* @route '/education-plan/{education_plan}'
*/
updateForm.put = (args: { education_plan: number | { id: number } } | [education_plan: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationPlanController::update
* @see app/Http/Controllers/HumanResources/Education/EducationPlanController.php:92
* @route '/education-plan/{education_plan}'
*/
updateForm.patch = (args: { education_plan: number | { id: number } } | [education_plan: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\HumanResources\Education\EducationPlanController::destroy
* @see app/Http/Controllers/HumanResources/Education/EducationPlanController.php:106
* @route '/education-plan/{education_plan}'
*/
export const destroy = (args: { education_plan: number | { id: number } } | [education_plan: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/education-plan/{education_plan}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationPlanController::destroy
* @see app/Http/Controllers/HumanResources/Education/EducationPlanController.php:106
* @route '/education-plan/{education_plan}'
*/
destroy.url = (args: { education_plan: number | { id: number } } | [education_plan: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { education_plan: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { education_plan: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            education_plan: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        education_plan: typeof args.education_plan === 'object'
        ? args.education_plan.id
        : args.education_plan,
    }

    return destroy.definition.url
            .replace('{education_plan}', parsedArgs.education_plan.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationPlanController::destroy
* @see app/Http/Controllers/HumanResources/Education/EducationPlanController.php:106
* @route '/education-plan/{education_plan}'
*/
destroy.delete = (args: { education_plan: number | { id: number } } | [education_plan: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationPlanController::destroy
* @see app/Http/Controllers/HumanResources/Education/EducationPlanController.php:106
* @route '/education-plan/{education_plan}'
*/
const destroyForm = (args: { education_plan: number | { id: number } } | [education_plan: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationPlanController::destroy
* @see app/Http/Controllers/HumanResources/Education/EducationPlanController.php:106
* @route '/education-plan/{education_plan}'
*/
destroyForm.delete = (args: { education_plan: number | { id: number } } | [education_plan: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationPlanController::deleted
* @see app/Http/Controllers/HumanResources/Education/EducationPlanController.php:33
* @route '/education-plan-deleted'
*/
export const deleted = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deleted.url(options),
    method: 'get',
})

deleted.definition = {
    methods: ["get","head"],
    url: '/education-plan-deleted',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationPlanController::deleted
* @see app/Http/Controllers/HumanResources/Education/EducationPlanController.php:33
* @route '/education-plan-deleted'
*/
deleted.url = (options?: RouteQueryOptions) => {
    return deleted.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationPlanController::deleted
* @see app/Http/Controllers/HumanResources/Education/EducationPlanController.php:33
* @route '/education-plan-deleted'
*/
deleted.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deleted.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationPlanController::deleted
* @see app/Http/Controllers/HumanResources/Education/EducationPlanController.php:33
* @route '/education-plan-deleted'
*/
deleted.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: deleted.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationPlanController::deleted
* @see app/Http/Controllers/HumanResources/Education/EducationPlanController.php:33
* @route '/education-plan-deleted'
*/
const deletedForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: deleted.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationPlanController::deleted
* @see app/Http/Controllers/HumanResources/Education/EducationPlanController.php:33
* @route '/education-plan-deleted'
*/
deletedForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: deleted.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationPlanController::deleted
* @see app/Http/Controllers/HumanResources/Education/EducationPlanController.php:33
* @route '/education-plan-deleted'
*/
deletedForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: deleted.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

deleted.form = deletedForm

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationPlanController::permanentDestroy
* @see app/Http/Controllers/HumanResources/Education/EducationPlanController.php:120
* @route '/education-plan-permanent-delete/{educationPlan}'
*/
export const permanentDestroy = (args: { educationPlan: number | { id: number } } | [educationPlan: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: permanentDestroy.url(args, options),
    method: 'delete',
})

permanentDestroy.definition = {
    methods: ["delete"],
    url: '/education-plan-permanent-delete/{educationPlan}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationPlanController::permanentDestroy
* @see app/Http/Controllers/HumanResources/Education/EducationPlanController.php:120
* @route '/education-plan-permanent-delete/{educationPlan}'
*/
permanentDestroy.url = (args: { educationPlan: number | { id: number } } | [educationPlan: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { educationPlan: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { educationPlan: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            educationPlan: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        educationPlan: typeof args.educationPlan === 'object'
        ? args.educationPlan.id
        : args.educationPlan,
    }

    return permanentDestroy.definition.url
            .replace('{educationPlan}', parsedArgs.educationPlan.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationPlanController::permanentDestroy
* @see app/Http/Controllers/HumanResources/Education/EducationPlanController.php:120
* @route '/education-plan-permanent-delete/{educationPlan}'
*/
permanentDestroy.delete = (args: { educationPlan: number | { id: number } } | [educationPlan: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: permanentDestroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationPlanController::permanentDestroy
* @see app/Http/Controllers/HumanResources/Education/EducationPlanController.php:120
* @route '/education-plan-permanent-delete/{educationPlan}'
*/
const permanentDestroyForm = (args: { educationPlan: number | { id: number } } | [educationPlan: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: permanentDestroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationPlanController::permanentDestroy
* @see app/Http/Controllers/HumanResources/Education/EducationPlanController.php:120
* @route '/education-plan-permanent-delete/{educationPlan}'
*/
permanentDestroyForm.delete = (args: { educationPlan: number | { id: number } } | [educationPlan: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: permanentDestroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

permanentDestroy.form = permanentDestroyForm

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationPlanController::restore
* @see app/Http/Controllers/HumanResources/Education/EducationPlanController.php:136
* @route '/education-plan-restore/{educationPlan}'
*/
export const restore = (args: { educationPlan: number | { id: number } } | [educationPlan: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: restore.url(args, options),
    method: 'get',
})

restore.definition = {
    methods: ["get","head"],
    url: '/education-plan-restore/{educationPlan}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationPlanController::restore
* @see app/Http/Controllers/HumanResources/Education/EducationPlanController.php:136
* @route '/education-plan-restore/{educationPlan}'
*/
restore.url = (args: { educationPlan: number | { id: number } } | [educationPlan: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { educationPlan: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { educationPlan: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            educationPlan: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        educationPlan: typeof args.educationPlan === 'object'
        ? args.educationPlan.id
        : args.educationPlan,
    }

    return restore.definition.url
            .replace('{educationPlan}', parsedArgs.educationPlan.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationPlanController::restore
* @see app/Http/Controllers/HumanResources/Education/EducationPlanController.php:136
* @route '/education-plan-restore/{educationPlan}'
*/
restore.get = (args: { educationPlan: number | { id: number } } | [educationPlan: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: restore.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationPlanController::restore
* @see app/Http/Controllers/HumanResources/Education/EducationPlanController.php:136
* @route '/education-plan-restore/{educationPlan}'
*/
restore.head = (args: { educationPlan: number | { id: number } } | [educationPlan: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: restore.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationPlanController::restore
* @see app/Http/Controllers/HumanResources/Education/EducationPlanController.php:136
* @route '/education-plan-restore/{educationPlan}'
*/
const restoreForm = (args: { educationPlan: number | { id: number } } | [educationPlan: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: restore.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationPlanController::restore
* @see app/Http/Controllers/HumanResources/Education/EducationPlanController.php:136
* @route '/education-plan-restore/{educationPlan}'
*/
restoreForm.get = (args: { educationPlan: number | { id: number } } | [educationPlan: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: restore.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationPlanController::restore
* @see app/Http/Controllers/HumanResources/Education/EducationPlanController.php:136
* @route '/education-plan-restore/{educationPlan}'
*/
restoreForm.head = (args: { educationPlan: number | { id: number } } | [educationPlan: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: restore.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

restore.form = restoreForm

const EducationPlanController = { index, create, store, show, edit, update, destroy, deleted, permanentDestroy, restore }

export default EducationPlanController