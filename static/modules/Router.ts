import Route from "./Route";

export class Router {
    private static __instance: any;
    private routes: Route[];
    history: History;
    private _currentRoute: Route;

    constructor() {
        if (Router.__instance) {
            return Router.__instance;
        }

        this.routes = [];
        this.history = window.history;
        this._currentRoute = null;

        Router.__instance = this;
    }

    use(pathname: string, block: object, props: object, event?) {
        const route = new Route(pathname, block, props, event);
        this.routes.push(route);
        return this;
    }

    start() {
        window.onpopstate = event => {
            this._onRoute(event.currentTarget.location.pathname);
        };

        this._onRoute(window.location.pathname);
    }

    _onRoute(pathname: string) {
        const route = this.getRoute(pathname);
        if (!route) {
            return;
        }

        if (this._currentRoute) {
            this._currentRoute.leave();
        }

        this._currentRoute = route;
        route.fireEvent();
        route.render();
    }

    go(pathname: string) {
        this.history.pushState({}, "", pathname);
        this._onRoute(pathname);
    }

    getRoute(pathname: string) {
        return this.routes.find(route => route.match(pathname));
    }
}