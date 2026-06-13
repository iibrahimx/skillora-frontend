import { api } from "@/lib/axios";

export const getAssignments = async () => {
  const response = await api.get("/assignments/getAssignments");

  return response.data;
};
