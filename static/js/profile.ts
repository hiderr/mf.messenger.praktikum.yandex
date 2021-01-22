import {ProfilePage} from "../blocks/Profile/index.js";
import {Form} from "../components/Form/index.js";

(() => {
    const context = {
        avatar_tooltip: "Поменять аватар",
        profile_name: "Иван"
    };

    const formContext = {
        form_disabled: true,
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

    const form2Context = {
        form_rows: [
            {class: "form__pink_link", link: "change_profile.html", text: "Изменить данные"},
            {class: "form__pink_link", link: "change_password.html", text: "Изменить пароль"},
            {class: "form__red_link", link: "index.html", text: "Выйти"},
        ],
        row_template: `<a class="link {{class}}" href="{{link}}">{{text}}</a>`
    };

    const profilePage = new ProfilePage(context);
    profilePage.render(".wrapper");

    const form = new Form(formContext);
    form.render(".middle");

    const form2 = new Form(form2Context);
    form2.render(".footer");
})();