import { Reducer } from "react";

interface State {
  category: object[];
  items: object[];
}

interface Action {
  type: string;
  payload?: any;
}

const mainReducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case "addAll":
      return { ...state };
    default:
      return (state = {
        category: [action.payload.cat],
        items: [action.payload.it],
      });
  }
};

export default mainReducer;
