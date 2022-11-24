import { Block } from "../../utils/Block";
import { validate } from "../../utils/validate";
import template from "./field.hbs";
import "./field.less";

interface IField {
  isInput: boolean;
  isData: boolean;
  label: string;
  type?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  error?: string;
  data?: string;
  className?: string;
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
    validate(e, this.element!, ".profile-input-error");
  };

  onBlur = (e: Event): void => {
    validate(e, this.element!, ".profile-input-error");
  };

  render() {
    return this.compile(template, { ...this.props });
  }
}
