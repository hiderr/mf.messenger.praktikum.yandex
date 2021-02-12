import {Popup} from "../../components/Popup/index.js";
import {Title} from "../../components/Title/index.js";
import {Form} from "../../components/Form/index.js";
import {Input} from "../../components/Input/index.js";
import {Button} from "../../components/Button/index.js";
import {ChatPage} from "./index.js";
import {PropsChat} from "./props.js";
import {ChatController} from "./controller.js";

export const PropsAddUser = {
    children: [
        new Popup({
            children: [
                new Title({
                    text: "Добавить пользователя",
                    className: "popup__header"
                }),
                new Form({
                    form_name: "form",
                    children: [
                        new Input({
                            labelClassName: "login_form_label",
                            className: "form__input",
                            label: "IDs",
                            type: "text",
                            name: "userId",
                            placeholder: "Введите id через ,",
                            value: ""
                        })
                    ]
                }),
                new Button({
                    className: "link_button",
                    text: "Добавить",
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
                if (Block.validation.validateFormOnSubmit()) {
                    if (Block.store.get("chatProps.selectedId")) {
                        ChatController.addUsers({
                            data: {
                                chatId: Block.store.get("chatProps.selectedId")
                            },
                            success: () => {
                                Block.router.go("/chat");
                            }
                        });
                    } else {
                        alert("Для добавления пользователя необходимо выделить чат в списке слева");
                        Block.router.go("/chat");
                    }
                }
            }
        },
    ]
};