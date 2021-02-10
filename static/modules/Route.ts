import {render} from '../utils/renderDOM.js';

export default class Route {
    private _pathname: string;
    private readonly _blockClass: any;
    private _block: any;
    private _props: any;

    constructor(pathname: string, view, props) {
        this._pathname = pathname;
        this._blockClass = view;
        this._block = null;
        this._props = props;
    }

    navigate(pathname) {
        if (this.match(pathname)) {
            this._pathname = pathname;
            this.render();
        }
    }

    leave() {
        if (this._block) {
            this._block.hide();
        }
    }

    match(pathname) {
        return pathname === this._pathname;
    }

    render() {
        if (!this._block) {
            this._block = new this._blockClass(this._props);
            render(this._props.rootQuery, this._block);
            return;
        }

        this._block.show();
    }
}