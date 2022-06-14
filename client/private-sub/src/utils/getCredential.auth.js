import { PhoneAuthProvider } from 'firebase/auth';

export default async function getAuthCredential(ID, code) {
    return await PhoneAuthProvider.credential(ID, code);
}
