import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Document\DocumentController::index
* @see app/Http/Controllers/Document/DocumentController.php:26
* @route '/document/search'
*/
const index6656d06fec313bd3e07e6987135673e8 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: index6656d06fec313bd3e07e6987135673e8.url(options),
    method: 'post',
})

index6656d06fec313bd3e07e6987135673e8.definition = {
    methods: ["post"],
    url: '/document/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Document\DocumentController::index
* @see app/Http/Controllers/Document/DocumentController.php:26
* @route '/document/search'
*/
index6656d06fec313bd3e07e6987135673e8.url = (options?: RouteQueryOptions) => {
    return index6656d06fec313bd3e07e6987135673e8.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Document\DocumentController::index
* @see app/Http/Controllers/Document/DocumentController.php:26
* @route '/document/search'
*/
index6656d06fec313bd3e07e6987135673e8.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: index6656d06fec313bd3e07e6987135673e8.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Document\DocumentController::index
* @see app/Http/Controllers/Document/DocumentController.php:26
* @route '/document/search'
*/
const index6656d06fec313bd3e07e6987135673e8Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: index6656d06fec313bd3e07e6987135673e8.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Document\DocumentController::index
* @see app/Http/Controllers/Document/DocumentController.php:26
* @route '/document/search'
*/
index6656d06fec313bd3e07e6987135673e8Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: index6656d06fec313bd3e07e6987135673e8.url(options),
    method: 'post',
})

index6656d06fec313bd3e07e6987135673e8.form = index6656d06fec313bd3e07e6987135673e8Form
/**
* @see \App\Http\Controllers\Document\DocumentController::index
* @see app/Http/Controllers/Document/DocumentController.php:26
* @route '/document'
*/
const index09421082d54adf2d1aff2d1b88261170 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index09421082d54adf2d1aff2d1b88261170.url(options),
    method: 'get',
})

