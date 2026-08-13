import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::index
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:21
* @route '/education-instructor/search'
*/
const index26465047095880386eed67b3457e2514 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: index26465047095880386eed67b3457e2514.url(options),
    method: 'post',
})

index26465047095880386eed67b3457e2514.definition = {
    methods: ["post"],
    url: '/education-instructor/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::index
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:21
* @route '/education-instructor/search'
*/
index26465047095880386eed67b3457e2514.url = (options?: RouteQueryOptions) => {
    return index26465047095880386eed67b3457e2514.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::index
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:21
* @route '/education-instructor/search'
*/
index26465047095880386eed67b3457e2514.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: index26465047095880386eed67b3457e2514.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::index
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:21
* @route '/education-instructor/search'
*/
const index26465047095880386eed67b3457e2514Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: index26465047095880386eed67b3457e2514.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::index
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:21
* @route '/education-instructor/search'
*/
index26465047095880386eed67b3457e2514Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: index26465047095880386eed67b3457e2514.url(options),
    method: 'post',
})

index26465047095880386eed67b3457e2514.form = index26465047095880386eed67b3457e2514Form
/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::index
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:21
* @route '/education-instructor'
*/
const indexd5539937dad2a567cf42d52b52f3b4bb = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexd5539937dad2a567cf42d52b52f3b4bb.url(options),
    method: 'get',
})

