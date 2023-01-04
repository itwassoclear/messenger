import { Block } from "./Block";

describe("Block", () => {
  class Component extends Block<{}> {
    render() {
      return new DocumentFragment();
    }
  }

  it("test", () => {
    const instance = new Component({});
  });
});
