import {Block} from "../../modules/Block.js";
import {compiler} from "../../utils/templator.js";
import {template} from "./template.js";

interface TypeProps {
    className: string,
    text: string,
    link: string,
    events?: object[]
}

export class Button extends Block {
    constructor(props: TypeProps) {
        super("div", props);
    }

    render(selector: string) {
        super.render(compiler(template, this.props), selector);
    }
}