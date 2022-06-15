import {
    onAuthStateChanged,
    RecaptchaVerifier,
    signInWithPhoneNumber,
} from 'firebase/auth';
import { auth } from './firebase';

export default function setUpRecaptcha(number) {
    console.log(number);
    const recaptchaVerifier = new RecaptchaVerifier(
        'recaptcha-container',
        {},
        auth
    );
    recaptchaVerifier.render();
    return signInWithPhoneNumber(auth, number, recaptchaVerifier);
}

export function stateAuthChanged() {
    let currentUserData = null;
    const onAuthStateChange = onAuthStateChanged(auth, (currentUser) => {
        console.log('Auth', currentUser);
        currentUserData = currentUser;
    });
    return { currentUserData, onAuthStateChange };
}
