import { Todo } from "../../../domain/interfaces/Todo";


export interface IStore {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  deleteTodo: (id: number) => void;
  setTodos: (todos: Todo[]) => void;
}