import compile from "../../utils/templator.js";
import {template} from "./template.js";
import Block from "../../modules/Block.js";

export class ProfilePage extends Block {
    constructor(props) {
        super("div", props);
    }

    render(selector) {
        super.render(compile(template, this.props), selector);
    }
}
