import { Block } from "../../utils/Block";
import Error from "../../components/Error";
import template from "./error500.hbs";
import "./error500.less";

export class Error500 extends Block {
  constructor() {
    super();
  }

  protected initChildren(): void {
    this.children.error = new Error({
      number: "500",
      text: "We’re already fixing",
      link: "Back to chats ~~>",
    });
  }

  render() {
    return this.compile(template, {});
  }
}
