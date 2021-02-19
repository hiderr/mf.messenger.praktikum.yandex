import "./error.sass";
import {template} from "./error.tmpl";
import {Block} from "../../modules/Block";

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
