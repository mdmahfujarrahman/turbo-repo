import { Todo } from "./Todo";

export interface ITodosLogic {
  // Method to filter completed todos
  filterCompletedTodos(todos: Todo[]): Todo[];

  // You can add more domain-specific methods here
}