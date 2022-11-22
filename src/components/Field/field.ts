import { Block } from "../../utils/Block";
import template from "./field.hbs";
import "./field.less";

interface IField {
  label: string;
  type: string;
  name: string;
  value: string;
  placeholder: string;
  error: string;
  data: string;
  events?: {
    focusin: (e: Event) => void;
    focusout: (e: Event) => void;
  };
}

export class Field extends Block {
  constructor(props: IField) {
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
