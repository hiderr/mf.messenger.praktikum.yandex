import {Avatar} from "../../components/Avatar/index.js";
import {Button} from "../../components/Button/index.js";
import {Form} from "../../components/Form/index.js";
import {Input} from "../../components/Input/index.js";
import {PropsForm} from "../../components/Form/props.js";
import {merge} from "../../utils/merge.js";

export const PropsChangeProfile = {
    back_button_link: "profile",
    children: [
        new Avatar({
            tooltip: "Поменять аватар",
            title: ""
        }),
        new Form(merge(PropsForm, {children: [
                new Input({
                    labelClassName: "form__row_name",
                    className: "form__row_value form__input form__input_align_right",
                    label: "Почта",
                    type: "email",
                    name: "email",
                    value: "pochta"
                }),
                new Input({
                    labelClassName: "form__row_name",
                    className: "form__row_value form__input form__input_align_right",
                    label: "Логин",
                    type: "text",
                    name: "login",
                    value: "ivanivanov@"
                }),
                new Input({
                    labelClassName: "form__row_name",
                    className: "form__row_value form__input form__input_align_right",
                    label: "Имя",
                    type: "text",
                    name: "first_name",
                    value: "Иван"
                }),
                new Input({
                    labelClassName: "form__row_name",
                    className: "form__row_value form__input form__input_align_right",
                    label: "Фамилия",
                    type: "text",
                    name: "last_name",
                    value: "Иванов"
                }),
                new Input({
                    labelClassName: "form__row_name",
                    className: "form__row_value form__input form__input_align_right",
                    label: "Имя в чате",
                    type: "text",
                    name: "nickname",
                    value: "Иван"
                }),
                new Input({
                    labelClassName: "form__row_name",
                    className: "form__row_value form__input form__input_align_right",
                    label: "Телефон",
                    type: "tel",
                    name: "phone",
                    value: "+7 (909) 967 30 30"
                }),
            ]})),
        new Button({
            className: "link_button",
            text: "Сохранить",
            link: "/profile"
        })
    ],
    events: [
        {
            selector: "[href='/profile']", name: "click", handler: (event, Block) => {
                event.preventDefault();
                if (Block.validation.validateFormOnSubmit()) {
                    Block.router.go("/profile");
                }
            }
        },
        {
            selector: "[href='/change_photo']", name: "click", handler: (event, Block) => {
                event.preventDefault();
                Block.router.go("/change_photo");
            }
        }
    ]
};