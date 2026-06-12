import { api } from "@/lib/axios";

export const getAssignments = async (token: string) => {
  const response = await api.get("/assignments/getAssignments", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
