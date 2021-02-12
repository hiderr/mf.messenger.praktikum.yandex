import {HTTP} from '../modules/http/HTTP.js';
import {BaseAPI} from '../modules/http/BaseAPI.js';

const authAPIInstance = new HTTP('api/v2/auth');

export class AuthAPI extends BaseAPI {
    create(options) {
        return authAPIInstance.post('/signup', options);
    }

    request(options) {
        return authAPIInstance.get('/user', options);
    }

    signin(options) {
        return authAPIInstance.post('/signin', options);
    }

    logout() {
        return authAPIInstance.post('/logout');
    }
}