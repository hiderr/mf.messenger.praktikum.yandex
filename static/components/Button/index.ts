import {Block} from "../../modules/Block";
import {buttonTmpl} from "./button.tmpl";

interface TypeProps {
    className: string,
    text: string,
    link: string,
    events?: object[],
    template?: string
}

export class Button extends Block {
    constructor(props: TypeProps) {
        props.template = buttonTmpl;
        super("div", props);
    }
}