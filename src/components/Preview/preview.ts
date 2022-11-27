import { Block } from "../../utils/Block";
import template from "./preview.hbs";
import "./preview.less";

interface IPreview {
  previews: Block[];
}

export class Preview extends Block {
  constructor(props: IPreview) {
    super({ ...props });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
