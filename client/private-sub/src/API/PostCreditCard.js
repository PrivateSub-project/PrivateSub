import axios from 'axios';
import Endpoint from './Endpoint';
export default async function PostCreditCard(cardData) {
    console.log(cardData);
    const { number, expiry, name } = cardData;
    const userCard = await axios
        .post(
            `${Endpoint.API_STRING_localhost}/cc`,
            { user: name, number, expiry, active: true },
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            }
        )
        .catch((err) => console.log(err));
    if (!userCard) {
        if (userCard.status === 401 || userCard.status === 200);
        const error = userCard && userCard.statusText;
        return Promise.reject(error);
    }
    return userCard.data;
}
