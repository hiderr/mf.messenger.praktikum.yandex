document.addEventListener("DOMContentLoaded", () => {
    // compile the template
    const source = document.getElementById("entry-template").innerHTML;
    const template = Handlebars.compile(source);
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
    // execute the compiled template and print the output to the console
    document.querySelector("body").innerHTML = template(context);
});