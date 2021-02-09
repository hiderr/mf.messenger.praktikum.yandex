import {Form} from "../components/Form/index.js";
import {SigninPage} from "../blocks/Signin/index.js";
import {Button} from "../components/Button/index.js";
import {Title} from "../components/Title/index.js";
import {Input} from "../components/Input/index.js";
import {Wrapper} from "../components/Wrapper/index.js";
import {Link} from "../components/Link/index.js";

(() => {
    const formProps = {
        className: "login_form",
        form_valid: true,
        form_disabled: false,
        form_name: "form",
        children: [
            new Input({labelClassName: "login_form_label", className: "form__input", label: "Почта", type: "email", name: "email", value: "pochta", placeholder: "Почта"}),
            new Input({labelClassName: "login_form_label", className: "form__input", label: "Логин", type: "text", name: "login", value: "ivanivanov@", placeholder: "Логин"}),
            new Input({labelClassName: "login_form_label", className: "form__input", label: "Имя", type: "text", name: "first_name", value: "Иван", placeholder: "Имя"}),
            new Input({labelClassName: "login_form_label", className: "form__input", label: "Фамилия", type: "text", name: "second_name", value: "Иванов", placeholder: "Фамилия"}),
            new Input({labelClassName: "login_form_label", className: "form__input", label: "Телефон", type: "tel", name: "phone", value: "+7 (909) 967 30 30", placeholder: "Телефон"}),
            new Input({labelClassName: "login_form_label", className: "form__input", label: "Пароль", type: "password", name: "password", value: "123456789", placeholder: "Пароль"}),
            new Input({labelClassName: "login_form_label", className: "form__input", label: "Пароль (ещё раз)", type: "password", name: "password_repeat", value: "123456789", placeholder: "Пароль (ещё раз)"}),
        ],
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

    const signinPage = new SigninPage({
        children: [
            new Title({
                className: "login_box_title",
                text: "Регистрация"
            }),
            form,
            new Wrapper({
                className: "form_buttons",
                children: [
                    new Button({
                        className: "link_button",
                        text: "Зарегистрироваться",
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
                    }),
                    new Link({
                        className: "text_link",
                        href: "index.html",
                        text: "Войти"
                    })
                ]
            })
        ]
    });
    let root = document.getElementById('root');
    root.innerHTML = signinPage.render();
})();