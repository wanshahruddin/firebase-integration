<?php

use Illuminate\Support\Facades\Route;

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
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/send-push/{token}', function ($token) {


    $serverKey = 'AAAAIURFmqg:APA91bG7J5_gOiM0HfRLDK4pYj5sDxrQGoPOkwBQ8S2TSG1NDOn_4BUe6UtTcyPouSbdNsGGCxcL0OlPBeU9FBbY6IQ3Xn92OFdZwpTH66pQQYmmZ5GQ3SSRAiNJci624iwRgBUXBkWZ';

    $headers = array(
        'Authorization: key=' . $serverKey,
        'Content-Type: application/json',
    );

    $message = array(
        'title' => 'Hello!',
        'body' => 'Hey there!',
    );

    $fields = array(
        'to' => $token,
        'notification' => $message,
        'data' => [
            'stream_channel' => 'abcdefghijklmnopqrstuvwxyz',
        ],
    );

    $sendToFirebase = curl_init();
    curl_setopt($sendToFirebase, CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send');
    curl_setopt($sendToFirebase, CURLOPT_POST, true);
    curl_setopt($sendToFirebase, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($sendToFirebase, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($sendToFirebase, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($sendToFirebase, CURLOPT_POSTFIELDS, json_encode($fields));
    $result = curl_exec($sendToFirebase);
    curl_close($sendToFirebase);

    return $result;
});
