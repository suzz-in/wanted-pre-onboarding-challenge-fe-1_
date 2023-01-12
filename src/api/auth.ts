import { apiClient } from "./client";

export const signUpApi = async (data : any) => {
  return apiClient.post("/users/create", data);
};

export const loginApi = async (data :any) => {
  return apiClient.post("/users/login", data);
};
