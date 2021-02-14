import {Utils} from "../utils/Utils.js";
import {AuthAPI} from "../api/auth-api.js";
import {Store} from "../modules/Store.js";

const authAPI = new AuthAPI();
const store = new Store();

export class LoginController {
    static signin(handler): void {
        Utils.preventDOS(store,
            authAPI.signin.bind(authAPI, {
                headers: {
                    "Content-Type": "application/json"
                },
                data: Utils.collectFormData()
            }))
            .then((xhr: XMLHttpRequest) => {
                if (xhr.status === 204) return;
                alert(xhr.responseText);
                if (xhr.status === 200 || xhr.status === 400) {
                    handler.success();
                }
            }).catch(authAPI.handleErrors);
    }

    static signup(handler): void {
        Utils.preventDOS(store,
            authAPI.create.bind(authAPI, {
                headers: {
                    "Content-Type": "application/json"
                },
                data: Utils.collectFormData()
            }))
            .then((xhr: XMLHttpRequest) => {
                if (xhr.status === 204) return;
                alert(xhr.responseText);
                if (xhr.status === 200) {
                    store.set("user", JSON.parse(xhr.response));
                }
                if (xhr.status === 200 || xhr.status === 400) {
                    handler.success();
                }
            }).catch(authAPI.handleErrors);
    }
}

