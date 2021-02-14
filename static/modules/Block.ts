import {EventBus} from "./EventBus.js";
import {Validation} from "./Validation.js";
import {Router} from "./Router.js";
import {compiler} from "../utils/templator.js";
import {Store} from "./Store.js";

export class Block {
    static EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_CDU: "flow:component-did-update",
        FLOW_RENDER: "flow:render"
    };

    private _element = null;
    private readonly _meta = null;
    renderedByRoute = false;
    template = "";
    props = null;
    eventBus = null;
    validation = null;
    pathCSS = "";
    router: Router;
    store: Store;

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
        this.store = new Store();

        this._registerEvents(this.eventBus);
        this.eventBus.emit(Block.EVENTS.INIT);
    }

    _registerEvents(eventBus): void {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }

    _createResources() {
        const {tagName} = this._meta;
        this._element = this._createDocumentElement(tagName);
    }

    _createDocumentElement(tagName) {
        return document.createElement(tagName);
    }

    loadCSS(): void {
        const head = document.getElementsByTagName('HEAD')[0];
        if (this.props.pathCSS && !Array.from(head.children).some(item => item.getAttribute("href") && item.getAttribute("href").indexOf(this.props.pathCSS) > -1)) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = `/${this.props.pathCSS}`;
            head.appendChild(link);
        }
    }

    unloadCSS(): void {
        const head = document.getElementsByTagName('HEAD')[0];
        const link = Array.from(head.children).find(item => item.getAttribute("href") && item.getAttribute("href").indexOf(this.props.pathCSS) > -1);
        if (link) {
            head.removeChild(link);
        }
    }

    init(): void {
        this._createResources();
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
        const response = JSON.stringify(oldProps) !== JSON.stringify(newProps);
        if (response) {
            this._render();
        }
    }

    // Может переопределять пользователь, необязательно трогать
    componentDidUpdate(oldProps, newProps) {

    }

    get element(): HTMLElement {
        return this._element;
    }

    _render() {
        this.render();
        if (this.props.events) {
            this.initEvents();
        }
    }

    // Может переопределять пользователь, необязательно трогать
    render(): HTMLElement {
        this.element.innerHTML = compiler(this.props.template, this.props);
        return this.element;
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
        this.eventBus.emit(Block.EVENTS.FLOW_CDU, this.props, nextProps);
    };

    _makePropsProxy(props): WindowProxy {
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
        this.getContent().remove();
    }

    initEvents(): void {
        if (this.props.events) {
            this.props.events.forEach(event => {
                this.element.querySelectorAll(event.selector).forEach(element => {
                    element.addEventListener(event.name, (e) => event.handler(e, this), true);
                })
            });
        }
    }
}