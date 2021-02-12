import {collectFormData} from "../utils/collectFormData.js";
import {AuthAPI} from "../api/auth-api.js";
import {Store} from "../modules/Store.js";

const authAPI = new AuthAPI();
const store = new Store();

export class LoginController {
    static signin(handler): void {
        authAPI.signin({
            headers: {
                "Content-Type": "application/json"
            },
            data: collectFormData()
        }).then((xhr: XMLHttpRequest) => {
            if (xhr.status === 204) return;
            alert(xhr.responseText);
            if (xhr.status === 200 || xhr.status === 400) {
                handler.success();
            }
        }).catch(authAPI.handleErrors);
    }

    static signup(handler): void {
        authAPI.create({
            headers: {
                "Content-Type": "application/json"
            },
            data: collectFormData()
        }).then((xhr: XMLHttpRequest) => {
            if (xhr.status === 204) return;
            alert(xhr.responseText);
            if (xhr.status === 200){
                store.set("user", JSON.parse(xhr.response));
            }
            if (xhr.status === 200 || xhr.status === 400) {
                handler.success();
            }
        }).catch(authAPI.handleErrors);
    }
}

