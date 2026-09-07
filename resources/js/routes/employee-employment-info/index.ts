import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\HumanResources\Employee\EmploymentInfo::index
 * @see app/Http/Controllers/HumanResources/Employee/EmploymentInfo.php:13
 * @route '/employee/{employee}/employment-info'
 */
export const index = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/employee/{employee}/employment-info',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HumanResources\Employee\EmploymentInfo::index
 * @see app/Http/Controllers/HumanResources/Employee/EmploymentInfo.php:13
 * @route '/employee/{employee}/employment-info'
 */
index.url = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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
* @see \App\Http\Controllers\HumanResources\Employee\EmploymentInfo::index
 * @see app/Http/Controllers/HumanResources/Employee/EmploymentInfo.php:13
 * @route '/employee/{employee}/employment-info'
 */
index.get = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\HumanResources\Employee\EmploymentInfo::index
 * @see app/Http/Controllers/HumanResources/Employee/EmploymentInfo.php:13
 * @route '/employee/{employee}/employment-info'
 */
index.head = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\HumanResources\Employee\EmploymentInfo::index
 * @see app/Http/Controllers/HumanResources/Employee/EmploymentInfo.php:13
 * @route '/employee/{employee}/employment-info'
 */
    const indexForm = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\HumanResources\Employee\EmploymentInfo::index
 * @see app/Http/Controllers/HumanResources/Employee/EmploymentInfo.php:13
 * @route '/employee/{employee}/employment-info'
 */
        indexForm.get = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\HumanResources\Employee\EmploymentInfo::index
 * @see app/Http/Controllers/HumanResources/Employee/EmploymentInfo.php:13
 * @route '/employee/{employee}/employment-info'
 */
        indexForm.head = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
const employeeEmploymentInfo = {
    index: Object.assign(index, index),
}

export default employeeEmploymentInfo