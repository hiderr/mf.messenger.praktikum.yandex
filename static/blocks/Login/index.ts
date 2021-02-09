import {template} from "./template.js";
import {Group} from "../../modules/Group.js";

interface TypeProps {
    children: any[]
}

export class LoginPage extends Group {
    constructor(props: TypeProps) {
        super(props);
        this.template = template;
    }
}
