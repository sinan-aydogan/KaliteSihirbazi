import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Setting\ModuleController::index
* @see app/Http/Controllers/Setting/ModuleController.php:17
* @route '/settings/module'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/settings/module',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Setting\ModuleController::index
* @see app/Http/Controllers/Setting/ModuleController.php:17
* @route '/settings/module'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Setting\ModuleController::index
* @see app/Http/Controllers/Setting/ModuleController.php:17
* @route '/settings/module'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Setting\ModuleController::index
* @see app/Http/Controllers/Setting/ModuleController.php:17
* @route '/settings/module'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Setting\ModuleController::index
* @see app/Http/Controllers/Setting/ModuleController.php:17
* @route '/settings/module'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Setting\ModuleController::index
* @see app/Http/Controllers/Setting/ModuleController.php:17
* @route '/settings/module'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Setting\ModuleController::index
* @see app/Http/Controllers/Setting/ModuleController.php:17
* @route '/settings/module'
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
* @see \App\Http\Controllers\Setting\ModuleController::create
* @see app/Http/Controllers/Setting/ModuleController.php:0
* @route '/settings/module/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/settings/module/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Setting\ModuleController::create
* @see app/Http/Controllers/Setting/ModuleController.php:0
* @route '/settings/module/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Setting\ModuleController::create
* @see app/Http/Controllers/Setting/ModuleController.php:0
* @route '/settings/module/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Setting\ModuleController::create
* @see app/Http/Controllers/Setting/ModuleController.php:0
* @route '/settings/module/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Setting\ModuleController::create
* @see app/Http/Controllers/Setting/ModuleController.php:0
* @route '/settings/module/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Setting\ModuleController::create
* @see app/Http/Controllers/Setting/ModuleController.php:0
* @route '/settings/module/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Setting\ModuleController::create
* @see app/Http/Controllers/Setting/ModuleController.php:0
* @route '/settings/module/create'
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
* @see \App\Http\Controllers\Setting\ModuleController::store
* @see app/Http/Controllers/Setting/ModuleController.php:22
* @route '/settings/module'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/settings/module',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Setting\ModuleController::store
* @see app/Http/Controllers/Setting/ModuleController.php:22
* @route '/settings/module'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Setting\ModuleController::store
* @see app/Http/Controllers/Setting/ModuleController.php:22
* @route '/settings/module'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Setting\ModuleController::store
* @see app/Http/Controllers/Setting/ModuleController.php:22
* @route '/settings/module'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Setting\ModuleController::store
* @see app/Http/Controllers/Setting/ModuleController.php:22
* @route '/settings/module'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Setting\ModuleController::show
* @see app/Http/Controllers/Setting/ModuleController.php:0
* @route '/settings/module/{module}'
*/
export const show = (args: { module: string | number } | [module: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/settings/module/{module}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Setting\ModuleController::show
* @see app/Http/Controllers/Setting/ModuleController.php:0
* @route '/settings/module/{module}'
*/
show.url = (args: { module: string | number } | [module: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { module: args }
    }

    if (Array.isArray(args)) {
        args = {
            module: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        module: args.module,
    }

    return show.definition.url
            .replace('{module}', parsedArgs.module.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Setting\ModuleController::show
* @see app/Http/Controllers/Setting/ModuleController.php:0
* @route '/settings/module/{module}'
*/
show.get = (args: { module: string | number } | [module: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Setting\ModuleController::show
* @see app/Http/Controllers/Setting/ModuleController.php:0
* @route '/settings/module/{module}'
*/
show.head = (args: { module: string | number } | [module: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Setting\ModuleController::show
* @see app/Http/Controllers/Setting/ModuleController.php:0
* @route '/settings/module/{module}'
*/
const showForm = (args: { module: string | number } | [module: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Setting\ModuleController::show
* @see app/Http/Controllers/Setting/ModuleController.php:0
* @route '/settings/module/{module}'
*/
showForm.get = (args: { module: string | number } | [module: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Setting\ModuleController::show
* @see app/Http/Controllers/Setting/ModuleController.php:0
* @route '/settings/module/{module}'
*/
showForm.head = (args: { module: string | number } | [module: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Setting\ModuleController::edit
* @see app/Http/Controllers/Setting/ModuleController.php:0
* @route '/settings/module/{module}/edit'
*/
export const edit = (args: { module: string | number } | [module: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/settings/module/{module}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Setting\ModuleController::edit
* @see app/Http/Controllers/Setting/ModuleController.php:0
* @route '/settings/module/{module}/edit'
*/
edit.url = (args: { module: string | number } | [module: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { module: args }
    }

    if (Array.isArray(args)) {
        args = {
            module: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        module: args.module,
    }

    return edit.definition.url
            .replace('{module}', parsedArgs.module.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Setting\ModuleController::edit
* @see app/Http/Controllers/Setting/ModuleController.php:0
* @route '/settings/module/{module}/edit'
*/
edit.get = (args: { module: string | number } | [module: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Setting\ModuleController::edit
* @see app/Http/Controllers/Setting/ModuleController.php:0
* @route '/settings/module/{module}/edit'
*/
edit.head = (args: { module: string | number } | [module: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Setting\ModuleController::edit
* @see app/Http/Controllers/Setting/ModuleController.php:0
* @route '/settings/module/{module}/edit'
*/
const editForm = (args: { module: string | number } | [module: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Setting\ModuleController::edit
* @see app/Http/Controllers/Setting/ModuleController.php:0
* @route '/settings/module/{module}/edit'
*/
editForm.get = (args: { module: string | number } | [module: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Setting\ModuleController::edit
* @see app/Http/Controllers/Setting/ModuleController.php:0
* @route '/settings/module/{module}/edit'
*/
editForm.head = (args: { module: string | number } | [module: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Setting\ModuleController::update
* @see app/Http/Controllers/Setting/ModuleController.php:29
* @route '/settings/module/{module}'
*/
export const update = (args: { module: number | { id: number } } | [module: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/settings/module/{module}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Setting\ModuleController::update
* @see app/Http/Controllers/Setting/ModuleController.php:29
* @route '/settings/module/{module}'
*/
update.url = (args: { module: number | { id: number } } | [module: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { module: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { module: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            module: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        module: typeof args.module === 'object'
        ? args.module.id
        : args.module,
    }

    return update.definition.url
            .replace('{module}', parsedArgs.module.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Setting\ModuleController::update
* @see app/Http/Controllers/Setting/ModuleController.php:29
* @route '/settings/module/{module}'
*/
update.put = (args: { module: number | { id: number } } | [module: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Setting\ModuleController::update
* @see app/Http/Controllers/Setting/ModuleController.php:29
* @route '/settings/module/{module}'
*/
update.patch = (args: { module: number | { id: number } } | [module: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Setting\ModuleController::update
* @see app/Http/Controllers/Setting/ModuleController.php:29
* @route '/settings/module/{module}'
*/
const updateForm = (args: { module: number | { id: number } } | [module: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Setting\ModuleController::update
* @see app/Http/Controllers/Setting/ModuleController.php:29
* @route '/settings/module/{module}'
*/
updateForm.put = (args: { module: number | { id: number } } | [module: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Setting\ModuleController::update
* @see app/Http/Controllers/Setting/ModuleController.php:29
* @route '/settings/module/{module}'
*/
updateForm.patch = (args: { module: number | { id: number } } | [module: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Setting\ModuleController::destroy
* @see app/Http/Controllers/Setting/ModuleController.php:36
* @route '/settings/module/{module}'
*/
export const destroy = (args: { module: number | { id: number } } | [module: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/settings/module/{module}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Setting\ModuleController::destroy
* @see app/Http/Controllers/Setting/ModuleController.php:36
* @route '/settings/module/{module}'
*/
destroy.url = (args: { module: number | { id: number } } | [module: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { module: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { module: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            module: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        module: typeof args.module === 'object'
        ? args.module.id
        : args.module,
    }

    return destroy.definition.url
            .replace('{module}', parsedArgs.module.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Setting\ModuleController::destroy
* @see app/Http/Controllers/Setting/ModuleController.php:36
* @route '/settings/module/{module}'
*/
destroy.delete = (args: { module: number | { id: number } } | [module: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Setting\ModuleController::destroy
* @see app/Http/Controllers/Setting/ModuleController.php:36
* @route '/settings/module/{module}'
*/
const destroyForm = (args: { module: number | { id: number } } | [module: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Setting\ModuleController::destroy
* @see app/Http/Controllers/Setting/ModuleController.php:36
* @route '/settings/module/{module}'
*/
destroyForm.delete = (args: { module: number | { id: number } } | [module: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const module = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default module