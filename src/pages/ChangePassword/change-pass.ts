import Fields from "../../components/Fields";
import Field from "../../components/Field";
import { Block } from "../../utils/Block";
import template from "./change-pass.hbs";
import "./change-pass.less";
import Button from "../../components/Button";

interface IProfile {
  name: string;
  fields: Block[];
  button: Block;
  events?: {
    // submit: (e: SubmitEvent) => void;
  };
}

export class ChangePasswordPage extends Block {
  constructor(props?: IProfile) {
    const events = {};
    super({ ...props, events });
  }

  protected initChildren(): void {
    this.children.fields = new Fields({
      fields: [
        new Field({
          isInput: true,
          isData: false,
          label: "old password",
          type: "password",
          value: "itwassoclear",
          placeholder: "old password",
          name: "old_password",
          error: "invalid password",
        }),
        new Field({
          isInput: true,
          isData: false,
          label: "new password",
          type: "password",
          value: "itwassoclear",
          placeholder: "new password",
          name: "new_password",
          error: "invalid password",
        }),
        new Field({
          isInput: true,
          isData: false,
          label: "repeat new password",
          type: "password",
          value: "Maria",
          placeholder: "repeat new password",
          name: "new_password",
          error: "invalid password",
        }),
      ],
    });
    this.children.saveButton = new Button({
      label: "Save",
      className: "save-button",
      events: {
        click: () => {
          // validation
          const currentUrl = window.location.origin;
          window.location.href = `${currentUrl}/Profile/profile.hbs`;
        },
      },
    });
  }

  render() {
    return this.compile(template, {});
  }
}
