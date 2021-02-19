import {render} from '../utils/renderDOM';

export default class Route {
    private _pathname: string;
    private readonly _blockClass: any;
    private _block: any;
    private _props: any;
    private _event: any;

    constructor(pathname: string, view, props, event) {
        this._pathname = pathname;
        this._blockClass = view;
        this._block = null;
        this._props = props;
        this._event = event;
    }

    navigate(pathname) {
        if (this.match(pathname)) {
            this._pathname = pathname;
            this.render();
        }
    }

    fireEvent(){
        if (typeof(this._event) === "function"){
            this._event();
        }
    }

    leave() {
        if (this._block) {
            this._block.hide();
            this._block.unloadCSS();
        }
    }

    match(pathname) {
        return pathname === this._pathname;
    }

    render(): void {
        this._block = new this._blockClass(this._props);
        this._block.loadCSS();
        render(this._props.rootQuery, this._block);
    }
}