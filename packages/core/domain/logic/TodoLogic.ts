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
}