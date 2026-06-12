import { useQuery } from "@tanstack/react-query";
import { getDepartments } from "@/services/department.service";
import { Department } from "@/types/department";

interface DepartmentsResponse {
  message: string;
  data: Department[];
}

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZhMjkzZjM3MTQyZWI0OWU3ZWFkMDcwNiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc4MTI5MzAwNywiZXhwIjoxNzgxMzM2MjA3fQ.m-0apPHfHGc1SZ2lsBE5vugMqrSYv9Y-jOJuiGJWuk0";

export const useDepartments = () => {
  return useQuery<DepartmentsResponse>({
    queryKey: ["departments"],
    queryFn: async () => {
      const result = await getDepartments(TOKEN);
      return result;
    },
  });
};
