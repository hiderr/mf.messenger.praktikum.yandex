import {HTTP} from '../modules/http/HTTP.js';
import {BaseAPI} from '../modules/http/BaseAPI.js';

const chatAPIInstance = new HTTP('api/v2/chats');

export class ChatAPI extends BaseAPI {
    request() {
        return chatAPIInstance.get(`/`);
    }

    create(options) {
        return chatAPIInstance.post('/', options);
    }

    addUsers(options) {
        return chatAPIInstance.put('/users', options);
    }

    deleteUsers(options) {
        return chatAPIInstance.delete('/users', options);
    }
}