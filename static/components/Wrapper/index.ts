import {template} from "./template.js";
import {Group} from "../../modules/Group.js";

interface TypeProps {
    children: any[],
    className?: string
}

export class Wrapper extends Group {
    constructor(props: TypeProps) {
        super(props);
        this.template = template;
    }
}