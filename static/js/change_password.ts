import ProfilePage from "../blocks/Profile/index.js";
import Form from "../components/Form/index.js";
import Button from "../components/Button/index.js";
import render from "../utils/renderDOM.js";

document.addEventListener("DOMContentLoaded", () => {
    const context = {
        title: "Регистрация",
        avatar_tooltip: "Поменять аватар"
    };

    const formContext = {
        form_valid: null,
        form_rows: [
            {label: "Старый пароль", type: "password", name: "oldPassword", value: "123456789"},
            {label: "Новый пароль", type: "password", name: "newPassword", value: ""},
            {label: "Повторите новый пароль", type: "password", name: "newPasswordRepeat", value: ""},
        ],
        row_template: `<label class="form__row_name">{{label}}</label>
                    <input class="form__input" type="{{type}}" name="{{name}}" value="{{value}}"/>`,
        events: [
            {
                name: "validate_form_input", handler: (el) => {
                    if (el.tagName === "INPUT") {
                        const error_message = document.createElement("p");
                        error_message.classList.add("error_message");

                        if (el.value === "") {
                            error_message.textContent = "Поле не может быть пустым";
                            el.parentElement.append(error_message);
                            return;
                        }

                        if (el.type === "email" && !el.value.match(new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$", "gi"))) {
                            error_message.textContent = "Неккоректный формат email";
                            el.parentElement.append(error_message);
                        }

                        if (el.name === "login" && el.value.match(new RegExp("[^\\w\\s]", "gi"))) {
                            error_message.textContent = "Нельзя использовать специальные символы";
                            el.parentElement.append(error_message);
                        }

                        if (el.name === "newPasswordRepeat" && el.value !== document.querySelector("[name='newPassword']")["value"]){
                            error_message.textContent = "Пароли не совпадают";
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

    const profilePage = new ProfilePage(context);
    render(".wrapper", profilePage);

    const form = new Form(formContext);
    render(".middle", form);

    const button = new Button({
        className: "link_button",
        text: "Сохранить",
        link: "profile.html",
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
    });
    render(".footer", button);
});