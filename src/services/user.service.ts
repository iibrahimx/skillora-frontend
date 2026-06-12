import { api } from "@/lib/axios";

export const getUsers = async () => {
  const response = await api.get("/users/getUsers");

  return response.data;
};
