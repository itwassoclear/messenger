import Button from "../../components/Button";
import Input from "../../components/Input";
import Link from "../../components/Link";
import Form from "../../components/Form";
import { Block } from "../../utils/Block";
import template from "./login.hbs";
import "./login.less";

export class LoginPage extends Block {
  constructor() {
    super();
  }

  protected initChildren(): void {
    this.children.form = new Form({
      inputs: [
        new Input({
          label: "login",
          type: "text",
          value: "",
          placeholder: "login",
          name: "login",
          error: "invalid login",
        }),
        new Input({
          label: "password",
          type: "password",
          value: "",
          placeholder: "password",
          name: "password",
          error: "invalid password",
        }),
      ],
      name: "Authorization",
      button: new Button({
        label: "Log in",
        events: {
          click: () => console.log("kkkkk"),
        },
      }),
      link: new Link({
        path: "../Registration/registration.hbs",
        text: "Create a profile",
      }),
      linkText: "",
      buttonsClass: "buttons-login",
    });
  }

  render() {
    return this.compile(template, {});
  }
}
