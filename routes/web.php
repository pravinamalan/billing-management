<?php

use App\Http\Controllers\EmployeeController;
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

Route::get('/', function () {
    return view('auth.login');
});

Route::group(['prefix' => 'employee'], function () {
    Route::get('fields', [EmployeeController::class, 'create'])->named('employee.fields');
    Route::get('list', [EmployeeController::class, 'index'])->named('employee.list');
    Route::post('save', [EmployeeController::class, 'store'])->named('employee.save');
    Route::get('{id}', [EmployeeController::class, 'show'])->named('employee.show');
});


Route::group(['prefix' => 'order'], function () {
    Route::get('fields', [OrderController::class, 'create'])->named('order.fields');
    Route::get('list', [OrderController::class, 'index'])->named('order.lists');
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
