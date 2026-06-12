import { api } from "@/lib/axios";

export const getUsers = async (token: string) => {
  const response = await api.get("/users/getUsers", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
