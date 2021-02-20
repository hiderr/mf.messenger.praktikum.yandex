export const template = `<div class="chat {{chat_class}}">
        <nav class="contacts">
            <header class="contacts__header">
                <div class="profile_link_wrapper">
                    <a class="contact__profileLink" href="profile">{{profile_link_text}}</a>
                </div>
                <input class="search contact__search" type="text" placeholder="&#128269; {{search_placeholder}}">
            </header>
            <ul class="contacts__main">
                {{#each chats}}
                <li data-id="{{id}}" class="contact {{selectedClass}}">
                    <div class="contact__avatar"></div>
                    <div class="contact_info">
                        <h2 class="contact__name">{{title}}</h2>
                        <span class="contact__preview">{{preview}}</span>
                    </div>
                    <div class="time_count">
                        <time class="contact__time time">{{time}}</time>
<!--                        <span class="contact__count">{{unread}}</span>-->
                        <span />
                    </div>
                </li>
                {{/each}}
            </ul>
        </nav>
        <div class="messages">
            <header class="messages__header">
                <div class="messages__avatar"></div>
                <h2 class="messages__name">Андрей</h2>
                <div class="messages__menu_wrapper">
                    <button class="messages__menu_button button"></button>
                </div>
            </header>
            <main class="messages__main">

                <div class="messages__menu messages__menu_users messages__menu_hidden">
                    {{#each menu_actions}}
                    <button class="button">
                        <a class="link messages__menu_item" href="{{link}}">
                            <i class="fas {{icon}} icon messages__menu_item_icon_border messages__menu_item_icon"></i>
                            <p class="messages__menu_item_text">{{text}}</p>
                        </a>
                    </button>
                    {{/each}}
                </div>

                <div class="messages__menu messages__menu_attachments messages__menu_hidden">
                    {{#each attachment_actions}}
                    <button class="button">
                        <div class="messages__menu_item">
                            <i class="fas {{icon}} icon messages__menu_item_icon"></i>
                            <p class="messages__menu_item_text">{{text}}</p>
                        </div>
                    </button>
                    {{/each}}
                </div>

                <p class="messages__date">{{messages_date}}</p>
                {{#each messages}}
                <div class="message {{class}}"><p class="message__text_inner">{{content}}</p>{{#if to}}<i class="fas fa-check-double"></i><time class="message__time time">{{time}}</time>{{/if}}</div>
                {{/each}}
            </main>
            <footer class="messages__footer">
                <button class="button paperclip"><i class="fas fa-paperclip"></i></button>
                <input class="search messages__search" type="text" placeholder="Сообщение" name="message">
                <button class="button send"><i class="fas fa-arrow-right icon"></i></button>
            </footer>
        </div>
    </div>`;
