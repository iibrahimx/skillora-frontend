import { useQuery } from "@tanstack/react-query";
import { getModules } from "@/services/module.service";
import { Module } from "@/types/module";

interface ModulesResponse {
  message: string;
  data: Module[];
}

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZhMjkzZjM3MTQyZWI0OWU3ZWFkMDcwNiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc4MTI4ODg3NCwiZXhwIjoxNzgxMzMyMDc0fQ.Oxw_6iYz1Fr8MPLJXdPFMnCC1-mxCSCZulEb1p4zKF8";

export const useModules = () => {
  return useQuery<ModulesResponse>({
    queryKey: ["modules"],
    queryFn: async () => {
      const result = await getModules(TOKEN);
      return result;
    },
  });
};
