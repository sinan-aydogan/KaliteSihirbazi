import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\SupplierController::index
* @see app/Http/Controllers/SupplierController.php:21
* @route '/supplier/search'
*/
const index7ae67b542304edf98ba3ac067da898ac = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: index7ae67b542304edf98ba3ac067da898ac.url(options),
    method: 'post',
})

index7ae67b542304edf98ba3ac067da898ac.definition = {
    methods: ["post"],
    url: '/supplier/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SupplierController::index
* @see app/Http/Controllers/SupplierController.php:21
* @route '/supplier/search'
*/
index7ae67b542304edf98ba3ac067da898ac.url = (options?: RouteQueryOptions) => {
    return index7ae67b542304edf98ba3ac067da898ac.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SupplierController::index
* @see app/Http/Controllers/SupplierController.php:21
* @route '/supplier/search'
*/
index7ae67b542304edf98ba3ac067da898ac.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: index7ae67b542304edf98ba3ac067da898ac.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SupplierController::index
* @see app/Http/Controllers/SupplierController.php:21
* @route '/supplier/search'
*/
const index7ae67b542304edf98ba3ac067da898acForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: index7ae67b542304edf98ba3ac067da898ac.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SupplierController::index
* @see app/Http/Controllers/SupplierController.php:21
* @route '/supplier/search'
*/
index7ae67b542304edf98ba3ac067da898acForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: index7ae67b542304edf98ba3ac067da898ac.url(options),
    method: 'post',
})

index7ae67b542304edf98ba3ac067da898ac.form = index7ae67b542304edf98ba3ac067da898acForm
/**
* @see \App\Http\Controllers\SupplierController::index
* @see app/Http/Controllers/SupplierController.php:21
* @route '/supplier'
*/
const index1ff89135aa04e7161af1deb5ddb1fc29 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index1ff89135aa04e7161af1deb5ddb1fc29.url(options),
    method: 'get',
})

