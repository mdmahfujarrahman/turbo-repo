
import { create } from "zustand";
import { IStore } from "../../application/interfaces/store/IStore";

export const zustandStore = create<IStore>((set) => ({
  todos: [], // Initial state
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
  setTodos: (todos) => set(() => ({ todos })),
}));