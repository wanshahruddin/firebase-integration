
// Get Instance ID token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
messaging.getToken({
    vapidKey: "BJZB6-vDOZPPdH4WzGDJnZRNRF78077nis1odkxvMj-tfMCem39qImTjICCOJnAMyuXkDcs3ZAKAybJ6wSdLdIo",
}).then((currentToken) => {
    console.log(currentToken);
    if (currentToken) {
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
// If called, send currently logged in
// user id with token to server to be stored.
function sendTokenToServer(token) {
    console.log(token);
    // Axios.post('/api/fcm/store', {
    //     userId: 1,
    //     fcmToken: token,
    // }).then(function (response) {
    //     console.log(response);
    // }).catch(function (error) {
    //     console.log(error);
    // })
}