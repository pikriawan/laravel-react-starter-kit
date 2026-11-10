import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\PhotoController::index
* @see app/Http/Controllers/PhotoController.php:15
* @route '/'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PhotoController::index
* @see app/Http/Controllers/PhotoController.php:15
* @route '/'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PhotoController::index
* @see app/Http/Controllers/PhotoController.php:15
* @route '/'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhotoController::index
* @see app/Http/Controllers/PhotoController.php:15
* @route '/'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PhotoController::index
* @see app/Http/Controllers/PhotoController.php:15
* @route '/'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhotoController::index
* @see app/Http/Controllers/PhotoController.php:15
* @route '/'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhotoController::index
* @see app/Http/Controllers/PhotoController.php:15
* @route '/'
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
* @see \App\Http\Controllers\PhotoController::store
* @see app/Http/Controllers/PhotoController.php:41
* @route '/photos'
*/
const store405da414799810a5d7e338e6abb1db28 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store405da414799810a5d7e338e6abb1db28.url(options),
    method: 'post',
})

store405da414799810a5d7e338e6abb1db28.definition = {
    methods: ["post"],
    url: '/photos',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PhotoController::store
* @see app/Http/Controllers/PhotoController.php:41
* @route '/photos'
*/
store405da414799810a5d7e338e6abb1db28.url = (options?: RouteQueryOptions) => {
    return store405da414799810a5d7e338e6abb1db28.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PhotoController::store
* @see app/Http/Controllers/PhotoController.php:41
* @route '/photos'
*/
store405da414799810a5d7e338e6abb1db28.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store405da414799810a5d7e338e6abb1db28.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PhotoController::store
* @see app/Http/Controllers/PhotoController.php:41
* @route '/photos'
*/
const store405da414799810a5d7e338e6abb1db28Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store405da414799810a5d7e338e6abb1db28.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PhotoController::store
* @see app/Http/Controllers/PhotoController.php:41
* @route '/photos'
*/
store405da414799810a5d7e338e6abb1db28Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store405da414799810a5d7e338e6abb1db28.url(options),
    method: 'post',
})

store405da414799810a5d7e338e6abb1db28.form = store405da414799810a5d7e338e6abb1db28Form
/**
* @see \App\Http\Controllers\PhotoController::store
* @see app/Http/Controllers/PhotoController.php:41
* @route '/upload'
*/
const storecd339d68f6d269a98d50183b52aef480 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storecd339d68f6d269a98d50183b52aef480.url(options),
    method: 'post',
})

storecd339d68f6d269a98d50183b52aef480.definition = {
    methods: ["post"],
    url: '/upload',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PhotoController::store
* @see app/Http/Controllers/PhotoController.php:41
* @route '/upload'
*/
storecd339d68f6d269a98d50183b52aef480.url = (options?: RouteQueryOptions) => {
    return storecd339d68f6d269a98d50183b52aef480.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PhotoController::store
* @see app/Http/Controllers/PhotoController.php:41
* @route '/upload'
*/
storecd339d68f6d269a98d50183b52aef480.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storecd339d68f6d269a98d50183b52aef480.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PhotoController::store
* @see app/Http/Controllers/PhotoController.php:41
* @route '/upload'
*/
const storecd339d68f6d269a98d50183b52aef480Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storecd339d68f6d269a98d50183b52aef480.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PhotoController::store
* @see app/Http/Controllers/PhotoController.php:41
* @route '/upload'
*/
storecd339d68f6d269a98d50183b52aef480Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storecd339d68f6d269a98d50183b52aef480.url(options),
    method: 'post',
})

storecd339d68f6d269a98d50183b52aef480.form = storecd339d68f6d269a98d50183b52aef480Form

