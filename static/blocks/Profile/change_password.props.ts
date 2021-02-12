import {Avatar} from "../../components/Avatar/index.js";
import {Button} from "../../components/Button/index.js";
import {Form} from "../../components/Form/index.js";
import {Input} from "../../components/Input/index.js";
import {PropsForm} from "../../components/Form/form.props.js";
import {ProfileController} from "../../controllers/ProfileController.js";

export const PropsChangePassword = {
    back_button_link: "/chat",
    children: [
        new Avatar({
            url: "",
            urlPath: "profileProps.info.avatar",
            tooltip: "Поменять аватар",
            title: "",
            titlePath: "profileProps.info.first_name"
        }),
        new Form(Object.assign(PropsForm, {
            children: [
                new Input({
                    labelClassName: "form__row_name",
                    className: "form__row_value form__input form__input_align_right",
                    label: "Старый пароль",
                    type: "password",
                    name: "oldPassword",
                    value: "123456789"
                }),
                new Input({
                    labelClassName: "form__row_name",
                    className: "form__row_value form__input form__input_align_right",
                    label: "Новый пароль",
                    type: "password",
                    name: "newPassword",
                    value: "LikeABo$$"
                }),
                new Input({
                    labelClassName: "form__row_name",
                    className: "form__row_value form__input form__input_align_right",
                    label: "Повторите новый пароль",
                    type: "password",
                    name: "newPasswordRepeat",
                    value: "LikeABo$$"
                }),
            ]
        })),
        new Button({
            link: "/profile",
            text: "Сохранить",
            className: "link_button"
        })
    ],
    events: [
        {
            selector: "[href='/profile']", name: "click", handler: (event, Block) => {
                event.preventDefault();
                if (Block.validation.validateFormOnSubmit()) {
                    ProfileController.updatePassword({
                        success: () => {
                            Block.router.go("/profile")
                        }
                    });
                }
            }
        },
    ]
};