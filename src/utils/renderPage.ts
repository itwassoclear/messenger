import { renderDOM } from "./renderDOM";
import { Block } from "./Block";

export function renderPage(page: Block): void {
  renderDOM("#app", page);
}
