import { Block } from "../../utils/Block";
import template from "./form.hbs";
import "./form.less";

interface IForm {
  name: string;
  inputs: Block[];
  button: Block;
  link: Block;
  linkText: string;
  buttonsClass: string;
  events?: {
    submit: (e: SubmitEvent) => void;
  };
}

export class Form extends Block {
  constructor(props: IForm) {
    const events = {};
    super({ ...props, events });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
