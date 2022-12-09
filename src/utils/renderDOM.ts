import { Block } from "./Block";

export function renderDOM(rootSelector: string, component: Block) {
  const root = document.querySelector(rootSelector);

  if (root === null) {
    throw new Error(`root not found by selector "${rootSelector}"`);
  }

  root.innerHTML = "";

  root.append(component.getContent()!);

  return root;
}
