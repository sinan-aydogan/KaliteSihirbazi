import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Setting\PropertyController::index
* @see app/Http/Controllers/Setting/PropertyController.php:18
* @route '/settings/property'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/settings/property',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Setting\PropertyController::index
* @see app/Http/Controllers/Setting/PropertyController.php:18
* @route '/settings/property'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Setting\PropertyController::index
* @see app/Http/Controllers/Setting/PropertyController.php:18
* @route '/settings/property'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Setting\PropertyController::index
* @see app/Http/Controllers/Setting/PropertyController.php:18
* @route '/settings/property'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Setting\PropertyController::index
* @see app/Http/Controllers/Setting/PropertyController.php:18
* @route '/settings/property'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Setting\PropertyController::index
* @see app/Http/Controllers/Setting/PropertyController.php:18
* @route '/settings/property'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Setting\PropertyController::index
* @see app/Http/Controllers/Setting/PropertyController.php:18
* @route '/settings/property'
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
* @see \App\Http\Controllers\Setting\PropertyController::create
* @see app/Http/Controllers/Setting/PropertyController.php:0
* @route '/settings/property/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/settings/property/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Setting\PropertyController::create
* @see app/Http/Controllers/Setting/PropertyController.php:0
* @route '/settings/property/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Setting\PropertyController::create
* @see app/Http/Controllers/Setting/PropertyController.php:0
* @route '/settings/property/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Setting\PropertyController::create
* @see app/Http/Controllers/Setting/PropertyController.php:0
* @route '/settings/property/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Setting\PropertyController::create
* @see app/Http/Controllers/Setting/PropertyController.php:0
* @route '/settings/property/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Setting\PropertyController::create
* @see app/Http/Controllers/Setting/PropertyController.php:0
* @route '/settings/property/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Setting\PropertyController::create
* @see app/Http/Controllers/Setting/PropertyController.php:0
* @route '/settings/property/create'
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
* @see \App\Http\Controllers\Setting\PropertyController::store
* @see app/Http/Controllers/Setting/PropertyController.php:26
* @route '/settings/property'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/settings/property',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Setting\PropertyController::store
* @see app/Http/Controllers/Setting/PropertyController.php:26
* @route '/settings/property'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Setting\PropertyController::store
* @see app/Http/Controllers/Setting/PropertyController.php:26
* @route '/settings/property'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Setting\PropertyController::store
* @see app/Http/Controllers/Setting/PropertyController.php:26
* @route '/settings/property'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Setting\PropertyController::store
* @see app/Http/Controllers/Setting/PropertyController.php:26
* @route '/settings/property'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Setting\PropertyController::show
* @see app/Http/Controllers/Setting/PropertyController.php:0
* @route '/settings/property/{property}'
*/
export const show = (args: { property: string | number } | [property: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/settings/property/{property}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Setting\PropertyController::show
* @see app/Http/Controllers/Setting/PropertyController.php:0
* @route '/settings/property/{property}'
*/
show.url = (args: { property: string | number } | [property: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { property: args }
    }

    if (Array.isArray(args)) {
        args = {
            property: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        property: args.property,
    }

    return show.definition.url
            .replace('{property}', parsedArgs.property.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Setting\PropertyController::show
* @see app/Http/Controllers/Setting/PropertyController.php:0
* @route '/settings/property/{property}'
*/
show.get = (args: { property: string | number } | [property: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Setting\PropertyController::show
* @see app/Http/Controllers/Setting/PropertyController.php:0
* @route '/settings/property/{property}'
*/
show.head = (args: { property: string | number } | [property: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Setting\PropertyController::show
* @see app/Http/Controllers/Setting/PropertyController.php:0
* @route '/settings/property/{property}'
*/
const showForm = (args: { property: string | number } | [property: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Setting\PropertyController::show
* @see app/Http/Controllers/Setting/PropertyController.php:0
* @route '/settings/property/{property}'
*/
showForm.get = (args: { property: string | number } | [property: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Setting\PropertyController::show
* @see app/Http/Controllers/Setting/PropertyController.php:0
* @route '/settings/property/{property}'
*/
showForm.head = (args: { property: string | number } | [property: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Setting\PropertyController::edit
* @see app/Http/Controllers/Setting/PropertyController.php:0
* @route '/settings/property/{property}/edit'
*/
export const edit = (args: { property: string | number } | [property: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/settings/property/{property}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Setting\PropertyController::edit
* @see app/Http/Controllers/Setting/PropertyController.php:0
* @route '/settings/property/{property}/edit'
*/
edit.url = (args: { property: string | number } | [property: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { property: args }
    }

    if (Array.isArray(args)) {
        args = {
            property: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        property: args.property,
    }

    return edit.definition.url
            .replace('{property}', parsedArgs.property.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Setting\PropertyController::edit
* @see app/Http/Controllers/Setting/PropertyController.php:0
* @route '/settings/property/{property}/edit'
*/
edit.get = (args: { property: string | number } | [property: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Setting\PropertyController::edit
* @see app/Http/Controllers/Setting/PropertyController.php:0
* @route '/settings/property/{property}/edit'
*/
edit.head = (args: { property: string | number } | [property: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Setting\PropertyController::edit
* @see app/Http/Controllers/Setting/PropertyController.php:0
* @route '/settings/property/{property}/edit'
*/
const editForm = (args: { property: string | number } | [property: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Setting\PropertyController::edit
* @see app/Http/Controllers/Setting/PropertyController.php:0
* @route '/settings/property/{property}/edit'
*/
editForm.get = (args: { property: string | number } | [property: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Setting\PropertyController::edit
* @see app/Http/Controllers/Setting/PropertyController.php:0
* @route '/settings/property/{property}/edit'
*/
editForm.head = (args: { property: string | number } | [property: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Setting\PropertyController::update
* @see app/Http/Controllers/Setting/PropertyController.php:33
* @route '/settings/property/{property}'
*/
export const update = (args: { property: string | number | { id: string | number } } | [property: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/settings/property/{property}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Setting\PropertyController::update
* @see app/Http/Controllers/Setting/PropertyController.php:33
* @route '/settings/property/{property}'
*/
update.url = (args: { property: string | number | { id: string | number } } | [property: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { property: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { property: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            property: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        property: typeof args.property === 'object'
        ? args.property.id
        : args.property,
    }

    return update.definition.url
            .replace('{property}', parsedArgs.property.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Setting\PropertyController::update
* @see app/Http/Controllers/Setting/PropertyController.php:33
* @route '/settings/property/{property}'
*/
update.put = (args: { property: string | number | { id: string | number } } | [property: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Setting\PropertyController::update
* @see app/Http/Controllers/Setting/PropertyController.php:33
* @route '/settings/property/{property}'
*/
update.patch = (args: { property: string | number | { id: string | number } } | [property: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Setting\PropertyController::update
* @see app/Http/Controllers/Setting/PropertyController.php:33
* @route '/settings/property/{property}'
*/
const updateForm = (args: { property: string | number | { id: string | number } } | [property: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Setting\PropertyController::update
* @see app/Http/Controllers/Setting/PropertyController.php:33
* @route '/settings/property/{property}'
*/
updateForm.put = (args: { property: string | number | { id: string | number } } | [property: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Setting\PropertyController::update
* @see app/Http/Controllers/Setting/PropertyController.php:33
* @route '/settings/property/{property}'
*/
updateForm.patch = (args: { property: string | number | { id: string | number } } | [property: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Setting\PropertyController::destroy
* @see app/Http/Controllers/Setting/PropertyController.php:40
* @route '/settings/property/{property}'
*/
export const destroy = (args: { property: string | number | { id: string | number } } | [property: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/settings/property/{property}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Setting\PropertyController::destroy
* @see app/Http/Controllers/Setting/PropertyController.php:40
* @route '/settings/property/{property}'
*/
destroy.url = (args: { property: string | number | { id: string | number } } | [property: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { property: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { property: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            property: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        property: typeof args.property === 'object'
        ? args.property.id
        : args.property,
    }

    return destroy.definition.url
            .replace('{property}', parsedArgs.property.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Setting\PropertyController::destroy
* @see app/Http/Controllers/Setting/PropertyController.php:40
* @route '/settings/property/{property}'
*/
destroy.delete = (args: { property: string | number | { id: string | number } } | [property: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Setting\PropertyController::destroy
* @see app/Http/Controllers/Setting/PropertyController.php:40
* @route '/settings/property/{property}'
*/
const destroyForm = (args: { property: string | number | { id: string | number } } | [property: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Setting\PropertyController::destroy
* @see app/Http/Controllers/Setting/PropertyController.php:40
* @route '/settings/property/{property}'
*/
destroyForm.delete = (args: { property: string | number | { id: string | number } } | [property: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const property = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default property