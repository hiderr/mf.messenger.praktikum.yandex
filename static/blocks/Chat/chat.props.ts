import { ChatController } from '../../controllers/ChatController';
export const PropsChat = {
  chat_class: 'w100proc',
  profile_link_text: 'Профиль',
  search_placeholder: 'Поиск',
  chats: [],
  messages_date: '19 июня',
  messages: [],
  menu_actions: [
    { icon: 'fa-user-plus', link: 'add_user', text: 'Добавить пользователя' },
    { icon: 'fa-user-minus', link: 'remove_user', text: 'Удалить пользователя' },
    { icon: 'fa-plus', link: 'add_chat', text: 'Добавить чат' },
    { icon: 'fa-minus', text: 'Удалить чат' },
  ],
  attachment_actions: [
    { icon: 'fa-image', text: 'Фото или Видео' },
    { icon: 'fa-file', text: 'Файл' },
    { icon: 'fa-location-arrow', text: 'Локация' },
  ],
  events: [
    {
      selector: '.messages__search',
      name: 'keyup',
      handler: (event) => {
        if (event.keyCode === 13) {
          (<HTMLButtonElement>document.querySelector('.send')).click();
        }
      },
    },
    {
      selector: '.chat',
      name: 'click',
      handler: (event, Block) => {
        const el = event.target;
        if (el.matches('.messages__menu_button')) {
          document.querySelector('.messages__menu').classList.toggle('messages__menu_hidden');
          el.parentElement.classList.toggle('messages__menu_wrapper_clicked');
        }
        if (el.parentElement.matches('.paperclip')) {
          document
            .querySelector('.messages__menu_attachments')
            .classList.toggle('messages__menu_hidden');
        }
        if (el.closest('.contact')) {
          const newSelectedChatId = parseInt(el.closest('li').dataset.id),
            oldSelectedChatId = Block.store.get('chatProps.selectedId'),
            storedChats = Block.store.get('chatProps.chats'),
            oldSelectedChat = storedChats.find((chat) => chat.id === oldSelectedChatId),
            newSelectedChat = storedChats.find((chat) => chat.id === newSelectedChatId);
          if (document.querySelector('.contact_selected')) {
            document.querySelector('.contact_selected').classList.remove('contact_selected');
          }
          el.closest('li').classList.add('contact_selected');
          storedChats.map((chat) => (chat.selected = chat.id === newSelectedChatId));
          if (oldSelectedChatId !== newSelectedChatId) {
            if (oldSelectedChat) {
              oldSelectedChat.messages = Block.store.get('chatProps.messages');
            }
            if (Array.isArray(newSelectedChat.messages)) {
              Block.store.set('chatProps.messages', newSelectedChat.messages);
            } else {
              Block.store.set('chatProps.messages', []);
            }
            Block.store.set('chatProps.selectedChatName', newSelectedChat.title);
            Block.store.eventBus.emit('chatDataReceived');
          }
          Block.store.set('chatProps.selectedId', newSelectedChatId);
          ChatController.getToken({
            data: {
              id: parseInt(el.closest('li').dataset.id),
            },
            success: (xhr) => {
              Block.store.set('chatProps.token', JSON.parse(xhr.response).token);
              ChatController.initSocket({
                data: {
                  userId: Block.store.get('profileProps.info.id'),
                  chatId: Block.store.get('chatProps.selectedId'),
                  token: Block.store.get('chatProps.token'),
                },
              });
            },
          });
        }
      },
    },
    {
      selector: '.send',
      name: 'click',
      handler: () => {
        const messageInput = document.querySelector('.messages__search');
        if ((<HTMLInputElement>messageInput).value) {
          ChatController.sendMessage((<HTMLInputElement>messageInput).value);
        }
      },
    },
    {
      selector: "[href='add_user']",
      name: 'click',
      handler: (event, Block) => {
        event.preventDefault();
        Block.router.go('/add_user');
      },
    },
    {
      selector: "[href='remove_user']",
      name: 'click',
      handler: (event, Block) => {
        event.preventDefault();
        Block.router.go('/remove_user');
      },
    },
    {
      selector: "[href='add_chat']",
      name: 'click',
      handler: (event, Block) => {
        event.preventDefault();
        Block.router.go('/add_chat');
      },
    },
    {
      selector: "[href='profile']",
      name: 'click',
      handler: (event, Block) => {
        event.preventDefault();
        Block.router.go('/profile');
      },
    },
  ],
};
