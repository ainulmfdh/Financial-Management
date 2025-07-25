<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\DefaultController;
use App\Http\Controllers\Api\IncomeController;

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
    return Inertia::render('Auth/Login', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('loginTest'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });



Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// INCOMES
Route::get('/pendapatan/tambah', function () {
    return Inertia::render('Incomes/CreateIncome');
});


Route::get('/default', [DefaultController::class, 'index']);
Route::get('/logintest', [DefaultController::class, 'logintest']);
Route::get('/registertest', [DefaultController::class, 'registertest']);
Route::get('/test', [DefaultController::class, 'test']);

// fallback route untuk semua halaman React/Inertia
Route::get('/{any}', function () {
    return Inertia::render('Dashboard');
})->where('any', '.*')->middleware(['auth']);

require __DIR__.'/auth.php';
