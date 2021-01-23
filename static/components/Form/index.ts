import {Block} from "../../modules/Block.js";
import {compiler} from "../../utils/templator.js";
import {template} from "./template.js";

interface TypeProps {
    form_disabled: boolean,
    form_name: string,
    form_valid: boolean,
    form_rows: object[],
    row_template: string,
    events: object[]
}

export class Form extends Block {
    constructor(props: TypeProps) {
        super("div", props);
    }

    render(selector: string) {
        let tmpl = template.replace(`<div class="form__row"></div>`, `<div class="form__row">${this["props"].row_template}</div>`);
        super.render(compiler(tmpl, this.props), selector);
    }
}