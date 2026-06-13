import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser } from "@/services/user.service";

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      payload,
    }: {
      id: string;
      payload: {
        name?: string;
        email?: string;
        department?: string;
        isActive?: boolean;
      };
    }) => updateUser(id, payload),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
  });
};
