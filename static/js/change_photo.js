document.addEventListener("DOMContentLoaded", () => {
    // compile the template
    const source = document.getElementById("entry-template").innerHTML;
    const template = Handlebars.compile(source);
    const context = {
        title: "Загрузите файл",
        link: "change_photo_uploaded.html",
        link_text: "Выбрать файл на компьютере",
        button_text: "Поменять"
    };

    if (window.location.pathname === "/change_photo.html") {
        context.title = "Файл загружен";
    }
    if (window.location.pathname === "/change_photo_uploaded.html") {
        context.title = "Файл загружен";
        context.filename = "pic.jpg";
    }
    if (window.location.pathname === "/change_photo_error.html") {
        context.title = "Ошибка, попробуйте ещё раз";
    }
    if (window.location.pathname === "/change_photo_no_photo_picked.html") {
        context.error_message_text = "Нужно выбрать файл";
    }
    // execute the compiled template and print the output to the console
    document.querySelector("body").innerHTML = template(context);

    if (window.location.pathname === "/change_photo_no_photo_picked.html") {
        const error_message = document.createElement("p");
        const footer = document.querySelector(".popup__footer");

        error_message.classList.add("error_message", "footer_error");
        error_message.textContent = "Нужно выбрать файл";
        footer.append(error_message);
    }
});