import axios from 'axios';
import Endpoint from './Endpoint';
export default async function getCardNumAPI({ typeOfCard }) {
    const typeCard = await axios
        .get(`${Endpoint.API_STRING}/cc/number`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
            params: {
                type: typeOfCard,
            },
        })
        .catch((err) => console.log(err));
    if (!typeCard) {
        if (typeCard.status === 401 || typeCard.status === 200);
        const error = typeCard && typeCard.statusText;
        return Promise.reject(error);
    }
    console.log(typeCard);
    if (typeCard)
        return Promise.resolve([
            { number: typeCard?.data.number, cvc: 986, expiry: 2304 },
            { number: typeCard?.data.number, cvc: 138, expiry: 2411 },
        ]);
    // user && localStorage.setItem('token', user.data?.token);
}
