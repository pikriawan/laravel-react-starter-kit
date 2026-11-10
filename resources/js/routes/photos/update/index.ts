import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\PhotoController::put
* @see app/Http/Controllers/PhotoController.php:73
* @route '/photos/{photo}'
*/
export const put = (args: { photo: string | number | { id: string | number } } | [photo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: put.url(args, options),
    method: 'put',
})

put.definition = {
    methods: ["put"],
    url: '/photos/{photo}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\PhotoController::put
* @see app/Http/Controllers/PhotoController.php:73
* @route '/photos/{photo}'
*/
put.url = (args: { photo: string | number | { id: string | number } } | [photo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { photo: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { photo: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            photo: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        photo: typeof args.photo === 'object'
        ? args.photo.id
        : args.photo,
    }

    return put.definition.url
            .replace('{photo}', parsedArgs.photo.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PhotoController::put
* @see app/Http/Controllers/PhotoController.php:73
* @route '/photos/{photo}'
*/
put.put = (args: { photo: string | number | { id: string | number } } | [photo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: put.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\PhotoController::put
* @see app/Http/Controllers/PhotoController.php:73
* @route '/photos/{photo}'
*/
const putForm = (args: { photo: string | number | { id: string | number } } | [photo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: put.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PhotoController::put
* @see app/Http/Controllers/PhotoController.php:73
* @route '/photos/{photo}'
*/
putForm.put = (args: { photo: string | number | { id: string | number } } | [photo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: put.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

put.form = putForm

const update = {
    put: Object.assign(put, put),
}

export default update