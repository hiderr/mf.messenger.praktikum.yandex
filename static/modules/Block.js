import EventBus from "./EventBus.js";
class Block {
    /** JSDoc
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
        this.setProps = nextProps => {
            const oldProps = Object.assign({}, this.props);
            if (!nextProps) {
                return;
            }
            Object.assign(this.props, nextProps);
            this.eventBus().emit(Block.EVENTS.FLOW_CDU, oldProps, nextProps);
        };
        const eventBus = new EventBus();
        this._meta = {
            tagName,
            props
        };
        this.props = this._makePropsProxy(props);
        this.eventBus = () => eventBus;
        this._registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT);
    }
    _registerEvents(eventBus) {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }
    _createResources() {
        const { tagName } = this._meta;
        this._element = this._createDocumentElement(tagName);
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
        const eventBus = this.eventBus();
        if (oldProps.events) {
            oldProps.events.forEach(item => {
                eventBus.on(item.name, item.handler);
                this._element.addEventListener(item.name, (e) => {
                    eventBus.emit(item.name, e.target, e, eventBus);
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
        const block = this.render();
        const template = document.createElement('template');
        template.innerHTML = block.trim();
        this._element.appendChild(template.content.firstChild);
    }
    // Может переопределять пользователь, необязательно трогать
    render() {
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
    _createDocumentElement(tagName) {
        // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
        return document.createElement(tagName);
    }
    show() {
        this.getContent().style.display = "block";
    }
    hide() {
        this.getContent().style.display = "none";
    }
}
Block.EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render"
};
export default Block;
//# sourceMappingURL=Block.js.map