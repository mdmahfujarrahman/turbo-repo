import { IStore } from "../../../application/interfaces/store/IStore";
import { zustandStore } from "../../store/todoStore";


export const todoStoreAdapter: IStore = {
  get todos() {
    return zustandStore.getState().todos;
  },
  addTodo: (todo) => zustandStore.getState().addTodo(todo),
  deleteTodo: (id) => zustandStore.getState().deleteTodo(id),
  setTodos: (todos) => zustandStore.getState().setTodos(todos),
};