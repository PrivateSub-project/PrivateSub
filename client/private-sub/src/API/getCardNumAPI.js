// import axios from 'axios';
// import Endpoint from './Endpoint';
export default async function getCardNumAPI({ typeOfCard }) {
    // const typeCard = await axios
    //     .get(`${Endpoint.API_STRING_localhost}/cc/number`, type, {
    //         headers: {
    //             Authorization: `Bearer ${localStorage.getItem('token')}`,
    //         },
    //     })
    //     .catch((err) => console.log(err));
    // if (!typeCard) {
    //     if (typeCard.status === 401 || typeCard.status === 200);
    //     const error = typeCard && typeCard.statusText;
    //     return Promise.reject(error);
    // }
    // console.log(typeCard);
    console.log(typeOfCard);
    return Promise.resolve([
        { number: '4563567425474573', cvc: 986, expiry: 2304 },
        { number: '4363567425474565', cvc: 138, expiry: 2411 },
    ]);
    // user && localStorage.setItem('token', user.data?.token);

    // return user.data;
}
