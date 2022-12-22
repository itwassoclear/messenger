import { Block } from "../../utils/Block";
import template from "./message.hbs";
import "./message.less";

interface MessageProps {
  content?: string;
  isMine?: boolean;
  userId?: string;
  time?: string;
}

export class Message extends Block<MessageProps> {
  constructor(props: MessageProps) {
    super({ ...props });
  }

  protected render(): DocumentFragment {
    let time = this.props.time;
    if (time !== undefined) {
      time = new Date(time).toString().substring(16, 21);
    }

    return this.compile(template, { ...this.props, time });
  }
}
