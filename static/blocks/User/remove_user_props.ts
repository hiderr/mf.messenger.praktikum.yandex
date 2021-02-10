import {Popup} from "../../components/Popup/index.js";
import {Title} from "../../components/Title/index.js";
import {Form} from "../../components/Form/index.js";
import {Input} from "../../components/Input/index.js";
import {Button} from "../../components/Button/index.js";
import {ChatPage} from "../Chat/index.js";
import {PropsChat} from "../Chat/props.js";

export const PropsRemoveUser = {
    children: [
        new Popup({
            children: [
                new Title({
                    text: "Удалить пользователя",
                    className: "popup__header"
                }),
                new Form({
                    form_valid: true,
                    form_name: "form",
                    children: [
                        new Input({labelClassName: "login_form_label", className: "form__input", label: "Логин", type: "text", name: "login", value: "ivanivanov"})
                    ]
                }),
                new Button({
                    className: "link_button",
                    text: "Удалить",
                    link: "chat.html"
                })
            ]
        }),
        new ChatPage(PropsChat)
    ],
    events: [
        {
            selector: "button", name: "click", handler: (...args) => {
                const [event, Block] = args;
                event.preventDefault();
                Block.router.go("/chat");
            }
        },
    ]
};