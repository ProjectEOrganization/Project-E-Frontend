import firebase from 'firebase';
import config from './config';

const firebaseConfig = {
    ...config.firebase
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };