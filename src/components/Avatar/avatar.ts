import { Block } from "../../utils/Block";
import template from "./avatar.hbs";
import "./avatar.less";

interface IAvatar {
  photo?: string;
  className?: string;
  events?: {
    click: (e: Event) => void;
  };
}

export class Avatar extends Block {
  constructor(props: IAvatar) {
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
