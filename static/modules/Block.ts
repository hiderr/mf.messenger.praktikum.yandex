import {EventBus} from "./EventBus.js";
import {Validation} from "./Validation.js";
import {Router} from "./Router.js";
import {compiler} from "../utils/templator.js";

export class Block {
    static EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_CDU: "flow:component-did-update",
        FLOW_RENDER: "flow:render",
        VALIDATE_FORM: "validate_form_input",
        VALIDATE_FORM_ON_SUBMIT: "validate_form_on_submit",
        CLEAR_INPUT_ERROR: "clear_error_message"
    };

    private _element = null;
    private readonly _meta = null;
    template = "";
    props = null;
    eventBus = null;
    validation = null;
    pathCSS = "";
    router: Router;

    /** TSDoc
     * @param {string} tagName
     * @param {Object} props
     *
     * @returns {void}
     */
    constructor(tagName = "div", props = {}) {
        this._meta = {
            tagName,
            props
        };

        this.props = this._makePropsProxy(props);

        this.eventBus = new EventBus();
        this.validation = new Validation();
        this.router = new Router();

        this._registerEvents(this.eventBus);
        this.eventBus.emit(Block.EVENTS.INIT);
    }

    _registerEvents(eventBus): void {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
        eventBus.on(Block.EVENTS.VALIDATE_FORM, this.validation.validateFormInputs.bind(this));
        eventBus.on(Block.EVENTS.VALIDATE_FORM_ON_SUBMIT, this.validation.validateFormOnSubmit.bind(this));
        eventBus.on(Block.EVENTS.CLEAR_INPUT_ERROR, this.validation.clearErrorMessage.bind(this));
    }

    setDOMElement(element): void {
        this._element = element;
    }

    loadCss(path): void {
        const head = document.getElementsByTagName('HEAD')[0];
        if (!Array.from(head.children).some(item => item.getAttribute("href") && item.getAttribute("href").indexOf(path) > -1)) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = `/public/${path}`;
            head.appendChild(link);
        }
    }

    init(): void {
        this.eventBus.emit(Block.EVENTS.FLOW_CDM);
    }

    _componentDidMount(): void {
        this.componentDidMount(this.props);
        this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
    }

    // Может переопределять пользователь, необязательно трогать
    componentDidMount(oldProps): void {

    }

    _componentDidUpdate(oldProps, newProps): void {
        const response = this.componentDidUpdate(oldProps, newProps);
        if (response) {
            this._render();
        }
    }

    // Может переопределять пользователь, необязательно трогать
    componentDidUpdate(oldProps, newProps) {
        return JSON.stringify(oldProps) !== JSON.stringify(newProps);
    }

    get element(): HTMLElement {
        return this._element;
    }

    _render() {
        this.loadCss(this.pathCSS);
    }

    // Может переопределять пользователь, необязательно трогать
    render(): string {
        this._render();
        return compiler(this.template, this.props);
    }

    getContent(): HTMLElement {
        return this.element;
    }

    getProps(name): object {
        return (name) ? this.props[name] : this.props;
    }

    setProps = nextProps => {
        if (!nextProps) {
            return;
        }

        Object.assign(this.props, nextProps);
    };

    _makePropsProxy(props): WindowProxy {
        // Можно и так передать this
        // Такой способ больше не применяется с приходом ES6+
        const self = this;
        return new Proxy(props, {
            set(target, prop, val) { // для перехвата записи свойства
                target[prop] = val;
                return true;
            },

            deleteProperty(target, prop) { // перехватываем удаление свойства
                throw new Error("Нет доступа");
            }
        });
    }

    show(): void {
        this.getContent().style.display = "block";
    }

    hide(): void {
        this.getContent().style.display = "none";
    }

    initEvents(): void {
        if (this.props.events){
            this.props.events.forEach(event => {
                document.querySelectorAll(event.selector).forEach(element => {
                    element.addEventListener(event.name, (e) => event.handler(e, this));
                })
            });
        }
    }
}