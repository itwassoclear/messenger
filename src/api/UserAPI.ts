import BaseAPI from "./BaseAPI";
import { IUserInfo, IPassword } from "../utils/types";

export class UserAPI extends BaseAPI {
  constructor() {
    super("/user");
  }

  headers: Record<string, string> = { "Content-Type": "application/json" };

  updateUser(data: IUserInfo) {
    return this.http.put("/profile", { data, headers: this.headers });
  }

  updatePassword(data: IPassword) {
    return this.http.put("/password", { data, headers: this.headers });
  }

  updateAvatar(data: FormData) {
    return this.http.put("/profile/avatar", { data });
  }

  create = undefined;
  read = undefined;
  update = undefined;
  delete = undefined;
}

export default new UserAPI();
