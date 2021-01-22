import Block from "../../modules/Block.js";
import compile from "../../utils/templator.js";
import {template} from "./template.js";

export class Form extends Block {
    constructor(props) {
        super("div", props);
    }

    render(selector) {
        let tmpl = template.replace(`<div class="form__row"></div>`, `<div class="form__row">${this["props"].row_template}</div>`);
        super.render(compile(tmpl, this.props), selector);
    }
}