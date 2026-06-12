import { useQuery } from "@tanstack/react-query";
import { getAssignments } from "@/services/assignment.service";
import { Assignment } from "@/types/assignment";

interface AssignmentsResponse {
  message: string;
  data: Assignment[];
}

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZhMjkzZjM3MTQyZWI0OWU3ZWFkMDcwNiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc4MTI5MzAwNywiZXhwIjoxNzgxMzM2MjA3fQ.m-0apPHfHGc1SZ2lsBE5vugMqrSYv9Y-jOJuiGJWuk0";

export const useAssignments = () => {
  return useQuery<AssignmentsResponse>({
    queryKey: ["assignments"],
    queryFn: async () => {
      const result = await getAssignments(TOKEN);
      return result;
    },
  });
};
