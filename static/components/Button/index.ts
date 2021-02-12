import {Block} from "../../modules/Block.js";
import {template} from "./template.js";

interface TypeProps {
    className: string,
    text: string,
    link: string,
    events?: object[],
    template?: string
}

export class Button extends Block {
    constructor(props: TypeProps) {
        props.template = template;
        super("div", props);
    }
}