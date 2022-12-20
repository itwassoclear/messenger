import { Block } from "../../utils/Block";
import { validate } from "../../utils/validate";
import template from "./input.hbs";
import "./input.less";

interface IInput {
  label: string;
  type: string;
  name: string;
  value?: string;
  placeholder: string;
  className?: string;
  noError?: boolean;
  divClass?: string;
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
    validate(e, this.element!, ".input-error");
  };

  onBlur = (e: Event): void => {
    validate(e, this.element!, ".input-error");
  };

  public setValue(value: string) {
    return ((this.element as HTMLInputElement).value = value);
  }

  public getName() {
    return (this.element as HTMLInputElement).name;
  }

  public getValue() {
    return (this.element as HTMLInputElement).value;
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
