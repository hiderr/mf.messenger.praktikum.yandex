import {Block} from "../../modules/Block.js";
import {template} from "./template.js";

interface TypeProps {
    tooltip: string,
    title: string,
    hide_title?: boolean,
    template?: string,
}

export class Avatar extends Block {
    constructor(props: TypeProps) {
        props.template = template;
        super("div", props);
    }
}