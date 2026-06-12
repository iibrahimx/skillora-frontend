import { useQuery } from "@tanstack/react-query";
import { getUserDashboardProgress } from "@/services/progress.service";

export const useProgress = (userId: string) => {
  return useQuery({
    queryKey: ["progress", userId],
    queryFn: () => getUserDashboardProgress(userId),
    enabled: !!userId,
  });
};
