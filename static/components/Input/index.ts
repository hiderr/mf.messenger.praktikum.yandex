import {Block} from "../../modules/Block.js";
import {template} from "./template.js";

interface TypeProps {
    labelClassName: string,
    className: string,
    name: string,
    type: string,
    label?: string,
    value: string,
    disabled?: boolean,
    placeholder?: string
}

export class Input extends Block {
    constructor(props: TypeProps) {
        super("div", props);
        this.template = template;
        this.pathCSS = "components/Input/input.css";
    }
}