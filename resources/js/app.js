/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});


/**
 * Firebase Cloud Messaging.
 */

// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
window.firebase = require('firebase/app');
require('firebase/firebase-messaging');


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

// Firebase token handler js.
require('./fcm/token-handler');

// Firebase notification handler.
// - Browser is in the foreground.
// - For handler when the browser is not in the
// foreground, see firebase-messaging-sw.js.
require('./fcm/message-handler');
