import { Avatar } from '../../components/Avatar/index';
import { Button } from '../../components/Button/index';
import { Form } from '../../components/Form/index';
import { Input } from '../../components/Input/index';
import { PropsForm } from '../../components/Form/form.props';
import { ProfileController } from '../../controllers/ProfileController';

export const PropsChangePassword = {
  className: 'profile__form',
  back_button_link: '',
  children: [
    new Avatar({
      url: '',
      urlPath: 'profileProps.info.avatar',
      tooltip: 'Поменять аватар',
      title: '',
      titlePath: 'profileProps.info.first_name',
    }),
    new Form(
      Object.assign(PropsForm, {
        children: [
          new Input({
            labelClassName: 'form__row_name',
            className: 'form__row_value form__input form__input_align_right',
            label: 'Старый пароль',
            type: 'password',
            name: 'oldPassword',
            value: '',
          }),
          new Input({
            labelClassName: 'form__row_name',
            className: 'form__row_value form__input form__input_align_right',
            label: 'Новый пароль',
            type: 'password',
            name: 'newPassword',
            value: '',
          }),
          new Input({
            labelClassName: 'form__row_name',
            className: 'form__row_value form__input form__input_align_right',
            label: 'Повторите новый пароль',
            type: 'password',
            name: 'newPasswordRepeat',
            value: '',
          }),
        ],
      }),
    ),
    new Button({
      link: '/profile',
      text: 'Сохранить',
      className: 'link_button',
    }),
  ],
  events: [
    {
      selector: '.back_button',
      name: 'click',
      handler: (event, Block) => {
        event.preventDefault();
        Block.router.go('/profile');
      },
    },
    {
      selector: "[href='/profile']",
      name: 'click',
      handler: (event, Block) => {
        event.preventDefault();
        if (Block.validation.validateFormOnSubmit()) {
          ProfileController.updatePassword({
            success: () => {
              Block.router.go('/profile');
            },
          });
        }
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
  ],
};
