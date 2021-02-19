import {HTTP} from '../modules/http/HTTP';
import {BaseAPI} from '../modules/http/BaseAPI';

const chatAPIInstance = new HTTP('https://ya-praktikum.tech/api/v2/chats');

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