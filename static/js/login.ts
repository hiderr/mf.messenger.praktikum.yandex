import Button from "../components/Button/index.js";
import LoginPage from "../blocks/Login/index.js";
import render from "../utils/renderDOM.js";

document.addEventListener("DOMContentLoaded", () => {
    const context = {
        title: "Вход",
        form_rows: [
            {name: "login", type: "text", label: "Логин", value: "ivanivanov", placeholder: "Логин"},
            {name: "password", type: "password", label: "Пароль", value: "", placeholder: "Пароль"},
        ],
        link_text: "Нет аккаунта?"
    };

    if (window.location.pathname === "/login_wrong_login.html"){
        context.form_rows[1].value = "123456";
    }
    if (window.location.pathname === "/login_wrong_password.html"){
        context.form_rows[1].value = "W95GZ9kANYOeWhg";
    }
    if (window.location.pathname === "/login_success.html"){
        context.form_rows[0].value = "ivanivanov2";
        context.form_rows[1].value = "W95GZ9kANYOeWhg";
    }

    const buttonContext = {
        className: "link_button",
        text: "Авторизоваться",
        link: "login_wrong_login.html"
    };

    if (window.location.pathname === "/login_wrong_login.html"){
        buttonContext.link = "login_wrong_password.html";
    }

    if (window.location.pathname === "/login_wrong_password.html"){
        buttonContext.link = "login_success.html";
    }

    if (window.location.pathname === "/login_success.html"){
        buttonContext.link = "chat.html";
    }

    const loginPage = new LoginPage(context);
    const button = new Button(buttonContext);

    render(".wrapper", loginPage);
    render(".button_wrapper", button);

    // add error_message to login input
    if (window.location.pathname === "/login_wrong_login.html"){
        let error_message = document.createElement("p"),
            input_wrapper =  document.querySelectorAll(".form__input_wrapper")[0];

        error_message.classList.add("error_message", "form__input_error");
        error_message.textContent = "Неверный логин";
        input_wrapper.append(error_message);
    }
    // add error_message to password input
    if (window.location.pathname === "/login_wrong_password.html"){
        let error_message = document.createElement("p"),
            input_wrapper =  document.querySelectorAll(".form__input_wrapper")[1];

        error_message.classList.add("error_message", "form__input_error");
        error_message.textContent = "Неверный пароль";
        input_wrapper.append(error_message);
    }

    document.querySelectorAll(".form__input").forEach(item => {
        item.addEventListener('input', e => {
            e.target["previousElementSibling"].hidden = e.target["value"] === "";
        })
    });
});