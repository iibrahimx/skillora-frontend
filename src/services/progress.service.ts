import { api } from "@/lib/axios";

export const getUserDashboardProgress = async (
  userId: string,
  token: string
) => {
  const response = await api.get(`/progress/dashboard/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
