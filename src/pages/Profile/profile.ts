import Fields from "../../components/Fields";
import Field from "../../components/Field";
import { Block } from "../../utils/Block";
import template from "./profile.hbs";
import "./profile.less";
import Button from "../../components/Button";
import ChangePassword from "../ChangePassword";
import EditProfile from "../EditProfile";

export class ProfilePage extends Block {
  constructor() {
    super({});
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
          label: "second name",
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
    });
    this.children.editButton = new Button({
      label: "Edit profile",
      className: "profile-button",
      events: {
        click: () => {
          const profileBlock = document.querySelector(
            ".profile_block"
          ) as HTMLElement;
          profileBlock.style.display = "none";
          const profileFields = document.querySelector(
            ".profile-fields"
          ) as HTMLElement;
          profileFields.style.display = "flex";
        },
      },
    });
    this.children.changePassButton = new Button({
      label: "Change password",
      className: "profile-button",
      events: {
        click: () => {
          const profileBlock = document.querySelector(
            ".profile_block"
          ) as HTMLElement;
          profileBlock.style.display = "none";
          const passwordFields = document.querySelector(
            ".password-fields"
          ) as HTMLElement;
          passwordFields.style.display = "flex";
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
    this.children.editProfile = new EditProfile({});
    this.children.changePassword = new ChangePassword({});
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
