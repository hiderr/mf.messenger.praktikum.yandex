import { Avatar } from '../../components/Avatar/index';
import { Form } from '../../components/Form/index';
import { Input } from '../../components/Input/index';
import { Link } from '../../components/Link/index';
import { ProfileController } from '../../controllers/ProfileController';

export const PropsProfile = {
  className: 'w100proc',
  back_button_link: '/chat',
  children: [
    new Avatar({
      url: '',
      urlPath: 'profileProps.info.avatar',
      tooltip: 'Поменять аватар',
      title: '',
      titlePath: 'profileProps.info.first_name',
    }),
    new Form({
      className: 'profile__form w100proc',
      form_name: 'form',
      children: [
        new Input({
          labelClassName: 'form__row_name',
          className: 'form__row_value form__input form__input_align_right',
          disabled: true,
          label: 'Почта',
          name: 'Почта',
          type: 'email',
          value: '',
          valuePath: 'profileProps.info.email',
        }),
        new Input({
          labelClassName: 'form__row_name',
          className: 'form__row_value form__input form__input_align_right',
          disabled: true,
          label: 'Логин',
          name: 'Логин',
          type: 'text',
          value: '',
          valuePath: 'profileProps.info.login',
        }),
        new Input({
          labelClassName: 'form__row_name',
          className: 'form__row_value form__input form__input_align_right',
          disabled: true,
          label: 'Имя',
          name: 'Имя',
          type: 'text',
          value: '',
          valuePath: 'profileProps.info.first_name',
        }),
        new Input({
          labelClassName: 'form__row_name',
          className: 'form__row_value form__input form__input_align_right',
          disabled: true,
          label: 'Фамилия',
          name: 'Фамилия',
          type: 'text',
          value: '',
          valuePath: 'profileProps.info.second_name',
        }),
        new Input({
          labelClassName: 'form__row_name',
          className: 'form__row_value form__input form__input_align_right',
          disabled: true,
          label: 'Имя в чате',
          name: 'Имя в чате',
          type: 'text',
          value: '',
          valuePath: 'profileProps.info.display_name',
        }),
        new Input({
          labelClassName: 'form__row_name',
          className: 'form__row_value form__input form__input_align_right',
          disabled: true,
          label: 'Телефон',
          name: 'Телефон',
          type: 'tel',
          value: '',
          valuePath: 'profileProps.info.phone',
        }),
      ],
    }),
    new Form({
      className: 'profile_button_form w100proc',
      form_name: 'form',
      children: [
        new Link({
          className: 'form__pink_link',
          href: '/change_profile',
          text: 'Изменить данные',
        }),
        new Link({
          className: 'form__pink_link',
          href: '/change_password',
          text: 'Изменить пароль',
        }),
        new Link({ className: 'form__red_link', href: '/', text: 'Выйти' }),
      ],
    }),
  ],
  events: [
    {
      selector: "[href='/chat']",
      name: 'click',
      handler: (event, Block) => {
        event.preventDefault();
        Block.router.go('/chat');
      },
    },
    {
      selector: "[href='/change_photo']",
      name: 'click',
      handler: (event, Block) => {
        event.preventDefault();
        Block.router.go('/change_photo');
      },
    },
    {
      selector: "[href='/change_profile']",
      name: 'click',
      handler: (event, Block) => {
        event.preventDefault();
        Block.router.go('/change_profile');
      },
    },
    {
      selector: "[href='/change_password']",
      name: 'click',
      handler: (event, Block) => {
        event.preventDefault();
        Block.router.go('/change_password');
      },
    },
    {
      selector: "[href='/']",
      name: 'click',
      handler: (event, Block) => {
        event.preventDefault();
        ProfileController.logout({
          success: () => {
            Block.store.clear();
            Block.router.go('/');
          },
        });
      },
    },
  ],
};
