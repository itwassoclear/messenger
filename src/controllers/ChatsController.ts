import API, { ChatsAPI } from "../api/ChatsAPI";
import store from "../utils/Store";
import MessagesController from "./MessagesController";

export class ChatsController {
  private readonly api: ChatsAPI;

  constructor() {
    this.api = API;
  }

  async create(title: string) {
    await this.api.create(title);

    await this.fetchChats();
  }

  async fetchChats() {
    const chats = await this.api.read();

    // chats.map(async (chat) => {
    //   const token = await this.getToken(chat.id);

    //   await messagesController.connect(chat.id, token);
    // });

    const promises = chats.map((chat) => {
      return MessagesController.connect(chat.id);
    });

    await Promise.all(promises);

    store.set("chats", chats);
  }

  addUserToChat(id: number, userId: number) {
    this.api.addUsers(id, [userId]);
  }

  async delete(id: number) {
    await this.api.delete(id);

    this.fetchChats();
  }

  getToken(id: number) {
    return this.api.getToken(id);
  }

  selectChat(id: number | string) {
    store.set("selectedChat", id);
  }
}

const chatsController = new ChatsController();

// @ts-ignore
window.chatsController = chatsController;

export default chatsController;
