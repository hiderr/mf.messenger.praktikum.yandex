import "./input.sass";
import {Block} from "../../modules/Block";
import {template} from "./input.tmpl";

interface TypeProps {
    labelClassName?: string,
    className: string,
    name: string,
    type: string,
    label?: string,
    value?: string,
    valuePath?: string,
    disabled?: boolean,
    placeholder?: string,
    pathCSS?: string,
    template?: string
}

export class Input extends Block {
    constructor(props: TypeProps) {
        props.template = template;
        props.pathCSS = "components/Input/input.css";
        super("div", props);
    }

    componentDidMount(oldProps): void {
        super.componentDidMount(oldProps);
        this.store.eventBus.on("profileDataReceived", () => {
            if (this.props.valuePath && this.store.get(this.props.valuePath)){
                this.setProps({value: this.store.get(this.props.valuePath)});
            }
        });
    }
}