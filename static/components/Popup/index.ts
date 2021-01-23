import {compiler} from "../../utils/templator.js";
import {template} from "./template.js";
import {Block} from "../../modules/Block.js";

interface TypeProps {
    title: string
}

export class Popup extends Block {
    constructor(props: TypeProps) {
        super("div", props);
    }

    render(selector: string) {
        super.render(compiler(template, this.props), selector);
    }
}
