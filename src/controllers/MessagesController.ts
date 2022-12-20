import WSTransport, { WSTransportEvents } from "../utils/WSTransport";
import store from "../utils/Store";
import ChatsController from "./ChatsController";

export interface IMessage {
  chat_id: number;
  time: string;
  type: string;
  user_id: number;
  content: string;
  file?: {
    id: number;
    user_id: number;
    path: string;
    filename: string;
    content_type: string;
    content_size: number;
    upload_date: string;
  };
}

export class MessagesController {
  private transports: Record<number, WSTransport> = {};

  async connect(id: number) {
    if (this.transports[id]) {
      return;
    }

    const token = await ChatsController.getToken(id);
    const userId = store.getState().user.id;

    const transport = new WSTransport(
      `wss://ya-praktikum.tech/ws/chats/${userId}/${id}/${token}`
    );

    await transport.connect(); // await

    transport.on(
      WSTransportEvents.Message,
      this.onMessageReceived.bind(this, id)
    );
    transport.on(
      WSTransportEvents.Close,
      this.onConnectionClosed.bind(this, id)
    );

    this.transports[id] = transport;

    this.fetchOldMessages(id);
  }

  async sendMessage(id: number, message: string) {
    const transport = this.transports[id];

    if (!transport) {
      // throw new Error(`Chat ${id} is not connected`);
      this.connect(id);
    }

    transport.send({
      type: "message",
      content: message,
    });
  }

  onMessageReceived(chatId: number, messages: IMessage | IMessage[]) {
    // let type;
    // if (Array.isArray(message)) {
    //   type = "message";
    // } else {
    //   type = message.type;
    // }

    // const messagesState = store.getState().messages;
    // // console.log("messagesState", messagesState, chatId);
    // const oldMessages = messagesState ? messagesState[chatId] : [];
    // // console.log("oldMessages", oldMessages);

    // switch (type) {
    //   case "message":
    //     // store.set(`messages.${chatId}`, [...oldMessages, message]);
    //     store.set(`messages.${chatId}`, message);
    //     break;

    //   case "messages":
    //     store.set(`messages.${chatId}`, [
    //       ...oldMessages,
    //       ...(message as IMessage[]).reverse(),
    //     ]);
    //     break;
    // }

    let messagesToAdd: IMessage[] = [];

    if (Array.isArray(messages)) {
      messagesToAdd = messages.reverse();
    } else {
      messagesToAdd.push(messages);
    }

    const currentMessages = (store.getState().messages || {})[chatId] || [];

    messagesToAdd = [...currentMessages, ...messagesToAdd];

    store.set(`messages.${chatId}`, messagesToAdd);
  }

  onConnectionClosed(id: number) {
    delete this.transports[id];
  }

  fetchOldMessages(id: number) {
    const transport = this.transports[id];

    if (!transport) {
      throw new Error(`Chat ${id} is not connected`);
    }

    transport.send({ type: "get old", content: "0" });
  }

  closeAll() {
    // Array.from(this.transports.values()).forEach((socket) => socket.close());
    Object.values(this.transports).forEach((transport) => transport.close());
  }

  // private onMessage(id: number, messages: IMessage | IMessage[]) {
  //   let messagesToAdd: IMessage[] = [];

  //   if (Array.isArray(messages)) {
  //     messagesToAdd = messages.reverse();
  //   } else {
  //     messagesToAdd.push(messages);
  //   }

  //   const currentMessages = (store.getState().messages || {})[id] || [];

  //   messagesToAdd = [...currentMessages, ...messagesToAdd];

  //   store.set(`messages.${id}`, messagesToAdd);
  // }

  // private onClose(id: number) {
  //   this.transports.delete(id);
  // }

  // private subscribe(transport: WSTransport, id: number) {
  //   transport.on(WSTransportEvents.Message, (message) =>
  //     this.onMessage(id, message)
  //   );
  //   transport.on(WSTransportEvents.Close, () => this.onClose(id));
  // }
}

const messagesController = new MessagesController();

// @ts-ignore
window.messagesController = messagesController;

export default messagesController;
