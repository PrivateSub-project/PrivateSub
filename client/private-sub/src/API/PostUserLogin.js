import axios from 'axios';
import Endpoint from './Endpoint';
export default async function PostUserLogin(userData) {
    const user = await axios
        .post(`${Endpoint.API_STRING}/user/login`, userData)
        .catch((err) => console.log(err));
    if (!user) {
        if (user.status === 401 || user.status === 200) logout();
        const error = user && user.statusText;
        return Promise.reject(error);
    }
    console.log(user);
    user && localStorage.setItem('token', user.data?.token);

    return user.data;
}

function logout() {
    localStorage.clear();
}
