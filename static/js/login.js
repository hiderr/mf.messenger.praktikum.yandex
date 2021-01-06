document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".form__input").forEach(item => {
        item.addEventListener('input', e => {
            e.target.previousElementSibling.hidden = e.target.value === "";
        })
    });
});