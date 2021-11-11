import Echo from 'laravel-echo';
import config from './config';
import localStorage from './localstorage';

const echo = new Echo({
    broadcaster: 'pusher',
    key: config.PUSHER.APP_KEY,
    cluster: config.PUSHER.APP_KEY,
    forceTLS: true,
    //authEndpoint is your apiUrl + /broadcasting/auth
    // authEndpoint: `${config.URL}/broadcasting/auth`,
    // As I'm using JWT tokens, I need to manually set up the headers.
    // auth: {
    //     headers: {
    //         Authorization: `Bearer ${localStorage.get('token')}`,
    //         Accept: 'application/json',
    //     },
    // },
});