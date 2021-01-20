import Block from "../../modules/Block.js";
import compile from "../../utils/templator.js";
import { template } from "./template.js";
class Form extends Block {
    constructor(props) {
        super("div", props);
    }
    render() {
        let newTemplate = template;
        if (this["props"].row_template) {
            newTemplate = template.replace(`<div class="form__row"></div>`, `<div class="form__row">${this["props"].row_template}</div>`);
        }
        return compile(newTemplate, this["props"]);
    }
}
export default Form;
//# sourceMappingURL=index.js.map