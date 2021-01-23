import {ProfilePage} from "../blocks/Profile/index.js";
import {Form} from "../components/Form/index.js";
import {Button} from "../components/Button/index.js";

(() => {
    const profilePage = new ProfilePage({
        title: "Регистрация",
        avatar_tooltip: "Поменять аватар"
    });
    profilePage.render(".wrapper");

    const formProps = {
        form_valid: true,
        form_disabled: false,
        form_name: "form",
        form_rows: [
            {label: "Старый пароль", type: "password", name: "oldPassword", value: "123456789"},
            {label: "Новый пароль", type: "password", name: "newPassword", value: ""},
            {label: "Повторите новый пароль", type: "password", name: "newPasswordRepeat", value: ""},
        ],
        row_template: `<label class="form__row_name">{{label}}</label>
                    <input class="form__input" type="{{type}}" name="{{name}}" value="{{value}}"/>`,
        events: [
            {
                name: "blur", handler: (...args) => {
                    const el = args[0];
                    form.eventBus().emit("validate_form_input", el);
                }
            },
            {
                name: "focus", handler: (...args) => {
                    const el = args[0];
                    form.eventBus().emit("clear_error_message", el);
                }
            }
        ]
    };

    const form = new Form(formProps);
    form.render(".middle");

    const button = new Button({
        className: "link_button",
        text: "Сохранить",
        link: "profile.html",
        events: [
            {
                name: "click", handler: (...args) => {
                    const e = args[1],
                        eventBus = form.eventBus();
                    eventBus.emit("validate_form_on_submit", form.element, formProps, eventBus);
                    if (formProps.form_valid === false) {
                        e.preventDefault();
                        return e;
                    }
                }
            }
        ]
    });
    button.render(".footer");
})();