"use strict";
exports.__esModule = true;
var index_js_1 = require("../blocks/Chat/index.js");
var index_js_2 = require("../components/Popup/index.js");
var index_js_3 = require("../components/Form/index.js");
var index_js_4 = require("../components/Button/index.js");
var renderDOM_js_1 = require("../utils/renderDOM.js");
(function () {
    var chatContext = {
        chat_class: "w100proc",
        profile_link_text: "Профиль",
        search_placeholder: "Поиск",
        contacts: [
            { name: "Андрей", selectedClass: "contact_selected", preview: "Набирай", time: "10:52", unread: 2 },
            { name: "Братишка", preview: "Ну, давай, заскочу!", time: "22:15", unread: 2 },
            { name: "Иван", preview: "Да, как в тот раз", time: "12:34", unread: 2 },
            { name: "Ольга", preview: "Увидимся", time: "10:49", unread: 2 },
            { name: "Майк", preview: "Как жизнь, чувак?", time: "09:50", unread: 2 },
            { name: "Антон (Ремонт)", preview: "Все готово", time: "15:29", unread: 2 },
            { name: "Лёха", preview: "Изображение", time: "17:49", unread: 2 },
            { name: "Игорь", preview: "Я не в курсе", time: "18:49", unread: 2 },
            { name: "Полковник", preview: "Завтра до 17", time: "19:49", unread: 2 },
            { name: "Алина", preview: "Может увидимся?", time: "20:49", unread: 2 },
            { name: "Антоха", preview: "Бро, такой трек записал... Чума просто!", time: "21:49", unread: 2 },
            { name: "Константин", preview: "Заявление подписал", time: "22:49", unread: 2 },
        ],
        messages_date: "19 июня",
        messages: [
            {
                "class": "message__text message__text_from",
                content: "\u041F\u0440\u0438\u0432\u0435\u0442! \u0421\u043C\u043E\u0442\u0440\u0438, \u0442\u0443\u0442 \u0432\u0441\u043F\u043B\u044B\u043B \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u044B\u0439 \u043A\u0443\u0441\u043E\u043A \u043B\u0443\u043D\u043D\u043E\u0439 \u043A\u043E\u0441\u043C\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0438\u0441\u0442\u043E\u0440\u0438\u0438 \u2014 \u041D\u0410\u0421\u0410 \u0432 \u043A\u0430\u043A\u043E\u0439-\u0442\u043E \u043C\u043E\u043C\u0435\u043D\u0442 \u043F\u043E\u043F\u0440\u043E\u0441\u0438\u043B\u0430 \u0425\u0430\u0441\u0441\u0435\u043B\u044C\u0431\u043B\u0430\u0434 \u0430\u0434\u0430\u043F\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043C\u043E\u0434\u0435\u043B\u044C SWC \u0434\u043B\u044F \u043F\u043E\u043B\u0435\u0442\u043E\u0432 \u043D\u0430 \u041B\u0443\u043D\u0443. \u0421\u0435\u0439\u0447\u0430\u0441 \u043C\u044B \u0432\u0441\u0435 \u0437\u043D\u0430\u0435\u043C \u0447\u0442\u043E \u0430\u0441\u0442\u0440\u043E\u043D\u0430\u0432\u0442\u044B \u043B\u0435\u0442\u0430\u043B\u0438 \u0441 \u043C\u043E\u0434\u0435\u043B\u044C\u044E 500 EL \u2014 \u0438 \u043A \u0441\u043B\u043E\u0432\u0443 \u0433\u043E\u0432\u043E\u0440\u044F, \u0432\u0441\u0435 \u0442\u0443\u0448\u043A\u0438 \u044D\u0442\u0438\u0445 \u043A\u0430\u043C\u0435\u0440 \u0432\u0441\u0435 \u0435\u0449\u0435 \u043D\u0430\u0445\u043E\u0434\u044F\u0442\u0441\u044F \u043D\u0430 \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u0438 \u041B\u0443\u043D\u044B, \u0442\u0430\u043A \u043A\u0430\u043A \u0430\u0441\u0442\u0440\u043E\u043D\u0430\u0432\u0442\u044B \u0441 \u0441\u043E\u0431\u043E\u0439 \u0437\u0430\u0431\u0440\u0430\u043B\u0438 \u0442\u043E\u043B\u044C\u043A\u043E \u043A\u0430\u0441\u0441\u0435\u0442\u044B \u0441 \u043F\u043B\u0435\u043D\u043A\u043E\u0439."
            },
            {
                "class": "message__text message__text_from",
                content: "\u0425\u0430\u0441\u0441\u0435\u043B\u044C\u0431\u043B\u0430\u0434 \u0432 \u0438\u0442\u043E\u0433\u0435 \u0430\u0434\u0430\u043F\u0442\u0438\u0440\u043E\u0432\u0430\u043B SWC \u0434\u043B\u044F \u043A\u043E\u0441\u043C\u043E\u0441\u0430, \u043D\u043E \u0447\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A \u0438 \u043D\u0430 \u0440\u0430\u043A\u0435\u0442\u0443 \u043E\u043D\u0438 \u0442\u0430\u043A \u043D\u0438\u043A\u043E\u0433\u0434\u0430 \u0438 \u043D\u0435 \u043F\u043E\u043F\u0430\u043B\u0438. \u0412\u0441\u0435\u0433\u043E \u0438\u0445 \u0431\u044B\u043B\u043E \u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u043E 25 \u0448\u0442\u0443\u043A, \u043E\u0434\u043D\u0443 \u0438\u0437 \u043D\u0438\u0445 \u043D\u0435\u0434\u0430\u0432\u043D\u043E \u043F\u0440\u043E\u0434\u0430\u043B\u0438 \u043D\u0430 \u0430\u0443\u043A\u0446\u0438\u043E\u043D\u0435 \u0437\u0430 45000 \u0435\u0432\u0440\u043E."
            },
            {
                "class": "message__text message__text_to",
                content: "\u042F\u0441\u043D\u043E",
                to: true, time: "12:51"
            },
        ],
        menu_actions: [
            { icon: "fa-plus", link: "add_user.html", text: "Добавить пользователя" },
            { icon: "fa-minus", link: "remove_user.html", text: "Удалить пользователя" },
            { icon: "fa-trash-alt", text: "Удалить чат" }
        ],
        attachment_actions: [
            { icon: "fa-image", text: "Фото или Видео" },
            { icon: "fa-file", text: "Файл" },
            { icon: "fa-location-arrow", text: "Локация" }
        ]
    };
    var chat = new index_js_1["default"](chatContext);
    renderDOM_js_1["default"](".wrapper", chat);
    var popupContext = {
        title: "Добавить пользователя"
    };
    var popup = new index_js_2["default"](popupContext);
    renderDOM_js_1["default"](".popup_wrapper", popup);
    var formContext = {
        form_rows: [
            { label: "Логин", type: "text", name: "login", value: "ivanivanov" }
        ],
        row_template: "<label class=\"login_form_label\">{{label}}</label>\n                    <input class=\"form__input\" type=\"{{type}}\" name=\"{{name}}\" value=\"{{value}}\"/>"
    };
    var form = new index_js_3["default"](formContext);
    renderDOM_js_1["default"](".popup__middle", form);
    var button = new index_js_4["default"]({
        className: "link_button",
        text: "Добавить",
        link: "chat.html"
    });
    renderDOM_js_1["default"](".popup__footer", button);
})();
