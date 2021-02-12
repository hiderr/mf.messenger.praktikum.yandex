import {Input} from "../Input/index.js";

export const PropsForm = {
    className: "w100proc",
    form_name: "form",
    events: [
        {
            name: "blur", handler: (...args) => {
                const el = args[0];
                // form.eventBus().emit("validate_form_input", el);
            }
        },
        {
            name: "focus", handler: (...args) => {
                const el = args[0];
                // form.eventBus().emit("clear_error_message", el);
            }
        }
    ],
    children: []
};