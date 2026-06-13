import { api } from "@/lib/axios";
import { AnalyticsResponse } from "@/types/analytics";

export const analyticsService = {
  async getOverview(): Promise<AnalyticsResponse> {
    const response = await api.get("/analytics/overview");

    return response.data;
  },
};
