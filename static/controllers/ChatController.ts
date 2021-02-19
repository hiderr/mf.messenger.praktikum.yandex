import {ChatAPI} from "../api/chat-api";
import {Store} from "../modules/Store";
import {Utils} from "../utils/Utils";

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
        Utils.preventDOS(store,
            chatAPI.create.bind(chatAPI, {
                headers: {
                    "Content-Type": "application/json"
                },
                data: Utils.collectFormData()
            }))
                .then((xhr: XMLHttpRequest) => {
                    if (xhr.status === 204) return;
                    if (xhr.status !== 200) {
                        alert(xhr.responseText);
                    }
                    if (xhr.status === 200) {
                        options.success();
                    }
                }).catch(chatAPI.handleErrors);
    }

    static addUsers(options): void {
        Utils.preventDOS(store,
            chatAPI.addUsers.bind(chatAPI, Utils.mergeDeep({
                headers: {
                    "Content-Type": "application/json"
                },
                data: {
                    users: Utils.collectFormData()["userId"].replaceAll(" ", "").split(",").map(parseInt)
                }
            }, options)))
            .then((xhr: XMLHttpRequest) => {
                if (xhr.status === 204) return;
                alert(xhr.responseText);
                if (xhr.status === 200) {
                    options.success();
                }
            }).catch(chatAPI.handleErrors);
    }

    static removeUsers(options): void {
        Utils.preventDOS(store,
            chatAPI.deleteUsers.bind(chatAPI, Utils.mergeDeep({
                headers: {
                    "Content-Type": "application/json"
                },
                data: {
                    users: Utils.collectFormData()["userId"].replaceAll(" ", "").split(",").map(parseInt)
                }
            }, options)))
                .then((xhr: XMLHttpRequest) => {
                    if (xhr.status === 204) return;
                    alert(xhr.responseText);
                    if (xhr.status === 200) {
                        options.success();
                    }
                }).catch(chatAPI.handleErrors);
    }
}

