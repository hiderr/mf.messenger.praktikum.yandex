import { EventBus } from "./EventBus.js";
import { Validation } from "./Validation.js";
export class Block {
    /** TSDoc
     * @param {string} tagName
     * @param {Object} props
     *
     * @returns {void}
     */
    constructor(tagName = "div", props = {}) {
        this._element = null;
        this._meta = null;
        this.props = null;
        this.eventBus = null;
        this.validation = null;
        const eventBus = new EventBus();
        this._meta = {
            tagName,
            props
        };
        this.props = this._makePropsProxy(props);
        this.eventBus = () => eventBus;
        this.validation = new Validation();
        this._registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT);
    }
    _registerEvents(eventBus) {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
        eventBus.on(Block.EVENTS.VALIDATE_FORM, this._validateFormInputs.bind(this));
        eventBus.on(Block.EVENTS.VALIDATE_FORM_ON_SUBMIT, this._validateFormOnSubmit.bind(this));
        eventBus.on(Block.EVENTS.CLEAR_INPUT_ERROR, this._clearInputErrors.bind(this));
    }
    _createResources() {
        const { tagName } = this._meta;
        this._element = document.createElement(tagName);
    }
    init() {
        this._createResources();
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    }
    _componentDidMount() {
        this.componentDidMount(this.props);
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
    // Может переопределять пользователь, необязательно трогать
    componentDidMount(oldProps) {
        if (oldProps.events) {
            oldProps.events.forEach(item => {
                this.eventBus().on(item.name, item.handler);
                this._element.addEventListener(item.name, (e) => {
                    this.eventBus().emit(item.name, e.target, e, this.eventBus());
                }, true);
            });
        }
    }
    _componentDidUpdate(oldProps, newProps) {
        const response = this.componentDidUpdate(oldProps, newProps);
        if (response) {
            this._render();
        }
    }
    // Может переопределять пользователь, необязательно трогать
    componentDidUpdate(oldProps, newProps) {
        return JSON.stringify(oldProps) !== JSON.stringify(newProps);
    }
    get element() {
        return this._element;
    }
    _render() {
    }
    // Может переопределять пользователь, необязательно трогать
    render(stringTemplate, query) {
        const root = document.querySelector(query);
        const template = document.createElement('template');
        template.innerHTML = stringTemplate.trim();
        this.element.appendChild(template.content.firstChild);
        root.appendChild(this.element);
    }
    getContent() {
        return this.element;
    }
    _makePropsProxy(props) {
        // Можно и так передать this
        // Такой способ больше не применяется с приходом ES6+
        const self = this;
        return new Proxy(props, {
            set(target, prop, val) {
                target[prop] = val;
                return true;
            },
            deleteProperty(target, prop) {
                throw new Error("Нет доступа");
            }
        });
    }
    show() {
        this.getContent().style.display = "block";
    }
    hide() {
        this.getContent().style.display = "none";
    }
    _validateFormInputs(el) {
        this.validation.validateFormInputs(el);
    }
    _validateFormOnSubmit(el, context, eventBus) {
        this.validation.validateFormOnSubmit(el, context, eventBus);
    }
    _clearInputErrors(el) {
        this.validation.clearErrorMessage(el);
    }
}
Block.EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render",
    VALIDATE_FORM: "validate_form_input",
    VALIDATE_FORM_ON_SUBMIT: "validate_form_on_submit",
    CLEAR_INPUT_ERROR: "clear_error_message"
};
//# sourceMappingURL=Block.js.map