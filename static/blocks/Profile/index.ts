import {Group} from "../../modules/Group.js";
import {template} from "./template.js";

interface TypeProps {
    back_button_link: string,
    template?: string,
    pathCSS?: string,
    children?: any[]
}

export class ProfilePage extends Group {
    constructor(props: TypeProps) {
        props.template = template;
        props.pathCSS = "blocks/Profile/profile.css";
        super(props);
    }

    componentDidMount(oldProps): void {
        super.componentDidMount(oldProps);
    }
}
