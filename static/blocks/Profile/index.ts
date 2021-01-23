import {compiler} from "../../utils/templator.js";
import {template} from "./template.js";
import {Block} from "../../modules/Block.js";

interface TypeProps {
    title?: string,
    avatar_tooltip: string,
    profile_name?: string
}

export class ProfilePage extends Block {
    constructor(props: TypeProps) {
        super("div", props);
    }

    render(selector: string) {
        super.render(compiler(template, this.props), selector);
    }
}
