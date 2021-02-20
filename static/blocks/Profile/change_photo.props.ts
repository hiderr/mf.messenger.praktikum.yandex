import { ProfilePage } from './index';
import { Button } from '../../components/Button/index';
import { Popup } from '../../components/Popup/index';
import { Wrapper } from '../../components/Wrapper/index';
import { Link } from '../../components/Link/index';
import { Title } from '../../components/Title/index';
import { Message } from '../../components/Message/index';
import { PropsProfile } from './profile.props';
import { Form } from '../../components/Form/index';
import { Input } from '../../components/Input/index';
import { ProfileController } from '../../controllers/ProfileController';

export const PropsChangePhoto = {
  className: '',
  children: [
    new Popup({
      children: [
        new Title({
          className: 'popup__header',
          text: 'Загрузите файл',
        }),
        new Wrapper({
          children: [
            new Link({
              text: 'Выбрать файл на компьютере',
              href: '',
              className: 'popup__link select_photo',
            }),
            new Form({
              form_name: 'form',
              className: 'hide avatar_form',
              children: [
                new Input({
                  className: 'hide',
                  type: 'file',
                  name: 'avatar',
                }),
              ],
            }),
            new Link({
              href: '',
              className: 'popup__uploaded_link hide',
              text: 'pic.jpg',
            }),
          ],
        }),
        new Wrapper({
          className: 'popup__footer align_center',
          children: [
            new Button({
              className: 'link_button',
              link: '/no_photo_picked',
              text: 'Поменять',
            }),
            new Message({
              className: 'error_message footer_error',
              text: '',
            }),
          ],
        }),
      ],
    }),
    new ProfilePage(PropsProfile),
  ],
  events: [
    {
      selector: '.select_photo',
      name: 'click',
      handler: (event, Block) => {
        event.preventDefault();
        const link = event.target;
        const parent = link.closest('.popup');
        const fileInput = link.closest('.popup').querySelector("[type='file']");
        const fileNameLink = parent.querySelector('.popup__uploaded_link');

        if (!fileInput.getAttribute('accept') && !fileInput.onchange) {
          fileInput.setAttribute('accept', 'image/*');
          fileInput.onchange = function () {
            const fileList = fileInput.files;
            fileNameLink.textContent = fileList.item(0).name;
            fileNameLink.classList.remove('hide');
            link.parentElement.classList.add('hide');
          };
        }
        fileInput.click();
      },
    },
    {
      selector: 'button',
      name: 'click',
      handler: (event, Block) => {
        event.preventDefault();
        const popup = event.target.closest('.popup');
        const chooseFileLink = popup.querySelector('.select_photo');
        const uploadedFileLink = popup.querySelector('.popup__uploaded_link');
        if (uploadedFileLink.classList.contains('hide')) {
          alert('Сначала необходимо выбрать файл');
        } else {
          ProfileController.uploadAvatar({
            success: () => {
              chooseFileLink.parentElement.classList.remove('hide');
              Block.router.go('/profile');
            },
          });
        }
      },
    },
  ],
};
