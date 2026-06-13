import { api } from "@/lib/axios";

export interface CreateUserPayload {
  name: string;
  email: string;
  password: string;
  role: string;
  department: string;
}

export interface UpdateUserPayload {
  name?: string;
  email?: string;
  department?: string;
  isActive?: boolean;
}

export const getUsers = async () => {
  const response = await api.get("/users/getUsers");

  return response.data;
};

export const getUserById = async (id: string) => {
  const response = await api.get(`/users/getUserById/${id}`);

  return response.data;
};

export const createUser = async (payload: CreateUserPayload) => {
  const response = await api.post("/auth/register", payload);

  return response.data;
};

export const updateUser = async (id: string, payload: UpdateUserPayload) => {
  const response = await api.put(`/users/updateUser/${id}`, payload);

  return response.data;
};
