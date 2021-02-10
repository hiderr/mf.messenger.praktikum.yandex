export const template = `<div>
                <a class="link" href="/change_photo">
                    <i class="fas fa-image profile__avatar">
                        <span class="profile__avatar_tooltip">{{tooltip}}</span>
                    </i>
                </a>
                <p class="profile__name {{#if hide_title}}hide{{/if}}">{{title}}</p>
            </div>`;