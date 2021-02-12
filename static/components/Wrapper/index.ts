import {template} from "./wrapper.tmpl.js";
import {Group} from "../../modules/Group.js";

interface TypeProps {
    children: any[],
    className?: string,
    template?: string
}

export class Wrapper extends Group {
    constructor(props: TypeProps) {
        props.template = template;
        super(props);
    }
}