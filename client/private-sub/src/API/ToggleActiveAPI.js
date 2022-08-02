import Endpoint from './Endpoint';
import axios from 'axios';
export default async function ToggleActiveAPI(number) {
    console.log(number);
    try {
        const res = await axios.post(
            `${Endpoint.API_STRING}/cc/toggleActive`,
            number,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            }
        );
        return res;
    } catch (err) {
        return new Error('Bad request 404');
    }
}
