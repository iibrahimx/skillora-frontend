import { useQuery } from "@tanstack/react-query";
import { getUsers } from "@/services/user.service";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZhMjkzZjM3MTQyZWI0OWU3ZWFkMDcwNiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc4MTI0NjA5OSwiZXhwIjoxNzgxMjg5Mjk5fQ.bPTTcJ7x7vGiVGOTvwQgRFOfz8oNW8efsUmJ2h1j6rU";

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const result = await getUsers(TOKEN);
      return result;
    },
  });
};
