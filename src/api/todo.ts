import { apiClient } from "./client";

export const createTodoApi = async (data) => {
  return apiClient.post("/todos", data);
};

export const getTodosApi = async () => {
  return apiClient.get(`/todos/`);
};

export const deleteTodoApi = async (id) => {
  return apiClient.delete(`todos/${id}`);
};

export const updateTodoApi = async (id, data) => {
  return apiClient.put(`todos/${id}`, data);
};
