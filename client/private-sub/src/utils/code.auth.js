import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
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
