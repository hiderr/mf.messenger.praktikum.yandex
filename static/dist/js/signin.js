import { Form } from "../components/Form/index.js";
import { SigninPage } from "../blocks/Signin/index.js";
import { Button } from "../components/Button/index.js";
(() => {
    const signinPage = new SigninPage({
        title: "Регистрация",
        link_text: "Войти"
    });
    signinPage.render(".wrapper");
    const formProps = {
        form_valid: true,
        form_disabled: false,
        form_name: "form",
        form_rows: [
            { label: "Почта", type: "email", name: "email", value: "pochta", placeholder: "Почта" },
            { label: "Логин", type: "text", name: "login", value: "ivanivanov@", placeholder: "Логин" },
            { label: "Имя", type: "text", name: "first_name", value: "Иван", placeholder: "Имя" },
            { label: "Фамилия", type: "text", name: "second_name", value: "Иванов", placeholder: "Фамилия" },
            { label: "Телефон", type: "tel", name: "phone", value: "+7 (909) 967 30 30", placeholder: "Телефон" },
            { label: "Пароль", type: "password", name: "password", value: "123456789", placeholder: "Пароль" },
            { label: "Пароль (ещё раз)", type: "password", name: "password_repeat", value: "123456789", placeholder: "Пароль (ещё раз)" },
        ],
        row_template: `<label class="login_form_label">{{label}}</label>
                <input type="{{type}}" class="form__input" name="{{name}}" value="{{value}}" placeholder="{{placeholder}}">`,
        events: [
            {
                name: "input", handler: (...args) => {
                    const el = args[0];
                    if (el.tagName === "INPUT") {
                        el["previousElementSibling"].hidden = el["value"] === "";
                    }
                }
            }, {
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
    form.render(".login_form");
    const button = new Button({
        className: "link_button",
        text: "Зарегистрироваться",
        link: "chat.html",
        events: [
            {
                name: "click", handler: (...args) => {
                    const e = args[1], eventBus = form.eventBus();
                    eventBus.emit("validate_form_on_submit", form.element, formProps, eventBus);
                    if (formProps.form_valid === false) {
                        e.preventDefault();
                        return e;
                    }
                }
            }
        ]
    });
    button.render(".button_wrapper");
})();
//# sourceMappingURL=signin.js.map