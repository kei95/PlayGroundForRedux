import React from "react";
import { render } from "react-dom";
import Counter from "./Counter";
import "./index.css";
import { createStore } from "redux";
import { Provider } from "react-redux";

const initialState = {
  count: 0,
  text: "",
  stateArr: []
};

function reducer(state = initialState, action) {
  console.log("reducer", state, action);
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
        text: action.text
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
        text: action.text
      };
    case "RESET":
      return {
        ...state,
        count: 0,
        text: "reseted"
      };
    case "CREATENEWSTATE":
      return {
        ...state,
        stateArr: [...state.stateArr, Object.assign({}, action.payload)]
      };
    default:
      return state;
  }
}

const store = createStore(reducer);
// store.dispatch({ type: "INCREMENT" });
// store.dispatch({ type: "INCREMENT" });
// store.dispatch({ type: "DECREMENT" });
// store.dispatch({ type: "CREATENEWSTATE" });

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

render(<App />, document.getElementById("root"));
