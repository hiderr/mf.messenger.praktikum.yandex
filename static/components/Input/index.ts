import {Block} from "../../modules/Block.js";
import {template} from "./template.js";

interface TypeProps {
    labelClassName?: string,
    className: string,
    name: string,
    type: string,
    label?: string,
    value?: string,
    disabled?: boolean,
    placeholder?: string,
    pathCSS?: string,
    template?: string
}

export class Input extends Block {
    constructor(props: TypeProps) {
        props.template = template;
        props.pathCSS = "components/Input/input.css";
        super("div", props);
    }
}