import axios from 'axios';
import Endpoint from './Endpoint';
export default async function PostCreditCard(cardData) {
    const data = { ...cardData, user: cardData.name };
    const userCard = await axios
        .post(`${Endpoint.API_STRING}/cc`, data, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })
        .catch((err) => console.log(err));
    if (!userCard) {
        if (userCard.status === 401 || userCard.status === 200);
        const error = userCard && userCard.statusText;
        return Promise.reject(error);
    }
    return userCard.data;
}
