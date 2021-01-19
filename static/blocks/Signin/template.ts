export const template = `<div class="login_box login_box__higher">
            <h1 class="login_box_title">{{title}}</h1>
            <form name="form" class="login_form">
                {{#each form_rows}}
                <label class="login_form_label">{{label}}</label>
                <input type="{{type}}" class="form__input" name="{{name}}" value="{{value}}" placeholder="{{placeholder}}">
                {{/each}}
            </form>
            <div class="form_buttons">
            <div class="button_wrapper"></div>
                <div class="button_wrapper"></div>
                <a class="link text_link" href="index.html">{{link_text}}</a>
            </div>
        </div>`;