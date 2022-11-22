import Fields from "../../components/Fields";
import Field from "../../components/Field";
import { Block } from "../../utils/Block";
import template from "./edit-profile.hbs";
import "./edit-profile.less";
import Button from "../../components/Button";

interface IProfile {
  name: string;
  fields: Block[];
  button: Block;
  events?: {
    // submit: (e: SubmitEvent) => void;
  };
}

export class EditProfilePage extends Block {
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
          error: "invalid email",
        }),
        new Field({
          isInput: true,
          isData: false,
          label: "login",
          type: "text",
          value: "itwassoclear",
          placeholder: "login",
          name: "login",
          error: "invalid login",
        }),
        new Field({
          isInput: true,
          isData: false,
          label: "first name",
          type: "text",
          value: "Maria",
          placeholder: "first name",
          name: "first_name",
          error: "invalid name",
        }),
        new Field({
          isInput: true,
          isData: false,
          label: "last name",
          type: "text",
          value: "Kotliarova",
          placeholder: "last name",
          name: "last_name",
          error: "invalid last name",
        }),
        new Field({
          isInput: true,
          isData: false,
          label: "chat name",
          type: "text",
          value: "Maria",
          placeholder: "chat name",
          name: "chat_name",
          error: "invalid chat name",
        }),
        new Field({
          isInput: true,
          isData: false,
          label: "phone",
          type: "phone",
          value: "89778808970",
          placeholder: "phone",
          name: "phone",
          error: "invalid phone",
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
