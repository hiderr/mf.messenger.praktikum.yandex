export const template = `<div class="overlay">
            <div class="popup popup_offset">
                <header>
                    <h1 class="popup__header {{title_class}}">{{title}}</h1>
                </header>
                <main class="popup__middle">
                    <a class="popup__link {{link_class}}" href="{{link}}">{{link_text}}</a>
                </main>
                <footer class="popup__footer"></footer>
            </div>
        </div>`;