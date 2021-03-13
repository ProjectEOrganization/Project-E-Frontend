import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA-H3h0czlXG_9THrjbmTpTnZwxsbHSAK0",
    authDomain: "projecte-cc03f.firebaseapp.com",
    projectId: "projecte-cc03f",
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };