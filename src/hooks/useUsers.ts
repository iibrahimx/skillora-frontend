import { useQuery } from "@tanstack/react-query";
import { getUsers } from "@/services/user.service";
import { User } from "@/types/user";

interface UsersResponse {
  message: string;
  users: User[];
}

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZhMjkzZjM3MTQyZWI0OWU3ZWFkMDcwNiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc4MTI5MzAwNywiZXhwIjoxNzgxMzM2MjA3fQ.m-0apPHfHGc1SZ2lsBE5vugMqrSYv9Y-jOJuiGJWuk0";

export const useUsers = () => {
  return useQuery<UsersResponse>({
    queryKey: ["users"],
    queryFn: async () => {
      const result = await getUsers(TOKEN);
      return result;
    },
  });
};
