import {Block} from "../../modules/Block.js";
import {template} from "./template.js";

interface TypeProps {
    tooltip: string,
    title: string,
    hide_title?: boolean
}

export class Avatar extends Block {
    constructor(props: TypeProps) {
        super("div", props);
        this.template = template;
    }
}