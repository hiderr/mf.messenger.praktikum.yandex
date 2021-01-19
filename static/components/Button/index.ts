import Block from "../../modules/Block.js";
import compile from "../../utils/templator.js";
import {template} from "./template.js";

class Button extends Block {
    constructor(props) {
        super("button", props);
    }

    render() {
        return compile(template, this["props"]);
    }
}

export default Button;