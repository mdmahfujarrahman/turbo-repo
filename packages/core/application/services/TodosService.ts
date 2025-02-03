// src/application/services/TodosService.ts

import { ITodosLogic } from "../../domain/interfaces/ITodosLogic";
import { Todo } from "../../domain/interfaces/Todo";
import { ITodosApiAdapter } from "../interfaces/features/todo/ITodosApiAdapter";
import { IStore } from "../interfaces/store/IStore";


/**
 * TodosService: This is the Application Service Layer.
 * It acts as a bridge between the UI layer and the infrastructure/domain layers.
 */
export class TodosService {
  private adapter: ITodosApiAdapter; // Adapter instance (Infrastructure layer)
  private logic: ITodosLogic; // Domain Logic instance
  private store: IStore;

  /**
   * Constructor: Initializes the service with an adapter and logic.
   * @param adapter - The API Adapter (handles HTTP calls)
   * @param logic - The Domain Logic (handles business rules)
   */
  constructor(adapter: ITodosApiAdapter, logic: ITodosLogic, store: IStore) {
    this.adapter = adapter;
    this.logic = logic;
    this.store = store;
  }

  /**
   * getTodos: Fetches todos from the adapter and applies domain logic.
   * @returns Processed todos after applying business rules.
   */
  async getTodos(filterType: string): Promise<Todo[]> {
    // Step 1: Fetch raw todos from the adapter
    const rawTodos = await this.adapter.fetchTodos();
    // Step 2: Apply domain logic to process the todos
    const processedTodos = this.logic.getAllTodos(rawTodos, filterType);
    // Step 3: Return the processed todos or an empty array
    this.store.setTodos(processedTodos);
    return this.store.todos;
  }

  /**
   * addTodo: Adds a new todo using the adapter and returns the result.
   * @param data - The todo data to be added.
   * @returns The added todo.
   */
  async addTodo(data: { title: string; completed: boolean }): Promise<Todo> {
    // Step 1: Call the adapter to add the todo
    const newTodo = await this.adapter.addTodo(data);

    // Step 2: Return the added todo
    return newTodo;
  }


  async toggleTodo(id: number): Promise<Todo[]> {
    const rawTodos = await this.adapter.toggleTodo(id);
    this.store.setTodos(rawTodos);
    return this.store.todos;
  }

  /**
   * deleteTodo: Deletes a todo by its ID using the adapter.
   * @param id - The ID of the todo to be deleted.
   * @returns The deleted todo or a success response.
   */
  async deleteTodo(id: number): Promise<void> {
    // Call the adapter to delete the todo
    await this.adapter.deleteTodo(id);
  }
}