import { Block } from "./Block";
import Handlebars from "handlebars";

export function registerComponent(Component: typeof Block) {
  Handlebars.registerHelper(Component.name, () => {});
}
