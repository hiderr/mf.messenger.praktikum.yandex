import {Popup} from "../../components/Popup/index.js";
import {Title} from "../../components/Title/index.js";
import {Form} from "../../components/Form/index.js";
import {Input} from "../../components/Input/index.js";
import {Button} from "../../components/Button/index.js";
import {ChatPage} from "../Chat/index.js";
import {PropsChat} from "../Chat/props.js";
import {ChatController} from "./controller.js";

export const PropsAddChat = {
    children: [
        new Popup({
            children: [
                new Title({
                    text: "Добавить чат",
                    className: "popup__header"
                }),
                new Form({
                    form_name: "form",
                    children: [
                        new Input({labelClassName: "login_form_label", className: "form__input", label: "Имя чата", type: "text", name: "title", value: "Чат 1"})
                    ]
                }),
                new Button({
                    className: "link_button",
                    text: "Добавить",
                    link: "/chat"
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
                ChatController.createChat({
                    success: () => {
                        Block.router.go("/chat");
                    }
                });
            }
        },
    ]
};