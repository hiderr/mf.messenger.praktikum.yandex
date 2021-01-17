document.addEventListener("DOMContentLoaded", () => {
    // compile the template
    const source = document.getElementById("entry-template").innerHTML;
    const template = Handlebars.compile(source);
    const context = {
        contacts: [
            {name: "Андрей", preview: "Набирай", time: "10:52", unread: 2},
            {name: "Братишка", preview: "Ну, давай, заскочу!", time: "22:15", unread: 2},
            {name: "Иван", preview: "Да, как в тот раз", time: "12:34", unread: 2},
            {name: "Ольга", preview: "Увидимся", time: "10:49", unread: 2},
            {name: "Майк", preview: "Как жизнь, чувак?", time: "09:50", unread: 2},
            {name: "Антон (Ремонт)", preview: "Все готово", time: "15:29", unread: 2},
            {name: "Лёха", preview: "Изображение", time: "17:49", unread: 2},
            {name: "Игорь", preview: "Я не в курсе", time: "18:49", unread: 2},
            {name: "Полковник", preview: "Завтра до 17", time: "19:49", unread: 2},
            {name: "Алина", preview: "Может увидимся?", time: "20:49", unread: 2},
            {name: "Антоха", preview: "Бро, такой трек записал... Чума просто!", time: "21:49", unread: 2},
            {name: "Константин", preview: "Заявление подписал", time: "22:49", unread: 2},
        ],
        popup_title: "Добавить пользователя",
        popup_label: "Логин",
        popup_input_value: "ivanivanov",
        popup_button_link: "chat.html",
        popup_button_text: "Добавить"
    };
    // execute the compiled template and print the output to the console
    document.querySelector("body").innerHTML = template(context);
});