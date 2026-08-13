import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::index
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:22
* @route '/job-description/search'
*/
const index5150ad18411fd0137f02439f185b6e5e = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: index5150ad18411fd0137f02439f185b6e5e.url(options),
    method: 'post',
})

index5150ad18411fd0137f02439f185b6e5e.definition = {
    methods: ["post"],
    url: '/job-description/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::index
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:22
* @route '/job-description/search'
*/
index5150ad18411fd0137f02439f185b6e5e.url = (options?: RouteQueryOptions) => {
    return index5150ad18411fd0137f02439f185b6e5e.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::index
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:22
* @route '/job-description/search'
*/
index5150ad18411fd0137f02439f185b6e5e.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: index5150ad18411fd0137f02439f185b6e5e.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::index
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:22
* @route '/job-description/search'
*/
const index5150ad18411fd0137f02439f185b6e5eForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: index5150ad18411fd0137f02439f185b6e5e.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::index
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:22
* @route '/job-description/search'
*/
index5150ad18411fd0137f02439f185b6e5eForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: index5150ad18411fd0137f02439f185b6e5e.url(options),
    method: 'post',
})

index5150ad18411fd0137f02439f185b6e5e.form = index5150ad18411fd0137f02439f185b6e5eForm
/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::index
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:22
* @route '/job-description'
*/
const index2fce994352cc1e76f91f2c2f72347d10 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index2fce994352cc1e76f91f2c2f72347d10.url(options),
    method: 'get',
})

