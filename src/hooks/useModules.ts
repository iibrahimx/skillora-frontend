import { useQuery } from "@tanstack/react-query";
import { getModules } from "@/services/module.service";
import { Module } from "@/types/module";

interface ModulesResponse {
  message: string;
  data: Module[];
}

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZhMjkzZjM3MTQyZWI0OWU3ZWFkMDcwNiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc4MTI5MzAwNywiZXhwIjoxNzgxMzM2MjA3fQ.m-0apPHfHGc1SZ2lsBE5vugMqrSYv9Y-jOJuiGJWuk0";

export const useModules = () => {
  return useQuery<ModulesResponse>({
    queryKey: ["modules"],
    queryFn: async () => {
      const result = await getModules(TOKEN);
      return result;
    },
  });
};
