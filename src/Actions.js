export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";
export const CREATENEWSTATE = "CREATENEWSTATE";

export function increment() {
  return {
    type: INCREMENT,
    text: "Incremented"
  };
}

export function reset() {
  return { type: RESET, text: "Reseted" };
}

export function decrement() {
  return { type: DECREMENT, text: "Decremented" };
}

export const createState = newState => {
  return {
    type: CREATENEWSTATE,
    payload: newState
  };
};
