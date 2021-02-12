import {template} from "./popup.tmpl.js";
import {Group} from "../../modules/Group.js";

interface TypeProps {
    children?: any[],
    title?: string,
    template?: string,
    pathCSS?: string,
}

export class Popup extends Group {
    constructor(props: TypeProps) {
        props.template = template;
        props.pathCSS = "components/Popup/popup.css";
        super(props);
    }
}
