import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\HumanResources\Education\EducationSettingController::index
 * @see app/Http/Controllers/HumanResources/Education/EducationSettingController.php:17
 * @route '/education/setting'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/education/setting',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationSettingController::index
 * @see app/Http/Controllers/HumanResources/Education/EducationSettingController.php:17
 * @route '/education/setting'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationSettingController::index
 * @see app/Http/Controllers/HumanResources/Education/EducationSettingController.php:17
 * @route '/education/setting'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\HumanResources\Education\EducationSettingController::index
 * @see app/Http/Controllers/HumanResources/Education/EducationSettingController.php:17
 * @route '/education/setting'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\HumanResources\Education\EducationSettingController::index
 * @see app/Http/Controllers/HumanResources/Education/EducationSettingController.php:17
 * @route '/education/setting'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\HumanResources\Education\EducationSettingController::index
 * @see app/Http/Controllers/HumanResources/Education/EducationSettingController.php:17
 * @route '/education/setting'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\HumanResources\Education\EducationSettingController::index
 * @see app/Http/Controllers/HumanResources/Education/EducationSettingController.php:17
 * @route '/education/setting'
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
* @see \App\Http\Controllers\HumanResources\Education\EducationSettingController::update
 * @see app/Http/Controllers/HumanResources/Education/EducationSettingController.php:42
 * @route '/education/setting'
 */
export const update = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

update.definition = {
    methods: ["post"],
    url: '/education/setting',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationSettingController::update
 * @see app/Http/Controllers/HumanResources/Education/EducationSettingController.php:42
 * @route '/education/setting'
 */
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationSettingController::update
 * @see app/Http/Controllers/HumanResources/Education/EducationSettingController.php:42
 * @route '/education/setting'
 */
update.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\HumanResources\Education\EducationSettingController::update
 * @see app/Http/Controllers/HumanResources/Education/EducationSettingController.php:42
 * @route '/education/setting'
 */
    const updateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\HumanResources\Education\EducationSettingController::update
 * @see app/Http/Controllers/HumanResources/Education/EducationSettingController.php:42
 * @route '/education/setting'
 */
        updateForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(options),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\HumanResources\Education\EducationSettingController::general
 * @see app/Http/Controllers/HumanResources/Education/EducationSettingController.php:28
 * @route '/education/setting/general'
 */
export const general = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: general.url(options),
    method: 'get',
})

general.definition = {
    methods: ["get","head"],
    url: '/education/setting/general',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationSettingController::general
 * @see app/Http/Controllers/HumanResources/Education/EducationSettingController.php:28
 * @route '/education/setting/general'
 */
general.url = (options?: RouteQueryOptions) => {
    return general.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HumanResources\Education\EducationSettingController::general
 * @see app/Http/Controllers/HumanResources/Education/EducationSettingController.php:28
 * @route '/education/setting/general'
 */
general.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: general.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\HumanResources\Education\EducationSettingController::general
 * @see app/Http/Controllers/HumanResources/Education/EducationSettingController.php:28
 * @route '/education/setting/general'
 */
general.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: general.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\HumanResources\Education\EducationSettingController::general
 * @see app/Http/Controllers/HumanResources/Education/EducationSettingController.php:28
 * @route '/education/setting/general'
 */
    const generalForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: general.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\HumanResources\Education\EducationSettingController::general
 * @see app/Http/Controllers/HumanResources/Education/EducationSettingController.php:28
 * @route '/education/setting/general'
 */
        generalForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: general.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\HumanResources\Education\EducationSettingController::general
 * @see app/Http/Controllers/HumanResources/Education/EducationSettingController.php:28
 * @route '/education/setting/general'
 */
        generalForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: general.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    general.form = generalForm
const EducationSettingController = { index, update, general }

export default EducationSettingController