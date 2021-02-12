import {HTTP} from '../modules/http/HTTP.js';
import {BaseAPI} from '../modules/http/BaseAPI.js';

const userAPIInstance = new HTTP('api/v2/user');

export class UserAPI extends BaseAPI {
    updateProfile(options) {
        return userAPIInstance.put('/profile', options);
    }

    updateAvatar(options) {
        return userAPIInstance.put('/profile/avatar', options);
    }

    updatePassword(options) {
        return userAPIInstance.put('/password', options);
    }

    request(id) {
        return userAPIInstance.get(`/${id}`);
    }
}