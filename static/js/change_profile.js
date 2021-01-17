document.addEventListener("DOMContentLoaded", () => {
    // compile the template
    const source = document.getElementById("entry-template").innerHTML;
    const template = Handlebars.compile(source);
    const context = {
        form_rows: [
            {name: "Почта", type: "email", value: "pochta@yandex.ru"},
            {name: "Логин", type: "text", value: "ivanivanov"},
            {name: "Имя", type: "text", value: "Иван"},
            {name: "Фамилия", type: "text", value: "Иванов"},
            {name: "Имя в чате", type: "text", value: "Иван"},
            {name: "Телефон", type: "tel", value: "+7 (909) 967 30 30"},
        ],
        avatar_tooltip: "Поменять аватар",
        button_text: "Сохранить"
    };
    // execute the compiled template and print the output to the console
    document.querySelector("body").innerHTML = template(context);
});