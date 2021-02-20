import { EventBus } from './EventBus';
import { Utils } from '../utils/Utils';

export class Store {
  props = null;

  eventBus = null;

  private static __instance: any;

  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  constructor(props = {}) {
    if (Store.__instance) {
      return Store.__instance;
    }
    Store.__instance = this;

    this.props = this._makePropsProxy(props);
    this.eventBus = new EventBus();
    this._registerEvents(this.eventBus);
    this.eventBus.emit(Store.EVENTS.INIT);
  }

  _registerEvents(eventBus): void {
    eventBus.on(Store.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Store.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Store.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    // eventBus.on(Store.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  init(): void {
    this.eventBus.emit(Store.EVENTS.FLOW_CDM);
  }

  _componentDidMount(): void {
    this.componentDidMount(this.props);
    // this.eventBus.emit(Store.EVENTS.FLOW_RENDER);
  }

  componentDidMount(oldProps): void {}

  _componentDidUpdate(oldProps, newProps): void {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (response) {
    }
  }

  componentDidUpdate(oldProps, newProps) {
    return JSON.stringify(oldProps) !== JSON.stringify(newProps);
  }

  get(path): any {
    const paths = path.split('.');
    let current = this.props;
    let i;
    for (i = 0; i < paths.length; ++i) {
      if (current[paths[i]] == undefined) {
        return undefined;
      }
      current = current[paths[i]];
    }
    return current;
  }

  set(path, value): void {
    const paths = path.split('.');
    const obj = paths.reduceRight((acc, node) => {
      const a = {};
      a[node] = acc;
      return a;
    }, value);

    this.setProps(Utils.mergeDeep(this.props, obj));
  }

  setProps = (nextProps) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  _makePropsProxy(props): WindowProxy {
    return new Proxy(props, {
      set(target, prop, val) {
        // для перехвата записи свойства
        target[prop] = val;
        return true;
      },

      deleteProperty(target, prop) {
        // перехватываем удаление свойства
        throw new Error('Нет доступа');
      },
    });
  }
}
