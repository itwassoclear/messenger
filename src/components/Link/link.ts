import { Block } from "../../utils/Block";
import { PropsWithRouter, withRouter } from "../../hocs/withRouter";
import template from "./link.hbs";
import "./link.less";

interface ILink extends PropsWithRouter {
  path: string;
  text: string;
  events?: {
    click: () => void;
  };
}

export class BaseLink extends Block {
  constructor(props: ILink) {
    super({
      ...props,
      events: {
        click: () => this.navigate(),
      },
    });
  }

  navigate() {
    this.props.router.go(this.props.path);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}

export const Link = withRouter(BaseLink);
