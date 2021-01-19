import ProfilePage from "../blocks/Profile/index.js";
import Form from "../components/Form/index.js";
import Button from "../components/Button/index.js";
import render from "../utils/renderDOM.js";

document.addEventListener("DOMContentLoaded", () => {
    const context = {
        avatar_tooltip: "Поменять аватар"
    };
    const profilePage = new ProfilePage(context);
    render(".wrapper", profilePage);

    const formContext = {
        form_rows: [
            {name: "Почта", type: "email", value: "pochta@yandex.ru"},
            {name: "Логин", type: "text", value: "ivanivanov"},
            {name: "Имя", type: "text", value: "Иван"},
            {name: "Фамилия", type: "text", value: "Иванов"},
            {name: "Имя в чате", type: "text", value: "Иван"},
            {name: "Телефон", type: "tel", value: "+7 (909) 967 30 30"},
        ],
        row_template: `<p class="form__row_name">{{name}}</p>
                        <input class="form__row_value form__input form__input_align_right" type="{{type}}" value="{{value}}" {{#if ../form_disabled}}disabled{{/if}}/>`
    };
    const form = new Form(formContext);
    render(".middle", form);

    const button = new Button({
        className: "link_button",
        text: "Сохранить",
        link: "profile.html"
    });
    render(".footer", button);
});