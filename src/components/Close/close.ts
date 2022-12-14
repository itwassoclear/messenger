import { Block } from "../../utils/Block";
import template from "./close.hbs";
import "./close.less";

interface IClose {
  events?: {
    click: (e: Event) => void;
  };
}

export class Close extends Block {
  constructor(props: IClose) {
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
