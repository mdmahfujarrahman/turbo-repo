import { Todo } from "./Todo";

export interface ITodosLogic {
  // Method to filter completed todos
  filterCompletedTodos(todos: Todo[]): Todo[];

  getAllTodos(todos: Todo[], filterType: string): Todo[];

  // You can add more domain-specific methods here
}