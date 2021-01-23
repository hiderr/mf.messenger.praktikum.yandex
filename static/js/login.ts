import {LoginPage} from "../blocks/Login/index.js";
import {Form} from "../components/Form/index.js";
import {Button} from "../components/Button/index.js";

(() => {
    const loginPage = new LoginPage({
        title: "Вход",
        link_text: "Нет аккаунта?",
    });
    loginPage.render(".wrapper");

    const formProps = {
        form_valid: true,
        form_disabled: false,
        form_name: "form",
        form_rows: [
            {name: "login", type: "text", label: "Логин", value: "ivanivanov", placeholder: "Логин"},
            {name: "password", type: "password", label: "Пароль", value: "", placeholder: "Пароль"},
        ],
        row_template: `<div class="form__input_wrapper"><label class="login_form_label">{{label}}</label>
                    <input class="form__input" type="{{type}}" name="{{name}}" value="{{value}}" placeholder="{{placeholder}}"></div>`,
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
        text: "Авторизоваться",
        link: "chat.html",
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
    button.render(".button_wrapper");
})();