import { Block } from "../../utils/Block";
import Preview from "../../components/Preview";
import Chat from "../../components/Chat";
import template from "./chats.hbs";
import "./chats.less";
import Button from "../../components/Button";
import { onSubmit } from "../../utils/onSubmit";

export class ChatsPage extends Block {
  constructor() {
    super();
  }

  protected initChildren(): void {
    this.children.preview = new Preview({
      previews: [
        new Chat({
          avatar: "",
          name: "Sasha",
          from: "Me: ",
          message: "круто!",
          date: "15:04",
          newMessages: "",
        }),
        new Chat({
          avatar: "",
          name: "Peter",
          from: "",
          message: "Мы будем ждать тебя на первом этаже",
          date: "16:10",
          newMessages: "1",
        }),
        new Chat({
          avatar: "",
          name: "Anna",
          from: "",
          message: "Спасибо! До встречи",
          date: "10:07",
          newMessages: "",
        }),
        new Chat({
          avatar: "",
          name: "Tanya",
          from: "",
          message: "Я доделываю :) Скоро пришлю",
          date: "11:55",
          newMessages: "",
        }),
      ],
    });
    this.children.sendButton = new Button({
      label: "~>",
      type: "submit",
      className: "send",
      events: {
        click: (e): void => {
          onSubmit(e);
        },
      },
    });
  }

  render() {
    return this.compile(template, {});
  }
}
