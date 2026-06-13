import { api } from "@/lib/axios";
import { LoginResponse } from "@/types/auth";

export const loginUser = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  const response = await api.post("/auth/login", {
    email,
    password,
  });

  return response.data;
};
