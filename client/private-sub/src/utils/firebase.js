// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyDEI_VY_gNlHl24doQGfaYjYSfKURwJ7Fk',
    authDomain: 'privatesub-project.firebaseapp.com',
    projectId: 'privatesub-project',
    storageBucket: 'privatesub-project.appspot.com',
    messagingSenderId: '16776767755',
    appId: '1:16776767755:web:4aa1355dec673b1d24da0e',
    measurementId: 'G-6XHXJ1XYLJ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
