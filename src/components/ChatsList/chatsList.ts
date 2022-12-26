import { Block } from "../../utils/Block";
import template from "./chatsList.hbs";
import "./chatsList.less";
import { Chat } from "../Chat/chat";
import { withStore } from "../../hocs/withStore";
import ChatsController from "../../controllers/ChatsController";

interface IChatsList {
  chats: Block[];
  isLoaded?: boolean;
}

export class ChatsListBase extends Block<IChatsList> {
  constructor(props: IChatsList) {
    super({ ...props });
  }

  protected init() {
    this.children.chats = this.createChats(this.props);
  }

  protected componentDidUpdate(
    oldProps: IChatsList,
    newProps: IChatsList
  ): boolean {
    if (newProps.chats) {
      this.children.chats = this.createChats(newProps);
    }

    return true;
  }

  private createChats(props: IChatsList) {
    return props.chats.map((data) => {
      return new Chat({
        ...data,
        events: {
          click: () => {
            ChatsController.selectChat(data.id);
          },
        },
      });
    });
  }

  render() {
    return this.compile(template, {
      ...this.props,
    });
  }
}

const withChats = withStore((state) => {
  const selectedChatId = state.selectedChat;

  if (!selectedChatId) {
    return {
      messages: [],
      chats: [...(state.chats || [])],
    };
  }

  return {
    messages: (state.messages || {})[selectedChatId] || [],
    chats: [...(state.chats || [])],
  };
});

export const ChatsList = withChats(ChatsListBase as any);
