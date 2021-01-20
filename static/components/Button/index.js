import Block from "../../modules/Block.js";
import compile from "../../utils/templator.js";
import { template } from "./template.js";
class Button extends Block {
    constructor(props) {
        super("div", props);
    }
    render() {
        return compile(template, this["props"]);
    }
}
export default Button;
//# sourceMappingURL=index.js.map