indexd5539937dad2a567cf42d52b52f3b4bb.definition = {
    methods: ["get","head"],
    url: '/education-instructor',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::index
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:21
* @route '/education-instructor'
*/
indexd5539937dad2a567cf42d52b52f3b4bb.url = (options?: RouteQueryOptions) => {
    return indexd5539937dad2a567cf42d52b52f3b4bb.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::index
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:21
* @route '/education-instructor'
*/
indexd5539937dad2a567cf42d52b52f3b4bb.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexd5539937dad2a567cf42d52b52f3b4bb.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::index
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:21
* @route '/education-instructor'
*/
indexd5539937dad2a567cf42d52b52f3b4bb.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexd5539937dad2a567cf42d52b52f3b4bb.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::index
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:21
* @route '/education-instructor'
*/
const indexd5539937dad2a567cf42d52b52f3b4bbForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexd5539937dad2a567cf42d52b52f3b4bb.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::index
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:21
* @route '/education-instructor'
*/
indexd5539937dad2a567cf42d52b52f3b4bbForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexd5539937dad2a567cf42d52b52f3b4bb.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::index
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:21
* @route '/education-instructor'
*/
indexd5539937dad2a567cf42d52b52f3b4bbForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexd5539937dad2a567cf42d52b52f3b4bb.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

indexd5539937dad2a567cf42d52b52f3b4bb.form = indexd5539937dad2a567cf42d52b52f3b4bbForm

/**
* Multiple routes resolve to \App\Http\Controllers\HumanResources\Education\EducationInstructorController::index, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `index['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const index = {
    '/education-instructor/search': index26465047095880386eed67b3457e2514,
    '/education-instructor': indexd5539937dad2a567cf42d52b52f3b4bb,
}

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::create
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:45
* @route '/education-instructor/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/education-instructor/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::create
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:45
* @route '/education-instructor/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::create
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:45
* @route '/education-instructor/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::create
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:45
* @route '/education-instructor/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::create
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:45
* @route '/education-instructor/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::create
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:45
* @route '/education-instructor/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::create
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:45
* @route '/education-instructor/create'
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
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::store
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:55
* @route '/education-instructor'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/education-instructor',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::store
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:55
* @route '/education-instructor'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::store
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:55
* @route '/education-instructor'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::store
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:55
* @route '/education-instructor'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::store
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:55
* @route '/education-instructor'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::show
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:90
* @route '/education-instructor/{education_instructor}'
*/
export const show = (args: { education_instructor: string | number | { id: string | number } } | [education_instructor: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/education-instructor/{education_instructor}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::show
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:90
* @route '/education-instructor/{education_instructor}'
*/
show.url = (args: { education_instructor: string | number | { id: string | number } } | [education_instructor: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { education_instructor: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { education_instructor: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            education_instructor: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        education_instructor: typeof args.education_instructor === 'object'
        ? args.education_instructor.id
        : args.education_instructor,
    }

    return show.definition.url
            .replace('{education_instructor}', parsedArgs.education_instructor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::show
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:90
* @route '/education-instructor/{education_instructor}'
*/
show.get = (args: { education_instructor: string | number | { id: string | number } } | [education_instructor: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::show
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:90
* @route '/education-instructor/{education_instructor}'
*/
show.head = (args: { education_instructor: string | number | { id: string | number } } | [education_instructor: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::show
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:90
* @route '/education-instructor/{education_instructor}'
*/
const showForm = (args: { education_instructor: string | number | { id: string | number } } | [education_instructor: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::show
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:90
* @route '/education-instructor/{education_instructor}'
*/
showForm.get = (args: { education_instructor: string | number | { id: string | number } } | [education_instructor: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::show
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:90
* @route '/education-instructor/{education_instructor}'
*/
showForm.head = (args: { education_instructor: string | number | { id: string | number } } | [education_instructor: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::edit
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:102
* @route '/education-instructor/{education_instructor}/edit'
*/
export const edit = (args: { education_instructor: string | number | { id: string | number } } | [education_instructor: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/education-instructor/{education_instructor}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::edit
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:102
* @route '/education-instructor/{education_instructor}/edit'
*/
edit.url = (args: { education_instructor: string | number | { id: string | number } } | [education_instructor: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { education_instructor: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { education_instructor: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            education_instructor: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        education_instructor: typeof args.education_instructor === 'object'
        ? args.education_instructor.id
        : args.education_instructor,
    }

    return edit.definition.url
            .replace('{education_instructor}', parsedArgs.education_instructor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::edit
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:102
* @route '/education-instructor/{education_instructor}/edit'
*/
edit.get = (args: { education_instructor: string | number | { id: string | number } } | [education_instructor: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::edit
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:102
* @route '/education-instructor/{education_instructor}/edit'
*/
edit.head = (args: { education_instructor: string | number | { id: string | number } } | [education_instructor: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::edit
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:102
* @route '/education-instructor/{education_instructor}/edit'
*/
const editForm = (args: { education_instructor: string | number | { id: string | number } } | [education_instructor: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::edit
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:102
* @route '/education-instructor/{education_instructor}/edit'
*/
editForm.get = (args: { education_instructor: string | number | { id: string | number } } | [education_instructor: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::edit
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:102
* @route '/education-instructor/{education_instructor}/edit'
*/
editForm.head = (args: { education_instructor: string | number | { id: string | number } } | [education_instructor: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::update
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:131
* @route '/education-instructor/{education_instructor}'
*/
export const update = (args: { education_instructor: string | number | { id: string | number } } | [education_instructor: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/education-instructor/{education_instructor}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::update
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:131
* @route '/education-instructor/{education_instructor}'
*/
update.url = (args: { education_instructor: string | number | { id: string | number } } | [education_instructor: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { education_instructor: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { education_instructor: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            education_instructor: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        education_instructor: typeof args.education_instructor === 'object'
        ? args.education_instructor.id
        : args.education_instructor,
    }

    return update.definition.url
            .replace('{education_instructor}', parsedArgs.education_instructor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::update
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:131
* @route '/education-instructor/{education_instructor}'
*/
update.put = (args: { education_instructor: string | number | { id: string | number } } | [education_instructor: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::update
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:131
* @route '/education-instructor/{education_instructor}'
*/
update.patch = (args: { education_instructor: string | number | { id: string | number } } | [education_instructor: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::update
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:131
* @route '/education-instructor/{education_instructor}'
*/
const updateForm = (args: { education_instructor: string | number | { id: string | number } } | [education_instructor: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::update
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:131
* @route '/education-instructor/{education_instructor}'
*/
updateForm.put = (args: { education_instructor: string | number | { id: string | number } } | [education_instructor: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::update
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:131
* @route '/education-instructor/{education_instructor}'
*/
updateForm.patch = (args: { education_instructor: string | number | { id: string | number } } | [education_instructor: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::destroy
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:174
* @route '/education-instructor/{education_instructor}'
*/
export const destroy = (args: { education_instructor: string | number | { id: string | number } } | [education_instructor: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/education-instructor/{education_instructor}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::destroy
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:174
* @route '/education-instructor/{education_instructor}'
*/
destroy.url = (args: { education_instructor: string | number | { id: string | number } } | [education_instructor: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { education_instructor: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { education_instructor: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            education_instructor: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        education_instructor: typeof args.education_instructor === 'object'
        ? args.education_instructor.id
        : args.education_instructor,
    }

    return destroy.definition.url
            .replace('{education_instructor}', parsedArgs.education_instructor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::destroy
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:174
* @route '/education-instructor/{education_instructor}'
*/
destroy.delete = (args: { education_instructor: string | number | { id: string | number } } | [education_instructor: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::destroy
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:174
* @route '/education-instructor/{education_instructor}'
*/
const destroyForm = (args: { education_instructor: string | number | { id: string | number } } | [education_instructor: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::destroy
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:174
* @route '/education-instructor/{education_instructor}'
*/
destroyForm.delete = (args: { education_instructor: string | number | { id: string | number } } | [education_instructor: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::deleted
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:33
* @route '/education-instructor-deleted'
*/
export const deleted = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deleted.url(options),
    method: 'get',
})

deleted.definition = {
    methods: ["get","head"],
    url: '/education-instructor-deleted',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::deleted
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:33
* @route '/education-instructor-deleted'
*/
deleted.url = (options?: RouteQueryOptions) => {
    return deleted.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::deleted
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:33
* @route '/education-instructor-deleted'
*/
deleted.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deleted.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::deleted
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:33
* @route '/education-instructor-deleted'
*/
deleted.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: deleted.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::deleted
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:33
* @route '/education-instructor-deleted'
*/
const deletedForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: deleted.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::deleted
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:33
* @route '/education-instructor-deleted'
*/
deletedForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: deleted.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::deleted
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:33
* @route '/education-instructor-deleted'
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
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::permanentDestroy
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:188
* @route '/education-instructor-permanent-delete/{educationInstructor}'
*/
export const permanentDestroy = (args: { educationInstructor: string | number | { id: string | number } } | [educationInstructor: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: permanentDestroy.url(args, options),
    method: 'delete',
})

permanentDestroy.definition = {
    methods: ["delete"],
    url: '/education-instructor-permanent-delete/{educationInstructor}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::permanentDestroy
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:188
* @route '/education-instructor-permanent-delete/{educationInstructor}'
*/
permanentDestroy.url = (args: { educationInstructor: string | number | { id: string | number } } | [educationInstructor: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { educationInstructor: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { educationInstructor: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            educationInstructor: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        educationInstructor: typeof args.educationInstructor === 'object'
        ? args.educationInstructor.id
        : args.educationInstructor,
    }

    return permanentDestroy.definition.url
            .replace('{educationInstructor}', parsedArgs.educationInstructor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::permanentDestroy
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:188
* @route '/education-instructor-permanent-delete/{educationInstructor}'
*/
permanentDestroy.delete = (args: { educationInstructor: string | number | { id: string | number } } | [educationInstructor: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: permanentDestroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::permanentDestroy
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:188
* @route '/education-instructor-permanent-delete/{educationInstructor}'
*/
const permanentDestroyForm = (args: { educationInstructor: string | number | { id: string | number } } | [educationInstructor: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: permanentDestroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::permanentDestroy
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:188
* @route '/education-instructor-permanent-delete/{educationInstructor}'
*/
permanentDestroyForm.delete = (args: { educationInstructor: string | number | { id: string | number } } | [educationInstructor: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::restore
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:206
* @route '/education-instructor-restore/{educationInstructor}'
*/
export const restore = (args: { educationInstructor: string | number | { id: string | number } } | [educationInstructor: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: restore.url(args, options),
    method: 'get',
})

restore.definition = {
    methods: ["get","head"],
    url: '/education-instructor-restore/{educationInstructor}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::restore
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:206
* @route '/education-instructor-restore/{educationInstructor}'
*/
restore.url = (args: { educationInstructor: string | number | { id: string | number } } | [educationInstructor: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { educationInstructor: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { educationInstructor: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            educationInstructor: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        educationInstructor: typeof args.educationInstructor === 'object'
        ? args.educationInstructor.id
        : args.educationInstructor,
    }

    return restore.definition.url
            .replace('{educationInstructor}', parsedArgs.educationInstructor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::restore
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:206
* @route '/education-instructor-restore/{educationInstructor}'
*/
restore.get = (args: { educationInstructor: string | number | { id: string | number } } | [educationInstructor: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: restore.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::restore
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:206
* @route '/education-instructor-restore/{educationInstructor}'
*/
restore.head = (args: { educationInstructor: string | number | { id: string | number } } | [educationInstructor: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: restore.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::restore
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:206
* @route '/education-instructor-restore/{educationInstructor}'
*/
const restoreForm = (args: { educationInstructor: string | number | { id: string | number } } | [educationInstructor: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: restore.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::restore
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:206
* @route '/education-instructor-restore/{educationInstructor}'
*/
restoreForm.get = (args: { educationInstructor: string | number | { id: string | number } } | [educationInstructor: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: restore.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::restore
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:206
* @route '/education-instructor-restore/{educationInstructor}'
*/
restoreForm.head = (args: { educationInstructor: string | number | { id: string | number } } | [educationInstructor: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::deleteMedia
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:220
* @route '/education-instructor/{educationInstructor}/media/{mediaId}'
*/
export const deleteMedia = (args: { educationInstructor: string | number | { id: string | number }, mediaId: string | number } | [educationInstructor: string | number | { id: string | number }, mediaId: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMedia.url(args, options),
    method: 'delete',
})

deleteMedia.definition = {
    methods: ["delete"],
    url: '/education-instructor/{educationInstructor}/media/{mediaId}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::deleteMedia
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:220
* @route '/education-instructor/{educationInstructor}/media/{mediaId}'
*/
deleteMedia.url = (args: { educationInstructor: string | number | { id: string | number }, mediaId: string | number } | [educationInstructor: string | number | { id: string | number }, mediaId: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            educationInstructor: args[0],
            mediaId: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        educationInstructor: typeof args.educationInstructor === 'object'
        ? args.educationInstructor.id
        : args.educationInstructor,
        mediaId: args.mediaId,
    }

    return deleteMedia.definition.url
            .replace('{educationInstructor}', parsedArgs.educationInstructor.toString())
            .replace('{mediaId}', parsedArgs.mediaId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::deleteMedia
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:220
* @route '/education-instructor/{educationInstructor}/media/{mediaId}'
*/
deleteMedia.delete = (args: { educationInstructor: string | number | { id: string | number }, mediaId: string | number } | [educationInstructor: string | number | { id: string | number }, mediaId: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMedia.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::deleteMedia
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:220
* @route '/education-instructor/{educationInstructor}/media/{mediaId}'
*/
const deleteMediaForm = (args: { educationInstructor: string | number | { id: string | number }, mediaId: string | number } | [educationInstructor: string | number | { id: string | number }, mediaId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: deleteMedia.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::deleteMedia
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:220
* @route '/education-instructor/{educationInstructor}/media/{mediaId}'
*/
deleteMediaForm.delete = (args: { educationInstructor: string | number | { id: string | number }, mediaId: string | number } | [educationInstructor: string | number | { id: string | number }, mediaId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: deleteMedia.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

deleteMedia.form = deleteMediaForm

const EducationInstructorController = { index, create, store, show, edit, update, destroy, deleted, permanentDestroy, restore, deleteMedia }

export default EducationInstructorController