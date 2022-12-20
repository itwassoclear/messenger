import { set } from "./helpers";
import { EventBus } from "./EventBus";

export enum StoreEvents {
  Updated = "updated",
}

export class Store extends EventBus {
  private state: any = {};

  public set(keypath: string, data: unknown) {
    set(this.state, keypath, data);

    this.emit(StoreEvents.Updated, this.getState());
  }

  public getState() {
    return this.state;
  }
}

const store = new Store();

// export function withStore<SP>(mapStateToProps: (state: IState) => SP) {
//   return function wrap<P>(Component: typeof Block<SP & P>) {
//     return class WithStore extends Component {
//       constructor(props: Omit<P, keyof SP>) {
//         let previousState = mapStateToProps(store.getState());

//         super({ ...(props as P), ...previousState });

//         store.on(StoreEvents.Updated, () => {
//           const stateProps = mapStateToProps(store.getState());

//           previousState = stateProps;

//           this.setProps({ ...stateProps });
//         });
//       }
//     };
//   };
// }

export default store;
