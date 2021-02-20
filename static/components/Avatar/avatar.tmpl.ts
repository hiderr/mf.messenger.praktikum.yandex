export const avatarTmpl = `<div>
                <a class="link" href="/change_photo">
                    <div class="profile__avatar_wrapper">
                        <div class="profile__avatar_bg">
                            <img class="profile__avatar_img" src="{{url}}" />
                        </div>
                         <span class="profile__avatar_tooltip">{{tooltip}}</span>
                    </div>
                </a>
                <p class="profile__name {{#if hide_title}}hide{{/if}}">{{title}}</p>
            </div>`;
