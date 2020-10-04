<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/**
 * Handle FCM requests.
 */
Route::group(['prefix' => 'fcm'], function () {
    // Update fcm token.
    Route::post('/store', function (Request $request) {
        $user = App\User::findOrFail($request['userID']);

        if ($user->fcm_token != $request['fcmToken']) {
            $user->fcm_token = $request['fcmToken'];
            $user->save();
        }

        return response()->json([
            'success' => true,
            'data' => [],
        ]);
    })->name('api.fcm.store');
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


/**
 * FCM test endpoint.
 */
Route::post('/notify', 'NotificationController@notify');
