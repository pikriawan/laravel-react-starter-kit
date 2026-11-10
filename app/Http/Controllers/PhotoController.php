<?php

namespace App\Http\Controllers;

use App\Models\Photo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;
use Symfony\Component\HttpFoundation\StreamedResponse;

class PhotoController extends Controller
{
    public function index(Request $request): Response
    {
        $query = Photo::query()->latest();

        if ($request->user()) {
            $query->where('user_id', $request->user()->id);
        }

        $photos = $query->get()->map(function (Photo $photo) {
            return [
                'id' => $photo->id,
                'name' => $photo->name,
                'path' => $photo->path,
                'mime_type' => $photo->mime_type,
                'size' => $photo->size,
                'url' => route('photos.show', $photo),
                'download_url' => route('photos.download', $photo),
                'created_at' => $photo->created_at?->toDateTimeString(),
            ];
        });

        return Inertia::render('home', [
            'photos' => $photos,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'photo' => ['nullable', 'image', 'max:10240'],
            'file' => ['nullable', 'image', 'max:10240'],
            'image' => ['nullable', 'image', 'max:10240'],
        ]);

        $file = $request->file('photo') ?? $request->file('file') ?? $request->file('image');

        if (! $file) {
            abort(422, 'No photo uploaded.');
        }

        $path = Storage::putFile('photos', $file);

        Photo::create([
            'user_id' => $request->user()?->id,
            'name' => $file->getClientOriginalName(),
            'path' => $path,
            'mime_type' => $file->getMimeType(),
            'size' => $file->getSize(),
        ]);

        return redirect()->route('home');
    }

    public function show(Photo $photo): StreamedResponse
    {
        return Storage::response($photo->path);
    }

    public function update(Request $request, Photo $photo)
    {
        $request->validate([
            'name' => ['nullable', 'string', 'max:255'],
            'title' => ['nullable', 'string', 'max:255'],
            'filename' => ['nullable', 'string', 'max:255'],
            'new_name' => ['nullable', 'string', 'max:255'],
        ]);

        $newName = $request->input('name')
            ?? $request->input('title')
            ?? $request->input('filename')
            ?? $request->input('new_name');

        if (! $newName) {
            abort(422, 'Name is required.');
        }

        $extension = pathinfo($photo->path, PATHINFO_EXTENSION);
        $filename = $newName;

        if ($extension !== '' && ! str_contains($newName, '.')) {
            $filename .= '.'.$extension;
        }

        $newPath = 'photos/'.$filename;

        if ($newPath !== $photo->path) {
            if (Storage::exists($newPath)) {
                $newPath = 'photos/'.Str::uuid().'_'.$filename;
            }

            if (Storage::exists($photo->path)) {
                Storage::move($photo->path, $newPath);
            }

            $photo->path = $newPath;
        }

        $photo->name = $newName;
        $photo->save();

        return redirect()->route('home');
    }

    public function download(Photo $photo): StreamedResponse
    {
        return Storage::download($photo->path, $photo->name);
    }

    public function destroy(Photo $photo)
    {
        if (Storage::exists($photo->path)) {
            Storage::delete($photo->path);
        }

        $photo->delete();

        return redirect()->route('home');
    }
}