index1ff89135aa04e7161af1deb5ddb1fc29.definition = {
    methods: ["get","head"],
    url: '/supplier',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SupplierController::index
* @see app/Http/Controllers/SupplierController.php:21
* @route '/supplier'
*/
index1ff89135aa04e7161af1deb5ddb1fc29.url = (options?: RouteQueryOptions) => {
    return index1ff89135aa04e7161af1deb5ddb1fc29.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SupplierController::index
* @see app/Http/Controllers/SupplierController.php:21
* @route '/supplier'
*/
index1ff89135aa04e7161af1deb5ddb1fc29.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index1ff89135aa04e7161af1deb5ddb1fc29.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SupplierController::index
* @see app/Http/Controllers/SupplierController.php:21
* @route '/supplier'
*/
index1ff89135aa04e7161af1deb5ddb1fc29.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index1ff89135aa04e7161af1deb5ddb1fc29.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\SupplierController::index
* @see app/Http/Controllers/SupplierController.php:21
* @route '/supplier'
*/
const index1ff89135aa04e7161af1deb5ddb1fc29Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index1ff89135aa04e7161af1deb5ddb1fc29.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SupplierController::index
* @see app/Http/Controllers/SupplierController.php:21
* @route '/supplier'
*/
index1ff89135aa04e7161af1deb5ddb1fc29Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index1ff89135aa04e7161af1deb5ddb1fc29.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SupplierController::index
* @see app/Http/Controllers/SupplierController.php:21
* @route '/supplier'
*/
index1ff89135aa04e7161af1deb5ddb1fc29Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index1ff89135aa04e7161af1deb5ddb1fc29.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index1ff89135aa04e7161af1deb5ddb1fc29.form = index1ff89135aa04e7161af1deb5ddb1fc29Form

/**
* Multiple routes resolve to \App\Http\Controllers\SupplierController::index, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `index['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const index = {
    '/supplier/search': index7ae67b542304edf98ba3ac067da898ac,
    '/supplier': index1ff89135aa04e7161af1deb5ddb1fc29,
}

/**
* @see \App\Http\Controllers\SupplierController::create
* @see app/Http/Controllers/SupplierController.php:42
* @route '/supplier/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/supplier/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SupplierController::create
* @see app/Http/Controllers/SupplierController.php:42
* @route '/supplier/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SupplierController::create
* @see app/Http/Controllers/SupplierController.php:42
* @route '/supplier/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SupplierController::create
* @see app/Http/Controllers/SupplierController.php:42
* @route '/supplier/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\SupplierController::create
* @see app/Http/Controllers/SupplierController.php:42
* @route '/supplier/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SupplierController::create
* @see app/Http/Controllers/SupplierController.php:42
* @route '/supplier/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SupplierController::create
* @see app/Http/Controllers/SupplierController.php:42
* @route '/supplier/create'
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
* @see \App\Http\Controllers\SupplierController::store
* @see app/Http/Controllers/SupplierController.php:52
* @route '/supplier'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/supplier',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SupplierController::store
* @see app/Http/Controllers/SupplierController.php:52
* @route '/supplier'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SupplierController::store
* @see app/Http/Controllers/SupplierController.php:52
* @route '/supplier'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SupplierController::store
* @see app/Http/Controllers/SupplierController.php:52
* @route '/supplier'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SupplierController::store
* @see app/Http/Controllers/SupplierController.php:52
* @route '/supplier'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\SupplierController::show
* @see app/Http/Controllers/SupplierController.php:73
* @route '/supplier/{supplier}'
*/
export const show = (args: { supplier: string | number | { id: string | number } } | [supplier: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/supplier/{supplier}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SupplierController::show
* @see app/Http/Controllers/SupplierController.php:73
* @route '/supplier/{supplier}'
*/
show.url = (args: { supplier: string | number | { id: string | number } } | [supplier: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { supplier: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { supplier: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            supplier: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        supplier: typeof args.supplier === 'object'
        ? args.supplier.id
        : args.supplier,
    }

    return show.definition.url
            .replace('{supplier}', parsedArgs.supplier.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\SupplierController::show
* @see app/Http/Controllers/SupplierController.php:73
* @route '/supplier/{supplier}'
*/
show.get = (args: { supplier: string | number | { id: string | number } } | [supplier: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SupplierController::show
* @see app/Http/Controllers/SupplierController.php:73
* @route '/supplier/{supplier}'
*/
show.head = (args: { supplier: string | number | { id: string | number } } | [supplier: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\SupplierController::show
* @see app/Http/Controllers/SupplierController.php:73
* @route '/supplier/{supplier}'
*/
const showForm = (args: { supplier: string | number | { id: string | number } } | [supplier: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SupplierController::show
* @see app/Http/Controllers/SupplierController.php:73
* @route '/supplier/{supplier}'
*/
showForm.get = (args: { supplier: string | number | { id: string | number } } | [supplier: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SupplierController::show
* @see app/Http/Controllers/SupplierController.php:73
* @route '/supplier/{supplier}'
*/
showForm.head = (args: { supplier: string | number | { id: string | number } } | [supplier: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\SupplierController::edit
* @see app/Http/Controllers/SupplierController.php:83
* @route '/supplier/{supplier}/edit'
*/
export const edit = (args: { supplier: string | number | { id: string | number } } | [supplier: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/supplier/{supplier}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SupplierController::edit
* @see app/Http/Controllers/SupplierController.php:83
* @route '/supplier/{supplier}/edit'
*/
edit.url = (args: { supplier: string | number | { id: string | number } } | [supplier: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { supplier: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { supplier: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            supplier: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        supplier: typeof args.supplier === 'object'
        ? args.supplier.id
        : args.supplier,
    }

    return edit.definition.url
            .replace('{supplier}', parsedArgs.supplier.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\SupplierController::edit
* @see app/Http/Controllers/SupplierController.php:83
* @route '/supplier/{supplier}/edit'
*/
edit.get = (args: { supplier: string | number | { id: string | number } } | [supplier: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SupplierController::edit
* @see app/Http/Controllers/SupplierController.php:83
* @route '/supplier/{supplier}/edit'
*/
edit.head = (args: { supplier: string | number | { id: string | number } } | [supplier: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\SupplierController::edit
* @see app/Http/Controllers/SupplierController.php:83
* @route '/supplier/{supplier}/edit'
*/
const editForm = (args: { supplier: string | number | { id: string | number } } | [supplier: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SupplierController::edit
* @see app/Http/Controllers/SupplierController.php:83
* @route '/supplier/{supplier}/edit'
*/
editForm.get = (args: { supplier: string | number | { id: string | number } } | [supplier: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SupplierController::edit
* @see app/Http/Controllers/SupplierController.php:83
* @route '/supplier/{supplier}/edit'
*/
editForm.head = (args: { supplier: string | number | { id: string | number } } | [supplier: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\SupplierController::update
* @see app/Http/Controllers/SupplierController.php:95
* @route '/supplier/{supplier}'
*/
export const update = (args: { supplier: string | number | { id: string | number } } | [supplier: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/supplier/{supplier}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\SupplierController::update
* @see app/Http/Controllers/SupplierController.php:95
* @route '/supplier/{supplier}'
*/
update.url = (args: { supplier: string | number | { id: string | number } } | [supplier: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { supplier: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { supplier: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            supplier: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        supplier: typeof args.supplier === 'object'
        ? args.supplier.id
        : args.supplier,
    }

    return update.definition.url
            .replace('{supplier}', parsedArgs.supplier.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\SupplierController::update
* @see app/Http/Controllers/SupplierController.php:95
* @route '/supplier/{supplier}'
*/
update.put = (args: { supplier: string | number | { id: string | number } } | [supplier: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\SupplierController::update
* @see app/Http/Controllers/SupplierController.php:95
* @route '/supplier/{supplier}'
*/
update.patch = (args: { supplier: string | number | { id: string | number } } | [supplier: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\SupplierController::update
* @see app/Http/Controllers/SupplierController.php:95
* @route '/supplier/{supplier}'
*/
const updateForm = (args: { supplier: string | number | { id: string | number } } | [supplier: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SupplierController::update
* @see app/Http/Controllers/SupplierController.php:95
* @route '/supplier/{supplier}'
*/
updateForm.put = (args: { supplier: string | number | { id: string | number } } | [supplier: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SupplierController::update
* @see app/Http/Controllers/SupplierController.php:95
* @route '/supplier/{supplier}'
*/
updateForm.patch = (args: { supplier: string | number | { id: string | number } } | [supplier: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\SupplierController::destroy
* @see app/Http/Controllers/SupplierController.php:116
* @route '/supplier/{supplier}'
*/
export const destroy = (args: { supplier: string | number | { id: string | number } } | [supplier: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/supplier/{supplier}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\SupplierController::destroy
* @see app/Http/Controllers/SupplierController.php:116
* @route '/supplier/{supplier}'
*/
destroy.url = (args: { supplier: string | number | { id: string | number } } | [supplier: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { supplier: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { supplier: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            supplier: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        supplier: typeof args.supplier === 'object'
        ? args.supplier.id
        : args.supplier,
    }

    return destroy.definition.url
            .replace('{supplier}', parsedArgs.supplier.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\SupplierController::destroy
* @see app/Http/Controllers/SupplierController.php:116
* @route '/supplier/{supplier}'
*/
destroy.delete = (args: { supplier: string | number | { id: string | number } } | [supplier: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\SupplierController::destroy
* @see app/Http/Controllers/SupplierController.php:116
* @route '/supplier/{supplier}'
*/
const destroyForm = (args: { supplier: string | number | { id: string | number } } | [supplier: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SupplierController::destroy
* @see app/Http/Controllers/SupplierController.php:116
* @route '/supplier/{supplier}'
*/
destroyForm.delete = (args: { supplier: string | number | { id: string | number } } | [supplier: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const SupplierController = { index, create, store, show, edit, update, destroy }

export default SupplierController