import axios from 'axios';
import Endpoint from './Endpoint';
export default async function PostCreditCard(cardData) {
    const user = await axios
        .post(`${Endpoint.API_STRING_localhost}/cc`, cardData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })
        .catch((err) => console.log(err));
    if (!user) {
        if (user.status === 401 || user.status === 200);
        const error = user && user.statusText;
        return Promise.reject(error);
    }
    console.log(user);
    // user && localStorage.setItem('token', user.data?.token);

    // return user.data;
}
