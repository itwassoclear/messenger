import Fields from "../../components/Fields";
import Field from "../../components/Field";
import { Block } from "../../utils/Block";
import template from "./change-pass.hbs";
import "./change-pass.less";
import Button from "../../components/Button";
import { onSubmit } from "../../utils/onSubmit";
import UserController from "../../controllers/UserController";

interface IChangePassword {
  fields: Block[];
  saveButton?: Block;
}

export class ChangePassword extends Block {
  constructor(props: IChangePassword) {
    const events = {};
    super({ ...props, events });
  }

  protected init(): void {
    this.children.fields = new Fields({
      fields: [
        new Field({
          isInput: true,
          isData: false,
          label: "old password",
          type: "password",
          value: "",
          placeholder: "old password",
          name: "oldPassword",
          className: "password-validated-input",
        }),
        new Field({
          isInput: true,
          isData: false,
          label: "new password",
          type: "password",
          value: "",
          placeholder: "new password",
          name: "newPassword",
          className: "password-validated-input",
        }),
        new Field({
          isInput: true,
          isData: false,
          label: "repeat new password",
          type: "password",
          value: "",
          placeholder: "repeat new password",
          name: "repeat_password",
          className: "password-validated-input",
        }),
      ],
    });
    this.children.saveButton = new Button({
      label: "Save",
      className: "save-button",
      events: {
        click: (e: Event): void => {
          const data = onSubmit(e, "password-validated-input");
          UserController.updatePassword(data as any);

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
    return this.compile(template, {});
  }
}
