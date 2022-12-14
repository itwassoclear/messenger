import Fields from "../../components/Fields";
import Field from "../../components/Field";
import { Block } from "../../utils/Block";
import template from "./edit-profile.hbs";
import "./edit-profile.less";
import Button from "../../components/Button";
import { onSubmit } from "../../utils/onSubmit";
import AuthController from "../../controllers/AuthController";

interface IProfile {
  name?: string;
  fields?: Block[];
  button?: Block;
}

export class EditProfile extends Block {
  constructor(props?: IProfile) {
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
          className: "validated-input",
        }),
        new Field({
          isInput: true,
          isData: false,
          label: "login",
          type: "text",
          value: this.props.login,
          placeholder: "login",
          name: "login",
          className: "validated-input",
        }),
        new Field({
          isInput: true,
          isData: false,
          label: "first name",
          type: "text",
          value: this.props.first_name,
          placeholder: "first name",
          name: "first_name",
          className: "validated-input",
        }),
        new Field({
          isInput: true,
          isData: false,
          label: "second name",
          type: "text",
          value: this.props.second_name,
          placeholder: "second name",
          name: "second_name",
          className: "validated-input",
        }),
        new Field({
          isInput: true,
          isData: false,
          label: "diaplay name",
          type: "text",
          value: this.props.diaplay_name,
          placeholder: "diaplay name",
          name: "diaplay_name",
        }),
        new Field({
          isInput: true,
          isData: false,
          label: "phone",
          type: "phone",
          value: this.props.phone,
          placeholder: "phone",
          name: "phone",
          className: "validated-input",
        }),
      ],
    });
    this.children.saveButton = new Button({
      label: "Save",
      className: "save-button",
      events: {
        click: (e: Event): void => {
          const data = onSubmit(e);
          // UserController.updateUser(data as any);

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
