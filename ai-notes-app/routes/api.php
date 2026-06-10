<?php
use App\Http\Controllers\Api\NoteController;
use App\Http\Controllers\Api\SearchController;
use App\Http\Controllers\Api\SummaryController;

Route::apiResource('notes', NoteController::class);

Route::get(
    '/notes-search',
    [SearchController::class, 'search']
);

Route::post(
    '/notes/{note}/summary',
    [SummaryController::class, 'generate']
);