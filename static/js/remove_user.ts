import {ChatPage} from "../blocks/Chat/index.js";
import {Popup} from "../components/Popup/index.js";
import {Form} from "../components/Form/index.js";
import {Button} from "../components/Button/index.js";
import {Title} from "../components/Title/index.js";
import {Wrapper} from "../components/Wrapper/index.js";
import {Input} from "../components/Input/index.js";

(() => {
    const chat = new ChatPage({
        chat_class: "w100proc",
        profile_link_text: "Профиль",
        search_placeholder: "Поиск",
        contacts: [
            {name: "Андрей", selectedClass: "contact_selected", preview: "Набирай", time: "10:52", unread: 2},
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
            {icon: "fa-plus", link: "add_user.html", text: "Добавить пользователя"},
            {icon: "fa-minus", link: "remove_user.html", text: "Удалить пользователя"},
            {icon: "fa-trash-alt", text: "Удалить чат"}
        ],
        attachment_actions: [
            {icon: "fa-image", text: "Фото или Видео"},
            {icon: "fa-file", text: "Файл"},
            {icon: "fa-location-arrow", text: "Локация"}
        ]
    });

    const popup = new Popup({
        children: [
            new Title({
                text: "Удалить пользователя",
                className: "popup__header"
            }),
            new Form({
                form_valid: true,
                form_name: "form",
                children: [
                    new Input({labelClassName: "login_form_label", className: "form__input", label: "Логин", type: "text", name: "login", value: "ivanivanov"})
                ]
            }),
            new Button({
                className: "link_button",
                text: "Удалить",
                link: "chat.html"
            })
        ]
    });

    const addUser = new Wrapper({
        children: [
            popup,
            chat
        ]
    });

    let root = document.getElementById('root');
    root.innerHTML = addUser.render();
})();