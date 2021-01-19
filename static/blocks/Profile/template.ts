export const template = `<div class="profile">
        <nav class="profile__nav">
            <a href="chat.html"><i class="fas fa-arrow-left icon button"></i></a>
        </nav>
        <main class="profile__main">
            <div>
                <a class="link" href="change_photo.html">
                    <i class="fas fa-image profile__avatar">
                        <span class="profile__avatar_tooltip">{{avatar_tooltip}}</span>
                    </i>
                </a>
                <p class="profile__name">{{profile_name}}</p>
            </div>
            <div class="middle w100proc"></div>
            <div class="footer w100proc"></div>
        </main>
    </div>`;