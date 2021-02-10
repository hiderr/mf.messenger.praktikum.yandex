import {Form} from "../../components/Form/index.js";
import {Input} from "../../components/Input/index.js";
import {Title} from "../../components/Title/index.js";
import {Wrapper} from "../../components/Wrapper/index.js";
import {Button} from "../../components/Button/index.js";
import {Link} from "../../components/Link/index.js";


export const PropsSignin = {
    children: [
        new Title({
            className: "login_box_title",
            text: "Регистрация"
        }),
        new Form({
            className: "login_form",
            form_valid: true,
            form_name: "form",
            children: [
                new Input({
                    labelClassName: "login_form_label",
                    className: "form__input pink_bottom",
                    label: "Почта",
                    type: "email",
                    name: "email",
                    value: "pochta",
                    placeholder: "Почта"
                }),
                new Input({
                    labelClassName: "login_form_label",
                    className: "form__input pink_bottom",
                    label: "Логин",
                    type: "text",
                    name: "login",
                    value: "ivanivanov@",
                    placeholder: "Логин"
                }),
                new Input({
                    labelClassName: "login_form_label",
                    className: "form__input pink_bottom",
                    label: "Имя",
                    type: "text",
                    name: "first_name",
                    value: "Иван",
                    placeholder: "Имя"
                }),
                new Input({
                    labelClassName: "login_form_label",
                    className: "form__input pink_bottom",
                    label: "Фамилия",
                    type: "text",
                    name: "second_name",
                    value: "Иванов",
                    placeholder: "Фамилия"
                }),
                new Input({
                    labelClassName: "login_form_label",
                    className: "form__input pink_bottom",
                    label: "Телефон",
                    type: "tel",
                    name: "phone",
                    value: "+7 (909) 967 30 30",
                    placeholder: "Телефон"
                }),
                new Input({
                    labelClassName: "login_form_label",
                    className: "form__input pink_bottom",
                    label: "Пароль",
                    type: "password",
                    name: "password",
                    value: "123456789",
                    placeholder: "Пароль"
                }),
                new Input({
                    labelClassName: "login_form_label",
                    className: "form__input pink_bottom",
                    label: "Пароль (ещё раз)",
                    type: "password",
                    name: "password_repeat",
                    value: "123456789",
                    placeholder: "Пароль (ещё раз)"
                }),
            ]
        }),
        new Wrapper({
            className: "form_buttons",
            children: [
                new Button({
                    className: "link_button",
                    text: "Зарегистрироваться",
                    link: "/chat",
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
                    href: "/",
                    text: "Войти"
                })
            ]
        })
    ],
    events: [
        {
            selector: "form input", name: "input", handler: (event) => {
                const el = event.target;
                if (el.tagName === "INPUT") {
                    el["previousElementSibling"].hidden = el["value"] === "";
                }
            }
        },
        {
            selector: "button", name: "click", handler: (...args) => {
                const [event, Block] = args;
                event.preventDefault();
                if (Block.validation.validateFormOnSubmit()) {
                    Block.router.go("/chat");
                }
            }
        },
        {
            selector: ".text_link", name: "click", handler: (...args) => {
                const [event, Block] = args;
                event.preventDefault();
                Block.router.go("/");
            }
        }
    ]
};
