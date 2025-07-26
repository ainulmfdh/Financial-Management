<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\IncomeController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

// routes/api.php
// Route::middleware('auth:sanctum')->group(function () {
//     Route::get('/dashboard', [DashboardController::class, 'index']);
    
//     Route::apiResource('incomes', IncomeController::class);
//     Route::apiResource('expenses', ExpenseController::class);
//     Route::apiResource('employees', EmployeeController::class);
//     Route::apiResource('debts', DebtController::class);
    
//     // Download routes
//     Route::get('/reports/pdf', [ReportController::class, 'downloadPdf']);
//     Route::get('/reports/excel', [ReportController::class, 'downloadExcel']);
// });


// INCOMES
// Route::middleware('auth:sanctum')->group(function () {
//     Route::get('/Incomes/Pendapatan', [IncomeController::class, 'index']);
//     Route::post('/incomes', [IncomeController::class, 'store']);
//     Route::get('/incomes/{id}', [IncomeController::class, 'show']);
//     Route::put('/incomes/{id}', [IncomeController::class, 'update']);
//     Route::delete('/incomes/{id}', [IncomeController::class, 'destroy']);
// });