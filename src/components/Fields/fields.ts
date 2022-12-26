import { Block } from "../../utils/Block";
import { onSubmit } from "../../utils/onSubmit";
import template from "./fields.hbs";
import "./fields.less";

interface IFields {
  fields: Block[];
  button?: Block;
  events?: {
    submit: (e: SubmitEvent) => void;
  };
}

export class Fields extends Block {
  constructor(props: IFields) {
    const events = {
      submit: (e: Event, className: string) => onSubmit(e, className),
    };
    super({ ...props, events });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
