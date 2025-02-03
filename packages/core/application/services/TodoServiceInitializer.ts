import { TodosLogic } from "../../domain/logic/TodoLogic";
import { todoStoreAdapter } from "../../infrastructure/adapters/features/todoStoreAdapter";
import { AxiosApiAdapter } from "../../infrastructure/adapters/tools/ApiAdapter";
import { AxiosHttpClient } from "../../infrastructure/httpClient/AxiosHttpClient";
import { TodosService } from "./TodosService";


// Step 1: Define Base URL
const BASE_URL = "http://localhost:3000";

// Step 2: Create AxiosHttpClient instance
const httpClient = new AxiosHttpClient(BASE_URL);

// Step 3: Create AxiosApiAdapter instance using the HttpClient
const todosApiAdapter = new AxiosApiAdapter(httpClient);

// Step 4: Create Domain Logic instance
const todosLogic = new TodosLogic();

// Step 5: Create TodosService instance using adapter and logic
export const todosService = new TodosService(
  todosApiAdapter,
  todosLogic,
  todoStoreAdapter
);