index2fce994352cc1e76f91f2c2f72347d10.definition = {
    methods: ["get","head"],
    url: '/job-description',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::index
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:22
* @route '/job-description'
*/
index2fce994352cc1e76f91f2c2f72347d10.url = (options?: RouteQueryOptions) => {
    return index2fce994352cc1e76f91f2c2f72347d10.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::index
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:22
* @route '/job-description'
*/
index2fce994352cc1e76f91f2c2f72347d10.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index2fce994352cc1e76f91f2c2f72347d10.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::index
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:22
* @route '/job-description'
*/
index2fce994352cc1e76f91f2c2f72347d10.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index2fce994352cc1e76f91f2c2f72347d10.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::index
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:22
* @route '/job-description'
*/
const index2fce994352cc1e76f91f2c2f72347d10Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index2fce994352cc1e76f91f2c2f72347d10.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::index
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:22
* @route '/job-description'
*/
index2fce994352cc1e76f91f2c2f72347d10Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index2fce994352cc1e76f91f2c2f72347d10.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::index
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:22
* @route '/job-description'
*/
index2fce994352cc1e76f91f2c2f72347d10Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index2fce994352cc1e76f91f2c2f72347d10.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index2fce994352cc1e76f91f2c2f72347d10.form = index2fce994352cc1e76f91f2c2f72347d10Form

/**
* Multiple routes resolve to \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::index, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `index['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const index = {
    '/job-description/search': index5150ad18411fd0137f02439f185b6e5e,
    '/job-description': index2fce994352cc1e76f91f2c2f72347d10,
}

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::create
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:0
* @route '/job-description/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/job-description/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::create
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:0
* @route '/job-description/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::create
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:0
* @route '/job-description/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::create
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:0
* @route '/job-description/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::create
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:0
* @route '/job-description/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::create
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:0
* @route '/job-description/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::create
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:0
* @route '/job-description/create'
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
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::store
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:47
* @route '/job-description'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/job-description',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::store
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:47
* @route '/job-description'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::store
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:47
* @route '/job-description'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::store
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:47
* @route '/job-description'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::store
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:47
* @route '/job-description'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::show
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:64
* @route '/job-description/{job_description}'
*/
export const show = (args: { job_description: string | number | { id: string | number } } | [job_description: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/job-description/{job_description}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::show
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:64
* @route '/job-description/{job_description}'
*/
show.url = (args: { job_description: string | number | { id: string | number } } | [job_description: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { job_description: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { job_description: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            job_description: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        job_description: typeof args.job_description === 'object'
        ? args.job_description.id
        : args.job_description,
    }

    return show.definition.url
            .replace('{job_description}', parsedArgs.job_description.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::show
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:64
* @route '/job-description/{job_description}'
*/
show.get = (args: { job_description: string | number | { id: string | number } } | [job_description: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::show
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:64
* @route '/job-description/{job_description}'
*/
show.head = (args: { job_description: string | number | { id: string | number } } | [job_description: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::show
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:64
* @route '/job-description/{job_description}'
*/
const showForm = (args: { job_description: string | number | { id: string | number } } | [job_description: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::show
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:64
* @route '/job-description/{job_description}'
*/
showForm.get = (args: { job_description: string | number | { id: string | number } } | [job_description: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::show
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:64
* @route '/job-description/{job_description}'
*/
showForm.head = (args: { job_description: string | number | { id: string | number } } | [job_description: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::edit
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:94
* @route '/job-description/{job_description}/edit'
*/
export const edit = (args: { job_description: string | number | { id: string | number } } | [job_description: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/job-description/{job_description}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::edit
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:94
* @route '/job-description/{job_description}/edit'
*/
edit.url = (args: { job_description: string | number | { id: string | number } } | [job_description: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { job_description: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { job_description: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            job_description: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        job_description: typeof args.job_description === 'object'
        ? args.job_description.id
        : args.job_description,
    }

    return edit.definition.url
            .replace('{job_description}', parsedArgs.job_description.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::edit
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:94
* @route '/job-description/{job_description}/edit'
*/
edit.get = (args: { job_description: string | number | { id: string | number } } | [job_description: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::edit
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:94
* @route '/job-description/{job_description}/edit'
*/
edit.head = (args: { job_description: string | number | { id: string | number } } | [job_description: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::edit
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:94
* @route '/job-description/{job_description}/edit'
*/
const editForm = (args: { job_description: string | number | { id: string | number } } | [job_description: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::edit
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:94
* @route '/job-description/{job_description}/edit'
*/
editForm.get = (args: { job_description: string | number | { id: string | number } } | [job_description: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::edit
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:94
* @route '/job-description/{job_description}/edit'
*/
editForm.head = (args: { job_description: string | number | { id: string | number } } | [job_description: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::update
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:104
* @route '/job-description/{job_description}'
*/
export const update = (args: { job_description: string | number | { id: string | number } } | [job_description: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/job-description/{job_description}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::update
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:104
* @route '/job-description/{job_description}'
*/
update.url = (args: { job_description: string | number | { id: string | number } } | [job_description: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { job_description: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { job_description: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            job_description: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        job_description: typeof args.job_description === 'object'
        ? args.job_description.id
        : args.job_description,
    }

    return update.definition.url
            .replace('{job_description}', parsedArgs.job_description.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::update
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:104
* @route '/job-description/{job_description}'
*/
update.put = (args: { job_description: string | number | { id: string | number } } | [job_description: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::update
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:104
* @route '/job-description/{job_description}'
*/
update.patch = (args: { job_description: string | number | { id: string | number } } | [job_description: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::update
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:104
* @route '/job-description/{job_description}'
*/
const updateForm = (args: { job_description: string | number | { id: string | number } } | [job_description: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::update
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:104
* @route '/job-description/{job_description}'
*/
updateForm.put = (args: { job_description: string | number | { id: string | number } } | [job_description: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::update
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:104
* @route '/job-description/{job_description}'
*/
updateForm.patch = (args: { job_description: string | number | { id: string | number } } | [job_description: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::destroy
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:116
* @route '/job-description/{job_description}'
*/
export const destroy = (args: { job_description: string | number | { id: string | number } } | [job_description: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/job-description/{job_description}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::destroy
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:116
* @route '/job-description/{job_description}'
*/
destroy.url = (args: { job_description: string | number | { id: string | number } } | [job_description: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { job_description: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { job_description: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            job_description: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        job_description: typeof args.job_description === 'object'
        ? args.job_description.id
        : args.job_description,
    }

    return destroy.definition.url
            .replace('{job_description}', parsedArgs.job_description.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::destroy
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:116
* @route '/job-description/{job_description}'
*/
destroy.delete = (args: { job_description: string | number | { id: string | number } } | [job_description: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::destroy
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:116
* @route '/job-description/{job_description}'
*/
const destroyForm = (args: { job_description: string | number | { id: string | number } } | [job_description: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::destroy
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:116
* @route '/job-description/{job_description}'
*/
destroyForm.delete = (args: { job_description: string | number | { id: string | number } } | [job_description: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::deleted
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:32
* @route '/job-description-deleted'
*/
export const deleted = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deleted.url(options),
    method: 'get',
})

deleted.definition = {
    methods: ["get","head"],
    url: '/job-description-deleted',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::deleted
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:32
* @route '/job-description-deleted'
*/
deleted.url = (options?: RouteQueryOptions) => {
    return deleted.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::deleted
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:32
* @route '/job-description-deleted'
*/
deleted.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deleted.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::deleted
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:32
* @route '/job-description-deleted'
*/
deleted.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: deleted.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::deleted
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:32
* @route '/job-description-deleted'
*/
const deletedForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: deleted.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::deleted
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:32
* @route '/job-description-deleted'
*/
deletedForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: deleted.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::deleted
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:32
* @route '/job-description-deleted'
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
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::permanentDestroy
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:129
* @route '/job-description-permanent-delete/{jobDescription}'
*/
export const permanentDestroy = (args: { jobDescription: string | number | { id: string | number } } | [jobDescription: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: permanentDestroy.url(args, options),
    method: 'delete',
})

permanentDestroy.definition = {
    methods: ["delete"],
    url: '/job-description-permanent-delete/{jobDescription}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::permanentDestroy
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:129
* @route '/job-description-permanent-delete/{jobDescription}'
*/
permanentDestroy.url = (args: { jobDescription: string | number | { id: string | number } } | [jobDescription: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { jobDescription: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { jobDescription: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            jobDescription: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        jobDescription: typeof args.jobDescription === 'object'
        ? args.jobDescription.id
        : args.jobDescription,
    }

    return permanentDestroy.definition.url
            .replace('{jobDescription}', parsedArgs.jobDescription.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::permanentDestroy
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:129
* @route '/job-description-permanent-delete/{jobDescription}'
*/
permanentDestroy.delete = (args: { jobDescription: string | number | { id: string | number } } | [jobDescription: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: permanentDestroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::permanentDestroy
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:129
* @route '/job-description-permanent-delete/{jobDescription}'
*/
const permanentDestroyForm = (args: { jobDescription: string | number | { id: string | number } } | [jobDescription: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: permanentDestroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::permanentDestroy
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:129
* @route '/job-description-permanent-delete/{jobDescription}'
*/
permanentDestroyForm.delete = (args: { jobDescription: string | number | { id: string | number } } | [jobDescription: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::restore
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:142
* @route '/job-description-restore/{jobDescription}'
*/
export const restore = (args: { jobDescription: string | number | { id: string | number } } | [jobDescription: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: restore.url(args, options),
    method: 'get',
})

restore.definition = {
    methods: ["get","head"],
    url: '/job-description-restore/{jobDescription}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::restore
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:142
* @route '/job-description-restore/{jobDescription}'
*/
restore.url = (args: { jobDescription: string | number | { id: string | number } } | [jobDescription: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { jobDescription: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { jobDescription: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            jobDescription: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        jobDescription: typeof args.jobDescription === 'object'
        ? args.jobDescription.id
        : args.jobDescription,
    }

    return restore.definition.url
            .replace('{jobDescription}', parsedArgs.jobDescription.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::restore
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:142
* @route '/job-description-restore/{jobDescription}'
*/
restore.get = (args: { jobDescription: string | number | { id: string | number } } | [jobDescription: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: restore.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::restore
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:142
* @route '/job-description-restore/{jobDescription}'
*/
restore.head = (args: { jobDescription: string | number | { id: string | number } } | [jobDescription: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: restore.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::restore
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:142
* @route '/job-description-restore/{jobDescription}'
*/
const restoreForm = (args: { jobDescription: string | number | { id: string | number } } | [jobDescription: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: restore.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::restore
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:142
* @route '/job-description-restore/{jobDescription}'
*/
restoreForm.get = (args: { jobDescription: string | number | { id: string | number } } | [jobDescription: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: restore.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::restore
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:142
* @route '/job-description-restore/{jobDescription}'
*/
restoreForm.head = (args: { jobDescription: string | number | { id: string | number } } | [jobDescription: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: restore.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

restore.form = restoreForm

const JobDescriptionController = { index, create, store, show, edit, update, destroy, deleted, permanentDestroy, restore }

export default JobDescriptionController