import {Avatar} from "../../components/Avatar/index.js";
import {Form} from "../../components/Form/index.js";
import {Input} from "../../components/Input/index.js";
import {Link} from "../../components/Link/index.js";
import {ProfileController} from "./controller.js";

export const PropsProfile = {
    className: "w100proc",
    back_button_link: "/chat",
    children: [
        new Avatar({
            tooltip: "Поменять аватар",
            title: "Иван"
        }),
        new Form({
            className: "profile_form w100proc",
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
            ]
        }),
        new Form({
            className: "profile_button_form w100proc",
            form_name: "form",
            children: [
                new Link({className: "form__pink_link", href: "/change_profile", text: "Изменить данные"}),
                new Link({className: "form__pink_link", href: "/change_password", text: "Изменить пароль"}),
                new Link({className: "form__red_link", href: "/", text: "Выйти"}),
            ]
        })
    ],
    events: [
        {
            selector: "[href='/chat']", name: "click", handler: (event, Block) => {
                event.preventDefault();
                Block.router.go("/chat");
            }
        },
        {
            selector: "[href='/change_photo']", name: "click", handler: (event, Block) => {
                event.preventDefault();
                Block.router.go("/change_photo");
            }
        },
        {
            selector: "[href='/change_profile']", name: "click", handler: (event, Block) => {
                event.preventDefault();
                Block.router.go("/change_profile");
            }
        },
        {
            selector: "[href='/change_password']", name: "click", handler: (event, Block) => {
                event.preventDefault();
                Block.router.go("/change_password");
            }
        },
        {
            selector: "[href='/']", name: "click", handler: (event, Block) => {
                event.preventDefault();
                ProfileController.logout({
                    success: () => {
                        Block.router.go("/");
                    }
                });
            }
        }
    ]
};