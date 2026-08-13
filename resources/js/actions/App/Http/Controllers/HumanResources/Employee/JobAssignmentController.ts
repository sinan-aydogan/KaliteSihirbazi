import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\HumanResources\Employee\JobAssignmentController::index
* @see app/Http/Controllers/HumanResources/Employee/JobAssignmentController.php:14
* @route '/employee/{employee}/jd-assignment'
*/
export const index = (args: { employee: string | number | { id: string | number } } | [employee: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/employee/{employee}/jd-assignment',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HumanResources\Employee\JobAssignmentController::index
* @see app/Http/Controllers/HumanResources/Employee/JobAssignmentController.php:14
* @route '/employee/{employee}/jd-assignment'
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
* @see \App\Http\Controllers\HumanResources\Employee\JobAssignmentController::index
* @see app/Http/Controllers/HumanResources/Employee/JobAssignmentController.php:14
* @route '/employee/{employee}/jd-assignment'
*/
index.get = (args: { employee: string | number | { id: string | number } } | [employee: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\Employee\JobAssignmentController::index
* @see app/Http/Controllers/HumanResources/Employee/JobAssignmentController.php:14
* @route '/employee/{employee}/jd-assignment'
*/
index.head = (args: { employee: string | number | { id: string | number } } | [employee: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\HumanResources\Employee\JobAssignmentController::index
* @see app/Http/Controllers/HumanResources/Employee/JobAssignmentController.php:14
* @route '/employee/{employee}/jd-assignment'
*/
const indexForm = (args: { employee: string | number | { id: string | number } } | [employee: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\Employee\JobAssignmentController::index
* @see app/Http/Controllers/HumanResources/Employee/JobAssignmentController.php:14
* @route '/employee/{employee}/jd-assignment'
*/
indexForm.get = (args: { employee: string | number | { id: string | number } } | [employee: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HumanResources\Employee\JobAssignmentController::index
* @see app/Http/Controllers/HumanResources/Employee/JobAssignmentController.php:14
* @route '/employee/{employee}/jd-assignment'
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

const JobAssignmentController = { index }

export default JobAssignmentController