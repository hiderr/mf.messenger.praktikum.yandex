import { HTTP } from '../modules/http/HTTP';
import { BaseAPI } from '../modules/http/BaseAPI';
import { Constants } from '../modules/Constants';

const authAPIInstance = new HTTP(`https://${Constants.HOST}/api/v2/auth`);

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
