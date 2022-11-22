import { Block } from "../../utils/Block";
import template from "./input.hbs";
import "./input.less";

interface IInput {
  label: string;
  type: string;
  name: string;
  value: string;
  placeholder: string;
  error: string;
  events?: {
    focusin: (e: Event) => void;
    focusout: (e: Event) => void;
  };
}

export class Input extends Block {
  constructor(props: IInput) {
    const events = {
      focusin: (e: Event): void => this.onFocus(e),
      focusout: (e: Event): void => this.onBlur(e),
    };
    super({ ...props, events });
  }

  onFocus = (e: Event): void => {
    // const label = document.querySelector(".label");
    // label.style.opacity = 1;
  };

  onBlur = (e: Event): void => {
    // const label = document.querySelector(".label");
    // label.style.opacity = 0;
  };

  render() {
    return this.compile(template, { ...this.props });
  }
}
