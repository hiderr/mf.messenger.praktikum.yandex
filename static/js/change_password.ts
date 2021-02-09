import {ProfilePage} from "../blocks/Profile/index.js";
import {Form} from "../components/Form/index.js";
import {Button} from "../components/Button/index.js";
import {Input} from "../components/Input/index.js";
import {Avatar} from "../components/Avatar/index.js";

(() => {
    const formProps = {
        className: "w100proc",
        form_valid: true,
        form_name: "form",
        children: [
            new Input({labelClassName: "form__row_name", className: "form__row_value form__input form__input_align_right", label: "Старый пароль", type: "password", name: "oldPassword", value: "123456789"}),
            new Input({labelClassName: "form__row_name", className: "form__row_value form__input form__input_align_right", label: "Новый пароль", type: "password", name: "newPassword", value: ""}),
            new Input({labelClassName: "form__row_name", className: "form__row_value form__input form__input_align_right", label: "Повторите новый пароль", type: "password", name: "newPasswordRepeat", value: ""}),
        ],
        /*row_template: `<label class="form__row_name">{{label}}</label>
                    <input class="form__input" type="{{type}}" name="{{name}}" value="{{value}}"/>`,*/
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

    const profilePage = new ProfilePage({
        children: [
            new Avatar({
                tooltip: "Поменять аватар",
                title: ""
            }),
            form,
            new Button({
                link: "profile.html",
                text: "Сохранить",
                className: "link_button",
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
            })
        ]
    });
    let root = document.getElementById('root');
    root.innerHTML = profilePage.render();
})();