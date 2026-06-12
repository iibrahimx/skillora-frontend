import { useQuery } from "@tanstack/react-query";
import { getDepartments } from "@/services/department.service";
import { Department } from "@/types/department";

interface DepartmentsResponse {
  message: string;
  data: Department[];
}

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZhMjkzZjM3MTQyZWI0OWU3ZWFkMDcwNiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc4MTI4ODg3NCwiZXhwIjoxNzgxMzMyMDc0fQ.Oxw_6iYz1Fr8MPLJXdPFMnCC1-mxCSCZulEb1p4zKF8";

export const useDepartments = () => {
  return useQuery<DepartmentsResponse>({
    queryKey: ["departments"],
    queryFn: async () => {
      const result = await getDepartments(TOKEN);
      return result;
    },
  });
};
