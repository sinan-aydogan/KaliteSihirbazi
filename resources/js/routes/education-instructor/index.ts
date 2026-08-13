import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::search
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:21
* @route '/education-instructor/search'
*/
export const search = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: search.url(options),
    method: 'post',
})

search.definition = {
    methods: ["post"],
    url: '/education-instructor/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::search
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:21
* @route '/education-instructor/search'
*/
search.url = (options?: RouteQueryOptions) => {
    return search.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::search
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:21
* @route '/education-instructor/search'
*/
search.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: search.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::search
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:21
* @route '/education-instructor/search'
*/
const searchForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: search.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::search
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:21
* @route '/education-instructor/search'
*/
searchForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: search.url(options),
    method: 'post',
})

search.form = searchForm

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::index
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:21
* @route '/education-instructor'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/education-instructor',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::index
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:21
* @route '/education-instructor'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::index
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:21
* @route '/education-instructor'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::index
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:21
* @route '/education-instructor'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::index
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:21
* @route '/education-instructor'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::index
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:21
* @route '/education-instructor'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::index
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:21
* @route '/education-instructor'
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
export const show = (args: { education_instructor: number | { id: number } } | [education_instructor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
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
show.url = (args: { education_instructor: number | { id: number } } | [education_instructor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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
show.get = (args: { education_instructor: number | { id: number } } | [education_instructor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::show
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:90
* @route '/education-instructor/{education_instructor}'
*/
show.head = (args: { education_instructor: number | { id: number } } | [education_instructor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::show
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:90
* @route '/education-instructor/{education_instructor}'
*/
const showForm = (args: { education_instructor: number | { id: number } } | [education_instructor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::show
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:90
* @route '/education-instructor/{education_instructor}'
*/
showForm.get = (args: { education_instructor: number | { id: number } } | [education_instructor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::show
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:90
* @route '/education-instructor/{education_instructor}'
*/
showForm.head = (args: { education_instructor: number | { id: number } } | [education_instructor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
export const edit = (args: { education_instructor: number | { id: number } } | [education_instructor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
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
edit.url = (args: { education_instructor: number | { id: number } } | [education_instructor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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
edit.get = (args: { education_instructor: number | { id: number } } | [education_instructor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::edit
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:102
* @route '/education-instructor/{education_instructor}/edit'
*/
edit.head = (args: { education_instructor: number | { id: number } } | [education_instructor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::edit
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:102
* @route '/education-instructor/{education_instructor}/edit'
*/
const editForm = (args: { education_instructor: number | { id: number } } | [education_instructor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::edit
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:102
* @route '/education-instructor/{education_instructor}/edit'
*/
editForm.get = (args: { education_instructor: number | { id: number } } | [education_instructor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::edit
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:102
* @route '/education-instructor/{education_instructor}/edit'
*/
editForm.head = (args: { education_instructor: number | { id: number } } | [education_instructor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
export const update = (args: { education_instructor: number | { id: number } } | [education_instructor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
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
update.url = (args: { education_instructor: number | { id: number } } | [education_instructor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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
update.put = (args: { education_instructor: number | { id: number } } | [education_instructor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::update
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:131
* @route '/education-instructor/{education_instructor}'
*/
update.patch = (args: { education_instructor: number | { id: number } } | [education_instructor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::update
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:131
* @route '/education-instructor/{education_instructor}'
*/
const updateForm = (args: { education_instructor: number | { id: number } } | [education_instructor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
updateForm.put = (args: { education_instructor: number | { id: number } } | [education_instructor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
updateForm.patch = (args: { education_instructor: number | { id: number } } | [education_instructor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
export const destroy = (args: { education_instructor: number | { id: number } } | [education_instructor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
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
destroy.url = (args: { education_instructor: number | { id: number } } | [education_instructor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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
destroy.delete = (args: { education_instructor: number | { id: number } } | [education_instructor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::destroy
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:174
* @route '/education-instructor/{education_instructor}'
*/
const destroyForm = (args: { education_instructor: number | { id: number } } | [education_instructor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
destroyForm.delete = (args: { education_instructor: number | { id: number } } | [education_instructor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::permanentDelete
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:188
* @route '/education-instructor-permanent-delete/{educationInstructor}'
*/
export const permanentDelete = (args: { educationInstructor: number | { id: number } } | [educationInstructor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: permanentDelete.url(args, options),
    method: 'delete',
})

permanentDelete.definition = {
    methods: ["delete"],
    url: '/education-instructor-permanent-delete/{educationInstructor}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::permanentDelete
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:188
* @route '/education-instructor-permanent-delete/{educationInstructor}'
*/
permanentDelete.url = (args: { educationInstructor: number | { id: number } } | [educationInstructor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return permanentDelete.definition.url
            .replace('{educationInstructor}', parsedArgs.educationInstructor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::permanentDelete
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:188
* @route '/education-instructor-permanent-delete/{educationInstructor}'
*/
permanentDelete.delete = (args: { educationInstructor: number | { id: number } } | [educationInstructor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: permanentDelete.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::permanentDelete
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:188
* @route '/education-instructor-permanent-delete/{educationInstructor}'
*/
const permanentDeleteForm = (args: { educationInstructor: number | { id: number } } | [educationInstructor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: permanentDelete.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::permanentDelete
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:188
* @route '/education-instructor-permanent-delete/{educationInstructor}'
*/
permanentDeleteForm.delete = (args: { educationInstructor: number | { id: number } } | [educationInstructor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::restore
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:206
* @route '/education-instructor-restore/{educationInstructor}'
*/
export const restore = (args: { educationInstructor: number | { id: number } } | [educationInstructor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
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
restore.url = (args: { educationInstructor: number | { id: number } } | [educationInstructor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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
restore.get = (args: { educationInstructor: number | { id: number } } | [educationInstructor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: restore.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::restore
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:206
* @route '/education-instructor-restore/{educationInstructor}'
*/
restore.head = (args: { educationInstructor: number | { id: number } } | [educationInstructor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: restore.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::restore
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:206
* @route '/education-instructor-restore/{educationInstructor}'
*/
const restoreForm = (args: { educationInstructor: number | { id: number } } | [educationInstructor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: restore.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::restore
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:206
* @route '/education-instructor-restore/{educationInstructor}'
*/
restoreForm.get = (args: { educationInstructor: number | { id: number } } | [educationInstructor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: restore.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::restore
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:206
* @route '/education-instructor-restore/{educationInstructor}'
*/
restoreForm.head = (args: { educationInstructor: number | { id: number } } | [educationInstructor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
export const deleteMedia = (args: { educationInstructor: number | { id: number }, mediaId: string | number } | [educationInstructor: number | { id: number }, mediaId: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
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
deleteMedia.url = (args: { educationInstructor: number | { id: number }, mediaId: string | number } | [educationInstructor: number | { id: number }, mediaId: string | number ], options?: RouteQueryOptions) => {
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
deleteMedia.delete = (args: { educationInstructor: number | { id: number }, mediaId: string | number } | [educationInstructor: number | { id: number }, mediaId: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMedia.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationInstructorController::deleteMedia
* @see app/Http/Controllers/HumanResources/Education/EducationInstructorController.php:220
* @route '/education-instructor/{educationInstructor}/media/{mediaId}'
*/
const deleteMediaForm = (args: { educationInstructor: number | { id: number }, mediaId: string | number } | [educationInstructor: number | { id: number }, mediaId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
deleteMediaForm.delete = (args: { educationInstructor: number | { id: number }, mediaId: string | number } | [educationInstructor: number | { id: number }, mediaId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: deleteMedia.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

deleteMedia.form = deleteMediaForm

const educationInstructor = {
    search: Object.assign(search, search),
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
    deleted: Object.assign(deleted, deleted),
    permanentDelete: Object.assign(permanentDelete, permanentDelete),
    restore: Object.assign(restore, restore),
    deleteMedia: Object.assign(deleteMedia, deleteMedia),
}

export default educationInstructor