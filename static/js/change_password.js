document.addEventListener("DOMContentLoaded", () => {
    // compile the template
    const source = document.getElementById("entry-template").innerHTML;
    const template = Handlebars.compile(source);
    const context = {
        title: "Регистрация",
        form_rows: [
            {label: "Старый пароль", type: "password", name: "oldPassword", value: "123456789"},
            {label: "Новый пароль", type: "password", name: "newPassword", value: "40FXZ4wZncuUaf6"},
            {label: "Повторите новый пароль", type: "password", name: "newPasswordRepeat", value: "40FXZ4wZncuUaf6"},
        ],
        button_text: "Сохранить",
        avatar_tooltip: "Поменять аватар"
    };

    // execute the compiled template and print the output to the console
    document.querySelector("body").innerHTML = template(context);
});