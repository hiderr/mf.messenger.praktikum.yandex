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
import {Form} from "../../components/Form/index.js";
import {merge} from "../../utils/merge.js";
import {Input} from "../../components/Input/index.js";
import {ProfileController} from "../../controllers/ProfileController.js";

export const PropsChangePhoto = {
    className: "",
    children: [
        new Popup({
            children: [
                new Title(PropsTitle),
                new Wrapper({
                    children: [
                        new Link(PropsLink),
                        new Form({
                            form_name: "form",
                            className: "hide avatar_form",
                            children: [
                                new Input({
                                    className: "hide",
                                    type: "file",
                                    name: "avatar"
                                })
                            ]
                        }),
                        new Link(merge(PropsLink, {className: "popup__uploaded_link hide", text: "pic.jpg"})),
                    ]
                }),
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
            selector: ".select_photo", name: "click", handler: (event, Block) => {
                event.preventDefault();
                const link = event.target,
                    parent = link.closest(".popup"),
                    fileInput = link.closest(".popup").querySelector("[type='file']"),
                    fileNameLink = parent.querySelector(".popup__uploaded_link");

                if (!fileInput.getAttribute("accept") && !fileInput.onchange){
                    fileInput.setAttribute("accept", "image/*");
                    fileInput.onchange = function(){
                        const fileList = fileInput.files;
                        fileNameLink.textContent = fileList.item(0).name;
                        fileNameLink.classList.remove("hide");
                        link.parentElement.classList.add("hide");
                    };
                }
                fileInput.click();
            }
        },
        {
            selector: "button", name: "click", handler: (event, Block) => {
                event.preventDefault();
                const popup = event.target.closest(".popup"),
                    chooseFileLink = popup.querySelector(".select_photo"),
                    uploadedFileLink = popup.querySelector(".popup__uploaded_link");
                if (uploadedFileLink.classList.contains("hide")){
                    alert("Сначала необходимо выбрать файл");
                } else {
                    ProfileController.uploadAvatar({
                        success: () => {
                            Block.router.go("/profile");
                            chooseFileLink.classList.remove("hide");
                        }
                    });
                }
            }
        },
    ]
};
