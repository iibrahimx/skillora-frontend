import { useQuery } from "@tanstack/react-query";
import { analyticsService } from "@/services/analytics.service";
import { AnalyticsResponse } from "@/types/analytics";

export function useAnalytics() {
  return useQuery<AnalyticsResponse>({
    queryKey: ["analytics-overview"],
    queryFn: analyticsService.getOverview,
  });
}
