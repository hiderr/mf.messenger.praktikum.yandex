import Block from "../../modules/Block.js";
import compile from "../../utils/templator.js";
import {template} from "./template.js";

export class Button extends Block {
    constructor(props) {
        super("div", props);
    }

    render(selector) {
        super.render(compile(template, this.props), selector);
    }
}