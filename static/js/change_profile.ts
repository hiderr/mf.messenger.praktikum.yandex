import ProfilePage from "../blocks/Profile/index.js";
import Form from "../components/Form/index.js";
import Button from "../components/Button/index.js";
import render from "../utils/renderDOM.js";

document.addEventListener("DOMContentLoaded", () => {
    const context = {
        avatar_tooltip: "Поменять аватар"
    };
    const profilePage = new ProfilePage(context);
    render(".wrapper", profilePage);

    const formContext = {
        form_valid: null,
        form_rows: [
            {label: "Почта", type: "email", value: "pochta"},
            {label: "Логин", type: "text", name: "login", value: "ivanivanov@"},
            {label: "Имя", type: "text", value: "Иван"},
            {label: "Фамилия", type: "text", value: "Иванов"},
            {label: "Имя в чате", type: "text", value: "Иван"},
            {label: "Телефон", type: "tel", value: "+7 (909) 967 30 30"},
        ],
        row_template: `<p class="form__row_name">{{label}}</p>
                        <input class="form__row_value form__input form__input_align_right" type="{{type}}" name="{{name}}" value="{{value}}" {{#if ../form_disabled}}disabled{{/if}}/>`,
        events: [
            {
                name: "validate_form_input", handler: (el) => {
                    if (el.tagName === "INPUT") {
                        const error_message = document.createElement("p");
                        error_message.classList.add("error_message");

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