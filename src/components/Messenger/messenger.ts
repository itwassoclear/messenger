import { Block } from "../../utils/Block";
import { onSubmit } from "../../utils/onSubmit";
import Button from "../Button";
import template from "./messenger.hbs";
import MessagesController, {
  IMessage as MessageInfo,
} from "../../controllers/MessagesController";
import "./messenger.less";
import Input from "../Input";
import { withStore } from "../../hocs/withStore";
import Message from "../Message";

interface IMessenger {
  selectedChat?: number | undefined;
  messages?: MessageInfo;
  userId: number;
  photo?: string;
  className?: string;
  events?: {
    click: (e: Event) => void;
  };
}

export class MessengerBase extends Block {
  constructor(props: IMessenger) {
    super({ ...props });
  }

  protected init() {
    this.children.messages = this.createMessages({ ...this.props });

    this.children.input = new Input({
      type: "text",
      placeholder: "Message",
      name: "message",
      label: "",
      className: "validated-input",
      noError: true,
      divClass: "message-input-block",
    });

    this.children.sendButton = new Button({
      // type: "button",
      label: "~>",
      type: "submit",
      className: "send",
      events: {
        click: (e) => {
          const input: any = document.querySelector("#message");
          const message = input.value;
          onSubmit(e, "validated-input");
          MessagesController.sendMessage(this.props.selectedChat!, message);
          input.value = "";
        },
      },
    });
  }

  protected componentDidUpdate(
    oldProps: IMessenger,
    newProps: IMessenger
  ): boolean {
    this.children.messages = this.createMessages(newProps);

    return true;
  }

  private createMessages(props: any) {
    // console.log("messages", props.messages);

    // if (!props.messages) {
    //   return [];
    // }

    return props.messages.map((data: any) => {
      return new Message({ ...data, isMine: props.userId === data.user_id });
    });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}

const withSelectedChatMessages = withStore((state) => {
  const selectedChatId = state.selectedChat;

  if (!selectedChatId) {
    return {
      messages: [],
      selectedChat: undefined,
      userId: state.user.id,
    };
  }

  return {
    messages: (state.messages || {})[selectedChatId] || [],
    selectedChat: state.selectedChat,
    userId: state.user.id,
  };
});

export const Messenger = withSelectedChatMessages(MessengerBase as any);
