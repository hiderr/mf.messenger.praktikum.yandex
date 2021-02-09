import {template} from "./template.js";
import {Block} from "../../modules/Block.js";

interface TypeProps {
    chat_class?: string,
    profile_link_text: string,
    search_placeholder: string,
    contacts: object[],
    messages_date: string,
    messages: object[],
    menu_actions: object[],
    attachment_actions: object[],
    events?: object[]
}

export class ChatPage extends Block {
    constructor(props: TypeProps) {
        super("div", props);
        this.template = template;
    }
}
