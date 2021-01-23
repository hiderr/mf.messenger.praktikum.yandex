import { Block } from "../../modules/Block.js";
import { compiler } from "../../utils/templator.js";
import { template } from "./template.js";
export class Button extends Block {
    constructor(props) {
        super("div", props);
    }
    render(selector) {
        super.render(compiler(template, this.props), selector);
    }
}
//# sourceMappingURL=index.js.map