import Button from "../../components/Button";
import Input from "../../components/Input";
import Link from "../../components/Link";
import Form from "../../components/Form";
import { Block } from "../../utils/Block";
import template from "./registration.hbs";
import "./registration.less";

export class RegistrationPage extends Block {
  constructor() {
    super();
  }

  protected initChildren(): void {
    this.children.form = new Form({
      inputs: [
        new Input({
          label: "email",
          type: "text",
          value: "",
          placeholder: "email",
          name: "email",
          error: "please use name@any.any",
        }),
        new Input({
          label: "login",
          type: "text",
          value: "",
          placeholder: "login",
          name: "login",
          error: "must contain more than 2 characters",
        }),
        new Input({
          label: "first name",
          type: "text",
          value: "",
          placeholder: "first name",
          name: "first name",
          error: "must contain more than 2 characters",
        }),
        new Input({
          label: "second name",
          type: "text",
          value: "",
          placeholder: "second name",
          name: "second name",
          error: "must contain more than 2 characters",
        }),
        new Input({
          label: "phone",
          type: "text",
          value: "",
          placeholder: "phone",
          name: "phone",
          error: "must contain more than 2 characters",
        }),
        new Input({
          label: "password",
          type: "password",
          value: "",
          placeholder: "password",
          name: "password",
          error: "must contain more than 2 characters",
        }),
        new Input({
          label: "password",
          type: "password",
          value: "",
          placeholder: "repeat password",
          name: "password",
          error: "passwords do not match",
        }),
      ],
      name: "Registration",
      button: new Button({
        label: "Register",
        events: {
          click: () => console.log("kkkkk"),
        },
      }),
      link: new Link({
        path: "../Login/login.hbs",
        text: "Log in here",
      }),
      linkText: "Already with us? ",
      buttonsClass: "buttons-registration",
    });
  }

  render() {
    return this.compile(template, {});
  }
}
