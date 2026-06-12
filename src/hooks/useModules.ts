import { useQuery } from "@tanstack/react-query";
import { getModules } from "@/services/module.service";
import { Module } from "@/types/module";

interface ModulesResponse {
  message: string;
  data: Module[];
}

export const useModules = () => {
  return useQuery<ModulesResponse>({
    queryKey: ["modules"],
    queryFn: async () => {
      const result = await getModules();
      return result;
    },
  });
};
