<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome2', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/home', function () {
    return Inertia::render('Welcome2');
})->middleware(['auth', 'verified'])->name('home');

Route::group(['middleware' => ['role:true_admin']], function () {
    Route::resource('/category', 'App\Http\Controllers\CategoryController')->names("category");
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard2');
    })->name('dashboard');
});


require __DIR__.'/auth.php';
