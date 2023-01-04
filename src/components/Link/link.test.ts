import { Link } from "./link";

describe("Link", () => {
  it("should render component", () => {
    new Link({ text: "Click me", path: "/" });
  });
});
