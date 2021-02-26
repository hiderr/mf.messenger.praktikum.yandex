import { ChatAPI } from '../api/chat-api';
import { Store } from '../modules/Store';
import { Utils } from '../utils/Utils';

const chatAPI = new ChatAPI();
const store = new Store();

export class ChatController {
  public static socket: WebSocket;

  static getChats(): void {
    chatAPI
      .request()
      .then((xhr: XMLHttpRequest) => {
        if (xhr.status === 204) return;
        if (xhr.status !== 200) {
          alert(xhr.responseText);
        }
        if (xhr.status === 200) {
          store.set('chatProps', { chats: JSON.parse(xhr.response) });
          store.eventBus.emit('chatDataReceived');
        }
      })
      .catch(chatAPI.handleErrors);
  }

  static createChat(options): void {
    Utils.preventDOS(
      store,
      chatAPI.create.bind(chatAPI, {
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
          options.success();
        }
      })
      .catch(chatAPI.handleErrors);
  }

  static addUsers(options): void {
    Utils.preventDOS(
      store,
      chatAPI.addUsers.bind(
        chatAPI,
        Utils.mergeDeep(
          {
            headers: {
              'Content-Type': 'application/json',
            },
            data: {
              users: Utils.collectFormData()['userId'].replaceAll(' ', '').split(',').map(parseInt),
            },
          },
          options,
        ),
      ),
    )
      .then((xhr: XMLHttpRequest) => {
        if (xhr.status === 204) return;
        alert(xhr.responseText);
        if (xhr.status === 200) {
          options.success();
        }
      })
      .catch(chatAPI.handleErrors);
  }

  static removeUsers(options): void {
    Utils.preventDOS(
      store,
      chatAPI.deleteUsers.bind(
        chatAPI,
        Utils.mergeDeep(
          {
            headers: {
              'Content-Type': 'application/json',
            },
            data: {
              users: Utils.collectFormData()['userId'].replaceAll(' ', '').split(',').map(parseInt),
            },
          },
          options,
        ),
      ),
    )
      .then((xhr: XMLHttpRequest) => {
        if (xhr.status === 204) return;
        alert(xhr.responseText);
        if (xhr.status === 200) {
          options.success();
        }
      })
      .catch(chatAPI.handleErrors);
  }

  static getToken(options): void {
    Utils.preventDOS(
      store,
      chatAPI.getToken.bind(
        chatAPI,
        Utils.mergeDeep(
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
          options,
        ),
      ),
    )
      .then((xhr: XMLHttpRequest) => {
        if (xhr.status === 204) return;
        // alert(xhr.responseText);
        if (xhr.status === 200) {
          options.success(xhr);
        }
      })
      .catch(chatAPI.handleErrors);
  }

  static initSocket(options): void {
    this.socket = new WebSocket(
      `wss://ya-praktikum.tech/ws/chats/${options.data.userId}/${options.data.chatId}/${options.data.token}`,
    );

    this.socket.addEventListener('open', () => {
      console.log('Соединение установлено');
      alert('Соединение установлено! Пишите сообщение :-)');
    });

    this.socket.addEventListener('close', (event) => {
      if (event.wasClean) {
        console.log('Соединение закрыто чисто');
      } else {
        console.log('Обрыв соединения');
      }

      console.log(`Код: ${event.code} | Причина: ${event.reason}`);
    });

    this.socket.addEventListener('message', (event) => {
      const message = JSON.parse(event.data);
      if (message.type === 'message') {
        message.time = new Date(message.time).toTimeString().split(' ')[0];
        if (message.userId === store.get('profileProps.info.id')) {
          message.class = 'message__text_to';
        } else {
          message.class = 'message__text_from';
        }
      } else if (message.type === 'user connected') {
        message.class = 'messages__center';
        message.content = `Подключился пользователь с id: ${message.content}`;
      }
      if (Array.isArray(store.get('chatProps.messages'))) {
        store.set('chatProps', { messages: [...store.get('chatProps.messages'), message] });
      } else {
        store.set('chatProps', { messages: [message] });
      }
      store.eventBus.emit('chatDataReceived');
      console.log('Получены данные', event.data);
    });

    this.socket.addEventListener('error', (event: MessageEvent) => {
      console.log('Ошибка', event);
    });
  }

  static sendMessage(message: string): void {
    this.socket.send(
      JSON.stringify({
        content: message,
        type: 'message',
      }),
    );
  }
}
