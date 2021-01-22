import EventBus from "./EventBus.js";

class Block {
    static EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_CDU: "flow:component-did-update",
        FLOW_RENDER: "flow:render"
    };

    private _element = null;
    private readonly _meta = null;
    props = null;
    eventBus = null;

    /** TSDoc
     * @param {string} tagName
     * @param {Object} props
     *
     * @returns {void}
     */
    constructor(tagName = "div", props = {}) {
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
        const {tagName} = this._meta;
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

    setProps = nextProps => {
        const oldProps = (<any>Object).assign({}, this.props);
        if (!nextProps) {
            return;
        }
        (<any>Object).assign(this.props, nextProps);
        this.eventBus().emit(Block.EVENTS.FLOW_CDU, oldProps, nextProps);
    };

    get element() {
        return this._element;
    }

    _render() {

    }

    // Может переопределять пользователь, необязательно трогать
    render(stringTemplate, query): void {
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
            set(target, prop, val) { // для перехвата записи свойства
                target[prop] = val;
                return true;
            },

            deleteProperty(target, prop) { // перехватываем удаление свойства
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
}

export default Block;