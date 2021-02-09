import {ErrorPage} from "../blocks/Error/index.js";

(() => {
    let props = {
        error_code: "404",
        error_message: "Такой страницы не существует",
        link_text: "Назад к чатам"
    };

    if (window.location.pathname === "/500.html"){
        props = {
            error_code: "500",
            error_message: "Проблемы на нашей стороне",
            link_text: "Назад к чатам"
        }
    }
    const errorPage = new ErrorPage(props);
    // errorPage.render(".wrapper");
})();