import { Block } from "../../utils/Block";
import ChatsList from "../../components/ChatsList";
import template from "./chats.hbs";
import "./chats.less";
import Messenger from "../../components/Messenger";
import AuthController from "../../controllers/AuthController";
import ChatsController from "../../controllers/ChatsController";
import Popup from "../../components/Popup";
import Button from "../../components/Button";
import Close from "../../components/Close";
import Input from "../../components/Input";

export class ChatsPage extends Block {
  constructor() {
    super({});
  }

  protected init(): void {
    ChatsController.fetchChats();
    AuthController.fetchUser();

    this.children.chatsList = new ChatsList({
      isLoaded: false,
    });
    this.children.messenger = new Messenger({});
    this.children.addChatButton = new Button({
      label: "Add chat",
      className: "add-chat-button",
      events: {
        click: () => {
          (this.children.addChatPopup as Popup).show();
        },
      },
    });
    this.children.addChatPopup = new Popup({
      title: "Add new chat",
      button: new Button({
        label: "Add",
        type: "submit",
        events: {
          click: (e: any) => {
            e.preventDefault();

            this.hide();
          },
        },
      }),
      close: new Close({
        events: {
          click: () => {
            (this.children.addChatPopup as Popup).hide();
          },
        },
      }),
      content: new Input({
        label: "",
        type: "text",
        placeholder: "chat id",
        name: "chatId",
        className: "avatar-validated-input",
      }),
    });

    ChatsController.fetchChats().finally(() => {
      (this.children.chatsList as Block).setProps({
        isLoaded: true,
      });
    });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
