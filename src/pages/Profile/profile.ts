import Fields from "../../components/Fields";
import Field from "../../components/Field";
import { Block } from "../../utils/Block";
import template from "./profile.hbs";
import "./profile.less";
import Button from "../../components/Button";

interface IProfile {
  name: string;
  fields: Block[];
  button: Block;
  events?: {
    // submit: (e: SubmitEvent) => void;
  };
}

export class ProfilePage extends Block {
  constructor(props?: IProfile) {
    const events = {};
    super({ ...props, events });
  }

  protected initChildren(): void {
    this.children.fields = new Fields({
      fields: [
        new Field({
          data: "itwassoclear@gmail.com",
          label: "email",
          isInput: false,
          isData: true,
        }),
        new Field({
          data: "itwassoclear",
          label: "login",
          isInput: false,
          isData: true,
        }),
        new Field({
          data: "Maria",
          label: "first name",
          isInput: false,
          isData: true,
        }),
        new Field({
          data: "Kotliarova",
          label: "last name",
          isInput: false,
          isData: true,
        }),
        new Field({
          data: "Maria",
          label: "chat name",
          isInput: false,
          isData: true,
        }),
        new Field({
          data: "89778808970",
          label: "phone",
          isInput: false,
          isData: true,
        }),
      ],
      // button: new Button({
      //   label: "Save",
      //   className: "save-button",
      //   events: {
      //     click: () => console.log("kkkkk"),
      //   },
      // }),
    });
    this.children.editButton = new Button({
      label: "Edit profile",
      className: "profile-button",
      events: {
        click: () => {
          // redirect to EditProfile
          const currentUrl = window.location.origin;
          window.location.href = `${currentUrl}/EditProfile/edit-profile.hbs`;
        },
      },
    });
    this.children.changePassButton = new Button({
      label: "Change password",
      className: "profile-button",
      events: {
        click: () => {
          // redirect to ChangePassword
          const currentUrl = window.location.origin;
          window.location.href = `${currentUrl}/ChangePassword/change-pass.hbs`;
        },
      },
    });
    this.children.logoutButton = new Button({
      label: "Log out",
      className: "profile-button red",
      events: {
        click: () => {
          const currentUrl = window.location.origin;
          window.location.href = `${currentUrl}`;
        },
      },
    });
  }

  render() {
    // const plug: any = document.querySelector(".plug");
    // const avatar: any = document.querySelector(".profile-avatar");

    // avatar.addEventListener("mouseover", () => {
    //   plug.style.opacity = 100;
    // });

    // avatar.addEventListener("mouseout", () => {
    //   plug.style.opacity = 0;
    // });

    return this.compile(template, {});
  }
}
