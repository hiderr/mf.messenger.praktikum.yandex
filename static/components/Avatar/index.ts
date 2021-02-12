import {Block} from "../../modules/Block.js";
import {template} from "./template.js";
import {HTTP} from "../../modules/http/HTTP.js";

interface TypeProps {
    tooltip: string,
    title: string,
    titlePath: string,
    url: string,
    urlPath: string,
    hide_title?: boolean,
    template?: string,
}

export class Avatar extends Block {
    constructor(props: TypeProps) {
        props.template = template;
        super("div", props);
    }

    componentDidMount(oldProps): void {
        super.componentDidMount(oldProps);
        this.store.eventBus.on("profileDataReceived", () => {
            if (this.props.titlePath && this.store.get(this.props.titlePath) && this.props.urlPath && this.store.get(this.props.urlPath)){
                this.setProps({
                    title: this.store.get(this.props.titlePath),
                    url: `${HTTP.HOST}${this.store.get(this.props.urlPath)}`,
                });
            }
        });
    }
}