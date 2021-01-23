import { Block } from "../../modules/Block.js";
import { compiler } from "../../utils/templator.js";
import { template } from "./template.js";
export class Form extends Block {
    constructor(props) {
        super("div", props);
    }
    render(selector) {
        let tmpl = template.replace(`<div class="form__row"></div>`, `<div class="form__row">${this["props"].row_template}</div>`);
        super.render(compiler(tmpl, this.props), selector);
    }
}
//# sourceMappingURL=index.js.map