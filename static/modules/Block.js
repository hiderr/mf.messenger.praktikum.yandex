"use strict";
exports.__esModule = true;
var EventBus_js_1 = require("./EventBus.js");
var Block = /** @class */ (function () {
    /** JSDoc
     * @param {string} tagName
     * @param {Object} props
     *
     * @returns {void}
     */
    function Block(tagName, props) {
        var _this = this;
        if (tagName === void 0) { tagName = "div"; }
        if (props === void 0) { props = {}; }
        this._element = null;
        this._meta = null;
        this.props = null;
        this.eventBus = null;
        this.setProps = function (nextProps) {
            var oldProps = Object.assign({}, _this.props);
            if (!nextProps) {
                return;
            }
            Object.assign(_this.props, nextProps);
            _this.eventBus().emit(Block.EVENTS.FLOW_CDU, oldProps, nextProps);
        };
        var eventBus = new EventBus_js_1["default"]();
        this._meta = {
            tagName: tagName,
            props: props
        };
        this.props = this._makePropsProxy(props);
        this.eventBus = function () { return eventBus; };
        this._registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT);
    }
    Block.prototype._registerEvents = function (eventBus) {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    };
    Block.prototype._createResources = function () {
        var tagName = this._meta.tagName;
        this._element = this._createDocumentElement(tagName);
    };
    Block.prototype.init = function () {
        this._createResources();
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    };
    Block.prototype._componentDidMount = function () {
        this.componentDidMount(this.props);
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    };
    // Может переопределять пользователь, необязательно трогать
    Block.prototype.componentDidMount = function (oldProps) {
        var _this = this;
        var eventBus = this.eventBus();
        if (oldProps.events) {
            oldProps.events.forEach(function (item) {
                eventBus.on(item.name, item.handler);
                _this._element.addEventListener(item.name, function (e) {
                    eventBus.emit(item.name, e.target, e, eventBus);
                }, true);
            });
        }
    };
    Block.prototype._componentDidUpdate = function (oldProps, newProps) {
        var response = this.componentDidUpdate(oldProps, newProps);
        if (response) {
            this._render();
        }
    };
    // Может переопределять пользователь, необязательно трогать
    Block.prototype.componentDidUpdate = function (oldProps, newProps) {
        return JSON.stringify(oldProps) !== JSON.stringify(newProps);
    };
    Object.defineProperty(Block.prototype, "element", {
        get: function () {
            return this._element;
        },
        enumerable: false,
        configurable: true
    });
    Block.prototype._render = function () {
        var block = this.render();
        var template = document.createElement('template');
        template.innerHTML = block.trim();
        this._element.appendChild(template.content.firstChild);
    };
    // Может переопределять пользователь, необязательно трогать
    Block.prototype.render = function () {
    };
    Block.prototype.getContent = function () {
        return this.element;
    };
    Block.prototype._makePropsProxy = function (props) {
        // Можно и так передать this
        // Такой способ больше не применяется с приходом ES6+
        var self = this;
        return new Proxy(props, {
            set: function (target, prop, val) {
                target[prop] = val;
                return true;
            },
            deleteProperty: function (target, prop) {
                throw new Error("Нет доступа");
            }
        });
    };
    Block.prototype._createDocumentElement = function (tagName) {
        // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
        return document.createElement(tagName);
    };
    Block.prototype.show = function () {
        this.getContent().style.display = "block";
    };
    Block.prototype.hide = function () {
        this.getContent().style.display = "none";
    };
    Block.EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_CDU: "flow:component-did-update",
        FLOW_RENDER: "flow:render"
    };
    return Block;
}());
exports["default"] = Block;
