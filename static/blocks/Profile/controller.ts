import {collectFormData} from "../../utils/collectFormData.js";
import {UserAPI} from "../../api/user-api.js";
import {AuthAPI} from "../../api/auth-api.js";
import {Store} from "../../modules/Store.js";

const authAPI = new AuthAPI();
const userAPI = new UserAPI();
const store = new Store();

export class ProfileController {
    static updateProfile(options): void {
        userAPI.updateProfile({
            headers: {
                "Content-Type": "application/json"
            },
            data: collectFormData()
        }).then((xhr: XMLHttpRequest) => {
            if (xhr.status === 204) return;
            alert(xhr.responseText);
            if (xhr.status === 200) {
                store.set("user.info", JSON.parse(xhr.response));
                options.success();
            }
        }).catch(userAPI.handleErrors);
    }

    static updatePassword(options): void {
        userAPI.updatePassword({
            headers: {
                "Content-Type": "application/json"
            },
            data: collectFormData()
        }).then((xhr: XMLHttpRequest) => {
            if (xhr.status === 204) return;
            alert(xhr.responseText);
            if (xhr.status === 200) {
                options.success();
            }
        }).catch(userAPI.handleErrors);
    }

    static uploadAvatar(options): void {
        userAPI.updateAvatar({
            data: collectFormData({returnFormData: true})
        }).then((xhr: XMLHttpRequest) => {
            if (xhr.status === 204) return;
            alert(xhr.responseText);
            if (xhr.status === 200) {
                options.success();
            }
        }).catch(userAPI.handleErrors);
    }

    static logout(options):void {
        authAPI.logout()
            .then((xhr: XMLHttpRequest) => {
                if (xhr.status === 204) return;
                alert(xhr.responseText);
                if (xhr.status === 200) {
                    options.success();
                }
            }).catch(authAPI.handleErrors);
    }
}

