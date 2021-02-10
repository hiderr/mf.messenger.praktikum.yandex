import {ProfilePage} from "../../blocks/Profile/index.js";
import {Button} from "../../components/Button/index.js";
import {Popup} from "../../components/Popup/index.js";
import {Wrapper} from "../../components/Wrapper/index.js";
import {Link} from "../../components/Link/index.js";
import {Title} from "../../components/Title/index.js";
import {Message} from "../../components/Message/index.js";
import {PropsProfile} from "../../blocks/Profile/props.js";
import {PropsTitle} from "./title_props.js";
import {PropsLink} from "./link_props.js";
import {PropsButton} from "./button_props.js";
import {PropsMessage} from "./message_props.js";

/*if (window.location.pathname === "/change_photo.html") {
    propsTitle.text = "Файл загружен";
}
if (window.location.pathname === "/change_photo_uploaded.html") {
    propsTitle.text = "Файл загружен";
    propsLink.className = "popup__uploaded_link";
    propsLink.text = "pic.jpg";
    propsButton.link = "change_photo_error.html";
}
if (window.location.pathname === "/change_photo_error.html") {
    propsMessage.text = "Ошибка, попробуйте ещё раз";
    propsLink.className = "popup__link";
}
if (window.location.pathname === "/change_photo_no_photo_picked.html") {
    propsMessage.text = "Нужно выбрать файл";
}*/

export const PropsChangePhoto = {
    className: "",
    children: [
        new Popup({
            children: [
                new Title(PropsTitle),
                new Link(PropsLink),
                new Wrapper({
                    className: "popup__footer align_center",
                    children: [
                        new Button(PropsButton),
                        new Message(PropsMessage)
                    ]
                })
            ]
        }),
        new ProfilePage(PropsProfile)
    ]
};
