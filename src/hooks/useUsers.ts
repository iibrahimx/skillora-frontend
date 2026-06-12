import { useQuery } from "@tanstack/react-query";
import { getUsers } from "@/services/user.service";
import { User } from "@/types/user";

interface UsersResponse {
  message: string;
  users: User[];
}

export const useUsers = () => {
  return useQuery<UsersResponse>({
    queryKey: ["users"],
    queryFn: async () => {
      const result = await getUsers();
      return result;
    },
  });
};
