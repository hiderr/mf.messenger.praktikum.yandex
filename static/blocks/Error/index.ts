import {template} from "./template.js";
import {Block} from "../../modules/Block.js";

interface TypeProps {
    error_code: string,
    error_message: string,
    link_text: string
}

export class ErrorPage extends Block {
    constructor(props: TypeProps) {
        super("div", props);
        this.template = template;
        this.pathCSS = "blocks/Error/error.css";
    }
}
