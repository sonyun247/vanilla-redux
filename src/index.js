import { createStore } from "redux";

const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const number = document.querySelector("span");

const ADD = "ADD";
const SUBTRACT = "SUBTRACT";

number.innerText = 0;

const countModifier = (state = 0, action) => {
  switch (action.type) {
    case ADD:
      return state + 1;
    case SUBTRACT:
      return state - 1;
    default:
      return state;
  }
};

const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
}

countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({ type: ADD });
}
const handleSubtract = () => {
  countStore.dispatch({ type: SUBTRACT });
}

add.addEventListener("click", handleAdd);
subtract.addEventListener("click", handleSubtract);