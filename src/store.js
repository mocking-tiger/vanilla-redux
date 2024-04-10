import { legacy_createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";
const toDoList = JSON.parse(localStorage.getItem("toDos"));

const addToDo = (text) => {
  return {
    type: ADD,
    text,
  };
};

const deleteToDo = (id) => {
  return {
    type: DELETE,
    id,
  };
};

const reducer = (state = toDoList ? toDoList : [], action) => {
  switch (action.type) {
    case ADD:
      localStorage.setItem(
        "toDos",
        JSON.stringify([{ text: action.text, id: Date.now() }, ...state])
      );
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE:
      return state.filter((toDo) => toDo.id !== action.id);
    default:
      return state;
  }
};

const store = legacy_createStore(reducer);

export const actionCreator = {
  addToDo,
  deleteToDo,
};

export default store;
