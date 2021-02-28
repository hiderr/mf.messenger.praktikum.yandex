import { HTTP } from '../modules/http/HTTP';
import { BaseAPI } from '../modules/http/BaseAPI';
import { Constants } from '../modules/Constants';

const chatAPIInstance = new HTTP(`https://${Constants.HOST}/api/v2/chats`);

export class ChatAPI extends BaseAPI {
  request() {
    return chatAPIInstance.get('/');
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

  getToken(options) {
    return chatAPIInstance.post(`/token/${options.data.id}`, options);
  }
}
