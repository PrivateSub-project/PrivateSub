import axios from 'axios';
import Endpoint from './Endpoint';
export default async function getBrandAPI(value) {
    try {
        const logo = await axios
            .get(`${Endpoint.API_LOGO}/v1/domains/find`, {
                params: {
                    name: value,
                },
                auth: {
                    username: 'sk_883b2b5bf3d1f95344d07bd515858619',
                    passsword: '',
                },
            })
            .catch((err) => console.log(err));
        if (!logo) {
            if (logo.status === 401 || logo.status === 200);
            const error = logo && logo.statusText;
            return Promise.reject(error);
        }
        console.log(logo);

        if (logo) return logo.data;
    } catch (err) {
        console.log('err => ', err);
        return Promise.reject(err);
    }
    // user && localStorage.setItem('token', user.data?.token);
}
