import axios from 'axios';
import Endpoint from './Endpoint';
export default async function editSubs(id, price) {
    console.log(price);
    if (id) {
        const data = await axios
            .put(
                `${Endpoint.API_STRING}/subscription/${id}`,
                { price },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            'token'
                        )}`,
                    },
                }
            )
            .catch((err) => console.log(err));

        if (!data) {
            if (data.status === 401 || data.status === 200);
            const error = data && data.statusText;
            return Promise.reject(error);
        }
        if (data) return Promise.resolve(data.data);
    } else return;
}
