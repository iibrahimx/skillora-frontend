import { api } from "@/lib/axios";

export const getDepartments = async () => {
  const response = await api.get("/departments/getDepartments");

  return response.data;
};
