<?php

use Illuminate\Http\Request;

Route::get('videos', 'VideoController@index');
Route::get('videos/{id}', 'VideoController@show');
Route::post('videos', 'VideoController@store');
Route::put('videos/{id}', 'VideoController@update');
Route::delete('videos/{id}', 'VideoController@delete');
Route::get('img/{id}', 'VideoController@showImage');
