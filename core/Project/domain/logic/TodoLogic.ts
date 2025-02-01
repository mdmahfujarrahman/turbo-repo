import { ITodosLogic } from "../interfaces/ITodosLogic";
import { Todo } from "../interfaces/Todo";

export class TodosLogic implements ITodosLogic {
  /**
   * Filters the completed TODOs from the list.
   * @param {Todo[]} todos - Array of todos to filter.
   * @returns {Todo[]} - Array of completed todos.
   */



  filterCompletedTodos(todos: Todo[]): Todo[] {
    return todos.filter((todo) => todo.completed);
  }

  filterPendingTodos(todos: Todo[]): Todo[] {
    return todos.filter((todo) => !todo.completed);
  }
  getAllTodos(todos: Todo[], filterType:string): Todo[] {
    if (filterType === "All") {
      return todos;
    } else if (filterType === "Completed") {
      return this.filterCompletedTodos(todos);
    } else if (filterType === "Pending") {
      return this.filterPendingTodos(todos);
    }
    return todos;
  }
}