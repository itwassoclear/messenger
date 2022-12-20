import Button from "../../components/Button";
import Input from "../../components/Input";
import Link from "../../components/Link";
import Form from "../../components/Form";
import { Block } from "../../utils/Block";
import template from "./login.hbs";
import "./login.less";
import { onSubmit } from "../../utils/onSubmit";
import AuthController from "../../controllers/AuthController";
import { ISigninData } from "../../utils/types";

export class LoginPage extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.newForm = new Form({
      name: "Authorization",
      button: new Button({
        label: "Log in",
        type: "submit",
        events: {
          click: (e: Event): void => {
            const data = onSubmit(e, "validated-input");
            AuthController.signin(data as ISigninData);
          },
        },
      }),
      link: new Link({
        path: "/sign-up",
        text: "Create a profile",
      }),
      linkText: "",
      buttonsClass: "buttons-login",
      inputs: [
        new Input({
          label: "login",
          type: "text",
          value: "",
          placeholder: "login",
          name: "login",
          className: "validated-input",
        }),
        new Input({
          label: "password",
          type: "password",
          value: "",
          placeholder: "password",
          name: "password",
          className: "validated-input",
        }),
      ],
    });
  }

  // protected initChildren(): void {
  //   this.children.form = new Form({
  //     inputs: [
  //       new Input({
  //         label: "login",
  //         type: "text",
  //         value: "",
  //         placeholder: "login",
  //         name: "login",
  //         className: "validated-input",
  //       }),
  //       new Input({
  //         label: "password",
  //         type: "password",
  //         value: "",
  //         placeholder: "password",
  //         name: "password",
  //         className: "validated-input",
  //       }),
  //     ],
  //     name: "Authorization",
  //     button: new Button({
  //       label: "Log in",
  //       type: "submit",
  //       events: {
  //         click: (e: Event): void => {
  //           const data = onSubmit(e, "validated-input");
  //           AuthController.signin(data as ISigninData);
  //         },
  //       },
  //     }),
  //     link: new Link({
  //       path: "/sign-up",
  //       text: "Create a profile",
  //     }),
  //     linkText: "",
  //     buttonsClass: "buttons-login",
  //   });
  // }

  render() {
    return this.compile(template, { ...this.props });
  }
}
