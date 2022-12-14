import { Block } from "../../utils/Block";
import template from "./profile-popup-content.hbs";
import { validate } from "../../utils/validate";
import "./profile-popup-content.less";

interface IProfilePopupContent {
  label: string;
  type: string;
  name: string;
  value: string;
  placeholder: string;
  className?: string;
  events?: {
    focusin: (e: Event) => void;
    focusout: (e: Event) => void;
  };
}

export class ProfilePopupContent extends Block {
  constructor(props: IProfilePopupContent) {
    const events = {
      focusin: (e: Event): void => this.onFocus(e),
      focusout: (e: Event): void => this.onBlur(e),
    };
    super({ ...props, events });
  }

  onFocus = (e: Event): void => {
    validate(e, this.element!, ".input-error");
  };

  onBlur = (e: Event): void => {
    validate(e, this.element!, ".input-error");
  };

  render() {
    return this.compile(template, { ...this.props });
  }
}
