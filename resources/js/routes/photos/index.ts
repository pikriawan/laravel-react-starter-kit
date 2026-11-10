import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
import update603324 from './update'
/**
* @see \App\Http\Controllers\PhotoController::store
* @see app/Http/Controllers/PhotoController.php:41
* @route '/photos'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/photos',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PhotoController::store
* @see app/Http/Controllers/PhotoController.php:41
* @route '/photos'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PhotoController::store
* @see app/Http/Controllers/PhotoController.php:41
* @route '/photos'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PhotoController::store
* @see app/Http/Controllers/PhotoController.php:41
* @route '/photos'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PhotoController::store
* @see app/Http/Controllers/PhotoController.php:41
* @route '/photos'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\PhotoController::show
* @see app/Http/Controllers/PhotoController.php:68
* @route '/photos/{photo}'
*/
export const show = (args: { photo: string | number | { id: string | number } } | [photo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/photos/{photo}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PhotoController::show
* @see app/Http/Controllers/PhotoController.php:68
* @route '/photos/{photo}'
*/
show.url = (args: { photo: string | number | { id: string | number } } | [photo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{photo}', parsedArgs.photo.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PhotoController::show
* @see app/Http/Controllers/PhotoController.php:68
* @route '/photos/{photo}'
*/
show.get = (args: { photo: string | number | { id: string | number } } | [photo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhotoController::show
* @see app/Http/Controllers/PhotoController.php:68
* @route '/photos/{photo}'
*/
show.head = (args: { photo: string | number | { id: string | number } } | [photo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PhotoController::show
* @see app/Http/Controllers/PhotoController.php:68
* @route '/photos/{photo}'
*/
const showForm = (args: { photo: string | number | { id: string | number } } | [photo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhotoController::show
* @see app/Http/Controllers/PhotoController.php:68
* @route '/photos/{photo}'
*/
showForm.get = (args: { photo: string | number | { id: string | number } } | [photo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhotoController::show
* @see app/Http/Controllers/PhotoController.php:68
* @route '/photos/{photo}'
*/
showForm.head = (args: { photo: string | number | { id: string | number } } | [photo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\PhotoController::update
* @see app/Http/Controllers/PhotoController.php:73
* @route '/photos/{photo}'
*/
export const update = (args: { photo: string | number | { id: string | number } } | [photo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/photos/{photo}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\PhotoController::update
* @see app/Http/Controllers/PhotoController.php:73
* @route '/photos/{photo}'
*/
update.url = (args: { photo: string | number | { id: string | number } } | [photo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{photo}', parsedArgs.photo.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PhotoController::update
* @see app/Http/Controllers/PhotoController.php:73
* @route '/photos/{photo}'
*/
update.patch = (args: { photo: string | number | { id: string | number } } | [photo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\PhotoController::update
* @see app/Http/Controllers/PhotoController.php:73
* @route '/photos/{photo}'
*/
const updateForm = (args: { photo: string | number | { id: string | number } } | [photo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PhotoController::update
* @see app/Http/Controllers/PhotoController.php:73
* @route '/photos/{photo}'
*/
updateForm.patch = (args: { photo: string | number | { id: string | number } } | [photo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\PhotoController::download
* @see app/Http/Controllers/PhotoController.php:118
* @route '/photos/{photo}/download'
*/
export const download = (args: { photo: string | number | { id: string | number } } | [photo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: download.url(args, options),
    method: 'get',
})

download.definition = {
    methods: ["get","head"],
    url: '/photos/{photo}/download',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PhotoController::download
* @see app/Http/Controllers/PhotoController.php:118
* @route '/photos/{photo}/download'
*/
download.url = (args: { photo: string | number | { id: string | number } } | [photo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return download.definition.url
            .replace('{photo}', parsedArgs.photo.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PhotoController::download
* @see app/Http/Controllers/PhotoController.php:118
* @route '/photos/{photo}/download'
*/
download.get = (args: { photo: string | number | { id: string | number } } | [photo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: download.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhotoController::download
* @see app/Http/Controllers/PhotoController.php:118
* @route '/photos/{photo}/download'
*/
download.head = (args: { photo: string | number | { id: string | number } } | [photo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: download.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PhotoController::download
* @see app/Http/Controllers/PhotoController.php:118
* @route '/photos/{photo}/download'
*/
const downloadForm = (args: { photo: string | number | { id: string | number } } | [photo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: download.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhotoController::download
* @see app/Http/Controllers/PhotoController.php:118
* @route '/photos/{photo}/download'
*/
downloadForm.get = (args: { photo: string | number | { id: string | number } } | [photo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: download.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhotoController::download
* @see app/Http/Controllers/PhotoController.php:118
* @route '/photos/{photo}/download'
*/
downloadForm.head = (args: { photo: string | number | { id: string | number } } | [photo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: download.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

download.form = downloadForm

/**
* @see \App\Http\Controllers\PhotoController::destroy
* @see app/Http/Controllers/PhotoController.php:123
* @route '/photos/{photo}'
*/
export const destroy = (args: { photo: string | number | { id: string | number } } | [photo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/photos/{photo}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\PhotoController::destroy
* @see app/Http/Controllers/PhotoController.php:123
* @route '/photos/{photo}'
*/
destroy.url = (args: { photo: string | number | { id: string | number } } | [photo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{photo}', parsedArgs.photo.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PhotoController::destroy
* @see app/Http/Controllers/PhotoController.php:123
* @route '/photos/{photo}'
*/
destroy.delete = (args: { photo: string | number | { id: string | number } } | [photo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\PhotoController::destroy
* @see app/Http/Controllers/PhotoController.php:123
* @route '/photos/{photo}'
*/
const destroyForm = (args: { photo: string | number | { id: string | number } } | [photo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PhotoController::destroy
* @see app/Http/Controllers/PhotoController.php:123
* @route '/photos/{photo}'
*/
destroyForm.delete = (args: { photo: string | number | { id: string | number } } | [photo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

/**
* @see \App\Http\Controllers\PhotoController::rename
* @see app/Http/Controllers/PhotoController.php:73
* @route '/photos/{photo}/rename'
*/
export const rename = (args: { photo: string | number | { id: string | number } } | [photo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: rename.url(args, options),
    method: 'patch',
})

rename.definition = {
    methods: ["patch"],
    url: '/photos/{photo}/rename',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\PhotoController::rename
* @see app/Http/Controllers/PhotoController.php:73
* @route '/photos/{photo}/rename'
*/
rename.url = (args: { photo: string | number | { id: string | number } } | [photo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return rename.definition.url
            .replace('{photo}', parsedArgs.photo.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PhotoController::rename
* @see app/Http/Controllers/PhotoController.php:73
* @route '/photos/{photo}/rename'
*/
rename.patch = (args: { photo: string | number | { id: string | number } } | [photo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: rename.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\PhotoController::rename
* @see app/Http/Controllers/PhotoController.php:73
* @route '/photos/{photo}/rename'
*/
const renameForm = (args: { photo: string | number | { id: string | number } } | [photo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: rename.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PhotoController::rename
* @see app/Http/Controllers/PhotoController.php:73
* @route '/photos/{photo}/rename'
*/
renameForm.patch = (args: { photo: string | number | { id: string | number } } | [photo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: rename.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

rename.form = renameForm

const photos = {
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    update: Object.assign(update, update603324),
    download: Object.assign(download, download),
    destroy: Object.assign(destroy, destroy),
    rename: Object.assign(rename, rename),
}

export default photos