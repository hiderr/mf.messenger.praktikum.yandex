import {signinTmpl} from "./signin.tmpl.js";
import {Group} from "../../modules/Group.js";

export class SigninPage extends Group {
    constructor(props) {
        props.template = signinTmpl;
        props.pathCSS = "blocks/Login/login.css";
        super(props);
    }
}
