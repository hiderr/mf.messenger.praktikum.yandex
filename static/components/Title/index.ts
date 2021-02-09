import {Block} from "../../modules/Block.js";
import {template} from "./template.js";

interface TypeProps {
    className: string,
    text: string,
}

export class Title extends Block {
    constructor(props: TypeProps) {
        super("div", props);
        this.template = template;
    }
}