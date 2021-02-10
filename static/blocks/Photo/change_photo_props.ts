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
    ],
    events: [
        {
            selector: "[href='/photo_uploaded']", name: "click", handler: (event, Block) => {
                event.preventDefault();
                Block.router.go("/photo_uploaded");
            }
        },
        {
            selector: "[href='/no_photo_picked']", name: "click", handler: (event, Block) => {
                event.preventDefault();
                Block.router.go("/no_photo_picked");
            }
        },
    ]
};
