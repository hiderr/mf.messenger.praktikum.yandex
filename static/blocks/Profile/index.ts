import {Group} from "../../modules/Group.js";
import {template} from "./template.js";

interface TypeProps {
    back_button_link: string,
    children?: any[]
}

export class ProfilePage extends Group {
    constructor(props: TypeProps) {
        super(props);
        this.template = template;
        this.pathCSS = "blocks/Profile/profile.css";
    }
}
