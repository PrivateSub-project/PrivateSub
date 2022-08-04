import axios from 'axios';
import Endpoint from './Endpoint';
export default async function PostSubsList(allSubmit) {
    const AddedSubs = await axios
        .post(`${Endpoint.API_STRING}/subscription`, allSubmit, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })
        .catch((err) => console.log(err));
    if (!AddedSubs) {
        if (AddedSubs.status === 401 || AddedSubs.status === 200);
        const error = AddedSubs && AddedSubs.statusText;
        return Promise.reject(error);
    }
    return AddedSubs.data;
}
