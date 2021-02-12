import {template} from "./login.tmpl.js";
import {Group} from "../../modules/Group.js";

interface TypeProps {
    children: any[],
    template: string,
    pathCSS: string
}

export class LoginPage extends Group {
    constructor(props: TypeProps) {
        props.template = template;
        props.pathCSS = "blocks/Login/login.css";
        super(props);
    }
}
