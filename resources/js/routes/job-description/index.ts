import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::search
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:22
* @route '/job-description/search'
*/
export const search = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: search.url(options),
    method: 'post',
})

search.definition = {
    methods: ["post"],
    url: '/job-description/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::search
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:22
* @route '/job-description/search'
*/
search.url = (options?: RouteQueryOptions) => {
    return search.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::search
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:22
* @route '/job-description/search'
*/
search.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: search.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::search
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:22
* @route '/job-description/search'
*/
const searchForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: search.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::search
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:22
* @route '/job-description/search'
*/
searchForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: search.url(options),
    method: 'post',
})

search.form = searchForm

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::index
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:22
* @route '/job-description'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/job-description',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::index
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:22
* @route '/job-description'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::index
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:22
* @route '/job-description'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::index
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:22
* @route '/job-description'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::index
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:22
* @route '/job-description'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::index
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:22
* @route '/job-description'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::index
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:22
* @route '/job-description'
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
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:37
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
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:37
* @route '/job-description'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::store
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:37
* @route '/job-description'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::store
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:37
* @route '/job-description'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::store
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:37
* @route '/job-description'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::show
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:54
* @route '/job-description/{job_description}'
*/
export const show = (args: { job_description: number | { id: number } } | [job_description: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/job-description/{job_description}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::show
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:54
* @route '/job-description/{job_description}'
*/
show.url = (args: { job_description: number | { id: number } } | [job_description: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:54
* @route '/job-description/{job_description}'
*/
show.get = (args: { job_description: number | { id: number } } | [job_description: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::show
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:54
* @route '/job-description/{job_description}'
*/
show.head = (args: { job_description: number | { id: number } } | [job_description: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::show
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:54
* @route '/job-description/{job_description}'
*/
const showForm = (args: { job_description: number | { id: number } } | [job_description: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::show
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:54
* @route '/job-description/{job_description}'
*/
showForm.get = (args: { job_description: number | { id: number } } | [job_description: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::show
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:54
* @route '/job-description/{job_description}'
*/
showForm.head = (args: { job_description: number | { id: number } } | [job_description: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:84
* @route '/job-description/{job_description}/edit'
*/
export const edit = (args: { job_description: number | { id: number } } | [job_description: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/job-description/{job_description}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::edit
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:84
* @route '/job-description/{job_description}/edit'
*/
edit.url = (args: { job_description: number | { id: number } } | [job_description: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:84
* @route '/job-description/{job_description}/edit'
*/
edit.get = (args: { job_description: number | { id: number } } | [job_description: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::edit
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:84
* @route '/job-description/{job_description}/edit'
*/
edit.head = (args: { job_description: number | { id: number } } | [job_description: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::edit
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:84
* @route '/job-description/{job_description}/edit'
*/
const editForm = (args: { job_description: number | { id: number } } | [job_description: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::edit
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:84
* @route '/job-description/{job_description}/edit'
*/
editForm.get = (args: { job_description: number | { id: number } } | [job_description: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::edit
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:84
* @route '/job-description/{job_description}/edit'
*/
editForm.head = (args: { job_description: number | { id: number } } | [job_description: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:94
* @route '/job-description/{job_description}'
*/
export const update = (args: { job_description: number | { id: number } } | [job_description: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/job-description/{job_description}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::update
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:94
* @route '/job-description/{job_description}'
*/
update.url = (args: { job_description: number | { id: number } } | [job_description: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:94
* @route '/job-description/{job_description}'
*/
update.put = (args: { job_description: number | { id: number } } | [job_description: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::update
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:94
* @route '/job-description/{job_description}'
*/
update.patch = (args: { job_description: number | { id: number } } | [job_description: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::update
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:94
* @route '/job-description/{job_description}'
*/
const updateForm = (args: { job_description: number | { id: number } } | [job_description: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:94
* @route '/job-description/{job_description}'
*/
updateForm.put = (args: { job_description: number | { id: number } } | [job_description: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:94
* @route '/job-description/{job_description}'
*/
updateForm.patch = (args: { job_description: number | { id: number } } | [job_description: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:106
* @route '/job-description/{job_description}'
*/
export const destroy = (args: { job_description: number | { id: number } } | [job_description: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/job-description/{job_description}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::destroy
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:106
* @route '/job-description/{job_description}'
*/
destroy.url = (args: { job_description: number | { id: number } } | [job_description: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:106
* @route '/job-description/{job_description}'
*/
destroy.delete = (args: { job_description: number | { id: number } } | [job_description: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::destroy
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:106
* @route '/job-description/{job_description}'
*/
const destroyForm = (args: { job_description: number | { id: number } } | [job_description: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:106
* @route '/job-description/{job_description}'
*/
destroyForm.delete = (args: { job_description: number | { id: number } } | [job_description: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::permanentDelete
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:119
* @route '/job-description-permanent-delete/{jobDescription}'
*/
export const permanentDelete = (args: { jobDescription: number | { id: number } } | [jobDescription: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: permanentDelete.url(args, options),
    method: 'delete',
})

permanentDelete.definition = {
    methods: ["delete"],
    url: '/job-description-permanent-delete/{jobDescription}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::permanentDelete
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:119
* @route '/job-description-permanent-delete/{jobDescription}'
*/
permanentDelete.url = (args: { jobDescription: number | { id: number } } | [jobDescription: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return permanentDelete.definition.url
            .replace('{jobDescription}', parsedArgs.jobDescription.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::permanentDelete
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:119
* @route '/job-description-permanent-delete/{jobDescription}'
*/
permanentDelete.delete = (args: { jobDescription: number | { id: number } } | [jobDescription: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: permanentDelete.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::permanentDelete
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:119
* @route '/job-description-permanent-delete/{jobDescription}'
*/
const permanentDeleteForm = (args: { jobDescription: number | { id: number } } | [jobDescription: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: permanentDelete.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::permanentDelete
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:119
* @route '/job-description-permanent-delete/{jobDescription}'
*/
permanentDeleteForm.delete = (args: { jobDescription: number | { id: number } } | [jobDescription: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: permanentDelete.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

permanentDelete.form = permanentDeleteForm

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::restore
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:132
* @route '/job-description-restore/{jobDescription}'
*/
export const restore = (args: { jobDescription: number | { id: number } } | [jobDescription: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: restore.url(args, options),
    method: 'get',
})

restore.definition = {
    methods: ["get","head"],
    url: '/job-description-restore/{jobDescription}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::restore
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:132
* @route '/job-description-restore/{jobDescription}'
*/
restore.url = (args: { jobDescription: number | { id: number } } | [jobDescription: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:132
* @route '/job-description-restore/{jobDescription}'
*/
restore.get = (args: { jobDescription: number | { id: number } } | [jobDescription: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: restore.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::restore
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:132
* @route '/job-description-restore/{jobDescription}'
*/
restore.head = (args: { jobDescription: number | { id: number } } | [jobDescription: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: restore.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::restore
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:132
* @route '/job-description-restore/{jobDescription}'
*/
const restoreForm = (args: { jobDescription: number | { id: number } } | [jobDescription: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: restore.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::restore
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:132
* @route '/job-description-restore/{jobDescription}'
*/
restoreForm.get = (args: { jobDescription: number | { id: number } } | [jobDescription: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: restore.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::restore
* @see app/Http/Controllers/HumanResources/JobDescription/JobDescriptionController.php:132
* @route '/job-description-restore/{jobDescription}'
*/
restoreForm.head = (args: { jobDescription: number | { id: number } } | [jobDescription: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: restore.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

restore.form = restoreForm

const jobDescription = {
    search: Object.assign(search, search),
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
    permanentDelete: Object.assign(permanentDelete, permanentDelete),
    restore: Object.assign(restore, restore),
}

export default jobDescription