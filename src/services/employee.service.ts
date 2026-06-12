import { api } from "@/lib/axios";

export const getEmployees = async () => {
  try {
    const response = await api.get("/users");

    console.log("SUCCESS RESPONSE");
    console.log(response);

    return response.data;
  } catch (error) {
    console.log("ERROR RESPONSE");
    console.log(error);

    throw error;
  }
};
