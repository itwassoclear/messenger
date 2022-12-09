import HTTPTransport from "../utils/httpTransport";
import { BaseAPI } from "./base-api";

const chatMessagesAPIInstance = new HTTPTransport("api/v1/messages");

class ChatMessagesAPI extends BaseAPI {
  request({ id }) {
    return chatMessagesAPIInstance.get(`/${id}`);
  }
}
