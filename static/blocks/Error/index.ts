import {template} from "./template.js";
import {Block} from "../../modules/Block.js";

interface TypeProps {
    error_code: string,
    error_message: string,
    link_text: string,
    template?: string,
    pathCSS?: string,
}

export class ErrorPage extends Block {
    constructor(props: TypeProps) {
        props.template = template;
        props.pathCSS = "blocks/Error/error.css";
        super("div", props);
    }
}
