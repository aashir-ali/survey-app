<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\SurveyController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->group(function(){
    Route::post('/logout', action: [AuthController::class, 'logout']);
    Route::apiResource('surveys',SurveyController::class);
});
Route::post('/sign-up', action: [AuthController::class, 'signup']);
Route::post('/login', action: [AuthController::class, 'login']);
