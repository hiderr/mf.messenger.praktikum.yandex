import { HTTP } from '../modules/http/HTTP';
import { BaseAPI } from '../modules/http/BaseAPI';
import { Constants } from '../modules/Constants';

const userAPIInstance = new HTTP(`${Constants.HOST}/api/v2/user`);

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

  searchUser(options) {
    return userAPIInstance.post('/search', options);
  }
}
