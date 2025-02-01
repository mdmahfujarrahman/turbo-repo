import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * HttpClient is a wrapper around Axios to handle HTTP requests.
 * This class abstracts Axios methods for consistency and reusability.
 */
export class AxiosHttpClient {
  private client: AxiosInstance; // Encapsulated Axios instance for request handling.

  /**
   * Constructor initializes the Axios instance with a base URL and default headers.
   * @param {string} baseURL - The base URL for all HTTP requests.
   */
  constructor(baseURL: string) {
    this.client = axios.create({
      baseURL,
      headers: { "Content-Type": "application/json" }, // Default headers for requests.
    });
  }

  /**
   * Sends a GET request to the given URL with optional configuration.
   * @template T - The type of data expected in the response.
   * @param {string} url - The endpoint for the GET request.
   * @param {AxiosRequestConfig} [config] - Optional Axios request configuration.
   * @returns {Promise<AxiosResponse<T>>} - The HTTP response containing data of type T.
   */
  async get<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.client.get<T>(url, config);
  }

  /**
   * Sends a POST request to the given URL with data and optional configuration.
   * @template T - The type of data expected in the response.
   * @param {string} url - The endpoint for the POST request.
   * @param {unknown} data - The payload to send with the request.
   * @param {AxiosRequestConfig} [config] - Optional Axios request configuration.
   * @returns {Promise<AxiosResponse<T>>} - The HTTP response containing data of type T.
   */
  async post<T>(
    url: string,
    data: unknown,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.client.post<T>(url, data, config);
  }

  /**
   * Sends a PUT request to the given URL with data and optional configuration.
   * @template T - The type of data expected in the response.
   * @param {string} url - The endpoint for the PUT request.
   * @param {unknown} data - The payload to update the resource.
   * @param {AxiosRequestConfig} [config] - Optional Axios request configuration.
   * @returns {Promise<AxiosResponse<T>>} - The HTTP response containing data of type T.
   */
  async put<T>(
    url: string,
    data: unknown,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.client.put<T>(url, data, config);
  }

  /**
   * Sends a DELETE request to the given URL with optional configuration.
   * @template T - The type of data expected in the response.
   * @param {string} url - The endpoint for the DELETE request.
   * @param {AxiosRequestConfig} [config] - Optional Axios request configuration.
   * @returns {Promise<AxiosResponse<T>>} - The HTTP response containing data of type T.
   */
  async delete<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.client.delete<T>(url, config);
  }
}