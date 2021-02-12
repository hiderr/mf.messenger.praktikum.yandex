import {template} from "./template.js";
import {Group} from "../../modules/Group.js";

export class SigninPage extends Group {
    constructor(props) {
        props.template = template;
        props.pathCSS = "blocks/Login/login.css";
        super(props);
    }
}
