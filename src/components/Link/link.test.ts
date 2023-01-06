import { BaseLink as Link } from "./link";
import { expect } from "chai";
import sinon from "sinon";

describe("Link", () => {
  it("should render component", () => {
    new Link({ text: "Click me", path: "/" });
  });

  let routerMock: any;

  beforeEach(() => {
    routerMock = {
      go: sinon.fake(),
    };
  });

  it("should call Router.go on click", () => {
    const instance = new Link({
      text: "Click me",
      path: "/abc",
      router: routerMock as any,
    });

    const element = instance.element!;
    element?.click();

    expect(routerMock.go.callCount).to.eq(1);
  });

  it("should call Router.go on click with path", () => {
    const path = "/abc";
    const instance = new Link({
      text: "Click me",
      path,
      router: routerMock as any,
    });

    const element = instance.element;
    element?.click();

    expect(routerMock.go.firstArg).to.eq(path);
  });
});
