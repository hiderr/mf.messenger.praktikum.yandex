document.addEventListener("DOMContentLoaded", () => {
    // compile the template
    const source = document.getElementById("entry-template").innerHTML;
    const template = Handlebars.compile(source);
    const context = {
        title: "Регистрация",
        form_rows: [
            {label: "Почта", type: "email", name: "email", value: "pochta@yandex.ru", placeholder: "Почта"},
            {label: "Логин", type: "text", name: "login", value: "ivanivanov", placeholder: "Логин"},
            {label: "Имя", type: "text", name: "first_name", value: "Иван", placeholder: "Имя"},
            {label: "Фамилия", type: "text", name: "second_name", value: "Иванов", placeholder: "Фамилия"},
            {label: "Телефон", type: "tel", name: "phone", value: "+7 (909) 967 30 30", placeholder: "Телефон"},
            {label: "Пароль", type: "password", name: "password", value: "123456789", placeholder: "Пароль"},
            {label: "Пароль (ещё раз)", type: "password", name: "password_repeat", value: "123456789", placeholder: "Пароль (ещё раз)"},
        ],
        button_text: "Зарегистрироваться",
        link_text: "Войти"
    };

    // execute the compiled template and print the output to the console
    document.querySelector("body").innerHTML = template(context);
});