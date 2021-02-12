import {collectFormData} from "../utils/collectFormData.js";
import {ChatAPI} from "../api/chat-api.js";
import {Store} from "../modules/Store.js";
import {mergeDeep} from "../utils/mergeDeep.js";

const chatAPI = new ChatAPI();
const store = new Store();

export class ChatController {
    static getChats(): void {
        chatAPI.request()
            .then((xhr: XMLHttpRequest) => {
                if (xhr.status === 204) return;
                if (xhr.status !== 200) {
                    alert(xhr.responseText);
                }
                if (xhr.status === 200) {
                    store.set("chatProps", {chats: JSON.parse(xhr.response)});
                    store.eventBus.emit("chatDataReceived");
                }
            }).catch(chatAPI.handleErrors);
    }

    static createChat(options): void {
        chatAPI.create({
            headers: {
                "Content-Type": "application/json"
            },
            data: collectFormData()
        })
            .then((xhr: XMLHttpRequest) => {
                if (xhr.status === 204) return;
                alert(xhr.responseText);
                if (xhr.status === 200) {
                    options.success();
                }
            }).catch(chatAPI.handleErrors);
    }

    static addUsers(options): void {
        chatAPI.addUsers(mergeDeep({
            headers: {
                "Content-Type": "application/json"
            },
            data: {
                users: collectFormData()["userId"].replaceAll(" ", "").split(",").map(parseInt)
            }
        }, options))
            .then((xhr: XMLHttpRequest) => {
                if (xhr.status === 204) return;
                alert(xhr.responseText);
                if (xhr.status === 200) {
                    options.success();
                }
            }).catch(chatAPI.handleErrors);
    }

    static removeUsers(options): void {
        chatAPI.deleteUsers(mergeDeep({
            headers: {
                "Content-Type": "application/json"
            },
            data: {
                users: collectFormData()["userId"].replaceAll(" ", "").split(",").map(parseInt)
            }
        }, options))
            .then((xhr: XMLHttpRequest) => {
                if (xhr.status === 204) return;
                alert(xhr.responseText);
                if (xhr.status === 200) {
                    options.success();
                }
            }).catch(chatAPI.handleErrors);
    }
}

