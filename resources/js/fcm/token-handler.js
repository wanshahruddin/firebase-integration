// Retrieve Firebase Messaging object.
const messaging = firebase.messaging();

// Get Instance ID token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
messaging.getToken({
    vapidKey: "BJZB6-vDOZPPdH4WzGDJnZRNRF78077nis1odkxvMj-tfMCem39qImTjICCOJnAMyuXkDcs3ZAKAybJ6wSdLdIo",
}).then((currentToken) => {
    if (currentToken) {
        console.log(currentToken);
        sendTokenToServer(currentToken);
        // updateUIForPushEnabled(currentToken);
    } else {
        // Show permission request.
        console.log('No Instance ID token available. Request permission to generate one.');
        // Show permission UI.
        // updateUIForPushPermissionRequired();
        // setTokenSentToServer(false);
    }
}).catch((err) => {
    //     console.log('An error occurred while retrieving token. ', err);
    //     showToken('Error retrieving Instance ID token. ', err);
    //     setTokenSentToServer(false);
});


/**
 * Functions
 */

// Submit fcm token to the server
// for storage.
function sendTokenToServer(token) {
    axios.post('/api/fcm/store', {
        userID: 1,
        fcmToken: token,
    }).then(function (response) {
        // console.log(response);
    }).catch(function (error) {
        // console.log(error);
    });
}

// Callback fired if Instance ID token is updated.
messaging.onTokenRefresh(() => {
    messaging.getToken().then((refreshedToken) => {
        // Send Instance ID token to app server.
        sendTokenToServer(refreshedToken);
    }).catch((err) => {
        console.log('Unable to retrieve refreshed token ', err);
    });
});
