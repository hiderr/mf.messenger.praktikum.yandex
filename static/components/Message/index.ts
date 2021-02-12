import {Block} from "../../modules/Block.js";
import {template} from "./template.js";

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