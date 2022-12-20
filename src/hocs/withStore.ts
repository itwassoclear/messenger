import { Block } from "../utils/Block";
import { isEqual } from "../utils/helpers";
import store, { StoreEvents } from "../utils/Store";
import { IUser } from "../utils/types";
import { IChatInfo } from "../api/ChatsAPI";
import { IMessage } from "../controllers/MessagesController";

interface IState {
  user: IUser;
  chats: IChatInfo[];
  messages: Record<number, IMessage[]>;
  selectedChat?: number;
}

// export function withStore(mapStateToProps: (state: IState) => any) {
//   return function wrap(Component: typeof Block) {
//     let previousState: any = null;

//     return class WithStore extends Component {
//       constructor(props: any) {
//         previousState = mapStateToProps(store.getState());

//         super({ ...props, ...previousState });

//         store.on(StoreEvents.Updated, () => {
//           const stateProps = mapStateToProps(store.getState());
//           console.log("store", stateProps);
//           // previousState = stateProps;
//           if (isEqual(previousState, stateProps)) {
//             return;
//           }

//           this.setProps({ ...stateProps });
//         });
//       }
//     };
//   };
// }

export function withStore<SP>(mapStateToProps: (state: IState) => SP) {
  return function wrap<P>(Component: typeof Block<SP & P>) {
    return class WithStore extends Component {
      constructor(props: Omit<P, keyof SP>) {
        let previousState = mapStateToProps(store.getState());

        super({ ...(props as P), ...previousState });

        store.on(StoreEvents.Updated, () => {
          const stateProps = mapStateToProps(store.getState());

          previousState = stateProps;

          this.setProps({ ...stateProps });
        });
      }
    };
  };
}
