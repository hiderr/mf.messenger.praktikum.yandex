import {Group} from "../../modules/Group.js";
import {template} from "./template.js";

interface TypeProps {
    children?: any[]
}

export class ProfilePage extends Group {
    constructor(props: TypeProps) {
        super(props);
        this.template = template;
    }
}
