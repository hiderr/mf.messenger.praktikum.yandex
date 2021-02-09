import {ProfilePage} from "../blocks/Profile/index.js";
import {Button} from "../components/Button/index.js";
import {Popup} from "../components/Popup/index.js";
import {Wrapper} from "../components/Wrapper/index.js";
import {Avatar} from "../components/Avatar/index.js";
import {Form} from "../components/Form/index.js";
import {Input} from "../components/Input/index.js";
import {Link} from "../components/Link/index.js";
import {Title} from "../components/Title/index.js";
import {Message} from "../components/Message/index.js";

(() => {
    const propsTitle = {
        className: "popup__header",
        text: "Загрузите файл"
    };

    const propsLink = {
        text: "Выбрать файл на компьютере",
        href: "change_photo_uploaded.html",
        className: "popup__link"
    };

    const propsButton = {
        className: "link_button",
        link: "change_photo_no_photo_picked.html",
        text: 'Поменять'
    };

    const propsMessage = {
        className: "error_message footer_error",
        text: ""
    };

    if (window.location.pathname === "/change_photo.html") {
        propsTitle.text = "Файл загружен";
    }
    if (window.location.pathname === "/change_photo_uploaded.html") {
        propsTitle.text = "Файл загружен";
        propsLink.className = "popup__uploaded_link";
        propsLink.text = "pic.jpg";
        propsButton.link = "change_photo_error.html";
    }
    if (window.location.pathname === "/change_photo_error.html") {
        propsMessage.text = "Ошибка, попробуйте ещё раз";
        propsLink.className = "popup__link";
    }
    if (window.location.pathname === "/change_photo_no_photo_picked.html") {
        propsMessage.text = "Нужно выбрать файл";
    }

    const ChangePhoto = new Wrapper({
        className: "",
        children: [
            new Popup({
                children: [
                    new Title(propsTitle),
                    new Link(propsLink),
                    new Wrapper({
                        className: "popup__footer align_center",
                        children: [
                            new Button(propsButton),
                            new Message(propsMessage)
                        ]
                    })
                ]
            }),
            new ProfilePage({
                children: [
                    new Avatar({
                        tooltip: "Поменять аватар",
                        title: "Иван"
                    }),
                    new Form({
                        className: "w100proc",
                        form_valid: true,
                        form_name: "form",
                        children: [
                            new Input({
                                labelClassName: "form__row_name",
                                className: "form__row_value form__input form__input_align_right",
                                disabled: true,
                                label: "Почта",
                                name: "Почта",
                                type: "email",
                                value: "pochta@yandex.ru"
                            }),
                            new Input({
                                labelClassName: "form__row_name",
                                className: "form__row_value form__input form__input_align_right",
                                disabled: true,
                                label: "Логин",
                                name: "Логин",
                                type: "text",
                                value: "ivanivanov"
                            }),
                            new Input({
                                labelClassName: "form__row_name",
                                className: "form__row_value form__input form__input_align_right",
                                disabled: true,
                                label: "Имя",
                                name: "Имя",
                                type: "text",
                                value: "Иван"
                            }),
                            new Input({
                                labelClassName: "form__row_name",
                                className: "form__row_value form__input form__input_align_right",
                                disabled: true,
                                label: "Фамилия",
                                name: "Фамилия",
                                type: "text",
                                value: "Иванов"
                            }),
                            new Input({
                                labelClassName: "form__row_name",
                                className: "form__row_value form__input form__input_align_right",
                                disabled: true,
                                label: "Имя в чате",
                                name: "Имя в чате",
                                type: "text",
                                value: "Иван"
                            }),
                            new Input({
                                labelClassName: "form__row_name",
                                className: "form__row_value form__input form__input_align_right",
                                disabled: true,
                                label: "Телефон",
                                name: "Телефон",
                                type: "tel",
                                value: "+7 (909) 967 30 30"
                            }),
                        ],
                        events: []
                    }),
                    new Form({
                        className: "w100proc",
                        form_valid: true,
                        form_name: "form",
                        children: [
                            new Link({
                                className: "form__pink_link",
                                href: "change_profile.html",
                                text: "Изменить данные"
                            }),
                            new Link({
                                className: "form__pink_link",
                                href: "change_password.html",
                                text: "Изменить пароль"
                            }),
                            new Link({className: "form__red_link", href: "index.html", text: "Выйти"}),
                        ],
                        events: []
                    })
                ]
            })
        ]
    });

    let root = document.getElementById('root');
    root.innerHTML = ChangePhoto.render();
})();