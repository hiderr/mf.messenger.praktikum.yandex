import { Form } from '../../components/Form/index';
import { Input } from '../../components/Input/index';
import { Title } from '../../components/Title/index';
import { Wrapper } from '../../components/Wrapper/index';
import { Button } from '../../components/Button/index';
import { Link } from '../../components/Link/index';
import { LoginController } from '../../controllers/LoginController';

export const PropsSignin = {
  children: [
    new Title({
      className: 'login_box_title',
      text: 'Регистрация',
    }),
    new Form({
      className: 'login_form',
      form_name: 'form',
      children: [
        new Input({
          labelClassName: 'login_form_label',
          className: 'form__input pink_bottom',
          label: 'Почта',
          type: 'email',
          name: 'email',
          value: 'mymail@gmail.com',
          placeholder: 'Почта',
        }),
        new Input({
          labelClassName: 'login_form_label',
          className: 'form__input pink_bottom',
          label: 'Логин',
          type: 'text',
          name: 'login',
          value: 'hiderr',
          placeholder: 'Логин',
        }),
        new Input({
          labelClassName: 'login_form_label',
          className: 'form__input pink_bottom',
          label: 'Имя',
          type: 'text',
          name: 'first_name',
          value: 'Хайдер',
          placeholder: 'Имя',
        }),
        new Input({
          labelClassName: 'login_form_label',
          className: 'form__input pink_bottom',
          label: 'Фамилия',
          type: 'text',
          name: 'second_name',
          value: 'Хайдарович',
          placeholder: 'Фамилия',
        }),
        new Input({
          labelClassName: 'login_form_label',
          className: 'form__input pink_bottom',
          label: 'Телефон',
          type: 'tel',
          name: 'phone',
          value: '+7 (909) 967 30 30',
          placeholder: 'Телефон',
        }),
        new Input({
          labelClassName: 'login_form_label',
          className: 'form__input pink_bottom',
          label: 'Пароль',
          type: 'password',
          name: 'password',
          value: '123456789',
          placeholder: 'Пароль',
        }),
        new Input({
          labelClassName: 'login_form_label',
          className: 'form__input pink_bottom',
          label: 'Пароль (ещё раз)',
          type: 'password',
          name: 'password_repeat',
          value: '123456789',
          placeholder: 'Пароль (ещё раз)',
        }),
      ],
    }),
    new Wrapper({
      className: 'form_buttons',
      children: [
        new Button({
          className: 'link_button',
          text: 'Зарегистрироваться',
          link: '/chat',
        }),
        new Link({
          className: 'text_link',
          href: '/',
          text: 'Войти',
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
          LoginController.signup({
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
        Block.router.go('/');
      },
    },
  ],
};
