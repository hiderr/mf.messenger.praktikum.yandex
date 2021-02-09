import {Block} from "../../modules/Block.js";
import {template} from "./template.js";

interface TypeProps {
    className: string,
    href: string,
    text: string
}

export class Link extends Block {
    constructor(props: TypeProps) {
        super("div", props);
        this.template = template;
    }
}