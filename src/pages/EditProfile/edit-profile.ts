import Fields from "../../components/Fields";
import Field from "../../components/Field";
import { Block } from "../../utils/Block";
import template from "./edit-profile.hbs";
import "./edit-profile.less";
import Button from "../../components/Button";
import { onSubmit } from "../../utils/onSubmit";

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

  protected initChildren(): void {
    this.children.fields = new Fields({
      fields: [
        new Field({
          isInput: true,
          isData: false,
          label: "email",
          type: "email",
          value: "itwassoclear@gmail.com",
          placeholder: "email",
          name: "email",
          className: "validated-input",
        }),
        new Field({
          isInput: true,
          isData: false,
          label: "login",
          type: "text",
          value: "itwassoclear",
          placeholder: "login",
          name: "login",
          className: "validated-input",
        }),
        new Field({
          isInput: true,
          isData: false,
          label: "first name",
          type: "text",
          value: "Maria",
          placeholder: "first name",
          name: "first_name",
          className: "validated-input",
        }),
        new Field({
          isInput: true,
          isData: false,
          label: "second name",
          type: "text",
          value: "Kotliarova",
          placeholder: "second name",
          name: "second_name",
          className: "validated-input",
        }),
        new Field({
          isInput: true,
          isData: false,
          label: "chat name",
          type: "text",
          value: "Maria",
          placeholder: "chat name",
          name: "chat_name",
        }),
        new Field({
          isInput: true,
          isData: false,
          label: "phone",
          type: "phone",
          value: "89778808970",
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
          onSubmit(e);
          const profileBlock = document.querySelector(
            ".profile_block"
          ) as HTMLElement;
          profileBlock.style.display = "flex";
          const profileFields = document.querySelector(
            ".profile-fields"
          ) as HTMLElement;
          profileFields.style.display = "none";
        },
      },
    });
  }

  render() {
    return this.compile(template, {});
  }
}
