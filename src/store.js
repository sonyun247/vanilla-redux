import { createStore } from "redux";
import { configureStore, createAction, createReducer, createSlice } from "@reduxjs/toolkit";

const ADD = "ADD";
const DELETE = "DELETE";

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() });
  },
  [deleteToDo]: (state, action) =>
    state.filter((toDo) => toDo.id !== action.payload)
});

// const toDos = createSlice({
//   name: "toDosReducer",
//   initialState: [],
//   reducers: {
//     addToDo: (state, action) => {
//       state.push({ text: action.payload, id: Date.now() });
//     },
//     removeToDo: (state, action) =>
//       state.filter((toDo) => toDo.id !== action.payload)
//   }
// });

const store = configureStore({ reducer });

export const actionCreators = {
  addToDo,
  deleteToDo,
};

// export const { addToDo, removeToDo } = toDos.actions;

export default store;

// export default configureStore({ reducer: toDos.reducer });