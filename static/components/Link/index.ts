import {Block} from "../../modules/Block.js";
import {template} from "./template.js";

interface TypeProps {
    className: string,
    href: string,
    text: string,
    template?: string
}

export class Link extends Block {
    constructor(props: TypeProps) {
        props.template = template;
        super("div", props);
    }
}