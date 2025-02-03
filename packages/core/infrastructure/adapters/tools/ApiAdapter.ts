import { ITodosApiAdapter } from "../../../application/interfaces/features/todo/ITodosApiAdapter";
import { AxiosHttpClient } from "../../httpClient/AxiosHttpClient";
import TodosData from "../../../todos.json"
import { Todo } from "../../../domain/interfaces/Todo";


/**
 * ApiAdapter acts as a bridge between the HttpClient and the IApi rules.
 * It translates abstract methods into HTTP calls using the HttpClient.
 */
export class AxiosApiAdapter implements ITodosApiAdapter {
  private httpClient: AxiosHttpClient;

  /**
   * Constructor accepts a pre-configured HttpClient instance.
   * @param {HttpClient} httpClient - An instance of the HttpClient for making API requests.
   */
  constructor(axiosHttpClient: AxiosHttpClient) {
    this.httpClient = axiosHttpClient;
  }

  /**
   * Fetches all TODOs from the API.
   * @returns {Promise<Todo[]>} - A promise resolving to an array of Todo objects.
   */
  async fetchTodos(): Promise<Todo[]> {
    return await this.httpClient.get<Todo[]>("/todos").then((res) => res.data);
  }

  async fetchTodo(id: number): Promise<Todo> {
    return await this.httpClient.get<Todo>(`/todos/${id}`).then((res) => res.data);
  }

  /**
   * Adds a new TODO via the API.
   * @param {{ title: string; completed: boolean }} data - The TODO object to create.
   * @returns {Promise<Todo>} - A promise resolving to the created Todo object.
   */
  async addTodo(data: { title: string; completed: boolean }): Promise<Todo> {
    const newTodo = {
      id: TodosData.length + 1,
      title: data.title,
      completed: data.completed,
    };
    // TodosData.push(newTodo);
    // return newTodo;
    return await this.httpClient
      .post<Todo>("/todos", data)
      .then((res) => res.data);
  }

  async toggleTodo(id: number): Promise<Todo[]> {

    const fetchTodo = await this.fetchTodo(id)

    await this.httpClient.put(`/todos/${id}`, {
      id: fetchTodo?.id,
      title: fetchTodo.title,
      completed: !fetchTodo.completed
    })

    return await this.httpClient.get<Todo[]>("/todos").then((res) => res.data);
      
  }


  /**
   * Deletes a TODO by its ID via the API.
   * @param {number} id - The ID of the TODO to delete.
   * @returns {Promise<void>} - A promise resolving when the TODO is deleted.
   */
  async deleteTodo(id: number): Promise<void> {
    await this.httpClient.delete<void>(`/todos/${id}`);
  }
}