import { api } from "@/lib/axios";

export const getDepartments = async (token: string) => {
  const response = await api.get("/departments/getDepartments", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
