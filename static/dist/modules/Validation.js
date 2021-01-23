export class Validation {
    validateFormInputs(el) {
        if (el.tagName === "INPUT") {
            const error_message = document.createElement("p");
            error_message.classList.add("error_message", "error_message_bottom", "error_message_small");
            if (el.value === "") {
                error_message.textContent = "Поле не может быть пустым";
                el.parentElement.append(error_message);
            }
            if (el.type === "email" && !el.value.match(new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$", "gi"))) {
                error_message.textContent = "Неккоректный формат email";
                el.parentElement.append(error_message);
            }
            if (el.name === "login" && el.value.match(new RegExp("[^\\w\\s]", "gi"))) {
                error_message.textContent = "Нельзя использовать специальные символы";
                el.parentElement.append(error_message);
            }
            if (el.name === "newPasswordRepeat" && el.value !== document.querySelector("[name='newPassword']").value) {
                error_message.textContent = "Пароли не совпадают";
                el.parentElement.append(error_message);
            }
        }
    }
    validateFormOnSubmit(el, context, eventBus) {
        el.querySelectorAll("input").forEach(item => {
            eventBus.emit("focus", item);
            eventBus.emit("blur", item);
        });
        const error_message = el.querySelector(".error_message");
        context.form_valid = !error_message;
    }
    clearErrorMessage(el) {
        if (el.tagName === "INPUT") {
            const inputWrapper = el.parentElement;
            if (inputWrapper.querySelector(".error_message")) {
                inputWrapper.removeChild(inputWrapper.querySelector(".error_message"));
            }
        }
    }
}
//# sourceMappingURL=Validation.js.map