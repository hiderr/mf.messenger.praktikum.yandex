export const template = `<div class="login_box">
            <h1 class="login_box_title">{{title}}</h1>
            <form name="form" class="login_form">
                {{#each form_rows}}
                <div class="form__input_wrapper">
                    <label class="login_form_label">{{label}}</label>
                    <input class="form__input" type="{{type}}" name="{{name}}" value="{{value}}" placeholder="{{placeholder}}">
                </div>
                {{/each}}
            </form>
            <div class="form_buttons">
                <div class="button_wrapper"></div>
                <a class="link text_link" href="signin.html">{{link_text}}</a>
            </div>
        </div>`;