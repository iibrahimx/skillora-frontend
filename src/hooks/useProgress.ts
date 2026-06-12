import { useQuery } from "@tanstack/react-query";
import { getUserDashboardProgress } from "@/services/progress.service";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZhMjkzZjM3MTQyZWI0OWU3ZWFkMDcwNiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc4MTI5MzAwNywiZXhwIjoxNzgxMzM2MjA3fQ.m-0apPHfHGc1SZ2lsBE5vugMqrSYv9Y-jOJuiGJWuk0";

export const useProgress = (userId: string) => {
  return useQuery({
    queryKey: ["progress", userId],
    queryFn: () => getUserDashboardProgress(userId, TOKEN),
    enabled: !!userId,
  });
};
