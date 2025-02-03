import { Todo } from "../../../../domain/interfaces/Todo";


/**
 * ITodosApiAdapter defines the contract for interacting with TODO-related API operations.
 * This ensures consistency and enforces the rules for all implementations.
 */
export interface ITodosApiAdapter {
  /**
   * Fetches a list of TODOs.
   * @returns {Promise<Todo[]>}
   */
  fetchTodos(): Promise<Todo[]>;

  fetchTodo(id: number): Promise<Todo>;

  /**
   * Adds a new TODO item.
   * @param {{ title: string; completed: boolean }} data - The TODO object to create.
   * @returns {Promise<Todo>} - A promise resolving to the created TODO object.
   */
  addTodo(data: { title: string; completed: boolean }): Promise<Todo>;


  toggleTodo(id: number): Promise<Todo[]>;

  /**
   * Deletes a TODO item by its ID.
   * @param {number} id - The ID of the TODO to delete.
   * @returns {Promise<void>} - A promise resolving when the TODO is deleted.
   */
  deleteTodo(id: number): Promise<void>; // No return data
}