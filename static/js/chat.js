document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".messages__menuBtn").onclick = function () {
        document.querySelector(".messages__menu").classList.toggle("messages__menu_hidden");
    }
    document.querySelector(".paperclip").onclick = function () {
        document.querySelector(".messages__menu_attachments").classList.toggle("messages__menu_hidden");
    }
});