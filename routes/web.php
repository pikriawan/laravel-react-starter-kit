<?php

use App\Http\Controllers\PhotoController;
use Illuminate\Support\Facades\Route;

Route::get('/', [PhotoController::class, 'index'])->name('home');
Route::post('/photos', [PhotoController::class, 'store'])->name('photos.store');
Route::get('/photos/{photo}', [PhotoController::class, 'show'])->name('photos.show');
Route::patch('/photos/{photo}', [PhotoController::class, 'update'])->name('photos.update');
Route::put('/photos/{photo}', [PhotoController::class, 'update'])->name('photos.update.put');
Route::get('/photos/{photo}/download', [PhotoController::class, 'download'])->name('photos.download');
Route::delete('/photos/{photo}', [PhotoController::class, 'destroy'])->name('photos.destroy');

// Aliases for common naming conventions
Route::post('/upload', [PhotoController::class, 'store'])->name('upload');
Route::patch('/photos/{photo}/rename', [PhotoController::class, 'update'])->name('photos.rename');
Route::get('/download/{photo}', [PhotoController::class, 'download'])->name('download');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';
