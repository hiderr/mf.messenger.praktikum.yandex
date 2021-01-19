import Button from "../components/Button/index.js";
import ErrorPage from "../blocks/Error/index.js";
import render from "../utils/renderDOM.js";

document.addEventListener("DOMContentLoaded", () => {
    let context = {
        error_code: "404",
        error_message: "Такой страницы не существует",
        link_text: "Назад к чатам"
    };

    if (window.location.pathname === "/500.html"){
        context = {
            error_code: "500",
            error_message: "Проблемы на нашей стороне",
            link_text: "Назад к чатам"
        }
    }
    const errorPage = new ErrorPage(context);
    render(".wrapper", errorPage);
});