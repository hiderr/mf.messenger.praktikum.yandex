import {template} from "./chat.tmpl.js";
import {Block} from "../../modules/Block.js";

interface TypeProps {
    chat_class?: string,
    template?: string,
    pathCSS?: string,
    profile_link_text: string,
    search_placeholder: string,
    chats: object[],
    messages_date: string,
    messages: object[],
    menu_actions: object[],
    attachment_actions: object[],
    events?: object[]
}

export class ChatPage extends Block {
    constructor(props: TypeProps) {
        props.template = template;
        props.pathCSS = "blocks/Chat/chat.css";
        super("div", props);
    }

    componentDidMount(oldProps): void {
        this.store.eventBus.on("chatDataReceived", () => {
            this.setProps(this.store.get("chatProps"));
        });
        super.componentDidMount(oldProps);
    }
}
