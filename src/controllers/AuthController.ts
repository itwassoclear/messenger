import { AuthAPI } from "../api/AuthAPI";
import { ISigninData, ISignupData } from "../utils/types";
import store from "../utils/Store";
import router from "../utils/Router";

class AuthController {
  constructor(private api: AuthAPI) {}

  async signin(data: ISigninData) {
    try {
      await this.api.signin(data);
      await this.fetchUser(); // await

      store.set("user.error", undefined);

      router.go("/messenger");
    } catch (e: any) {
      console.error(e);
    }
  }

  async signup(data: ISignupData) {
    try {
      await this.api.signup(data);
      await this.fetchUser();

      router.go("/messenger");
    } catch (e: any) {
      console.error(e.message);
    }
  }

  async request(req: () => void) {
    store.set("user.isLoading", true);
    try {
      await req();

      store.set("user.error", undefined);
    } catch (e: any) {
      store.set("user.error", e);
      console.error(e.message);
    } finally {
      store.set("user.isLoading", false);
    }
  }

  async fetchChats() {
    const chats = await this.api.read();

    store.set("chats", chats);
  }

  // async selectChat(id: number) {
  //   store.set("selectedChat", id);

  // createConnetion()
  // }

  async fetchUser() {
    const user = await this.api.read();

    store.set("user", user);
  }

  async logout() {
    await this.request(async () => {
      await this.api.logout();

      router.go("/");
    });
  }
}

export default new AuthController(new AuthAPI());
