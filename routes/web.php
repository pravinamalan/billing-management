<?php

use App\Http\Controllers\Auth\AuthenticateController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\Homecontroller;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\QuotationController;
use App\Http\Controllers\SettingsController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

//* Add controller properly
Route::get('login', function () {
    return view('auth.login');
})->middleware('guest')->name('login');

Route::post('authenticate', [AuthenticateController::class, 'authenticate'])->name('authenticate');
Route::get('/forgot-password', [AuthenticateController::class, 'forgotPassword'])->name('forgot.password.get');
Route::post('/forget-password', [AuthenticateController::class, 'submitForgotPasswordForm'])->name('forgot.password.post');
Route::get('/reset-password', [AuthenticateController::class, 'resetPassword'])->name('reset.password');
Route::post('/reset-password', [AuthenticateController::class, 'updatePassword'])->name('update.password');



Route::group(['middleware' => 'auth'], function () {

    Route::get('logout', [AuthenticateController::class, 'logout'])->name('logout');

    Route::get('/home', [Homecontroller::class, 'index'])->name('home');


    Route::group(['prefix' => 'employee'], function () {
        Route::get('fields', [EmployeeController::class, 'create'])->name('employee.fields');
        Route::get('list', [EmployeeController::class, 'index'])->name('employee.list');
        Route::post('save', [EmployeeController::class, 'store'])->name('employee.save');
        Route::get('{id}', [EmployeeController::class, 'show'])->name('employee.show');
    });


    Route::group(['prefix' => 'order'], function () {
        Route::get('fields', [OrderController::class, 'create'])->name('order.fields');
        Route::get('list', [OrderController::class, 'index'])->name('order.lists');
    });

    Route::get('/quotation/fields', [QuotationController::class, 'getQuotationFields']);
    Route::get('/quotations/create', [QuotationController::class, 'create'])->name('quotations.create');
    Route::post('/quotation/save', [QuotationController::class, 'store']);
    Route::get('/quotations/list', [QuotationController::class, 'show'])->name('quotations.show');
    Route::get('/quotations/{id}/pdf', [QuotationController::class, 'downloadPdf'])->name('quotations.pdf');

    // Settings
    Route::get('/settings', [SettingsController::class, 'index']);
    Route::get('/users/list', [SettingsController::class, 'getUsers']);
    Route::get('/users/fields', [SettingsController::class, 'getFields']);
});

Route::get('/', function () {
    return redirect()->route('login');
});
