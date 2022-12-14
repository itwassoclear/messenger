import Fields from "../../components/Fields";
import Field from "../../components/Field";
import { Block } from "../../utils/Block";
import template from "./profile.hbs";
import "./profile.less";
import Button from "../../components/Button";
import ChangePassword from "../ChangePassword";
import EditProfile from "../EditProfile";
import AuthController from "../../controllers/AuthController";
import UserController from "../../controllers/UserController";
import { withStore } from "../../hocs/withStore";
import Popup from "../../components/Popup";
import Input from "../../components/Input";
import Avatar from "../../components/Avatar";
import Close from "../../components/Close";

export class ProfilePageBase extends Block {
  constructor(props: any) {
    super(props);
  }

  async componentDidMount() {
    await AuthController.fetchUser();
  }

  init() {
    // AuthController.fetchUser();

    this.children.avatar = new Avatar({
      photo: this.props.avatar || "../../../static/icons/image-black.svg",
      events: {
        click: () => {
          (this.children.popup as Popup).show();
        },
      },
    });
    this.children.fields = new Fields({
      fields: [
        new Field({
          data: this.props.email,
          label: "email",
          isInput: false,
          isData: true,
        }),
        new Field({
          data: this.props.login,
          label: "login",
          isInput: false,
          isData: true,
        }),
        new Field({
          data: this.props.first_name,
          label: "first name",
          isInput: false,
          isData: true,
        }),
        new Field({
          data: this.props.second_name,
          label: "second name",
          isInput: false,
          isData: true,
        }),
        new Field({
          data: this.props.diaplay_name,
          label: "display name",
          isInput: false,
          isData: true,
        }),
        new Field({
          data: this.props.phone,
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
          (this.children.editProfile as EditProfile).show();
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
          (this.children.changePassword as ChangePassword).show();
        },
      },
    });
    this.children.logoutButton = new Button({
      label: "Log out",
      className: "profile-button red",
      events: {
        click: () => {
          AuthController.logout();
        },
      },
    });
    this.children.editProfile = new EditProfile(this.props);
    this.children.changePassword = new ChangePassword({});
    this.children.popup = new Popup({
      title: "Upload file",
      button: new Button({
        label: "Change",
        type: "submit",
        events: {
          click: (e: any) => {
            e.preventDefault();
            const form: HTMLFormElement = document.querySelector("form#popup")!;
            const formData = new FormData();
            const input = document.querySelector("#avatar");
            formData.append("avatar", input?.files[0]);

            UserController.updateAvatar(formData);
            // this.hide();
          },
        },
      }),
      close: new Close({
        events: {
          click: () => {
            (this.children.popup as Popup).hide();
          },
        },
      }),
      content: new Input({
        label: "",
        type: "file",
        placeholder: "file",
        name: "avatar",
        className: "validated-input",
      }),
    });
  }

  protected initChildren(): void {}

  render() {
    return this.compile(template, this.props);
  }
}

const withUser = withStore((state) => ({ ...state.user }));
export const ProfilePage = withUser(ProfilePageBase);
