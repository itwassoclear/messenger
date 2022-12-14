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

  init() {
    // const plug: any = document.querySelector(".plug");
    // const avatar: any = document.querySelector(".profile-avatar");
    // avatar.addEventListener("mouseover", () => {
    //   plug.style.opacity = 100;
    // });
    // avatar.addEventListener("mouseout", () => {
    //   plug.style.opacity = 0;
    // });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
