import Form from "../components/Form/index.js";
import SigninPage from "../blocks/Signin/index.js";
import Button from "../components/Button/index.js";
import render from "../utils/renderDOM.js";

(() => {
    const context = {
        title: "Регистрация",
        link_text: "Войти"
    };

    const loginPage = new SigninPage(context);
    render(".wrapper", loginPage);

    const formContext = {
        form_valid: null,
        form_rows: [
            {label: "Почта", type: "email", name: "email", value: "pochta", placeholder: "Почта"},
            {label: "Логин", type: "text", name: "login", value: "ivanivanov@", placeholder: "Логин"},
            {label: "Имя", type: "text", name: "first_name", value: "Иван", placeholder: "Имя"},
            {label: "Фамилия", type: "text", name: "second_name", value: "Иванов", placeholder: "Фамилия"},
            {label: "Телефон", type: "tel", name: "phone", value: "+7 (909) 967 30 30", placeholder: "Телефон"},
            {label: "Пароль", type: "password", name: "password", value: "123456789", placeholder: "Пароль"},
            {label: "Пароль (ещё раз)", type: "password", name: "password_repeat", value: "123456789", placeholder: "Пароль (ещё раз)"},
        ],
        row_template: `<label class="login_form_label">{{label}}</label>
                <input type="{{type}}" class="form__input" name="{{name}}" value="{{value}}" placeholder="{{placeholder}}">`,
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

                        if (el.name === "login" && el.value.match(new RegExp("[^\\w\\s]", "gi"))) {
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
        text: "Зарегистрироваться",
        link: "chat.html",
        events: [
            {
                name: "click", handler: (...args) => {
                    const e = args[1],
                        eventBus = form.eventBus();
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
})();