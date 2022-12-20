import { Block } from "../../utils/Block";
import template from "./chat.hbs";
import "./chat.less";
import { withStore } from "../../hocs/withStore";
import { IChatInfo } from "../../api/ChatsAPI";

interface IChat {
  id: number;
  title: string;
  unread_count: number;
  selectedChat: IChatInfo;
  last_message: Record<string, string>;
  events: {
    click: () => void;
  };
}

export class ChatBase extends Block<IChat> {
  constructor(props: IChat) {
    super(props);
  }

  render() {
    let time = this.props.last_message?.time;
    if (time !== undefined) {
      time = new Date(time).toString().substring(4, 10);
    }

    return this.compile(template, {
      ...this.props,
      isSelected: this.props.id === this.props.selectedChat?.id,
      isMine: true,
      time,
    });
  }
}

export const withSelectedChat = withStore((state) => ({
  selectedChat: (state.chats || []).find(({ id }) => id === state.selectedChat),
}));

export const Chat = withSelectedChat(ChatBase as any);
