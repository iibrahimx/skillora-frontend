import { api } from "@/lib/axios";

export const getModules = async (token: string) => {
  const response = await api.get("/modules/getAllModule", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
