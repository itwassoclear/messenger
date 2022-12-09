import Fields from "../../components/Fields";
import Field from "../../components/Field";
import { Block } from "../../utils/Block";
import template from "./change-pass.hbs";
import "./change-pass.less";
import Button from "../../components/Button";
import { onSubmit } from "../../utils/onSubmit";

interface IProfile {
  name?: string;
  fields?: Block[];
  button?: Block;
}

export class ChangePassword extends Block {
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
          value: "qwertyasdF1",
          placeholder: "old password",
          name: "password",
          className: "validated-input",
        }),
        new Field({
          isInput: true,
          isData: false,
          label: "new password",
          type: "password",
          value: "qwertyasdF123",
          placeholder: "new password",
          name: "password",
          className: "validated-input",
        }),
        new Field({
          isInput: true,
          isData: false,
          label: "repeat new password",
          type: "password",
          value: "qwertyasdF123",
          placeholder: "repeat new password",
          name: "password",
          className: "validated-input",
        }),
      ],
    });
    this.children.saveButton = new Button({
      label: "Save",
      className: "save-button",
      events: {
        click: (e: Event): void => {
          onSubmit(e);
          const profileBlock = document.querySelector(
            ".profile_block"
          ) as HTMLElement;
          profileBlock.style.display = "flex";
          const passwordFields = document.querySelector(
            ".password-fields"
          ) as HTMLElement;
          passwordFields.style.display = "none";
        },
      },
    });
  }

  render() {
    return this.compile(template, {});
  }
}
