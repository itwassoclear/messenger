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
  constructor(props: IProfile) {
    const events = {};
    super({ ...props, events });
  }

  protected initChildren(): void {
    this.children.fields = new Fields({
      fields: [
        new Field({
          data: "itwassoclear@gmail.com",
          label: "email",
          type: "email",
          value: "itwassoclear@gmail.com",
          placeholder: "email",
          name: "email",
          error: "invalid email",
        }),
        new Field({
          data: "itwassoclear",
          label: "login",
          type: "text",
          value: "itwassoclear",
          placeholder: "login",
          name: "login",
          error: "invalid login",
        }),
        new Field({
          data: "Maria",
          label: "first name",
          type: "text",
          value: "Maria",
          placeholder: "first name",
          name: "first_name",
          error: "invalid name",
        }),
        new Field({
          data: "Kotliarova",
          label: "last name",
          type: "text",
          value: "Kotliarova",
          placeholder: "last name",
          name: "last_name",
          error: "invalid last name",
        }),
        new Field({
          data: "Maria",
          label: "chat name",
          type: "text",
          value: "Maria",
          placeholder: "chat name",
          name: "chat_name",
          error: "invalid chat name",
        }),
        new Field({
          data: "89778808970",
          label: "phone",
          type: "phone",
          value: "89778808970",
          placeholder: "phone",
          name: "phone",
          error: "invalid phone",
        }),
      ],
      button: new Button({
        label: "Save",
        className: "save-button",
        events: {
          click: () => console.log("kkkkk"),
        },
      }),
    });
    this.children.editButton = new Button({
      label: "Edit profile",
      className: "profile-button",
      events: {
        click: () => console.log("kkkkk"),
      },
    });
    this.children.changePassButton = new Button({
      label: "Change password",
      className: "profile-button",
      events: {
        click: () => console.log("kkkkk"),
      },
    });
    this.children.logoutButton = new Button({
      label: "Log out",
      className: "profile-button red",
      events: {
        click: () => console.log("kkkkk"),
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
