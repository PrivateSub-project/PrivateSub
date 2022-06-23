import Endpoint from './Endpoint';
import axios from 'axios';
export default async function PostUserRegister(FormDataRegister) {
    console.log(FormDataRegister.userName);
    try {
        const res = await axios.post(
            `${Endpoint.API_STRING}/register`,
            FormDataRegister
        );
        return res;
    } catch (err) {
        return new Error('Bad request 404');
    }
}
