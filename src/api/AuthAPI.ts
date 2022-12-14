import BaseAPI from "./BaseAPI";
import { ISigninData, ISignupData, IUser } from "../utils/types";

export class AuthAPI extends BaseAPI {
  constructor() {
    super("/auth");
  }

  signin(data: ISigninData) {
    return this.http.post("/signin", data);
  }

  signup(data: ISignupData) {
    return this.http.post("/signup", data);
  }

  read(): Promise<IUser> {
    return this.http.get("/user");
  }

  logout() {
    return this.http.post("/logout");
  }

  create = undefined;
  update = undefined;
  delete = undefined;
}

// export default new AuthAPI();
