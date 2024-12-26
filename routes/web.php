<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BookmarkController;
use App\Http\Controllers\ControllerMedia;
use App\Http\Controllers\ControllerScedule;
use App\Http\Middleware\EnsurePreviousRouteVisited;

// Login Manual
Route::middleware('guest')->get('login',[AuthController::class,'login'])->name('login');

Route::middleware('guest')->post('login',[AuthController::class,'storelogin']);

// Register
Route::middleware('guest')->get('/register',[AuthController::class ,'createRegister'])->name('register');

Route::post('/register',[AuthController::class,'Register']);

// route login dengan google
Route::get('/auth/redirect',[AuthController::class,'redirect']);

Route::get('/google/redirect',[AuthController::class,'googleredirect']);

//Verifiaksi Acount
Route::middleware(['auth'])->get('/email/verify/{id}/{hash}',[AuthController::class,'verifyact'])->name('verification.verify');

//Route Logout
Route::middleware(['auth'])->post('/logout',[AuthController::class,'logout']);

// Route delete acount

Route::middleware('auth')->post('deleteacount',[AuthController::class,'deleteacount']);


// Reset Password
Route::middleware('guest')->get('/forgot-password', [AuthController::class,'forgotpassword']);

Route::post('/forgot-password',[AuthController::class,'sendLink']);

Route::middleware('guest')->get('/reset-password/{token}', [AuthController::class,'resetact'])->name('password.reset');

Route::post('/reset-password',[AuthController::class,'updatepassword']);








Route::get('/',[ControllerMedia::class,'index'])->name('leanding');

Route::middleware(EnsurePreviousRouteVisited::class)->get('/media/{slug}',[ControllerMedia::class,'showcategory']);

// route untuk menampilkn data dari Api langsung 
Route::middleware(EnsurePreviousRouteVisited::class)->get('/media/{media}/category/{category}',[ControllerMedia::class,'showsandstore'])->name('posts.index');

// route untuk melakukan query kdalam databse
Route::middleware(EnsurePreviousRouteVisited::class)->get('/search',[ControllerMedia::class,'search']);






// Route untuk menyimpan Bookmark

Route::middleware(['auth'])->post('/bookmark/store',[BookmarkController::class,'store']);

// Route untuk menghapus Bookmark

Route::middleware(['auth'])->delete('/bookmark/destroy',[BookmarkController::class,'destroy']);

// route untuk menampilkan bookmark

Route::middleware(['auth'])->get('/mybookmark',[BookmarkController::class,'index']);

// route untuk mencari bookmark tersimpan

Route::middleware(['auth'])->get('/searchbookmark',[BookmarkController::class,'searchbookmarks']);