import {compiler} from "../utils/templator.js";
import {Block} from "./Block.js";

export class Group extends Block {
    public template: string;

    constructor(props) {
        super("div", props);
    }

    render(): string {
        this._render();

        let result = '';
        for (let c of this.props.children) {
            let childTemplate = c.render();
            result += childTemplate;
        }
        return compiler(this.template.replace("{{CHILDREN}}", result), this.props);
    }
}