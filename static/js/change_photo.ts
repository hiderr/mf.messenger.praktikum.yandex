import Button from "../components/Button/index.js";
import Popup from "../components/Popup/index.js";
import render from "../utils/renderDOM.js";

(() => {
    const popupContext = {
        title: "Загрузите файл",
        title_class: "",
        link: "change_photo_uploaded.html",
        link_text: "Выбрать файл на компьютере",
        error_message_text: "",
        link_class: ""
    };

    const buttonContext = {
        className: "link_button",
        link: "change_photo_no_photo_picked.html",
        text: 'Поменять'
    };

    if (window.location.pathname === "/change_photo.html") {
        popupContext.title = "Файл загружен";
    }
    if (window.location.pathname === "/change_photo_uploaded.html") {
        popupContext.link_class = "popup__uploaded_link";
        popupContext.title = "Файл загружен";
        popupContext.link_text = "pic.jpg";
        buttonContext.link = "change_photo_error.html";
    }
    if (window.location.pathname === "/change_photo_error.html") {
        popupContext.title = "Ошибка, попробуйте ещё раз";
        popupContext.title_class = "error_message";
    }
    if (window.location.pathname === "/change_photo_no_photo_picked.html") {
        popupContext.error_message_text = "Нужно выбрать файл";
    }

    const popup = new Popup(popupContext);
    render(".popup_wrapper", popup);

    const button = new Button(buttonContext);
    render(".popup__footer", button);

    if (window.location.pathname === "/change_photo_no_photo_picked.html") {
        const error_message = document.createElement("p");
        const footer = document.querySelector(".popup__footer");

        error_message.classList.add("error_message", "footer_error");
        error_message.textContent = "Нужно выбрать файл";
        footer.append(error_message);
    }
})();