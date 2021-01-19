import Button from "../components/Button/index.js";
import SigninPage from "../blocks/Signin/index.js";
import render from "../utils/renderDOM.js";

document.addEventListener("DOMContentLoaded", () => {
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
        link_text: "Войти"
    };

    const loginPage = new SigninPage(context);

    const buttonContext = {
        className: "link_button",
        text: "Зарегистрироваться",
        link: "chat.html"
    };

    const button = new Button(buttonContext);

    render(".wrapper", loginPage);
    render(".button_wrapper", button);
});