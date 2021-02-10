import {template} from "./template.js";
import {Group} from "../../modules/Group.js";

export class SigninPage extends Group {
    constructor(props) {
        super(props);
        this.template = template;
        this.pathCSS = "blocks/Login/login.css";
    }
}
