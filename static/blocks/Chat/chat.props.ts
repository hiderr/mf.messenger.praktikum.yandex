export const PropsChat = {
    chat_class: "w100proc",
    profile_link_text: "Профиль",
    search_placeholder: "Поиск",
    chats: [
        /*{title: "Андрей", selectedClass: "contact_selected", avatar: null, preview: "Набирай", time: "10:52", unread: 2}*/
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
        {icon: "fa-user-plus", link: "add_user", text: "Добавить пользователя"},
        {icon: "fa-user-minus", link: "remove_user", text: "Удалить пользователя"},
        {icon: "fa-plus", link: "add_chat", text: "Добавить чат"},
        {icon: "fa-minus", text: "Удалить чат"}
    ],
    attachment_actions: [
        {icon: "fa-image", text: "Фото или Видео"},
        {icon: "fa-file", text: "Файл"},
        {icon: "fa-location-arrow", text: "Локация"}
    ],
    events: [
        {
            selector: ".chat", name: "click", handler: (event, Block) => {
                const el = event.target;
                if (el.matches(".messages__menu_button")) {
                    document.querySelector(".messages__menu").classList.toggle("messages__menu_hidden");
                    el.parentElement.classList.toggle("messages__menu_wrapper_clicked");
                }
                if (el.parentElement.matches(".paperclip")) {
                    document.querySelector(".messages__menu_attachments").classList.toggle("messages__menu_hidden");
                }
                if (el.closest(".contact")) {
                    if (document.querySelector(".contact_selected")){
                        document.querySelector(".contact_selected").classList.remove("contact_selected");
                    }
                    el.closest("li").classList.add("contact_selected");
                    Block.store.set("chatProps.selectedId", parseInt(el.closest("li").dataset.id));
                }
                if (el.parentElement.matches(".send")){
                    Block.validation.validateMessage(document.querySelector(".messages__search"));
                }
            }
        },
        {
            selector: "[href='add_user']", name: "click", handler: (event, Block) => {
                event.preventDefault();
                Block.router.go("/add_user");
            }
        },
        {
            selector: "[href='remove_user']", name: "click", handler: (event, Block) => {
                event.preventDefault();
                Block.router.go("/remove_user");
            }
        },
        {
            selector: "[href='add_chat']", name: "click", handler: (event, Block) => {
                event.preventDefault();
                Block.router.go("/add_chat");
            }
        },
        {
            selector: "[href='profile']", name: "click", handler: (event, Block) => {
                event.preventDefault();
                Block.router.go("/profile");
            }
        }
    ]
};