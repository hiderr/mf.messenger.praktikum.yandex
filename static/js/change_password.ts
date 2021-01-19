import ProfilePage from "../blocks/Profile/index.js";
import Form from "../components/Form/index.js";
import Button from "../components/Button/index.js";
import render from "../utils/renderDOM.js";

document.addEventListener("DOMContentLoaded", () => {
    const context = {
        title: "Регистрация",
        avatar_tooltip: "Поменять аватар"
    };

    const formContext = {
        form_rows: [
            {label: "Старый пароль", type: "password", name: "oldPassword", value: "123456789"},
            {label: "Новый пароль", type: "password", name: "newPassword", value: "40FXZ4wZncuUaf6"},
            {label: "Повторите новый пароль", type: "password", name: "newPasswordRepeat", value: "40FXZ4wZncuUaf6"},
        ],
        row_template: `<label class="form__row_name">{{label}}</label>
                    <input class="form__input" type="{{type}}" name="{{name}}" value="{{value}}"/>`
    };

    const profilePage = new ProfilePage(context);
    render(".wrapper", profilePage);

    const form = new Form(formContext);
    render(".middle", form);

    const button = new Button({
        className: "link_button",
        text: "Сохранить",
        link: "profile.html"
    });
    render(".footer", button);
});