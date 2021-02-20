import { Form } from '../../components/Form/index';
import { Input } from '../../components/Input/index';
import { Title } from '../../components/Title/index';
import { Wrapper } from '../../components/Wrapper/index';
import { Button } from '../../components/Button/index';
import { Link } from '../../components/Link/index';
import { LoginController } from '../../controllers/LoginController';

export const PropsLogin = {
  children: [
    new Title({
      className: 'login_box_title',
      text: 'Вход',
    }),
    new Form({
      className: 'login_form',
      form_name: 'form',
      children: [
        new Input({
          labelClassName: 'login_form_label',
          className: 'form__input pink_bottom',
          name: 'login',
          type: 'text',
          label: 'Логин',
          value: 'hiderr',
          placeholder: 'Логин',
        }),
        new Input({
          labelClassName: 'login_form_label',
          className: 'form__input pink_bottom',
          name: 'password',
          type: 'password',
          label: 'Пароль',
          value: '123456789',
          placeholder: 'Пароль',
        }),
      ],
    }),
    new Wrapper({
      className: 'form_buttons',
      children: [
        new Button({
          className: 'link_button',
          text: 'Авторизоваться',
          link: 'chat',
        }),
        new Link({
          className: 'text_link',
          href: 'signin',
          text: 'Нет аккаунта?',
        }),
      ],
    }),
  ],
  events: [
    {
      selector: 'form input',
      name: 'input',
      handler: (event) => {
        const el = event.target;
        if (el.tagName === 'INPUT') {
          el.previousElementSibling.hidden = el.value === '';
        }
      },
    },
    {
      selector: 'button',
      name: 'click',
      handler: (...args) => {
        const [event, Block] = args;
        event.preventDefault();
        if (Block.validation.validateFormOnSubmit()) {
          LoginController.signin({
            success: () => {
              Block.router.go('/chat');
            },
          });
        }
      },
    },
    {
      selector: '.text_link',
      name: 'click',
      handler: (...args) => {
        const [event, Block] = args;
        event.preventDefault();
        Block.router.go('/signin');
      },
    },
  ],
};
