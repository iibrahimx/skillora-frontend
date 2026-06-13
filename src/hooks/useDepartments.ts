import { useQuery } from "@tanstack/react-query";
import { getDepartments } from "@/services/department.service";
import { Department } from "@/types/department";

interface DepartmentsResponse {
  message: string;
  data: Department[];
}

export const useDepartments = () => {
  return useQuery<DepartmentsResponse>({
    queryKey: ["departments"],
    queryFn: async () => {
      const result = await getDepartments();
      return result;
    },
  });
};
