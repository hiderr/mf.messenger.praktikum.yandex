import {template} from "./template.js";
import {Group} from "../../modules/Group.js";
import {compiler} from "../../utils/templator.js";

interface TypeProps {
    className?: string,
    form_name?: string,
    form_valid: boolean,
    children: object[],
    events?: object[]
}

export class Form extends Group {
    constructor(props: TypeProps) {
        super(props);
        this.template = template;
    }

    render(): string {
        let result = '';
        for (let c of this.props.children) {
            let childTemplate = `<div class="form__row">${c.render()}</div>`;
            result += childTemplate;
        }
        return compiler(this.template.replace("{{CHILDREN}}", result), this.props);
    };
}