index09421082d54adf2d1aff2d1b88261170.definition = {
    methods: ["get","head"],
    url: '/document',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Document\DocumentController::index
* @see app/Http/Controllers/Document/DocumentController.php:26
* @route '/document'
*/
index09421082d54adf2d1aff2d1b88261170.url = (options?: RouteQueryOptions) => {
    return index09421082d54adf2d1aff2d1b88261170.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Document\DocumentController::index
* @see app/Http/Controllers/Document/DocumentController.php:26
* @route '/document'
*/
index09421082d54adf2d1aff2d1b88261170.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index09421082d54adf2d1aff2d1b88261170.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Document\DocumentController::index
* @see app/Http/Controllers/Document/DocumentController.php:26
* @route '/document'
*/
index09421082d54adf2d1aff2d1b88261170.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index09421082d54adf2d1aff2d1b88261170.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Document\DocumentController::index
* @see app/Http/Controllers/Document/DocumentController.php:26
* @route '/document'
*/
const index09421082d54adf2d1aff2d1b88261170Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index09421082d54adf2d1aff2d1b88261170.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Document\DocumentController::index
* @see app/Http/Controllers/Document/DocumentController.php:26
* @route '/document'
*/
index09421082d54adf2d1aff2d1b88261170Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index09421082d54adf2d1aff2d1b88261170.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Document\DocumentController::index
* @see app/Http/Controllers/Document/DocumentController.php:26
* @route '/document'
*/
index09421082d54adf2d1aff2d1b88261170Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index09421082d54adf2d1aff2d1b88261170.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index09421082d54adf2d1aff2d1b88261170.form = index09421082d54adf2d1aff2d1b88261170Form

/**
* Multiple routes resolve to \App\Http\Controllers\Document\DocumentController::index, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `index['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const index = {
    '/document/search': index6656d06fec313bd3e07e6987135673e8,
    '/document': index09421082d54adf2d1aff2d1b88261170,
}

/**
* @see \App\Http\Controllers\Document\DocumentController::create
* @see app/Http/Controllers/Document/DocumentController.php:52
* @route '/document/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/document/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Document\DocumentController::create
* @see app/Http/Controllers/Document/DocumentController.php:52
* @route '/document/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Document\DocumentController::create
* @see app/Http/Controllers/Document/DocumentController.php:52
* @route '/document/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Document\DocumentController::create
* @see app/Http/Controllers/Document/DocumentController.php:52
* @route '/document/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Document\DocumentController::create
* @see app/Http/Controllers/Document/DocumentController.php:52
* @route '/document/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Document\DocumentController::create
* @see app/Http/Controllers/Document/DocumentController.php:52
* @route '/document/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Document\DocumentController::create
* @see app/Http/Controllers/Document/DocumentController.php:52
* @route '/document/create'
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
* @see \App\Http\Controllers\Document\DocumentController::store
* @see app/Http/Controllers/Document/DocumentController.php:74
* @route '/document'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/document',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Document\DocumentController::store
* @see app/Http/Controllers/Document/DocumentController.php:74
* @route '/document'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Document\DocumentController::store
* @see app/Http/Controllers/Document/DocumentController.php:74
* @route '/document'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Document\DocumentController::store
* @see app/Http/Controllers/Document/DocumentController.php:74
* @route '/document'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Document\DocumentController::store
* @see app/Http/Controllers/Document/DocumentController.php:74
* @route '/document'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Document\DocumentController::show
* @see app/Http/Controllers/Document/DocumentController.php:110
* @route '/document/{document}'
*/
export const show = (args: { document: string | number | { id: string | number } } | [document: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/document/{document}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Document\DocumentController::show
* @see app/Http/Controllers/Document/DocumentController.php:110
* @route '/document/{document}'
*/
show.url = (args: { document: string | number | { id: string | number } } | [document: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { document: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { document: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            document: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        document: typeof args.document === 'object'
        ? args.document.id
        : args.document,
    }

    return show.definition.url
            .replace('{document}', parsedArgs.document.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Document\DocumentController::show
* @see app/Http/Controllers/Document/DocumentController.php:110
* @route '/document/{document}'
*/
show.get = (args: { document: string | number | { id: string | number } } | [document: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Document\DocumentController::show
* @see app/Http/Controllers/Document/DocumentController.php:110
* @route '/document/{document}'
*/
show.head = (args: { document: string | number | { id: string | number } } | [document: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Document\DocumentController::show
* @see app/Http/Controllers/Document/DocumentController.php:110
* @route '/document/{document}'
*/
const showForm = (args: { document: string | number | { id: string | number } } | [document: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Document\DocumentController::show
* @see app/Http/Controllers/Document/DocumentController.php:110
* @route '/document/{document}'
*/
showForm.get = (args: { document: string | number | { id: string | number } } | [document: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Document\DocumentController::show
* @see app/Http/Controllers/Document/DocumentController.php:110
* @route '/document/{document}'
*/
showForm.head = (args: { document: string | number | { id: string | number } } | [document: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Document\DocumentController::edit
* @see app/Http/Controllers/Document/DocumentController.php:127
* @route '/document/{document}/edit'
*/
export const edit = (args: { document: string | number | { id: string | number } } | [document: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/document/{document}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Document\DocumentController::edit
* @see app/Http/Controllers/Document/DocumentController.php:127
* @route '/document/{document}/edit'
*/
edit.url = (args: { document: string | number | { id: string | number } } | [document: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { document: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { document: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            document: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        document: typeof args.document === 'object'
        ? args.document.id
        : args.document,
    }

    return edit.definition.url
            .replace('{document}', parsedArgs.document.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Document\DocumentController::edit
* @see app/Http/Controllers/Document/DocumentController.php:127
* @route '/document/{document}/edit'
*/
edit.get = (args: { document: string | number | { id: string | number } } | [document: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Document\DocumentController::edit
* @see app/Http/Controllers/Document/DocumentController.php:127
* @route '/document/{document}/edit'
*/
edit.head = (args: { document: string | number | { id: string | number } } | [document: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Document\DocumentController::edit
* @see app/Http/Controllers/Document/DocumentController.php:127
* @route '/document/{document}/edit'
*/
const editForm = (args: { document: string | number | { id: string | number } } | [document: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Document\DocumentController::edit
* @see app/Http/Controllers/Document/DocumentController.php:127
* @route '/document/{document}/edit'
*/
editForm.get = (args: { document: string | number | { id: string | number } } | [document: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Document\DocumentController::edit
* @see app/Http/Controllers/Document/DocumentController.php:127
* @route '/document/{document}/edit'
*/
editForm.head = (args: { document: string | number | { id: string | number } } | [document: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Document\DocumentController::update
* @see app/Http/Controllers/Document/DocumentController.php:139
* @route '/document/{document}'
*/
export const update = (args: { document: string | number | { id: string | number } } | [document: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/document/{document}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Document\DocumentController::update
* @see app/Http/Controllers/Document/DocumentController.php:139
* @route '/document/{document}'
*/
update.url = (args: { document: string | number | { id: string | number } } | [document: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { document: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { document: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            document: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        document: typeof args.document === 'object'
        ? args.document.id
        : args.document,
    }

    return update.definition.url
            .replace('{document}', parsedArgs.document.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Document\DocumentController::update
* @see app/Http/Controllers/Document/DocumentController.php:139
* @route '/document/{document}'
*/
update.put = (args: { document: string | number | { id: string | number } } | [document: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Document\DocumentController::update
* @see app/Http/Controllers/Document/DocumentController.php:139
* @route '/document/{document}'
*/
update.patch = (args: { document: string | number | { id: string | number } } | [document: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Document\DocumentController::update
* @see app/Http/Controllers/Document/DocumentController.php:139
* @route '/document/{document}'
*/
const updateForm = (args: { document: string | number | { id: string | number } } | [document: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Document\DocumentController::update
* @see app/Http/Controllers/Document/DocumentController.php:139
* @route '/document/{document}'
*/
updateForm.put = (args: { document: string | number | { id: string | number } } | [document: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Document\DocumentController::update
* @see app/Http/Controllers/Document/DocumentController.php:139
* @route '/document/{document}'
*/
updateForm.patch = (args: { document: string | number | { id: string | number } } | [document: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Document\DocumentController::destroy
* @see app/Http/Controllers/Document/DocumentController.php:150
* @route '/document/{document}'
*/
export const destroy = (args: { document: string | number | { id: string | number } } | [document: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/document/{document}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Document\DocumentController::destroy
* @see app/Http/Controllers/Document/DocumentController.php:150
* @route '/document/{document}'
*/
destroy.url = (args: { document: string | number | { id: string | number } } | [document: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { document: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { document: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            document: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        document: typeof args.document === 'object'
        ? args.document.id
        : args.document,
    }

    return destroy.definition.url
            .replace('{document}', parsedArgs.document.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Document\DocumentController::destroy
* @see app/Http/Controllers/Document/DocumentController.php:150
* @route '/document/{document}'
*/
destroy.delete = (args: { document: string | number | { id: string | number } } | [document: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Document\DocumentController::destroy
* @see app/Http/Controllers/Document/DocumentController.php:150
* @route '/document/{document}'
*/
const destroyForm = (args: { document: string | number | { id: string | number } } | [document: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Document\DocumentController::destroy
* @see app/Http/Controllers/Document/DocumentController.php:150
* @route '/document/{document}'
*/
destroyForm.delete = (args: { document: string | number | { id: string | number } } | [document: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const DocumentController = { index, create, store, show, edit, update, destroy }

export default DocumentController