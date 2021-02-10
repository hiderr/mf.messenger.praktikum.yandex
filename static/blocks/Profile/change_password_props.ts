import {Avatar} from "../../components/Avatar/index.js";
import {Button} from "../../components/Button/index.js";
import {Form} from "../../components/Form/index.js";
import {Input} from "../../components/Input/index.js";
import {PropsForm} from "../../components/Form/props.js";

export const PropsChangePassword = {
    back_button_link: "/profile",
    children: [
        new Avatar({
            tooltip: "Поменять аватар",
            title: ""
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
                    value: ""
                }),
                new Input({
                    labelClassName: "form__row_name",
                    className: "form__row_value form__input form__input_align_right",
                    label: "Повторите новый пароль",
                    type: "password",
                    name: "newPasswordRepeat",
                    value: ""
                }),
            ]
        })),
        new Button({
            link: "profile.html",
            text: "Сохранить",
            className: "link_button",
            events: [
                {
                    name: "click", handler: (...args) => {
                        /*const e = args[1],
                            eventBus = form.eventBus();
                        eventBus.emit("validate_form_on_submit", form.element, formProps, eventBus);
                        if (formProps.form_valid === false) {
                            e.preventDefault();
                            return e;
                        }*/
                    }
                }
            ]
        })
    ]
};