import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Document\DistributionPointController::search
* @see app/Http/Controllers/Document/DistributionPointController.php:22
* @route '/distribution-point/search'
*/
export const search = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: search.url(options),
    method: 'post',
})

search.definition = {
    methods: ["post"],
    url: '/distribution-point/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Document\DistributionPointController::search
* @see app/Http/Controllers/Document/DistributionPointController.php:22
* @route '/distribution-point/search'
*/
search.url = (options?: RouteQueryOptions) => {
    return search.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Document\DistributionPointController::search
* @see app/Http/Controllers/Document/DistributionPointController.php:22
* @route '/distribution-point/search'
*/
search.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: search.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Document\DistributionPointController::search
* @see app/Http/Controllers/Document/DistributionPointController.php:22
* @route '/distribution-point/search'
*/
const searchForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: search.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Document\DistributionPointController::search
* @see app/Http/Controllers/Document/DistributionPointController.php:22
* @route '/distribution-point/search'
*/
searchForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: search.url(options),
    method: 'post',
})

search.form = searchForm

/**
* @see \App\Http\Controllers\Document\DistributionPointController::index
* @see app/Http/Controllers/Document/DistributionPointController.php:22
* @route '/distribution-point'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/distribution-point',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Document\DistributionPointController::index
* @see app/Http/Controllers/Document/DistributionPointController.php:22
* @route '/distribution-point'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Document\DistributionPointController::index
* @see app/Http/Controllers/Document/DistributionPointController.php:22
* @route '/distribution-point'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Document\DistributionPointController::index
* @see app/Http/Controllers/Document/DistributionPointController.php:22
* @route '/distribution-point'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Document\DistributionPointController::index
* @see app/Http/Controllers/Document/DistributionPointController.php:22
* @route '/distribution-point'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Document\DistributionPointController::index
* @see app/Http/Controllers/Document/DistributionPointController.php:22
* @route '/distribution-point'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Document\DistributionPointController::index
* @see app/Http/Controllers/Document/DistributionPointController.php:22
* @route '/distribution-point'
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
* @see \App\Http\Controllers\Document\DistributionPointController::create
* @see app/Http/Controllers/Document/DistributionPointController.php:40
* @route '/distribution-point/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/distribution-point/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Document\DistributionPointController::create
* @see app/Http/Controllers/Document/DistributionPointController.php:40
* @route '/distribution-point/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Document\DistributionPointController::create
* @see app/Http/Controllers/Document/DistributionPointController.php:40
* @route '/distribution-point/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Document\DistributionPointController::create
* @see app/Http/Controllers/Document/DistributionPointController.php:40
* @route '/distribution-point/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Document\DistributionPointController::create
* @see app/Http/Controllers/Document/DistributionPointController.php:40
* @route '/distribution-point/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Document\DistributionPointController::create
* @see app/Http/Controllers/Document/DistributionPointController.php:40
* @route '/distribution-point/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Document\DistributionPointController::create
* @see app/Http/Controllers/Document/DistributionPointController.php:40
* @route '/distribution-point/create'
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
* @see \App\Http\Controllers\Document\DistributionPointController::store
* @see app/Http/Controllers/Document/DistributionPointController.php:50
* @route '/distribution-point'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/distribution-point',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Document\DistributionPointController::store
* @see app/Http/Controllers/Document/DistributionPointController.php:50
* @route '/distribution-point'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Document\DistributionPointController::store
* @see app/Http/Controllers/Document/DistributionPointController.php:50
* @route '/distribution-point'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Document\DistributionPointController::store
* @see app/Http/Controllers/Document/DistributionPointController.php:50
* @route '/distribution-point'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Document\DistributionPointController::store
* @see app/Http/Controllers/Document/DistributionPointController.php:50
* @route '/distribution-point'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Document\DistributionPointController::show
* @see app/Http/Controllers/Document/DistributionPointController.php:64
* @route '/distribution-point/{distribution_point}'
*/
export const show = (args: { distribution_point: string | number | { id: string | number } } | [distribution_point: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/distribution-point/{distribution_point}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Document\DistributionPointController::show
* @see app/Http/Controllers/Document/DistributionPointController.php:64
* @route '/distribution-point/{distribution_point}'
*/
show.url = (args: { distribution_point: string | number | { id: string | number } } | [distribution_point: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { distribution_point: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { distribution_point: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            distribution_point: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        distribution_point: typeof args.distribution_point === 'object'
        ? args.distribution_point.id
        : args.distribution_point,
    }

    return show.definition.url
            .replace('{distribution_point}', parsedArgs.distribution_point.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Document\DistributionPointController::show
* @see app/Http/Controllers/Document/DistributionPointController.php:64
* @route '/distribution-point/{distribution_point}'
*/
show.get = (args: { distribution_point: string | number | { id: string | number } } | [distribution_point: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Document\DistributionPointController::show
* @see app/Http/Controllers/Document/DistributionPointController.php:64
* @route '/distribution-point/{distribution_point}'
*/
show.head = (args: { distribution_point: string | number | { id: string | number } } | [distribution_point: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Document\DistributionPointController::show
* @see app/Http/Controllers/Document/DistributionPointController.php:64
* @route '/distribution-point/{distribution_point}'
*/
const showForm = (args: { distribution_point: string | number | { id: string | number } } | [distribution_point: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Document\DistributionPointController::show
* @see app/Http/Controllers/Document/DistributionPointController.php:64
* @route '/distribution-point/{distribution_point}'
*/
showForm.get = (args: { distribution_point: string | number | { id: string | number } } | [distribution_point: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Document\DistributionPointController::show
* @see app/Http/Controllers/Document/DistributionPointController.php:64
* @route '/distribution-point/{distribution_point}'
*/
showForm.head = (args: { distribution_point: string | number | { id: string | number } } | [distribution_point: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Document\DistributionPointController::edit
* @see app/Http/Controllers/Document/DistributionPointController.php:74
* @route '/distribution-point/{distribution_point}/edit'
*/
export const edit = (args: { distribution_point: string | number | { id: string | number } } | [distribution_point: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/distribution-point/{distribution_point}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Document\DistributionPointController::edit
* @see app/Http/Controllers/Document/DistributionPointController.php:74
* @route '/distribution-point/{distribution_point}/edit'
*/
edit.url = (args: { distribution_point: string | number | { id: string | number } } | [distribution_point: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { distribution_point: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { distribution_point: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            distribution_point: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        distribution_point: typeof args.distribution_point === 'object'
        ? args.distribution_point.id
        : args.distribution_point,
    }

    return edit.definition.url
            .replace('{distribution_point}', parsedArgs.distribution_point.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Document\DistributionPointController::edit
* @see app/Http/Controllers/Document/DistributionPointController.php:74
* @route '/distribution-point/{distribution_point}/edit'
*/
edit.get = (args: { distribution_point: string | number | { id: string | number } } | [distribution_point: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Document\DistributionPointController::edit
* @see app/Http/Controllers/Document/DistributionPointController.php:74
* @route '/distribution-point/{distribution_point}/edit'
*/
edit.head = (args: { distribution_point: string | number | { id: string | number } } | [distribution_point: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Document\DistributionPointController::edit
* @see app/Http/Controllers/Document/DistributionPointController.php:74
* @route '/distribution-point/{distribution_point}/edit'
*/
const editForm = (args: { distribution_point: string | number | { id: string | number } } | [distribution_point: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Document\DistributionPointController::edit
* @see app/Http/Controllers/Document/DistributionPointController.php:74
* @route '/distribution-point/{distribution_point}/edit'
*/
editForm.get = (args: { distribution_point: string | number | { id: string | number } } | [distribution_point: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Document\DistributionPointController::edit
* @see app/Http/Controllers/Document/DistributionPointController.php:74
* @route '/distribution-point/{distribution_point}/edit'
*/
editForm.head = (args: { distribution_point: string | number | { id: string | number } } | [distribution_point: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Document\DistributionPointController::update
* @see app/Http/Controllers/Document/DistributionPointController.php:84
* @route '/distribution-point/{distribution_point}'
*/
export const update = (args: { distribution_point: string | number | { id: string | number } } | [distribution_point: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/distribution-point/{distribution_point}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Document\DistributionPointController::update
* @see app/Http/Controllers/Document/DistributionPointController.php:84
* @route '/distribution-point/{distribution_point}'
*/
update.url = (args: { distribution_point: string | number | { id: string | number } } | [distribution_point: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { distribution_point: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { distribution_point: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            distribution_point: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        distribution_point: typeof args.distribution_point === 'object'
        ? args.distribution_point.id
        : args.distribution_point,
    }

    return update.definition.url
            .replace('{distribution_point}', parsedArgs.distribution_point.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Document\DistributionPointController::update
* @see app/Http/Controllers/Document/DistributionPointController.php:84
* @route '/distribution-point/{distribution_point}'
*/
update.put = (args: { distribution_point: string | number | { id: string | number } } | [distribution_point: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Document\DistributionPointController::update
* @see app/Http/Controllers/Document/DistributionPointController.php:84
* @route '/distribution-point/{distribution_point}'
*/
update.patch = (args: { distribution_point: string | number | { id: string | number } } | [distribution_point: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Document\DistributionPointController::update
* @see app/Http/Controllers/Document/DistributionPointController.php:84
* @route '/distribution-point/{distribution_point}'
*/
const updateForm = (args: { distribution_point: string | number | { id: string | number } } | [distribution_point: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Document\DistributionPointController::update
* @see app/Http/Controllers/Document/DistributionPointController.php:84
* @route '/distribution-point/{distribution_point}'
*/
updateForm.put = (args: { distribution_point: string | number | { id: string | number } } | [distribution_point: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Document\DistributionPointController::update
* @see app/Http/Controllers/Document/DistributionPointController.php:84
* @route '/distribution-point/{distribution_point}'
*/
updateForm.patch = (args: { distribution_point: string | number | { id: string | number } } | [distribution_point: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Document\DistributionPointController::destroy
* @see app/Http/Controllers/Document/DistributionPointController.php:98
* @route '/distribution-point/{distribution_point}'
*/
export const destroy = (args: { distribution_point: string | number | { id: string | number } } | [distribution_point: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/distribution-point/{distribution_point}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Document\DistributionPointController::destroy
* @see app/Http/Controllers/Document/DistributionPointController.php:98
* @route '/distribution-point/{distribution_point}'
*/
destroy.url = (args: { distribution_point: string | number | { id: string | number } } | [distribution_point: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { distribution_point: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { distribution_point: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            distribution_point: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        distribution_point: typeof args.distribution_point === 'object'
        ? args.distribution_point.id
        : args.distribution_point,
    }

    return destroy.definition.url
            .replace('{distribution_point}', parsedArgs.distribution_point.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Document\DistributionPointController::destroy
* @see app/Http/Controllers/Document/DistributionPointController.php:98
* @route '/distribution-point/{distribution_point}'
*/
destroy.delete = (args: { distribution_point: string | number | { id: string | number } } | [distribution_point: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Document\DistributionPointController::destroy
* @see app/Http/Controllers/Document/DistributionPointController.php:98
* @route '/distribution-point/{distribution_point}'
*/
const destroyForm = (args: { distribution_point: string | number | { id: string | number } } | [distribution_point: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Document\DistributionPointController::destroy
* @see app/Http/Controllers/Document/DistributionPointController.php:98
* @route '/distribution-point/{distribution_point}'
*/
destroyForm.delete = (args: { distribution_point: string | number | { id: string | number } } | [distribution_point: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const distributionPoint = {
    search: Object.assign(search, search),
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default distributionPoint