/**
* Multiple routes resolve to \App\Http\Controllers\PhotoController::store, so this export is a
* dictionary keyed by URI rather than a callable, with the verbs prefixed where two routes share a URI.
* Call a specific route with `store['<key>'](...)`, or import the route by name from your
* generated `routes/` directory.
*/
export const store = {
    '/photos': store405da414799810a5d7e338e6abb1db28,
    '/upload': storecd339d68f6d269a98d50183b52aef480,
}

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
const update1af908a771261836501bfce2d8a16e35 = (args: { photo: string | number | { id: string | number } } | [photo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update1af908a771261836501bfce2d8a16e35.url(args, options),
    method: 'patch',
})

update1af908a771261836501bfce2d8a16e35.definition = {
    methods: ["patch"],
    url: '/photos/{photo}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\PhotoController::update
* @see app/Http/Controllers/PhotoController.php:73
* @route '/photos/{photo}'
*/
update1af908a771261836501bfce2d8a16e35.url = (args: { photo: string | number | { id: string | number } } | [photo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return update1af908a771261836501bfce2d8a16e35.definition.url
            .replace('{photo}', parsedArgs.photo.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PhotoController::update
* @see app/Http/Controllers/PhotoController.php:73
* @route '/photos/{photo}'
*/
update1af908a771261836501bfce2d8a16e35.patch = (args: { photo: string | number | { id: string | number } } | [photo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update1af908a771261836501bfce2d8a16e35.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\PhotoController::update
* @see app/Http/Controllers/PhotoController.php:73
* @route '/photos/{photo}'
*/
const update1af908a771261836501bfce2d8a16e35Form = (args: { photo: string | number | { id: string | number } } | [photo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update1af908a771261836501bfce2d8a16e35.url(args, {
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
update1af908a771261836501bfce2d8a16e35Form.patch = (args: { photo: string | number | { id: string | number } } | [photo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update1af908a771261836501bfce2d8a16e35.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update1af908a771261836501bfce2d8a16e35.form = update1af908a771261836501bfce2d8a16e35Form
/**
* @see \App\Http\Controllers\PhotoController::update
* @see app/Http/Controllers/PhotoController.php:73
* @route '/photos/{photo}'
*/
const update541f29af145abd9d070fafdb992575bd = (args: { photo: string | number | { id: string | number } } | [photo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update541f29af145abd9d070fafdb992575bd.url(args, options),
    method: 'put',
})

update541f29af145abd9d070fafdb992575bd.definition = {
    methods: ["put"],
    url: '/photos/{photo}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\PhotoController::update
* @see app/Http/Controllers/PhotoController.php:73
* @route '/photos/{photo}'
*/
update541f29af145abd9d070fafdb992575bd.url = (args: { photo: string | number | { id: string | number } } | [photo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return update541f29af145abd9d070fafdb992575bd.definition.url
            .replace('{photo}', parsedArgs.photo.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PhotoController::update
* @see app/Http/Controllers/PhotoController.php:73
* @route '/photos/{photo}'
*/
update541f29af145abd9d070fafdb992575bd.put = (args: { photo: string | number | { id: string | number } } | [photo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update541f29af145abd9d070fafdb992575bd.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\PhotoController::update
* @see app/Http/Controllers/PhotoController.php:73
* @route '/photos/{photo}'
*/
const update541f29af145abd9d070fafdb992575bdForm = (args: { photo: string | number | { id: string | number } } | [photo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update541f29af145abd9d070fafdb992575bd.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
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
update541f29af145abd9d070fafdb992575bdForm.put = (args: { photo: string | number | { id: string | number } } | [photo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update541f29af145abd9d070fafdb992575bd.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update541f29af145abd9d070fafdb992575bd.form = update541f29af145abd9d070fafdb992575bdForm
/**
* @see \App\Http\Controllers\PhotoController::update
* @see app/Http/Controllers/PhotoController.php:73
* @route '/photos/{photo}/rename'
*/
const updatef083d17a4058253885576fe858a63749 = (args: { photo: string | number | { id: string | number } } | [photo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updatef083d17a4058253885576fe858a63749.url(args, options),
    method: 'patch',
})

updatef083d17a4058253885576fe858a63749.definition = {
    methods: ["patch"],
    url: '/photos/{photo}/rename',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\PhotoController::update
* @see app/Http/Controllers/PhotoController.php:73
* @route '/photos/{photo}/rename'
*/
updatef083d17a4058253885576fe858a63749.url = (args: { photo: string | number | { id: string | number } } | [photo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return updatef083d17a4058253885576fe858a63749.definition.url
            .replace('{photo}', parsedArgs.photo.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PhotoController::update
* @see app/Http/Controllers/PhotoController.php:73
* @route '/photos/{photo}/rename'
*/
updatef083d17a4058253885576fe858a63749.patch = (args: { photo: string | number | { id: string | number } } | [photo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updatef083d17a4058253885576fe858a63749.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\PhotoController::update
* @see app/Http/Controllers/PhotoController.php:73
* @route '/photos/{photo}/rename'
*/
const updatef083d17a4058253885576fe858a63749Form = (args: { photo: string | number | { id: string | number } } | [photo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updatef083d17a4058253885576fe858a63749.url(args, {
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
* @route '/photos/{photo}/rename'
*/
updatef083d17a4058253885576fe858a63749Form.patch = (args: { photo: string | number | { id: string | number } } | [photo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updatef083d17a4058253885576fe858a63749.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updatef083d17a4058253885576fe858a63749.form = updatef083d17a4058253885576fe858a63749Form

/**
* Multiple routes resolve to \App\Http\Controllers\PhotoController::update, so this export is a
* dictionary keyed by URI rather than a callable, with the verbs prefixed where two routes share a URI.
* Call a specific route with `update['<key>'](...)`, or import the route by name from your
* generated `routes/` directory.
*/
export const update = {
    'patch /photos/{photo}': update1af908a771261836501bfce2d8a16e35,
    'put /photos/{photo}': update541f29af145abd9d070fafdb992575bd,
    '/photos/{photo}/rename': updatef083d17a4058253885576fe858a63749,
}

/**
* @see \App\Http\Controllers\PhotoController::download
* @see app/Http/Controllers/PhotoController.php:118
* @route '/photos/{photo}/download'
*/
const downloadd9ea5dc9f5a23932ba625769045b4978 = (args: { photo: string | number | { id: string | number } } | [photo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: downloadd9ea5dc9f5a23932ba625769045b4978.url(args, options),
    method: 'get',
})

downloadd9ea5dc9f5a23932ba625769045b4978.definition = {
    methods: ["get","head"],
    url: '/photos/{photo}/download',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PhotoController::download
* @see app/Http/Controllers/PhotoController.php:118
* @route '/photos/{photo}/download'
*/
downloadd9ea5dc9f5a23932ba625769045b4978.url = (args: { photo: string | number | { id: string | number } } | [photo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return downloadd9ea5dc9f5a23932ba625769045b4978.definition.url
            .replace('{photo}', parsedArgs.photo.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PhotoController::download
* @see app/Http/Controllers/PhotoController.php:118
* @route '/photos/{photo}/download'
*/
downloadd9ea5dc9f5a23932ba625769045b4978.get = (args: { photo: string | number | { id: string | number } } | [photo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: downloadd9ea5dc9f5a23932ba625769045b4978.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhotoController::download
* @see app/Http/Controllers/PhotoController.php:118
* @route '/photos/{photo}/download'
*/
downloadd9ea5dc9f5a23932ba625769045b4978.head = (args: { photo: string | number | { id: string | number } } | [photo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: downloadd9ea5dc9f5a23932ba625769045b4978.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PhotoController::download
* @see app/Http/Controllers/PhotoController.php:118
* @route '/photos/{photo}/download'
*/
const downloadd9ea5dc9f5a23932ba625769045b4978Form = (args: { photo: string | number | { id: string | number } } | [photo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: downloadd9ea5dc9f5a23932ba625769045b4978.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhotoController::download
* @see app/Http/Controllers/PhotoController.php:118
* @route '/photos/{photo}/download'
*/
downloadd9ea5dc9f5a23932ba625769045b4978Form.get = (args: { photo: string | number | { id: string | number } } | [photo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: downloadd9ea5dc9f5a23932ba625769045b4978.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhotoController::download
* @see app/Http/Controllers/PhotoController.php:118
* @route '/photos/{photo}/download'
*/
downloadd9ea5dc9f5a23932ba625769045b4978Form.head = (args: { photo: string | number | { id: string | number } } | [photo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: downloadd9ea5dc9f5a23932ba625769045b4978.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

downloadd9ea5dc9f5a23932ba625769045b4978.form = downloadd9ea5dc9f5a23932ba625769045b4978Form
/**
* @see \App\Http\Controllers\PhotoController::download
* @see app/Http/Controllers/PhotoController.php:118
* @route '/download/{photo}'
*/
const downloadd8dec9e0ff33a39742fb6a3c17dd3d4d = (args: { photo: string | number | { id: string | number } } | [photo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: downloadd8dec9e0ff33a39742fb6a3c17dd3d4d.url(args, options),
    method: 'get',
})

downloadd8dec9e0ff33a39742fb6a3c17dd3d4d.definition = {
    methods: ["get","head"],
    url: '/download/{photo}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PhotoController::download
* @see app/Http/Controllers/PhotoController.php:118
* @route '/download/{photo}'
*/
downloadd8dec9e0ff33a39742fb6a3c17dd3d4d.url = (args: { photo: string | number | { id: string | number } } | [photo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return downloadd8dec9e0ff33a39742fb6a3c17dd3d4d.definition.url
            .replace('{photo}', parsedArgs.photo.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PhotoController::download
* @see app/Http/Controllers/PhotoController.php:118
* @route '/download/{photo}'
*/
downloadd8dec9e0ff33a39742fb6a3c17dd3d4d.get = (args: { photo: string | number | { id: string | number } } | [photo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: downloadd8dec9e0ff33a39742fb6a3c17dd3d4d.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhotoController::download
* @see app/Http/Controllers/PhotoController.php:118
* @route '/download/{photo}'
*/
downloadd8dec9e0ff33a39742fb6a3c17dd3d4d.head = (args: { photo: string | number | { id: string | number } } | [photo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: downloadd8dec9e0ff33a39742fb6a3c17dd3d4d.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PhotoController::download
* @see app/Http/Controllers/PhotoController.php:118
* @route '/download/{photo}'
*/
const downloadd8dec9e0ff33a39742fb6a3c17dd3d4dForm = (args: { photo: string | number | { id: string | number } } | [photo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: downloadd8dec9e0ff33a39742fb6a3c17dd3d4d.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhotoController::download
* @see app/Http/Controllers/PhotoController.php:118
* @route '/download/{photo}'
*/
downloadd8dec9e0ff33a39742fb6a3c17dd3d4dForm.get = (args: { photo: string | number | { id: string | number } } | [photo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: downloadd8dec9e0ff33a39742fb6a3c17dd3d4d.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhotoController::download
* @see app/Http/Controllers/PhotoController.php:118
* @route '/download/{photo}'
*/
downloadd8dec9e0ff33a39742fb6a3c17dd3d4dForm.head = (args: { photo: string | number | { id: string | number } } | [photo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: downloadd8dec9e0ff33a39742fb6a3c17dd3d4d.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

downloadd8dec9e0ff33a39742fb6a3c17dd3d4d.form = downloadd8dec9e0ff33a39742fb6a3c17dd3d4dForm

/**
* Multiple routes resolve to \App\Http\Controllers\PhotoController::download, so this export is a
* dictionary keyed by URI rather than a callable, with the verbs prefixed where two routes share a URI.
* Call a specific route with `download['<key>'](...)`, or import the route by name from your
* generated `routes/` directory.
*/
export const download = {
    '/photos/{photo}/download': downloadd9ea5dc9f5a23932ba625769045b4978,
    '/download/{photo}': downloadd8dec9e0ff33a39742fb6a3c17dd3d4d,
}

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

const PhotoController = { index, store, show, update, download, destroy }

export default PhotoController