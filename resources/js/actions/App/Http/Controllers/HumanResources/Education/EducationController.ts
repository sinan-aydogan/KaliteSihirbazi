import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::index
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:26
* @route '/education/search'
*/
const indexa8735a071e6dab784766a8f4a44ba5b6 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: indexa8735a071e6dab784766a8f4a44ba5b6.url(options),
    method: 'post',
})

indexa8735a071e6dab784766a8f4a44ba5b6.definition = {
    methods: ["post"],
    url: '/education/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::index
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:26
* @route '/education/search'
*/
indexa8735a071e6dab784766a8f4a44ba5b6.url = (options?: RouteQueryOptions) => {
    return indexa8735a071e6dab784766a8f4a44ba5b6.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::index
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:26
* @route '/education/search'
*/
indexa8735a071e6dab784766a8f4a44ba5b6.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: indexa8735a071e6dab784766a8f4a44ba5b6.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::index
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:26
* @route '/education/search'
*/
const indexa8735a071e6dab784766a8f4a44ba5b6Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: indexa8735a071e6dab784766a8f4a44ba5b6.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::index
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:26
* @route '/education/search'
*/
indexa8735a071e6dab784766a8f4a44ba5b6Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: indexa8735a071e6dab784766a8f4a44ba5b6.url(options),
    method: 'post',
})

indexa8735a071e6dab784766a8f4a44ba5b6.form = indexa8735a071e6dab784766a8f4a44ba5b6Form
/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::index
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:26
* @route '/education'
*/
const indexab1556230c34a0fb5296bc684bec852b = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexab1556230c34a0fb5296bc684bec852b.url(options),
    method: 'get',
})

