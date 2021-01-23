import {ProfilePage} from "../blocks/Profile/index.js";
import {Form} from "../components/Form/index.js";
import {Button} from "../components/Button/index.js";

(() => {
    const profilePage = new ProfilePage({
        avatar_tooltip: "Поменять аватар"
    });
    profilePage.render(".wrapper");

    const formProps = {
        form_valid: true,
        form_name: "form",
        form_disabled: false,
        form_rows: [
            {label: "Почта", type: "email", name: "email", value: "pochta"},
            {label: "Логин", type: "text", name: "login", value: "ivanivanov@"},
            {label: "Имя", type: "text", name: "first_name", value: "Иван"},
            {label: "Фамилия", type: "text", name: "last_name", value: "Иванов"},
            {label: "Имя в чате", type: "text", name: "nickname", value: "Иван"},
            {label: "Телефон", type: "tel", name: "phone", value: "+7 (909) 967 30 30"},
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