import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\HumanResources\Employee\TimeOffController::index
* @see app/Http/Controllers/HumanResources/Employee/TimeOffController.php:12
* @route '/employee/{employee}/time-off'
*/
export const index = (args: { employee: string | number | { id: string | number } } | [employee: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/employee/{employee}/time-off',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HumanResources\Employee\TimeOffController::index
* @see app/Http/Controllers/HumanResources/Employee/TimeOffController.php:12
* @route '/employee/{employee}/time-off'
*/
index.url = (args: { employee: string | number | { id: string | number } } | [employee: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { employee: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { employee: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            employee: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        employee: typeof args.employee === 'object'
        ? args.employee.id
        : args.employee,
    }

    return index.definition.url
            .replace('{employee}', parsedArgs.employee.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\Employee\TimeOffController::index
* @see app/Http/Controllers/HumanResources/Employee/TimeOffController.php:12
* @route '/employee/{employee}/time-off'
*/
index.get = (args: { employee: string | number | { id: string | number } } | [employee: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\Employee\TimeOffController::index
* @see app/Http/Controllers/HumanResources/Employee/TimeOffController.php:12
* @route '/employee/{employee}/time-off'
*/
index.head = (args: { employee: string | number | { id: string | number } } | [employee: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\HumanResources\Employee\TimeOffController::index
* @see app/Http/Controllers/HumanResources/Employee/TimeOffController.php:12
* @route '/employee/{employee}/time-off'
*/
const indexForm = (args: { employee: string | number | { id: string | number } } | [employee: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\Employee\TimeOffController::index
* @see app/Http/Controllers/HumanResources/Employee/TimeOffController.php:12
* @route '/employee/{employee}/time-off'
*/
indexForm.get = (args: { employee: string | number | { id: string | number } } | [employee: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\Employee\TimeOffController::index
* @see app/Http/Controllers/HumanResources/Employee/TimeOffController.php:12
* @route '/employee/{employee}/time-off'
*/
indexForm.head = (args: { employee: string | number | { id: string | number } } | [employee: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

const TimeOffController = { index }

export default TimeOffController