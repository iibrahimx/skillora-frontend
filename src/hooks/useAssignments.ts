import { useQuery } from "@tanstack/react-query";
import { getAssignments } from "@/services/assignment.service";
import { Assignment } from "@/types/assignment";

interface AssignmentsResponse {
  message: string;
  data: Assignment[];
}

export const useAssignments = () => {
  return useQuery<AssignmentsResponse>({
    queryKey: ["assignments"],
    queryFn: async () => {
      const result = await getAssignments();
      return result;
    },
  });
};
