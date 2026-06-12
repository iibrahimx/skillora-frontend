import { useQuery } from "@tanstack/react-query";
import { getDepartments } from "@/services/department.service";
import { Department } from "@/types/department";

interface DepartmentsResponse {
  message: string;
  data: Department[];
}

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZhMjkzZjM3MTQyZWI0OWU3ZWFkMDcwNiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc4MTI4MDA0MSwiZXhwIjoxNzgxMzIzMjQxfQ.ZfZItysGaqHGviVEefF9Fy3x0cjo3NQXufoHR-slrUQ";

export const useDepartments = () => {
  return useQuery<DepartmentsResponse>({
    queryKey: ["departments"],
    queryFn: async () => {
      const result = await getDepartments(TOKEN);
      return result;
    },
  });
};
