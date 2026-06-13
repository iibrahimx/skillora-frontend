import { api } from "@/lib/axios";

export const getModules = async () => {
  const response = await api.get("/modules/getAllModule");

  return response.data;
};
