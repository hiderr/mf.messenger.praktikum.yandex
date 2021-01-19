import compile from "../../utils/templator.js";
import {template} from "./template.js";
import Block from "../../modules/Block.js";

export default class LoginPage extends Block {
    constructor(props) {
        super("div", props);
    }

    render() {
        return compile(template, this["props"]);
    }
}
