import { Utils } from '../utils/Utils';
import { UserAPI } from '../api/user-api';
import { AuthAPI } from '../api/auth-api';
import { Store } from '../modules/Store';

const authAPI = new AuthAPI();
const userAPI = new UserAPI();
const store = new Store();

export class ProfileController {
  static getProfile(options): void {
    if (store.get('profileProps.info')) {
      store.eventBus.emit('profileDataReceived');
      return;
    }
    authAPI
      .request(options)
      .then((xhr: XMLHttpRequest) => {
        if (xhr.status === 204) return;
        if (xhr.status !== 200) {
          alert(xhr.responseText);
        }
        if (xhr.status === 200) {
          store.set('profileProps.info', JSON.parse(xhr.response));
          store.eventBus.emit('profileDataReceived');
        }
      })
      .catch(userAPI.handleErrors);
  }

  static updateProfile(options): void {
    Utils.preventDOS(
      store,
      userAPI.updateProfile.bind(userAPI, {
        headers: {
          'Content-Type': 'application/json',
        },
        data: Utils.collectFormData(),
      }),
    )
      .then((xhr: XMLHttpRequest) => {
        if (xhr.status === 204) return;
        if (xhr.status !== 200) {
          alert(xhr.responseText);
        }
        if (xhr.status === 200) {
          store.set('profileProps.info', JSON.parse(xhr.response));
          store.eventBus.emit('profileDataReceived');
          options.success();
        }
      })
      .catch(userAPI.handleErrors);
  }

  static updatePassword(options): void {
    Utils.preventDOS(
      store,
      userAPI.updatePassword.bind(userAPI, {
        headers: {
          'Content-Type': 'application/json',
        },
        data: Utils.collectFormData(),
      }),
    )
      .then((xhr: XMLHttpRequest) => {
        if (xhr.status === 204) return;
        alert(xhr.responseText);
        if (xhr.status === 200) {
          options.success();
        }
      })
      .catch(userAPI.handleErrors);
  }

  static uploadAvatar(options): void {
    Utils.preventDOS(
      store,
      userAPI.updateAvatar.bind(userAPI, {
        data: Utils.collectFormData({ returnFormData: true }),
      }),
    )
      .then((xhr: XMLHttpRequest) => {
        if (xhr.status === 204) return;
        if (xhr.status !== 200) {
          alert(xhr.responseText);
        }
        if (xhr.status === 200) {
          store.set('profileProps.info', JSON.parse(xhr.response));
          store.eventBus.emit('profileDataReceived');
          options.success();
        }
      })
      .catch(userAPI.handleErrors);
  }

  static logout(options): void {
    authAPI
      .logout()
      .then((xhr: XMLHttpRequest) => {
        if (xhr.status === 204) return;
        alert(xhr.responseText);
        if (xhr.status === 200) {
          options.success();
        }
      })
      .catch(authAPI.handleErrors);
  }
}
