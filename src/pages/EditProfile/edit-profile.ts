import Fields from "../../components/Fields";
import Field from "../../components/Field";
import { Block } from "../../utils/Block";
import template from "./edit-profile.hbs";
import "./edit-profile.less";
import Button from "../../components/Button";
import { onSubmit } from "../../utils/onSubmit";
import AuthController from "../../controllers/AuthController";
import UserController from "../../controllers/UserController";

interface IEditProfile {
  fields: Block[];
  saveButton: Block;
}

export class EditProfile extends Block {
  constructor(props: IEditProfile) {
    const events = {};
    super({ ...props, events });
  }

  init() {
    AuthController.fetchUser();
    this.children.fields = new Fields({
      fields: [
        new Field({
          isInput: true,
          isData: false,
          label: "email",
          type: "email",
          value: this.props.email,
          placeholder: "email",
          name: "email",
          className: "profile-validated-input",
        }),
        new Field({
          isInput: true,
          isData: false,
          label: "login",
          type: "text",
          value: this.props.login,
          placeholder: "login",
          name: "login",
          className: "profile-validated-input",
        }),
        new Field({
          isInput: true,
          isData: false,
          label: "first name",
          type: "text",
          value: this.props.first_name,
          placeholder: "first name",
          name: "first_name",
          className: "profile-validated-input",
        }),
        new Field({
          isInput: true,
          isData: false,
          label: "second name",
          type: "text",
          value: this.props.second_name,
          placeholder: "second name",
          name: "second_name",
          className: "profile-validated-input",
        }),
        new Field({
          isInput: true,
          isData: false,
          label: "display name",
          type: "text",
          value: this.props.display_name,
          placeholder: "display name",
          name: "display_name",
          className: "profile-validated-input",
        }),
        new Field({
          isInput: true,
          isData: false,
          label: "phone",
          type: "phone",
          value: this.props.phone,
          placeholder: "phone",
          name: "phone",
          className: "profile-validated-input",
        }),
      ],
    });
    this.children.saveButton = new Button({
      label: "Save",
      className: "save-button",
      events: {
        click: (e: Event): void => {
          const data = onSubmit(e, "profile-validated-input");
          UserController.updateUser(data as any);

          const profileBlock = document.querySelector(
            ".profile_block"
          ) as HTMLElement;
          profileBlock.style.display = "flex";
          this.hide();
        },
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
