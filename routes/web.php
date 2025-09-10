<?php

use App\Http\Controllers\OrderController;
use App\Http\Controllers\QuotationController;
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
    return view('pages.main');
});

Route::get('/order/fields', [OrderController::class, 'index']);
Route::get('/employee/fields', [OrderController::class, 'getEmployeeFields']);
Route::get('/employee/list', [OrderController::class, 'getEmployee']);
Route::get('/order/list', [OrderController::class, 'getOrder']);
Route::get('/quotation/fields', [QuotationController::class, 'getQuotationFields']);
Route::get('/quotations/create', [QuotationController::class, 'create'])->name('quotations.create');
Route::post('/quotation/save', [QuotationController::class, 'store']);
Route::get('/quotations/list', [QuotationController::class, 'show'])->name('quotations.show');
Route::get('/quotations/{id}/pdf', [QuotationController::class, 'downloadPdf'])->name('quotations.pdf');
