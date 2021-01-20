import LoginPage from "../blocks/Login/index.js";
import Form from "../components/Form/index.js";
import Button from "../components/Button/index.js";
import render from "../utils/renderDOM.js";
document.addEventListener("DOMContentLoaded", () => {
    const context = {
        title: "Вход",
        link_text: "Нет аккаунта?",
    };
    const loginPage = new LoginPage(context);
    render(".wrapper", loginPage);
    const formContext = {
        form_valid: null,
        form_rows: [
            { name: "login", type: "text", label: "Логин", value: "ivanivanov", placeholder: "Логин" },
            { name: "password", type: "password", label: "Пароль", value: "", placeholder: "Пароль" },
        ],
        row_template: `<div class="form__input_wrapper"><label class="login_form_label">{{label}}</label>
                    <input class="form__input" type="{{type}}" name="{{name}}" value="{{value}}" placeholder="{{placeholder}}"></div>`,
        events: [
            {
                name: "validate_form_input", handler: (el) => {
                    if (el.tagName === "INPUT") {
                        const error_message = document.createElement("p");
                        error_message.classList.add("error_message", "error_message_small");
                        if (el.value === "") {
                            error_message.textContent = "Поле не может быть пустым";
                            el.parentElement.append(error_message);
                        }
                        if (el.type === "email" && !el.value.match(new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$", "gi"))) {
                            error_message.textContent = "Неккоректный формат email";
                            el.parentElement.append(error_message);
                        }
                        if (el.type === "text" && el.value.match(new RegExp("[^\\w\\s]", "gi"))) {
                            error_message.textContent = "Нельзя использовать специальные символы";
                            el.parentElement.append(error_message);
                        }
                    }
                }
            },
            {
                name: "clear_error_message", handler: (el) => {
                    if (el.tagName === "INPUT") {
                        const inputWrapper = el.parentElement;
                        if (inputWrapper.querySelector(".error_message")) {
                            inputWrapper.removeChild(inputWrapper.querySelector(".error_message"));
                        }
                    }
                }
            },
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
            },
            {
                name: "validate_form", handler: (el, context, eventBus) => {
                    const inputs = el.querySelectorAll("input").forEach(item => {
                        eventBus.emit("focus", item);
                        eventBus.emit("blur", item);
                    });
                    const error_message = el.querySelector(".error_message");
                    context.form_valid = !error_message;
                }
            }
        ]
    };
    const form = new Form(formContext);
    render(".login_form", form);
    const buttonContext = {
        className: "link_button",
        text: "Авторизоваться",
        link: "chat.html",
        events: [
            {
                name: "click", handler: (...args) => {
                    const e = args[1], eventBus = form.eventBus();
                    eventBus.emit("validate_form", form.element, formContext, eventBus);
                    if (formContext.form_valid === false) {
                        e.preventDefault();
                        return e;
                    }
                }
            }
        ]
    };
    const button = new Button(buttonContext);
    render(".button_wrapper", button);
});
//# sourceMappingURL=login.js.map