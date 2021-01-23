import { compiler } from "../../utils/templator.js";
import { template } from "./template.js";
import { Block } from "../../modules/Block.js";
export class Popup extends Block {
    constructor(props) {
        super("div", props);
    }
    render(selector) {
        super.render(compiler(template, this.props), selector);
    }
}
//# sourceMappingURL=index.js.map