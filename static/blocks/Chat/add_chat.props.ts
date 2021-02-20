import { Popup } from '../../components/Popup/index';
import { Title } from '../../components/Title/index';
import { Form } from '../../components/Form/index';
import { Input } from '../../components/Input/index';
import { Button } from '../../components/Button/index';
import { ChatPage } from './index';
import { PropsChat } from './chat.props';
import { ChatController } from '../../controllers/ChatController';

export const PropsAddChat = {
  children: [
    new Popup({
      children: [
        new Title({
          text: 'Добавить чат',
          className: 'popup__header',
        }),
        new Form({
          form_name: 'form',
          children: [
            new Input({
              labelClassName: 'login_form_label',
              className: 'form__input',
              label: 'Имя чата',
              type: 'text',
              name: 'title',
              value: 'Чат 1',
            }),
          ],
        }),
        new Button({
          className: 'link_button',
          text: 'Добавить',
          link: '/chat',
        }),
      ],
    }),
    new ChatPage(PropsChat),
  ],
  events: [
    {
      selector: 'button',
      name: 'click',
      handler: (...args) => {
        const [event, Block] = args;
        event.preventDefault();
        ChatController.createChat({
          success: () => {
            Block.router.go('/chat');
          },
        });
      },
    },
  ],
};
