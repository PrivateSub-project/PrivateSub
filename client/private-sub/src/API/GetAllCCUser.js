import axios from 'axios';
import Endpoint from './Endpoint';
export default async function getCardNumAPI(name) {
    if (name) {
        const data = await axios
            .get(`${Endpoint.API_STRING}/cc/${name}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            })
            .catch((err) => console.log(err));

        if (!data) {
            if (data.status === 401 || data.status === 200);
            const error = data && data.statusText;
            return Promise.reject(error);
        }
        if (data) return Promise.resolve(data.data);
    } else return;
}
