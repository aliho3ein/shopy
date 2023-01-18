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
  return (state = {
    category: action.payload.cat,
    items: action.payload.it,
  });
};

export default mainReducer;
