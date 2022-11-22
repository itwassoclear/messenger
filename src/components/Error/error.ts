import { Block } from "../../utils/Block";
import template from "./error.hbs";
import "./error.less";

interface IError {
  number: string;
  text: string;
  link: string;
  // events?: {
  //   click: () => void;
  // };
}

export class Error extends Block {
  constructor(props: IError) {
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
