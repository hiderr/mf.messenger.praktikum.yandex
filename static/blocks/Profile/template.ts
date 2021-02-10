export const template = `<div class="profile">
        <nav class="profile__nav">
            <a href="{{back_button_link}}"><i class="fas fa-arrow-left icon button"></i></a>
        </nav>
        <main class="profile__main">
            {{CHILDREN}}
        </main>
    </div>`;