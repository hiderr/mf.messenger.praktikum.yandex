import {Block} from "../../modules/Block.js";
import {template} from "./message.tmpl.js";

interface TypeProps {
    className: string,
    text: string,
    template?: string,
}

export class Message extends Block {
    constructor(props: TypeProps) {
        props.template = template;
        super("div", props);
    }
}