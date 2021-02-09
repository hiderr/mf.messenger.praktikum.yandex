import {ProfilePage} from "../blocks/Profile/index.js";
import {Form} from "../components/Form/index.js";
import {Button} from "../components/Button/index.js";
import {Avatar} from "../components/Avatar/index.js";
import {Input} from "../components/Input/index.js";

(() => {
    const formProps = {
        className: "w100proc",
        form_valid: true,
        form_name: "form",
        form_disabled: false,
        children: [
            new Input({ labelClassName: "form__row_name", className: "form__row_value form__input form__input_align_right", label: "Почта", type: "email", name: "email", value: "pochta"}),
            new Input({ labelClassName: "form__row_name", className: "form__row_value form__input form__input_align_right", label: "Логин", type: "text", name: "login", value: "ivanivanov@"}),
            new Input({ labelClassName: "form__row_name", className: "form__row_value form__input form__input_align_right", label: "Имя", type: "text", name: "first_name", value: "Иван"}),
            new Input({ labelClassName: "form__row_name", className: "form__row_value form__input form__input_align_right", label: "Фамилия", type: "text", name: "last_name", value: "Иванов"}),
            new Input({ labelClassName: "form__row_name", className: "form__row_value form__input form__input_align_right", label: "Имя в чате", type: "text", name: "nickname", value: "Иван"}),
            new Input({ labelClassName: "form__row_name", className: "form__row_value form__input form__input_align_right", label: "Телефон", type: "tel", name: "phone", value: "+7 (909) 967 30 30"}),
        ],
        row_template: `<p class="form__row_name">{{label}}</p>
                        <input class="form__row_value form__input form__input_align_right" type="{{type}}" name="{{name}}" value="{{value}}" {{#if ../form_disabled}}disabled{{/if}}/>`,
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
            })
        ]
    });

    let root = document.getElementById('root');
    root.innerHTML = profilePage.render();
})();