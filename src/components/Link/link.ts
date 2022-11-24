import { Block } from "../../utils/Block";
import template from "./link.hbs";
import "./link.less";

interface ILink {
  path: string;
  text: string;
}

export class Link extends Block {
  constructor(props: ILink) {
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
