import { api } from "@/lib/axios";

export const getUserDashboardProgress = async (userId: string) => {
  const response = await api.get(`/progress/dashboard/${userId}`);

  return response.data;
};
