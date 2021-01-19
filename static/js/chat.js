import ChatPage from "../blocks/Chat/index.js";
import render from "../utils/renderDOM.js";
document.addEventListener("DOMContentLoaded", () => {
    const context = {
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
                class: "message__text message__text_from",
                content: `Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.`
            },
            {
                class: "message__text message__text_from",
                content: `Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.`
            },
            {
                class: "message__text message__text_to", content: `Ясно`, to: true, time: "12:51"
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
    const chatPage = new ChatPage(context);
    render(".wrapper", chatPage);
    document.querySelector(".messages__menu_button").addEventListener("click", () => {
        document.querySelector(".messages__menu").classList.toggle("messages__menu_hidden");
        document.querySelector(".messages__menu_wrapper").classList.toggle("messages__menu_wrapper_clicked");
    });
    document.querySelector(".paperclip").addEventListener("click", () => {
        document.querySelector(".messages__menu_attachments").classList.toggle("messages__menu_hidden");
    });
    document.querySelector(".contacts__main").addEventListener("click", (e) => {
        document.querySelector(".contact_selected").classList.remove("contact_selected");
        // @ts-ignore
        e.target.closest("li").classList.add("contact_selected");
    });
});
//# sourceMappingURL=chat.js.map