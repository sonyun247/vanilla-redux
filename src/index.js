import { createStore } from "redux";

const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const number = document.querySelector("span");

const countModifier = (state = 0, action) => {
  console.log(state, action);
  if (action.type === "ADD") {
    return state + 1;
  } else if (action.type === "SUBTRACT") {
    return state - 1;
  } else {
    return state;
  }
}

const countStore = createStore(countModifier);

countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "SUBTRACT" });

console.log(countStore.getState());