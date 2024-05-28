import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://shortner-api.tottadev.com.br",
  headers: {
    Accept: "application/json",
  },
});

export const checkHealth = async () => {
  const response = await apiClient.get("/health");
  return response.data;
};
