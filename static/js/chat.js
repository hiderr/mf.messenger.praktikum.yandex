document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".messages__menu_button").onclick = function () {
        document.querySelector(".messages__menu").classList.toggle("messages__menu_hidden");
        document.querySelector(".messages__menu_wrapper").classList.toggle("messages__menu_wrapper_clicked");
    };
    document.querySelector(".paperclip").onclick = function () {
        document.querySelector(".messages__menu_attachments").classList.toggle("messages__menu_hidden");
    };

    document.querySelector(".contacts__main").onclick = function (e) {
        document.querySelector(".contact_selected").classList.remove("contact_selected");
        e.target.closest("li").classList.add("contact_selected");
    }
});