import {LoginPage} from "../blocks/Login/index.js";
import {Form} from "../components/Form/index.js";
import {Button} from "../components/Button/index.js";
import {Input} from "../components/Input/index.js";
import {Link} from "../components/Link/index.js";
import {Title} from "../components/Title/index.js";
import {Wrapper} from "../components/Wrapper/index.js";

(() => {
    const form = new Form({
        className: "login_form",
        form_name: "form",
        form_valid: true,
        children: [
            new Input({labelClassName: "login_form_label", className: "form__input", name: "login", type: "text", label: "Логин", value: "ivanivanov", placeholder: "Логин"}),
            new Input({labelClassName: "login_form_label", className: "form__input", name: "password", type: "password", label: "Пароль", value: "", placeholder: "Пароль"}),
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
    });

    const loginPage = new LoginPage({
        children: [
            new Title({
                className: "login_box_title",
                text: "Вход"
            }),
            form,
            new Wrapper({
                className: "form_buttons",
                children: [
                    new Button({
                        className: "link_button",
                        text: "Авторизоваться",
                        link: "chat.html",
                        events: [
                            {
                                name: "click", handler: (...args) => {
                                    /*const e = args[1],
                                        eventBus = form.eventBus();
                                    eventBus.emit("validate_form_on_submit", form.element, formProps, eventBus);
                                    if (formProps.form_valid === false) {
                                        e.preventDefault();
                                        return e;
                                    }*/
                                }
                            }
                        ]
                    }),
                    new Link({
                        className: "text_link",
                        href: "signin.html",
                        text: "Нет аккаунта?"
                    })
                ]
            })
        ]
    });
    let root = document.getElementById('root');
    root.innerHTML = loginPage.render();
})();