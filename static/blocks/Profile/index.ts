import "./profile.sass";
import {Group} from "../../modules/Group";
import {profileTmpl} from "./profile.tmpl";

interface TypeProps {
    back_button_link: string,
    template?: string,
    pathCSS?: string,
    children?: any[]
}

export class ProfilePage extends Group {
    constructor(props: TypeProps) {
        props.template = profileTmpl;
        props.pathCSS = "blocks/Profile/profile.css";
        super(props);
    }

    componentDidMount(oldProps): void {
        super.componentDidMount(oldProps);
    }
}
