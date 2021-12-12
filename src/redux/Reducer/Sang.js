import { DEL_TODO, UPDATE_TODO, ADD_TODO } from "../Type/Type";

const todo = {
  todoList: [
    // { id: 1, content: "Công việc 01" },
    // { id: 2, content: "Công việc 02" },
    // { id: 3, content: "Công việc 03" },
    // { id: 4, content: "Công việc 04" },
  ],
};

export const SangTodo = (state = todo, action) => {
  switch (action.type) {
    case DEL_TODO:
      let newArr = state.todoList.filter((item) => {
        return item.id !== action.payload;
      });
      state.todoList = newArr;
      return { ...state };
    case UPDATE_TODO:
      return { ...state };
    case ADD_TODO:
      state.todoList.push(action.payload);
      return { ...state };
    default:
      return { ...state };
  }
};
