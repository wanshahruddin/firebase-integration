/**
 * Firebase Cloud Messaging.
 */
// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
// window.firebase = require('firebase/app');
// require('firebase/firebase-messaging');
importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-messaging.js');


// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyDzmitlMmLyYbMpn21YKjKg2MJtUnA42kQ",
    authDomain: "learning-firebase-84580.firebaseapp.com",
    databaseURL: "https://learning-firebase-84580.firebaseio.com",
    projectId: "learning-firebase-84580",
    storageBucket: "learning-firebase-84580.appspot.com",
    messagingSenderId: "142879333032",
    appId: "1:142879333032:web:b2d4e680f98341d73e409d",
    measurementId: "G-PMN4RSNSZ6"
});

// Retrieve Firebase Messaging object.
const messaging = firebase.messaging();

// Handle notifications when the browser is not in
// the foreground.
messaging.setBackgroundMessageHandler(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);

    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
        body: 'Background Message body.',
        icon: '/firebase-logo.png'
    };

    return self.registration.showNotification(notificationTitle,
        notificationOptions);
});