indexab1556230c34a0fb5296bc684bec852b.definition = {
    methods: ["get","head"],
    url: '/education',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::index
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:26
* @route '/education'
*/
indexab1556230c34a0fb5296bc684bec852b.url = (options?: RouteQueryOptions) => {
    return indexab1556230c34a0fb5296bc684bec852b.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::index
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:26
* @route '/education'
*/
indexab1556230c34a0fb5296bc684bec852b.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexab1556230c34a0fb5296bc684bec852b.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::index
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:26
* @route '/education'
*/
indexab1556230c34a0fb5296bc684bec852b.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexab1556230c34a0fb5296bc684bec852b.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::index
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:26
* @route '/education'
*/
const indexab1556230c34a0fb5296bc684bec852bForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexab1556230c34a0fb5296bc684bec852b.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::index
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:26
* @route '/education'
*/
indexab1556230c34a0fb5296bc684bec852bForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexab1556230c34a0fb5296bc684bec852b.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::index
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:26
* @route '/education'
*/
indexab1556230c34a0fb5296bc684bec852bForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexab1556230c34a0fb5296bc684bec852b.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

indexab1556230c34a0fb5296bc684bec852b.form = indexab1556230c34a0fb5296bc684bec852bForm

/**
* Multiple routes resolve to \App\Http\Controllers\HumanResources\Education\EducationController::index, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `index['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const index = {
    '/education/search': indexa8735a071e6dab784766a8f4a44ba5b6,
    '/education': indexab1556230c34a0fb5296bc684bec852b,
}

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::create
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:65
* @route '/education/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/education/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::create
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:65
* @route '/education/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::create
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:65
* @route '/education/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::create
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:65
* @route '/education/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::create
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:65
* @route '/education/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::create
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:65
* @route '/education/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::create
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:65
* @route '/education/create'
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
* @see \App\Http\Controllers\HumanResources\Education\EducationController::store
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:75
* @route '/education'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/education',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::store
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:75
* @route '/education'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::store
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:75
* @route '/education'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::store
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:75
* @route '/education'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::store
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:75
* @route '/education'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::show
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:112
* @route '/education/{education}'
*/
export const show = (args: { education: string | number | { id: string | number } } | [education: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/education/{education}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::show
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:112
* @route '/education/{education}'
*/
show.url = (args: { education: string | number | { id: string | number } } | [education: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { education: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { education: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            education: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        education: typeof args.education === 'object'
        ? args.education.id
        : args.education,
    }

    return show.definition.url
            .replace('{education}', parsedArgs.education.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::show
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:112
* @route '/education/{education}'
*/
show.get = (args: { education: string | number | { id: string | number } } | [education: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::show
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:112
* @route '/education/{education}'
*/
show.head = (args: { education: string | number | { id: string | number } } | [education: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::show
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:112
* @route '/education/{education}'
*/
const showForm = (args: { education: string | number | { id: string | number } } | [education: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::show
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:112
* @route '/education/{education}'
*/
showForm.get = (args: { education: string | number | { id: string | number } } | [education: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::show
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:112
* @route '/education/{education}'
*/
showForm.head = (args: { education: string | number | { id: string | number } } | [education: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\HumanResources\Education\EducationController::edit
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:130
* @route '/education/{education}/edit'
*/
export const edit = (args: { education: string | number | { id: string | number } } | [education: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/education/{education}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::edit
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:130
* @route '/education/{education}/edit'
*/
edit.url = (args: { education: string | number | { id: string | number } } | [education: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { education: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { education: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            education: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        education: typeof args.education === 'object'
        ? args.education.id
        : args.education,
    }

    return edit.definition.url
            .replace('{education}', parsedArgs.education.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::edit
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:130
* @route '/education/{education}/edit'
*/
edit.get = (args: { education: string | number | { id: string | number } } | [education: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::edit
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:130
* @route '/education/{education}/edit'
*/
edit.head = (args: { education: string | number | { id: string | number } } | [education: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::edit
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:130
* @route '/education/{education}/edit'
*/
const editForm = (args: { education: string | number | { id: string | number } } | [education: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::edit
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:130
* @route '/education/{education}/edit'
*/
editForm.get = (args: { education: string | number | { id: string | number } } | [education: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::edit
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:130
* @route '/education/{education}/edit'
*/
editForm.head = (args: { education: string | number | { id: string | number } } | [education: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\HumanResources\Education\EducationController::update
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:145
* @route '/education/{education}'
*/
export const update = (args: { education: string | number | { id: string | number } } | [education: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/education/{education}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::update
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:145
* @route '/education/{education}'
*/
update.url = (args: { education: string | number | { id: string | number } } | [education: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { education: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { education: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            education: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        education: typeof args.education === 'object'
        ? args.education.id
        : args.education,
    }

    return update.definition.url
            .replace('{education}', parsedArgs.education.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::update
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:145
* @route '/education/{education}'
*/
update.put = (args: { education: string | number | { id: string | number } } | [education: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::update
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:145
* @route '/education/{education}'
*/
update.patch = (args: { education: string | number | { id: string | number } } | [education: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::update
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:145
* @route '/education/{education}'
*/
const updateForm = (args: { education: string | number | { id: string | number } } | [education: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::update
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:145
* @route '/education/{education}'
*/
updateForm.put = (args: { education: string | number | { id: string | number } } | [education: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::update
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:145
* @route '/education/{education}'
*/
updateForm.patch = (args: { education: string | number | { id: string | number } } | [education: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\HumanResources\Education\EducationController::destroy
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:181
* @route '/education/{education}'
*/
export const destroy = (args: { education: string | number | { id: string | number } } | [education: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/education/{education}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::destroy
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:181
* @route '/education/{education}'
*/
destroy.url = (args: { education: string | number | { id: string | number } } | [education: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { education: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { education: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            education: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        education: typeof args.education === 'object'
        ? args.education.id
        : args.education,
    }

    return destroy.definition.url
            .replace('{education}', parsedArgs.education.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::destroy
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:181
* @route '/education/{education}'
*/
destroy.delete = (args: { education: string | number | { id: string | number } } | [education: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::destroy
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:181
* @route '/education/{education}'
*/
const destroyForm = (args: { education: string | number | { id: string | number } } | [education: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::destroy
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:181
* @route '/education/{education}'
*/
destroyForm.delete = (args: { education: string | number | { id: string | number } } | [education: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\HumanResources\Education\EducationController::deleted
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:49
* @route '/education-deleted'
*/
export const deleted = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deleted.url(options),
    method: 'get',
})

deleted.definition = {
    methods: ["get","head"],
    url: '/education-deleted',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::deleted
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:49
* @route '/education-deleted'
*/
deleted.url = (options?: RouteQueryOptions) => {
    return deleted.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::deleted
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:49
* @route '/education-deleted'
*/
deleted.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deleted.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::deleted
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:49
* @route '/education-deleted'
*/
deleted.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: deleted.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::deleted
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:49
* @route '/education-deleted'
*/
const deletedForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: deleted.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::deleted
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:49
* @route '/education-deleted'
*/
deletedForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: deleted.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::deleted
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:49
* @route '/education-deleted'
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
* @see \App\Http\Controllers\HumanResources\Education\EducationController::permanentDestroy
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:195
* @route '/education-permanent-delete/{education}'
*/
export const permanentDestroy = (args: { education: string | number | { id: string | number } } | [education: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: permanentDestroy.url(args, options),
    method: 'delete',
})

permanentDestroy.definition = {
    methods: ["delete"],
    url: '/education-permanent-delete/{education}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::permanentDestroy
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:195
* @route '/education-permanent-delete/{education}'
*/
permanentDestroy.url = (args: { education: string | number | { id: string | number } } | [education: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { education: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { education: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            education: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        education: typeof args.education === 'object'
        ? args.education.id
        : args.education,
    }

    return permanentDestroy.definition.url
            .replace('{education}', parsedArgs.education.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::permanentDestroy
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:195
* @route '/education-permanent-delete/{education}'
*/
permanentDestroy.delete = (args: { education: string | number | { id: string | number } } | [education: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: permanentDestroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::permanentDestroy
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:195
* @route '/education-permanent-delete/{education}'
*/
const permanentDestroyForm = (args: { education: string | number | { id: string | number } } | [education: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: permanentDestroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::permanentDestroy
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:195
* @route '/education-permanent-delete/{education}'
*/
permanentDestroyForm.delete = (args: { education: string | number | { id: string | number } } | [education: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\HumanResources\Education\EducationController::restore
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:212
* @route '/education-restore/{education}'
*/
export const restore = (args: { education: string | number | { id: string | number } } | [education: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: restore.url(args, options),
    method: 'get',
})

restore.definition = {
    methods: ["get","head"],
    url: '/education-restore/{education}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::restore
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:212
* @route '/education-restore/{education}'
*/
restore.url = (args: { education: string | number | { id: string | number } } | [education: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { education: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { education: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            education: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        education: typeof args.education === 'object'
        ? args.education.id
        : args.education,
    }

    return restore.definition.url
            .replace('{education}', parsedArgs.education.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::restore
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:212
* @route '/education-restore/{education}'
*/
restore.get = (args: { education: string | number | { id: string | number } } | [education: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: restore.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::restore
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:212
* @route '/education-restore/{education}'
*/
restore.head = (args: { education: string | number | { id: string | number } } | [education: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: restore.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::restore
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:212
* @route '/education-restore/{education}'
*/
const restoreForm = (args: { education: string | number | { id: string | number } } | [education: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: restore.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::restore
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:212
* @route '/education-restore/{education}'
*/
restoreForm.get = (args: { education: string | number | { id: string | number } } | [education: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: restore.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::restore
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:212
* @route '/education-restore/{education}'
*/
restoreForm.head = (args: { education: string | number | { id: string | number } } | [education: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: restore.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

restore.form = restoreForm

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::addParticipant
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:226
* @route '/education/{education}/participants'
*/
export const addParticipant = (args: { education: string | number | { id: string | number } } | [education: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: addParticipant.url(args, options),
    method: 'post',
})

addParticipant.definition = {
    methods: ["post"],
    url: '/education/{education}/participants',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::addParticipant
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:226
* @route '/education/{education}/participants'
*/
addParticipant.url = (args: { education: string | number | { id: string | number } } | [education: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { education: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { education: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            education: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        education: typeof args.education === 'object'
        ? args.education.id
        : args.education,
    }

    return addParticipant.definition.url
            .replace('{education}', parsedArgs.education.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::addParticipant
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:226
* @route '/education/{education}/participants'
*/
addParticipant.post = (args: { education: string | number | { id: string | number } } | [education: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: addParticipant.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::addParticipant
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:226
* @route '/education/{education}/participants'
*/
const addParticipantForm = (args: { education: string | number | { id: string | number } } | [education: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: addParticipant.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::addParticipant
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:226
* @route '/education/{education}/participants'
*/
addParticipantForm.post = (args: { education: string | number | { id: string | number } } | [education: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: addParticipant.url(args, options),
    method: 'post',
})

addParticipant.form = addParticipantForm

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::updateParticipant
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:250
* @route '/education/{education}/participants/{user}'
*/
export const updateParticipant = (args: { education: string | number | { id: string | number }, user: string | number | { id: string | number } } | [education: string | number | { id: string | number }, user: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateParticipant.url(args, options),
    method: 'put',
})

updateParticipant.definition = {
    methods: ["put"],
    url: '/education/{education}/participants/{user}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::updateParticipant
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:250
* @route '/education/{education}/participants/{user}'
*/
updateParticipant.url = (args: { education: string | number | { id: string | number }, user: string | number | { id: string | number } } | [education: string | number | { id: string | number }, user: string | number | { id: string | number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            education: args[0],
            user: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        education: typeof args.education === 'object'
        ? args.education.id
        : args.education,
        user: typeof args.user === 'object'
        ? args.user.id
        : args.user,
    }

    return updateParticipant.definition.url
            .replace('{education}', parsedArgs.education.toString())
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::updateParticipant
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:250
* @route '/education/{education}/participants/{user}'
*/
updateParticipant.put = (args: { education: string | number | { id: string | number }, user: string | number | { id: string | number } } | [education: string | number | { id: string | number }, user: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateParticipant.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::updateParticipant
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:250
* @route '/education/{education}/participants/{user}'
*/
const updateParticipantForm = (args: { education: string | number | { id: string | number }, user: string | number | { id: string | number } } | [education: string | number | { id: string | number }, user: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateParticipant.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::updateParticipant
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:250
* @route '/education/{education}/participants/{user}'
*/
updateParticipantForm.put = (args: { education: string | number | { id: string | number }, user: string | number | { id: string | number } } | [education: string | number | { id: string | number }, user: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateParticipant.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updateParticipant.form = updateParticipantForm

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::removeParticipant
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:276
* @route '/education/{education}/participants/{user}'
*/
export const removeParticipant = (args: { education: string | number | { id: string | number }, user: string | number | { id: string | number } } | [education: string | number | { id: string | number }, user: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: removeParticipant.url(args, options),
    method: 'delete',
})

removeParticipant.definition = {
    methods: ["delete"],
    url: '/education/{education}/participants/{user}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::removeParticipant
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:276
* @route '/education/{education}/participants/{user}'
*/
removeParticipant.url = (args: { education: string | number | { id: string | number }, user: string | number | { id: string | number } } | [education: string | number | { id: string | number }, user: string | number | { id: string | number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            education: args[0],
            user: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        education: typeof args.education === 'object'
        ? args.education.id
        : args.education,
        user: typeof args.user === 'object'
        ? args.user.id
        : args.user,
    }

    return removeParticipant.definition.url
            .replace('{education}', parsedArgs.education.toString())
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::removeParticipant
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:276
* @route '/education/{education}/participants/{user}'
*/
removeParticipant.delete = (args: { education: string | number | { id: string | number }, user: string | number | { id: string | number } } | [education: string | number | { id: string | number }, user: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: removeParticipant.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::removeParticipant
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:276
* @route '/education/{education}/participants/{user}'
*/
const removeParticipantForm = (args: { education: string | number | { id: string | number }, user: string | number | { id: string | number } } | [education: string | number | { id: string | number }, user: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: removeParticipant.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::removeParticipant
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:276
* @route '/education/{education}/participants/{user}'
*/
removeParticipantForm.delete = (args: { education: string | number | { id: string | number }, user: string | number | { id: string | number } } | [education: string | number | { id: string | number }, user: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: removeParticipant.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

removeParticipant.form = removeParticipantForm

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::deleteMedia
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:292
* @route '/education/{education}/media/{mediaId}'
*/
export const deleteMedia = (args: { education: string | number | { id: string | number }, mediaId: string | number } | [education: string | number | { id: string | number }, mediaId: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMedia.url(args, options),
    method: 'delete',
})

deleteMedia.definition = {
    methods: ["delete"],
    url: '/education/{education}/media/{mediaId}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::deleteMedia
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:292
* @route '/education/{education}/media/{mediaId}'
*/
deleteMedia.url = (args: { education: string | number | { id: string | number }, mediaId: string | number } | [education: string | number | { id: string | number }, mediaId: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            education: args[0],
            mediaId: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        education: typeof args.education === 'object'
        ? args.education.id
        : args.education,
        mediaId: args.mediaId,
    }

    return deleteMedia.definition.url
            .replace('{education}', parsedArgs.education.toString())
            .replace('{mediaId}', parsedArgs.mediaId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::deleteMedia
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:292
* @route '/education/{education}/media/{mediaId}'
*/
deleteMedia.delete = (args: { education: string | number | { id: string | number }, mediaId: string | number } | [education: string | number | { id: string | number }, mediaId: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMedia.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::deleteMedia
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:292
* @route '/education/{education}/media/{mediaId}'
*/
const deleteMediaForm = (args: { education: string | number | { id: string | number }, mediaId: string | number } | [education: string | number | { id: string | number }, mediaId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: deleteMedia.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationController::deleteMedia
* @see app/Http/Controllers/HumanResources/Education/EducationController.php:292
* @route '/education/{education}/media/{mediaId}'
*/
deleteMediaForm.delete = (args: { education: string | number | { id: string | number }, mediaId: string | number } | [education: string | number | { id: string | number }, mediaId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: deleteMedia.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

deleteMedia.form = deleteMediaForm

const EducationController = { index, create, store, show, edit, update, destroy, deleted, permanentDestroy, restore, addParticipant, updateParticipant, removeParticipant, deleteMedia }

export default EducationController