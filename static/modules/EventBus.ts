export class EventBus {
    listeners = {};
    private static __instance: any;

    /*constructor(){
        if (EventBus.__instance) {
            return EventBus.__instance;
        }

        EventBus.__instance = this;
    }*/

    on(event, callback): void {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }

        this.listeners[event].push(callback);
    }

    off(event, callback): void {
        if (!this.listeners[event]) {
            console.log(`Нет события: ${event}`);
        }

        this.listeners[event] = this.listeners[event].filter(
            listener => listener !== callback
        );
    }

    emit(event, ...args): void {
        if (!this.listeners[event]) {
            console.log(`Нет события: ${event}`);
        }

        this.listeners[event].forEach(function(listener) {
            listener(...args);
        });
    }
}